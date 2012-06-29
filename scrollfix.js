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
	var startY, startTopScroll = 0, disableScroll = false;
	
	elem = elem || document.querySelector(elem);
	
	// If there is no element, then do nothing	
	if(!elem)
		return;

	// Handle the start of interactions
	elem.addEventListener('touchstart', function(event){
		startY = event.touches[0].pageY;
		startTopScroll = elem.scrollTop;
		
		if(startTopScroll <= 0)
			elem.scrollTop = 1;

		if(startTopScroll + elem.clientHeight >= elem.scrollHeight)
			elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
    
    disableScroll = (elem.scrollHeight <= elem.clientHeight);
	}, false);
  
  // Page should not scroll when the content does not fill the area
  elem.addEventListener('touchstart', function(event){
    if(disableScroll) {
      event.preventDefault();
    }
  }, false);
  
};