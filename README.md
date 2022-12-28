# jQuery Turn Image into Background

Version 1.0.0

## Summary

Have you ever developed a section with 	&#60;img&#62; but finally cannot apply it to cover mode and need to rewrite all codes?


Simple jQuery plugin can turn your image tag into background image immediately, so that you can design what you want.

## Author

louisho5

## Installation

To include the plugin in your code:

	<script src="jquery.img2bg.js"></script>
	
or

	<script src="jquery.img2bg.min.js"></script>

Alternatively, install with [bower](https://github.com/bower/bower): 
	
	bower install jquery.img2bg

## Requirements/Browsers

Works in IE9+, Chrome 14+, Safari 4+, Firefox 3.0+, Opera 10+.

Tested with jQuery 1.12.x.

## Code Example

**index.html**:

	<html>
		<head>
			<script src="jquery.1.12.4.min.js"></script>
			<script src="jquery.img2bg.min.js"></script>

			<script>
				$(document).ready(function () {
					$("img").img2bg({
						divSelector: ".selector-of-div",
						imageSize: "cover",
						imageRepeat: "no-repeat",
						imagePosition: "center center"
					});
				});
			</script>
		</head>
		<body>
			<img src="path/to/image"></img>
		</body>
	</html>

See 'index.html' in example folder.

## Parameters

NOTES: This plugin requires jQuery.


There are totally 4 parameters are provided in this plugin:

	divSelector: ".selector"		

Options: ID(#selector) & class(.selector) are both accepted or leave it blank. <br>
The parent &#60;div&#62; will be generated with this ID/class

	imageSize: "cover"		

Options: cover(default), contain, auto or pixels

	imageRepeat: "no-repeat"	
	
Options: no-repeat(default), repeat, repeat-x, repeat-y 

	imagePosition: "center center"		
	
Options: center center(default), you may also choose top, left, right, bottom


All syntaxs are compatible with https://developer.mozilla.org/en-US/docs/Web/CSS/background

## License

This plugin is under the MIT license.
