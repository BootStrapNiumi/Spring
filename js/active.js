/**
 * @author boonya
 */
$(document).ready(function() {
	$('li').click(function(e) {
		// 阻止窗口默认事件
		/*e.preventDefault();*/
		$('li').removeClass('active');
		$(this).addClass('active');
	});

});
