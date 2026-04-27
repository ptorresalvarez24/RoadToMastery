const STORAGE_KEY = "road-to-mastery-data-v1";

const curriculum = [
  { week: 1, phase: "Houdini", title: "Foundations", output: "3 parameterized props" },
  { week: 2, phase: "Houdini", title: "Controlled Systems", output: "Procedural Prop Generator v1" },
  { week: 3, phase: "Houdini", title: "Environment Generator", output: "Procedural Environment Tool" },
  { week: 4, phase: "Houdini", title: "Game-Ready Output", output: "Portfolio: Procedural RPG Environment Tool" },
  { week: 5, phase: "Python + Maya", title: "Python + Maya Basics", output: "Cleanup scripts" },
  { week: 6, phase: "Python + Maya", title: "Asset Validator", output: "Validator Tool v1" },
  { week: 7, phase: "Python + Maya", title: "Export Tool", output: "Export Tool" },
  { week: 8, phase: "Python + Maya", title: "Polish + UX", output: "Portfolio: Validation + Export Tool" },
  { week: 9, phase: "Shaders", title: "Rendering Fundamentals", output: "Material breakdown sheet" },
  { week: 10, phase: "Shaders", title: "Stylized Shader", output: "Stylized Shader" },
  { week: 11, phase: "Shaders", title: "Environment Shader", output: "Environment Shader" },
  { week: 12, phase: "Shaders", title: "Optimization + Breakdown", output: "Portfolio: Optimized Shader System" }
];

const defaultState = {
  completedWeeks: [],
  updates: [],
  resources: [],
  portfolio: [],
  theme: "dark"
};

let state = loadState();
const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState, ...saved } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function setTheme() {
  document.documentElement.classList.toggle("light", state.theme === "light");
}

function renderCurriculum() {
  const wrap = $("curriculumList");
  wrap.innerHTML = "";

  curriculum.forEach((item) => {
    const checked = state.completedWeeks.includes(item.week);
    const row = document.createElement("label");
    row.className = "curriculum-item";
    row.innerHTML = `
      <input type="checkbox" data-week="${item.week}" ${checked ? "checked" : ""} />
      <div>
        <strong>Week ${item.week}: ${item.title}</strong>
        <small>${item.output}</small>
      </div>
      <span class="phase-tag">${item.phase}</span>
    `;
    wrap.appendChild(row);
  });

  wrap.querySelectorAll("input[type='checkbox']").forEach((cb) => {
    cb.addEventListener("change", (event) => {
      const week = Number(event.target.dataset.week);
      if (event.target.checked && !state.completedWeeks.includes(week)) {
        state.completedWeeks.push(week);
      }
      if (!event.target.checked) {
        state.completedWeeks = state.completedWeeks.filter((w) => w !== week);
      }
      state.completedWeeks.sort((a, b) => a - b);
      saveState();
      renderDashboard();
    });
  });
}

function renderDashboard() {
  const completed = state.completedWeeks.length;
  const pct = Math.round((completed / curriculum.length) * 100);
  $("weeksCompletedStat").textContent = `${completed} / ${curriculum.length}`;
  $("portfolioCountStat").textContent = String(state.portfolio.length);
  $("resourceCountStat").textContent = String(state.resources.length);
  $("updatesCountStat").textContent = String(state.updates.length);
  $("programProgressLabel").textContent = `${pct}%`;
  $("programProgressBar").style.width = `${pct}%`;
}

function makeFileChip(file) {
  const template = $("filePreviewTemplate");
  const chip = template.content.firstElementChild.cloneNode(true);
  const img = chip.querySelector("img");
  chip.querySelector(".filename").textContent = file.name;

  if (file.dataUrl && file.type && file.type.startsWith("image/")) {
    img.hidden = false;
    img.src = file.dataUrl;
  }

  return chip;
}

function createFilesFromInput(fileInput) {
  const files = [...fileInput.files];
  return Promise.all(
    files.map(
      (file) =>
        new Promise((resolve) => {
          if (!file.type.startsWith("image/")) {
            resolve({ name: file.name, type: file.type, dataUrl: null });
            return;
          }
          const reader = new FileReader();
          reader.onload = () => resolve({ name: file.name, type: file.type, dataUrl: reader.result });
          reader.onerror = () => resolve({ name: file.name, type: file.type, dataUrl: null });
          reader.readAsDataURL(file);
        })
    )
  );
}

function renderUpdates() {
  const q = $("updateSearch").value.trim().toLowerCase();
  const list = $("updatesList");
  list.innerHTML = "";

  state.updates
    .filter((u) => [u.title, u.notes, `week ${u.week}`].join(" ").toLowerCase().includes(q))
    .sort((a, b) => b.date.localeCompare(a.date))
    .forEach((u) => {
      const card = document.createElement("article");
      card.className = "update-card";
      card.innerHTML = `
        <div class="row-between">
          <strong>Week ${u.week} — ${u.title}</strong>
          <span class="small">${u.date}</span>
        </div>
        <p>${u.notes}</p>
      `;

      if (u.files.length) {
        const fileRow = document.createElement("div");
        fileRow.className = "file-row";
        u.files.forEach((file) => fileRow.appendChild(makeFileChip(file)));
        card.appendChild(fileRow);
      }

      const del = document.createElement("button");
      del.className = "secondary";
      del.textContent = "Delete";
      del.addEventListener("click", () => {
        state.updates = state.updates.filter((x) => x.id !== u.id);
        saveState();
        renderUpdates();
        renderDashboard();
      });
      card.appendChild(del);

      list.appendChild(card);
    });
}

