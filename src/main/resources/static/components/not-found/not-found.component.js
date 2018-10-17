'use strict';

angular.module('notFound')
  .component('notFound', {
	  templateUrl: 'components/not-found/not-found.template.html',
	  controller: ['$routeParams', 'Toast', '$translate', 
		  		function NotFoundController($routeParams, Toast, $translate) {
		  var self = this;
		  
		  self.Toast = Toast;
		  
	  }]
  });
