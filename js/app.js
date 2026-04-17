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
