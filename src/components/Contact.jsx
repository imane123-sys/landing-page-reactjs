import React, { useState } from "react";
import "../css/Contact.css"

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section className="contact_section">
      <div className="contact_container">
        <h2 className="contact_title">Contactez-nous</h2>
        <p className="contact_subtitle">Une question ? Un projet ? Écrivez-nous un message !</p>
        
        <form onSubmit={handleSubmit} className="contact_form">
          <div className="form_group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Votre nom"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="votre@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              placeholder="Votre message ici..."
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}