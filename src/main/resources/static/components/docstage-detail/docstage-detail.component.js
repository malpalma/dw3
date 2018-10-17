'use strict';

angular.module('docStageDetail')
  .component('docStageDetail', {
	  templateUrl: 'components/docstage-detail/docstage-detail.template.html',
	  controller: ['$routeParams', 'DocStage', 'Authentication', 'Toast', '$translate', 'Document', 'User', '$window',
		  		function DocStageDetailController($routeParams, DocStage, Authentication, Toast, $translate, Document, User, $window) {
		  var self = this;
		  
		  self.Authentication = Authentication;
		  self.Toast = Toast;
		  self.docId = $routeParams.docId;
		  self.action = $routeParams.action;
		  self.$window = $window;
		  self.document = Document.getDocument().get({id: self.docId});
		  
		  self.docStage = {};
		  self.docStage.docId = self.docId;
		  
		  self.userList;
		  self.searchTextUserAutocomplete;
		  self.selectedItemUserAutocomplete;
		  self.nextStageUsername;
		  
		  self.getUsers = function() {
			  User.getUsersByPerm().query({perm: 'canAccept'})
			  	.$promise
			  		.then(function(response) {
			  			self.userList = response;
			  			for(let i = 0; i < self.userList.length; i++) {
			  				if(self.userList[i].name == self.Authentication.session.name) {
			  					self.userList.splice(i, 1);
			  					break;
			  				}
			  			}
			  		})
			  		.catch(function(reason) {
			  			console.log('CATCH in docStageDetail component, User.getUsersByPerm().query({perm: "canAccept"}:');
			  			console.log(reason);
			  			Toast.showErrorToast($translate.instant('ERROR'));
			  		})
		  }
		  
		  self.getUsers();

		  self.selectedItemChangeUserAutocomplete = function() {
			  if(self.selectedItemUserAutocomplete != null) {
				  self.nextStageUsername = self.selectedItemUserAutocomplete.name;
			  }
		  }
		  
		  self.querySearchUser = function(query) {
			  var results = query ? self.userList.filter(self.createFilterForUser(query)) : self.userList;
			  return results;
		  }
		  
		  self.createFilterForUser = function(query) {
			  var lowercaseQuery = query.toLowerCase();
			  return function filterFn(user) {
				  return (user.name.indexOf(lowercaseQuery) === 0);
			  }
		  }
		  
		  self.saveStage = function() {
			  self.docStage.date = new Date();
			  self.docStage.usern = self.Authentication.session.name;
			  self.docStage.status = self.document.status;
			  if(self.action == 'send') {
				  self.docStage.action = 'przekazanie';
			  } else if(self.action == 'accept') {
				  self.docStage.action = 'akceptacja';
			  } else if(self.action == 'reject') {
				  self.docStage.action = 'odrzucenie';
			  } else {
				  self.docStage.action = 'zamknięcie';
			  }
			  if(self.docStage.status == 'nowy') {
				  DocStage.initDocWF().save({docId: self.docId, nextStageUser: self.nextStageUsername}, self.docStage)
				  	.$promise
				  		.then(function(response) {
				  			window.location.replace('#!/docstages/' + self.docId);
				  			Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
				  		})
				  		.catch(function(reason) {
				  			console.log('CATCH in docIStageDetail component, DocStage.initDocWF().save({docId: self.docId, nextStageUser: self.nextStageUsername}, self.docStage):')
				  			console.log(reason);
				  			Toast.showErrorToast($translate.instant('ERROR'));
				  		});
			  } else {
				  DocStage.saveStage().save({docId: self.docId, nextStageUser: self.nextStageUsername}, self.docStage)
				  	.$promise
				  		.then(function(response) {
				  			window.location.replace('#!/docstages/' + self.docId);
				  			Toast.showToast($translate.instant('SAVE_TOAST_TEXT_CONTENT'));
				  		})
				  		.catch(function(reason) {
				  			console.log('CATCH in docIStageDetail component, DocStage.saveStage().save({docId: self.docId, nextStageUser: self.nextStageUsername}, self.docStage):')
				  			console.log(reason);
				  			Toast.showErrorToast($translate.instant('ERROR'));
				  		});
			  }
		  }
	  }]
  });
