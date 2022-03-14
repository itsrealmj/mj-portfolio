
let menu = document.querySelector('.menu')
let closed = document.querySelector('.closed')
let navlinks = document.querySelector('.nav-links')
	menu.addEventListener('click', function() {

		menu.style = "display:none"
		closed.style = "display:block"
		navlinks.style = "display:block"

	})
	closed.addEventListener('click', function() {
		menu.style = "display:block"
		closed.style = "display:none"
		navlinks.style = "display:none"
	})
