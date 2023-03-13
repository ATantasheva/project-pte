//валидация формы и связка с php

"use strict"

	const form = document.getElementById('form');
   const formButton = document.querySelector('.form__button');
	let error = formValidate(form);
   formButton.addEventListener('click', toSendForm);
   function toSendForm(e) {
      e.preventDefault();
      if (error === 0) {
         alert('все ок')
				form.reset();
			}
		else {
			alert('Заполните обязательные поля');
      }
   }

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} 
         //доб условие проверки совпадения паролей
         
         else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
