'use strict';

angular.module('docItemDetail')
  .component('docItemDetail', {
	  templateUrl: 'components/docitem-detail/docitem-detail.template.html',
	  controller: ['$routeParams', 'DocItem', 'Authentication', 'Toast', '$translate', 'Document', 'Param', '$window',
		  		function DocItemDetailController($routeParams, DocItem, Authentication, Toast, $translate, Document, Param, $window) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  self.docId = $routeParams.docId;
		  self.$window = $window;
		  
		  Document.getDocStatus().charTable({id: self.docId})
		  	.$promise
		  		.then(function(response) {
		  			self.docStatus = response.collection;
		  		})
		  		.catch(function(reason) {
		  			self.docStatus = '?';
		  			console.log('CATCH in docItemDetail component, Document.getDocStatus().charTable({id: self.docId}):');
		  			console.log(reason);
		  			Toast.showErrorToast($translate.instant('ERROR'));
		  		});
		  
		  if($routeParams.id == 0) {
			  self.docItem = {};
			  self.docItem.docId = self.docId;
			  self.docItem.quantity = 0;
			  self.docItem.pricePerUnit = 0;
			  self.docItem.price = 0;
			  self.docItem.discount = 0;
		  } else {
			  self.docItem = DocItem.getItem().get({id: $routeParams.id});
			  if(!self.Authentication.authenticated) {
				  Toast.showToast($translate.instant('READ_ONLY') + '. ' + $translate.instant('NOT_LOGGED_IN_INFO'));
			  } else {
				  if(!self.Authentication.enableEdit) {
					  Toast.showToast($translate.instant('READ_ONLY') + '. ' + $translate.instant('NO_EDIT_PERMISSION'));
				  }
			  }
		  }
		  
		  self.unitTypeList;
		  self.searchTextUnitTypeAutocomplete;
		  self.selectedItemUnitTypeAutocomplete;
		  
		  self.getUnitTypes = function() {
			  Param.getParams().query({type: 'ut'})
			  	.$promise
			  		.then(function(response) {
			  			self.unitTypeList = response;
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in docItemDetail component, Param.getParams().query({type: "ut"}):');
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		})
		  }
		  
		  self.getUnitTypes();
		  
		  self.selectedItemChangeUnitTypeAutocomplete = function() {
			  if(self.selectedItemUnitTypeAutocomplete != null) {
				  self.docItem.unitType = self.selectedItemUnitTypeAutocomplete.description;
			  }
		  }
		  
		  self.querySearchUnitType = function(query) {
			  var results = query ? self.unitTypeList.filter(self.createFilterForUnitType(query)) : self.unitTypeList;
			  return results;
		  }
		  
		  self.createFilterForUnitType = function(query) {
			  var lowercaseQuery = query.toLowerCase();
			  return function filterFn(paymentMethod) {
				  return (paymentMethod.description.indexOf(lowercaseQuery) === 0);
			  }
		  }
		  
		  self.taxRateList;
		  self.searchTextTaxRateAutocomplete;
		  self.selectedItemTaxRateAutocomplete;
		  
		  self.getTaxRates = function() {
			  Param.getParams().query({type: 'tr'})
			  	.$promise
			  		.then(function(response) {
			  			self.taxRateList = response;
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in docItemDetail component, Param.getParams().query({type: "tr"}):');
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		})
		  }
		  
		  self.getTaxRates();
		  
		  self.selectedItemChangeTaxRateAutocomplete = function() {
			  if(self.selectedItemTaxRateAutocomplete != null) {
				  self.docItem.taxDescr = self.selectedItemTaxRateAutocomplete.description;
				  self.docItem.taxRate = self.selectedItemTaxRateAutocomplete.value;
			  }
		  }
		  
		  self.querySearchTaxRate = function(query) {
			  var results = query ? self.unitTypeList.filter(self.createFilterForTaxRate(query)) : self.taxRateList;
			  return results;
		  }
		  
		  self.createFilterForTaxRate = function(query) {
			  var lowercaseQuery = query.toLowerCase();
			  return function filterFn(taxRate) {
				  return (taxRate.description.indexOf(lowercaseQuery) === 0);
			  }
		  }
		  
		  self.compute = function() {
			  if(self.docItem.quantity > 0 && self.docItem.pricePerUnit != 0) {
				  self.docItem.quantity = Math.round(self.docItem.quantity * 1e6) / 1e6;
				  self.docItem.pricePerUnit = Math.round(self.docItem.pricePerUnit * 1e2) / 1e2;
				  self.docItem.price = self.docItem.quantity * self.docItem.pricePerUnit;
				  self.docItem.price = Math.round(self.docItem.price * 1e2) / 1e2;
				  if(self.docItem.discount != 0) {
					  self.docItem.discount = Math.round(self.docItem.discount * 1e2) / 1e2;
					  self.docItem.price -= self.docItem.discount;
				  }
			  }
		  }
		  
		  self.saveDocItem = function() {
			  DocItem.saveItem().save({docId: self.docId}, self.docItem)
			  	.$promise
			  		.then(function(response) {
			  			window.location.replace('#!/docitems/' + self.docId);
			  			Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in docItemDetail component, DocItem.saveItem().save({docId: self.docId}, self.docItem):')
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		})
		  }
	  }]
  });
