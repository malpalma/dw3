'use strict';

angular.module('authenticationToolbar')
  .component('authenticationToolbar', {
	  templateUrl: 'components/authentication-toolbar/authentication-toolbar.template.html',
	  controller: ['Authentication', '$mdDialog', '$scope', '$mdToast', function AuthenticationToolbarController(Authentication, $mdDialog, $scope, $mdToast) {
		  var self = this;
		  self.Authentication = Authentication;
		  
		  self.openLoginDialog = function($event) {
			  $mdDialog.show({
				  clickOutsideToClose: true,
				  scope: $scope,
				  preserveScope: true,
				  templateUrl: 'components/authentication-toolbar/authentication-dialog.template.html',
				  controller: function AuthenticationDialogController($scope, $mdDialog) {
				  }
			  });
		  };
		  
		  self.closeDialog = function() {
			  $mdDialog.cancel();
		  };
		  
		  self.login = function() {
			  self.Authentication.login();
			  $mdDialog.hide();
		  };

		  self.logout = function() {
			  self.Authentication.logout();
		  };
	  }]
  });