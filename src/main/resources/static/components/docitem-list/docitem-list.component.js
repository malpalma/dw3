'use strict';

angular.module('docItemList')
  .component('docItemList', {
	  templateUrl: 'components/docitem-list/docitem-list.template.html',
	  controller: ['$routeParams', 'DocItem', 'NgTableParams', 'Authentication', 'Toast', '$translate', '$mdDialog', 'Document', 
		  function DocItemListController($routeParams, DocItem, NgTableParams, Authentication, Toast, $translate, $mdDialog, Document) {
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
		  			self.docStatus = '?';
		  			console.log('CATCH in docItemList component, Document.getDocStatus().charTable({id: self.docId}):');
		  			console.log(reason);
		  			Toast.showErrorToast($translate.instant('ERROR'));
		  		});
		  
		  self.getDocItems = function() {
			  DocItem.getItems().query({docId: self.docId})
			  	.$promise
			  		.then(function(response) {
			  			self.docItemList = new NgTableParams(
			  									{sorting: {description: "asc", taxDescr: "asc"}}, 
			  									{dataset: response});
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in docItemList component, DocItem.getItems().query({docId: self.docId}):');
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		});
		  };
		  
		  self.deleteDocItem = function(id) {
			  var confirm = $mdDialog.confirm()
								.title($translate.instant('CONFIRM_DELETING_TITLE'))
								.textContent($translate.instant('CONFIRM_DELETING_DOC_ITEM_TEXT_CONTENT'))
								.ok($translate.instant('CONFIRM_OK_LABEL'))
								.cancel($translate.instant('CONFIRM_CANCEL_LABEL'));
			  $mdDialog.show(confirm).then(function() {
				  DocItem.deleteItem().delete({id: id})
				  	.$promise
				  		.then(function(response) {
//				  		how refresh doc-sum-list without reloading?
//				  		self.getDocItems();
				  			window.location.replace('#!/docitems/' + self.docId);
				  			Toast.showToast($translate.instant('DELETE_TOAST_TEXT_CONTENT'));
				  		})
				  		.catch(function(reason) {
				  			console.log('CATCH in docItemList component, DocItem.deleteItem().delete({id: id}):');
				  			console.log(reason);
				  			Toast.showErrorToast($translate.instant('ERROR'));
				  		})
			  });
		  }
		  
		  self.getDocItems();
	  }]
  });
