//инициализация
new Swiper('.image-slider',{
   pagination: {
      el: '.swiper-pagination',
//буллеты
      clickable: true,
   },
   // Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 2,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	// Автовысота
	autoHeight: true,
   // Количество слайдов для показа
	slidesPerView: 'auto',
});
