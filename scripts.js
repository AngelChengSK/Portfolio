const navBar = document.querySelector('[data-nav-bar-container]')

window.onscroll = () => {
  if (window.pageYOffset > 0) {
    navBar.classList.add('white-background')
  } else {
    navBar.classList.remove('white-background')
  }
}