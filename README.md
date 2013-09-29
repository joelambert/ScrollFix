# ScrollFix

ScrollFix is a small script that *partially* works around the most common issue with using iOS5's `overflow: scroll` for fullscreen web apps.

The newly support `overflow:scroll` is a great addition and works well except under the following conditions:

- 	The scroll area is at the top and the user tries to scroll up
- 	The scroll area is at the bottom and the user tries to scroll down.

In a native app, you'd expect the content to rubber band but in Safari the whole page is scrolled instead. Under occasions where you've deliberately hidden the browser chrome, this interaction can bring it back into view.

ScrollFix works around this by manually offsetting the `scrollTop` value to one away from the limit at either extreme, which causes the browser to use rubber banding rather than passing the event up the DOM tree.

# How to use

Setup a scrollable section:

	<div class="scrollable" id="scrollable">
		<ul>
			<li>List Item</li>
			<li>List Item</li>
			<li>List Item</li>
			<li>List Item</li>
			<li>List Item</li>
			<li>List Item</li>
		</ul>
	</div>

Then call the following code on the area that has the `overflow: scroll` property:

	var scrollable = document.getElementById("scrollable");
	new ScrollFix(scrollable);
	
# Known Issues

ScrollFix doesn't prevent the page from being scrolled when if a touch is registered whilst the scrolling section is bouncing (rubber banding). This is an issue I don't think can be worked around with the current implementation of iOS5's `overflow: scroll`.

[This ticket](https://github.com/joelambert/ScrollFix/issues/1#issuecomment-2421225) better explains the issue, Apple are aware of the problem (thanks to [Matteo Spinelli](http://www.twitter.com/cubiq)), hopefully this will be resolved in iOS 5.1.

# License

ScrollFix is Copyright &copy; 2011-2013 [Joe Lambert](http://www.joelambert.co.uk) and is licensed under the terms of the [MIT License](http://www.opensource.org/licenses/mit-license.php).
