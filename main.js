var menu_btn = document.querySelector('.menu-btn');
var side_nav = document.querySelector('.side-nav');
var nav_bars = document.querySelector('.nav_bars');


menu_btn.onclick = function(){
   side_nav.style.display="block";
   if(side_nav.style.right=="-210px"){
      side_nav.style.right="0";
      
   }
   else{
      side_nav.style.right="-210px"
   }
}

var nav_btn = document.querySelectorAll('.nav-btn');


for(i=0;i<nav_btn.length;i++){
   var bbn = nav_btn[i];
   bbn.addEventListener('click',()=>{
    side_nav.style.display="none";
})
}
window.addEventListener('scroll',()=>{
   const header = document.querySelector('.header');
   if(this.pageYOffset > 100){
      header.style.backgroundColor="gray";
   }
   else{
      header.style.backgroundColor="#8080806e";
   }
})

/*----------------------this is the script for the project section--------------*/
    
let menu_image = document.querySelectorAll('.menu-image img');
let popup_image = document.querySelector('.popup-image')
let popup_img = document.querySelector('.popup-image img')
let pop=document.querySelector('.pop')


menu_image.forEach(image=>{
  image.addEventListener('click',()=>{
    popup_image.style.display='block'
    popup_img.src= image.getAttribute('src')
  })
});

pop.addEventListener('click',()=>{
  popup_image.style.display='none'
});


/*----------------------the project section ends here--------------*/




const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
accordionItemHeaders.forEach(accordionItemHeader =>{
   accordionItemHeader.addEventListener("click", event =>{
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody= accordionItemHeader.nextElementSibling;
      if(accordionItemHeader.classList.contains("active")){
         accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else{
         accordionItemBody.style.maxHeight = 0;
      }
   });
});

