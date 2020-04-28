
//Toggle About content on mobile

const mobileAbout = document.querySelector('#mobile-about-btn')
const aboutContent = document.querySelector('.content-about')

mobileAbout.addEventListener('click', e => {
  e.preventDefault()
  console.log(44)
  if(aboutContent.style.display === 'none'){
    aboutContent.style.display = 'flex';
  } else{
    aboutContent.style.display = 'none';
  }
})


//Toggle Mobile navigation


const bars = document.querySelector('.fa-bars')
const menuOverlay = document.querySelector('.menu-overlay')
const closeOverlay = document.querySelector('.fa-times')

bars.addEventListener('click', e => {
  e.preventDefault()
  menuOverlay.style.display = 'block';
})

closeOverlay.addEventListener('click', e => {
  e.preventDefault()
  menuOverlay.style.display = 'none';
})







