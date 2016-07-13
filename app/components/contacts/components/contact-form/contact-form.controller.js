(function () {
    'user strict';

    class ContactFormController {

        constructor(ContactsService, JsonApiDataStore, $state) {

            this.ContactsService = ContactsService;
            this.$state = $state;
            this.attributes = {};

        }

        create() {
            console.log('create contact');

           var dataContact = {
               data: {
                   type: 'contacts',
                   attributes: this.attributes
               }
            };

            this.ContactsService.addContact(dataContact).then(({data}) => {
                console.log('data');
                console.log(data);
                this.$state.go('contacts.detail', {id: data.id, contact: data});
            }).catch(reason => {
                console.log('reason');
                console.log(reason);
            })

        }

    }

    ContactFormController.$inject = ['ContactsService', 'JsonApiDataStore', '$state'];

    angular.module('app.components.contacts').controller('ContactFormController', ContactFormController);

}());