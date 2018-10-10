'use strict';

angular.
  module('core.param').
  factory('Param', ['$resource',
    function($resource) {
	  var Param = {};
	  
	  Param.getParams = function() {
		  return $resource('http://localhost:8080/getParams/:type');
	  };
	  
	  Param.getParam = function() {
		  return $resource('http://localhost:8080/getParam/:id');
	  };
	  
	  Param.saveParam = function() {
		  return $resource('http://localhost:8080/saveParam');
	  };
	  
	  Param.deleteParam = function() {
		  return $resource('http://localhost:8080/deleteParam/:id');
	  };
	  
	  Param.getParamByDescr = function() {
		  return $resource('http://localhost:8080/getParamByDescr/:type');
	  };
	  
      return Param;
    }
  ]);
