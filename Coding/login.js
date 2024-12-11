// log in sign up 
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

const close_btn = document.querySelector("#close-btn");

close_btn.addEventListener('click', () => {
    window.location.href = "index.html"; // Replace with your home page URL
});


