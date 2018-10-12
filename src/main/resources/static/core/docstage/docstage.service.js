'use strict';

angular.
  module('core.docStage').
  factory('DocStage', ['$resource',
    function($resource) {
	  var DocStage = {};
	  
	  DocStage.getStages = function() {
		  return $resource('/getStages/:docId');
	  };
	  
	  DocStage.initDocWF = function() {
		  return $resource('/initDocWF/:docId');
	  };
	  
	  DocStage.saveStage = function() {
		  return $resource('/saveStage/:docId');
	  };
	  
      return DocStage;
    }
  ]);
