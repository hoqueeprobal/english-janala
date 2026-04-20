// API call to fetch all lessons
function fetchLessons() {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((json) => showLessons(json.data));
}

// Render lesson buttons
const lessonsCont = document.getElementById("lessons-container");

function showLessons(lessons) {
  lessons.forEach((lesson) => {
    const button = document.createElement("button");
    button.setAttribute("onclick", `fetchWordCards(${lesson.level_no})`);
    button.innerHTML = `<i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}`;
    button.classList.add(
      "btn",
      "btn-outline",
      "btn-primary",
      "lessons-btn",
      `lesson-btn-${lesson.level_no}`,
    );
    lessonsCont.appendChild(button);
  });
}

fetchLessons();

// API call to fetch word cards of a lesson
function fetchWordCards(levelNo) {
  inactiveAllBtn();
  const selectedButton = document.querySelector(`.lesson-btn-${levelNo}`);
  selectedButton.classList.add("btn-active");

  wordCards.innerHTML =
    '<span class="loading loading-dots loading-xl col-span-full mx-auto mt-12"></span>';

  const url = `https://openapi.programming-hero.com/api/level/${levelNo}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => showWordCards(json.data));
}

// Setup word container
const wordCards = document.getElementById("word-cards");

// Render word cards
const showWordCards = (words) => {
  wordCards.innerHTML = "";

  if (words.length <= 0) {
    wordCards.innerHTML = `
        <section class="col-span-full px-3 py-8 bangla-font">
            <img src="assets/alert-error.png" class="mx-auto">
            <p class="my-4 text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h4 class="text-2xl md:text-3xl text-[#292524]">নেক্সট Lesson এ যান</h4>
        </section>`;
    return;
  }

  for (const word of words) {
    const card = document.createElement("div");
    card.classList.add("card", "bg-white", "shadow-sm");

    card.innerHTML = `
        <div class="card-body lg:p-10">
            <h2 class="card-title text-3xl mx-auto">${word.word || "শব্দ পাওয়া যায়নি"}</h2>
            <p class="text-xl font-medium my-6">Meaning /Pronounciation</p>
            <h4 class="text-2xl lg:text-3xl font-semibold bangla-font text-[#18181B]">
                "${word.meaning || "শব্দার্থ পাওয়া যায়নি"} / ${word.pronunciation || "উচ্চারণ পাওয়া যায়নি"}"
            </h4>
            <div class="card-actions justify-between mt-12">
                <button onclick="fetchWordDetails(${word.id})" class="btn bg-[#1A91FF20] p-4">
                    <i class="fa-solid fa-circle-info"></i>
                </button>
                <button onclick="pronounceWord('${word.word}')" class="btn bg-[#1A91FF20] p-4">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
        </div>`;

    wordCards.appendChild(card);
  }
};

// Handle active lesson button
const inactiveAllBtn = () => {
  const lessonsBtn = document.querySelectorAll(".lessons-btn");
  for (let btn of lessonsBtn) {
    btn.classList.remove("btn-active");
  }
};
