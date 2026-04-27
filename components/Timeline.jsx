// ─── Timeline · Editorial Edition ──────────────────────────────────────
function Timeline({ navigate }) {
  const [filter, setFilter] = React.useState(0);
  const filtered = filter === 0 ? WEEKS : WEEKS.filter(w => w.phase === filter);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 48px 96px" }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" }}>Curriculum</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 60, fontWeight: 600, fontStyle: "italic", margin: "0 0 8px", letterSpacing: "-0.02em", lineHeight: 1 }}>12-Week Timeline</h1>
        <p style={{ color: "var(--text-dim)", fontSize: 14, marginBottom: 40 }}>Three phases · Three portfolio-ready deliverables</p>
      </div>

      {/* Phase filters */}
      <div style={{ display: "flex", gap: 6, marginBottom: 56, borderBottom: "1px solid var(--border)", paddingBottom: 24, flexWrap: "wrap" }}>
        {[{ id: 0, tag: "ALL PHASES", color: "var(--text-dim)" }, ...PHASES].map(p => {
          const active = filter === p.id;
          return (
            <button key={p.id} onClick={() => setFilter(p.id)} style={{
              padding: "7px 16px", borderRadius: 4,
              border: `1px solid ${active ? (p.color || "var(--text-primary)") : "var(--border)"}`,
              background: active ? (p.colorDim || "rgba(40,28,16,0.06)") : "transparent",
              color: active ? (p.color || "var(--text-primary)") : "var(--text-dim)",
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", cursor: "pointer", transition: "all 0.15s",
            }}>{p.tag || "ALL PHASES"}</button>
          );
        })}
      </div>

      {PHASES.filter(p => filter === 0 || p.id === filter).map(phase => {
        const phaseWeeks = filtered.filter(w => w.phase === phase.id);
        const done = WEEKS.filter(w => w.phase === phase.id && w.status === "complete").length;
        const pct = Math.round((done / 4) * 100);

        return (
          <div key={phase.id} style={{ marginBottom: 64 }}>
            {/* Phase header */}
            <div style={{
              padding: "28px 32px", borderRadius: "6px 6px 0 0",
              background: phase.colorDim,
              border: `1px solid ${phase.color}33`, borderBottom: "none",
              display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20,
            }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: phase.color, letterSpacing: "0.18em", marginBottom: 8, textTransform: "uppercase" }}>{phase.tag}</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, fontStyle: "italic", color: "var(--text-primary)", margin: 0 }}>{phase.name}</h2>
                <p style={{ color: "var(--text-dim)", fontSize: 13, margin: "6px 0 0", fontFamily: "var(--font-body)" }}>Goal: {phase.goal}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontStyle: "italic", fontWeight: 600, color: phase.color }}>{pct}%</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em" }}>{done}/4 weeks</div>
                </div>
                <WeekRing completion={pct} color={phase.color} size={52} />
              </div>
            </div>

            {/* Week rows */}
            <div style={{ border: `1px solid ${phase.color}22`, borderTop: "none", borderRadius: "0 0 6px 6px", overflow: "hidden" }}>
              {phaseWeeks.map((w, i) => {
                const isLast = i === phaseWeeks.length - 1;
                const isCurrent = w.week === STATS.currentWeek;
                return (
                  <div key={w.week}
                    onClick={() => navigate("week-detail", { weekNum: w.week })}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(40,28,16,0.025)"}
                    onMouseLeave={e => e.currentTarget.style.background = isCurrent ? "rgba(40,28,16,0.02)" : "var(--surface-elevated)"}
                    style={{
                      display: "grid", gridTemplateColumns: "56px 1fr auto",
                      borderBottom: isLast ? "none" : "1px solid var(--border)",
                      background: isCurrent ? "rgba(40,28,16,0.02)" : "var(--surface-elevated)",
                      cursor: "pointer", transition: "background 0.15s",
                    }}>
                    {/* Week number */}
                    <div style={{
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      padding: "20px 0", borderRight: "1px solid var(--border)",
                      background: isCurrent ? phase.colorDim : "transparent",
                    }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--text-dim)", letterSpacing: "0.08em" }}>W</span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, fontStyle: "italic", color: phase.color, lineHeight: 1 }}>{w.week}</span>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "20px 28px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{w.title}</span>
                        {isCurrent && <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, padding: "2px 6px", background: phase.colorDim, color: phase.color, borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase" }}>Current</span>}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.5, marginBottom: w.completion > 0 ? 10 : 0 }}>
                        {w.objectives.slice(0, 2).join("  ·  ")}
                      </div>
                      {w.completion > 0 && <ProgressBar value={w.completion} color={phase.color} height={2} style={{ maxWidth: 200 }} />}
                      {w.notes && (
                        <div style={{ marginTop: 10, fontSize: 12, color: "var(--text-dim)", fontStyle: "italic", borderLeft: `2px solid ${phase.color}44`, paddingLeft: 10, fontFamily: "var(--font-display)" }}>
                          {w.notes}
                        </div>
                      )}
                    </div>

                    {/* Right */}
                    <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", gap: 10, minWidth: 180 }}>
                      <Badge label={w.status} />
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>Output</div>
                        <div style={{ fontSize: 11, color: "var(--text-dim)", maxWidth: 160, lineHeight: 1.4, textAlign: "right" }}>{w.output}</div>
                      </div>
                      <Btn small variant="ghost">Open log →</Btn>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
window.Timeline = Timeline;
