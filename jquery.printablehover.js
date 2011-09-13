/**
 * printablehover
 *
 * @version      1.2
 * @author       msdf
 * @license      The MIT License
 *
 */
 
jQuery.fn.printablehover = function(options){

	// options
	var options = jQuery.extend({
		hoverClass: "hover",
		hoverSuffix: "_over",
		speed: 150
	}, options);
	
	// prepare elements
	var $hover = jQuery("."+options.hoverClass);
	var hoverSuffix = options.hoverSuffix;
	var speed = options.speed;
	
	// set background
	$hover.each(function(){
		var imgOver = jQuery("img", this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1"+hoverSuffix+"$2");
		jQuery(this).css("background-image", "url('"+imgOver+"')");
	});
	
	// mouse action
	$hover.hover(function(){
		jQuery("img", this).animate({opacity: 0},speed);
	},function(){
		jQuery("img", this).animate({opacity: 1},speed);
 	});
	 	
	return this;
}