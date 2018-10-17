'use strict';

angular.module('docSumList').
  component('docSumList', {
	  templateUrl: 'components/docsum-list/docsum-list.template.html',
	  controller: ['$routeParams', 'DocSum', 'NgTableParams', 'Toast', '$translate', '$location', '$window',
		  	function DocSumListController($routeParams, DocSum, NgTableParams, Toast, $translate, $location, $window) {
		  var self = this;
		  
		  self.docId = $routeParams.docId;
		  self.path = $location.path();
		  self.$window = $window;
		  
		  self.totalPrice = 0;
		  self.totalTax = 0;
		  self.totalGross = 0;
		  
		  console.log(self.path);
		  
		  self.getDocSums = function() {
			  DocSum.getSums().query({docId: self.docId})
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
