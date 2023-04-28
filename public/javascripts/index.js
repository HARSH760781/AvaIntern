window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const myElementPosition = document.querySelector(".imgs").offsetTop;

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
