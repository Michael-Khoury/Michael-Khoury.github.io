// src/pages/Contact.js
import React, { useState } from 'react';
import './ContactMe.css';

function ContactMe() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://backend-9v05.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(result.message || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Network error — please try again later.');
    }
  };

  return (
   <div className="page-container contact-page">
  <div className="projects-header">
    <h1 className="greeting1">Contact Me</h1>
    <p className="typed-subline1">
      Check out my social links or send me a message!
    </p>
  </div>

  {/* Social Links */}

  <div className="contact-icons">
  <a href="https://github.com/Michael-Khoury" target="_blank" rel="noopener noreferrer">
    <img src={require('../assets/icons/github.png')} alt="GitHub" className="contact-icon" />
  </a>
<a
  href="https://mail.google.com/mail/?view=cm&to=mkhoury@mun.ca"
  onClick={(e) => {
    e.preventDefault();
    window.open(
      'https://mail.google.com/mail/?view=cm&to=mkhoury@mun.ca',
      'gmailWindow',
      'width=600,height=600,scrollbars=yes,resizable=yes'
    );
  }}
>
  <img
    src={require('../assets/icons/gmail.png')}
    alt="Gmail"
    className="contact-icon"
  />
</a>
  <a href="https://www.linkedin.com/in/-khoury/" target="_blank" rel="noopener noreferrer">
    <img src={require('../assets/icons/linkedin.png')} alt="LinkedIn" className="contact-icon" />
  </a>
</div>


  {/* Contact Form */}
  <div className="form-wrapper">
    <h2 className="form-title">Message Me!</h2>
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Your message" rows="6" value={form.message} onChange={handleChange} required />
      <button type="submit">Send Message</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  </div>
</div>

  );
}

export default ContactMe;
