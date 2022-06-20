function scrollTo(element) {
   window.scroll({
left: 0,
top: element.offsetTop,
behavior:'smooth'
   }) 
}

let sect1 = document.querySelector('#blog1');
let blog1 = document.querySelector('#section-1');

sect1.addEventListener('click',()=> {
    scrollTo(blog1);
})

let sect2 = document.querySelector('#blog2');
let blog2 = document.querySelector('#section-2');

sect2.addEventListener('click',()=> {
    scrollTo(blog2);
})

let sect3 = document.querySelector('#blog3');
let blog3 = document.querySelector('#section-3');

sect3.addEventListener('click',()=> {
    scrollTo(blog3);
})