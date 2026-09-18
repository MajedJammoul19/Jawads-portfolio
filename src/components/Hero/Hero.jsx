import styles from './Hero.module.css'
import jawad from '../../assets/photo.jpg'
function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.textSide} >
        <p className={styles.role}>Graphic Designer</p>
        <h1 className={styles.title}>
          Jawad
          <br />
          Kasoua
        </h1>
        <p className={styles.statement}>
          Identity systems, editorial layouts and print design, built on a
          discipline of restraint — reducing every mark to what it needs and
          nothing more.
        </p>
    <div className={styles.linkRow}>
  <a href="#projects" className={styles.scrollLink}>View projects</a>
  <a href="#projects" className={styles.scrollLink}>Download cv</a>
</div>
      </div>

      <div className={styles.imageSide}>
        <img
          src={jawad}
          alt="Portrait of Jawad Kasoua"
        />
      </div>
    </section>
  )
}

export default Hero
