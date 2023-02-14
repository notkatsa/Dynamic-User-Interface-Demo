categories = document.body.getElementsByClassName("link");

for (link of categories) {
    link.addEventListener("click", (event) => {
        element = event.target;
        if (element.classList.contains("active")) {
            element.classList.remove("active");
            hideMenu(element.innerHTML);
        }
        else {
            for(link of categories) {
                link.classList.remove("active")
                hideMenu(element.innerHTML);
            }
            element.classList.add("active");
            showMenu(element.innerHTML)
        }
    })
}

showMenu = (category) => {
    menus = document.body.getElementsByClassName("menu");
    for (menu of menus) {
        if (menu.classList.contains(category)) {
            menu.classList.add("active");
            break;
        }
    }
}

hideMenu = (category) => {
    menus = document.body.getElementsByClassName("menu");
    for (menu of menus) {
            menu.classList.remove("active");
    }
}

// Select all slides
const slides = document.body.getElementsByClassName("slide");
let i=0;
for (slide of slides) {
    slide.style.transform = `translateX(${100 * i}%)`;
    i++;
}

// current slide counter
let curSlide = 0;
let maxSlide = slides.length - 1;
// select next slide button
const nextSlide = document.body.getElementsByClassName("carousel-next")[0];

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
    
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    i=0;
    for (slide of slides) {
        slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
        i++;
    };
});

// select prev slide button
const prevSlide = document.querySelector(".carousel-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    i = 0;
    for (slide of slides) {
        slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
        i++;
    };
});