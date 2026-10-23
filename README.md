# 🚀 VentureVerse 2026: Ideas into Action

A responsive, animated single-page website for **VentureVerse 2026**, a student entrepreneurship event organised by the **Entrepreneurship Development Cell (EDC), JSS University, Noida**.

Built with plain HTML, CSS and JavaScript.

**Live demo:** `https://<your-username>.github.io/venture-verse-2026/`

---

## 📅 Event details

| | |
|---|---|
| **Event** | VentureVerse 2026: Ideas into Action |
| **Organiser** | EDC JSSUni Noida |
| **Date** | 12 November 2026 (Thursday) |
| **Time** | 10:00 AM to 3:00 PM |
| **Venue** | University Auditorium, JSS University, Noida *(placeholder)* |

---

## ✨ Features

**Sections**
- Sticky header with EDC logo, section links and a mobile hamburger menu
- Hero with event name, rotating tagline, date, time, venue, call-to-action and live countdown
- About and highlights, stats band, Idea Spark, Pitch Lab, schedule timeline, speaker profiles (fictional), FAQ, RSVP form and footer

**Interactive**
- **Pitch Lab (unique feature):** build a 60-second pitch from four prompts, watch a live pitch card and strength meter, practise on a 60-second ring timer, and copy the result
- **Idea Spark:** a dice-roll that combines a campus problem with a "superpower" into a venture idea, and can pre-fill the Pitch Lab
- **RSVP form:** name, email and course/year, with inline validation and a success confirmation
- Scroll progress bar with a rocket, active-section highlighting in the nav
- Clickable schedule rows, 3D tilt on speaker cards, countdown to the event, FAQ accordion

**Animation**
- Rocket launch intro curtain, letter-by-letter headline, rotating hero word, floating bulbs, parallax dots
- Animated SVG lightbulb and rocket illustration in the hero
- Self-drawing "Idea to Launch" journey path with popping stages
- Scroll-reveal for cards and sections, count-up stats, confetti on RSVP success and "Pitch-ready"
- Shine on buttons, magnetic buttons and a trailing cursor ring on desktop
- Respects `prefers-reduced-motion`

**Design**
- Poster-inspired palette, sticker-style hard shadows, dashed borders and torn-paper edges
- Light and dark mode that follow the system setting
- Mobile-first, responsive and keyboard accessible

---

## 🗂️ Project structure

```
venture-verse-2026/
├── index.html
├── css/style.css
├── js/script.js
├── assets/edc-logo.png
├── .gitignore
└── README.md
```

---

## ▶️ Run locally

Open `index.html` in a browser, or serve the folder:

```bash
git clone https://github.com/<your-username>/venture-verse-2026.git
cd venture-verse-2026
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## 🌐 Deploy with GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings > Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/venture-verse-2026/`.

---

## 🛠️ Customisation

| What to change | Where |
|---|---|
| Event text, schedule, speakers, FAQ | `index.html` |
| Colours and fonts | CSS variables at the top of `css/style.css` |
| Countdown date | `js/script.js`, `new Date('2026-11-12T10:00:00+05:30')` |
| Idea Spark problems and superpowers | arrays `P` and `S` in `js/script.js` |
| Stats numbers | `data-n` attributes in the stats band in `index.html` |
| Social links, email, phone | Footer in `index.html` |
| Logo | Replace `assets/edc-logo.png` |

---

## 📝 RSVP form

The form validates input and shows a confirmation but **does not store or send data**. To collect real registrations, post the form data from the submit handler in `js/script.js` to Google Forms, Formspree or your own endpoint:

```js
fetch('https://your-endpoint.example/rsvp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, course })
});
```

---

## ⚠️ Placeholders

Speaker names, venue, stats, email, phone and social links are **fictional placeholders** from a mock event brief. Replace them before real use.

---

## 🙌 Credits

Organised by **EDC JSSUni Noida**.
