$(document).ready(function() {
	var rellax = new Rellax('.rellax');

	$(".down a").click(function(e) {
		e.preventDefault();
	  $("html, body").animate({scrollTop: $(window).height()}, 1000);
	});
	
});