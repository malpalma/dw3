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
			  Contractor.getContractors().query()
			  	.$promise
			  		.then(function(response) {
			  			self.contractors = new NgTableParams(
			  									{sorting: {name: "asc", address: "asc"}}, 
			  									{dataset: response});
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in contractorList component, Contractor.getContractors().query():')
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
				  Contractor.deleteContractor().delete({id: id})
				  	.$promise
				  		.then(function(response) {
				  			self.getContractors();
				  			Toast.showToast($translate.instant('DELETE_TOAST_TEXT_CONTENT'));
				  		})
				  		.catch(function(reason) {
				  			console.log('CATCH in contractorList component, Contractor.deleteContractor().delete({id: id}):')
				  			console.log(reason);
				  			Toast.showErrorToast($translate.instant('ERROR'));
				  		})
			  });
		  };

		  self.getContractors();
	  }]
  });
