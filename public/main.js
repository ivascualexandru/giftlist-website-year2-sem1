
/* main.js */

window.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLoaded')
	const delay = 2000
	document.querySelector('aside').hidden = false
	window.setTimeout( () => {
		document.querySelector('aside').hidden = true
	}, delay)
}

if(document.querySelector('button.back')) {
  document.querySelectorAll('button.back').forEach(element) => {
    element.addEventListener('click',() => {
      console.log('Back button clicked')
      console.log(window.history)
      window.history.back()
    })
  }
}

if(document.querySelector('input')) {
  document.querySelectorAll('input').forEach(element => {
    element.addEventListener('invalid',event => {
      if(!event.target.validity.valid) {
        const msg = event.dataset.target.msg || 'Invalid data'
        event.target.setCustomValidity(msg)
      }
    })
    element.addEventListener('input', event => {
      event.target.setCustomValidity('')
    })
  }, false)
}
})