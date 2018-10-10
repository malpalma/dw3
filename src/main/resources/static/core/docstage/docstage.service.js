'use strict';

angular.
  module('core.docStage').
  factory('DocStage', ['$resource',
    function($resource) {
	  var DocStage = {};
	  
	  DocStage.getStages = function() {
		  return $resource('http://localhost:8080/getStages/:docId');
	  };
	  
	  DocStage.initDocWF = function() {
		  return $resource('http://localhost:8080/initDocWF/:docId');
	  };
	  
	  DocStage.saveStage = function() {
		  return $resource('http://localhost:8080/saveStage/:docId');
	  };
	  
      return DocStage;
    }
  ]);
