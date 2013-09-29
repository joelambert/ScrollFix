/**
 * ScrollFix v0.1
 * http://www.joelambert.co.uk
 *
 * Copyright 2011, Joe Lambert.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

var ScrollFix = function(elem) {
	// Variables to track inputs
	var startTopScroll, startLeftScroll;
	
	elem = elem || document.querySelector(elem);
	
	// If there is no element, then do nothing	
	if(!elem)
		return;

	// Handle the start of interactions
	elem.addEventListener('touchstart', function(event){
		startTopScroll = elem.scrollTop;
		startLeftScroll = elem.scrollLeft;
		
		if(startTopScroll <= 0)
			elem.scrollTop = 1;

		if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
			elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
		
		if(startLeftScroll <= 0)
			elem.scrollLeft = 1;
			
		if(startLeftScroll + elem.offsetWidth >= elem.scrollWidth)
			elem.scrollLeft = elem.scrollWidth - elem.offsetWidth - 1;
	}, false);
};