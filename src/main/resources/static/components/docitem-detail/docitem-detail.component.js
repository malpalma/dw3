'use strict';

angular.module('docItemDetail')
  .component('docItemDetail', {
	  templateUrl: 'components/docitem-detail/docitem-detail.template.html',
	  controller: ['$routeParams', 'DocItem', 'Authentication', 'Toast', '$translate', 'Document', 'Param',
		  		function DocItemDetailController($routeParams, DocItem, Authentication, Toast, $translate, Document, Param) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  self.docId = $routeParams.docId;
		  
		  Document.getDocStatus().charTable({id: self.docId})
		  	.$promise
		  		.then(function(response) {
		  			self.docStatus = response.collection;
		  		})
		  		.catch(function(reason) {
		  			console.log('CATCH in docItemDetail component, Document.getDocStatus().charTable({id: self.docId}):');
		  			console.log(reason);
		  			Toast.showErrorToast($translate.instant('ERROR'));
		  		});
		  
		  if($routeParams.id == 0) {
			  self.docItem = {};
			  self.docItem.docId = self.docId;
		  } else {
			  self.docItem = DocItem.getItem().get({id: $routeParams.id});
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
		  
		  self.saveDocItem = function() {
			  var result = DocItem.saveItem().save({docId: self.docId}, self.docItem);
			  result.$promise
			  	.then(function() {
			  		window.location.replace('#!/docitems/' + self.docId);
			  		Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
			  	})
			  	.catch(function(reason) {
			  		console.log(reason);
			  		Toast.showErrorToast($translate.instant('ERROR'));
			  	})
		  }
	  }]
  });
