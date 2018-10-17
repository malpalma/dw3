'use strict';

angular.module('userDetail')
  .component('userDetail', {
	  templateUrl: 'components/user-detail/user-detail.template.html',
	  controller: ['$routeParams', 'User', 'Authentication', 'Toast', '$translate', '$window',
		  		function UserDetailController($routeParams, User, Authentication, Toast, $translate, $window) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  self.$window = $window;
		  
		  if($routeParams.id == 0) {
			  self.user = {};
			  // can not be null in database
			  self.user.active = false;
			  self.user.canEdit = false;
			  self.user.canAccept = false;
			  self.user.isAdmin = false;
		  } else {
			  self.user = User.getUser().get({id: $routeParams.id});
			  if(!self.Authentication.authenticated) {
				  Toast.showToast($translate.instant('READ_ONLY') + '. ' + $translate.instant('NOT_LOGGED_IN_INFO'));
			  } else {
				  if(!self.Authentication.enableEdit) {
					  Toast.showToast($translate.instant('READ_ONLY') + '. ' + $translate.instant('NO_EDIT_PERMISSION'));
				  }
			  }
		  }
		  
		  self.saveUser = function() {
			  User.saveUser().save(self.user)
			  	.$promise
			  		.then(function(response) {
			  			window.location.replace('#!/users');
			  			Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in userDetail component, User.saveUser().save(self.user):');
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		})
		  }
	  }]
  });
