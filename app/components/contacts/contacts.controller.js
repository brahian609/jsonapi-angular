(function () {
    'user strict';

    class ContactsController {

        constructor(ContactsService, $state, $uibModal){

            this.ContactsService = ContactsService;
            this.$state = $state;
            this.$uibModal = $uibModal;

            ContactsService.getContacts().then(({data}) => {
                this.contacts = data;
            });

        }

        detail(contact) {
            this.$state.go('contacts.detail', {id: contact.id, contact});
        }

        deleteContact(url) {

            console.log('url');
            console.log(url);

            this.ContactsService.delContact(url).then(({data}) => {
                console.log('data');
                console.log(data);
            }).catch(reason => {
                console.log('reason');
                console.log(reason);
            })

        }

        modalPhone(index) {

            var modalInstance = this.$uibModal.open({
                templateUrl: 'components/contacts/components/contact-detail/modal-phone.html',
                controller: 'ModalPhoneController',
                controllerAs: '$ctrl',
                resolve: {
                    urlPhones: () => this.contacts[index].relationships['phone-numbers'].links.related
                }
            });

        }

    }

    ContactsController.$inject = ['ContactsService', '$state', '$uibModal'];

    angular.module('app.components.contacts').controller('ContactsController', ContactsController);

}());