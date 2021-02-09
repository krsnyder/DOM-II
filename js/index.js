// Adding an alert upon load
// window.addEventListener('load', () => {
//   alert("Hello! Lots of fun stuff here, don't get too excited by all the changing colors!")
// })

// Scrolling through an array of classes for the background colors
let bodyColor = document.querySelector('body');
let colors = ['black', 'blue', 'red', 'green', 'white']
bodyColor.addEventListener('click', () => {
  let index = colors.indexOf(bodyColor.classList[0]);
  if (index == 4) {
    bodyColor.classList.remove('white');
    bodyColor.classList.add('black');
  } else {
    bodyColor.classList.remove(colors[index]);
    bodyColor.classList.add(colors[index+1]);
  }
})

// Scroll event
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (scrolled == scrollable) {
    alert('You have reached the bottom of the page')
  }
})