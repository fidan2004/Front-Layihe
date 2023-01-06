let searchForm = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = () =>{
    searchForm.classList.toggle('active');
    
}

let menubar = document.querySelector('.menubar');

document.querySelector('#menu-btn').onclick = () =>{
    menubar.classList.toggle('active');
    
}

let filtermenubar = document.querySelector('.filter-menubar');
let filtermenubarli = document.querySelector('.filter-menubar ul li');
let filterbtn = document.querySelector('.filter-btn')

document.querySelector('.filter-btn').onclick = () =>{
    filtermenubar.classList.toggle('activee');
    filtermenubarli.classList.toggle('activee');
    
}


const liItem = document.querySelectorAll('.filter ul li');
    const imgItem = document.querySelectorAll('.box img');
    const contents = document.querySelectorAll('.content p');
    const product = document.querySelectorAll('.product');
    const button1 = document.querySelectorAll('.button');
    const button2 = document.querySelectorAll('.button2');

    liItem.forEach(li => {
       li.onclick = function() {
        //active
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

        //Filter
        const value = li.textContent;
        imgItem.forEach(img => {
            contents.forEach(cntnt =>{
                button1.forEach(btn1=>{
                    button2.forEach(btn2=>{
                
           img.style.display = 'none';
            cntnt.style.display='none';
            btn1.style.display='none';
            btn2.style.display='none';
           
           
         
            
            if (img.getAttribute('data-item').includes(value) || value == "All Menu") {
                img.style.display = 'block';
                
            }

            if(cntnt.getAttribute('data-item').includes(value) || value == "All Menu")
                {
                cntnt.style.display='block';
                
                }
                if (btn1.getAttribute('data-item').includes(value) || value == "All Menu") 
                {
                btn1.style.display='block';
               
            
                }
                if (btn2.getAttribute('data-item').includes(value) || value == "All Menu") 
                {
                btn2.style.display='block';
               
            
                }
        })
    })
})
        
    })
 }
});


// youtube video starts
$('#videolink').magnificPopup({
    type:'inline',
    midClick:true

})



// youtube video ends






// swiper starts
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
//   swiper ends