function renderResources() {
  const list = $("resourcesList");
  list.innerHTML = "";

  state.resources
    .sort((a, b) => a.section.localeCompare(b.section))
    .forEach((r) => {
      const card = document.createElement("article");
      card.className = "resource-card";
      card.innerHTML = `
        <div class="row-between">
          <strong>${r.title}</strong>
          <span class="small">${r.type}</span>
        </div>
        <p class="small">${r.section}</p>
        ${r.link ? `<p><a href="${r.link}" target="_blank" rel="noreferrer">${r.link}</a></p>` : ""}
        ${r.notes ? `<p>${r.notes}</p>` : ""}
      `;
      const del = document.createElement("button");
      del.className = "secondary";
      del.textContent = "Remove";
      del.addEventListener("click", () => {
        state.resources = state.resources.filter((x) => x.id !== r.id);
        saveState();
        renderResources();
        renderDashboard();
      });
      card.appendChild(del);
      list.appendChild(card);
    });
}

function renderPortfolio() {
  const list = $("portfolioList");
  list.innerHTML = "";

  state.portfolio
    .sort((a, b) => b.date.localeCompare(a.date))
    .forEach((p) => {
      const card = document.createElement("article");
      card.className = "portfolio-card";
      const firstImage = p.files.find((f) => f.dataUrl && f.type.startsWith("image/"));
      card.innerHTML = `
        <strong>${p.type}</strong>
        <p class="small">Completed: ${p.date}</p>
        ${firstImage ? `<img src="${firstImage.dataUrl}" alt="${p.type} preview" />` : ""}
        <p>${p.summary}</p>
        ${p.link ? `<p><a href="${p.link}" target="_blank" rel="noreferrer">Project Link</a></p>` : ""}
      `;
      if (p.files.length) {
        const fileRow = document.createElement("div");
        fileRow.className = "file-row";
        p.files.forEach((file) => fileRow.appendChild(makeFileChip(file)));
        card.appendChild(fileRow);
      }

      const del = document.createElement("button");
      del.className = "secondary";
      del.textContent = "Delete";
      del.addEventListener("click", () => {
        state.portfolio = state.portfolio.filter((x) => x.id !== p.id);
        saveState();
        renderPortfolio();
        renderDashboard();
      });
      card.appendChild(del);
      list.appendChild(card);
    });
}

function initWeekSelectors() {
  const select = $("updateWeek");
  curriculum.forEach((w) => {
    const option = document.createElement("option");
    option.value = w.week;
    option.textContent = `Week ${w.week} — ${w.title}`;
    select.appendChild(option);
  });
}

function initForms() {
  $("weeklyUpdateForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const files = await createFilesFromInput($("updateFiles"));
    state.updates.push({
      id: uid(),
      week: Number($("updateWeek").value),
      date: $("updateDate").value,
      title: $("updateTitle").value.trim(),
      notes: $("updateNotes").value.trim(),
      files
    });
    saveState();
    event.target.reset();
    renderUpdates();
    renderDashboard();
  });

  $("resourceForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.resources.push({
      id: uid(),
      section: $("resourceSection").value,
      type: $("resourceType").value,
      title: $("resourceTitle").value.trim(),
      link: $("resourceLink").value.trim(),
      notes: $("resourceNotes").value.trim()
    });
    saveState();
    event.target.reset();
    renderResources();
    renderDashboard();
  });

  $("portfolioForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const files = await createFilesFromInput($("portfolioFiles"));
    state.portfolio.push({
      id: uid(),
      type: $("portfolioType").value,
      date: $("portfolioDate").value,
      summary: $("portfolioSummary").value.trim(),
      link: $("portfolioLink").value.trim(),
      files
    });
    saveState();
    event.target.reset();
    renderPortfolio();
    renderDashboard();
  });
}

function initActions() {
  $("updateSearch").addEventListener("input", renderUpdates);

  $("toggleThemeBtn").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    saveState();
    setTheme();
  });

  $("exportDataBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `road-to-mastery-backup-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  });

  $("importDataInput").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    try {
      const incoming = JSON.parse(text);
      state = { ...defaultState, ...incoming };
      saveState();
      setTheme();
      renderCurriculum();
      renderUpdates();
      renderResources();
      renderPortfolio();
      renderDashboard();
      alert("Import successful.");
    } catch {
      alert("Invalid backup file.");
    }
    event.target.value = "";
  });
}

function boot() {
  initWeekSelectors();
  initForms();
  initActions();
  setTheme();
  renderCurriculum();
  renderUpdates();
  renderResources();
  renderPortfolio();
  renderDashboard();
}

boot();
