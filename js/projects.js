"use script";

const projects = [
  {
    id: 0,
    title: "Main Title",
    technologies: ["css","html","bootstrap"],
    image: "./images/projects/gymfit.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 2000s, when an unknown printer took a standard dummy text",
    live_version: "https://miltonhenschel.github.io/myPortfolio/",
    source_code: "https://github.com/miltonHenschel/myPortfolio"
  },
  {
    id: 1,
    title: "Title 1",
    technologies: ["html","bootstrap","ruby"],
    image: "./images/projects/project-1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1900s, when an unknown printer took a standard dummy text",
    live_version: "https://miltonhenschel.github.io/myPortfolio/",
    source_code: "https://github.com/miltonHenschel/myPortfolio"
  },
  {
    id: 2,
    title: "Title 2",
    technologies: ["css","bootstrap","ruby"],
    image: "./images/projects/project-2.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1800s, when an unknown printer took a standard dummy text",
    live_version: "https://miltonhenschel.github.io/myPortfolio/",
    source_code: "https://github.com/miltonHenschel/myPortfolio"
  },
  {
    id: 3,
    title: "Title 3",
    technologies: ["css","html","ruby"],
    image: "./images/projects/project-3.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1700s, when an unknown printer took a standard dummy text",
    live_version: "https://miltonhenschel.github.io/myPortfolio/",
    source_code: "https://github.com/miltonHenschel/myPortfolio"
  },
  {
    id: 4,
    title: "Title 4",
    technologies: ["css","html","ror"],
    image: "./images/projects/project-4.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1600s, when an unknown printer took a standard dummy text",
    live_version: "https://miltonhenschel.github.io/myPortfolio/",
    source_code: "https://github.com/miltonHenschel/myPortfolio"
  },
  {
    id: 5,
    title: "Title 5",
    technologies: ["sass","html","bootstrap","ruby"],
    image: "./images/projects/project-2.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    live_version: "https://miltonhenschel.github.io/myPortfolio/",
    source_code: "https://github.com/miltonHenschel/myPortfolio"
  },
  {
    id: 6,
    title: "Title 6",
    technologies: ["scss","html","ruby"],
    image: "./images/projects/project-3.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1400s, when an unknown printer took a standard dummy text",
    live_version: "https://miltonhenschel.github.io/myPortfolio/",
    source_code: "https://github.com/miltonHenschel/myPortfolio"
  },
];

const body = document.querySelector("body");
const prjContent = document.createElement("section");
const aboutMe = document.getElementById("about-me");

// DYNAMIC PROJECTS SECTION
body.insertBefore(prjContent, aboutMe);
prjContent.id = "projects";
prjContent.innerHTML = `
  <div id="projects-intro">
  <div>
    <h2 id="projects-title">My Recent Works</h2>
  </div>
  <hr id="projects-hr" />
  </div>
  <div id="projects-list">
  <div>

  <div id="projects-list">
      <div>
        <div id="main-project">
          <div id="main-project-header"><img id="main-project-img" src="./images/projects/gymfit.png" alt="gym fit image" /></div>
          <div id="main-project-description">
            <h3 class="project-heading">Multi-Post Stories</h3>
            <p>A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a standard
              dummy text.</p>
            <ul class="project-lang">
              <li class="project-lang-item">html</li>
              <li class="project-lang-item">css</li>
              <li class="project-lang-item">bootstrap</li>
            </ul>
            <button id="0" class="button jsBtn">See Project</button>
          </div>
        </div>
      </div>

      <div id="other-projects">
        <div id="project-1">
          <h3 class="project-heading">Professional Art Printing Data</h3>
          <p class="project-description">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
          <ul class="project-lang">
            <li class="project-lang-item">html</li>
            <li class="project-lang-item">css</li>
            <li class="project-lang-item">bootstrap</li>
            <li class="project-lang-item">ruby</li>
          </ul>
          <button id="1" class="button project-btn jsBtn">See Project</button>
        </div>

        <div id="project-2">
          <h3 class="project-heading">Professional Art Printing Data</h3>
          <p class="project-description">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
          <ul class="project-lang">
            <li class="project-lang-item">html</li>
            <li class="project-lang-item">css</li>
            <li class="project-lang-item">bootstrap</li>
            <li class="project-lang-item">ruby</li>
          </ul>
          <button id="2" class="button project-btn jsBtn">See Project</button>
        </div>

        <div id="project-3">
          <h3 class="project-heading">Professional Art Printing Data</h3>
          <p class="project-description">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
          <ul class="project-lang">
            <li class="project-lang-item">html</li>
            <li class="project-lang-item">css</li>
            <li class="project-lang-item">bootstrap</li>
            <li class="project-lang-item">ruby</li>
          </ul>
          <button id="3" class="button project-btn jsBtn">See Project</button>
        </div>

        <div id="project-4">
          <h3 class="project-heading">Professional Art Printing Data</h3>
          <p class="project-description">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
          <ul class="project-lang">
            <li class="project-lang-item">html</li>
            <li class="project-lang-item">css</li>
            <li class="project-lang-item">bootstrap</li>
            <li class="project-lang-item">ruby</li>
          </ul>
          <button id="4" class="button project-btn jsBtn">See Project</button>
        </div>

        <div id="project-5">
          <h3 class="project-heading">Professional Art Printing Data</h3>
          <p class="project-description">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
          <ul class="project-lang">
            <li class="project-lang-item">html</li>
            <li class="project-lang-item">css</li>
            <li class="project-lang-item">bootstrap</li>
            <li class="project-lang-item">ruby</li>
          </ul>
          <button id="5" class="button project-btn jsBtn">See Project</button>
        </div>

        <div id="project-6">
          <h3 class="project-heading">Professional Art Printing Data</h3>
          <p class="project-description">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
          <ul class="project-lang">
            <li class="project-lang-item">html</li>
            <li class="project-lang-item">css</li>
            <li class="project-lang-item">bootstrap</li>
            <li class="project-lang-item">ruby</li>
          </ul>
          <button id="6" class="button project-btn jsBtn">See Project</button>
        </div>
      </div>
    </div>
`;

const prjBtn = document.querySelectorAll(".jsBtn");
prjBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const section = document.createElement("section");
    section.className = "section-menu";
    section.innerHTML = `
    <div class="div-menu">
      <h3 id="div-menu-h3">${projects[button.id].title}</h3>
      <img id="menu-close-btn" src="./images/nav/close.png" />
    </div>
    <div class="div-menu">
      <ul>
        <li class="div-menu-li">qwerty</li>
        <li class="div-menu-li">azerty</li>
        <li class="div-menu-li">qwertz</li>
      </ul>
    </div>
    <div id="div-section">
      <div class="div-menu-img"><img id="div-section-img" src="${projects[button.id].image}" alt="" /></div>
      <div id="div-section-menu">
        <div class="div-menu"><p id="div-section-p">${projects[button.id].description}</p></div>
        <div id="div-menu-last">
          <a id="div-menu-live" href="${projects[button.id].live_version}"><button class="div-menu-button">See Live&nbsp;<div><img src="./images/social-media-header/live.png" alt="live icon" /></div></button></a>
          <a id="div-menu-source" href="${projects[button.id].source_code}"><button class="div-menu-button">See Source&nbsp;<div><img src="./images/social-media-header/github.png" alt="" /></div></button></a>
        </div>
      </div>
    </div>
    `;
    body.appendChild(section);
  });
});