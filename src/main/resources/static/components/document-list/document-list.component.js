'use strict';

angular.module('documentList')
  .component('documentList', {
	  templateUrl: 'components/document-list/document-list.template.html',
	  controller: ['Document', 'NgTableParams', 'Authentication', 'Toast', '$translate', '$mdDialog', 
		  	function DocumentListController(Document, NgTableParams, Authentication, Toast, $translate, $mdDialog) {
		  
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  
		  self.getDocuments = function() {
			  Document.getDocuments().query()
			  	.$promise
			  		.then(function(response) {
			  			self.documents = new NgTableParams(
			  									{sorting: {invDt: "desc", invNo: "asc"}}, 
			  									{dataset: response});
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in documentList component, Document.getDocuments().query():');
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
			  		Document.deleteDocument().delete({id: id})
			  			.$promise
			  				.then(function(response) {
			  					self.getDocuments();
			  					Toast.showToast($translate.instant('DELETE_TOAST_TEXT_CONTENT'));
			  				})
			  				.catch(function(reason) {
			  					console.log('CATCH in documentList component, Document.deleteDocument().delete({id: id}):');
			  					console.log(reason);
			  					Toast.showErrorToast($translate.instant('ERROR'));
			  				})
			  	})
		  };
		  
		  self.getDocuments();
	  }]
  });
