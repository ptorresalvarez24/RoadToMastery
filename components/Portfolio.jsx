// ─── Portfolio · ArtStation / Photographer style ────────────────────────

// Phase palette
const phaseP = [
  { color: "#7b9ab5", dim: "rgba(123,154,181,0.15)", bg: "#eef2f6", text: "#3a5a70" },
  { color: "#c4a464", dim: "rgba(196,164,100,0.15)", bg: "#f6f0e2", text: "#7a5a18" },
  { color: "#8aaa90", dim: "rgba(138,170,144,0.15)", bg: "#edf3ee", text: "#3a6040" },
];

// ── Thumbnail card (grid item) ────────────────────────────────────────
function PieceThumb({ piece, onClick, large = false }) {
  const [hov, setHov] = React.useState(false);
  const pc = phaseP[piece.phase - 1];
  const ph = PHASES[piece.phase - 1];
  const isUpcoming = piece.status === "upcoming";

  return (
    <div
      onClick={() => !isUpcoming && onClick(piece)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", overflow: "hidden", borderRadius: 4,
        cursor: isUpcoming ? "default" : "pointer",
        boxShadow: hov && !isUpcoming ? "0 12px 40px rgba(40,28,16,0.18)" : "0 1px 6px rgba(40,28,16,0.08)",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hov && !isUpcoming ? "translateY(-4px)" : "none",
        background: piece.coverBg,
        aspectRatio: large ? "16/10" : "4/3",
      }}>

      {/* Thumbnail fill */}
      <div style={{
        position: "absolute", inset: 0,
        background: piece.coverBg,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {isUpcoming ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(40,28,16,0.3)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>Upcoming</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontStyle: "italic", color: "rgba(40,28,16,0.35)" }}>Week {piece.week}</div>
          </div>
        ) : (
          /* Subtle hatch pattern over the bg color to suggest an image */
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 12px)`,
          }} />
        )}
      </div>

      {/* Hover overlay */}
      {!isUpcoming && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(28,23,18,0.88) 0%, rgba(28,23,18,0.4) 50%, transparent 100%)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.22s",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: large ? "28px 28px" : "18px 16px",
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: pc.color, letterSpacing: "0.14em", marginBottom: 5, textTransform: "uppercase" }}>
            {ph.tag} · Week {piece.week}
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: large ? 22 : 16, fontStyle: "italic", fontWeight: 600, color: "#f6f1e9", marginBottom: 6, lineHeight: 1.2 }}>
            {piece.title}
          </div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {piece.tags.slice(0, 3).map(t => (
              <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 6px", borderRadius: 2, background: "rgba(246,241,233,0.15)", color: "rgba(246,241,233,0.8)", letterSpacing: "0.06em" }}>{t}</span>
            ))}
          </div>
        </div>
      )}

      {/* Status dot (top-right) */}
      {!isUpcoming && (
        <div style={{
          position: "absolute", top: 10, right: 10,
          width: 8, height: 8, borderRadius: "50%",
          background: piece.status === "complete" ? "#8aaa90" : "#c4a464",
          boxShadow: `0 0 0 2px rgba(246,241,233,0.5)`,
          opacity: hov ? 0 : 1, transition: "opacity 0.2s",
        }} />
      )}

      {/* Type badge (top-left, always visible) */}
      <div style={{
        position: "absolute", top: 10, left: 10,
        fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase",
        padding: "3px 7px", borderRadius: 2,
        background: "rgba(246,241,233,0.85)", color: "rgba(40,28,16,0.6)",
        opacity: isUpcoming ? 0.4 : 0.9,
      }}>{piece.type}</div>
    </div>
  );
}

// ── Full piece detail view ────────────────────────────────────────────
function PieceDetail({ piece, onBack, isTouchstone = false }) {
  const pc = phaseP[piece.phase - 1];
  const ph = PHASES[piece.phase - 1];
  const imgCount = piece.images || (isTouchstone ? 6 : 3);
  const [activeImg, setActiveImg] = React.useState(0);

  const galleryBgs = [piece.coverBg, ...Array(imgCount - 1).fill(null).map((_, i) => {
    // Slightly varied shades
    const shades = ["#c8d8e4", "#b8ccdc", "#d0dce8", "#c4d4e4", "#bcc8d8", "#b0c4d4"];
    return shades[i % shades.length];
  })];

  return (
    <div>
      {/* Back */}
      <div style={{ padding: "32px 64px 0" }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: "var(--text-dim)", cursor: "pointer",
          fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", padding: 0,
        }}>← PORTFOLIO</button>
      </div>

      {/* Hero image */}
      <div style={{ margin: "24px 0 0", position: "relative", height: 520, overflow: "hidden", background: galleryBgs[activeImg] }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 14px)`,
        }} />
        <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
          {galleryBgs.map((_, i) => (
            <button key={i} onClick={() => setActiveImg(i)} style={{
              width: i === activeImg ? 24 : 8, height: 8, borderRadius: 4, border: "none",
              background: i === activeImg ? "#f6f1e9" : "rgba(246,241,233,0.4)",
              cursor: "pointer", transition: "all 0.2s", padding: 0,
            }} />
          ))}
        </div>
        {/* Prev / next */}
        {activeImg > 0 && (
          <button onClick={() => setActiveImg(i => i - 1)} style={{ position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)", background: "rgba(246,241,233,0.85)", border: "none", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 18, color: "#1c1712" }}>‹</button>
        )}
        {activeImg < galleryBgs.length - 1 && (
          <button onClick={() => setActiveImg(i => i + 1)} style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", background: "rgba(246,241,233,0.85)", border: "none", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 18, color: "#1c1712" }}>›</button>
        )}
        {/* Caption */}
        <div style={{ position: "absolute", bottom: 52, left: 0, right: 0, textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(246,241,233,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {activeImg + 1} / {galleryBgs.length}
          </span>
        </div>
      </div>

      {/* Thumbnail strip */}
      {galleryBgs.length > 1 && (
        <div style={{ display: "flex", gap: 8, padding: "12px 64px", overflowX: "auto" }}>
          {galleryBgs.map((bg, i) => (
            <div key={i} onClick={() => setActiveImg(i)} style={{
              width: 80, height: 52, flexShrink: 0, borderRadius: 3, background: bg, cursor: "pointer",
              outline: i === activeImg ? `2px solid ${pc.color}` : "2px solid transparent",
              transition: "outline 0.15s", opacity: i === activeImg ? 1 : 0.6,
            }} />
          ))}
        </div>
      )}

      {/* Meta + description */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 64, padding: "48px 64px 80px" }}>
        <div>
          <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, padding: "3px 9px", borderRadius: 2, background: pc.dim, color: pc.color, letterSpacing: "0.12em", textTransform: "uppercase" }}>{ph.tag}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em" }}>WEEK {piece.week}</span>
            <Badge label={piece.status} />
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 52, fontWeight: 600, fontStyle: "italic", margin: "0 0 20px", letterSpacing: "-0.02em", lineHeight: 1 }}>{piece.title}</h1>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8, margin: "0 0 32px", maxWidth: 560 }}>{piece.desc || (isTouchstone && piece.description)}</p>

          {/* Tags */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {piece.tags.map(t => <Tag key={t} label={t} />)}
          </div>

          {isTouchstone && (
            <div style={{ marginTop: 40 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", color: "var(--text-dim)", marginBottom: 20, textTransform: "uppercase" }}>Portfolio Notes</div>
              {["What problem does this solve?", "What was the technical challenge?", "What makes it production-ready?"].map((q, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontStyle: "italic", color: "var(--text-secondary)", marginBottom: 6 }}>{q}</div>
                  <textarea placeholder={`${q}...`} style={{
                    width: "100%", minHeight: 64, background: "var(--surface)", border: "1px solid var(--border)",
                    borderRadius: 4, padding: 10, color: "var(--text-primary)", fontFamily: "var(--font-body)",
                    fontSize: 13, lineHeight: 1.6, resize: "vertical", outline: "none", boxSizing: "border-box",
                  }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: meta sidebar */}
        <div>
          <div style={{ padding: 24, background: "var(--surface-elevated)", border: "1px solid var(--border)", borderRadius: 6 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", color: "var(--text-dim)", marginBottom: 20, textTransform: "uppercase" }}>Details</div>
            {[
              ["Type", piece.type],
              ["Phase", ph.name],
              ["Week", `Week ${piece.week} of 12`],
              ["Status", piece.status],
              ["Images", `${galleryBgs.length} screenshots`],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 12, marginBottom: 12, borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.08em" }}>{label}</span>
                <span style={{ fontSize: 13, color: "var(--text-primary)", fontFamily: "var(--font-body)", fontWeight: 500 }}>{value}</span>
              </div>
            ))}
          </div>

          {/* Upload prompt */}
          <div style={{ marginTop: 16, padding: "20px 24px", border: "2px dashed var(--border-mid)", borderRadius: 6, textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Add Screenshots</div>
            <Btn variant="secondary" small>+ Upload</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Portfolio view ───────────────────────────────────────────────
function Portfolio({ navigate }) {
  const [selected, setSelected] = React.useState(null);
  const [phaseFilter, setPhaseFilter] = React.useState(0); // 0 = all
  const [view, setView] = React.useState("grid"); // grid | list

  if (selected) {
    const isTouchstone = !!selected.sections;
    return <PieceDetail piece={selected} onBack={() => setSelected(null)} isTouchstone={isTouchstone} />;
  }

  const filteredWeekly = phaseFilter === 0 ? WEEKLY_PIECES : WEEKLY_PIECES.filter(p => p.phase === phaseFilter);
  const filteredTouchstone = phaseFilter === 0 ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter(p => p.phase === phaseFilter);

  // Map touchstone projects to have the same fields as weekly pieces for PieceThumb
  const touchstoneForThumb = filteredTouchstone.map(p => ({
    ...p,
    coverBg: p.phase === 1 ? "#c0d4e4" : p.phase === 2 ? "#d8cc9c" : "#b4c8b4",
    type: "Capstone", images: 6,
    desc: p.description,
  }));

  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "56px 64px 96px" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" }}>Portfolio</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 60, fontWeight: 600, fontStyle: "italic", margin: 0, letterSpacing: "-0.02em", lineHeight: 1 }}>Work</h1>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          {/* Phase filters */}
          <div style={{ display: "flex", gap: 4 }}>
            {[{ id: 0, label: "All" }, ...PHASES.map(p => ({ id: p.id, label: p.tag }))].map(f => (
              <button key={f.id} onClick={() => setPhaseFilter(f.id)} style={{
                padding: "6px 12px", borderRadius: 3, border: `1px solid ${phaseFilter === f.id ? (f.id === 0 ? "var(--border-mid)" : phaseP[f.id - 1].color) : "var(--border)"}`,
                background: phaseFilter === f.id ? (f.id === 0 ? "rgba(40,28,16,0.06)" : phaseP[f.id - 1].dim) : "transparent",
                color: phaseFilter === f.id ? (f.id === 0 ? "var(--text-primary)" : phaseP[f.id - 1].color) : "var(--text-dim)",
                fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase", transition: "all 0.15s",
              }}>{f.label}</button>
            ))}
          </div>
          <Btn variant="secondary" small onClick={() => navigate("case-study")}>Case Study →</Btn>
        </div>
      </div>

      {/* ── TOUCHSTONE PROJECTS ───────────────────────────────────────── */}
      {filteredTouchstone.length > 0 && (
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--text-dim)", textTransform: "uppercase" }}>Capstone Projects</div>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)" }}>{filteredTouchstone.length}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {touchstoneForThumb.map(p => (
              <div key={p.id}>
                <PieceThumb piece={p} onClick={setSelected} large />
                <div style={{ padding: "12px 4px 0" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontStyle: "italic", fontWeight: 600, color: "var(--text-primary)", marginBottom: 3 }}>{p.title}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.08em" }}>{p.subtitle || p.type}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── WEEKLY WORK ───────────────────────────────────────────────── */}
      <section>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--text-dim)", textTransform: "uppercase" }}>Weekly Work</div>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)" }}>{filteredWeekly.length} pieces</span>
        </div>

        {/* Phase groups */}
        {(phaseFilter === 0 ? PHASES : PHASES.filter(p => p.id === phaseFilter)).map(ph => {
          const pieces = filteredWeekly.filter(p => p.phase === ph.id);
          if (pieces.length === 0) return null;
          const pc = phaseP[ph.id - 1];

          return (
            <div key={ph.id} style={{ marginBottom: 56 }}>
              {/* Phase label */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: pc.color, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: pc.color, letterSpacing: "0.14em", textTransform: "uppercase" }}>{ph.tag} — {ph.name}</span>
              </div>

              {/* Thumbnail grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
                {pieces.map(piece => (
                  <div key={piece.id}>
                    <PieceThumb piece={piece} onClick={setSelected} />
                    <div style={{ padding: "9px 2px 0" }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: piece.status === "upcoming" ? "var(--text-dim)" : "var(--text-primary)", marginBottom: 2, fontFamily: "var(--font-body)" }}>{piece.title}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.06em" }}>Week {piece.week} · {piece.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

// Keep ProjectDetail for backward compat (case study still uses it)
function ProjectDetail({ proj, onBack }) {
  return <PieceDetail piece={{ ...proj, coverBg: "#c0d0e0", images: 6, desc: proj.description }} onBack={onBack} isTouchstone />;
}

window.Portfolio = Portfolio;
window.ProjectDetail = ProjectDetail;
window.PieceThumb = PieceThumb;
window.PieceDetail = PieceDetail;
