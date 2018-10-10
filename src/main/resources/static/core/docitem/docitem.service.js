'use strict';

angular.
  module('core.docItem')
  .factory('DocItem', ['$resource',
    function($resource) {
	  var DocItem = {};
	  
	  DocItem.getItems = function() {
		  return $resource('/getItems/:docId');
	  };
	  
	  DocItem.getItem = function() {
		  return $resource('/getItem/:id');
	  };
	  
	  DocItem.saveItem = function() {
		  return $resource('/saveItem/:docId');
	  };
	  
	  DocItem.deleteItem = function() {
		  return $resource('/deleteItem/:id');
	  };
	  
	  DocItem.existItemsByTR = function() {
		  return $resource('/existItemsByTR');
	  };
	  
	  DocItem.existItemsByUT = function() {
		  return $resource('/existItemsByUT');
	  };
	  
      return DocItem;
    }
  ]);
