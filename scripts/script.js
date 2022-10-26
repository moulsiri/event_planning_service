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