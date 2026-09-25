# Shurui Hu — Academic Homepage

Personal academic website for **https://shuruihu.github.io/**.

## Maintain the site

The site is intentionally lightweight and dependency-free.

- `index.html` — semantic page structure; usually does not need editing.
- `assets/css/styles.css` — visual design and responsive layout.
- `assets/js/data.js` — **main content file**. Edit this file to add or update research, publications, projects, experience, links, and profile text.
- `assets/js/app.js` — renders the content from `data.js`; normally does not need editing.
- `assets/Shurui_Hu_CV.pdf` — downloadable CV.

## Add a project

Add another object to `projects` in `assets/js/data.js`. The project image area is currently a generated visual placeholder so the layout stays stable until real figures are added.

## Add a publication

Add another object to `publications` in `assets/js/data.js` with `year`, `title`, `authors`, `venue`, and `url`.

## Deployment

This repository is the user GitHub Pages repository (`ShuruiHu/shuruihu.github.io`). Changes pushed to the publishing branch are served by GitHub Pages.
