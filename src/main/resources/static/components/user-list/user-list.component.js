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
			  User.getUsers().query()
			  	.$promise
			  		.then(function(response) {
			  			self.users = new NgTableParams(
			  								{sorting: {name: "asc"}}, 
			  								{dataset: response});
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in userList component, User.getUsers().query():');
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		})
		  };
		  
		  self.deleteUser = function(id) {
			  var confirm = $mdDialog.confirm()
			  					.title($translate.instant('CONFIRM_DELETING_TITLE'))
			  					.textContent($translate.instant('CONFIRM_DELETING_USER_TEXT_CONTENT'))
			  					.ok($translate.instant('CONFIRM_OK_LABEL'))
			  					.cancel($translate.instant('CONFIRM_CANCEL_LABEL'));
			  $mdDialog.show(confirm).then(function() {
				  User.deleteUser().delete({id: id})
				  	.$promise
				  		.then(function(response) {
				  			self.getUsers();
				  			Toast.showToast($translate.instant('DELETE_TOAST_TEXT_CONTENT'));
				  		})
				  		.catch(function(reason) {
				  			console.log('CATCH in userList component, User.deleteUser().delete({id: id}):');
				  			console.log(reason);
				  			Toast.showErrorToast($translate.instant('ERROR'));
				  		})
			  })
		  };
		  
		  self.getUsers();
	  }]
  });
