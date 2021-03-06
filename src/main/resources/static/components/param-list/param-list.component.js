'use strict';

angular.module('paramList').
  component('paramList', {
	  templateUrl: 'components/param-list/param-list.template.html',
	  controller: ['Param', 'NgTableParams', 'Authentication', 'Toast', '$translate', '$mdDialog', '$routeParams',
		  	function ParamListController(Param, NgTableParams, Authentication, Toast, $translate, $mdDialog, $routeParams) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  self.type = $routeParams.type;
		  
		  self.getParams = function() {
			  Param.getParams().query({type: self.type})
			  	.$promise
			  		.then(function(response) {
			  			self.params = new NgTableParams(
			  								{sorting: {code: "asc", description: "asc"}}, 
			  								{dataset: response});
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in paramList component, Param.getParams().query({type: self.type}):');
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		})
		  };
		  
		  self.deleteParam = function(id) {
			  var text = '';
			  if(self.type == 'tr') {
				  text = $translate.instant('CONFIRM_DELETING_TAX_RATE_TEXT_CONTENT');
			  } else if(self.type == 'pm') {
				  text = $translate.instant('CONFIRM_DELETING_PAYMENT_METHOD_TEXT_CONTENT');
			  } else if(self.type == 'ut'){
				  text = $translate.instant('CONFIRM_DELETING_UNIT_TYPE_TEXT_CONTENT');
			  }
			  var confirm = $mdDialog.confirm()
			  					.title($translate.instant('CONFIRM_DELETING_TITLE'))
			  					.textContent(text)
			  					.ok($translate.instant('CONFIRM_OK_LABEL'))
			  					.cancel($translate.instant('CONFIRM_CANCEL_LABEL'));
			  $mdDialog.show(confirm).then(function() {
				  Param.deleteParam().delete({id: id})
				  	.$promise
				  		.then(function(response) {
				  			self.getParams(self.type);
				  			Toast.showToast($translate.instant('DELETE_TOAST_TEXT_CONTENT'));
				  		})
				  		.catch(function(reason) {
				  			console.log('CATCH in paramList component, Param.deleteParam().delete({id: id}):');
				  			console.log(reason);
				  			Toast.showErrorToast($translate.instant('ERROR'));
				  		})
			  })
		  };
		  
		  self.getParams();
	  }]
  });
