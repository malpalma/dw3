'use strict';

angular.module('documentDetail')
  .component('documentDetail', {
	  templateUrl: 'components/document-detail/document-detail.template.html',
	  controller: ['$routeParams', '$translate', 'Document', 'Param', 'Authentication', 'Toast', 
		  function DocumentDetailController($routeParams, $translate, Document, Param, Authentication, Toast) {
	    	var self = this;
	    	
	    	self.Authentication = Authentication;
	    	self.Toast = Toast;
	    	
	    	if($routeParams.id == 0) {
	    		self.document = {};
	    	} else {
			    self.document = Document.getDocument().get({id: $routeParams.id});
	    	}
		    
		    self.paymentMethodList;
		    self.searchTextPaymentMethodAutocomplete;
		    self.selectedItemPaymentMethodAutocomplete;
		    
		    self.getPaymentMethods = function() {
		    	var queryResult = Param.getParams().query({type: 'pm'});
		    	queryResult.$promise.then(function() {
		    		self.paymentMethodList = queryResult;
		    	});
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
	    	
	    	self.saveDocument = function() {
	    		var result = Document.saveDocument().save(self.document);
	    		result.$promise
	    			.then(function() {
	    				window.location.replace('#!/documents');
	    				Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
	    			})
	    			.catch(function(reason) {
	    				console.log(reason);
	    				Toast.showErrorToast($translate.instant('ERROR'));
	    			})
	    	};
	    	
	  }]
  });