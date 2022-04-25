"use strict";

const chapter = [
  [".chapter-1", ".card.card-bg-1"],
  [".chapter-2", ".card.card-bg-2"],
  [".chapter-3", ".card.card-bg-3"],
  [".chapter-4", ".card.card-bg-4"],
  [".chapter-5", ".card.card-bg-5"],
  [".chapter-6", ".card.card-bg-6"],
];

function handleMouseOverOut(card_bgEl, card_backdropEl) {
  card_bgEl.classList.toggle("card-js");
  card_backdropEl.classList.toggle("card-img-overlay-js");
}

for (let i = 0; i < chapter.length; i++) {
  const chapterEl = document.querySelector(chapter[i][0]);
  const card_bgEl = document.querySelector(chapter[i][1]);
  const card_backdropEl = document.querySelector(
    chapter[i][1] + " .card-img-overlay"
  );
  chapterEl.addEventListener("mouseover", function () {
    handleMouseOverOut(card_bgEl, card_backdropEl);
  });
  chapterEl.addEventListener("mouseout", function () {
    handleMouseOverOut(card_bgEl, card_backdropEl);
  });
}
