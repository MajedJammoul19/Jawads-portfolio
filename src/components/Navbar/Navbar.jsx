import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../../public/logo.png'
const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)


  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [open])

  return (
    <header className={styles.navbar}>
      <a href="#home" className={styles.mark}>
         <img src={logo} className={styles.logo} alt="Logo" />
      </a>

      <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
       
      </nav>

      <button
        className={styles.toggle}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}

export default Navbar
