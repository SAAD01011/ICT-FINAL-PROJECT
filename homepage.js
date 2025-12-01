const SLIDER_IMAGES = ["images/1.png", "images/2.png", "images/3.png"];

/* 
function arrowClick(direction) {
  const heroSlider = document.querySelector(".hero-slider");
  const path = heroSlider.style.backgroundImage;

  const fileNumber = path.split("/")[2].split(".")[0];
  let newFileNumber;
  if (direction == "right") {
    newFileNumber = parseInt(fileNumber) + 1;
    if (newFileNumber == SLIDER_IMAGES.length + 1) {
      newFileNumber = 1;
    }
  } else if (direction == "left") {
    newFileNumber = parseInt(fileNumber) - 1;
    if (newFileNumber == 0) {
      newFileNumber = SLIDER_IMAGES.length;
    }
  }
const newPath = `url("images/${newFileNumber}.png")`;
  heroSlider.style.backgroundImage = newPath;
}
 */

let currentIndex = 0;

function arrowClick(direction) {
  if (direction === "right") {
    currentIndex = (currentIndex + 1) % SLIDER_IMAGES.length;
  } else if (direction === "left") {
    currentIndex =
      (currentIndex - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length;
  }

  document.querySelector(
    ".hero-slider"
  ).style.backgroundImage = `url("${SLIDER_IMAGES[currentIndex]}")`;
}

const testimonials = [
  {
    text: "After a construction project took longer than expected, my husband, my daughter and I needed a place to stay. We absolutely loved our vacation at Sona Hotel.",
    author: "- Alexander Vasquez",
    stars: "★★★★★",
  },
  {
    text: "Amazing hotel experience! The staff was friendly and the room was very comfortable. Highly recommended!",
    author: "- Sarah Thompson",
    stars: "★★★★☆",
  },
  {
    text: "Clean rooms, great service, and perfect location. I will definitely come back again!",
    author: "- Daniel Roberts",
    stars: "★★★★★",
  },
];

let index = 0;

function loadTestimonial(i) {
  document.getElementById("testimonialText").innerText = testimonials[i].text;
  document.getElementById("author").innerText = testimonials[i].author;
  document.getElementById("stars").innerText = testimonials[i].stars;
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  loadTestimonial(index);
}

function prevTestimonial() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  loadTestimonial(index);
}

// Load Header
fetch("header.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("header").innerHTML = data));

// Load Footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

// hover effect on the images in the next to services
document.querySelectorAll(".blog-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector("img").style.filter = "brightness(50%)";
  });

  card.addEventListener("mouseleave", () => {
    card.querySelector("img").style.filter = "brightness(60%)";
  });
});
