'use strict';

angular
  .module('core.authentication')
    .factory('Authentication', ['$resource', '$http', 'Toast', '$translate', function($resource, $http, Toast, $translate) {
    	var Authentication = {};
    	
    	Authentication.error = false;
    	Authentication.session = {};
    	Authentication.credentials = {};
    	Authentication.authenticated = false;
    	
    	Authentication.enableEdit = false;
    	Authentication.enableAccept = false;
    	
    	Authentication.credentials.username = 'super';
    	Authentication.credentials.password = 'superPwd';
    	
    	Authentication.authenticate = function() {
    		if(Authentication.credentials.username != null) {
        		$http.defaults.headers.common['Authorization'] = 'Basic ' + btoa(Authentication.credentials.username + ':' + Authentication.credentials.password);
    		}
    		return $resource('/authenticate', 
    				{}, 
    				{get: {
    					method: 'GET',
    					params: {},
    					isArray: false
    				}});
    	};
    	
    	Authentication.userSession = function() {
    		return $resource('/userSession');
    	};

    	Authentication.setSession = function(data) {
    		Authentication.session = data;
    	};
    	
    	Authentication.login = function() {
    		Authentication.authenticate().get()
    			.$promise
    				.then(function(response) {
    					Authentication.setSession(response);
    					Authentication.authenticated = true;
    					Authentication.enableEdit = (Authentication.session.canEdit == 'true');
    					Authentication.enableAccept = (Authentication.session.canAccept == 'true');
    					Toast.showToast($translate.instant('LOGIN_SUCCESS'));
    				})
    				.catch(function(reason) {
    					Authentication.credentials = {};
    					console.log('CATCH in Authentication service, Authentication.authenticate().get():');
    					console.log(reason);
    					Toast.showErrorToast($translate.instant('LOGIN_ERROR'));
    				});
    		};
    	
    	Authentication.logout = function() {
    		var Logout = $resource('/logout');
    		Logout.save()
    			.$promise
    				.then(function(response) {
    					Authentication.authenticated = false;
    					Authentication.credentials = {};
    					Authentication.enableEdit = false;
    					Authentication.enableAccept = false;
    					Authentication.userSession().get()
    						.$promise
    							.then(function(response) {
    								Authentication.setSession(response);
    								Toast.showToast($translate.instant('LOGOUT_SUCCESS'));
    							})
    				})
    				.catch(function(reason) {
    					console.log('CATCH in Authentication service, Logout.save():');
    					console.log(reason);
    					Toast.showErrorToast($translate.instant('LOGOUT_ERROR'));
    				})
    	};

    	return Authentication;
    }]); 
    		