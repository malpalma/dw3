'use strict';

angular.module('contractorList')
  .component('contractorList', {
	  templateUrl: 'components/contractor-list/contractor-list.template.html',
	  controller: ['Contractor', 'NgTableParams', 'Authentication', 'Toast', '$translate', '$mdDialog', 
		  	function ContractorListController(Contractor, NgTableParams, Authentication, Toast, $translate, $mdDialog) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  
		  self.getContractors = function() {
			  var queryResult = Contractor.getContractors().query();
			  queryResult.$promise
			  	.then(function() {
			  		self.contractors = new NgTableParams({}, {dataset: queryResult});
			  	})
			  	.catch(function(reason) {
			  		console.log(reason);
			  		Toast.showErrorToast($translate.instant('ERROR'));
			  	})
		  };

		  self.deleteContractor = function(id) {
			  var confirm = $mdDialog.confirm()
			  					.title($translate.instant('CONFIRM_DELETING_TITLE'))
			  					.textContent($translate.instant('CONFIRM_DELETING_CONTRACTOR_TEXT_CONTENT'))
			  					.ok($translate.instant('CONFIRM_OK_LABEL'))
			  					.cancel($translate.instant('CONFIRM_CANCEL_LABEL'));
			  $mdDialog.show(confirm).then(function() {
				  var result = Contractor.deleteContractor().delete({id: id});
				  result.$promise
				  	.then(function() {
				  		self.getContractors();
				  		Toast.showToast($translate.instant('DELETE_TOAST_TEXT_CONTENT'));
				  	})
				  	.catch(function(reason) {
				  		console.log(reason);
				  		Toast.showErrorToast($translate.instant('ERROR'));
				  	})
			  });
		  };

		  self.getContractors();
	  }]
  });
