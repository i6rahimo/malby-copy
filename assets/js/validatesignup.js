const validationSignup = new JustValidate('#signup__form');

validationSignup
.addField('#user_login', [
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 30,
  },
  {
    rule: 'required',
    value: true,
    errorMessage: 'Введите логин!',
    validator: function() {
        const forErr = document.querySelector('.input_user')
        forErr.classList.add('error')
        console.log('qwe');
   },
  },
])
.addField('.form__password', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Не меньше 3 знаков'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Не больше 30 знаков'
  },
  {
    rule: 'required',
    value: true,
    errorMessage: 'Введите пароль',
    function: () => {
    const forErr = document.querySelector('.form-error')
           forErr.classList.add('error')
  }
  },
]).onSuccess((event) => {

});