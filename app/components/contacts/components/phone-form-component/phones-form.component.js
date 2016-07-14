import template from './phones-form.html';
import controller from './phones-form.controller';

let phonesFormComponent = {
    template,
    controller,
    bindings: {
        id: '<'
    }
};

export default phonesFormComponent;