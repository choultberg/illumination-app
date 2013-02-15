

$(document).ready(function(){




	$('a.scrollTo').on({
		click: function() {
		    $('html, body').animate({
		        scrollTop: $( $(this).attr('href') ).offset().top
		    }, 500);
    		return false;
		}
	});
});
