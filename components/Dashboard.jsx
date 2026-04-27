// ─── Dashboard · Bold Design-School Edition ────────────────────────────

function useCurrentWeek() {
  const stored = parseInt(String((readRepoState().currentWeek || STATS.currentWeek)), 10);
  const [week, setWeekState] = React.useState(stored);
  React.useEffect(() => {
    const latest = parseInt(String((readRepoState().currentWeek || STATS.currentWeek)), 10);
    setWeekState(latest);
  }, []);
  const setWeek = (n) => {
    patchRepoState({ currentWeek: n });
    setWeekState(n);
  };
  return [week, setWeek];
}

function Dashboard({ navigate }) {
  const { liveWeeks } = useWeekProgress();
  const [currentWeekNum, setCurrentWeek] = useCurrentWeek();
  const currentWeek = liveWeeks[currentWeekNum - 1] || liveWeeks[0];
  const phase = PHASES[currentWeek.phase - 1];

  const phaseColors = [
    { bg: "#eef2f6", accent: "#7b9ab5", text: "#3a5a70", dim: "#8aaac0" },
    { bg: "#f6f0e2", accent: "#c4a464", text: "#7a5a18", dim: "#c8a870" },
    { bg: "#edf3ee", accent: "#8aaa90", text: "#3a6040", dim: "#8aaa90" },
  ];

  const devlogs = [
    { week: 1, date: "Week 1", title: "VEX attribute transfers finally clicked", phase: 1, excerpt: "Spent day 3 deep in point attribute merging. Once I understood the foreach compile block, everything opened up." },
    { week: 2, date: "Week 2", title: "HDA authoring: building the ruin wall asset", phase: 1, excerpt: "Promoted 12 parameters to the digital asset interface. The modularity is starting to feel genuinely powerful." },
    { week: 3, date: "Week 3", title: "Terrain masking + scatter logic in progress", phase: 1, excerpt: "Slope and height masks are working. The erosion pass is still rough — need to revisit curvature-based falloff." },
  ];

  const headStyle = {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    fontStyle: "normal",
    lineHeight: 1,
  };

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        padding: "72px 80px 64px",
        borderBottom: "1px solid var(--border)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Bg accent circle */}
        <div style={{
          position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,154,181,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 900, position: "relative" }}>
          {/* Eyebrow */}
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--text-dim)", marginBottom: 24, textTransform: "uppercase" }}>
            {phase.tag} · {phase.name} · 12-Week Technical Artist Curriculum
          </div>

          {/* Big headline — bold, tight, no italic */}
          <h1 style={{ ...headStyle, fontSize: 88, margin: "0 0 24px", lineHeight: 0.92 }}>
            Road To<br />
            <span style={{ color: phase.color }}>Mastery.</span>
          </h1>

          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 500, margin: "0 0 40px" }}>
            A structured 12-week curriculum for Technical Artists — Houdini, Python pipeline tools, and shader optimization. Documented week by week.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn onClick={() => navigate("timeline")}>View Curriculum</Btn>
            <Btn variant="secondary" onClick={() => navigate("week-detail", { weekNum: currentWeekNum })}>
              Week {currentWeekNum} Log →
            </Btn>
          </div>
        </div>

        {/* Progress bar at bottom */}
        <div style={{ marginTop: 56 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, alignItems: "baseline" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" }}>12-Week Progress</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              {Math.round((liveWeeks.filter(w => w.status === "complete").length / 12) * 100)}% complete
            </span>
          </div>
          <ProgressBar value={Math.round((liveWeeks.filter(w => w.status === "complete").length / 12) * 100)} color={phase.color} height={3} />
          <div style={{ display: "flex", marginTop: 8 }}>
            {PHASES.map((p, i) => (
              <div key={i} style={{ flex: 1, paddingRight: i < 2 ? 2 : 0 }}>
                <div style={{ height: 1, background: phaseColors[i].accent, opacity: 0.45 }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: phaseColors[i].dim, letterSpacing: "0.08em", marginTop: 5, display: "block" }}>{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEEK SELECTOR ────────────────────────────────────────────── */}
      <section style={{ padding: "40px 80px", borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 8, textTransform: "uppercase" }}>I'm currently on</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1 }}>
              Week {currentWeekNum}
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 13, color: "var(--text-dim)", marginLeft: 10, letterSpacing: 0 }}>
                {liveWeeks[currentWeekNum - 1]?.title}
              </span>
            </div>
          </div>

          {/* Week pills grid */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              {liveWeeks.map((w) => {
                const p = PHASES[w.phase - 1];
                const isCurrent = w.week === currentWeekNum;
                const isDone = w.status === "complete";
                return (
                  <button key={w.week} onClick={() => setCurrentWeek(w.week)} style={{
                    width: 44, height: 44, borderRadius: 4,
                    border: `2px solid ${isCurrent ? p.color : isDone ? p.color + "55" : "var(--border)"}`,
                    background: isCurrent ? p.color : isDone ? p.colorDim : "var(--surface-elevated)",
                    color: isCurrent ? "#fff" : isDone ? p.color : "var(--text-dim)",
                    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                    cursor: "pointer", transition: "all 0.15s",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1,
                  }}
                    title={w.title}
                    onMouseEnter={e => { if (!isCurrent) e.currentTarget.style.borderColor = p.color; }}
                    onMouseLeave={e => { if (!isCurrent) e.currentTarget.style.borderColor = isDone ? p.color + "55" : "var(--border)"; }}
                  >
                    <span style={{ fontSize: 10, lineHeight: 1 }}>W{w.week}</span>
                    {isCurrent && <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)", marginTop: 1 }} />}
                    {isDone && !isCurrent && <span style={{ fontSize: 8, lineHeight: 1, opacity: 0.7 }}>✓</span>}
                  </button>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
              {[["Done", "#5a8a60"], ["Current", "#7b9ab5"], ["Upcoming", "#c0b8a8"]].map(([label, color]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRENT FOCUS ────────────────────────────────────────────── */}
      <section style={{ padding: "72px 80px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 16, textTransform: "uppercase" }}>Current Focus</div>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <PhasePill phase={currentWeek.phase} />
              <Badge label={currentWeek.status} />
            </div>
            <h2 style={{ ...headStyle, fontSize: 40, margin: "0 0 12px" }}>
              {currentWeek.title}
            </h2>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 28px", maxWidth: 420 }}>
              {currentWeek.objectives.join(" · ")}
            </p>
            <div style={{ marginBottom: 32, maxWidth: 340 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Week Completion</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>{currentWeek.completion}%</span>
              </div>
              <ProgressBar value={currentWeek.completion} color={phase.color} height={3} />
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              {[["Tasks", currentWeek.tasks.length], ["Objectives", currentWeek.objectives.length]].map(([label, val]) => (
                <div key={label}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1 }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <Btn onClick={() => navigate("week-detail", { weekNum: currentWeekNum })}>Open Week Log →</Btn>
            </div>
          </div>

          {/* Screenshots */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Placeholder label="Recent screenshot" width="100%" height={200} color="#ddd8cc" style={{ width: "100%", gridColumn: "span 2", borderRadius: 4 }} />
            <Placeholder label="In progress" width="100%" height={130} color="#ddd8cc" style={{ width: "100%", borderRadius: 4 }} />
            <Placeholder label="Node graph" width="100%" height={130} color="#ddd8cc" style={{ width: "100%", borderRadius: 4 }} />
          </div>
        </div>
      </section>

      {/* ── CURRICULUM CHAPTERS ──────────────────────────────────────── */}
      <section style={{ padding: "72px 80px", borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" }}>Curriculum</div>
            <h2 style={{ ...headStyle, fontSize: 48 }}>Three Chapters.</h2>
          </div>
          <Btn variant="ghost" onClick={() => navigate("timeline")}>All 12 weeks →</Btn>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {PHASES.map((p, i) => {
            const c = phaseColors[i];
            const done = liveWeeks.filter(w => w.phase === p.id && w.status === "complete").length;
            return (
              <div key={p.id} onClick={() => navigate("timeline")} style={{
                background: c.bg, padding: "40px 36px 36px",
                borderRadius: i === 0 ? "6px 0 0 6px" : i === 2 ? "0 6px 6px 0" : 0,
                cursor: "pointer", position: "relative", overflow: "hidden",
                transition: "transform 0.2s", border: "1px solid rgba(40,28,16,0.05)",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: 110, fontWeight: 800,
                  color: c.accent, opacity: 0.1, lineHeight: 1,
                  position: "absolute", top: 8, right: 16, userSelect: "none", letterSpacing: "-0.04em",
                }}>0{p.id}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: c.dim, marginBottom: 16, letterSpacing: "0.18em", textTransform: "uppercase" }}>{p.tag}</div>
                <h3 style={{ ...headStyle, fontSize: 22, color: c.text, margin: "0 0 10px", maxWidth: 200 }}>{p.name}</h3>
                <p style={{ fontSize: 12, color: c.text, opacity: 0.65, lineHeight: 1.6, margin: "0 0 28px" }}>Goal: {p.goal}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <WeekRing completion={(done / 4) * 100} color={c.accent} size={40} />
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: c.dim, letterSpacing: "0.1em", textTransform: "uppercase" }}>Progress</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: c.text, letterSpacing: "-0.02em" }}>{done}/4 weeks</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── RECENT DEVLOG ────────────────────────────────────────────── */}
      <section style={{ padding: "72px 80px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" }}>Documentation</div>
            <h2 style={{ ...headStyle, fontSize: 48 }}>Recent Devlogs.</h2>
          </div>
          <Btn variant="secondary" small onClick={() => navigate("week-detail", { weekNum: currentWeekNum })}>All entries →</Btn>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {devlogs.map((d, i) => {
            const c = phaseColors[d.phase - 1];
            return (
              <div key={i} onClick={() => navigate("week-detail", { weekNum: d.week })} style={{
                cursor: "pointer", paddingTop: 24, borderTop: `3px solid ${c.accent}`,
                transition: "opacity 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", color: c.dim, marginBottom: 12, textTransform: "uppercase" }}>{d.date} · {PHASES[d.phase - 1].tag}</div>
                <h3 style={{ ...headStyle, fontSize: 18, margin: "0 0 10px", lineHeight: 1.25 }}>{d.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.65, margin: 0 }}>{d.excerpt}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ─────────────────────────────────────────── */}
      <section style={{ padding: "72px 80px", borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" }}>Portfolio</div>
            <h2 style={{ ...headStyle, fontSize: 48 }}>Final Projects.</h2>
          </div>
          <Btn variant="secondary" small onClick={() => navigate("portfolio")}>View portfolio →</Btn>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div onClick={() => navigate("portfolio")} style={{
            gridRow: "span 2", cursor: "pointer", overflow: "hidden", borderRadius: 6,
            border: "1px solid var(--border)", background: "var(--surface-elevated)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(40,28,16,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <Placeholder label="Procedural RPG Environment Generator — Final renders" width="100%" height={260} color="#c8d8e8" style={{ width: "100%", borderRadius: "6px 6px 0 0" }} />
            <div style={{ padding: "24px 24px 28px" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}><PhasePill phase={1} /><Badge label="prototype" /></div>
              <h3 style={{ ...headStyle, fontSize: 20, margin: "0 0 8px", lineHeight: 1.2 }}>Procedural RPG Environment Generator</h3>
              <p style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.6 }}>Houdini HDA toolkit for generating ruin environments procedurally with terrain-aware scatter.</p>
            </div>
          </div>
          {PORTFOLIO_PROJECTS.slice(1).map((proj) => (
            <div key={proj.id} onClick={() => navigate("portfolio")} style={{
              cursor: "pointer", overflow: "hidden", borderRadius: 6,
              border: "1px solid var(--border)", background: "var(--surface-elevated)",
              display: "flex", transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(40,28,16,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <Placeholder label="" width={130} height="100%" color={proj.phase === 2 ? "#ede8d0" : "#d8ede0"} style={{ width: 130, flexShrink: 0, borderRadius: "6px 0 0 6px" }} />
              <div style={{ padding: "18px 20px" }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 10 }}><PhasePill phase={proj.phase} /></div>
                <h3 style={{ ...headStyle, fontSize: 15, margin: "0 0 6px", lineHeight: 1.25 }}>{proj.title}</h3>
                <p style={{ fontSize: 11, color: "var(--text-dim)", lineHeight: 1.5 }}>{proj.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESOURCES ────────────────────────────────────────────────── */}
      <section style={{ padding: "72px 80px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" }}>Library</div>
            <h2 style={{ ...headStyle, fontSize: 40 }}>Resources.</h2>
          </div>
          <Btn variant="ghost" onClick={() => navigate("resources")}>Browse library →</Btn>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {RESOURCES.slice(0, 4).map(r => {
            const typeColor = { course: "#7b9ab5", documentation: "#8aaa90", article: "#c4a464", video: "#c08070", tutorial: "#a090c0" }[r.type] || "var(--text-dim)";
            return (
              <div key={r.id} style={{ padding: 20, borderRadius: 6, background: "var(--surface-elevated)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, padding: "2px 6px", borderRadius: 2, background: `${typeColor}18`, color: typeColor, letterSpacing: "0.1em", textTransform: "uppercase" }}>{r.type}</span>
                  <PhasePill phase={r.phase} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: 6 }}>{r.title}</div>
                {r.notes && <div style={{ fontSize: 11, color: "var(--text-dim)", lineHeight: 1.5 }}>{r.notes}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer style={{ padding: "28px 80px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: "var(--text-primary)", marginBottom: 3, letterSpacing: "-0.02em" }}>ROAD TO MASTERY</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.14em" }}>12-WEEK TECHNICAL ARTIST CURRICULUM · 2026</div>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Curriculum", "Portfolio", "Resources", "Case Study"].map(l => (
            <span key={l} style={{ fontSize: 12, color: "var(--text-dim)", cursor: "pointer", fontFamily: "var(--font-body)" }}>{l}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}

window.Dashboard = Dashboard;
