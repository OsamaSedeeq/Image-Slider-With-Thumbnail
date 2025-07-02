const slides = document.querySelectorAll(".Slider img");
const prevBtn = document.querySelector(".silder-container .prev-btn");
const nextBtn = document.querySelector(".silder-container .next-btn ");
const imgId = document.querySelector(".Slider .img-id");
const gallary = document.querySelector(".gallary-container");
gallary.style.gridTemplateColumns = `repeat(${slides.length},1fr)`;
console.log(slides.length);
let currentNumber = 0;
updateSliderControl();
updateThumbNailActive(currentNumber);

function goToSlid(n) {
  slides[currentNumber].classList.remove("active");
  currentNumber = (n + slides.length) % slides.length;
  slides[currentNumber].classList.add("active");
  updateSliderControl();
  updateThumbNailActive(currentNumber);
}

prevBtn.addEventListener("click", () => {
  goToSlid(currentNumber - 1);
});
nextBtn.addEventListener("click", () => {
  goToSlid(currentNumber + 1);
});

function updateSliderControl() {
  prevBtn.disabled = currentNumber === 0;
  nextBtn.disabled = currentNumber === slides.length - 1;
  imgId.innerHTML = `image ${currentNumber + 1} of ${slides.length}`;
}

slides.forEach((img, index) => {
  const thumbNail = img.cloneNode();
  gallary.appendChild(thumbNail);
  thumbNail.addEventListener("click", () => {
    goToSlid(index);
  });
});

function updateThumbNailActive(index) {
  gallary.querySelectorAll("img").forEach((img, i) => {
    img.classList.toggle("active", index === i);
  });
}
