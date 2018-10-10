'use strict';

angular.module('paramDetail')
  .component('paramDetail', {
	  templateUrl: 'components/param-detail/param-detail.template.html',
	  controller: ['$routeParams', 'Param', 'Authentication', 'Toast', '$translate', 
		  		function ParamDetailController($routeParams, Param, Authentication, Toast, $translate) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  self.type = $routeParams.type;
		  
		  if($routeParams.id == 0) {
			  self.param = {};
			  self.param.type = self.type;
		  } else {
			  self.param = Param.getParam().get({id: $routeParams.id});
		  }
		  
		  self.saveParam = function() {
			  var result = Param.saveParam().save(self.param);
			  result.$promise
			  	.then(function() {
			  		window.location.replace('#!/params/' + self.type);
			  		Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
			  	})
			  	.catch(function() {
			  		console.log('catch:');
			  		console.log(result);
			  		Toast.showErrorToast($translate.instant('ERROR'));
			  	})
		  }
	  }]
  });
