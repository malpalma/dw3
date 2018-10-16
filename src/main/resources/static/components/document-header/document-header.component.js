'use strict';

angular.module('documentHeader')
  .component('documentHeader', {
	  templateUrl: 'components/document-header/document-header.template.html',
	  controller: ['$routeParams', 'Document',
		  	function DocumentHeaderController($routeParams, Document) {
		  var self = this;
		  
		  self.docId = $routeParams.docId;
		  self.document = Document.getDocument().get({id: self.docId});
		  
	  }]
  });
