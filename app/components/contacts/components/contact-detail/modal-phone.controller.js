(function () {
    'user strict';

    class ModalPhoneController {

        constructor($scope, $uibModalInstance, urlPhones) {

            this.$uibModalInstance = $uibModalInstance;
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

    ModalPhoneController.$inject = ['$scope', '$uibModalInstance', 'urlPhones'];

    angular.module('app.components.contacts').controller('ModalPhoneController', ModalPhoneController);

}());