'use strict';

angular.module('core.authentication', [])
  .config(['$httpProvider', function mainController($httpProvider) {
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  }
  ]);
