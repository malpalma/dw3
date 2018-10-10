'use strict';

angular.module('userList')
  .component('userList', {
	  templateUrl: 'components/user-list/user-list.template.html',
	  controller: ['User', 'NgTableParams', 'Authentication', 'Toast', '$translate', '$mdDialog', 
		  	function UserListController(User, NgTableParams, Authentication, Toast, $translate, $mdDialog) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  
		  self.getUsers = function() {
			  var queryResult = User.getUsers().query();
			  queryResult.$promise.then(function() {
				  self.users = new NgTableParams({}, {dataset: queryResult});
			  })
		  };
		  
		  self.deleteUser = function(id) {
			  var confirm = $mdDialog.confirm()
			  					.title($translate.instant('CONFIRM_DELETING_TITLE'))
			  					.textContent($translate.instant('CONFIRM_DELETING_USER_TEXT_CONTENT'))
			  					.ok($translate.instant('CONFIRM_OK_LABEL'))
			  					.cancel($translate.instant('CONFIRM_CANCEL_LABEL'));
			  $mdDialog.show(confirm).then(function() {
				  var result = User.deleteUser().delete({id: id});
				  result.$promise
				  	.then(function() {
				  		self.getUsers();
				  		Toast.showToast($translate.instant('DELETE_TOAST_TEXT_CONTENT'));
				  	})
				  	.catch(function() {
				  		console.log('catch:');
				  		console.log(result);
				  		Toast.showErrorToast($translate.instant('ERROR'));
				  	})
			  })
		  };
		  
		  self.getUsers();
	  }]
  });
