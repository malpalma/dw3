'use strict';

angular.module('userDetail')
  .component('userDetail', {
	  templateUrl: 'components/user-detail/user-detail.template.html',
	  controller: ['$routeParams', 'User', 'Authentication', 'Toast', '$translate', 
		  		function UserDetailController($routeParams, User, Authentication, Toast, $translate) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  
		  if($routeParams.id == 0) {
			  self.user = {};
		  } else {
			  self.user = User.getUser().get({id: $routeParams.id});
		  }
		  
		  self.saveUser = function() {
			  var result = User.saveUser().save(self.user);
			  result.$promise
			  	.then(function() {
			  		window.location.replace('#!/users');
			  		Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
			  	})
			  	.catch(function() {
			  		console.log('catch:');
			  		console.log(result);
			  		Toast.showErrorToast($translate.instant('ERROR'));
			  	})
		  }
	  }]
  });
