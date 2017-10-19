
/* WebPack */

require("./webpack");

/* FIX: Navbar hides initial content when jumping to in-page anchor */

var NAVBAR_HEIGHT_PX = 51;
var shiftWindow = function() { scrollBy(0, -NAVBAR_HEIGHT_PX) };

if (location.hash)
	shiftWindow();

window.addEventListener("hashchange", shiftWindow);

/* END FIX */
