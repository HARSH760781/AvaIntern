window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const myElementPosition = document.querySelector(".about").offsetTop;

  if (scrollPosition >= myElementPosition) {
    let counter1 = document.querySelector(".counter1");
    let targetNumber1 = 10000;
    let currentNumber1 = 100;

    function incrementCounter1() {
      if (currentNumber1 >= targetNumber1) {
        clearInterval(intervalId1);
      } else {
        currentNumber1 += 100;
        counter1.textContent = currentNumber1;
      }
    }
    const intervalId1 = setInterval(incrementCounter1, 4);

    let counter3 = document.querySelector(".counter3");
    let targetNumber3 = 35000;
    let currentNumber3 = 1000;

    function incrementCounter3() {
      if (currentNumber3 >= targetNumber3) {
        clearInterval(intervalId3);
      } else {
        currentNumber3 += 500;
        counter3.textContent = currentNumber3;
      }
    }
    const intervalId3 = setInterval(incrementCounter3, 10);

    let counter2 = document.querySelector(".counter2");
    let targetNumber2 = 500;
    let currentNumber2 = 10;

    function incrementCounter2() {
      if (currentNumber2 >= targetNumber2) {
        clearInterval(intervalId2);
      } else {
        currentNumber2 += 10;
        counter2.textContent = currentNumber2;
      }
    }
    const intervalId2 = setInterval(incrementCounter2);
  }
  counter1.innerText += "+";
});

// get the navbar menu element
var navbarMenu = document.querySelector(".navbar-collapse");

// listen for clicks on the document
document.addEventListener("click", function (event) {
  // check if the click was outside the navbar menu
  if (!navbarMenu.contains(event.target)) {
    // close the navbar menu
    navbarMenu.classList.remove("show");
  }
});

//partner->
const slideshow = document.querySelector(".imgs");
const images = slideshow.getElementsByTagName("img");
let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  const currentImageWidth = images[currentIndex].clientWidth;
  const translateX = -(
    currentIndex * currentImageWidth -
    containerWidth / 2 +
    currentImageWidth / 2
  );
  slideshow.style.transform = `translateX(${translateX}px)`;
}, 5000);

// pagination

// *******************************************************************************

const slider = document.querySelector(".slider");
const container = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const pagination = document.querySelector(".pagination");

let currentSlide = 0;
let interval = null;

// create pagination buttons
for (let i = 0; i < slides.length; i++) {
  const button = document.createElement("button");
  button.addEventListener("click", () => {
    goToSlide(i);
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  });
  pagination.appendChild(button);
}

// update pagination on slide change
function updatePagination() {
  const buttons = pagination.querySelectorAll("button");
  buttons.forEach((button) => button.classList.remove("active"));
  buttons[currentSlide].classList.add("active");
}

// go to specific slide
function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  container.style.left = `-${currentSlide * 100}%`;
  updatePagination();
}

// go to next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  container.style.left = `-${currentSlide * 100}%`;
  updatePagination();
}

// start auto slide
interval = setInterval(nextSlide, 5000);

// make slider responsive
function resize() {
  const slideWidth = slider.clientWidth;
  container.style.width = `${slides.length * slideWidth}px`;
  slides.forEach((slide) => (slide.style.width = `${slideWidth}px`));
  container.style.left = `-${currentSlide * slideWidth}px`;
}

window.addEventListener("resize", resize);
resize();

//********************************************* second pagination */
const slideshows = document.getElementById("slideshow");
const imags = slideshows.getElementsByTagName("img");
let currentImageIndex = 0;

function showNextImage() {
  imags[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex + 1) % imags.length;
  imags[currentImageIndex].style.display = "block";
}

setInterval(showNextImage, 3000);
// *************slider********
const slidesho = document.getElementById("slidesho");
const imag = slidesho.getElementsByTagName("img");
let currentImageInde = 0;

function showNextImag() {
  imag[currentImageInde].style.display = "none";
  currentImageInde = (currentImageInde + 1) % imag.length;
  imag[currentImageInde].style.display = "block";
}

setInterval(showNextImag, 3000);
