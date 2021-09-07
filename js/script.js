$(document).ready(function() {
	$('.style-guide__tabs').tabslet({
		animation: true
	});
});
$(document).ready(function () {
	// Initialize the plugin
	const chat_user_list = document.querySelector('.chat__user-list');
	// const ps = new PerfectScrollbar(chat_user_list);
	if ($('.chat__user-list').length) {
		const ps = new PerfectScrollbar(chat_user_list, {
			wheelPropagation: false,
			wheelSpeed: 1,
			maxScrollbarLength: 100
		});
	}

	const chat_msg_list = document.querySelector('.chat__msg-list');
	if ($('.chat__msg-list').length) {
		const psm = new PerfectScrollbar(chat_msg_list, {
			wheelPropagation: false,
			wheelSpeed: 1,
			maxScrollbarLength: 100
		});
	}
});
$(document).ready(function () {
	$('.header__left .btn').click(function () {
		$('.sidebar').toggleClass('sidebar--open');
		$('.overlay').toggleClass('overlay--open');
		$('body').toggleClass('overflow-heidden');
	});

	$('.sidebar__mobile .btn').click(function () {
		$('.sidebar').toggleClass('sidebar--open');
		$('.overlay').toggleClass('overlay--open');
		$('body').toggleClass('overflow-heidden');
	});

	let scrolled = 100;

	// changeScrolled();


	$(window).scroll(function () {
		let $this = $(this),
			st = $this.scrollTop();

		menuScrollDesktop(st);
	});

	$(window).resize(function () {
		let st = $(window).width();

		menuDesktopShow(st);
	});

	function menuScrollDesktop(st) {
		if (st > scrolled) {
			$('body').addClass('scrolled');
		} else {
			$('body').removeClass('scrolled');
		}
	};

	function menuDesktopShow(st) {
		if (st > 1199) {
			if ($('.overflow-heidden').length) {
				$('.sidebar').toggleClass('sidebar--open');
				$('.overlay').toggleClass('overlay--open');
				$('body').toggleClass('overflow-heidden');
			}
		}
	};

	function changeScrolled() {
		scrolled = 0;
	};

});
$(document).ready(function() {
	$('.order-book__tabs').tabslet({
		animation: true
	});
});
$(document).ready(function() {
	$('.settings__tabs').tabslet({
		animation: true
	});
});
let slider = $(".slider--registr").slick({
	arrows: false,
	dots: true,
	dotsClass: "slider__dots",
	infinite: false,
	slidesToScroll: 1,
});
