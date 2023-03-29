//строка поиска

let lastResFind = "";
let copy_page = "";
const allBlocks = document.querySelector('.order__main');
console.log(allBlocks);
function TrimStr(s) { //удаляем пробелы
   s = s.replace(/^\s+/g, '');
   return s.replace(/\s+$/g, '');
}
function FindOnPage(inputId) {
   let obj = document.getElementById(inputId);
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
   if (allBlocks.innerHTML.indexOf(textToFind) == "-1")
      alert("Ничего не найдено, проверьте правильность ввода!");
   if (copy_page.length > 0) {
      allBlocks.innerHTML = copy_page;
   }
   else {
      copy_page = allBlocks.innerHTML;
   }
   //перерисовка
   allBlocks.innerHTML = allBlocks.innerHTML.replace(eval("/name=" + lastResFind + "/g"), " ");
   allBlocks.innerHTML = allBlocks.innerHTML.replace(eval("/" + textToFind + "/g"),
      "<a class=yellow id=scroll data-input=" + textToFind + " style='background:#FFF820'>" + textToFind + "</a>");
   lastResFind = textToFind;

   //ищем все желтые
   let searchLink = document.querySelectorAll('[data-input]');
   console.log(searchLink);

   //переводим в массив
   let searchLinkArray = Array.from(searchLink);
   console.log(searchLinkArray);


   //счетчик 
   const counters = document.querySelectorAll('[data-counter]');
   counters.forEach(count => {
      count.classList.add('show'); // показать при нажатии кнопки найти внутри функциии поиска
   })
   let inputCount = document.querySelector('.search-counter');
   console.log(inputCount);






   const counterBtn = document.querySelectorAll('.counter__button'); //получаю кнопки + и -
   const counterBtnPlus = document.querySelector('.counter__button_plus'); //только кнопка плюс
   const counterBtnMin = document.querySelector('.counter__button_min'); //только кнопка плюс

   /*
   counterBtnPlus.addEventListener('click', function () { //вешаю клик
      const p1 = document.querySelectorAll('[data-input]'); //получаю все желтые слова
      console.log(p1);
      for (let i; i <= p1.length; i++) {
         i.classList.toggle('number');
         let p2 = document.querySelector('.number');
         console.log(p2);
         p2.scrollIntoView()
      }
   
      p1.forEach(
         p2 => {
            console.log(p2);
            p2.classList.add('number'); //в консоли выходит кажд элемент но мне нужно повесить какой -то класс
            //элементу чтобы сделать scrollIntoView() а потом этот класс убрать или вешать всем класс а прискролле убирать
            p2.scrollIntoView(); //пролистывание есть но к последнему(про параметры я знаю)
   
         });
   });
   
   */
   // searchLinkArray[value].scrollItnoView()

   if (counters) {
      counters.forEach(counter => {
         let activeItemIndex = 0;
         let value;
         console.log(value);
         //inputCount.innerHTML = `${1} из ${searchLink.length}`;
         counterBtnMin.addEventListener('click', function () {
            activeItemIndex--;
            value = activeItemIndex;
            if (activeItemIndex <= 0) {
               activeItemIndex = 0;
               value = activeItemIndex + 1;
               console.log(activeItemIndex);
            }
            searchLink[activeItemIndex].scrollIntoView({ behavior: 'smooth' });
            console.log(activeItemIndex);

         })
         counterBtnPlus.addEventListener('click', function () {
            activeItemIndex++;
            value = activeItemIndex;
            console.log(value);
            if (activeItemIndex >= searchLink.length) {
               activeItemIndex = searchLink.length;
               value = activeItemIndex;
               console.log(activeItemIndex);
            }
            searchLink[activeItemIndex].scrollIntoView({ behavior: 'smooth' });

         })
         inputCount.innerHTML = `${value} из ${searchLink.length}`;

      });
   };
}
/*
if (counters) {
   counters.forEach(counter => {
      counter.addEventListener('click', e => {
         const target = e.target;
         let value = parseInt(target.closest('.counter').querySelector('input').value);
         console.log(value); //этот инпут скрыт и дублируется в   inputCount.innerHTML
         inputCount.innerHTML = `${value} из ${searchLinkArray.length}`;
         if (target.closest('.counter__button')) {

            if (value <= searchLinkArray.length) {
               if (value >= searchLinkArray.length) {
                  value = searchLinkArray.length;
                  if (target.classList.contains('counter__button_min')) {
                     value--;
                  }
               } else if (target.classList.contains('counter__button_plus')) {
                  value++;

               } else if (value <= 1) {
                  value = 1;
               } else if (target.classList.contains('counter__button_min')) {
                  value--;

               }
               target.closest('.counter').querySelector('input').value = value;
               inputCount.innerHTML = `${value} из ${searchLinkArray.length}`;
            }
         }
      })
   })
}
*/


