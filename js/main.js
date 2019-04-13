$(document).ready(function() {

	// Sidebar Show and Hide

	$(".hamburger-menu").click(function() {
		$(".sidebar").toggleClass("active");
		if($(".sidebar").hasClass("active")) {
			$(".wrapper").removeClass("active");
		} else {
			$(".wrapper").addClass("active");
		}
		$(this).toggleClass("active");
	});

	// resize of sidebar active and inactive

	if($(window).width() < 991) {
		$(".sidebar").addClass("active");
	} else {
		$(".sidebar").removeClass("active");
	}

	$(window).resize(function() {
		if($(this).width() < 991) {
			$(".sidebar").addClass("active");
		} else {
			$(".sidebar").removeClass("active");
		}
	});

	// Filter Search

	$(".form-search").keyup(function() {
	  var searchTerm = $(this).val().toLowerCase();
	  $("#image-filter .showing").each(function() {
	    var lineStr = $(this).text().toLowerCase();
	    if(lineStr.indexOf(searchTerm) === -1) {
	      $(this).hide(400);
	    } else {
	      $(this).show(400);
	    }
	  });
	});

	// Sidebar Menu dropdown

	$(".sidebar-listing > li > a").click(function() {
		$(".sidebar-listing > li > a").parent().removeClass("active");
		$(this).parent().addClass("active");
		$(this).next().slideToggle().addClass("active");	
	});

});