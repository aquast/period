/**
 * 
 */
$(document).ready(function() {

	$('button.showValid').click(function() {
		$('.nonValid').fadeTo('slow', 0.2);
		$('.exposeValid').fadeTo('slow', 1.0);
		$('.nonValid').toggleClass('exposeValid');
	});
	

})
