# 🌐 Michael Khoury – Portfolio Frontend

This is the frontend for my **full-stack personal portfolio website**, developed using **React.js (with JSX)** and **React Router** for multi-page navigation and scroll-aware routing. The site is fully responsive and styled entirely using custom CSS, including media queries for mobile optimization — no UI frameworks used.

It features a clean, component-driven UI with animated typing effects, smooth scroll behavior, and dynamic background handling (including mobile-optimized flipping and repeating logic). The app includes modular, reusable components such as the `Navbar`, `Footer`, and `ScrollToTop`.

This frontend communicates with a custom-built backend (detailed below) to handle contact form submissions.

---

## ✨ Features

- 🔁 **Multi-page routing** with `react-router-dom`
- 🎯 **Scroll-aware navigation** (e.g., Home vs. About section)
- 💡 **Scroll-triggered fade-in animations**
- 📱 **Mobile-first design** with responsive CSS (no Tailwind/Bootstrap)
- 🔄 **Animated text** using timed typewriter effect
- 📨 **Contact form integration** with live backend
- 📄 **Embedded PDF resume viewer**
- 🎨 **Custom layout and color-coded tech stacks**

---

## 🛠️ Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **JSX**
- **React Router**
- **HTML5**
- **CSS3**
- **GitHub Pages** (for deployment)
- **RESTful API** (with backend integration)

---

## 📂 Pages & Components

### Pages

| Page             | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `/` (Home)        | Animated intro, profile section, quick links                               |
| `/projects`       | Detailed project blocks with screenshots and GitHub links                  |
| `/work`           | Internships and co-op experiences with logos and tech tags                 |
| `/resume`         | Embedded PDF viewer of resume                                              |
| `/contact`        | Contact form + styled social boxes (GitHub, Gmail, LinkedIn)               |

### Components

- `Navbar.js`: Responsive navigation with scroll-tracking and hamburger menu
- `Footer.js`: Sticky footer with external links
- `ScrollToTop.js`: Auto scrolls to top on route change
- `App.css`: Custom CSS styling for all components, fully responsive

---

📍 **Live Site**:  
[https://michael-khoury.github.io](https://michael-khoury.github.io)


