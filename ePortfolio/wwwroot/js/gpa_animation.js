$('.count').each(function () {
	$(this).prop('Counter', 0).animate({
		Counter: $(this).text()
	}, {
			duration: 2500,
			easing: 'swing',
			step: function (now) {
				$(this).text(now.toFixed(3));
			}
		});
});

function rerun() {
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
                duration: 2500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(now.toFixed(3));
                }
            });
    });
}