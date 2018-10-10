'use strict';

angular.module('authenticationToolbar')
  .component('authenticationToolbar', {
	  templateUrl: 'components/authentication-toolbar/authentication-toolbar.template.html',
	  controller: ['Authentication', '$mdDialog', '$scope', '$mdToast', function AuthenticationToolbarController(Authentication, $mdDialog, $scope, $mdToast) {
		  var self = this;
		  self.Authentication = Authentication;
//		  self.Authentication.credentials.username = "super";
		  
		  self.openLoginDialog = function($event) {
			  $mdDialog.show({
				  clickOutsideToClose: true,
				  scope: $scope,
				  preserveScope: true,
				  templateUrl: 'components/authentication-toolbar/authentication-dialog.template.html',
				  controller: function AuthenticationDialogController($scope, $mdDialog) {
//					  $scope.closeDialog = function() {
//						  $mdDialog.hide();
//					  }
				  }
//				  parent: angular.element(document.body),
//				  targetEvent: $event,
			  });
		  };
		  
		  self.closeDialog = function() {
			  $mdDialog.cancel();
		  };
		  
		  self.login = function() {
//			  console.log('login');
//			  console.log(self.Authentication);
			  self.Authentication.login();
			  $mdDialog.hide();
		  };

		  self.logout = function() {
			  self.Authentication.logout();
		  };
	  }]
  });