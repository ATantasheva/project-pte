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



   if (counters) {
      counters.forEach(counter => {
         let activeItemIndex = 0;
         let value = document.querySelector('.counter__input').value;
         value = Number(value);
         console.log(value);
         //inputCount.innerHTML = `${1} из ${searchLink.length}`;
         counterBtnMin.addEventListener('click', function () {
            activeItemIndex = 0;
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
            activeItemIndex = 0;
            value = activeItemIndex;
            console.log(value);
            if (activeItemIndex < searchLink.length) {
               activeItemIndex++;
               if (activeItemIndex >= searchLink.length) {
                  activeItemIndex = searchLink.length;
                  value = activeItemIndex;
                  console.log(activeItemIndex);
               }
            }
            searchLink[activeItemIndex].scrollIntoView({ behavior: 'smooth' });

         })
         inputCount.innerHTML = `${value} из ${searchLink.length}`;

      });
   };
}



