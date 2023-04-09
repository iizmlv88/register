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
        // localStorage.setItem('user', JSON.stringify(this))
        localStorage.setItem(this.email, JSON.stringify(this));
        alert('успішна регістрація')
        loginForm.style.display = 'block'
        registrationForm.style.display = 'none'
        userForm.style.display = 'none'

        pfirstName.innerHTML = ``
        plastName.innerHTML = ``
        pdate.innerHTML = ``
        pemail.innerHTML = ``
        ppassword.innerHTML = ``
        pconfirmPassword.innerHTML = ``

        document.getElementById('firstName').value = ``
        document.getElementById('lastName').value = ``
        document.getElementById('date').value = ``
        document.getElementById('email').value = ``
        document.getElementById('password').value = ``
        document.getElementById('confirmPassword').value = ``
    }

}

const registrationForm = document.getElementById('registrationForm')
const loginForm = document.getElementById('loginForm')

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const date = document.getElementById('date').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    const pfirstName = document.getElementById('pfirstName')
    const plastName = document.getElementById('plastName')
    const pdate = document.getElementById('pdate')
    const pemail = document.getElementById('pemail')
    const ppassword = document.getElementById('ppassword')
    const pconfirmPassword = document.getElementById('pconfirmPassword')

    

    const user = new User (firstName, lastName, date, email, password, confirmPassword)

    let ok = true

    if(firstName.trim().length < 2){
        pfirstName.innerHTML = `
        Поле Ім'я користувача - має місти більше 1 символа.
        `
        ok = false
    } else if(lastName.trim().length < 2 ){
        plastName.innerHTML = `
        Поле Прізвище користувача - має місти більше 1 символа.
        `;
        ok = false
    } else if(new Date(date) >= new Date()){
        pdate.innerHTML = `Поле Дата народження - має містити дату, що є меншою за сьогоднішню.`
        ok = false
    } else if(isNaN(new Date(date))){
        pdate.innerHTML = `Поле Дата народження - має містити коректну дату.`
        ok = false
    } else if(password.trim().length < 6){
        ppassword.innerHTML = `
        Поле Пароль - має містити більше ніж 6 символів без пробілів.
        `
        ok = false;
    } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
    ppassword.innerHTML = `
        Поле Пароль - має містити як мінімум одну велику літеру, одну цифру та один спеціальний символ.
    `
    ok = false;
    } else if(password != confirmPassword ){
        pconfirmPassword.innerHTML = `
        Поле Підтвердити пароль - має співпадати з полем Пароль.
        `
        ok = false
    } else {
        user.register()
    } 
    // if (!ok){
    //       pfirstName.innerHTML = `
    //     Поле Ім'я користувача - має місти більше 1 символа.
    //     `
    //      plastName.innerHTML = `
    //     Поле Прізвище користувача - має місти більше 1 символа.
    //     `;
    //     pdate.innerHTML = `Поле Дата народження - має містити коректну дату.`
    //     ppassword.innerHTML = `
    //     Поле Пароль - має містити більше ніж 6 символів без пробілів та як мінімум одну велику літеру, одну цифру та один спеціальний символ.
    //     `
    //     pconfirmPassword.innerHTML = `
    //     Поле Підтвердити пароль - має співпадати з полем Пароль.
    //     `
    //     ok = false
    
    // }

})






const registerBtn = document.getElementById('registerBtn')
registerBtn.addEventListener('click', showRegister = () =>{
    loginForm.style.display = 'none'
    registrationForm.style.display = 'block'
})

loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const loginEmail = document.getElementById('logInEmail').value
    const logInPassword = document.getElementById('logInPassword').value

    const userData = localStorage.getItem(loginEmail)

    //якщо юзер дата є то 
    if (userData) {
        const user = JSON.parse(userData)
        if(user.password === logInPassword){
            loginForm.style.display = 'none'
            registrationForm.style.display = 'none'
            alert('вхід успішний')
            const userinfo = document.getElementById('userinfo')
            // userinfo.innerHTML = localStorage.getItem('test@ukr.net')
            const userForm = document.getElementById('userForm')
            userForm.style.display = 'flex'
            userForm.style.direction = 'column'
            userForm.style.justifyContent = 'center'
            userForm.style.alignItems = 'center'
           userinfo.innerHTML = `
           <li>Імя: ${user.firstName}</li>
           <li>Прізвище: ${user.lastName}</li>
           <li>День народження: ${user.date}</li>
           <li>Email: ${user.email}</li>
           <li>Пароль: ${user.password[0]}${user.password[1]}${user.password[2]}<span id="red" >******</span></li>
           `

        } else {
            alert('неправильний пароль')
        }
    } else {
        alert ('користувача з таким емейлом не знайдено')
    }

})

const goToLoginBtn = document.getElementById('goToLoginBtn')
goToLoginBtn.addEventListener('click', showlogin = () => {
    loginForm.style.display = 'block'
    registrationForm.style.display = 'none'
})

const deleteBtn = document.getElementById('delete')
deleteBtn.addEventListener('click', () => {
    localStorage.removeItem(document.getElementById('logInEmail').value)
    loginForm.style.display = 'block'
    registrationForm.style.display = 'none'
    userForm.style.display = 'none'
})
const exitBtn = document.getElementById('exit')
exitBtn.addEventListener('click', () => {
    loginForm.style.display = 'block'
    registrationForm.style.display = 'none'
    userForm.style.display = 'none'
})