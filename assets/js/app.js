(() => {
  const data = window.SITE_DATA;
  const $ = (id) => document.getElementById(id);

  const linkButton = ({ label, url }, primary = false) => {
    const a = document.createElement("a");
    a.className = `button${primary ? " primary" : ""}`;
    a.href = url;
    a.textContent = label;
    if (!url.startsWith("mailto:")) {
      a.target = "_blank";
      a.rel = "noreferrer";
    }
    return a;
  };

  $("hero-kicker").textContent = data.profile.kicker;
  $("hero-name").textContent = data.profile.name;
  $("hero-title").textContent = data.profile.title;
  $("hero-bio").textContent = data.profile.bio;
  $("profile-photo").src = data.profile.photo;
  $("location").textContent = data.profile.location;
  $("status").textContent = data.profile.status;
  $("year").textContent = new Date().getFullYear();

  const social = $("social-links");
  social.appendChild(linkButton({ label: "Email", url: `mailto:${data.profile.email}` }, true));
  data.profile.socials.forEach((item) => social.appendChild(linkButton(item)));
  social.appendChild(linkButton({ label: "CV", url: data.profile.cv }));

  const about = $("about-copy");
  data.about.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    about.appendChild(p);
  });

  const research = $("research-list");
  data.research.forEach((item) => {
    const article = document.createElement("article");
    article.className = "research-card";
    article.innerHTML = `
      <div class="card-meta">${item.meta}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="tag-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>`;
    research.appendChild(article);
  });

  $("scholar-inline").href = data.profile.socials.find((item) => item.label === "Google Scholar").url;
  const publications = $("publication-list");
  data.publications.forEach((item) => {
    const article = document.createElement("article");
    article.className = "publication";
    article.innerHTML = `
      <div class="pub-year">${item.year}</div>
      <div>
        <div class="pub-title">${item.title}</div>
        <div class="pub-authors">${item.authors}</div>
        <div class="pub-venue">${item.venue}</div>
      </div>
      <a class="pub-link" href="${item.url}" target="_blank" rel="noreferrer">Scholar ↗</a>`;
    publications.appendChild(article);
  });

  const projects = $("project-list");
  data.projects.forEach((item) => {
    const article = document.createElement("article");
    article.className = "project-card";
    article.innerHTML = `
      <div class="project-visual">${item.visual}</div>
      <div class="project-body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="project-footer">
          <span>${item.detail}</span>
          <span class="project-status">${item.status}</span>
        </div>
      </div>`;
    projects.appendChild(article);
  });

  const timeline = $("experience-list");
  data.experience.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item";
    article.innerHTML = `
      <div class="timeline-time">${item.time}</div>
      <div>
        <h3>${item.title}</h3>
        <div class="timeline-place">${item.place}</div>
        <p class="timeline-desc">${item.description}</p>
      </div>`;
    timeline.appendChild(article);
  });

  const contact = $("contact-actions");
  contact.appendChild(linkButton({ label: data.profile.email, url: `mailto:${data.profile.email}` }, true));
  data.profile.socials.forEach((item) => contact.appendChild(linkButton(item)));
})();
