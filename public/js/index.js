$(document).ready(function() {
	$('#owl-feature').owlCarousel({ 
		items : 3,
		itemsDesktop : [1279,3],
		itemsDesktopSmall : [1023,2],
		itemsTablet : [767,1],
		itemsMobile : [479,1],
		navigation : false,
		slideSpeed : 100,
		// paginationSpeed : 800,
		autoPlay : true,
		stopOnHover : true
  });
});