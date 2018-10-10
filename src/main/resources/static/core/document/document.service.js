'use strict';

angular.module('core.document')
  .factory('Document', ['$resource',
    function($resource) {
	  var Document = {};
	  
	  Document.getDocuments = function() {
		  return $resource('/getDocuments');
	  };
	  
	  Document.getDocument = function() {
		  return $resource('/getDocument/:id');
	  };
	  
	  Document.getDocStatus = function() {
		  return $resource('/getDocStatus/:id');
	  };
	  
	  Document.getDocUser = function() {
		  return $resource('/getDocUser/:id');
	  };
	  
	  Document.saveDocument = function() {
		  return $resource('/saveDocument');
	  };
	  
	  Document.deleteDocument = function() {
		  return $resource('/deleteDocument/:id');
	  };
	  
	  Document.existDocsByContractorData = function() {
		  return $resource('/existDocsByContractorData');
	  };
	  
	  Document.existDocsByPM = function() {
		  return $resource('/existDocsByPM');
	  };
	  
      return Document;
    }
  ]);
