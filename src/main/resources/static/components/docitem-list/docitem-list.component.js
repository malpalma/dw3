'use strict';

angular.module('docItemList')
  .component('docItemList', {
	  templateUrl: 'components/docitem-list/docitem-list.template.html',
	  controller: ['$routeParams', 'DocItem', 'NgTableParams', 'Authentication', 'Toast', '$translate', '$mdDialog', 
		  function DocItemListController($routeParams, DocItem, NgTableParams, Authentication, Toast, $translate, $mdDialog) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  self.docId = $routeParams.docId;
		  
		  self.getDocItems = function() {
			  var queryResult = DocItem.getItems().query({docId: self.docId});
			  queryResult.$promise
			  	.then(function() {
			  		self.docItemList = new NgTableParams({}, {dataset: queryResult});
			  	})
			  	.catch(function(reason) {
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
				  var result = DocItem.deleteDocItem().delete({id: id});
				  result.$promise
				  	.then(function() {
				  		self.getDocItems();
				  		Toast.showToast($translate.instant('DELETE_TOAST_TEXT_CONTENT'));
				  	})
				  	.catch(function(reason) {
				  		console.log(reason);
				  		Toast.showErrorToast($translate.instant('ERROR'));
				  	})
			  });
		  }
		  
		  self.getDocItems();
	  }]
  });
