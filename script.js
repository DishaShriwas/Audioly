const registerbtnlink = document.querySelector('.registerbtnlink');
const loginbtnlink = document.querySelector('.loginbtnlink');
const wrapper = document.querySelector('.wrapper');

registerbtnlink.addEventListener('click',() =>{
    wrapper.classList.toggle('active');
});

loginbtnlink.addEventListener('click',() =>{
    wrapper.classList.toggle('active');
});

