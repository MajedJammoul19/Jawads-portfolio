# Jawad Kasoua — Portfolio

React + Vite + CSS Modules. Black & white theme, Montserrat throughout.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Where things live

- `src/components/` — one folder per section (`Navbar`, `Hero`, `About`, `Projects`, `ProjectGallery`, `Contact`), each with its `.jsx` and its own `.module.css`.
- `src/data/projects.js` — edit this to add/remove/reorder projects. Each project needs an `id`, `title`, `category`, `year`, a `cover` image, a `description`, and an `images` array for the gallery page.
- `src/main.jsx` — routing. `/` is the main page, `/project/:id` is the full-screen gallery that opens in a new tab when a project card is clicked.

## Images you need to add

Drop real files into `public/images/` (Vite serves anything in `public/` from the site root):

- `public/images/jawad-portrait.jpg` — the hero photo.
- `public/images/projects/<project-id>/cover.jpg` — the card thumbnail for each project.
- `public/images/projects/<project-id>/1.jpg`, `2.jpg`, ... — the full-size images shown top-to-bottom on that project's gallery page. List them in the `images` array in `src/data/projects.js`, in the order you want them to appear.
- `public/cv/Jawad-Kasoua-CV.pdf` — the file the navbar's "Download CV" button downloads.

Until you add real files, the `<img>` tags will just show broken-image icons — everything else works.

## Contact form

`src/components/Contact/Contact.jsx` currently just shows a "message sent" confirmation on submit without sending anything. Wire the `handleSubmit` function up to whatever you want to use (Formspree, EmailJS, your own backend endpoint, etc.).
