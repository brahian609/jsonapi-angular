class ContactsController {

    constructor(ContactsService, $state, $uibModal) {

        this.ContactsService = ContactsService;
        this.$state = $state;
        this.$uibModal = $uibModal;

        ContactsService.getContacts().then(({data}) => {
            this.contacts = data;
        });

    }

    detail(contact) {
        this.$state.go('contacts.detail', {id: contact.id, contact}, {reload: true});
    }

    deleteContact(url) {

        console.log('url');
        console.log(url);

        this.ContactsService.delContact(url).then(() => {
            this.$state.reload();
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
                links: () => this.contacts[index].relationships['phone-numbers'].links,
                id: () => this.contacts[index].id
            }
        });

    }

}

ContactsController.$inject = ['ContactsService', '$state', '$uibModal'];

export default ContactsController