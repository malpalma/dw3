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
			  self.param.value = 0;
		  } else {
			  self.param = Param.getParam().get({id: $routeParams.id});
			  if(!self.Authentication.authenticated) {
				  Toast.showToast($translate.instant('READ_ONLY') + '. ' + $translate.instant('NOT_LOGGED_IN_INFO'));
			  } else {
				  if(!self.Authentication.enableEdit) {
					  Toast.showToast($translate.instant('READ_ONLY') + '. ' + $translate.instant('NO_EDIT_PERMISSION'));
				  }
			  }
		  }
		  
		  self.saveParam = function() {
			  Param.saveParam().save(self.param)
			  	.$promise
			  		.then(function(response) {
			  			window.location.replace('#!/params/' + self.type);
			  			Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in paramDetail component, Param.saveParam().save(self.param):');
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		})
		  }
	  }]
  });
