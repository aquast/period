/**
 * 
 */
$(document).ready(function() {

	$('button.showValid').click(function() {
		$('.nonValid').fadeTo('slow', 0.2);
		$('.hiddenValid').fadeTo('slow', 1.0);
		$('.nonValid').toggleClass('hiddenValid');
	});

	$('button.showText').click(function() {
		$('.container,.audio,.video,.3d,.data,.image,.vector,.gps').fadeTo('slow', 0.2);
		$('.container,.audio,.video,.3d,.data,.image,.vector,.gps').setClass('hidden');
	});

	$('button.showMedia').click(function() {
		$('.text,.word,.publishing,.presentation,.container,.3d,.data,.image,.vector,.gps').fadeTo('slow', 0.2);
		$('.text,.word,.publishing,.presentation,.container,.3d,.data,.image,.vector,.gps').setClass('hidden');
	});
	
	$('button.showImage').click(function() {
		$('.text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.3d').fadeTo('slow', 0.2);
		$('.text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.3d').setClass('hidden');
	});

	$('button.resetAll').click(function() {
		$('.element').removeClass('hiddenValid');
		$('.element').removeClass('hidden');
		$('.element').fadeTo('slow', 1.0);
	});

})
