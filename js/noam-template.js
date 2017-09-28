


(function($){

	$(document).ready(function(){
		resizeVideos(".project-body");
		resizeBodyHeight();

		$("body").css("padding-top",$("header").outerHeight()+"px");

		//add custom classes to button link
		$(".download-btn a").addClass("btn btn-primary btn-xs btn-nav");
		
		// add bootstrap to markdown converted tables
		if($(".documentation")[0]){
			console.log("doc page");
			$("table").addClass("table table-striped table-bordered");
		}

		// apply Google Prettify to code blocks
		if($("pre")[0]){
			$("pre").addClass("prettyprint");

            $("code").each(function() {

                // if($(this).hasClass("cpp")){
                //     $(this).addClass("lang-cs");
                // }
                // if($(this).hasClass("html")){
                //     $(this).addClass("lang-html");
                // }
                // if($(this).hasClass("xml")){
                //     $(this).addClass("lang-xml");
                // }
                // if($(this).hasClass("js")){
                //     $(this).addClass("lang-js");
                // }
                // if($(this).hasClass("css")){
                //     $(this).addClass("lang-css");
                // }
            });

                PR.prettyPrint();
          }

		//attach event to landing page portoflio images overlay
		$(".portfolio-grid img").each(function(){
			portfolioOverlay($(this));
		});
		

		//left menu
		//menu animation
		$(".menu-left-nav-container .current-menu-item").parents().show();
		$(".menu-left-nav-container>ul>li").hover(
			function(){	
				$(this).children(".sub-menu").stop().slideDown(300);
			},
			function(){
				if($(this).children(".sub-menu").has(".current-menu-item").length == 0){

					$(this).children(".sub-menu").stop().slideUp(300);
				}
			});
		//add classes to turn things into buttons.
		$(".bbp-login-form .user-submit").addClass("btn btn-primary btn-xs");
		$(".bbp-login-form .bbp-login-links a").addClass("btn btn-default btn-xs");
		$(".bbp-login-form #user_login").attr("placeholder","Username");
		$(".bbp-login-form #user_pass").attr("placeholder","Password");
		$("input#bbp_search").attr("placeholder","Search Forums");
	});

	$(window).load(function(){
		// $("body").css("padding-top",$("header").outerHeight()+"px");
	});

	$(window).resize(function(){
		resizeVideos(".project-body");
		resizeBodyHeight();
		$("body").css("padding-top",$("header").outerHeight()+"px");
		$(".portfolio-grid img").each(function(){
			portfolioOverlay($(this), true);
		});
	});

	function resizeBodyHeight(){
		var headerHeight, footerHeight, windowHeight, computedHeight;

		
		headerHeight = $(".noam-nav").innerHeight();
		footerHeight = $(".noam-footer").innerHeight();
		windowHeight = $(window).height();
		computedHeight = windowHeight - headerHeight  - footerHeight;
		console.log(footerHeight,windowHeight,headerHeight);
		$(".main-content").css("min-height",computedHeight+"px");
		$(".main-column").css("min-height",computedHeight+"px");		
	}


	//video resizer
	function resizeVideos(selector){
		// Find all YouTube videos
		var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com']");
		if($allVideos[0]){
			// The element that is fluid width
			var $fluidEl = $(selector);
			// Figure out and save aspect ratio for each video

			$allVideos.each(function() {
	  			$(this).data('aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
			});

			var newWidth = $fluidEl.width();
	  		
	  		// Resize all videos according to their own aspect ratio
	  		$allVideos.each(function() {    	
	    		var $el = $(this);
	    		$el.width(newWidth).height(newWidth * $el.data('aspectRatio'));
	    	});
  		}
	}

	function portfolioOverlay($image, resizeOnly) {
		resizeOnly = typeof resizeOnly !== 'undefined' ? resizeOnly : false;
		if(!resizeOnly){
		    $image.wrap('<div class="overlay-container">');
		    var $overlay= $('<div class="overlay">');
		    var $line = $('<div class="overlay-line">');
		    var $bg = $('<div class="overlay-bg">');
		    var $label = $('<div class="overlay-label">').html($image.attr('alt'));
		    $overlay.insertAfter($image);
		    $overlay.append($bg);
			$overlay.append($label);
			$label.append($line);
	    	$label.css({
		        'top': $image.height() / 2 - $label.innerHeight() / 2,
	        	'left': $image.width() / 2 - $label.innerWidth() / 2
	    	});
		} else{
			var txtHeight = $image.siblings(".overlay").children(".overlay-label").innerHeight()/2;
			var txtWidth = $image.siblings(".overlay").children(".overlay-label").innerWidth()/2;
			$image.siblings(".overlay").children(".overlay-label").css({
		        'top': $image.height() / 2 - txtHeight,
	        	'left': $image.width() / 2 - txtWidth
			});
		}    
	}

}(jQuery));



// Google+ Share
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/platform.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

//Twitter Share Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');




