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
function fetchWordCards(levelNo){
    inactiveAllBtn();
    const selectedButton = document.querySelector(`.lesson-btn-${levelNo}`);
    selectedButton.classList.add('btn-active');

    wordCards.innerHTML = '<span class="loading loading-dots loading-xl col-span-full mx-auto mt-12"></span>';

    const url = `https://openapi.programming-hero.com/api/level/${levelNo}`;
    fetch(url)
        .then(res => res.json())
        .then(json => showWordCards(json.data));
}

// Setup word container
const wordCards = document.getElementById('word-cards');