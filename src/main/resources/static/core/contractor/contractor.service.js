'use strict';

angular.
  module('core.contractor').
  factory('Contractor', ['$resource',
    function($resource) {
	  var Contractor = {};
	  
	  Contractor.getContractors = function() {
		  return $resource('/getContractors');
	  };
	  
	  Contractor.getContractor = function() {
		  return $resource('/getContractor/:id');
	  };
	  
	  Contractor.saveContractor = function() {
		  return $resource('/saveContractor');
	  };
	  
	  Contractor.deleteContractor = function() {
		  return $resource('/deleteContractor/:id');
	  };
	  
	  return Contractor;
    }
  ]);
