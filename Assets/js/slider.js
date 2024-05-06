const swiperSlider = new Swiper ('.swiper' , {
    // loop:true,
    rewind:true,
    navigation: {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    },
    
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}) 
const swiperSlider2 = new Swiper ('.brand' , {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.slider-pagination2',
        clickable: true,
    },
    
}) 

const swiperSlider3 = new Swiper ('.mySwiper' , {
    rewind:true,
    // loop:true,
    // slidesPerView: 3,
    spaceBetween: 30,
    freeMode : true,
    navigation: {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    },

}) 
// const swipslider4 = new Swiper('.slider' , {
//     slidesPerView: 5,
//     spaceBetween: 30,
//     navigation: {
//         nextEl : '.swiper-button-next',
//         prevEl : '.swiper-button-prev'
//     },
//     pagination: {
//       el: ".slider-pagination",
//       clickable: true,
//     },
// })