"use strict";

const chapter = [
  [".link-1", ".card.card-bg-1"],
  [".link-2", ".card.card-bg-2"],
  [".link-3", ".card.card-bg-3"],
  [".link-4", ".card.card-bg-4"],
  [".link-5", ".card.card-bg-5"],
  [".link-6", ".card.card-bg-6"],
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
