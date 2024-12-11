// Home swiper
let Homeswiper = new Swiper('.home_swiper', {
    loop: true, 
    spaceBetween: -24, 
    grabCursor: true, 
    slidesPerView: 3, // Show three slides at once
    centeredSlides: 'auto', 

    autoplay: { 
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220:{
            spaceBetween: -12,
        },
    }
});



// Swiper for Features Section
let Featuresswiper = new Swiper('.features_container', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1220:{
            spaceBetween: -12,
        },
    }
});

