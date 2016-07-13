import angular from 'angular';
import ContactsRoutes from './contacts.routes';
import ContactsController from './contacts.controller'
import ModalPhoneController from './components/contact-detail/modal-phone.controller'
import ContactDetailController from './components/contact-detail/contact-detail.controller'
import ContactFormController from './components/contact-form/contact-form.controller'
import ContactsService from './contacts.service'

let contactsModule = angular.module('app.components.contacts', [])
    .config(ContactsRoutes)
    .controller('ContactsController', ContactsController)
    .controller('ModalPhoneController', ModalPhoneController)
    .controller('ContactDetailController', ContactDetailController)
    .controller('ContactFormController', ContactFormController)
    .service('ContactsService', ContactsService);

export default contactsModule;