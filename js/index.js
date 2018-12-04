let anchorColor = document.querySelectorAll('a');
console.log(anchorColor);

forEach.anchorColor(anchor => {
anchorColor.addEventListener('click', () => { // Click event
anchorColor.style.opacity = "0.5";
anchorColor.style.backgroundColor = "blue";
})

});

let images = document.querySelectorAll('img');
console.log(image);
images.forEach(image => {
  image.addEventListener('mouseenter', () => { // 1. mouseenter
    image.classList.toggle('.img-disappear');
  });
  image.addEventListener('mouseleave', () => { // 2. mouseleave
    image.classList.toggle('glow');
  })
});

let site = document.querySelector('html');
site.addEventListener('contextmenu', () => { // 3. contextmenu
  site.style.opacity = "0.5";
  site.style.backgroundColor = "gray";
});




