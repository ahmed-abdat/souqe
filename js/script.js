let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    logup.classList.remove("active")
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    let shopBox = document.querySelectorAll(".shopping-cart .box");
    let defaulte = document.querySelector(".shopping-cart .defaulte");
    if(shopBox.length == 0){
        defaulte.style.display = "block"
    }else {
        defaulte.style.display = "none"
    }
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    logup.classList.remove("active")
    navbar.classList.remove('active');
}






let creatAcount = document.getElementById("creatAcount"),
logup = document.querySelector(".logup-form")

creatAcount.addEventListener("click",()=>{
    user.value = ""
    userEmail.value = ""
    pass.value = ""
    loginForm.classList.remove("active")
    logup.classList.add("active")
    user.focus()

})

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    if(loginForm.classList.contains("active")){
        userLogin.value = ""
        passLogin.value = ""
    }
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    logup.classList.remove("active")
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    logup.classList.remove("active")
}



window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    logup.classList.remove("active")
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}