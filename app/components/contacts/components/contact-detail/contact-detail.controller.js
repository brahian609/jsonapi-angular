class ContactDetailController {

    constructor(ContactsService, contact) {

        this.contact = contact;
        this.isCollapsed = true;
        this.id = contact.data.id;

        this.name = `${contact.data.attributes['name-first']} ${contact.data.attributes['name-last']}`;
        this.email = contact.data.attributes.email;
        this.phones = contact.included;

    }

}

ContactDetailController.$inject = ['ContactsService', 'contact'];

export default ContactDetailController