// Adding an alert upon load 
// window.addEventListener('load', () => {
//   alert("Hello! Lots of fun stuff here, don't get too excited by all the changing colors!")
// })

// Toggle images

let click = document.getElementById('click');
let pic = document.getElementsByTagName('img');
let pics = Array.prototype.slice.call(pic);

click.addEventListener('click', (e) => {
  e.stopPropagation();
  for (let i = 0; i < pics.length; i++){
    pics[i].classList.toggle('off')
  }
  if (click.textContent == "Hide Images") {
    click.textContent = "Show Images"
  } else {
    click.textContent = "Hide Images"
  }
})

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

// Balloon pop

const balloon = document.getElementById('balloon');
const pop = document.getElementById('pop');
balloon.addEventListener("mouseover", () => {
  alert("You popped my balloon!")
  balloon.classList.add("off")
  pop.classList.remove("off")
})

// Prevent Reload

// const anchor = document.getElementById('anchor');
// anchor.addEventListener('click', (e) => {
//   e.preventDefault()
// })

// Form

let form = document.getElementById('form')
form.addEventListener('click', e => {
  e.stopPropagation();
})

// const password = document.querySelector('input[type="password"]');

form.addEventListener('focus', (e) => {
  e.target.style.background = 'gray';
  e.target.style.color = 'white'
}, true);

form.addEventListener('blur', (e) => {
  e.target.style.background = 'white';
  e.target.style.color = 'black'
}, true);
