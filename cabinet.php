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
   <title>Личный кабинет</title>
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
            <a href="#popup-bookmark" class="button-nav plus popup-link">
               <img src="./img/icons/plus.png" alt='добавить'>
            </a>
         </div>
         <div class="button button__bookmark">
            <a href="#" class="button-nav bookmark">
               <img src="./img/icons/bookmark.png" alt='закладки'>
            </a>
         </div>
      </div>
      <?php include "#source/header.html" ?>
      <main class="main">
         <div class="container">
            
         <div id="formUpdate" class="popup">
         <div class="popup__body">
            <div class="popup__content popup__enter">
               <a href="#header" class="popup__close close-popup">X</a>
               <div class="popup__title">Изменение данных профиля</div>
               <div class="popup__text">
                  <form method="post" class="form__body">
                  <div class="block__popup">
                        <div class="form__item">
                           <label for="formName" class="form__label">Изменить имя*:</label>
                           <input id="formName" type="text" name="name" class="form__input lk-name">
                        </div>
                        <div class="form__item">
                           <label for="formPassword1" class="form__label">Изменить пароль*:</label>
                           <input id="formPassword1" type="" name="password1" class="form__input password lk-password1">
                        </div>
                        <button type="update" class="form__button btn enter lk-submit">Изменить данные профиля</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      <div id="popup-bookmark" class="popup popup-book">
         <div class="popup__body">
            <div class="popup__content popup__enter">
               <a href="#header" class="popup__close close-popup">X</a>
               <div class="popup__title">Добавить в закладки</div>
               <div class="popup__text">
                  <form method="post" class="form__body">
                  <div class="block__popup">
                        <div class="form__item">
                           <label for="formBookmark" class="form__label">Название закладки:</label>
                           <input id="formBookmark" type="text" class="form__input">
                        </div>
                        <div class="form__item">
                        <textarea class="form__input textarea" type="text"  id="cloned"></textarea>
                        </div>
                        <button type="update" class="form__button btn enter lk-submit">Сохранить в закладках</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
                  </div>
          
            <?php include "#source/content.html" ?>
      </main>
      <!-- @import "footer.html" -->
      <?php include "#source/footer.html" ?>
   </div>
  
  
  
   <script src="js/ajax.js"></script>
   <script src="js/main.js"></script>
   <script src="js/menu-burger.js"></script>
   <script src="js/get_user_data.js"></script>
   <script src="js/logout.js"></script>
   <script src="js/lk-script.js"></script>
</body>
</html>