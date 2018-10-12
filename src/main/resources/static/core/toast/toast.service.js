'use strict';

angular
	.module('core.toast')
		.factory('Toast', ['$mdToast', function($mdToast) {
			var Toast = {};
			
			Toast.showToast = function(text) {
				$mdToast.show($mdToast.simple().textContent(text).position('top right'));
			};
			
			Toast.showErrorToast = function(text) {
				$mdToast.show($mdToast.simple().textContent(text).position('top right').toastClass('error'));
			};
			
			return Toast;
		}])