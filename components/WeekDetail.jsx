// ─── Weekly Detail · Editorial Edition ─────────────────────────────────
function WeekDetail({ navigate, weekNum = 3 }) {
  const w = WEEKS.find(x => x.week === weekNum) || WEEKS[2];
  const phase = PHASES[w.phase - 1];
  const { getCompletion, setCompletion: setWeekCompletion } = useWeekProgress();
  const initialCompletion = getCompletion(w.week);
  const defaultTasks = React.useMemo(() => ({
    learn: w.objectives.map((o, i) => ({ id: i, label: o, done: initialCompletion === 100 })),
    build: w.tasks.map((t, i) => ({ id: i, label: t, done: initialCompletion === 100 })),
  }), [w.week]);
  const defaultDevlogs = React.useMemo(() => ([
    { id: 1, day: "Day 1", note: "Started SOP setup. Attribute wrangle basics solid." },
    { id: 2, day: "Day 3", note: "Slope masking working on terrain. Falloff still needs tuning." },
  ]), [w.week]);
  const [weekState, patchWeekState] = useWeekDetailState(w.week, { notes: w.notes || "", tasks: defaultTasks, devlogs: defaultDevlogs });

  const tasks = weekState.tasks || defaultTasks;
  const notes = weekState.notes || "";
  const [tab, setTab] = React.useState("overview");
  const [completion, setCompletion] = React.useState(initialCompletion);
  const devlogs = weekState.devlogs || defaultDevlogs;
  const [newEntry, setNewEntry] = React.useState("");
  const [newDay, setNewDay] = React.useState("");

  React.useEffect(() => {
    const live = getCompletion(w.week);
    setCompletion(live);
  }, [w.week]);

  const addDevlog = () => {
    if (!newEntry.trim()) return;
    const next = [...devlogs, { id: Date.now(), day: newDay.trim() || `Day ${devlogs.length + 1}`, note: newEntry.trim() }];
    patchWeekState({ devlogs: next });
    setNewEntry("");
    setNewDay("");
  };

  const removeDevlog = (id) => patchWeekState({ devlogs: devlogs.filter(e => e.id !== id) });

  const toggleTask = (group, id) =>
    patchWeekState({ tasks: { ...tasks, [group]: tasks[group].map(t => t.id === id ? { ...t, done: !t.done } : t) } });

  const { allResources, addResource, removeResource } = useLocalResources();
  const [showAddResource, setShowAddResource] = React.useState(false);
  const tabs = ["overview", "progress", "gallery", "resources"];
  const inputStyle = {
    width: "100%", background: "var(--surface)",
    border: "1px solid var(--border)", borderRadius: 4, padding: 12,
    color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 13,
    lineHeight: 1.6, resize: "vertical", outline: "none", boxSizing: "border-box",
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 48px 96px" }}>
      <button onClick={() => navigate("timeline")} style={{
        background: "none", border: "none", color: "var(--text-dim)", cursor: "pointer",
        fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", marginBottom: 40, padding: 0,
      }}>← BACK TO TIMELINE</button>

      {/* Header */}
      <div style={{ marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
          <PhasePill phase={w.phase} />
          <Badge label={w.status} />
          {w.week === STATS.currentWeek && (
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: phase.color, padding: "3px 8px", background: phase.colorDim, borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase" }}>Current Week</span>
          )}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", marginBottom: 8, letterSpacing: "0.1em" }}>WEEK {w.week} OF 12</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 600, fontStyle: "italic", margin: "0 0 20px", letterSpacing: "-0.02em", lineHeight: 1.05 }}>{w.title}</h1>
        <div style={{ maxWidth: 360 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.1em" }}>COMPLETION</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontStyle: "italic", color: "var(--text-primary)" }}>{completion}%</span>
          </div>
          <ProgressBar value={completion} color={phase.color} height={3} />
          <input type="range" min={0} max={100} step={5} value={completion}
            onChange={e => {
              const next = Number(e.target.value);
              setCompletion(next);
              setWeekCompletion(w.week, next);
            }}
            style={{
              width: "100%", marginTop: 10, accentColor: phase.color,
              cursor: "pointer", height: 3,
            }} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)" }}>0%</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)" }}>100%</span>
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div style={{ display: "flex", gap: 2, borderBottom: "1px solid var(--border)", marginBottom: 40 }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "9px 18px", border: "none", background: "none", cursor: "pointer",
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
            color: tab === t ? phase.color : "var(--text-dim)",
            borderBottom: `2px solid ${tab === t ? phase.color : "transparent"}`,
            marginBottom: -1, transition: "all 0.15s",
          }}>{t}</button>
        ))}
      </div>

      {tab === "overview" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Objectives */}
            <Card style={{ padding: 24 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: phase.color, letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" }}>Learning Objectives</div>
              {tasks.learn.map(t => (
                <label key={t.id} style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", marginBottom: 12 }}>
                  <div onClick={() => toggleTask("learn", t.id)} style={{
                    width: 18, height: 18, borderRadius: 3,
                    border: `1.5px solid ${t.done ? phase.color : "var(--border-mid)"}`,
                    background: t.done ? phase.colorDim : "transparent", flexShrink: 0, marginTop: 1,
                    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.15s",
                  }}>
                    {t.done && <span style={{ color: phase.color, fontSize: 10, fontWeight: 700 }}>✓</span>}
                  </div>
                  <span style={{ fontSize: 13, color: t.done ? "var(--text-dim)" : "var(--text-primary)", textDecoration: t.done ? "line-through" : "none", lineHeight: 1.5 }}>{t.label}</span>
                </label>
              ))}
            </Card>

            {/* Build tasks */}
            <Card style={{ padding: 24 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#c4a464", letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" }}>Build Tasks</div>
              {tasks.build.map(t => (
                <label key={t.id} style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", marginBottom: 12 }}>
                  <div onClick={() => toggleTask("build", t.id)} style={{
                    width: 18, height: 18, borderRadius: 3,
                    border: `1.5px solid ${t.done ? "#c4a464" : "var(--border-mid)"}`,
                    background: t.done ? "rgba(196,164,100,0.12)" : "transparent", flexShrink: 0, marginTop: 1,
                    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.15s",
                  }}>
                    {t.done && <span style={{ color: "#c4a464", fontSize: 10, fontWeight: 700 }}>✓</span>}
                  </div>
                  <span style={{ fontSize: 13, color: t.done ? "var(--text-dim)" : "var(--text-primary)", textDecoration: t.done ? "line-through" : "none", lineHeight: 1.5 }}>{t.label}</span>
                </label>
              ))}
            </Card>

            {/* Output */}
            <div style={{ padding: "18px 20px", borderLeft: `3px solid ${phase.color}`, background: phase.colorDim, borderRadius: "0 4px 4px 0" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.12em", marginBottom: 6, textTransform: "uppercase" }}>Expected Output</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontStyle: "italic", color: "var(--text-primary)", lineHeight: 1.4 }}>{w.output}</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Progress note */}
            <Card style={{ padding: 24 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#8aaa90", letterSpacing: "0.14em", marginBottom: 12, textTransform: "uppercase" }}>Progress Update</div>
              <textarea value={notes} onChange={e => patchWeekState({ notes: e.target.value })}
                placeholder="Document your progress this week..."
                style={{ ...inputStyle, minHeight: 110 }} />
            </Card>

            <Card style={{ padding: 24 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#b04040", letterSpacing: "0.14em", marginBottom: 12, textTransform: "uppercase" }}>Problems Encountered</div>
              <textarea placeholder="What's blocking you?" style={{ ...inputStyle, minHeight: 70 }} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#5a8060", letterSpacing: "0.14em", margin: "16px 0 12px", textTransform: "uppercase" }}>Breakthroughs</div>
              <textarea placeholder="What clicked? What did you solve?" style={{ ...inputStyle, minHeight: 70 }} />
            </Card>

            <Card style={{ padding: 24 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: phase.color, letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" }}>Weekly Reflection</div>
              {["What I learned", "What I need to improve", "What carries into next week"].map((q, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontStyle: "italic", color: "var(--text-secondary)", marginBottom: 6 }}>{q}</div>
                  <textarea placeholder={`${q}...`} style={{ ...inputStyle, minHeight: 52 }} />
                </div>
              ))}
            </Card>
          </div>
        </div>
      )}

      {tab === "gallery" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 28 }}>
            {[...Array(6)].map((_, i) => (
              <Placeholder key={i} label={i < 2 ? "Screenshot" : "Drop here"} width="100%" height={170} color="#e0d8cc" style={{ width: "100%", borderRadius: 6, border: "1px dashed var(--border-mid)" }} />
            ))}
          </div>
          <div style={{ border: "2px dashed var(--border-mid)", borderRadius: 6, padding: 40, textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", marginBottom: 14, letterSpacing: "0.12em", textTransform: "uppercase" }}>Upload screenshots · videos · node graphs</div>
            <Btn variant="secondary">+ Add Files</Btn>
          </div>
        </div>
      )}

      {tab === "progress" && (
        <Card style={{ padding: 32 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.14em", marginBottom: 24, textTransform: "uppercase" }}>Devlog Entries</div>
          {devlogs.length === 0 && (
            <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontStyle: "italic", color: "var(--text-dim)", marginBottom: 24 }}>No entries yet — add one below.</div>
          )}
          {devlogs.map((e) => (
            <div key={e.id} style={{ display: "flex", gap: 20, paddingBottom: 20, borderBottom: "1px solid var(--border)", marginBottom: 20, alignItems: "flex-start" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontStyle: "italic", color: phase.color, minWidth: 52, paddingTop: 1 }}>{e.day}</div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, flex: 1 }}>{e.note}</div>
              <button onClick={() => removeDevlog(e.id)} title="Remove entry" style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--text-dim)", fontSize: 15, lineHeight: 1, padding: "2px 4px",
                borderRadius: 3, transition: "color 0.15s, background 0.15s", flexShrink: 0,
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#b04040"; e.currentTarget.style.background = "rgba(176,64,64,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.background = "none"; }}
              >✕</button>
            </div>
          ))}

          {/* New entry form */}
          <div style={{ borderTop: devlogs.length > 0 ? "none" : undefined, paddingTop: devlogs.length > 0 ? 4 : 0 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <input value={newDay} onChange={e => setNewDay(e.target.value)}
                placeholder="Label (e.g. Day 4)"
                style={{
                  width: 130, padding: "9px 12px", background: "var(--surface)",
                  border: "1px solid var(--border)", borderRadius: 4,
                  color: "var(--text-primary)", fontFamily: "var(--font-display)",
                  fontStyle: "italic", fontSize: 13, outline: "none",
                }} />
              <textarea value={newEntry} onChange={e => setNewEntry(e.target.value)}
                placeholder="What did you work on today?"
                onKeyDown={e => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) addDevlog(); }}
                style={{
                  flex: 1, minHeight: 70, background: "var(--surface)",
                  border: "1px solid var(--border)", borderRadius: 4, padding: "9px 12px",
                  color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 13,
                  lineHeight: 1.6, resize: "vertical", outline: "none", boxSizing: "border-box",
                }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Btn small variant="secondary" onClick={addDevlog}>+ Add Entry</Btn>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.08em" }}>⌘ + Enter to submit</span>
            </div>
          </div>
        </Card>
      )}

      {tab === "resources" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Add resource form */}
          {showAddResource && (
            <AddResourceForm weekNum={w.week} phase={w.phase} onAdd={addResource} onClose={() => setShowAddResource(false)} />
          )}

          {/* Add button */}
          {!showAddResource && (
            <div style={{ marginBottom: 16 }}>
              <Btn small variant="primary" onClick={() => setShowAddResource(true)}>+ Add Resource</Btn>
            </div>
          )}

          {/* Resource list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {allResources.filter(r => r.week === w.week || (r.phase === w.phase && !r.userAdded)).length === 0 && !showAddResource && (
              <div style={{ padding: "32px 0", textAlign: "center", color: "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em" }}>
                NO RESOURCES YET — add your first one above
              </div>
            )}
            {allResources.filter(r => r.week === w.week || (r.phase === w.phase && !r.userAdded)).map(r => {
              const statusMap = { completed: "complete", "in-progress": "in-progress", "not-started": "upcoming" };
              const typeColor = { course: "var(--accent-blue)", documentation: "var(--accent-teal)", article: "var(--accent-amber)", video: "#c08070", tutorial: "#a090c0" }[r.type] || "var(--text-dim)";
              return (
                <Card key={r.id} style={{ padding: "16px 20px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, marginBottom: 6, flexWrap: "wrap", alignItems: "center" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 6px", borderRadius: 2, background: `${typeColor}18`, color: typeColor, letterSpacing: "0.1em", textTransform: "uppercase" }}>{r.type}</span>
                        {r.userAdded && (
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 6px", borderRadius: 2, background: "rgba(78,143,104,0.1)", color: "#4e8f68", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            Added Week {r.usedInWeek || r.week}
                          </span>
                        )}
                        <Badge label={statusMap[r.status] || "upcoming"} />
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>{r.title}</div>
                      {r.notes && <div style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.5, marginBottom: 6 }}>{r.notes}</div>}
                      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                        {(r.tags || []).map(t => <Tag key={t} label={t} />)}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                      {r.link && r.link !== "#" && (
                        <a href={r.link} target="_blank" rel="noopener noreferrer">
                          <Btn small variant="secondary">Open →</Btn>
                        </a>
                      )}
                      {r.userAdded && (
                        <Btn small variant="ghost" onClick={() => removeResource(r.id)}>Remove</Btn>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
window.WeekDetail = WeekDetail;
