let oneAnchorColor = document.querySelector('a');
console.log(oneAnchorColor);


    oneAnchorColor.addEventListener('click', () => { // Click event
        oneAnchorColor.style.opacity = "0.5";
        oneAnchorColor.style.backgroundColor = "blue";
    });



let anchorButtons = document.querySelectorAll('a');
console.log(anchorButtons);

anchorButtons.forEach(anchor => {
    
    anchor.addEventListener('click', () => { // Click event
         anchor.style.opacity = "0.5";
         anchor.style.backgroundColor = "blue";
     })

});

let images = document.querySelectorAll('img');
console.log(image);
images.forEach(image => {
  image.addEventListener('mouseenter', () => { // 1. mouseenter
    image.classList.toggle('glow');
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




