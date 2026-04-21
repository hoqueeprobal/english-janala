# 📚 English Janala

A responsive vocabulary learning web application built with **HTML, Tailwind CSS, DaisyUI, and JavaScript (ES6+)**.  
It fetches real-time data from APIs and provides an interactive way to learn English vocabulary with pronunciation, details, and bookmarking features.

---

## 🚀 Live Demo

👉 https://hoqueeprobal.github.io/english-janala/

---

## ✨ Features

- 📖 Dynamic lesson loading from API  
- 🧠 Vocabulary cards for each lesson  
- 🔍 Search functionality for words  
- 🔊 Text-to-speech pronunciation feature  
- ⭐ Bookmark system (add/remove words)  
- 📄 Word details shown in modal  
- 🎯 Active lesson highlight system  
- 📱 Fully responsive UI (mobile + desktop)  
- ⚡ Loading spinner for better UX  

---

## 🛠️ Tech Stack

- HTML5  
- Tailwind CSS  
- DaisyUI  
- JavaScript (ES6+)  
- Font Awesome  
- REST API (Programming Hero Open API)

---

## 🔗 API Endpoints Used

- Get all lessons  
  `https://openapi.programming-hero.com/api/levels/all`

- Get words by level  
  `https://openapi.programming-hero.com/api/level/{id}`

- Get word details  
  `https://openapi.programming-hero.com/api/word/{id}`

- Get all words  
  `https://openapi.programming-hero.com/api/words/all`

---

## 📂 Project Structure

```plaintext
english-janala/
│── index.html
│── js/
│   └── app.js
│── style/
│   └── style.css
│── assets/
│   ├── alert-error.png
│   ├── fa-arrow-right-from-bracket.png
│   ├── fa-book-open.png
│   ├── fa-circle-question.png
│   ├── fb-thumb.png
│   ├── github-thumb.png
│   ├── hero-student.png
│   ├── instagram-thumb.png
│   ├── logo.png
│   └── youtube-thumb.png
└── README.md

