let userEmail = getCookie('email');
console.log(userEmail);


//запрос на сервер получить данные с сервера
ajax('core/get_user_data.php', 'POST', getUserData, { "email": userEmail });

//извлекаем с куки нужные параметры (email)
function getCookie(cname) {
   let name = cname + "=";
   let decodedCookie = decodeURIComponent(document.cookie);
   //из строки делаем массив
   let ca = decodedCookie.split(';');
   for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
         c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
      }
   }
   return "";
}
//переменные для работы с ЛК
let lkUserGreeting; //имя user для приветсвия
const lkGreeting = document.querySelector('.lk-greeting'); //приветствия


//обработка рез-та
function getUserData(result) {
   //БД вытащила все данные пользователя
   console.log(result);
   //строку в массив
   result = JSON.parse(result);
   console.log(result);
   //поля автоматич заполнилиьс и подтянулись данные из БД
   document.querySelector('.lk-name').value = result.name;
   console.log(result.name);
   document.querySelector('.lk-password1').value = result.password;

   //приветствие в header
   lkUserGreeting = result.name;
   lkGreeting.innerHTML = `Здравствуйте ${lkUserGreeting}`;
}
//по клику на кнопку отправляем данные на сервер

document.querySelector('.lk-submit').onclick = function (event) {
   event.preventDefault();
   let updateData = {
      "email": userEmail,
      "name": document.querySelector('.lk-name').value,
      "password": document.querySelector('.lk-password1').value
   }

   ajax('core/update_user_data.php', 'POST', updateUserData, updateData);
}

function updateUserData(result) {
   console.log(result);
   if (result == 1) {
      alert('Данные успешно обновлены!')
   } else {
      alert('Ошибка обновления.')
   }
}
//===========================================================================================
//скрывать и показывать элементы при авторизации  ГЛОБАЛЬНО
//если есть куки почта

const mainPageHeader = document.querySelector('.menu__list');
const lkPageHeader = document.querySelectorAll('.lk');
const formLkUpdate = document.querySelector('.form-lk__update');
const profile = document.querySelector('.profile');

//кнопки навигации
const buttonBookmark = document.querySelector('.button__bookmark');
const buttonPlus = document.querySelector('.button__plus');

if (userEmail) {
   console.log(lkPageHeader);
   //убираем кнопки -вход и регистрация  в хедер 
   mainPageHeader.classList.add('hidden');
   lkPageHeader.forEach(function (element) {
      element.classList.add('show');
   });
   profile.addEventListener('click', function () {
      formLkUpdate.classList.toggle('show');
   });
   buttonPlus.classList.add('show');
   buttonBookmark.classList.add('show');
} else {
   mainPageHeader.classList.remove('hidden');
   lkPageHeader.forEach(function (element) {
      element.classList.add('show');
   });
   buttonPlus.classList.remove('show');
   buttonBookmark.classList.remove('show');
}

//============================================================================
//выделение текста и копирование в поле закладки

// Получение выделенного текста с помощью анонимной самовызывающейся функции.
function get_text() {
   // Объявление переменной.
   let text;
   let textarea = document.querySelector('.textarea');
   if (window.getSelection) {
      // Современный способ.
      text = window.getSelection().toString();
   } else if (document.getSelection) {
      // Старый способ.
      text = document.getSelection();
   } else if (document.selection) {
      // IE.
      text = document.selection.createRange().text;
   }

   // Вывод результата, если получен выделенный текст.
   if (text) {
      textarea.innerHTML = `${text}`;
      console.log(textarea);
   }
}

// Применять эту функцию к тегам, содержащим текстовую информацию.
var p_arr = document.getElementsByTagName("p");

for (var i = 0; i < p_arr.length; i++) {
   p_arr[i].onmouseup = get_text;
}

//===========================================================================
//создание закладок
document.querySelector('#bookmark-submit').onclick = function (event) {
   event.preventDefault();
   //console.log('work');

   let title = document.querySelector('#bookmark-title').value;
   let text = document.querySelector('#bookmark-text').value;
   let emailUser = userEmail;

   let dataBookmarks = {
      "title": title,
      "text": text,
      "userEmail": emailUser,
   }

   ajax('core/bookmarksadd.php', 'POST', bookmarksAdd, dataBookmarks);
}
function bookmarksAdd(result2) {
   console.log(result2);
   if (result2 == 1) {
      alert('Закладка успешно сохранена!');
   } else if (result2 == 2) {
      alert('Заполните поля!');
   }
}
//==============================================================================================
//получить все закладки 

