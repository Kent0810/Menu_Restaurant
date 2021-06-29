let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
//darkmode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick  =() =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }
    else{
         darkmode.classList.replace('bx-sun','bx-moon');
         document.body.classList.remove('active');      
    }
}
//Cart
let cart = document.querySelector('#cart');
let cartlist = document.querySelector('#cart-list');
cart.onclick = () =>{
    cartlist.classList.toggle('active');
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
let x = document.querySelector('#close');
x.onclick = () => {
    cartlist.classList.toggle('active');
}

//Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset:true
});
sr.reveal('.home-text,.home-img,.about-img,.heading,.menu-container,.about-text,.services-container,.connect-text,.but,.footer-container',{interval:200 })


