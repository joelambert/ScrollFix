/**
 * ScrollFix v0.1
 * http://www.joelambert.co.uk
 *
 * Copyright 2011, Joe Lambert.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function () {
  var ScrollFix = function(elem) {
    // Variables to track inputs
    var startY, startTopScroll;

    elem = elem || document.querySelector(elem);

    // If there is no element, then do nothing
    if(!elem) {
      return;
    }

    // Handle the start of interactions
    elem.addEventListener('touchstart', function(event){
      startY = event.touches[0].pageY;
      startTopScroll = elem.scrollTop;

      if(startTopScroll <= 0) {
        elem.scrollTop = 1;
      }

      if(startTopScroll + elem.offsetHeight >= elem.scrollHeight) {
        elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
      }

    }, false);

  };

  // if we've got a window and we don't have a module
  // create a global;
  if ((typeof window != 'undefined') && (typeof module == 'undefined')) {
    window.ScrollFix = ScrollFix;
  }
  // otherwise, export it.
  else {
    module.exports = ScrollFix;
  }

})();
