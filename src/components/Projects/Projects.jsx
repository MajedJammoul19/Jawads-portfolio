import { Link } from 'react-router-dom'
import projects from '../../data/projects.js'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>Selected Projects</h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <span className={styles.index}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className={styles.cover}>
          <img
    src={project.cover}
    srcSet={`${project.coverSmall} 400w, ${project.cover} 1200w`}
    sizes="(max-width: 600px) 400px, 1200px"
    alt={project.title}
    loading="lazy"
  />
            </div>
            <div className={styles.cardFooter}>
              <h3>{project.title}</h3>
              <p>
                {project.category} · {project.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects
