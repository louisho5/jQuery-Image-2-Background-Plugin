(function($){

jQuery.fn.img2bg = function (options) {
	
	var settings = jQuery.extend({
		divSelector: "",					/*** Options: #selector, .selector, or leave it blank. The parent <div /> will be generated with this ID/class ***/
		imageSize: "cover",					/*** Options: cover, contain, auto... ***/
		imageRepeat: "no-repeat",			/*** Options: repeat, repeat-x, repeat-y, no-repeat ***/
		imagePosition: "center center"		/*** Options: center, top, left, right, bottom ***/
    }, options );
	
	jQuery("<style type='text/css'> .img2bg-hidden-image{ opacity:0 !important; filter:opacity(0) !important;} </style>").appendTo("head");  // Setup for the custom object hidden class
	
	this.each(function(){
		
		var imgSrc = jQuery(this).attr("src");
		
		var temp;
		var outerElement;
		
		if ( settings.divSelector.indexOf(".") >= 0 ) {
			temp = settings.divSelector.replace(".","");
			outerElement = "<div class='" + temp + "'></div>";
		} else if ( settings.divSelector.indexOf("#") >= 0 ) {
			temp = settings.divSelector.replace("#","");
			outerElement = "<div id='" + temp + "'></div>";
		} else {
			outerElement = "<div></div>";
		}
		
		jQuery(this).wrap(outerElement);
	
		jQuery(this).addClass("img2bg-hidden-image");
		
		jQuery(this).parent().css({
			"background-image": "url(" + imgSrc + ")",
			"background-size": settings.imageSize,
			"-o-background-size": settings.imageSize,
			"-moz-background-size": settings.imageSize,
			"-webkit-background-size": settings.imageSize,
			"background-repeat": settings.imageRepeat,
			"background-position": settings.imagePosition,
			"background-color": "transparent",
			"overflow": "hidden",
			"display": "-webkit-inline-flex",
			"display": "-ms-inline-flexbox;",
			"display": "inline-flex",
			
		});
		
   });

}

})(jQuery);