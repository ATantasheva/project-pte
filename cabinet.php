<?php
if(!isset($_COOKIE['email']) OR trim($_COOKIE['email']) == '') {
   header("location: index.html");
   exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
   <meta name="format-detection" content="telephone=no">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <link rel="stylesheet" href="css/style.css">
   <link rel="shortcut icon" href="favicon.ico"> 
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   <div class="wrapper">
      <div class="button__navigation">
         <div class="button button__up">
            <a href="#up" class="button-nav up">
               <img src="./img/icons/arrow-up.png" alt='стрелка'>
            </a>
         </div>
         <div class="button button__plus">
            <a href="#" class="button-nav plus">
               <img src="./img/icons/plus.png" alt='добавить'>
            </a>
         </div>
         <div class="button button__bookmark">
            <a href="#" class="button-nav bookmark">
               <img src="./img/icons/bookmark.png" alt='закладки'>
            </a>
         </div>
      </div>
      <!--@import "header.html"-->
      <main class="main">
         <div class="container">
            <section class="main-page">
            <h1>Личный кабинет</h1>
   <button class="logout btn">Выход</button>

   <div class="popup__text">
   <form id="" class="form__body">
                     <div class="block__popup">
                        <div class="form__item">
                           <label for="formName" class="form__label">Изменить имя*:</label>
                           <input id="" type="text" name="name" class="form__input _req lk-name">
                        </div>
                        <div class="form__item">
                           <label for="formPassword1" class="form__label">Изменить пароль*:</label>
                           <input id="" type="" name="password1" class="form__input _req password lk-password1">
                        </div>
                        <button type="update" class="form__button btn enter lk-submit">Изменить данные профиля</button>
                     </div>
                  </form>
               </div>
            </section>
      </main>
      <!-- @import "footer.html" -->
   </div>
   <script src="js/ajax.js"></script>
   <script src="js/get_user_data.js"></script>
   <script src="js/logout.js"></script>
</body>
</html>