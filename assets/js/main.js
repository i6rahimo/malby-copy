window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
function tabBtn() {

    const btn = document.querySelectorAll('.can__item');
    btn.forEach(e => {
        e.addEventListener('click', ()=> {
            btn.forEach((e) => {
                e.classList.remove('active')
            })
            e.classList.add('active')
        })
})
}

tabBtn();


function headerNavShow() {
    const burger = document.querySelector('.header__burger'),
          nav = document.querySelector('.header__nav');

    burger.addEventListener('click', (el)=> {
        nav.classList.toggle('active')
        burger.classList.toggle('active')
    })
}
headerNavShow()


function accordionOpen() {
    const accordionItem = document.querySelectorAll('.accordion__item')
    accordionItem.forEach(e => {
        e.addEventListener('click', el => {
            const self = el.currentTarget;
            self.classList.toggle('open')
            console.log(self);
        })
    })
}
accordionOpen()


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 4,
    // spaceBetween: 30,
    centeredSlides:true,
    // If we need pagination
    // pagination: {
    //   clickable: true,
    //   el: '.swiper-pagination',
    //   type: 'progressbar',
    // },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
          centeredSlides:true,
        },
        // when window width is >= 480px
        520: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1116: {
            slidesPerView: 4,
          spaceBetween: 30
        } 
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    scrollbar: {
      draggable: true,  
      el: '.swiper-scrollbar',
    },
  });


// тебе нужно небольшой скрипт написать, который ищет номер слайда и подставляет его стили кружочка типа scaleX( calc(1 * [номер слайда]) )



  function historyTabs() {
    const historyTabsBtn = document.querySelectorAll('.history__item');
    const tabsItem = document.querySelectorAll('.history__takes')
    historyTabsBtn.forEach(e => {
        e.addEventListener('click', ()=> {
            let tabId = e.getAttribute('data-tab');
            const curretntTab = document.querySelectorAll(tabId)
            
            
            tabsItem.forEach((e)=> {
                e.classList.remove('active')                
            })
            curretntTab.forEach(e => {
              e.classList.remove('active')
            })
            curretntTab.forEach(e => {
              e.classList.add('active')
            })
        })
    })
  }

  historyTabs()



  const imgClose = document.querySelectorAll('.form-close')
  imgClose.forEach(e => {
      e.addEventListener('click', ()=> {
        // const oldUrl = document.referrer;
        // window.history.back()
        window.history.go(-1);
return false;
      })
  });

 

  function statusDeals() {
    const btnStatus = document.querySelectorAll('.deals-btn-arbitraj'),
          statusProgressBar = document.querySelectorAll('.deals-progress')
          statusText = document.querySelectorAll('.deals__banner');

    btnStatus.forEach(e=> {
      e.addEventListener('click', element => {
        statusProgressBar.forEach(e=> {
          e.classList.add('crush')
        })
        statusText.forEach(item=> {item.classList.add('crush')})
      })
    })
  }

  statusDeals()





});