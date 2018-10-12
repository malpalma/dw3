'use strict';

angular.
  module('core.param').
  factory('Param', ['$resource',
    function($resource) {
	  var Param = {};
	  
	  Param.getParams = function() {
		  return $resource('/getParams/:type');
	  };
	  
	  Param.getParam = function() {
		  return $resource('/getParam/:id');
	  };
	  
	  Param.saveParam = function() {
		  return $resource('/saveParam');
	  };
	  
	  Param.deleteParam = function() {
		  return $resource('/deleteParam/:id');
	  };
	  
	  Param.getParamByDescr = function() {
		  return $resource('/getParamByDescr/:type');
	  };
	  
      return Param;
    }
  ]);
