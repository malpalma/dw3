'use strict';

angular.module('documentList')
  .component('documentList', {
	  templateUrl: 'components/document-list/document-list.template.html',
	  controller: ['Document', 'NgTableParams', 'Authentication', 'Toast', '$translate', '$mdDialog', 
		  	function DocumentListController(Document, NgTableParams, Authentication, Toast, $translate, $mdDialog) {
		  
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast =Toast;
		  
		  self.getDocuments = function() {
			  var queryResult = Document.getDocuments().query();
			  queryResult.$promise
			  	.then(function() {
			  		self.documents = new NgTableParams({}, {dataset: queryResult});
			  	})
			  	.catch(function(reason) {
			  		console.log(reason);
			  		Toast.showErrorToast($translate.instant('ERROR'));
			  	})
		  };
		  
		  self.deleteDocument = function(id) {
			  var confirm = $mdDialog.confirm()
			  					.title($translate.instant('CONFIRM_DELETING_TITLE'))
			  					.textContent($translate.instant('CONFIRM_DELETING_DOCUMENT_TEXT_CONTENT'))
			  					.ok($translate.instant('CONFIRM_OK_LABEL'))
			  					.cancel($translate.instant('CONFIRM_CANCEL_LABEL'));
			  $mdDialog.show(confirm)
			  	.then(function() {
			  		var result = Document.deleteDocument().delete({id: id});
			  		result.$promise
			  			.then(function() {
			  				self.getDocuments();
			  				Toast.showToast($translate.instant('DELETE_TOAST_TEXT_CONTENT'));
			  			})
			  			.catch(function(reason) {
			  				console.log(reason);
			  				Toast.showErrorToast($translate.instant('ERROR'));
			  			})
			  	})
		  };
		  
		  self.getDocuments();
	  }]
  });
