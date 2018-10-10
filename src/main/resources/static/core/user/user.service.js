'use strict';

angular.
  module('core.user').
  factory('User', ['$resource',
    function($resource) {
	  var User = {};
	  
	  User.getUsers = function () {
		  return $resource('http://localhost:8080/getUsers');
	  };
	  
	  User.getUsersByPerm = function() {
		  return $resource('http://localhost:8080/getUsers/:perm');
	  };
	  
	  User.getUser = function() {
		  return $resource('http://localhost:8080/getUser/:id');
	  };
	  
	  User.saveUser = function() {
		  return $resource('http://localhost:8080/saveUser');
	  };
	  
	  User.setNewPassword = function() {
		  return $resource('http://localhost:8080/setNewPassword/:id');
	  };
	  
	  User.deleteUser = function() {
		  return $resource('http://localhost:8080/deleteUser/:id');
	  };
	  
	  return User;
    }
  ]);
