'use strict';

angular
  .module('core.authentication')
    .factory('Authentication', ['$resource', '$http', function($resource, $http) {
    	var Authentication = {};
    	
    	Authentication.error = false;
    	Authentication.session = {};
    	Authentication.credentials = {};
    	Authentication.authenticated = false;
    	
    	Authentication.enableEdit = false;
    	
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
    		var result = Authentication.authenticate().get();
    		result.$promise
    		.then(function() {
    			Authentication.setSession(result);
    			Authentication.authenticated = true;
    			Authentication.enableEdit = (Authentication.session.canEdit == 'true');
    			console.log('zalogowany');
    		})
    		.catch(function() {
    			Authentication.credentials = {};
    			console.log('nie zalogowany');
    		});
    	};
    	
    	Authentication.logout = function() {
    		var Logout = $resource('/logout');
    		var result = Logout.save();
    		result.$promise.then(function() {
    			Authentication.authenticated = false;
    			Authentication.credentials = {};
    			Authentication.enableEdit = false;
    			var session = Authentication.userSession().get(); 
    			session.$promise.then(function() {
    				Authentication.setSession(session);
    			})
    		})
    	};

    	return Authentication;
    }]); 
    		