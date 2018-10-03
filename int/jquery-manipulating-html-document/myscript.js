 $(document).ready(function() {
	$('.notebook .product-image').css('background-color', 'red')
	$('.phone .product-image').css('background-color', 'green')
	$('.tablet .product-image').css('background-color', 'blue')


	// CATEGORIES //
	$('.cat-phone').on('click', function() {
			$('.notebook, .tablet').hide(300);
			$('.phone').show(300);
		})

		$('.cat-notebook').on('click', function() {
			$('.phone, .tablet').hide(300);
			$('.notebook').show(300);
		})

		$('.cat-tablet').on('click', function() {
			$('.phone, .notebook').hide(300);
			$('.tablet').show(300);
		})

		$('.cat-all').on('click', function(){
			$('.phone, .notebook, .tablet').show(300);
		})

});