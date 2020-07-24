/**
 * 
 */
$(document).ready(function() {

	$('button.showValid').click(function() {
		$('.nonValid').fadeTo('slow', 0.2);
		$('.nonValid').toggleClass('hiddenValid');
	});

	$('button.showText').click(function() {
		$('.container,.audio,.video,.3d,.data,.image,.vector,.gps,.interactive,.publishing,.word,.presentation').fadeTo('slow', 0.2);
		$('.container,.audio,.video,.3d,.data,.image,.vector,.gps,.interactive,.publishing,.word,.presentation').setClass('hidden');
	});

	$('button.showDoc').click(function() {
		$('.container,.audio,.video,.3d,.data,.image,.vector,.gps,.interactive,.text').fadeTo('slow', 0.2);
		$('.container,.audio,.video,.3d,.data,.image,.vector,.gps,.interactive,.text').setClass('hidden');
	});

	$('button.showMedia').click(function() {
		$('.text,.word,.publishing,.presentation,.container,.3d,.data,.image,.vector,.gps').fadeTo('slow', 0.2);
		$('.text,.word,.publishing,.presentation,.container,.3d,.data,.image,.vector,.gps').addClass('hidden');
	});
	
	$('button.showImage').click(function() {
		$('.text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.3d,.interactive').fadeTo('slow', 0.2);
		$('.text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.3d,.interactive').addClass('hidden');
	});

	$('button.resetAll').click(function() {
		$('.element').removeClass('hiddenValid');
		$('.element').removeClass('hidden');
		$('.element').fadeTo('slow', 1.0);
	});

})
