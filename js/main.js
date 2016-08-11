$(document).ready(function() {
	$('nav ul li.inactive').each(function(index, el) {
		var tabID = el.id.split('-')[1];
		$('.tab#' + tabID).hide();
	});
});

$('nav').delegate('.inactive', 'click', function(event) {
	var selectedTab = this.id.split('-')[1];
	console.log(selectedTab);
	document.location.hash = selectedTab;
	$('.tab:visible').fadeOut('fast', function() {
		$('.tab#' + selectedTab).fadeIn('fast');
	});

	var $this = $(this);
	$this.removeClass('inactive').addClass("active");
  	$this.siblings().addClass('inactive').removeClass('active');
});