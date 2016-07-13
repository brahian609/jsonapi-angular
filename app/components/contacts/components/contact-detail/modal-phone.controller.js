class ModalPhoneController {

    constructor(ContactsService, $uibModalInstance, urlPhones) {

        this.$uibModalInstance = $uibModalInstance;

        ContactsService.getPhones(urlPhones).then(({data}) => {
            this.phones = data;
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        });

        console.log('urlPhones');
        console.log(urlPhones);

    }

    ok() {
        this.$uibModalInstance.close();
    }

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    }

}

ModalPhoneController.$inject = ['ContactsService', '$uibModalInstance', 'urlPhones'];

export default ModalPhoneController