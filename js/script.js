$(document).ready(function () {

    function timer() {
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
                // window.location.replace("https://www.ledcapital.ru/store");
                // document.location.href="https://www.ledcapital.ru/store";
            }

            dealay--;
        }, 1000);
	}

    // Show content
    $('.plug').addClass('visible');

    // Start timer and redirect
    setTimeout(timer, 3000);
});