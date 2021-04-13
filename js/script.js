$(document).ready(function () {
	let dealay = 5;
	let offsetTop = 0;

	setInterval(function () {
		if (dealay > 1) {
			const activeItemIndex = $('.plug__timer-item.active').index() + 1;

			offsetTop -= 24;
			$('.plug__timer-body').css('top', offsetTop + 'px');
			$('.plug__timer-item').removeClass('active');
			$('.plug__timer-item').eq(activeItemIndex).addClass('active');
			
		} else {
			// window.location.replace("https://www.ledcapital.ru/");
			// document.location.href="https://www.ledcapital.ru/";
		}

		dealay--;
	}, 1000);
	
});