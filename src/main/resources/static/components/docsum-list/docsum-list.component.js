'use strict';

angular.module('docSumList').
  component('docSumList', {
	  templateUrl: 'components/docsum-list/docsum-list.template.html',
	  controller: ['$routeParams', 'DocSum', 'NgTableParams', function DocSumListController($routeParams, DocSum, NgTableParams) {
		  var self = this;
		  
		  self.totalPrice = 0;
		  self.totalTax = 0;
		  self.totalGross = 0;
		  
		  self.getDocSums = function() {
			  var queryResult = DocSum.getSums().query({docId: $routeParams.docId});
			  queryResult.$promise.then(function() {
				  self.docSumList = new NgTableParams({}, {dataset: queryResult});
				  for(var i = 0; i < queryResult.length; i++) {
					  self.totalPrice += queryResult[i].price;
					  self.totalTax += queryResult[i].taxValue;
					  self.totalGross += queryResult[i].gross;
				  }
			  })
		  }
		  
		  self.getDocSums();
	  }]
  })
