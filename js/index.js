
document.getElementById('menu-btn').addEventListener('click', function () {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});

document.getElementById('contact-btn').addEventListener('click', function () {
    var inputElement = document.getElementById('name-box');
    var inputEmail = document.getElementById('email-box');
    var inputNumber = document.getElementById('number-box');
    var name = inputElement.value;
    var email=inputEmail.value;
    var number=inputNumber.value;
    if(name==='' || email==='' || number==='' )
    {
        alert("Sorry ! You haven't filled all details.")
    }
    else{
        alert("Thanku "+name)
    alert("Your details has been sent✅");
    }
});