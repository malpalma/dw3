'use strict';

angular.module('contractorDetail')
  .component('contractorDetail', {
	  templateUrl: 'components/contractor-detail/contractor-detail.template.html',
	  controller: ['$routeParams', 'Contractor', 'Authentication', 'Toast', '$translate', '$window',
		  		function ContractorDetailController($routeParams, Contractor, Authentication, Toast, $translate, $window) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  self.$window = $window;
		  
		  if($routeParams.id == 0) {
			  self.contractor = {};
		  } else {
			  self.contractor = Contractor.getContractor().get({id: $routeParams.id});
			  if(!self.Authentication.authenticated) {
				  Toast.showToast($translate.instant('READ_ONLY') + '. ' + $translate.instant('NOT_LOGGED_IN_INFO'));
			  } else {
				  if(!self.Authentication.enableEdit) {
					  Toast.showToast($translate.instant('READ_ONLY') + '. ' + $translate.instant('NO_EDIT_PERMISSION'));
				  }
			  }
		  }
		  
		  self.saveContractor = function() {
			  Contractor.saveContractor().save(self.contractor)
			  	.$promise
			  		.then(function(response) {
			  			window.location.replace('#!/contractors');
			  			Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
			  		})
			  		.catch(function(reason) {
			  			cosole.log('CATCH in contractorDetail component, Contractor.saveContractor().save(self.contractor):')
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		})
		  }
	  }]
  });
