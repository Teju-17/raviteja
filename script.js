const wrapper =  document.querySelector('.wrapper');
const loginLink = document.querySelector('.login_link');
const regsiterLink = document.querySelector('.register_link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
regsiterLink.addEventListener('click',()=>{
    wrapper.classList.add('active')
});
loginLink.addEventListener('click',()=>{

    wrapper.classList.remove('active')
});
btnPopup.addEventListener('click',()=>{ 
   wrapper.classList.add('active-popup')
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
});