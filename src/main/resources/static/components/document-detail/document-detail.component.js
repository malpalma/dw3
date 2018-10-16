'use strict';

angular.module('documentDetail')
  .component('documentDetail', {
	  templateUrl: 'components/document-detail/document-detail.template.html',
	  controller: ['$routeParams', '$translate', 'Document', 'Param', 'Authentication', 'Toast', 'Contractor',
		  function DocumentDetailController($routeParams, $translate, Document, Param, Authentication, Toast, Contractor) {
	    	var self = this;
	    	
	    	self.Authentication = Authentication;
	    	self.Toast = Toast;
	    	
	    	if($routeParams.id == 0) {
	    		self.document = {};
	    		self.document.status = 'nowy';
	    	} else {
			    self.document = Document.getDocument().get({id: $routeParams.id});
				  if(!self.Authentication.authenticated) {
					  Toast.showToast($translate.instant('READ_ONLY') + '. ' + $translate.instant('NOT_LOGGED_IN_INFO'));
				  } else {
					  if(!self.Authentication.enableEdit) {
						  Toast.showToast($translate.instant('READ_ONLY') + '. ' + $translate.instant('NO_EDIT_PERMISSION'));
					  }
				  }
	    	}
		    
		    self.paymentMethodList;
		    self.searchTextPaymentMethodAutocomplete;
		    self.selectedItemPaymentMethodAutocomplete;
		    
		    self.getPaymentMethods = function() {
		    	Param.getParams().query({type: 'pm'})
		    		.$promise
		    			.then(function(response) {
		    				self.paymentMethodList = response;
		    			})
		    			.catch(function(reason) {
		    				console.log('CATCH in documentDetail component, Param.getParams().query({type: "pm"}):');
		    				console.log(reason);
		    				Toast.showErrorToast($translate.instant('ERROR'));
		    			})
		    }
		    
		    self.getPaymentMethods();
	    	
	    	self.selectedItemChangePaymentMethodAutocomplete = function() {
	    		if(self.selectedItemPaymentMethodAutocomplete != null) {
		    		self.document.paymentMethod = self.selectedItemPaymentMethodAutocomplete.description;
		    		self.document.dueDt = new Date(self.document.invDt);
		    		self.document.dueDt.setDate(self.document.dueDt.getDate() + self.selectedItemPaymentMethodAutocomplete.value);
	    		}
	    	};
	    	
	    	self.querySearchPaymentMethod = function(query) {
	    		var results = query ? self.paymentMethodList.filter(self.createFilterForPaymentMethod(query)) : self.paymentMethodList;
	    		return results;
	    	};
	    	
	    	self.createFilterForPaymentMethod = function(query) {
	    		var lowercaseQuery = query.toLowerCase();
	    		return function filterFn(paymentMethod) {
	    			return (paymentMethod.description.indexOf(lowercaseQuery) === 0);
	    		};
	    	};
	    	
//	    	NOT WORKING
//	    	self.newPaymentMethoda = function(pm) {
//	    		console.log('jest');
//	    		var message;
//	    		message = $translate('PICK_PAYMENT_METHOD_NEW_ALERT');
//	    		alert(message);
//	    	};
	    	
		    self.contractorList;
		    self.searchTextContractorAutocomplete;
		    self.selectedItemContractorAutocomplete;
		    
		    self.getContractors = function() {
		    	Contractor.getContractors().query()
		    		.$promise
		    			.then(function(response) {
		    				self.contractorList = response;
		    			})
		    			.catch(function(reason) {
		    				console.log('CATCH in documentDetail component, Contractor.getContractors().query():');
		    				console.log(reason);
		    				Toast.showErrorToast($translate.instant('ERROR'));
		    			})
		    }
		    
		    self.getContractors();
	    	
	    	self.selectedItemChangeContractorAutocomplete = function(contractor) {
	    		if(self.selectedItemContractorAutocomplete != null) {
		    		self.document.sellersName = contractor.name;
		    		self.document.sellersRegNumber = contractor.regNumber;
		    		self.document.sellersAddress = contractor.address;
		    		self.document.sellersContactDetails = contractor.contactDetails;
	    		}
	    	};
	    	
	    	self.querySearchContractor = function(query) {
	    		var results = query ? self.contractorList.filter(self.createFilterForContractor(query)) : self.contractorList;
	    		return results;
	    	};
	    	
	    	self.createFilterForContractor = function(query) {
	    		var lowercaseQuery = query.toLowerCase();
	    		return function filterFn(contractor) {
	    			return (contractor.name.toLowerCase().indexOf(lowercaseQuery) === 0);
	    		};
	    	};

	    	self.saveDocument = function() {
	    		Document.saveDocument().save(self.document)
	    			.$promise
	    				.then(function(response) {
	    					window.location.replace('#!/documents');
	    					Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
	    				})
	    				.catch(function(reason) {
	    					console.log('CATCH in documentDetail component, Document.saveDocument().save(self.document):');
	    					console.log(reason);
	    					Toast.showErrorToast($translate.instant('ERROR'));
	    				})
	    	};
	    	
	  }]
  });