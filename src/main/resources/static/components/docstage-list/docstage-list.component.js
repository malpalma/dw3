'use strict';

angular.module('docStageList').
  component('docStageList', {
	  templateUrl: 'components/docstage-list/docstage-list.template.html',
	  controller: ['$routeParams', 'DocStage', 'NgTableParams', function DocStageListController($routeParams, DocStage, NgTableParams) {
		  var self = this;
		  var queryResult = DocStage.getStages().query({docId: $routeParams.docId});
		  queryResult.$promise.then(function() {
			  self.docStageList = new NgTableParams({}, {dataset: queryResult});
		  });
	  }]
  });
