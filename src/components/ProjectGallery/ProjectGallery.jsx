import { Link, useParams } from 'react-router-dom'
import projects from '../../data/projects.js'
import styles from './ProjectGallery.module.css'

function ProjectGallery() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <Link to="/">Back home</Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.back}>
          ← Jawad Kasoua
        </Link>
        <div className={styles.headerText}>
          <h1>{project.title}</h1>
          <p>
            {project.category} · {project.year}
          </p>
          <p className={styles.description}>{project.description}</p>
        </div>
      </header>

      <main className={styles.stack}>
        {project.images.map((src, i) => (
          <img key={src} src={src} alt={`${project.title} — view ${i + 1}`} />
        ))}
      </main>
    </div>
  )
}

export default ProjectGallery
