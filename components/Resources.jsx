// ─── Resources Library · with shared store ─────────────────────────────
function Resources({ navigate }) {
  const { allResources, removeResource, updateResource } = useLocalResources();
  const [filterTool, setFilterTool] = React.useState("All");
  const [filterStatus, setFilterStatus] = React.useState("All");
  const [filterSource, setFilterSource] = React.useState("All"); // All | Built-in | Added
  const [search, setSearch] = React.useState("");

  const tools = ["All", "Houdini", "Maya", "Python", "Shaders", "Optimization", "General"];
  const statuses = ["All", "not-started", "in-progress", "completed"];

  const filtered = allResources.filter(r => {
    const toolMatch = filterTool === "All" || r.tool === filterTool || (r.tags || []).includes(filterTool);
    const statusMatch = filterStatus === "All" || r.status === filterStatus;
    const sourceMatch = filterSource === "All" || (filterSource === "Added" ? r.userAdded : !r.userAdded);
    const searchMatch = !search || r.title.toLowerCase().includes(search.toLowerCase()) ||
      (r.tags || []).some(t => t.toLowerCase().includes(search.toLowerCase())) ||
      (r.notes || "").toLowerCase().includes(search.toLowerCase());
    return toolMatch && statusMatch && sourceMatch && searchMatch;
  });

  const typeColor = {
    course: "var(--accent-blue)", documentation: "var(--accent-teal)", article: "var(--accent-amber)",
    video: "#c08070", tutorial: "#a090c0", reference: "var(--text-dim)", book: "#b07850",
  };

  const statusMap = { completed: "complete", "in-progress": "in-progress", "not-started": "upcoming" };
  const userAddedCount = allResources.filter(r => r.userAdded).length;

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 48px 96px" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" }}>Library</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 800, margin: 0, letterSpacing: "-0.03em", lineHeight: 1 }}>Resources</h1>
            <p style={{ color: "var(--text-dim)", fontSize: 13, margin: "8px 0 0" }}>
              {allResources.length} total · {userAddedCount} added by you
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <input value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search resources, tags, notes..."
        style={{
          width: "100%", maxWidth: 420, padding: "10px 16px", marginBottom: 20, display: "block",
          background: "var(--surface-elevated)", border: "1px solid var(--border-mid)",
          borderRadius: 4, color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 13, outline: "none",
        }} />

      {/* Filters row 1: source */}
      <div style={{ display: "flex", gap: 5, marginBottom: 8, flexWrap: "wrap" }}>
        {[["All", `All (${allResources.length})`], ["Built-in", "Built-in"], ["Added", `My Additions (${userAddedCount})`]].map(([val, label]) => (
          <button key={val} onClick={() => setFilterSource(val)} style={{
            padding: "5px 12px", borderRadius: 3,
            border: `1px solid ${filterSource === val ? "var(--border-mid)" : "var(--border)"}`,
            background: filterSource === val ? "rgba(20,18,14,0.07)" : "transparent",
            color: filterSource === val ? "var(--text-primary)" : "var(--text-dim)",
            fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em", cursor: "pointer", textTransform: "uppercase",
          }}>{label}</button>
        ))}
      </div>

      {/* Filters row 2: tool */}
      <div style={{ display: "flex", gap: 5, marginBottom: 8, flexWrap: "wrap" }}>
        {tools.map(t => (
          <button key={t} onClick={() => setFilterTool(t)} style={{
            padding: "5px 12px", borderRadius: 3,
            border: `1px solid ${filterTool === t ? "var(--accent-blue)" : "var(--border)"}`,
            background: filterTool === t ? "rgba(90,135,168,0.1)" : "transparent",
            color: filterTool === t ? "var(--accent-blue)" : "var(--text-dim)",
            fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em", cursor: "pointer", textTransform: "uppercase",
          }}>{t}</button>
        ))}
      </div>

      {/* Filters row 3: status */}
      <div style={{ display: "flex", gap: 5, marginBottom: 36, flexWrap: "wrap" }}>
        {statuses.map(s => {
          const label = s === "All" ? "All Status" : s === "not-started" ? "Not Started" : s === "in-progress" ? "In Progress" : "Completed";
          return (
            <button key={s} onClick={() => setFilterStatus(s)} style={{
              padding: "5px 12px", borderRadius: 3,
              border: `1px solid ${filterStatus === s ? "var(--border-mid)" : "var(--border)"}`,
              background: filterStatus === s ? "rgba(20,18,14,0.05)" : "transparent",
              color: filterStatus === s ? "var(--text-primary)" : "var(--text-dim)",
              fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em", cursor: "pointer", textTransform: "uppercase",
            }}>{label}</button>
          );
        })}
      </div>

      {/* Resource list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.length === 0 && (
          <div style={{ padding: 48, textAlign: "center", color: "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em" }}>
            NO RESOURCES MATCH — try adjusting filters
          </div>
        )}

        {filtered.map(r => {
          const tc = typeColor[r.type] || "var(--text-dim)";
          const stars = r.rating > 0 ? "★".repeat(r.rating) + "☆".repeat(5 - r.rating) : null;
          const weekData = r.usedInWeek ? WEEKS[r.usedInWeek - 1] : (r.week ? WEEKS[r.week - 1] : null);
          const phaseData = r.phase ? PHASES[r.phase - 1] : null;

          return (
            <Card key={r.id} style={{ padding: "18px 22px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start" }}>
                <div>
                  {/* Top meta row */}
                  <div style={{ display: "flex", gap: 7, marginBottom: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 6px", borderRadius: 2, background: `${tc}18`, color: tc, letterSpacing: "0.1em", textTransform: "uppercase" }}>{r.type}</span>
                    {r.phase && <PhasePill phase={r.phase} />}

                    {/* "Used in Week X" provenance tag */}
                    {(r.usedInWeek || r.week) && (
                      <button onClick={() => navigate && navigate("week-detail", { weekNum: r.usedInWeek || r.week })} style={{
                        background: "none", border: "none", cursor: "pointer", padding: 0,
                        display: "inline-flex", alignItems: "center", gap: 4,
                      }}>
                        <span style={{
                          fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 8px", borderRadius: 2,
                          background: r.userAdded ? "rgba(78,143,104,0.1)" : "rgba(20,18,14,0.05)",
                          color: r.userAdded ? "#4e8f68" : "var(--text-dim)",
                          letterSpacing: "0.08em", textTransform: "uppercase",
                          textDecoration: "underline", textDecorationStyle: "dotted",
                        }}>
                          {r.userAdded ? `Added in` : `Used in`} Week {r.usedInWeek || r.week}
                          {weekData ? ` · ${weekData.title.split(" ").slice(0, 3).join(" ")}…` : ""}
                        </span>
                      </button>
                    )}

                    {r.userAdded && (
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, padding: "2px 5px", borderRadius: 2, background: "rgba(78,143,104,0.08)", color: "#4e8f68", letterSpacing: "0.1em", textTransform: "uppercase" }}>MY ADDITION</span>
                    )}
                  </div>

                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>{r.title}</div>
                  {r.notes && <div style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.55, marginBottom: 8 }}>{r.notes}</div>}
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {(r.tags || []).map(t => <Tag key={t} label={t} />)}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                  <Badge label={statusMap[r.status] || "upcoming"} />
                  {stars && <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-amber)", letterSpacing: 1 }}>{stars}</div>}

                  {/* Status updater for user resources */}
                  {r.userAdded && (
                    <select value={r.status} onChange={e => updateResource(r.id, { status: e.target.value })} style={{
                      background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 3,
                      color: "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: 9,
                      padding: "3px 6px", cursor: "pointer", letterSpacing: "0.06em",
                    }}>
                      <option value="not-started">Not Started</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  )}

                  <div style={{ display: "flex", gap: 6 }}>
                    {r.link && r.link !== "#" && (
                      <a href={r.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <Btn small variant="secondary">Open →</Btn>
                      </a>
                    )}
                    {r.userAdded && (
                      <Btn small variant="ghost" onClick={() => removeResource(r.id)}>Remove</Btn>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Add resource prompt */}
      <div style={{ marginTop: 24, padding: "28px 32px", border: "2px dashed var(--border-mid)", borderRadius: 6, textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.12em", marginBottom: 10, textTransform: "uppercase" }}>
          Add resources from your weekly log — they appear here automatically
        </div>
        <Btn variant="secondary" small onClick={() => navigate("week-detail")}>Go to Week Log →</Btn>
      </div>
    </div>
  );
}
window.Resources = Resources;
