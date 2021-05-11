/**
 * 
 */
$(document).ready(function() {

	$("button.showValid").click(function() {
		$(".nonValid").fadeTo("slow", 0.2).attr("status", "hiddenNonValid");
		$(".nonValid").toggleClass("hiddenValid");
	});

	$("button.showText").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.publishing,.word,.presentation").fadeTo("slow", 0.2);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.publishing,.word,.presentation").addClass("hidden");
	});

	$("button.showDoc").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.text").fadeTo("slow", 0.2);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.text").addClass("hidden");
	});

	$("button.showMedia").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".text,.word,.publishing,.presentation,.container,.threed,.data,.image,.vector,.gps").fadeTo("slow", 0.2);
		$(".text,.word,.publishing,.presentation,.container,.threed,.data,.image,.vector,.gps").addClass("hidden");
	});

	$("button.showImage").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.threed,.interactive").fadeTo("slow", 0.2);
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.threed,.interactive").addClass("hidden");
	});

	$("button.showData").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.image,.vector,.interactive").fadeTo("slow", 0.2);
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.image,.vector,.interactive").addClass("hidden");
	});

	$("button.resetAll").click(function() {
		$(".element").removeClass("hiddenValid");
		$(".element").removeClass("hidden");
		$(".element").fadeTo("slow", 1.0);
	});

	$(".inner").click(function() {
		$(this).parent().clone().appendTo(".legend");
		$(".focussedElement").remove();
		$(".legend .element").addClass("focussedElement").removeClass("element");
		$(".legend").css("background-color", "white");
	});

});
