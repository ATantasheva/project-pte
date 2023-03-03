'use strict'


//спойлеры для навигации слева
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
//==========================================================================================================
   //скрыть показать приказ 
   const order = document.querySelector('.order');
   const orderBtn = document.querySelector('.order__btn');

   orderBtn.addEventListener('click', function() {
      order.classList.toggle('show');
      
      if(order.classList.contains('show')) {
         orderBtn.innerHTML = 'Скрыть документ';
      } else {
         orderBtn.innerHTML = 'Показать документ';
      }
   });
//============================================================================================================================
//строка поиска

let lastResFind = "";
let copy_page = "";

function TrimStr(s) {
   s = s.replace(/^\s+/g, '');
   return s.replace(/\s+$/g, '');
 }

 function FindOnPage(inputId) {
   let obj = window.document.getElementById(inputId);
   console.log(obj);
   let textToFind;
 
   if (obj) {
     textToFind = TrimStr(obj.value);
   } else {
     alert("Введенная фраза не найдена");
     return;
   }
   if (textToFind == "") {
     alert("Вы ничего не ввели");
     return;
   }
 
   if (document.body.innerHTML.indexOf(textToFind) == "-1")
     alert("Ничего не найдено, проверьте правильность ввода!");
 
   if (copy_page.length > 0) {
      document.body.innerHTML = copy_page;
      
   }
   else {copy_page = document.body.innerHTML;}
 
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");
   document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a name=" + textToFind + " style='background:#FFF820'>" + textToFind + "</a>");
  // lastResFind = textToFind;
  console.log(lastResFind);
   window.location = '#' + textToFind;
 }

 //забрать из инпута данные и вывести их вбок для быстрой навигации

 