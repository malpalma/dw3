'use strict';

angular.
  module('core.docSum').
  factory('DocSum', ['$resource',
    function($resource) {
      var DocSum = {};
      
      DocSum.getSums = function() {
    	  return $resource('http://localhost:8080/getSums/:docId');
      };
      
	  return DocSum;
    }
  ]);
