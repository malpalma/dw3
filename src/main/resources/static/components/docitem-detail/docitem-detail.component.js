'use strict';

angular.module('docItemDetail')
  .component('docItemDetail', {
	  templateUrl: 'components/docitem-detail/docitem-detail.template.html',
	  controller: ['$routeParams', 'DocItem', 'Authentication', 'Toast', '$translate', 
		  		function DocItemDetailController($routeParams, DocItem, Authentication, Toast, $translate) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  self.docId = $routeParams.docId;
		  
		  if($routeParams.id == 0) {
			  self.docItem = {};
			  self.docItem.docId = self.docId;
		  } else {
			  self.docItem = DocItem.getItem().get({id: $routeParams.id});
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
