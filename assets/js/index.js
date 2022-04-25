"use strict";

const chapter = [
  [".chapter-1", ".card.card-bg-1"],
  [".chapter-2", ".card.card-bg-2"],
  [".chapter-3", ".card.card-bg-3"],
  [".chapter-4", ".card.card-bg-4"],
  [".chapter-5", ".card.card-bg-5"],
  [".chapter-6", ".card.card-bg-6"],
];

for (let i = 0; i < chapter.length; i++) {
  const chapterEl = document.querySelector(chapter[i][0]);
  const card_bgEl = document.querySelector(chapter[i][1]);
  const card_backdrop = document.querySelector(
    chapter[i][1] + " .card-img-overlay"
  );
  chapterEl.addEventListener("mouseover", function () {
    card_bgEl.classList.toggle("card-js");
    card_backdrop.classList.toggle("card-img-overlay-js");
  });
  chapterEl.addEventListener("mouseout", function () {
    card_bgEl.classList.toggle("card-js");
    card_backdrop.classList.toggle("card-img-overlay-js");
  });
}
