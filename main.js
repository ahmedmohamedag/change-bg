let hero = document.querySelector(".hero");
let Boxes = document.querySelectorAll(".container div")


Boxes.forEach((box) => {

    box.addEventListener("click", (e) => {
        
        // console.log(e.target.getAttribute('data'));// Get Image

        hero.style.backgroundImage = `url(/${e.target.getAttribute('data')})`
    })
})