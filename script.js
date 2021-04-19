const toggle = document.getElementById('showPassword');

toggle.addEventListener('click', function(e){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);    
});

