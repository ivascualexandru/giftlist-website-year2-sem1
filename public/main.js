
/* main.js */

window.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLoaded')
	if(document.querySelector('aside')) {
		const delay = 2000
		document.querySelector('aside').hidden = false
		window.setTimeout( () => {
			document.querySelector('aside').hidden = true
		}, delay)
	}
	if(document.querySelector('button.back')) {
		document.querySelectorAll('button.back').forEach( element => {
			element.addEventListener('click',() => {
				console.log('back button clicked')
				console.log(window.history)
				window.history.back()
			})
		})
	}
})
