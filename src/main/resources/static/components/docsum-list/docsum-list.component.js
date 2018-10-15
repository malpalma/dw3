'use strict';

angular.module('docSumList').
  component('docSumList', {
	  templateUrl: 'components/docsum-list/docsum-list.template.html',
	  controller: ['$routeParams', 'DocSum', 'NgTableParams', 'Toast', '$translate', function DocSumListController($routeParams, DocSum, NgTableParams, Toast, $translate) {
		  var self = this;
		  
		  self.totalPrice = 0;
		  self.totalTax = 0;
		  self.totalGross = 0;
		  
		  self.getDocSums = function() {
			  DocSum.getSums().query({docId: $routeParams.docId})
			  	.$promise
			  		.then(function(response) {
			  			self.docSumList = new NgTableParams(
			  									{sorting: {taxDescr: "asc"}},
			  									{dataset: response});
			  			for(var i = 0; i < response.length; i++) {
			  				self.totalPrice += response[i].price;
			  				self.totalTax += response[i].taxValue;
			  				self.totalGross += response[i].gross;
			  			}
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in docSumList component, DocSum.getSums().query({docId: $routeParams.docId}):');
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		})
		  }
		  
		  self.getDocSums();
	  }]
  })
