# 🚀 VentureVerse 2026: Ideas into Action

A responsive single-page website for **VentureVerse 2026**, a student entrepreneurship event organised by the **Entrepreneurship Development Cell (EDC), JSS University, Noida**.

Built with plain HTML, CSS and JavaScript.

**Live demo:** `file:///C:/Users/Yahvi/Downloads/VentureVerse%202026%20%E2%80%94%20Ideas%20into%20Action.html

---

## 📅 Event details

| | |
|---|---|
| **Event** | VentureVerse 2026: Ideas into Action |
| **Organiser** | EDC JSSUni Noida |
| **Date** | 12 November 2026 (Thursday) |
| **Time** | 10:00 AM to 3:00 PM |
| **Venue** | University Auditorium, JSS University, Noida *(placeholder)* |

A student-focused event about turning early ideas into ventures, learning from startup journeys, and exploring entrepreneurship on campus.

---

## ✨ Features

- **Sticky header** with the EDC logo and section navigation, plus a mobile hamburger menu
- **Hero section** with event name, tagline, date, time, venue, call-to-action and a live countdown
- **About and highlights** with three event benefits
- **Schedule timeline** with six sessions from 10:00 AM to 2:15 PM
- **Speaker profiles** with initials as avatars (fictional placeholders)
- **FAQ accordion** built with native `<details>`, no JavaScript needed
- **RSVP form** collecting name, email, and course and year of study, with:
  - inline validation and clear error messages
  - a success confirmation card with an event ticket summary
- **Footer** with EDC branding and social and contact placeholders
- **Responsive and accessible:** mobile-first layout, labelled form fields, ARIA attributes and keyboard-friendly controls
- **Light and dark mode** that follows the system setting

---

## 🗂️ Project structure

```
venture-verse-2026/
├── index.html          # Page markup
├── css/
│   └── style.css       # Styles, theme variables, responsive rules
├── js/
│   └── script.js       # Mobile menu, countdown, RSVP validation
├── assets/
│   └── edc-logo.png    # EDC JSSUni Noida logo
└── README.md
```

---

## ▶️ Run locally

No installation needed. Either open `index.html` in your browser, or serve the folder:

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
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then click **Save**.
5. Your site will be live at `https://<your-username>.github.io/venture-verse-2026/`.

---

## 🛠️ Customisation

| What to change | Where |
|---|---|
| Event text, schedule, speakers, FAQ | `index.html` |
| Brand colours and fonts | CSS variables at the top of `css/style.css` |
| Countdown target date | `js/script.js`, in `new Date('2026-11-12T10:00:00+05:30')` |
| Social links, email, phone | Footer in `index.html` |
| Logo | Replace `assets/edc-logo.png` |

---

## 📝 RSVP form

The form currently **validates input and shows a confirmation, but does not store or send data**. To collect real registrations, send the form data from the submit handler in `js/script.js` to one of these:

- [Google Forms](https://www.google.com/forms/about/) or a Google Apps Script web app
- [Formspree](https://formspree.io/) or a similar form-backend service
- your own API endpoint

Example using `fetch`:

```js
fetch('https://your-endpoint.example/rsvp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, course })
});
```

---

## 🎨 Design

The visual style follows the official VentureVerse 2026 poster:

| Colour | Hex |
|---|---|
| Navy | `#1b2a4a` |
| Cyan | `#0093c4` |
| Sky | `#00b4e6` |
| Orange | `#ff8a3d` |
| Cream | `#f1ede4` |

Fonts (Google Fonts): **Anton** for headings, **Poppins** for body text, **Kalam** for handwritten accents.

---

## ⚠️ Placeholders

The speaker names, venue, email address, phone number and social links are **fictional placeholders** from a mock event brief. Replace them before using this page for a real event.

---

## 🙌 Credits

Organised by **EDC JSSUni Noida**.
