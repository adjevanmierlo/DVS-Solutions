const btn = document.querySelector('.register');
//  functie om ervoor te zorgen dat het login form verdwijnt op click en het register tevoorschijn komt
btn.addEventListener('click', (e) => {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.opacity = ('0.5');
    // console.log('click');
});
