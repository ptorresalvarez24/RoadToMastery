// ─── Case Study · Editorial Edition ────────────────────────────────────
function CaseStudy({ navigate }) {
  const [activeSection, setActiveSection] = React.useState(0);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "pipeline", label: "Pipeline" },
    { id: "houdini",  label: "Houdini" },
    { id: "python",   label: "Python + Maya" },
    { id: "shaders",  label: "Shaders" },
    { id: "breakdown", label: "Breakdown" },
  ];

  const pipelineSteps = [
    { phase: 1, color: "#7b9ab5", bg: "#eef2f6", icon: "H",  label: "Houdini",        desc: "Procedural geometry & scatter" },
    { phase: 2, color: "#c4a464", bg: "#f6f0e2", icon: "Py", label: "Python + Maya",   desc: "Validate & export assets" },
    { phase: 3, color: "#8aaa90", bg: "#edf3ee", icon: "SH", label: "Shaders",         desc: "Material system & optimization" },
  ];

  const inputStyle = {
    width: "100%", background: "var(--surface)", border: "1px solid var(--border)",
    borderRadius: 4, padding: 14, color: "var(--text-primary)", fontFamily: "var(--font-body)",
    fontSize: 13, lineHeight: 1.6, resize: "vertical", outline: "none", boxSizing: "border-box",
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 48px 96px" }}>
      <button onClick={() => navigate("portfolio")} style={{
        background: "none", border: "none", color: "var(--text-dim)", cursor: "pointer",
        fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", marginBottom: 40, padding: 0,
      }}>← BACK TO PORTFOLIO</button>

      {/* Hero */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 14, textTransform: "uppercase" }}>Integrated Case Study</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 72, fontWeight: 600, fontStyle: "italic", margin: "0 0 6px", letterSpacing: "-0.03em", lineHeight: 0.95 }}>Stylized RPG</h1>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 72, fontWeight: 400, margin: "0 0 24px", letterSpacing: "-0.03em", lineHeight: 0.95, color: "#8aaa90" }}>Ruins Pipeline</h1>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 600, margin: "0 0 24px" }}>
          A senior-level Technical Artist case study combining all three learning phases: Houdini procedural generation, Python+Maya pipeline tooling, and an optimized stylized shader system — unified into a production-ready environment.
        </p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["Houdini", "Python", "Maya", "Shaders", "UE5", "Procedural", "Pipeline", "Optimization"].map(t => <Tag key={t} label={t} />)}
        </div>
      </div>

      {/* Hero image */}
      <Placeholder label="Stylized RPG Ruins — Final environment render" width="100%" height={380} color="#dce8dc" style={{ width: "100%", borderRadius: 6, marginBottom: 10 }} />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", marginBottom: 48, paddingLeft: 4, letterSpacing: "0.08em" }}>
        FIG 01 — Final environment render · Stylized RPG Ruins Pipeline
      </div>

      {/* Section tabs */}
      <div style={{ display: "flex", gap: 2, borderBottom: "1px solid var(--border)", marginBottom: 56, flexWrap: "wrap" }}>
        {sections.map((s, i) => (
          <button key={s.id} onClick={() => setActiveSection(i)} style={{
            padding: "10px 20px", border: "none", background: "none", cursor: "pointer",
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
            color: activeSection === i ? "#8aaa90" : "var(--text-dim)",
            borderBottom: `2px solid ${activeSection === i ? "#8aaa90" : "transparent"}`,
            marginBottom: -1, transition: "all 0.15s",
          }}>{s.label}</button>
        ))}
      </div>

      {/* ── Overview ── */}
      {activeSection === 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {pipelineSteps.map((s, i) => (
              <div key={i} style={{ padding: "32px 28px", borderRadius: 6, background: s.bg, borderTop: `3px solid ${s.color}` }}>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 800, fontSize: 14, color: s.color, marginBottom: 16, width: 40, height: 40, borderRadius: 8, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: s.color, letterSpacing: "0.14em", marginBottom: 8, textTransform: "uppercase" }}>Phase {s.phase}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontStyle: "italic", fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" }}>Pipeline Flow</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {pipelineSteps.map((s, i) => (
                <React.Fragment key={i}>
                  <div style={{ flex: 1, padding: "18px 22px", background: "var(--surface-elevated)", border: `1px solid ${s.color}33`, borderRadius: 4, textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: s.color, marginBottom: 4, letterSpacing: "0.08em" }}>{s.label}</div>
                    <div style={{ fontSize: 12, color: "var(--text-dim)" }}>{s.desc}</div>
                  </div>
                  {i < 2 && <div style={{ padding: "0 8px", color: "var(--text-dim)", fontSize: 18 }}>→</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Pipeline ── */}
      {activeSection === 1 && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.14em", marginBottom: 14, textTransform: "uppercase" }}>Pipeline Diagram</div>
            <Placeholder label="Pipeline flow diagram\nHoudini → Maya → Engine" width="100%" height={320} color="#dce8dc" style={{ width: "100%", borderRadius: 6 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { step: "01", title: "Procedural Generation",  desc: "Houdini HDAs generate ruin geometry with terrain-aware scatter and full parameter control.",  color: "#7b9ab5" },
              { step: "02", title: "Validation & Export",    desc: "Python Maya tool runs 10+ checks: naming, UVs, pivots, transforms — then one-click FBX export.", color: "#c4a464" },
              { step: "03", title: "Material Assignment",    desc: "Optimized master material with ORM-packed textures, atlas support, and instanced materials.",       color: "#8aaa90" },
              { step: "04", title: "Engine Integration",     desc: "LODs, collision, and material instances in UE5. Final profiling confirms optimization targets hit.", color: "#c08070" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "20px 24px", borderLeft: `3px solid ${s.color}`, background: "var(--surface-elevated)", borderRadius: "0 6px 6px 0", border: "1px solid var(--border)", borderLeft: `3px solid ${s.color}` }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontStyle: "italic", fontWeight: 600, color: s.color, minWidth: 32, lineHeight: 1 }}>{s.step}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 5 }}>{s.title}</div>
                    <div style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Houdini ── */}
      {activeSection === 2 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {["Final ruin geometry", "SOP scatter network", "HDA parameter UI", "Terrain masking"].map((l, i) => (
              <Placeholder key={i} label={l} width="100%" height={200} color="#d8e4ee" style={{ width: "100%", borderRadius: 6 }} />
            ))}
          </div>
          <Card style={{ padding: 28 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#7b9ab5", letterSpacing: "0.14em", marginBottom: 20, textTransform: "uppercase" }}>Technical Breakdown</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[["Asset HDAs", "3 (wall, arch, floor)"], ["Scatter Rules", "Slope + height masking"], ["VEX Attributes", "12 per-point attrs"], ["LOD Levels", "3 per asset"], ["Export Format", "FBX batch via ROP"], ["Exposed Params", "12 per HDA"]].map(([label, value]) => (
                <div key={label}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", marginBottom: 5, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontStyle: "italic", color: "var(--text-primary)" }}>{value}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* ── Python + Maya ── */}
      {activeSection === 3 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {["Validator UI — PySide2", "Error report output", "Export settings panel", "Pre-export checklist"].map((l, i) => (
              <Placeholder key={i} label={l} width="100%" height={200} color="#ede8d0" style={{ width: "100%", borderRadius: 6 }} />
            ))}
          </div>
          <Card style={{ padding: 28 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#c4a464", letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" }}>Validation Rules</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {["Naming convention check (regex)", "UV island overlap detection", "Freeze transform validation", "Pivot at world origin check", "Polygon count within budget", "No history on mesh", "UV tile within 0–1 space", "Material assignment check", "LOD suffix naming", "Export path template validation"].map((rule, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ color: "#8aaa90", fontFamily: "var(--font-mono)", fontSize: 12 }}>✓</span>
                  <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{rule}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* ── Shaders ── */}
      {activeSection === 4 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {["Final stylized render", "Shader graph", "Before optimization", "After optimization", "ORM texture pack", "Atlas layout"].map((l, i) => (
              <Placeholder key={i} label={l} width="100%" height={170} color="#d8ede0" style={{ width: "100%", borderRadius: 6 }} />
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Before Optimization", color: "#c06060", bg: "rgba(192,96,96,0.06)", data: [["Draw Calls", "847"], ["Memory", "1.2 GB VRAM"], ["Material Instances", "120+"]] },
              { label: "After Optimization",  color: "#5a8a60", bg: "rgba(90,138,96,0.06)", data: [["Draw Calls", "212"], ["Memory", "340 MB VRAM"], ["Material Instances", "8"]] },
            ].map(({ label, color, bg, data }) => (
              <Card key={label} style={{ padding: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color, letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" }}>{label}</div>
                {data.map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{k}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontStyle: "italic", color }}>{v}</span>
                  </div>
                ))}
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* ── Breakdown ── */}
      {activeSection === 5 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            { q: "What problem does this solve?",         color: "#7b9ab5" },
            { q: "What was the core technical challenge?", color: "#c4a464" },
            { q: "What makes this production-ready?",     color: "#8aaa90" },
            { q: "What would I improve next?",            color: "#c08070" },
          ].map(({ q, color }, i) => (
            <Card key={i} style={{ padding: 28 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontStyle: "italic", color, marginBottom: 4 }}>0{i + 1}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontStyle: "italic", fontWeight: 600, color: "var(--text-primary)", marginBottom: 14 }}>{q}</div>
              <textarea placeholder={`${q}...`} style={{ ...inputStyle, minHeight: 80 }} />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
window.CaseStudy = CaseStudy;
