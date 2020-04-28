
//Toggle About content on mobile

const mobileAbout = document.querySelector('#mobile-about-btn')
const aboutContent = document.querySelector('.content-about')

mobileAbout.addEventListener('click', e => {
  e.preventDefault()
  console.log(44)
  if(aboutContent.style.display === 'none'){
    aboutContent.style.display = 'flex';
    aboutContent.style.maxHeight = `${300}px`

  } else{
    aboutContent.style.display = 'none';
    aboutContent.style.maxHeight = null
  }
})


//Toggle Mobile navigation

 
const bars = document.querySelector('.fa-bars')
const menuOverlay = document.querySelector('.menu-overlay')
const closeOverlay = document.querySelector('.fa-times')

bars.addEventListener('click', e => {
  e.preventDefault()
  menuOverlay.style.display = 'block';
  menuOverlay.style.opacity = '1';
})

closeOverlay.addEventListener('click', e => {
  e.preventDefault()
  menuOverlay.style.display = 'none';
  menuOverlay.style.opacity = '0';
})







