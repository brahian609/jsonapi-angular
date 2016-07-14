class ModalPhoneController {

    constructor(ContactsService, $uibModalInstance, urlPhones, id) {

        this.$uibModalInstance = $uibModalInstance;
        this.isCollapsed = true;
        this.id = id;

        ContactsService.getPhones(urlPhones).then(({data}) => {
            this.phones = data;
        }).catch(reason => {
            console.log('reason');
            console.log(reason);
        });

        console.log('urlPhones');
        console.log(urlPhones);

    }

    cancel() {
        this.$uibModalInstance.close();
    }


}

ModalPhoneController.$inject = ['ContactsService', '$uibModalInstance', 'urlPhones', 'id'];

export default ModalPhoneController