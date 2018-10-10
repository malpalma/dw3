'use strict';

angular.module('contractorDetail')
  .component('contractorDetail', {
	  templateUrl: 'components/contractor-detail/contractor-detail.template.html',
	  controller: ['$routeParams', 'Contractor', 'Authentication', 'Toast', '$translate', 
		  		function ContractorDetailController($routeParams, Contractor, Authentication, Toast, $translate) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  
		  if($routeParams.id == 0) {
			  self.contractor = {};
		  } else {
			  self.contractor = Contractor.getContractor().get({id: $routeParams.id});
		  }
		  
		  self.saveContractor = function() {
			  var result = Contractor.saveContractor().save(self.contractor);
			  result.$promise
			  	.then(function() {
			  		window.location.replace('#!/contractors');
			  		Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
			  	})
			  	.catch(function(reason) {
			  		console.log(reason);
			  		Toast.showErrorToast($translate.instant('ERROR'));
			  	})
		  }
	  }]
  });
