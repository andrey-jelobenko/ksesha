"use strict";

const chapter_1 = document.querySelector(".chapter-1");
const chapter_2 = document.querySelector(".chapter-2");
const chapter_3 = document.querySelector(".chapter-3");
const chapter_4 = document.querySelector(".chapter-4");
const chapter_5 = document.querySelector(".chapter-5");
const chapter_6 = document.querySelector(".chapter-6");

const card_1 = document.querySelector(".card.card-bg-1");
const card_1_backdrop = document.querySelector(
  ".card.card-bg-1 .card-img-overlay"
);
chapter_1.addEventListener("mouseover", function () {
  card_1.classList.toggle("card-js");
  card_1_backdrop.classList.toggle("card-img-overlay-js");
});
chapter_1.addEventListener("mouseout", function () {
  card_1.classList.toggle("card-js");
  card_1_backdrop.classList.toggle("card-img-overlay-js");
});

const card_2 = document.querySelector(".card.card-bg-2");
const card_2_backdrop = document.querySelector(
  ".card.card-bg-2 .card-img-overlay"
);
chapter_2.addEventListener("mouseover", function () {
  card_2.classList.toggle("card-js");
  card_2_backdrop.classList.toggle("card-img-overlay-js");
});
chapter_2.addEventListener("mouseout", function () {
  card_2.classList.toggle("card-js");
  card_2_backdrop.classList.toggle("card-img-overlay-js");
});

const card_3 = document.querySelector(".card.card-bg-3");
const card_3_backdrop = document.querySelector(
  ".card.card-bg-3 .card-img-overlay"
);
chapter_3.addEventListener("mouseover", function () {
  card_3.classList.toggle("card-js");
  card_3_backdrop.classList.toggle("card-img-overlay-js");
});
chapter_3.addEventListener("mouseout", function () {
  card_3.classList.toggle("card-js");
  card_3_backdrop.classList.toggle("card-img-overlay-js");
});

const card_4 = document.querySelector(".card.card-bg-4");
const card_4_backdrop = document.querySelector(
  ".card.card-bg-4 .card-img-overlay"
);
chapter_4.addEventListener("mouseover", function () {
  card_4.classList.toggle("card-js");
  card_4_backdrop.classList.toggle("card-img-overlay-js");
});
chapter_4.addEventListener("mouseout", function () {
  card_4.classList.toggle("card-js");
  card_4_backdrop.classList.toggle("card-img-overlay-js");
});

const card_5 = document.querySelector(".card.card-bg-5");
const card_5_backdrop = document.querySelector(
  ".card.card-bg-5 .card-img-overlay"
);
chapter_5.addEventListener("mouseover", function () {
  card_5.classList.toggle("card-js");
  card_5_backdrop.classList.toggle("card-img-overlay-js");
});
chapter_5.addEventListener("mouseout", function () {
  card_5.classList.toggle("card-js");
  card_5_backdrop.classList.toggle("card-img-overlay-js");
});

const card_6 = document.querySelector(".card.card-bg-6");
const card_6_backdrop = document.querySelector(
  ".card.card-bg-6 .card-img-overlay"
);
chapter_6.addEventListener("mouseover", function () {
  card_6.classList.toggle("card-js");
  card_6_backdrop.classList.toggle("card-img-overlay-js");
});
chapter_6.addEventListener("mouseout", function () {
  card_6.classList.toggle("card-js");
  card_6_backdrop.classList.toggle("card-img-overlay-js");
});
