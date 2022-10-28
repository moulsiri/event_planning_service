import {states} from './json/states.js'

let nav=document.querySelector('nav');
let root=document.documentElement;
 window.addEventListener("scroll",function(e){
    // console.log(e)
    if(root.scrollTop>nav.scrollHeight){
        nav.style.backgroundColor="#fff";
        nav.style.boxShadow="0 0 10px rgba(0, 0, 0, 0.18)"
        root?.style.setProperty(
            "--navText",
           "#222222"
          );
    }else{
        nav.style.backgroundColor='transparent'
        root?.style.setProperty('--navText','#fff')
        nav.style.boxShadow="none"


    }
 })


function statesCard(){
    let tmp="";
    Object.keys(states).forEach((e)=>{
        tmp+=` <div class="vCard">
        <div class="vPic">
            <img src=${states[e].img} alt="">
        </div>
        <h4>${states[e].name}</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, ipsa laudantium? Iusto!</p>
        <button>Select Vanue</button>

    </div>`
    })
    document.querySelector("#vCards").innerHTML=tmp;
}
statesCard();
 $('.sCards').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    prevArrow: $('#serviceSlider i:first-child'),
    nextArrow: $('#serviceSlider i:last-child'),
  });
  $('#vCards').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    prevArrow: $('#vanueSlider i:first-child'),
    nextArrow: $('#vanueSlider i:last-child'),
  });