// API call to fetch all lessons
function fetchLessons(){
    const url = 'https://openapi.programming-hero.com/api/levels/all';
    fetch(url)
    .then(res => res.json())
    .then(json => showLessons(json.data));
}

fetchLessons();