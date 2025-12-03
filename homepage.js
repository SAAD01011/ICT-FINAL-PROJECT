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

function openModal() {
  document.getElementById("mainModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("mainModal").style.display = "none";
}

// Auto-open modal when page loads
window.onload = function () {
  openModal();
};

// Close modal if clicking outside box
window.onclick = function (e) {
  if (e.target.id === "mainModal") {
    closeModal();
  }
};
const SLIDER_IMAGES = ["images/1.png", "images/2.png", "images/3.jpg"];

const SLIDER_CONTENT = [
  {
    tagline: "COUNTRY CLUB",
    heading: "Where Elegance Meets<br>Adventure",
    subtext: "Unwind, Play, Celebrate - Your Exclusive Escape",
  },
  {
    tagline: "LUXURY ROOMS",
    heading: "Experience Comfort<br>Like Never Before",
    subtext: "Premium stays designed for your relaxation",
  },
  {
    tagline: "YOUR PRIVATE RESORT",
    heading: "Discover Peace &<br>Exclusive Comfort",
    subtext: "A place where luxury blends with nature",
  },
];
let index1 = 0;
function arrowClick(direction) {
  if (direction === "right") index1++;
  else index1--;

  if (index1 >= SLIDER_IMAGES.length) index1 = 0;
  if (index1 < 0) index1 = SLIDER_IMAGES.length - 1;

  document.getElementById(
    "heroSlider"
  ).style.backgroundImage = `url('${SLIDER_IMAGES[index1]}')`;

  document.getElementById("tagline").innerHTML = SLIDER_CONTENT[index1].tagline;
  document.getElementById("heading").innerHTML = SLIDER_CONTENT[index1].heading;
  document.getElementById("subtext").innerHTML = SLIDER_CONTENT[index1].subtext;
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

let index2 = 0;

function loadTestimonial(i) {
  document.getElementById("testimonialText").innerText = testimonials[i].text;
  document.getElementById("author").innerText = testimonials[i].author;
  document.getElementById("stars").innerText = testimonials[i].stars;
}

function nextTestimonial() {
  index2 = (index2 + 1) % testimonials.length;
  loadTestimonial(index2);
}

function prevTestimonial() {
  index2 = (index2 - 1 + testimonials.length) % testimonials.length;
  loadTestimonial(index2);
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
