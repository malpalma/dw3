'use strict';

angular.module('core')
	.directive('dwGreaterThenZero', function() {
		return {
			require: 'ngModel',
			link: function(scope, element, attr, mCtrl) {
				function validate(value) {
					if(value > 0) {
						mCtrl.$setValidity('isGreaterThenZero', true);
					} else {
						mCtrl.$setValidity('isGreaterThenZero', false);
					}
					return value;
				}
				mCtrl.$parsers.push(validate);
			}
		}
	})