let emailUser = userEmail;
let dataEmailUser = {
   "userEmail": emailUser,
}

ajax('core/get_bookmarks_data.php', 'POST', getBookmarksData, dataEmailUser);

let bookmarksPage = document.querySelector('.bookmarks__page');
let bookmarksItem = document.querySelector('.bookmarks__item');
let bookmarksTitle = document.querySelector('.bookmark-title');
let bookmarkText = document.querySelector('.bookmark__text');


//обработка рез-та
function getBookmarksData(result) {
   //БД вытащила
   let response = JSON.parse(result);
   console.log(response);



   //циклом идем по объектам
   for (let i = 0; i < response.length; i++) {
      let qwerty = response[i]['number'];
      console.log(qwerty);
      let bookmarkText = ` 
      <div class="bookmark__item">
      <div class="bookmark__panel">
      <div class="bookmark-title">
         <textarea type="text" class="form__input bookmarktitle"> ${response[i].title}</textarea>
      </div>
      <div class="">
         <button number="${response[i]['number']}" data-tooltip="Сохранить изменения" type="submit" class="button-nav bookmark__edit" type="update">
            <img  src="./img/icons/edit.png" alt="Редактровать">
         </button>
      </div>
      <div class="">
      <button number="${response[i]['number']}" data-tooltip="Удалить закладку" type="submit" href="#" class="button-nav bookmark__delete">
            <img src="./img/icons/delete.png" alt="Удалить">
         </button>
      </div>
      </div>
      
      <textarea class="bookmark__text form__input textarea">${response[i].description}
      </textarea>
      </div>`;
      bookmarksPage.insertAdjacentHTML("afterbegin", bookmarkText);

   }
}

//====================================================================
//по клику на кнопку  с карандашом отправляем данные на сервер
window.addEventListener('load', bookmarkEdit);
function bookmarkEdit() {
   const bookmarkEdit = document.querySelectorAll('.bookmark__edit');
   console.log(bookmarkEdit);
   const bookmarkEditArray = Array.from(bookmarkEdit);
   console.log(bookmarkEditArray);

   bookmarkEditArray.forEach(btn => {
      btn.addEventListener('click', function (event) {
         event.preventDefault();
         //получаем значение атрибута кнопки
         let editAttribute = btn.getAttribute('number');
         console.log(editAttribute);
         const bookmarkItem = event.target.closest('.bookmark__item');
         console.log(bookmarkItem);

         let title = bookmarkItem.querySelector('.bookmarktitle');
         let text = bookmarkItem.querySelector('.bookmark__text');
         console.log(title);
         title.addEventListener('change', changeTextarea);
         text.addEventListener('change', changeTextareaText); // 
         //слушаем изменения поля 
         function changeTextarea(title) {
            return title.value;
         };
         function changeTextareaText(text) {
            return text.value;
         };
         let titleValue = changeTextarea(title);
         let textValue = changeTextareaText(text);
         console.log(titleValue);
         let editeBookmarkData = {
            "userEmail": emailUser,
            "number": editAttribute,
            "title": titleValue,
            "text": textValue,
         }
         ajax('core/update_bookmarks_data.php', 'POST', updateBookmarks, editeBookmarkData);
      });
   });
   function updateBookmarks(result2) {
      console.log(result2);
      if (result2 == 1) {
         alert('Данные успешно обновлены!');

      } else if (result2 == 2) {
         alert('Ошибка обновления. Повторите попытку позже!');
      }
   }

}


//по клику на кнопку удаляем закладку из БД

window.addEventListener('load', bookmarkDelete);
function bookmarkDelete() {
   const bookmarkDelete = document.querySelectorAll('.bookmark__delete');
   console.log(bookmarkDelete);
   const bookmarkDeleteArray = Array.from(bookmarkDelete);
   console.log(bookmarkDeleteArray);

   bookmarkDeleteArray.forEach(btn => {
      btn.addEventListener('click', function (event) {
         event.preventDefault();
         //получаем значение атрибута кнопки
         let deleteAttribute = btn.getAttribute('number');
         console.log(deleteAttribute);
         let deleteBookmarkData = {
            "userEmail": emailUser,
            "number": deleteAttribute,
         }
         ajax('core/delete_bookmarks.php', 'POST', deleteBookmarks, deleteBookmarkData);
      })
   })
   function deleteBookmarks(result2) {
      console.log(result2);
      if (result2 == 1) {
         alert('Закладка удалена!');
         location.reload();
      } else if (result2 == 2) {
         alert('Ошибка. Повторите попытку позже!');
      }
   }

}

