class User {
    constructor(firstName, lastName, date, email, password, confirmPassword){
    this.firstName = firstName
    this.lastName = lastName
    this.date = date
    this.email = email
    this.password = password
    this.confirmPassword = confirmPassword
    }
    register(){
        console.log(this);
        pfirstName.innerHTML = ``;
        plastName.innerHTML = ``;
        pdate.innerHTML = ``;
        pemail.innerHTML = ``;
        ppassword.innerHTML = ``;
        pconfirmPassword.innerHTML = ``;

        document.getElementById('firstName').value = ``
        document.getElementById('lastName').value = ``
        document.getElementById('date').value = ``
        document.getElementById('email').value = ``
        document.getElementById('password').value = ``
        document.getElementById('confirmPassword').value = ``
    }
}

const registrationForm = document.getElementById('registrationForm')


registrationForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const date = document.getElementById('date').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    const pfirstName = document.getElementById('pfirstName');
    const plastName = document.getElementById('plastName');
    const pdate = document.getElementById('pdate');
    const pemail = document.getElementById('pemail');
    const ppassword = document.getElementById('ppassword');
    const pconfirmPassword = document.getElementById('pconfirmPassword');

    

    const user = new User (firstName, lastName, date, email, password, confirmPassword)

    let ok = true;

    if(firstName.length < 2 ){
        pfirstName.innerHTML = `
        Поле Ім'я користувача - має місти більше 1 символа.
        `;
        ok = false;
    } else if(lastName.length < 2 ){
        plastName.innerHTML = `
        Поле Прізвище користувача - має місти більше 1 символа.
        `;
        ok = false;
    } else if(date > new Date()){
        ok = false;
    } else if(new Date(date).toString() === "Invalid Date"){
        pdate.innerHTML = `
        Поле Дата народження - має містити дату.
        `;
        ok = false;
    } else if(password.length < 6 ){
        ppassword.innerHTML = `
        Поле Пароль - має містити більше ніж 6 символів.
        `;
        ok = false;
    } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
    ppassword.innerHTML = `
        Поле Пароль - має містити як мінімум одну велику літеру, одну цифру та один спеціальний символ.
    `;
    ok = false;
    } else if(password != confirmPassword ){
        pconfirmPassword.innerHTML = `
        Поле Підтвердити пароль - має співпадати з полем Пароль.
        `;
        ok = false;
    } else {
        user.register();
    } 

})
