$('#videolink2').magnificPopup({
    type:'inline',
    midClick:true

});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: "cards",
  
    // If we need pagination
    //  pagination: {
    //   el: '.swiper-pagination',
    //   dynamicBullets: true,
    //  },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });