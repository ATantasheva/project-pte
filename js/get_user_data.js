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

//обработка рез-та
function getUserData(result) {
   //БД вытащила все данные пользователя
   console.log(result);
   //строку в массив
   result = JSON.parse(result);
   console.log(result);
   //поля автоматич заполнилиьс и подтянулись данные из БД
   document.querySelector('.lk-name').value = result.name;
   document.querySelector('.lk-password1').value = result.password;
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
      alert('Ощибка обновления.')
   }
}
