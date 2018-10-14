'use strict';

angular.module('core.translation').
  config(['$translateProvider', function($translateProvider) {
	  $translateProvider.translations('pl', {
		  TITLE: 'Obieg dokumentów',
		  
		  BUTTON_LOGIN: 'Zaloguj',
		  BUTTON_LOGOUT: 'Wyloguj',
		  BUTTON_LANG_PL: 'polski',
		  BUTTON_LANG_EN: 'angielski',
		  
		  LOGIN_DIALOG_TITLE: 'Okno logowania',
		  LOGIN_DIALOG_LABEL: 'Logowanie',
		  LOGIN_DIALOG_CLOSE: 'Zamknięcie okna',
		  LOGIN_DIALOG_USERNAME_LABEL: 'Nazwa użytkownika',
		  LOGIN_DIALOG_PASSWORD_LABEL: 'Hasło',
		  
		  LOGIN_SUCCESS: 'Zalogowano',
		  LOGIN_ERROR: 'Logowanie nie powiodło się',
		  LOGOUT_SUCCESS: 'Wylogowano',
		  LOGOUT_ERROR: 'Wylogowanie nie powiodło się',
		  
		  MAIN_MENU_LABEL: 'Menu',
		  DOCUMENTS_MENU_LABEL: 'Dokumenty',
		  CONTRACTORS_MENU_LABEL: 'Kontrahenci',
		  USERS_MENU_LABEL: 'Użytkownicy',
		  PARAMETERS_MENU_LABEL: 'Parametry',
		  TAX_RATES_MENU_LABEL: 'Stawki podatku',
		  PAYMENT_METHODS_MENU_LABEL: 'Metody płatności',
		  UNIT_TYPES_MENU_LABEL: 'Jednostki miary',
		  
		  DOCUMENT_EDIT_MAIN_CARD_TITLE: 'Szczegółowe dane dokumentu',
		  DOCUMENT_DETAILS_CARD_TITLE: '',
		  DOCUMENT_SELLERS_DATA_CARD_TITLE: 'Dane sprzedawcy',
		  DOCUMENT_WORKFLOW_CARD_TITLE: 'Status obiegu dokumentu',
		  DOCUMENT_DETAILS_ITEMS_BUTTON_LABEL: 'Pozycje dokumentu',
		  DOCUMENT_DETAILS_SUMS_BUTTON_LABEL: 'Podsumowanie pozycji',
		  DOCUMENT_DETAILS_ATTACHMENTS_BUTTON_LABEL: 'Załączniki',
		  DOCUMENT_DETAILS_WORKFLOW_BUTTON_LABEL: 'Szczegóły obiegu',
		  
		  PICK_PAYMENT_METHOD_LABEL: 'Wybierz metodę płatności',
		  PICK_CONTRACTOR_LABEL: 'Wybierz sprzedawcę',
		  PICK_UNIT_TYPE_LABEL: 'Wybierz jednostkę miary',
		  PICK_TAX_RATE_LABEL: 'Wybierz stawkę podatku',
		  PICK_USER_LABEL: 'Wybierz osobę',
		  PICK_PAYMENT_METHOD_DAYS_LABEL: 'dni',
		  PICK_PAYMENT_METHOD_NEW_ALERT: 'Dołącz nową metodę płatności w parametrach lub uzupełnij ręcznie pola: ',
		  PICK_NOT_FOUND: 'Nie znaleziono',
		  
		  DOCUMENTS_TABLE_INV_DT_LABEL:	'Data wystawienia',
		  DOCUMENTS_TABLE_INV_NO_LABEL: 'Nr dokumentu',
		  DOCUMENTS_TABLE_SELLERS_ID_LABEL: 'Id sprzedawcy',
		  DOCUMENTS_TABLE_SELLERS_NAME_LABEL: 'Sprzedawca',
		  DOCUMENTS_TABLE_SELLERS_ADDRESS_LABEL: 'Adres sprzedawcy',
		  DOCUMENTS_TABLE_SELLERS_REG_NUMBER_LABEL: 'NIP sprzedawcy',
		  DOCUMENTS_TABLE_SALE_DT_LABEL: 'Data sprzedaży',
		  DOCUMENTS_TABLE_DUE_DT_LABEL: 'Termin płatności',
		  DOCUMENTS_TABLE_PAYMENT_METHOD_LABEL: 'Metoda płatności',
		  DOCUMENTS_TABLE_BANK_ACC_NO_LABEL: 'Rachunek bankowy sprzedawcy',
		  DOCUMENTS_TABLE_SELLERS_CONTACT_DETAILS_LABEL: 'Dane kontaktowe sprzedawcy',
		  DOCUMENTS_TABLE_GROSS_LABEL: 'Wartość brutto',
		  DOCUMENTS_TABLE_STATUS_LABEL: 'Status',
		  DOCUMENTS_TABLE_USERN_LABEL: 'Użytkownik',
		  
		  DOCITEM_EDIT_MAIN_CARD_TITLE: 'Szczegółowe dane pozycji',
		  
		  DOCITEM_TABLE_DESCRIPTION_LABEL: 'Materiał/usługa',
		  DOCITEM_TABLE_QUANTITY_LABEL: 'Ilość',
		  DOCITEM_TABLE_UNIT_TYPE_LABEL: 'Jednostka',
		  DOCITEM_TABLE_PRICE_PER_UNIT_LABEL: 'Cena jednostkowa netto',
		  DOCITEM_TABLE_DISCOUNT_LABEL: 'Upust',
		  DOCITEM_TABLE_PRICE_LABEL: 'Wartość netto',
		  DOCITEM_TABLE_TAX_DESCR_LABEL: 'Stawka podatku',
		  DOCITEM_TABLE_TAX_RATE_LABEL: 'Stawka podatku',
		  
		  DOCSUM_TABLE_TAX_DESCR_LABEL: 'Stawka podatku',
		  DOCSUM_TABLE_PRICE_LABEL: 'Netto',
		  DOCSUM_TABLE_TAX_VALUE_LABEL: 'Podatek',
		  DOCSUM_TABLE_GROSS_LABEL: 'Brutto',
		  
		  DOCSUM_TOTAL_LABEL: 'Ogółem:',

		  DOCSTAGE_EDIT_MAIN_CARD_TITLE: 'Etap obiegu',
			  
		  DOCSTAGE_TABLE_USERN_LABEL: 'Użytkownik',
		  DOCSTAGE_TABLE_STATUS_LABEL: 'Status wejściowy dokumentu',
		  DOCSTAGE_TABLE_ACTION_LABEL: 'Działanie',
		  DOCSTAGE_TABLE_DATE_LABEL: 'Data',
		  DOCSTAGE_TABLE_COMMENTS_LABEL: 'Uwagi',
		  
		  BUTTON_INIT_DOCUMENT_WORKFLOW: 'Przekaż do akceptacji',
		  BUTTON_CONTINUE_DOCUMENT_WORKFLOW: 'Zaakceptuj i przekaż do następnej osoby',
		  BUTTON_DOCUMENT_FINAL_ACCEPT: 'Zaakceptuj ostatecznie',
		  BUTTON_DOCUMENT_CLOSE: 'Zakończ obieg bez akceptacji',
		  BUTTON_DOCUMENT_REJECT: 'Odrzuć dokument',
		  
		  CONTRACTOR_EDIT_MAIN_CARD_TITLE: 'Szczegółowe dane kontrahenta',

		  CONTRACTORS_TABLE_NAME_LABEL: 'Nazwa',
		  CONTRACTORS_TABLE_ADDRESS_LABEL: 'Adres',
		  CONTRACTORS_TABLE_REG_NUMBER_LABEL: 'NIP',
		  CONTRACTORS_TABLE_CONTACT_DETAILS_LABEL: 'Dane kontaktowe',
		  
		  USER_EDIT_MAIN_CARD_TITLE: 'Szczegółowe dane użytkownika',

		  USERS_TABLE_NAME_LABEL: 'Nazwa',
		  USERS_TABLE_PASS_LABEL: 'Hasło',
		  USERS_TABLE_ACTIVE_LABEL: 'Aktywny?',
		  USERS_TABLE_CAN_EDIT_LABEL: 'Może edytować?',
		  USERS_TABLE_CAN_ACCEPT_LABEL: 'Może akceptować?',
		  USERS_TABLE_IS_ADMIN_LABEL: 'Administrator?',
		  
		  TAX_RATE_EDIT_MAIN_CARD_TITLE: 'Szczegółowe dane stawki podatku',
		  PAYMENT_METHOD_EDIT_MAIN_CARD_TITLE: 'Szczegółowe dane metody płatności',
		  UNIT_TYPE_EDIT_MAIN_CARD_TITLE: 'Szczegółowe dane jednostki miary',
		  
		  PARAMS_TABLE_CODE_LABEL: 'Kod',
		  PARAMS_TABLE_DESCRIPTION_LABEL: 'Opis',
		  PARAMS_TABLE_TAX_RATE_VALUE_LABEL: 'Stawka podatku',
		  PARAMS_TABLE_PAYMENT_METHOD_VALUE_LABEL: 'Ilość dni',

		  EDIT_LABEL: 'Edycja/Podgląd',
		  DELETE_LABEL: 'Usuń',
		  NEW_LABEL: 'Nowy',
		  SAVE_LABEL: 'Zapisz',
		  
		  DELETE_TOAST_TEXT_CONTENT: 'Usunięto',
		  SAVE_TOAST_TEXT_CONTENT: 'Zapisano',
		  CONFIRM_DELETING_TITLE: 'Potwierdź usunięcie',
		  CONFIRM_DELETING_CONTRACTOR_TEXT_CONTENT: 'Kontrahent zostanie usunięty',
		  CONFIRM_DELETING_USER_TEXT_CONTENT: 'Użytkownik zostanie usunięty',
		  CONFIRM_DELETING_TAX_RATE_TEXT_CONTENT: 'Stawka podatku zostanie usunięta',
		  CONFIRM_DELETING_PAYMENT_METHOD_TEXT_CONTENT: 'Metoda płatności zostanie usunięta',
		  CONFIRM_DELETING_UNIT_TYPE_TEXT_CONTENT: 'Jednostka miary zostanie usunięta',
		  CONFIRM_DELETING_DOC_ITEM_TEXT_CONTENT: 'Pozycja dokumentu zostanie usunięta',
		  CONFIRM_OK_LABEL: 'OK',
		  CONFIRM_CANCEL_LABEL: 'Anuluj',
		  
		  ERROR: 'Wystąpił błąd',
	  });
	  
	  $translateProvider.translations('en', {
		  TITLE: 'Document workflow',
		  
		  BUTTON_LOGIN: 'Login',
		  BUTTON_LOGOUT: 'Logout',
		  BUTTON_LANG_PL: 'polish',
		  BUTTON_LANG_EN: 'english',

		  LOGIN_DIALOG_TITLE: 'Login dialog box',
		  LOGIN_DIALOG_LABEL: 'Login',
		  LOGIN_DIALOG_CLOSE: 'Close login dialog box',
		  LOGIN_DIALOG_USERNAME_LABEL: 'Username',
		  LOGIN_DIALOG_PASSWORD_LABEL: 'Password',
		  
		  LOGIN_SUCCESS: 'Logged in',
		  LOGIN_ERROR: 'Login failed',
		  LOGOUT_SUCCESS: 'Logged out',
		  LOGOUT_ERROR: 'Logout failed',

		  MAIN_MENU_LABEL: 'Menu',
		  DOCUMENTS_MENU_LABEL: 'Documents',
		  CONTRACTORS_MENU_LABEL: 'Contractors',
		  USERS_MENU_LABEL: 'Users',
		  PARAMETERS_MENU_LABEL: 'Parameters',
		  TAX_RATES_MENU_LABEL: 'Tax rates',
		  PAYMENT_METHODS_MENU_LABEL: 'Payment methods',
		  UNIT_TYPES_MENU_LABEL: 'Unit types',
		  
		  DOCUMENT_EDIT_MAIN_CARD_TITLE: 'Document details',
		  DOCUMENT_DETAILS_CARD_TITLE: '',
		  DOCUMENT_SELLERS_DATA_CARD_TITLE: 'Seller\'s details',
		  DOCUMENT_WORKFLOW_CARD_TITLE: 'Document workflow status',
		  DOCUMENT_DETAILS_ITEMS_BUTTON_LABEL: 'Document items',
		  DOCUMENT_DETAILS_SUMS_BUTTON_LABEL: 'D items summary',
		  DOCUMENT_DETAILS_ATTACHMENTS_BUTTON_LABEL: 'Attachments',
		  DOCUMENT_DETAILS_WORKFLOW_BUTTON_LABEL: 'Workflow details',

		  PICK_PAYMENT_METHOD_LABEL: 'Pick payment method',
		  PICK_CONTRACTOR_LABEL: 'Pick seller',
		  PICK_UNIT_TYPE_LABEL: 'Pick unit type',
		  PICK_TAX_RATE_LABEL: 'Pick tax rate',
		  PICK_USER_LABEL: 'Pick user',
		  PICK_PAYMENT_METHOD_DAYS_LABEL: 'days',
		  PICK_PAYMENT_METHOD_NEW_ALERT: 'Create new payment method in parameters or fill in the fields manually: ',
		  PICK_NOT_FOUND: 'Not found',

		  DOCUMENTS_TABLE_INV_DT_LABEL:	'Document date',
		  DOCUMENTS_TABLE_INV_NO_LABEL: 'Document number',
		  DOCUMENTS_TABLE_SELLERS_ID_LABEL: 'Seller\'s Id',
		  DOCUMENTS_TABLE_SELLERS_NAME_LABEL: 'Seller',
		  DOCUMENTS_TABLE_SELLERS_ADDRESS_LABEL: 'Seller\'s address',
		  DOCUMENTS_TABLE_SELLERS_REG_NUMBER_LABEL: 'Sellers\' reg.number',
		  DOCUMENTS_TABLE_SALE_DT_LABEL: 'Sale date',
		  DOCUMENTS_TABLE_DUE_DT_LABEL: 'Due date',
		  DOCUMENTS_TABLE_PAYMENT_METHOD_LABEL: 'Payment method',
		  DOCUMENTS_TABLE_BANK_ACC_NO_LABEL: 'Sellers\'s bank account',
		  DOCUMENTS_TABLE_SELLERS_CONTACT_DETAILS_LABEL: 'Seller\'s contact details',
		  DOCUMENTS_TABLE_GROSS_LABEL: 'Gross value',
		  DOCUMENTS_TABLE_STATUS_LABEL: 'Status',
		  DOCUMENTS_TABLE_USERN_LABEL: 'User',

		  DOCITEM_EDIT_MAIN_CARD_TITLE: 'Document item details',

		  DOCITEM_TABLE_DESCRIPTION_LABEL: 'Product/service',
		  DOCITEM_TABLE_QUANTITY_LABEL: 'Quantity',
		  DOCITEM_TABLE_UNIT_TYPE_LABEL: 'Unit type',
		  DOCITEM_TABLE_PRICE_PER_UNIT_LABEL: 'Price per unit',
		  DOCITEM_TABLE_DISCOUNT_LABEL: 'Discount',
		  DOCITEM_TABLE_PRICE_LABEL: 'Price',
		  DOCITEM_TABLE_TAX_DESCR_LABEL: 'Tax rate',
		  DOCITEM_TABLE_TAX_RATE_LABEL: 'Tax rate',

		  DOCSUM_TABLE_TAX_DESCR_LABEL: 'Tax description',
		  DOCSUM_TABLE_PRICE_LABEL: 'Price',
		  DOCSUM_TABLE_TAX_VALUE_LABEL: 'Tax value',
		  DOCSUM_TABLE_GROSS_LABEL: 'Gross',
		  
		  DOCSUM_TOTAL_LABEL: 'Total:',

		  DOCSTAGE_EDIT_MAIN_CARD_TITLE: 'Workflow stage',

		  DOCSTAGE_TABLE_USERN_LABEL: 'User',
		  DOCSTAGE_TABLE_STATUS_LABEL: 'Document initial status',
		  DOCSTAGE_TABLE_ACTION_LABEL: 'Action',
		  DOCSTAGE_TABLE_DATE_LABEL: 'Date',
		  DOCSTAGE_TABLE_COMMENTS_LABEL: 'Comments',

		  BUTTON_INIT_DOCUMENT_WORKFLOW: 'Forward for acceptance',
		  BUTTON_CONTINUE_DOCUMENT_WORKFLOW: 'Accept and forward to another user',
		  BUTTON_DOCUMENT_FINAL_ACCEPT: 'Accept final',
		  BUTTON_DOCUMENT_CLOSE: 'Finish workflow without accept',
		  BUTTON_DOCUMENT_REJECT: 'Reject document',

		  CONTRACTOR_EDIT_MAIN_CARD_TITLE: 'Contractor details',

		  CONTRACTORS_TABLE_NAME_LABEL: 'Name',
		  CONTRACTORS_TABLE_ADDRESS_LABEL: 'Addresss',
		  CONTRACTORS_TABLE_REG_NUMBER_LABEL: 'Reg.number',
		  CONTRACTORS_TABLE_CONTACT_DETAILS_LABEL: 'Contact details',
		  
		  USER_EDIT_MAIN_CARD_TITLE: 'User details',

		  USERS_TABLE_NAME_LABEL: 'Name',
		  USERS_TABLE_PASS_LABEL: 'Password',
		  USERS_TABLE_ACTIVE_LABEL: 'Active?',
		  USERS_TABLE_CAN_EDIT_LABEL: 'Can edit?',
		  USERS_TABLE_CAN_ACCEPT_LABEL: 'Can accept?',
		  USERS_TABLE_IS_ADMIN_LABEL: 'Administrator?',
		  
		  TAX_RATE_EDIT_MAIN_CARD_TITLE: 'Tax rate details',
		  PAYMENT_METHOD_EDIT_MAIN_CARD_TITLE: 'Payment method details',
		  UNIT_TYPE_EDIT_MAIN_CARD_TITLE: 'Unit type details',

		  PARAMS_TABLE_CODE_LABEL: 'Code',
		  PARAMS_TABLE_DESCRIPTION_LABEL: 'Description',
		  PARAMS_TABLE_TAX_RATE_VALUE_LABEL: 'Tax rate',
		  PARAMS_TABLE_PAYMENT_METHOD_VALUE_LABEL: 'Days',

		  EDIT_LABEL: 'Edit/View',
		  DELETE_LABEL: 'Delete',
		  NEW_LABEL: 'New',
		  SAVE_LABEL: 'Save',

		  DELETE_TOAST_TEXT_CONTENT: 'Deleted',
		  SAVE_TOAST_TEXT_CONTENT: 'Saved',
		  CONFIRM_DELETING_TITLE: 'Confirm deletion',
		  CONFIRM_DELETING_CONTRACTOR_TEXT_CONTENT: 'Contractor will be deleted',
		  CONFIRM_DELETING_USER_TEXT_CONTENT: 'User will be deleted',
		  CONFIRM_DELETING_TAX_RATE_TEXT_CONTENT: 'Tax rate will be deleted',
		  CONFIRM_DELETING_PAYMENT_METHOD_TEXT_CONTENT: 'Payment method will be deleted',
		  CONFIRM_DELETING_UNIT_TYPE_TEXT_CONTENT: 'Unit type will be deleted',
		  CONFIRM_DELETING_DOC_ITEM_TEXT_CONTENT: 'Document item will be deleted',
		  CONFIRM_OK_LABEL: 'OK',
		  CONFIRM_CANCEL_LABEL: 'Cancel',

		  ERROR: 'Error occured',
	  });
	  
	  $translateProvider.useSanitizeValueStrategy('escape');
	  $translateProvider.preferredLanguage('pl');
  }]).
  controller('TranslationController', ['$scope', '$translate', function($scope, $translate) {
	  $scope.changeLanguage = function(key) {
		  $translate.use(key);
	  }
  }]);


