'use strict'
//блок раздела
const block = document.querySelectorAll('.block');
console.log(block);
//текст раздела
const blockText = document.querySelectorAll('.block__text');
console.log(blockText);
//кнопку раздела
const blockBtn = document.querySelectorAll('.block__title');
console.log(blockBtn);
const blockItem = document.querySelectorAll('.block__item');
console.log(blockItem);
   block.forEach(el => {
      console.log(el);
      el.classList.add('_init');
   })
 
   blockBtn.forEach(btn => {
      btn.addEventListener('click' ,showSpoller)
   });
   function showSpoller(e) {
  const event = e.target;
  event.classList.toggle('_active');
  const itemText = event.nextElementSibling;
  console.log(itemText);
  itemText.classList.toggle('_active');
   }