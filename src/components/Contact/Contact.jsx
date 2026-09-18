import { useState } from 'react'
import styles from './Contact.module.css'

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sent

  // ⚠️ WhatsApp needs the number WITHOUT spaces or the leading "+"
  const whatsappNumber = '963952796204'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  function handleSubmit(e) {
    e.preventDefault()
    // Wire this up to your email/form service of choice (Formspree, EmailJS, a backend route, etc.)
    setStatus('sent')
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.intro}>
        <h2 className={styles.heading}>Contact</h2>
        <p className={styles.paragraph}>
          Have a project in mind? Send a short brief and Jawad will get back
          to you within a couple of days.
        </p>

        <a href="mailto:hello@jawadkasoua.com" className={styles.email}>
          hello@jawadkasoua.com
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
        >
          {/* WhatsApp icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.14 1.6 5.95L0 24l6.34-1.66a11.86 11.86 0 0 0 5.71 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.42-8.44zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.67-.23-.38a9.87 9.87 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.88 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
          </svg>
          WhatsApp
        </a>
      </div>

      {status === 'sent' ? (
        <p className={styles.confirmation}>
          Thanks — your message has been sent. Jawad will reply soon.
        </p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>

          <button type="submit" className={styles.submit}>
            Send message
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact