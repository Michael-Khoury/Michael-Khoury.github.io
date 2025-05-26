# 🌐 Michael Khoury – Portfolio Frontend

This is the frontend for my **full-stack personal portfolio website**, developed using **React.js (with JSX)** and **React Router** for multi-page navigation and scroll-aware routing. The site is fully responsive and styled entirely using custom CSS, including media queries for mobile optimization.

It features a clean, component-driven UI with animated typing effects, smooth scroll behavior, and dynamic background handling (including mobile-optimized flipping and repeating logic). The app includes modular, reusable components such as the `Navbar`, `Footer`, and `ScrollToTop`.

This frontend communicates with a custom-built backend (detailed below) to handle contact form submissions.

---

## ✨ Features

- 🔁 **Multi-page routing** with `react-router-dom`
- 🎯 **Scroll-aware navigation** (e.g., Home vs. About section)
- 💡 **Scroll-triggered fade-in animations**
- 📱 **Mobile-first design** with responsive CSS 
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

## 🌐 Backend API (Contact Form)

This frontend is connected to a custom-built **REST API** using:

- **Node.js**
- **Express.js**
- **Nodemailer**
- **Render** (for deployment)

The backend handles `POST` requests from the contact form and sends email notifications securely. It also includes optional **MongoDB** storage via **Mongoose** (commented out for flexibility).

🔗 [Backend GitHub Repository](https://github.com/your-username/backend-repo) <!-- Replace with actual link -->





