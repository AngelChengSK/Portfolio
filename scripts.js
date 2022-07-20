const navBar = document.querySelector('[data-nav-bar-container]')
var contactForm = document.querySelector('[data-contact-form]')
var contactFormMessage = document.querySelector('[data-contact-form-message]')

window.onscroll = () => {
  if (window.pageYOffset > 0) {
    navBar.classList.add('white-background')
  } else {
    navBar.classList.remove('white-background')
  }
}

contactForm.addEventListener('submit', function (ev) {
  ev.preventDefault()
  var data = new FormData(contactForm)
  ajax(contactForm.method, contactForm.action, data, success, error)
})

//function for sending an AJAX request
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.setRequestHeader('Accept', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType)
    } else {
      error(xhr.status, xhr.response, xhr.responseType)
    }
  }
  xhr.send(data)
}

//successful submission of form
function success() {
  contactForm.reset()
  contactFormMessage.innerHTML = 'Thank you for your message.'
  contactFormMessage.classList.add('show')
  setTimeout(() => {
    contactFormMessage.classList.remove('show')
  }, 5000)
}

//failed submission of form
function error() {
  contactFormMessage.innerHTML = `
  <div class="message-title">Sorry, something went wrong.</div>
  <div class="error-message">
    Please email me for the moment. <br>
    My email is <span>angelchengszeki@gmail.com</span>.
  </div>
`
  contactFormMessage.classList.add('show')
}
