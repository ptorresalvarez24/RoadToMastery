// ─── Shared UI Components · Warm Editorial Edition ─────────────────────

function Placeholder({ label, width, height, color = "#e8e2d8", style = {} }) {
  return (
    <div style={{
      width, height,
      background: `repeating-linear-gradient(135deg, ${color} 0px, ${color} 10px, rgba(0,0,0,0.025) 10px, rgba(0,0,0,0.025) 20px)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      borderRadius: 4, flexShrink: 0, ...style,
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(40,28,16,0.35)", textAlign: "center", padding: "0 16px", lineHeight: 1.6 }}>{label}</span>
    </div>
  );
}

function ProgressBar({ value, color = "var(--accent-blue)", height = 3, style = {} }) {
  return (
    <div style={{ width: "100%", height, background: "rgba(40,28,16,0.1)", borderRadius: height, overflow: "hidden", ...style }}>
      <div style={{
        height: "100%", width: `${value}%`,
        background: color, borderRadius: height,
        transition: "width 0.6s ease",
      }} />
    </div>
  );
}

const STATUS_LABELS = {
  "complete":     { label: "Complete",       color: "#5a8a60",  bg: "rgba(90,138,96,0.1)",   dot: "#5a8a60" },
  "in-progress":  { label: "In Progress",    color: "#a07830",  bg: "rgba(196,164,100,0.15)", dot: "#c4a464" },
  "upcoming":     { label: "Upcoming",       color: "#9c9080",  bg: "rgba(40,28,16,0.06)",    dot: "#c0b8a8" },
  "portfolio-ready": { label: "Portfolio Ready", color: "#5a8a60", bg: "rgba(90,138,96,0.1)", dot: "#5a8a60" },
  "research":     { label: "Research",       color: "#a07830",  bg: "rgba(196,164,100,0.12)", dot: "#c4a464" },
  "prototype":    { label: "Prototype",      color: "#5a7a9a",  bg: "rgba(123,154,181,0.12)", dot: "#7b9ab5" },
  "functional":   { label: "Functional",     color: "#5a8a60",  bg: "rgba(138,170,144,0.12)", dot: "#8aaa90" },
  "polish":       { label: "Polish",         color: "#7a5a8a",  bg: "rgba(180,140,200,0.12)", dot: "#b08ac0" },
};

function Badge({ label, size = "sm" }) {
  const cfg = STATUS_LABELS[label] || { label, color: "var(--text-dim)", bg: "rgba(40,28,16,0.06)", dot: "var(--text-dim)" };
  const px = size === "sm" ? "4px 9px" : "6px 12px";
  const fs = size === "sm" ? 10 : 11;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: px, borderRadius: 3,
      background: cfg.bg, color: cfg.color,
      fontFamily: "var(--font-mono)", fontSize: fs,
      letterSpacing: "0.07em", fontWeight: 600, textTransform: "uppercase", whiteSpace: "nowrap",
    }}>
      <span style={{ width: 4, height: 4, borderRadius: "50%", background: cfg.dot, display: "inline-block" }} />
      {cfg.label || label}
    </span>
  );
}

function PhasePill({ phase }) {
  const p = PHASES[phase - 1];
  if (!p) return null;
  const colors = [
    { color: "#5a7a9a", bg: "rgba(123,154,181,0.12)" },
    { color: "#a07830", bg: "rgba(196,164,100,0.12)" },
    { color: "#5a8060", bg: "rgba(138,170,144,0.12)" },
  ];
  const c = colors[phase - 1] || colors[0];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "3px 9px", borderRadius: 2,
      background: c.bg, color: c.color,
      fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase",
    }}>
      {p.tag}
    </span>
  );
}

function SectionHeader({ label, title, subtitle, action, style = {}, center = false }) {
  return (
    <div style={{ marginBottom: 40, textAlign: center ? "center" : "left", ...style }}>
      {label && (
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 10, textTransform: "uppercase" }}>
          {label}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: center ? "center" : "space-between", gap: 16 }}>
        <div>
          <h2 style={{ fontSize: 40, fontWeight: 800, fontStyle: "normal", color: "var(--text-primary)", margin: 0, letterSpacing: "-0.03em", lineHeight: 1, fontFamily: "var(--font-display)" }}>{title}</h2>
          {subtitle && <p style={{ color: "var(--text-dim)", margin: "8px 0 0", fontSize: 14, fontFamily: "var(--font-body)", fontWeight: 400 }}>{subtitle}</p>}
        </div>
        {action}
      </div>
    </div>
  );
}

function Card({ children, style = {}, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: "var(--surface-elevated)",
        border: `1px solid ${hov && onClick ? "var(--border-mid)" : "var(--border)"}`,
        borderRadius: 6,
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: hov && onClick ? "translateY(-2px)" : "none",
        boxShadow: hov && onClick ? "0 6px 24px rgba(40,28,16,0.1)" : "0 1px 4px rgba(40,28,16,0.04)",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}>
      {children}
    </div>
  );
}

function Divider({ style = {} }) {
  return <div style={{ height: 1, background: "var(--border)", width: "100%", ...style }} />;
}

function StatTile({ label, value, sub, color = "var(--text-primary)" }) {
  return (
    <div style={{ padding: "20px 24px", background: "var(--surface-elevated)", border: "1px solid var(--border)", borderRadius: 6, boxShadow: "0 1px 4px rgba(40,28,16,0.04)" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", color: "var(--text-dim)", marginBottom: 10, textTransform: "uppercase" }}>{label}</div>
      <div style={{ fontSize: 34, fontWeight: 600, color, fontFamily: "var(--font-display)", letterSpacing: "-0.02em", lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 6, fontFamily: "var(--font-body)" }}>{sub}</div>}
    </div>
  );
}

function Btn({ children, variant = "primary", onClick, style = {}, small = false }) {
  const [hov, setHov] = React.useState(false);
  const base = {
    display: "inline-flex", alignItems: "center", gap: 7,
    padding: small ? "7px 14px" : "10px 22px",
    borderRadius: 4, cursor: "pointer",
    fontFamily: "var(--font-body)", fontSize: small ? 12 : 13, fontWeight: 600,
    letterSpacing: "0.01em", transition: "all 0.15s",
  };
  const variants = {
    primary:   { background: hov ? "#1c1712" : "#2a2018", color: "#f6f1e9", border: "1px solid transparent" },
    secondary: { background: hov ? "rgba(40,28,16,0.07)" : "transparent", color: "var(--text-secondary)", border: "1px solid var(--border-mid)" },
    ghost:     { background: "transparent", color: hov ? "var(--text-primary)" : "var(--text-dim)", border: "none", padding: small ? "7px 8px" : "10px 10px" },
    amber:     { background: hov ? "#b8942e" : "var(--accent-amber)", color: "#fff", border: "1px solid transparent" },
  };
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </button>
  );
}

function Tag({ label }) {
  return (
    <span style={{
      padding: "3px 8px", borderRadius: 3,
      background: "rgba(40,28,16,0.06)", color: "var(--text-dim)",
      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.04em",
    }}>{label}</span>
  );
}

function WeekRing({ completion, color = "var(--accent-blue)", size = 36 }) {
  const r = (size - 4) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (completion / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(40,28,16,0.1)" strokeWidth={2.5} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={2.5}
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
        style={{ transition: "stroke-dasharray 0.6s ease" }} />
    </svg>
  );
}

// ─── Shared persistent state (repo API + local fallback) ───────────────
const REPO_STATE_KEY = "rtm_repo_state_v1";
const REPO_STATE_ENDPOINT = "/api/state";

function defaultRepoState() {
  return {
    currentWeek: STATS.currentWeek,
    userResources: [],
    weekProgress: {},
    weekDetails: {},
  };
}

function readRepoState() {
  try {
    return { ...defaultRepoState(), ...(JSON.parse(localStorage.getItem(REPO_STATE_KEY) || "{}") || {}) };
  } catch {
    return defaultRepoState();
  }
}

function writeRepoState(next) {
  localStorage.setItem(REPO_STATE_KEY, JSON.stringify(next));
}

async function pushRepoState(next) {
  writeRepoState(next);
  try {
    await fetch(REPO_STATE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
  } catch {
    // Offline / static mode: local state still persists.
  }
}

async function pullRepoState() {
  try {
    const res = await fetch(REPO_STATE_ENDPOINT, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || typeof data !== "object") return null;
    const merged = { ...defaultRepoState(), ...data };
    writeRepoState(merged);
    return merged;
  } catch {
    return null;
  }
}

function patchRepoState(patch) {
  const next = { ...readRepoState(), ...patch };
  pushRepoState(next);
  return next;
}

function useRepoSync(onRemoteState) {
  React.useEffect(() => {
    let alive = true;
    pullRepoState().then(remote => {
      if (alive && remote && onRemoteState) onRemoteState(remote);
    });
    return () => { alive = false; };
  }, [onRemoteState]);
}

// ─── Shared resource store (repo-backed) ───────────────────────────────
function useLocalResources() {
  const [userResources, setUserResources] = React.useState(() => readRepoState().userResources || []);
  useRepoSync(React.useCallback((remote) => {
    setUserResources(remote.userResources || []);
  }, []));

  const addResource = (res) => {
    const next = [...readRepoState().userResources, { ...res, id: `user-${Date.now()}`, userAdded: true }];
    patchRepoState({ userResources: next });
    setUserResources(next);
  };

  const removeResource = (id) => {
    const next = readRepoState().userResources.filter(r => r.id !== id);
    patchRepoState({ userResources: next });
    setUserResources(next);
  };

  const updateResource = (id, updates) => {
    const next = readRepoState().userResources.map(r => r.id === id ? { ...r, ...updates } : r);
    patchRepoState({ userResources: next });
    setUserResources(next);
  };

  // All resources = built-in + user-added
  const allResources = React.useMemo(() => [...RESOURCES, ...userResources], [userResources]);

  return { userResources, allResources, addResource, removeResource, updateResource };
}

// ─── Add Resource Form ──────────────────────────────────────────────────
function AddResourceForm({ weekNum, phase, onAdd, onClose }) {
  const w = WEEKS[weekNum - 1] || WEEKS[0];
  const ph = PHASES[phase - 1];
  const [form, setForm] = React.useState({
    title: "", type: "article", link: "", notes: "", tagInput: "",
    status: "in-progress",
  });

  const autoTags = {
    1: ["Houdini", "VEX", "Procedural"],
    2: ["Python", "Maya", "Pipeline"],
    3: ["Shaders", "UE5", "Optimization"],
  };

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleAdd = () => {
    if (!form.title.trim()) return;
    const userTags = form.tagInput.split(",").map(t => t.trim()).filter(Boolean);
    const tags = [...new Set([...autoTags[phase] || [], ...userTags])];
    onAdd({
      title: form.title.trim(),
      type: form.type,
      link: form.link.trim() || "#",
      notes: form.notes.trim(),
      tags,
      status: form.status,
      week: weekNum,
      phase,
      tool: ph ? ph.name.split(" ")[0] : "General",
      rating: 0,
      usedInWeek: weekNum,
    });
    onClose();
  };

  const inputBase = {
    width: "100%", background: "var(--bg)", border: "1px solid var(--border-mid)",
    borderRadius: 4, padding: "8px 12px", color: "var(--text-primary)",
    fontFamily: "var(--font-body)", fontSize: 13, outline: "none", boxSizing: "border-box",
  };

  return (
    <div style={{ background: "var(--surface-elevated)", border: "1px solid var(--border-mid)", borderRadius: 6, padding: 24, marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: ph?.color || "var(--text-dim)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Add Resource · Week {weekNum} · {ph?.tag}
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--text-dim)", cursor: "pointer", fontSize: 16, padding: 0 }}>×</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div style={{ gridColumn: "span 2" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" }}>Title *</div>
          <input value={form.title} onChange={e => set("title", e.target.value)}
            placeholder="Resource title..."
            style={inputBase} />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" }}>Type</div>
          <select value={form.type} onChange={e => set("type", e.target.value)}
            style={{ ...inputBase, cursor: "pointer", appearance: "none" }}>
            {["article", "video", "course", "documentation", "tutorial", "book", "reference"].map(t => (
              <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
            ))}
          </select>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" }}>Status</div>
          <select value={form.status} onChange={e => set("status", e.target.value)}
            style={{ ...inputBase, cursor: "pointer", appearance: "none" }}>
            {["not-started", "in-progress", "completed"].map(s => (
              <option key={s} value={s}>{s === "not-started" ? "Not Started" : s === "in-progress" ? "In Progress" : "Completed"}</option>
            ))}
          </select>
        </div>
        <div style={{ gridColumn: "span 2" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" }}>URL</div>
          <input value={form.link} onChange={e => set("link", e.target.value)}
            placeholder="https://..."
            style={inputBase} />
        </div>
        <div style={{ gridColumn: "span 2" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" }}>Notes</div>
          <textarea value={form.notes} onChange={e => set("notes", e.target.value)}
            placeholder="Why is this useful? What section is relevant?"
            style={{ ...inputBase, minHeight: 64, resize: "vertical" }} />
        </div>
        <div style={{ gridColumn: "span 2" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" }}>
            Extra Tags <span style={{ color: "var(--text-dim)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— comma separated</span>
          </div>
          <input value={form.tagInput} onChange={e => set("tagInput", e.target.value)}
            placeholder={`Auto-tagged: ${(autoTags[phase] || []).join(", ")}`}
            style={inputBase} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
        <Btn small variant="secondary" onClick={onClose}>Cancel</Btn>
        <Btn small variant="primary" onClick={handleAdd}>Add Resource</Btn>
      </div>
    </div>
  );
}

function readProgress() {
  const stored = readRepoState().weekProgress || {};
  const out = {};
  WEEKS.forEach(w => {
    out[w.week] = stored[w.week] !== undefined ? stored[w.week] : w.completion;
  });
  return out;
}

function computeStatus(completion) {
  if (completion >= 100) return "complete";
  if (completion > 0) return "in-progress";
  return "upcoming";
}

function useWeekProgress() {
  const [progress, setProgressState] = React.useState(readProgress);
  useRepoSync(React.useCallback((remote) => {
    const stored = remote.weekProgress || {};
    const out = {};
    WEEKS.forEach(w => {
      out[w.week] = stored[w.week] !== undefined ? stored[w.week] : w.completion;
    });
    setProgressState(out);
  }, []));

  const setCompletion = (weekNum, value) => {
    const clamped = Math.max(0, Math.min(100, Math.round(value)));
    const next = { ...readProgress(), [weekNum]: clamped };
    patchRepoState({ weekProgress: next });
    setProgressState(next);
  };

  const getCompletion = (weekNum) => progress[weekNum] !== undefined ? progress[weekNum] : 0;
  const getStatus = (weekNum) => computeStatus(getCompletion(weekNum));

  // Enrich WEEKS with live completion + status
  const liveWeeks = WEEKS.map(w => ({
    ...w,
    completion: getCompletion(w.week),
    status: getStatus(w.week),
  }));

  return { progress, getCompletion, getStatus, setCompletion, liveWeeks };
}

function useWeekDetailState(weekNum, defaults) {
  const readWeek = React.useCallback(() => {
    const all = readRepoState().weekDetails || {};
    return all[String(weekNum)] || {};
  }, [weekNum]);

  const [state, setState] = React.useState(() => {
    const saved = readWeek();
    return {
      notes: saved.notes ?? defaults.notes ?? "",
      tasks: saved.tasks ?? defaults.tasks,
      devlogs: saved.devlogs ?? defaults.devlogs,
    };
  });

  useRepoSync(React.useCallback((remote) => {
    const saved = (remote.weekDetails || {})[String(weekNum)];
    if (!saved) return;
    setState({
      notes: saved.notes ?? defaults.notes ?? "",
      tasks: saved.tasks ?? defaults.tasks,
      devlogs: saved.devlogs ?? defaults.devlogs,
    });
  }, [weekNum, defaults]));

  const patchWeek = (patch) => {
    setState(prev => {
      const merged = { ...prev, ...patch };
      const all = { ...(readRepoState().weekDetails || {}) };
      all[String(weekNum)] = merged;
      patchRepoState({ weekDetails: all });
      return merged;
    });
  };

  return [state, patchWeek];
}

Object.assign(window, { Placeholder, ProgressBar, Badge, PhasePill, SectionHeader, Card, Divider, StatTile, Btn, Tag, WeekRing, STATUS_LABELS, useLocalResources, AddResourceForm, useWeekProgress, useWeekDetailState, computeStatus, readRepoState, patchRepoState });
