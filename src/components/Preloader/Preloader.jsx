// Preloader.jsx
import { useEffect, useState } from 'react'
import styles from './Preloader.module.css'

function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // total time before removing from DOM
    const timer = setTimeout(() => setHidden(true), 2800)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className={styles.preloader}>
      <p className={styles.text}>Design beyond the logo</p>
    </div>
  )
}

export default Preloader