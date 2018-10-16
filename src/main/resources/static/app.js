'use strict';

angular.module('myApp', [
  'ngRoute',
  'ngTable',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial',
  'ngCookies',
  'core',
  'documentList',
  'documentDetail',
  'documentHeader',
  'docItemList',
  'docItemDetail',
  'docSumList',
  'docStageList',
  'docStageDetail',
  'contractorList',
  'contractorDetail',
  'userList',
  'userDetail',
  'paramList',
  'paramDetail',
  'authenticationToolbar',
  'myApp.version'
])
.config([
	'$locationProvider', 
	'$routeProvider', 
	'$httpProvider', 
	'$translateProvider', 
	'$mdThemingProvider', 
	function($locationProvider, $routeProvider, $httpProvider, $translateProvider, $mdThemingProvider) {
		  
		$locationProvider.hashPrefix('!');
		  $httpProvider.defaults.withCredentials = true;
		  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		  
		  $mdThemingProvider
		    .theme('default')
		    .primaryPalette('blue')
		    .accentPalette('indigo')
		    .warnPalette('purple')
		    .backgroundPalette('grey');
		  $mdThemingProvider
		    .theme('docs-dark');
		  
		  $mdThemingProvider
		    .setDefaultTheme('default');
		  
		  $routeProvider
		    .when('/documents', {
		    	template: '<document-list></document-list>'
		    })
		    .when('/documents/:id', {
		    	template: '<document-detail></document-detail>'
		    })
		    .when('/docitems/:docId', {
		    	template: '<doc-item-list></doc-item-list>'
		    })
		    .when('/docitems/:id/docid/:docId', {
		    	template: '<doc-item-detail></doc-item-detail>'
		    })
		    .when('/docsums/:docId', {
		    	template: '<doc-sum-list></doc-sum-list>'
		    })
//		    .when('/attachments/:docId', {
//		    	template: '<attachment-list></attachment-list>'
//		    })
		    .when('/docstages/:docId', {
		    	template: '<doc-stage-list></doc-stage-list>'
		    })
		    .when('/docstages/:docId/action/:action', {
		    	template: '<doc-stage-detail></doc-stage-detail>'
		    })
		    .when('/contractors', {
		    	template: '<contractor-list></contractor-list>'
		    })
		    .when('/contractors/:id', {
		    	template: '<contractor-detail></contractor-detail>'
		    })
		    .when('/users', {
		    	template: '<user-list></user-list>'
		    })
		    .when('/users/:id', {
		    	template: '<user-detail></user-detail>'
		    })
		    .when('/params/:type', {
		    	template: '<param-list></param-list>'
		    })
		    .when('/params/:type/id/:id', {
		    	template: '<param-detail></param-detail>'
		    })
		    .otherwise('/documents');
}])
.run(['$http', '$cookies', function($http, $cookies) {
	$http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
}]);
