(function () {
    'user strict';

    class ContactController {

        constructor(ContactsService, contact){
            console.log('contact');
            console.log(contact);
        }

    }

    ContactController.$inject = ['ContactsService', 'contact'];

    angular.module('app.components.contacts').controller('ContactController', ContactController);

}());