import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

const facts = [
  { label: 'Focus', value: 'Brand Identity, Social Media Design' },
  { label: 'Tools', value: 'Illustrator, Photoshop' },
  { label: 'Availability', value: 'Open to freelance projects' },
]

function About() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el) // animate only once
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.about} ${inView ? styles.inView : ''}`}
    >
      <div className={styles.intro}>
        <h2 className={styles.heading}>About</h2>
        <p className={styles.paragraph}>
​I build concept-driven brand identities and high-impact visual campaigns that command attention.        </p>
        <p className={styles.paragraph}>
Brand & Visual Identity Designer specializing in crafting cohesive, strategy-led visual systems. My work bridges the gap between structured brand identity design and dynamic marketing collateral—transforming core brand values into memorable logos, custom typography, and high-conversion social media visuals.I help emerging businesses and established brands build a distinct, lasting visual presence.        </p>
      </div>

      <dl className={styles.facts}>
        {facts.map((fact) => (
          <div key={fact.label} className={styles.fact}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default About