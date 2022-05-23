const form = document.getElementById("form");
const inputs = document.querySelectorAll('#form input');

const expressions = {
    firstname: /^[a-zA-ZÀ-ÿ\s]{1,16}$/,
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,12}$/
}

const fields = {
    firstname: false,
    lastname: false,
    email: false,
    phone: false
}

const validateForm = (e) => {
    switch (e.target.name) {
        case "firstname":
            validateField(expressions.firstname, e.target, 'firstname');
        break;

        case "lastname":
            validateField(expressions.lastname, e.target, 'lastname');
        break;

        case "email":
            validateField(expressions.email, e.target, 'email');
        break;

        case "phone":
            validateField(expressions.phone, e.target, 'phone');
        break;
    }
}

const validateField = (expression, input, field) => {
    if(expression.test(input.value)) {
        document.getElementById(`group__${field}`).classList.remove('form__group--incorrect');
        document.getElementById(`group__${field}`).classList.add('form__group--correct');
        document.querySelector(`#group__${field} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
        document.querySelector(`#group__${field} .form__input-error`).classList.remove('form__input-error--active');
        fields[field] = true;
    } else {
        document.getElementById(`group__${field}`).classList.add('form__group--incorrect');
        document.getElementById(`group__${field}`).classList.remove('form__group--correct');
        document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__${field} i`).classList.add('fa-times-circle');
        document.querySelector(`#group__${field} .form__input-error`).classList.add('form__input-error--active');
        fields[field] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const terms = document.getElementById('terms');
    if(fields.firstname && fields.lastname && fields.email && fields.phone && terms.checked) {
        form.reset();

        document.getElementById('form__message-success').classList.add('form__message-success--active');
        setTimeout(() => {
            document.getElementById('form__message-success').classList.remove('form__message-success--active')
        }, 5000);

        document.querySelectorAll('.form__group--correct').forEach((icon) => {
            icon.classList.remove('form__group--correct');
        });
     } else {
         document.getElementById('form__form-message').classList.add('form__form-message--active');
         setTimeout(() => {
            document.getElementById('form__form-message').classList.remove('form__form-message--active')
        }, 5000);
     }

});

