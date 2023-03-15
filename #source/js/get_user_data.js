let userEmail = getCookie('email');
console.log(userEmail);


//запрос на сервер
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


if (userEmail) {
   console.log(lkPageHeader);
   //убираем кнопки -вход и регистрация  в хедер 
   mainPageHeader.classList.add('hidden');
   lkPageHeader.forEach(function (element) {
      element.classList.add('show');
   });
   profile.addEventListener('click', function () {
      formLkUpdate.classList.toggle('show');
   })
} else {
   mainPageHeader.classList.remove('hidden');
   lkPageHeader.forEach(function (element) {
      element.classList.add('show');
   });
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
