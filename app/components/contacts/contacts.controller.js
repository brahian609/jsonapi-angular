(function () {
    'user strict';

    class ContactsController {

        constructor(ContactsService, $state){

            this.ContactsService = ContactsService;
            this.$state = $state;

            ContactsService.getContacts().then(({data}) => {
                this.contacts = data;
            });

        }

        detail(contact) {
            this.$state.go('contacts.detail', {id: contact.id, contact});
        }

    }

    ContactsController.$inject = ['ContactsService', '$state'];

    angular.module('app.components.contacts').controller('ContactsController', ContactsController);

}());