'use strict';

angular.
  module('core.user').
  factory('User', ['$resource',
    function($resource) {
	  var User = {};
	  
	  User.getUsers = function () {
		  return $resource('/getUsers');
	  };
	  
	  User.getUsersByPerm = function() {
		  return $resource('/getUsers/:perm');
	  };
	  
	  User.getUser = function() {
		  return $resource('/getUser/:id');
	  };
	  
	  User.saveUser = function() {
		  return $resource('/saveUser');
	  };
	  
	  User.setNewPassword = function() {
		  return $resource('/setNewPassword/:id');
	  };
	  
	  User.deleteUser = function() {
		  return $resource('/deleteUser/:id');
	  };
	  
	  return User;
    }
  ]);
