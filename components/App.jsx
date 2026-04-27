// ─── Top Nav + App Shell ───────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "dashboard",   label: "Home" },
  { id: "timeline",    label: "Curriculum" },
  { id: "week-detail", label: "Week Log" },
  { id: "resources",   label: "Resources" },
  { id: "portfolio",   label: "Portfolio" },
  { id: "case-study",  label: "Case Study" },
];

function TopNav({ current, navigate }) {
  const [hov, setHov] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const el = document.querySelector("main");
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 20);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 64px", height: 58,
      background: scrolled ? "rgba(248,248,246,0.96)" : "var(--bg)",
      borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      backdropFilter: "blur(12px)",
      transition: "background 0.25s, border-color 0.25s",
    }}>
      <button onClick={() => navigate("dashboard")} style={{
        background: "none", border: "none", cursor: "pointer", padding: 0,
        display: "flex", alignItems: "baseline", gap: 10,
      }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>ROAD TO MASTERY</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" }}>W{STATS.currentWeek}/12</span>
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        {NAV_ITEMS.map(item => {
          const active = current === item.id;
          return (
            <button key={item.id}
              onClick={() => navigate(item.id)}
              onMouseEnter={() => setHov(item.id)}
              onMouseLeave={() => setHov(null)}
              style={{
                padding: "7px 13px", border: "none",
                background: active ? "rgba(20,18,14,0.07)" : hov === item.id ? "rgba(20,18,14,0.04)" : "transparent",
                borderRadius: 4,
                color: active ? "var(--text-primary)" : "var(--text-secondary)",
                cursor: "pointer", transition: "all 0.15s",
                fontFamily: "var(--font-body)", fontSize: 13, fontWeight: active ? 600 : 400,
              }}>
              {item.label}
            </button>
          );
        })}
      </div>

      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "4px 10px", borderRadius: 4,
        background: "rgba(90,135,168,0.08)", border: "1px solid rgba(90,135,168,0.18)",
      }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent-blue)" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--accent-blue)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          PHASE 01 · WEEK {STATS.currentWeek}
        </span>
      </div>
    </nav>
  );
}

const ACCENT_SCHEMES = {
  "White":  { blue: "#5a87a8", amber: "#b8923a", teal: "#4e8f68", bg: "#f8f8f6", surface: "#f1f1ee" },
  "Warm":   { blue: "#7b9ab5", amber: "#c4a464", teal: "#8aaa90", bg: "#f6f1e9", surface: "#faf8f4" },
  "Cool":   { blue: "#4a7aaa", amber: "#9a8030", teal: "#3a8060", bg: "#f4f6f8", surface: "#eef0f2" },
  "Ink":    { blue: "#4060a0", amber: "#a07020", teal: "#306050", bg: "#f5f5f3", surface: "#ededea" },
};

const FONT_MAP = {
  "Epilogue":           "'Epilogue', sans-serif",
  "Syne":               "'Syne', sans-serif",
  "Space Grotesk":      "'Space Grotesk', sans-serif",
  "Cormorant Garamond": "'Cormorant Garamond', Georgia, serif",
};

function App() {
  const [page, setPage] = React.useState("dashboard");
  const [pageParams, setPageParams] = React.useState({});
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const scheme = ACCENT_SCHEMES[t.accentScheme] || ACCENT_SCHEMES["White"];
    document.documentElement.style.setProperty("--accent-blue",  scheme.blue);
    document.documentElement.style.setProperty("--accent-amber", scheme.amber);
    document.documentElement.style.setProperty("--accent-teal",  scheme.teal);
    document.documentElement.style.setProperty("--bg",           scheme.bg);
    document.documentElement.style.setProperty("--surface",      scheme.surface);
    document.documentElement.style.setProperty("--font-body",    `'${t.fontBody}', sans-serif`);
    const displayFont = FONT_MAP[t.fontDisplay] || "'Epilogue', sans-serif";
    document.documentElement.style.setProperty("--font-display", displayFont);
    document.documentElement.style.setProperty("--font-head",    displayFont);
  }, [t.accentScheme, t.fontBody, t.fontDisplay]);

  const navigate = (p, params = {}) => {
    setPage(p);
    setPageParams(params);
    const main = document.querySelector("main");
    if (main) main.scrollTop = 0;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "var(--bg)" }}>
      <TopNav current={page} navigate={navigate} />
      <main style={{ flex: 1, overflowY: "auto" }}>
        {page === "dashboard"   && <Dashboard navigate={navigate} />}
        {page === "timeline"    && <Timeline navigate={navigate} />}
        {page === "week-detail" && <WeekDetail navigate={navigate} weekNum={pageParams.weekNum || STATS.currentWeek} />}
        {page === "resources"   && <Resources navigate={navigate} />}
        {page === "portfolio"   && <Portfolio navigate={navigate} />}
        {page === "case-study"  && <CaseStudy navigate={navigate} />}
      </main>

      <TweaksPanel>
        <TweakSection label="Color Palette" />
        <TweakRadio label="Scheme" value={t.accentScheme} options={["White", "Warm", "Cool", "Ink"]} onChange={v => setTweak("accentScheme", v)} />
        <TweakSection label="Typography" />
        <TweakSelect label="Display Font" value={t.fontDisplay} options={["Epilogue", "Syne", "Space Grotesk", "Cormorant Garamond"]} onChange={v => setTweak("fontDisplay", v)} />
        <TweakSelect label="Body Font" value={t.fontBody} options={["Manrope", "Inter", "DM Sans"]} onChange={v => setTweak("fontBody", v)} />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
