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


let fullName = document.querySelector('#full-name')
fullName.addEventListener('mousedown', function() {
	 document.querySelector('#name-tag').style = 'opacity : 1; transition :1s;'

})
let emailField = document.querySelector('#email-field')
emailField.addEventListener('mousedown', function() {
	 document.querySelector('#email-tag').style = 'opacity : 1; transition :1s;'

})