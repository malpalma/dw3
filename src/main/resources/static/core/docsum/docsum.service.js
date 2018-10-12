'use strict';

angular.
  module('core.docSum').
  factory('DocSum', ['$resource',
    function($resource) {
      var DocSum = {};
      
      DocSum.getSums = function() {
    	  return $resource('/getSums/:docId');
      };
      
	  return DocSum;
    }
  ]);
