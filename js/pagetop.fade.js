$(function() {
	var pagetop = $('#pagetop');	
	pagetop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) { //上からのスクロール量の設定
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	pagetop.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 200); //スクロールするスピードの設定※ミリ秒
		return false;
	});
});

