'use strict';

angular.module('docStageList').
  component('docStageList', {
	  templateUrl: 'components/docstage-list/docstage-list.template.html',
	  controller: ['$routeParams', 'DocStage', 'NgTableParams', 'Document', 'Authentication', 'Toast', '$translate', 
		  	function DocStageListController($routeParams, DocStage, NgTableParams, Document, Authentication, Toast, $translate) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  self.docId = $routeParams.docId;
		  self.document = Document.getDocument().get({id: self.docId});
		  
		  self.getDocStages = function() {
			  DocStage.getStages().query({docId: self.docId})
			  	.$promise
			  		.then(function(response) {
			  			self.docStageList = new NgTableParams(
			  									{sorting: {date: "asc"}}, 
			  									{dataset: response});
			  		}).
			  		catch(function(reason) {
			  			console.log('CATCH in docStageList component, DocStage.getStages().query({docId: self.docId}):');
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		});
		  }
		  
		  self.getDocStages();
	  }]
  });
