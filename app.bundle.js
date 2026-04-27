(() => {
  const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}
`;
  function useTweaks(defaults) {
    const [values, setValues] = React.useState(defaults);
    const setTweak = React.useCallback((keyOrEdits, val) => {
      const edits = typeof keyOrEdits === "object" && keyOrEdits !== null ? keyOrEdits : { [keyOrEdits]: val };
      setValues((prev) => ({ ...prev, ...edits }));
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits }, "*");
    }, []);
    return [values, setTweak];
  }
  function TweaksPanel({ title = "Tweaks", children }) {
    const [open, setOpen] = React.useState(false);
    const dragRef = React.useRef(null);
    const offsetRef = React.useRef({ x: 16, y: 16 });
    const PAD = 16;
    const clampToViewport = React.useCallback(() => {
      const panel = dragRef.current;
      if (!panel) return;
      const w = panel.offsetWidth, h = panel.offsetHeight;
      const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
      const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
      offsetRef.current = {
        x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
        y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
      };
      panel.style.right = offsetRef.current.x + "px";
      panel.style.bottom = offsetRef.current.y + "px";
    }, []);
    React.useEffect(() => {
      if (!open) return;
      clampToViewport();
      if (typeof ResizeObserver === "undefined") {
        window.addEventListener("resize", clampToViewport);
        return () => window.removeEventListener("resize", clampToViewport);
      }
      const ro = new ResizeObserver(clampToViewport);
      ro.observe(document.documentElement);
      return () => ro.disconnect();
    }, [open, clampToViewport]);
    React.useEffect(() => {
      const onMsg = (e) => {
        const t = e?.data?.type;
        if (t === "__activate_edit_mode") setOpen(true);
        else if (t === "__deactivate_edit_mode") setOpen(false);
      };
      window.addEventListener("message", onMsg);
      window.parent.postMessage({ type: "__edit_mode_available" }, "*");
      return () => window.removeEventListener("message", onMsg);
    }, []);
    const dismiss = () => {
      setOpen(false);
      window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
    };
    const onDragStart = (e) => {
      const panel = dragRef.current;
      if (!panel) return;
      const r = panel.getBoundingClientRect();
      const sx = e.clientX, sy = e.clientY;
      const startRight = window.innerWidth - r.right;
      const startBottom = window.innerHeight - r.bottom;
      const move = (ev) => {
        offsetRef.current = {
          x: startRight - (ev.clientX - sx),
          y: startBottom - (ev.clientY - sy)
        };
        clampToViewport();
      };
      const up = () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
      };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
    };
    if (!open) return null;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", null, __TWEAKS_STYLE), /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: dragRef,
        className: "twk-panel",
        style: { right: offsetRef.current.x, bottom: offsetRef.current.y }
      },
      /* @__PURE__ */ React.createElement("div", { className: "twk-hd", onMouseDown: onDragStart }, /* @__PURE__ */ React.createElement("b", null, title), /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "twk-x",
          "aria-label": "Close tweaks",
          onMouseDown: (e) => e.stopPropagation(),
          onClick: dismiss
        },
        "\u2715"
      )),
      /* @__PURE__ */ React.createElement("div", { className: "twk-body" }, children)
    ));
  }
  function TweakSection({ label, children }) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "twk-sect" }, label), children);
  }
  function TweakRow({ label, value, children, inline = false }) {
    return /* @__PURE__ */ React.createElement("div", { className: inline ? "twk-row twk-row-h" : "twk-row" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label), value != null && /* @__PURE__ */ React.createElement("span", { className: "twk-val" }, value)), children);
  }
  function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = "", onChange }) {
    return /* @__PURE__ */ React.createElement(TweakRow, { label, value: `${value}${unit}` }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "range",
        className: "twk-slider",
        min,
        max,
        step,
        value,
        onChange: (e) => onChange(Number(e.target.value))
      }
    ));
  }
  function TweakToggle({ label, value, onChange }) {
    return /* @__PURE__ */ React.createElement("div", { className: "twk-row twk-row-h" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label)), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "twk-toggle",
        "data-on": value ? "1" : "0",
        role: "switch",
        "aria-checked": !!value,
        onClick: () => onChange(!value)
      },
      /* @__PURE__ */ React.createElement("i", null)
    ));
  }
  function TweakRadio({ label, value, options, onChange }) {
    const trackRef = React.useRef(null);
    const [dragging, setDragging] = React.useState(false);
    const opts = options.map((o) => typeof o === "object" ? o : { value: o, label: o });
    const idx = Math.max(0, opts.findIndex((o) => o.value === value));
    const n = opts.length;
    const valueRef = React.useRef(value);
    valueRef.current = value;
    const segAt = (clientX) => {
      const r = trackRef.current.getBoundingClientRect();
      const inner = r.width - 4;
      const i = Math.floor((clientX - r.left - 2) / inner * n);
      return opts[Math.max(0, Math.min(n - 1, i))].value;
    };
    const onPointerDown = (e) => {
      setDragging(true);
      const v0 = segAt(e.clientX);
      if (v0 !== valueRef.current) onChange(v0);
      const move = (ev) => {
        if (!trackRef.current) return;
        const v = segAt(ev.clientX);
        if (v !== valueRef.current) onChange(v);
      };
      const up = () => {
        setDragging(false);
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
    };
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: trackRef,
        role: "radiogroup",
        onPointerDown,
        className: dragging ? "twk-seg dragging" : "twk-seg"
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "twk-seg-thumb",
          style: {
            left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
            width: `calc((100% - 4px) / ${n})`
          }
        }
      ),
      opts.map((o) => /* @__PURE__ */ React.createElement("button", { key: o.value, type: "button", role: "radio", "aria-checked": o.value === value }, o.label))
    ));
  }
  function TweakSelect({ label, value, options, onChange }) {
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement("select", { className: "twk-field", value, onChange: (e) => onChange(e.target.value) }, options.map((o) => {
      const v = typeof o === "object" ? o.value : o;
      const l = typeof o === "object" ? o.label : o;
      return /* @__PURE__ */ React.createElement("option", { key: v, value: v }, l);
    })));
  }
  function TweakText({ label, value, placeholder, onChange }) {
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
      "input",
      {
        className: "twk-field",
        type: "text",
        value,
        placeholder,
        onChange: (e) => onChange(e.target.value)
      }
    ));
  }
  function TweakNumber({ label, value, min, max, step = 1, unit = "", onChange }) {
    const clamp = (n) => {
      if (min != null && n < min) return min;
      if (max != null && n > max) return max;
      return n;
    };
    const startRef = React.useRef({ x: 0, val: 0 });
    const onScrubStart = (e) => {
      e.preventDefault();
      startRef.current = { x: e.clientX, val: value };
      const decimals = (String(step).split(".")[1] || "").length;
      const move = (ev) => {
        const dx = ev.clientX - startRef.current.x;
        const raw = startRef.current.val + dx * step;
        const snapped = Math.round(raw / step) * step;
        onChange(clamp(Number(snapped.toFixed(decimals))));
      };
      const up = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "twk-num" }, /* @__PURE__ */ React.createElement("span", { className: "twk-num-lbl", onPointerDown: onScrubStart }, label), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        value,
        min,
        max,
        step,
        onChange: (e) => onChange(clamp(Number(e.target.value)))
      }
    ), unit && /* @__PURE__ */ React.createElement("span", { className: "twk-num-unit" }, unit));
  }
  function TweakColor({ label, value, onChange }) {
    return /* @__PURE__ */ React.createElement("div", { className: "twk-row twk-row-h" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label)), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "color",
        className: "twk-swatch",
        value,
        onChange: (e) => onChange(e.target.value)
      }
    ));
  }
  function TweakButton({ label, onClick, secondary = false }) {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: secondary ? "twk-btn secondary" : "twk-btn",
        onClick
      },
      label
    );
  }
  Object.assign(window, {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRow,
    TweakSlider,
    TweakToggle,
    TweakRadio,
    TweakSelect,
    TweakText,
    TweakNumber,
    TweakColor,
    TweakButton
  });
  const PHASES = [
    {
      id: 1,
      name: "Houdini Procedural Systems",
      weeks: [1, 2, 3, 4],
      color: "#7b9ab5",
      colorDim: "rgba(123,154,181,0.14)",
      goal: "Build a procedural RPG environment tool",
      tag: "PHASE 01"
    },
    {
      id: 2,
      name: "Python + Maya Pipeline Tools",
      weeks: [5, 6, 7, 8],
      color: "#c4a464",
      colorDim: "rgba(196,164,100,0.14)",
      goal: "Build an artist asset validator and export tool",
      tag: "PHASE 02"
    },
    {
      id: 3,
      name: "Shaders, Rendering & Optimization",
      weeks: [9, 10, 11, 12],
      color: "#8aaa90",
      colorDim: "rgba(138,170,144,0.14)",
      goal: "Build an optimized stylized material system",
      tag: "PHASE 03"
    }
  ];
  const WEEKS = [
    // Phase 1
    {
      week: 1,
      phase: 1,
      title: "Houdini Fundamentals & SOP Networks",
      objectives: ["Understand VEX basics", "Build custom attribute workflows", "Learn SOP-level geometry manipulation"],
      tasks: ["Complete SOP network intro exercises", "Build a modular scatter system", "Document node graph with notes"],
      output: "Documented SOP scatter tool with VEX attributes",
      status: "complete",
      completion: 100,
      notes: "Solid foundation in wrangling. VEX attribute transfers clicked on day 3.",
      thumbs: ["thumb_w1_a", "thumb_w1_b"]
    },
    {
      week: 2,
      phase: 1,
      title: "Procedural Modeling & HDA Authoring",
      objectives: ["Create reusable HDAs", "Understand parameter promotion", "Build modular ruin pieces"],
      tasks: ["Author 3 ruin HDAs (wall, arch, floor)", "Set up digital asset library", "Parameter tuning and ranges"],
      output: "3 packaged HDAs for ruin environment kit",
      status: "complete",
      completion: 100,
      notes: "HDA promotion is powerful \u2014 exposed 12 parameters per asset.",
      thumbs: ["thumb_w2_a"]
    },
    {
      week: 3,
      phase: 1,
      title: "Terrain & Layout Systems",
      objectives: ["Build height-based scatter logic", "Slope masking for placement rules", "Integrate erosion passes"],
      tasks: ["Create terrain-aware scatter tool", "Implement slope/curvature masks", "Test with ruin kit pieces"],
      output: "Terrain-driven layout system with ruin placement",
      status: "in-progress",
      completion: 60,
      notes: "Slope masking working. Erosion pass WIP.",
      thumbs: []
    },
    {
      week: 4,
      phase: 1,
      title: "Game Export & LOD Pipeline",
      objectives: ["FBX batch export from Houdini", "LOD generation strategy", "Collision mesh authoring"],
      tasks: ["Build export ROP network", "Generate 3 LOD levels per asset", "Package final RPG env tool"],
      output: "Fully packaged Procedural RPG Environment Generator",
      status: "upcoming",
      completion: 0,
      notes: "",
      thumbs: []
    },
    // Phase 2
    {
      week: 5,
      phase: 2,
      title: "Python + Maya Fundamentals",
      objectives: ["Maya Python API overview", "Scene graph traversal", "Attribute query patterns"],
      tasks: ["Write scene query scripts", "Build basic UI with PySide2", "Author first validation check"],
      output: "Basic Maya Python toolkit scaffold",
      status: "upcoming",
      completion: 0,
      notes: "",
      thumbs: []
    },
    {
      week: 6,
      phase: 2,
      title: "Asset Validation Logic",
      objectives: ["Name convention checking", "UV integrity validation", "Pivot and freeze transform checks"],
      tasks: ["Build 10 validation rules", "Error reporting system", "Batch-run on test assets"],
      output: "Validation rule library with error reporter",
      status: "upcoming",
      completion: 0,
      notes: "",
      thumbs: []
    },
    {
      week: 7,
      phase: 2,
      title: "Export Pipeline & UI",
      objectives: ["FBX export automation", "Path and naming templates", "Progress logging"],
      tasks: ["Build export settings panel", "Hook validation into pre-export step", "Test on 20 sample assets"],
      output: "One-click export tool with integrated validation",
      status: "upcoming",
      completion: 0,
      notes: "",
      thumbs: []
    },
    {
      week: 8,
      phase: 2,
      title: "Polish, GitHub & Documentation",
      objectives: ["Code cleanup and refactor", "README and usage docs", "GitHub publish"],
      tasks: ["Write docstrings for all functions", "Record demo video", "Publish to GitHub"],
      output: "Production-ready validator tool on GitHub",
      status: "upcoming",
      completion: 0,
      notes: "",
      thumbs: []
    },
    // Phase 3
    {
      week: 9,
      phase: 3,
      title: "Shader Fundamentals & Graph Setup",
      objectives: ["Material graph architecture", "PBR vs stylized workflows", "Node optimization basics"],
      tasks: ["Build base stylized shader", "Set up master material system", "Document node categories"],
      output: "Master material template with stylized base",
      status: "upcoming",
      completion: 0,
      notes: "",
      thumbs: []
    },
    {
      week: 10,
      phase: 3,
      title: "Texture Packing & Atlas Strategy",
      objectives: ["Channel packing techniques", "Atlas layout planning", "Memory budget targets"],
      tasks: ["Pack ORM textures for ruin kit", "Build atlas for environment tiles", "Measure memory footprint"],
      output: "Fully packed texture set with atlas documentation",
      status: "upcoming",
      completion: 0,
      notes: "",
      thumbs: []
    },
    {
      week: 11,
      phase: 3,
      title: "Performance Profiling & Optimization",
      objectives: ["GPU profiling in engine", "Draw call analysis", "Material instancing"],
      tasks: ["Profile before/after states", "Reduce draw calls via instancing", "Document optimization gains"],
      output: "Optimization report with before/after comparison",
      status: "upcoming",
      completion: 0,
      notes: "",
      thumbs: []
    },
    {
      week: 12,
      phase: 3,
      title: "Final Polish & Portfolio Render",
      objectives: ["Cinematic lighting pass", "Final render settings", "Portfolio presentation layout"],
      tasks: ["Light and render final environment", "Compile all three projects for portfolio", "Integrated case study writeup"],
      output: "Complete Stylized RPG Ruins Pipeline \u2014 portfolio ready",
      status: "upcoming",
      completion: 0,
      notes: "",
      thumbs: []
    }
  ];
  const RESOURCES = [
    { id: 1, title: "Houdini Procedural Workflows", type: "course", phase: 1, tool: "Houdini", week: 1, link: "#", notes: "Core SOP fundamentals, excellent pacing.", status: "completed", rating: 5, tags: ["procedural", "SOP", "fundamentals"] },
    { id: 2, title: "VEX for Artists", type: "documentation", phase: 1, tool: "Houdini", week: 1, link: "#", notes: "SideFX docs \u2014 bookmark the attribute reference.", status: "completed", rating: 5, tags: ["VEX", "attributes"] },
    { id: 3, title: "HDA Best Practices \u2014 SideFX", type: "article", phase: 1, tool: "Houdini", week: 2, link: "#", notes: "Great for parameter promotion patterns.", status: "in-progress", rating: 4, tags: ["HDA", "pipeline"] },
    { id: 4, title: "Technical Art in Games \u2014 GDC Talk", type: "video", phase: 1, tool: "General", week: 1, link: "#", notes: "Broad overview of TA role in production.", status: "completed", rating: 5, tags: ["overview", "production"] },
    { id: 5, title: "Maya Python for TDs", type: "course", phase: 2, tool: "Maya", week: 5, link: "#", notes: "PySide2 section is most relevant.", status: "not-started", rating: 0, tags: ["Python", "Maya", "pipeline"] },
    { id: 6, title: "Python MEL Scripting Reference", type: "documentation", phase: 2, tool: "Maya", week: 5, link: "#", notes: "", status: "not-started", rating: 0, tags: ["Python", "scripting"] },
    { id: 7, title: "Stylized Shader Techniques \u2014 Unreal", type: "tutorial", phase: 3, tool: "Shaders", week: 9, link: "#", notes: "Great breakdown of cel-shading approaches.", status: "not-started", rating: 0, tags: ["shaders", "stylized", "UE5"] },
    { id: 8, title: "GPU Optimization for Artists", type: "article", phase: 3, tool: "Optimization", week: 11, link: "#", notes: "Draw call reduction strategies.", status: "not-started", rating: 0, tags: ["optimization", "GPU"] }
  ];
  const WEEKLY_PIECES = [
    { id: "w1", week: 1, phase: 1, title: "SOP Scatter System", type: "Tool", status: "complete", tags: ["Houdini", "VEX", "SOP"], coverBg: "#c8d8e8", desc: "Custom point scatter with VEX attribute wranglers. Height, slope, and density control via ramp parameters.", images: 4 },
    { id: "w2", week: 2, phase: 1, title: "Ruin Kit HDAs", type: "Asset", status: "complete", tags: ["Houdini", "HDA", "Modular"], coverBg: "#bccedd", desc: "Three reusable digital assets: modular wall, arch, and floor sections. 12 exposed parameters per asset.", images: 6 },
    { id: "w3", week: 3, phase: 1, title: "Terrain Layout System", type: "Tool", status: "in-progress", tags: ["Houdini", "Terrain", "Scatter"], coverBg: "#c0d4e0", desc: "Slope and curvature-based placement masks driving ruin scatter on generated terrain. Erosion pass WIP.", images: 2 },
    { id: "w4", week: 4, phase: 1, title: "Game Export Pipeline", type: "Tool", status: "upcoming", tags: ["Houdini", "FBX", "LOD"], coverBg: "#b8ccdc", desc: "Batch FBX export ROP network with automated LOD generation and collision mesh authoring.", images: 0 },
    { id: "w5", week: 5, phase: 2, title: "Maya Python Toolkit", type: "Tool", status: "upcoming", tags: ["Python", "Maya", "PySide2"], coverBg: "#ddd4b0", desc: "Scene graph traversal scripts and PySide2 UI scaffold for the validator pipeline.", images: 0 },
    { id: "w6", week: 6, phase: 2, title: "Validation Rule Library", type: "Tool", status: "upcoming", tags: ["Python", "Validation", "Pipeline"], coverBg: "#d4c8a0", desc: "10 automated validation rules: naming, UVs, pivots, transforms, polygon count, material assignment.", images: 0 },
    { id: "w7", week: 7, phase: 2, title: "One-Click Export Tool", type: "Tool", status: "upcoming", tags: ["Python", "FBX", "Automation"], coverBg: "#ccc098", desc: "Full export panel with path templates, validation gating, and progress logging.", images: 0 },
    { id: "w8", week: 8, phase: 2, title: "GitHub Release + Docs", type: "Code", status: "upcoming", tags: ["Python", "GitHub", "Docs"], coverBg: "#c8b890", desc: "Polished release with docstrings, README, demo video, and public GitHub repo.", images: 0 },
    { id: "w9", week: 9, phase: 3, title: "Master Stylized Shader", type: "Shader", status: "upcoming", tags: ["Shaders", "UE5", "Stylized"], coverBg: "#b8ccb8", desc: "Master material with stylized base, cel-shading approximation, and custom parameters.", images: 0 },
    { id: "w10", week: 10, phase: 3, title: "Texture Pack + Atlas", type: "Texture", status: "upcoming", tags: ["Textures", "ORM", "Atlas"], coverBg: "#a8c0a8", desc: "ORM channel packing for ruin kit assets and environment tile atlas with memory budget docs.", images: 0 },
    { id: "w11", week: 11, phase: 3, title: "Optimization Report", type: "Research", status: "upcoming", tags: ["GPU", "Profiling", "UE5"], coverBg: "#b0c8b0", desc: "Before/after GPU profiling: draw calls 847\u2192212, VRAM 1.2 GB\u2192340 MB via instancing.", images: 0 },
    { id: "w12", week: 12, phase: 3, title: "Final Portfolio Render", type: "Render", status: "upcoming", tags: ["Lighting", "Render", "Portfolio"], coverBg: "#a0bca0", desc: "Cinematic lighting pass and final renders of the complete Stylized RPG Ruins environment.", images: 0 }
  ];
  const PORTFOLIO_PROJECTS = [
    {
      id: "proj-houdini",
      title: "Procedural RPG Environment Generator",
      subtitle: "Houdini HDA Tool",
      phase: 1,
      status: "prototype",
      description: "A modular Houdini Digital Asset toolkit for procedurally generating RPG ruin environments. Features terrain-aware placement, height-based scatter logic, and a one-click FBX export pipeline.",
      tags: ["Houdini", "VEX", "Procedural", "HDA", "Game-Ready"],
      sections: ["Final Renders", "Node Graph", "Parameter Breakdown", "Variation Examples", "Exported Meshes", "Technical Breakdown"],
      coverColor: "var(--accent-blue)"
    },
    {
      id: "proj-python",
      title: "Artist Asset Validator & Export Tool",
      subtitle: "Python + Maya Pipeline Tool",
      phase: 2,
      status: "research",
      description: "A PySide2 Maya tool for validating and batch-exporting game assets. Runs 10+ automated checks (naming, UVs, transforms, pivots) before triggering a templated FBX export pipeline.",
      tags: ["Python", "Maya", "PySide2", "Pipeline", "Automation"],
      sections: ["UI Screenshots", "Validation Logic", "Error Reporting", "Export Pipeline", "GitHub", "Demo Video"],
      coverColor: "var(--accent-amber)"
    },
    {
      id: "proj-shaders",
      title: "Optimized Stylized Material System",
      subtitle: "Shaders + Rendering",
      phase: 3,
      status: "research",
      description: "A master material system for stylized environments with packed textures, atlas support, and instanced materials. Includes before/after GPU profiling and a full optimization report.",
      tags: ["Shaders", "UE5", "Optimization", "PBR", "Stylized"],
      sections: ["Final Renders", "Shader Graph", "Material Params", "Optimization Report", "Texture Packing", "Technical Explanation"],
      coverColor: "var(--accent-teal)"
    }
  ];
  const STATUS_CONFIG = {
    "complete": { label: "Complete", color: "var(--accent-teal)", bg: "rgba(80,210,180,0.12)" },
    "in-progress": { label: "In Progress", color: "var(--accent-amber)", bg: "rgba(240,168,48,0.12)" },
    "upcoming": { label: "Upcoming", color: "var(--text-dim)", bg: "rgba(255,255,255,0.06)" },
    "portfolio-ready": { label: "Portfolio Ready", color: "#a0f080", bg: "rgba(160,240,128,0.12)" },
    "research": { label: "Research", color: "var(--accent-amber)", bg: "rgba(240,168,48,0.12)" },
    "prototype": { label: "Prototype", color: "var(--accent-blue)", bg: "rgba(56,182,255,0.12)" },
    "functional": { label: "Functional", color: "var(--accent-teal)", bg: "rgba(80,210,180,0.12)" },
    "polish": { label: "Polish", color: "#c084fc", bg: "rgba(192,132,252,0.12)" }
  };
  const STATS = {
    weeksCompleted: 2,
    currentWeek: 3,
    currentPhase: 1,
    portfolioPieces: 1,
    resourcesSaved: 8,
    filesUploaded: 14,
    overallProgress: 22
  };
  Object.assign(window, { PHASES, WEEKS, RESOURCES, PORTFOLIO_PROJECTS, WEEKLY_PIECES, STATUS_CONFIG, STATS });
  function Placeholder({ label, width, height, color = "#e8e2d8", style = {} }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      width,
      height,
      background: `repeating-linear-gradient(135deg, ${color} 0px, ${color} 10px, rgba(0,0,0,0.025) 10px, rgba(0,0,0,0.025) 20px)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      flexShrink: 0,
      ...style
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(40,28,16,0.35)", textAlign: "center", padding: "0 16px", lineHeight: 1.6 } }, label));
  }
  function ProgressBar({ value, color = "var(--accent-blue)", height = 3, style = {} }) {
    return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height, background: "rgba(40,28,16,0.1)", borderRadius: height, overflow: "hidden", ...style } }, /* @__PURE__ */ React.createElement("div", { style: {
      height: "100%",
      width: `${value}%`,
      background: color,
      borderRadius: height,
      transition: "width 0.6s ease"
    } }));
  }
  const STATUS_LABELS = {
    "complete": { label: "Complete", color: "#5a8a60", bg: "rgba(90,138,96,0.1)", dot: "#5a8a60" },
    "in-progress": { label: "In Progress", color: "#a07830", bg: "rgba(196,164,100,0.15)", dot: "#c4a464" },
    "upcoming": { label: "Upcoming", color: "#9c9080", bg: "rgba(40,28,16,0.06)", dot: "#c0b8a8" },
    "portfolio-ready": { label: "Portfolio Ready", color: "#5a8a60", bg: "rgba(90,138,96,0.1)", dot: "#5a8a60" },
    "research": { label: "Research", color: "#a07830", bg: "rgba(196,164,100,0.12)", dot: "#c4a464" },
    "prototype": { label: "Prototype", color: "#5a7a9a", bg: "rgba(123,154,181,0.12)", dot: "#7b9ab5" },
    "functional": { label: "Functional", color: "#5a8a60", bg: "rgba(138,170,144,0.12)", dot: "#8aaa90" },
    "polish": { label: "Polish", color: "#7a5a8a", bg: "rgba(180,140,200,0.12)", dot: "#b08ac0" }
  };
  function Badge({ label, size = "sm" }) {
    const cfg = STATUS_LABELS[label] || { label, color: "var(--text-dim)", bg: "rgba(40,28,16,0.06)", dot: "var(--text-dim)" };
    const px = size === "sm" ? "4px 9px" : "6px 12px";
    const fs = size === "sm" ? 10 : 11;
    return /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: px,
      borderRadius: 3,
      background: cfg.bg,
      color: cfg.color,
      fontFamily: "var(--font-mono)",
      fontSize: fs,
      letterSpacing: "0.07em",
      fontWeight: 600,
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    } }, /* @__PURE__ */ React.createElement("span", { style: { width: 4, height: 4, borderRadius: "50%", background: cfg.dot, display: "inline-block" } }), cfg.label || label);
  }
  function PhasePill({ phase }) {
    const p = PHASES[phase - 1];
    if (!p) return null;
    const colors = [
      { color: "#5a7a9a", bg: "rgba(123,154,181,0.12)" },
      { color: "#a07830", bg: "rgba(196,164,100,0.12)" },
      { color: "#5a8060", bg: "rgba(138,170,144,0.12)" }
    ];
    const c = colors[phase - 1] || colors[0];
    return /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "3px 9px",
      borderRadius: 2,
      background: c.bg,
      color: c.color,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.12em",
      fontWeight: 700,
      textTransform: "uppercase"
    } }, p.tag);
  }
  function SectionHeader({ label, title, subtitle, action, style = {}, center = false }) {
    return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 40, textAlign: center ? "center" : "left", ...style } }, label && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 10, textTransform: "uppercase" } }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: center ? "center" : "space-between", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 40, fontWeight: 800, fontStyle: "normal", color: "var(--text-primary)", margin: 0, letterSpacing: "-0.03em", lineHeight: 1, fontFamily: "var(--font-display)" } }, title), subtitle && /* @__PURE__ */ React.createElement("p", { style: { color: "var(--text-dim)", margin: "8px 0 0", fontSize: 14, fontFamily: "var(--font-body)", fontWeight: 400 } }, subtitle)), action));
  }
  function Card({ children, style = {}, onClick }) {
    const [hov, setHov] = React.useState(false);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        onClick,
        onMouseEnter: () => setHov(true),
        onMouseLeave: () => setHov(false),
        style: {
          background: "var(--surface-elevated)",
          border: `1px solid ${hov && onClick ? "var(--border-mid)" : "var(--border)"}`,
          borderRadius: 6,
          transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
          transform: hov && onClick ? "translateY(-2px)" : "none",
          boxShadow: hov && onClick ? "0 6px 24px rgba(40,28,16,0.1)" : "0 1px 4px rgba(40,28,16,0.04)",
          cursor: onClick ? "pointer" : "default",
          ...style
        }
      },
      children
    );
  }
  function Divider({ style = {} }) {
    return /* @__PURE__ */ React.createElement("div", { style: { height: 1, background: "var(--border)", width: "100%", ...style } });
  }
  function StatTile({ label, value, sub, color = "var(--text-primary)" }) {
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 24px", background: "var(--surface-elevated)", border: "1px solid var(--border)", borderRadius: 6, boxShadow: "0 1px 4px rgba(40,28,16,0.04)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", color: "var(--text-dim)", marginBottom: 10, textTransform: "uppercase" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 34, fontWeight: 600, color, fontFamily: "var(--font-display)", letterSpacing: "-0.02em", lineHeight: 1 } }, value), sub && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--text-dim)", marginTop: 6, fontFamily: "var(--font-body)" } }, sub));
  }
  function Btn({ children, variant = "primary", onClick, style = {}, small = false }) {
    const [hov, setHov] = React.useState(false);
    const base = {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: small ? "7px 14px" : "10px 22px",
      borderRadius: 4,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: small ? 12 : 13,
      fontWeight: 600,
      letterSpacing: "0.01em",
      transition: "all 0.15s"
    };
    const variants = {
      primary: { background: hov ? "#1c1712" : "#2a2018", color: "#f6f1e9", border: "1px solid transparent" },
      secondary: { background: hov ? "rgba(40,28,16,0.07)" : "transparent", color: "var(--text-secondary)", border: "1px solid var(--border-mid)" },
      ghost: { background: "transparent", color: hov ? "var(--text-primary)" : "var(--text-dim)", border: "none", padding: small ? "7px 8px" : "10px 10px" },
      amber: { background: hov ? "#b8942e" : "var(--accent-amber)", color: "#fff", border: "1px solid transparent" }
    };
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick,
        onMouseEnter: () => setHov(true),
        onMouseLeave: () => setHov(false),
        style: { ...base, ...variants[variant], ...style }
      },
      children
    );
  }
  function Tag({ label }) {
    return /* @__PURE__ */ React.createElement("span", { style: {
      padding: "3px 8px",
      borderRadius: 3,
      background: "rgba(40,28,16,0.06)",
      color: "var(--text-dim)",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.04em"
    } }, label);
  }
  function WeekRing({ completion, color = "var(--accent-blue)", size = 36 }) {
    const r = (size - 4) / 2;
    const circ = 2 * Math.PI * r;
    const dash = completion / 100 * circ;
    return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, style: { transform: "rotate(-90deg)", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("circle", { cx: size / 2, cy: size / 2, r, fill: "none", stroke: "rgba(40,28,16,0.1)", strokeWidth: 2.5 }), /* @__PURE__ */ React.createElement(
      "circle",
      {
        cx: size / 2,
        cy: size / 2,
        r,
        fill: "none",
        stroke: color,
        strokeWidth: 2.5,
        strokeDasharray: `${dash} ${circ}`,
        strokeLinecap: "round",
        style: { transition: "stroke-dasharray 0.6s ease" }
      }
    ));
  }
  function useLocalResources() {
    const STORAGE_KEY = "rtm_user_resources";
    const read = () => {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      } catch {
        return [];
      }
    };
    const [userResources, setUserResources] = React.useState(read);
    const addResource = (res) => {
      const next = [...read(), { ...res, id: `user-${Date.now()}`, userAdded: true }];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setUserResources(next);
    };
    const removeResource = (id) => {
      const next = read().filter((r) => r.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setUserResources(next);
    };
    const updateResource = (id, updates) => {
      const next = read().map((r) => r.id === id ? { ...r, ...updates } : r);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setUserResources(next);
    };
    const allResources = React.useMemo(() => [...RESOURCES, ...userResources], [userResources]);
    return { userResources, allResources, addResource, removeResource, updateResource };
  }
  function AddResourceForm({ weekNum, phase, onAdd, onClose }) {
    const w = WEEKS[weekNum - 1] || WEEKS[0];
    const ph = PHASES[phase - 1];
    const [form, setForm] = React.useState({
      title: "",
      type: "article",
      link: "",
      notes: "",
      tagInput: "",
      status: "in-progress"
    });
    const autoTags = {
      1: ["Houdini", "VEX", "Procedural"],
      2: ["Python", "Maya", "Pipeline"],
      3: ["Shaders", "UE5", "Optimization"]
    };
    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
    const handleAdd = () => {
      if (!form.title.trim()) return;
      const userTags = form.tagInput.split(",").map((t) => t.trim()).filter(Boolean);
      const tags = [.../* @__PURE__ */ new Set([...autoTags[phase] || [], ...userTags])];
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
        usedInWeek: weekNum
      });
      onClose();
    };
    const inputBase = {
      width: "100%",
      background: "var(--bg)",
      border: "1px solid var(--border-mid)",
      borderRadius: 4,
      padding: "8px 12px",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      outline: "none",
      boxSizing: "border-box"
    };
    return /* @__PURE__ */ React.createElement("div", { style: { background: "var(--surface-elevated)", border: "1px solid var(--border-mid)", borderRadius: 6, padding: 24, marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: ph?.color || "var(--text-dim)", letterSpacing: "0.14em", textTransform: "uppercase" } }, "Add Resource \xB7 Week ", weekNum, " \xB7 ", ph?.tag), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: "var(--text-dim)", cursor: "pointer", fontSize: 16, padding: 0 } }, "\xD7")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "span 2" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" } }, "Title *"), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: form.title,
        onChange: (e) => set("title", e.target.value),
        placeholder: "Resource title...",
        style: inputBase
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" } }, "Type"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: form.type,
        onChange: (e) => set("type", e.target.value),
        style: { ...inputBase, cursor: "pointer", appearance: "none" }
      },
      ["article", "video", "course", "documentation", "tutorial", "book", "reference"].map((t) => /* @__PURE__ */ React.createElement("option", { key: t, value: t }, t.charAt(0).toUpperCase() + t.slice(1)))
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" } }, "Status"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: form.status,
        onChange: (e) => set("status", e.target.value),
        style: { ...inputBase, cursor: "pointer", appearance: "none" }
      },
      ["not-started", "in-progress", "completed"].map((s) => /* @__PURE__ */ React.createElement("option", { key: s, value: s }, s === "not-started" ? "Not Started" : s === "in-progress" ? "In Progress" : "Completed"))
    )), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "span 2" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" } }, "URL"), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: form.link,
        onChange: (e) => set("link", e.target.value),
        placeholder: "https://...",
        style: inputBase
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "span 2" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" } }, "Notes"), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        value: form.notes,
        onChange: (e) => set("notes", e.target.value),
        placeholder: "Why is this useful? What section is relevant?",
        style: { ...inputBase, minHeight: 64, resize: "vertical" }
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "span 2" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 5, textTransform: "uppercase" } }, "Extra Tags ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--text-dim)", fontWeight: 400, textTransform: "none", letterSpacing: 0 } }, "\u2014 comma separated")), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: form.tagInput,
        onChange: (e) => set("tagInput", e.target.value),
        placeholder: `Auto-tagged: ${(autoTags[phase] || []).join(", ")}`,
        style: inputBase
      }
    ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8 } }, /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "secondary", onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "primary", onClick: handleAdd }, "Add Resource")));
  }
  const PROGRESS_KEY = "rtm_week_progress";
  function readProgress() {
    try {
      const stored = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
      const out = {};
      WEEKS.forEach((w) => {
        out[w.week] = stored[w.week] !== void 0 ? stored[w.week] : w.completion;
      });
      return out;
    } catch {
      return {};
    }
  }
  function computeStatus(completion) {
    if (completion >= 100) return "complete";
    if (completion > 0) return "in-progress";
    return "upcoming";
  }
  function useWeekProgress() {
    const [progress, setProgressState] = React.useState(readProgress);
    const setCompletion = (weekNum, value) => {
      const clamped = Math.max(0, Math.min(100, Math.round(value)));
      const next = { ...readProgress(), [weekNum]: clamped };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      setProgressState(next);
    };
    const getCompletion = (weekNum) => progress[weekNum] !== void 0 ? progress[weekNum] : 0;
    const getStatus = (weekNum) => computeStatus(getCompletion(weekNum));
    const liveWeeks = WEEKS.map((w) => ({
      ...w,
      completion: getCompletion(w.week),
      status: getStatus(w.week)
    }));
    return { progress, getCompletion, getStatus, setCompletion, liveWeeks };
  }
  Object.assign(window, { Placeholder, ProgressBar, Badge, PhasePill, SectionHeader, Card, Divider, StatTile, Btn, Tag, WeekRing, STATUS_LABELS, useLocalResources, AddResourceForm, useWeekProgress, computeStatus });
  function useCurrentWeek() {
    const stored = parseInt(localStorage.getItem("rtm_current_week") || String(STATS.currentWeek), 10);
    const [week, setWeekState] = React.useState(stored);
    const setWeek = (n) => {
      localStorage.setItem("rtm_current_week", String(n));
      setWeekState(n);
    };
    return [week, setWeek];
  }
  function Dashboard({ navigate }) {
    const [currentWeekNum, setCurrentWeek] = useCurrentWeek();
    const currentWeek = WEEKS[currentWeekNum - 1] || WEEKS[0];
    const phase = PHASES[currentWeek.phase - 1];
    const phaseColors = [
      { bg: "#eef2f6", accent: "#7b9ab5", text: "#3a5a70", dim: "#8aaac0" },
      { bg: "#f6f0e2", accent: "#c4a464", text: "#7a5a18", dim: "#c8a870" },
      { bg: "#edf3ee", accent: "#8aaa90", text: "#3a6040", dim: "#8aaa90" }
    ];
    const devlogs = [
      { week: 1, date: "Week 1", title: "VEX attribute transfers finally clicked", phase: 1, excerpt: "Spent day 3 deep in point attribute merging. Once I understood the foreach compile block, everything opened up." },
      { week: 2, date: "Week 2", title: "HDA authoring: building the ruin wall asset", phase: 1, excerpt: "Promoted 12 parameters to the digital asset interface. The modularity is starting to feel genuinely powerful." },
      { week: 3, date: "Week 3", title: "Terrain masking + scatter logic in progress", phase: 1, excerpt: "Slope and height masks are working. The erosion pass is still rough \u2014 need to revisit curvature-based falloff." }
    ];
    const headStyle = {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      letterSpacing: "-0.03em",
      fontStyle: "normal",
      lineHeight: 1
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", { style: {
      padding: "72px 80px 64px",
      borderBottom: "1px solid var(--border)",
      position: "relative",
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      right: -80,
      top: "50%",
      transform: "translateY(-50%)",
      width: 500,
      height: 500,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(123,154,181,0.12) 0%, transparent 70%)",
      pointerEvents: "none"
    } }), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 900, position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--text-dim)", marginBottom: 24, textTransform: "uppercase" } }, phase.tag, " \xB7 ", phase.name, " \xB7 12-Week Technical Artist Curriculum"), /* @__PURE__ */ React.createElement("h1", { style: { ...headStyle, fontSize: 88, margin: "0 0 24px", lineHeight: 0.92 } }, "Road To", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: phase.color } }, "Mastery.")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 500, margin: "0 0 40px" } }, "A structured 12-week curriculum for Technical Artists \u2014 Houdini, Python pipeline tools, and shader optimization. Documented week by week."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Btn, { onClick: () => navigate("timeline") }, "View Curriculum"), /* @__PURE__ */ React.createElement(Btn, { variant: "secondary", onClick: () => navigate("week-detail", { weekNum: currentWeekNum }) }, "Week ", currentWeekNum, " Log \u2192"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 56 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 10, alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" } }, "12-Week Progress"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" } }, Math.round(WEEKS.filter((w) => w.status === "complete").length / 12 * 100), "% complete")), /* @__PURE__ */ React.createElement(ProgressBar, { value: Math.round(WEEKS.filter((w) => w.status === "complete").length / 12 * 100), color: phase.color, height: 3 }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", marginTop: 8 } }, PHASES.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { flex: 1, paddingRight: i < 2 ? 2 : 0 } }, /* @__PURE__ */ React.createElement("div", { style: { height: 1, background: phaseColors[i].accent, opacity: 0.45 } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: phaseColors[i].dim, letterSpacing: "0.08em", marginTop: 5, display: "block" } }, p.tag)))))), /* @__PURE__ */ React.createElement("section", { style: { padding: "40px 80px", borderBottom: "1px solid var(--border)", background: "var(--surface)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 8, textTransform: "uppercase" } }, "I'm currently on"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1 } }, "Week ", currentWeekNum, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 13, color: "var(--text-dim)", marginLeft: 10, letterSpacing: 0 } }, WEEKS[currentWeekNum - 1]?.title))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, WEEKS.map((w) => {
      const p = PHASES[w.phase - 1];
      const isCurrent = w.week === currentWeekNum;
      const isDone = w.status === "complete";
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: w.week,
          onClick: () => setCurrentWeek(w.week),
          style: {
            width: 44,
            height: 44,
            borderRadius: 4,
            border: `2px solid ${isCurrent ? p.color : isDone ? p.color + "55" : "var(--border)"}`,
            background: isCurrent ? p.color : isDone ? p.colorDim : "var(--surface-elevated)",
            color: isCurrent ? "#fff" : isDone ? p.color : "var(--text-dim)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.15s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1
          },
          title: w.title,
          onMouseEnter: (e) => {
            if (!isCurrent) e.currentTarget.style.borderColor = p.color;
          },
          onMouseLeave: (e) => {
            if (!isCurrent) e.currentTarget.style.borderColor = isDone ? p.color + "55" : "var(--border)";
          }
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, lineHeight: 1 } }, "W", w.week),
        isCurrent && /* @__PURE__ */ React.createElement("span", { style: { width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.7)", marginTop: 1 } }),
        isDone && !isCurrent && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 8, lineHeight: 1, opacity: 0.7 } }, "\u2713")
      );
    })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 10 } }, [["Done", "#5a8a60"], ["Current", "#7b9ab5"], ["Upcoming", "#c0b8a8"]].map(([label, color]) => /* @__PURE__ */ React.createElement("div", { key: label, style: { display: "flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 8, height: 8, borderRadius: 2, background: color } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.08em", textTransform: "uppercase" } }, label))))))), /* @__PURE__ */ React.createElement("section", { style: { padding: "72px 80px", borderBottom: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 16, textTransform: "uppercase" } }, "Current Focus"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 20 } }, /* @__PURE__ */ React.createElement(PhasePill, { phase: currentWeek.phase }), /* @__PURE__ */ React.createElement(Badge, { label: currentWeek.status })), /* @__PURE__ */ React.createElement("h2", { style: { ...headStyle, fontSize: 40, margin: "0 0 12px" } }, currentWeek.title), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 28px", maxWidth: 420 } }, currentWeek.objectives.join(" \xB7 ")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 32, maxWidth: 340 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" } }, "Week Completion"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" } }, currentWeek.completion, "%")), /* @__PURE__ */ React.createElement(ProgressBar, { value: currentWeek.completion, color: phase.color, height: 3 })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 24 } }, [["Tasks", currentWeek.tasks.length], ["Objectives", currentWeek.objectives.length]].map(([label, val]) => /* @__PURE__ */ React.createElement("div", { key: label }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1 } }, val)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 32 } }, /* @__PURE__ */ React.createElement(Btn, { onClick: () => navigate("week-detail", { weekNum: currentWeekNum }) }, "Open Week Log \u2192"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, /* @__PURE__ */ React.createElement(Placeholder, { label: "Recent screenshot", width: "100%", height: 200, color: "#ddd8cc", style: { width: "100%", gridColumn: "span 2", borderRadius: 4 } }), /* @__PURE__ */ React.createElement(Placeholder, { label: "In progress", width: "100%", height: 130, color: "#ddd8cc", style: { width: "100%", borderRadius: 4 } }), /* @__PURE__ */ React.createElement(Placeholder, { label: "Node graph", width: "100%", height: 130, color: "#ddd8cc", style: { width: "100%", borderRadius: 4 } })))), /* @__PURE__ */ React.createElement("section", { style: { padding: "72px 80px", borderBottom: "1px solid var(--border)", background: "var(--surface)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" } }, "Curriculum"), /* @__PURE__ */ React.createElement("h2", { style: { ...headStyle, fontSize: 48 } }, "Three Chapters.")), /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", onClick: () => navigate("timeline") }, "All 12 weeks \u2192")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 } }, PHASES.map((p, i) => {
      const c = phaseColors[i];
      const done = WEEKS.filter((w) => w.phase === p.id && w.status === "complete").length;
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: p.id,
          onClick: () => navigate("timeline"),
          style: {
            background: c.bg,
            padding: "40px 36px 36px",
            borderRadius: i === 0 ? "6px 0 0 6px" : i === 2 ? "0 6px 6px 0" : 0,
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.2s",
            border: "1px solid rgba(40,28,16,0.05)"
          },
          onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-3px)",
          onMouseLeave: (e) => e.currentTarget.style.transform = "none"
        },
        /* @__PURE__ */ React.createElement("div", { style: {
          fontFamily: "var(--font-display)",
          fontSize: 110,
          fontWeight: 800,
          color: c.accent,
          opacity: 0.1,
          lineHeight: 1,
          position: "absolute",
          top: 8,
          right: 16,
          userSelect: "none",
          letterSpacing: "-0.04em"
        } }, "0", p.id),
        /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: c.dim, marginBottom: 16, letterSpacing: "0.18em", textTransform: "uppercase" } }, p.tag),
        /* @__PURE__ */ React.createElement("h3", { style: { ...headStyle, fontSize: 22, color: c.text, margin: "0 0 10px", maxWidth: 200 } }, p.name),
        /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: c.text, opacity: 0.65, lineHeight: 1.6, margin: "0 0 28px" } }, "Goal: ", p.goal),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement(WeekRing, { completion: done / 4 * 100, color: c.accent, size: 40 }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: c.dim, letterSpacing: "0.1em", textTransform: "uppercase" } }, "Progress"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: c.text, letterSpacing: "-0.02em" } }, done, "/4 weeks")))
      );
    }))), /* @__PURE__ */ React.createElement("section", { style: { padding: "72px 80px", borderBottom: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" } }, "Documentation"), /* @__PURE__ */ React.createElement("h2", { style: { ...headStyle, fontSize: 48 } }, "Recent Devlogs.")), /* @__PURE__ */ React.createElement(Btn, { variant: "secondary", small: true, onClick: () => navigate("week-detail", { weekNum: currentWeekNum }) }, "All entries \u2192")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 } }, devlogs.map((d, i) => {
      const c = phaseColors[d.phase - 1];
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: i,
          onClick: () => navigate("week-detail", { weekNum: d.week }),
          style: {
            cursor: "pointer",
            paddingTop: 24,
            borderTop: `3px solid ${c.accent}`,
            transition: "opacity 0.15s"
          },
          onMouseEnter: (e) => e.currentTarget.style.opacity = "0.7",
          onMouseLeave: (e) => e.currentTarget.style.opacity = "1"
        },
        /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", color: c.dim, marginBottom: 12, textTransform: "uppercase" } }, d.date, " \xB7 ", PHASES[d.phase - 1].tag),
        /* @__PURE__ */ React.createElement("h3", { style: { ...headStyle, fontSize: 18, margin: "0 0 10px", lineHeight: 1.25 } }, d.title),
        /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: "var(--text-dim)", lineHeight: 1.65, margin: 0 } }, d.excerpt)
      );
    }))), /* @__PURE__ */ React.createElement("section", { style: { padding: "72px 80px", borderBottom: "1px solid var(--border)", background: "var(--surface)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" } }, "Portfolio"), /* @__PURE__ */ React.createElement("h2", { style: { ...headStyle, fontSize: 48 } }, "Final Projects.")), /* @__PURE__ */ React.createElement(Btn, { variant: "secondary", small: true, onClick: () => navigate("portfolio") }, "View portfolio \u2192")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, /* @__PURE__ */ React.createElement(
      "div",
      {
        onClick: () => navigate("portfolio"),
        style: {
          gridRow: "span 2",
          cursor: "pointer",
          overflow: "hidden",
          borderRadius: 6,
          border: "1px solid var(--border)",
          background: "var(--surface-elevated)",
          transition: "transform 0.2s, box-shadow 0.2s"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 12px 36px rgba(40,28,16,0.12)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "none";
        }
      },
      /* @__PURE__ */ React.createElement(Placeholder, { label: "Procedural RPG Environment Generator \u2014 Final renders", width: "100%", height: 260, color: "#c8d8e8", style: { width: "100%", borderRadius: "6px 6px 0 0" } }),
      /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 24px 28px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 12 } }, /* @__PURE__ */ React.createElement(PhasePill, { phase: 1 }), /* @__PURE__ */ React.createElement(Badge, { label: "prototype" })), /* @__PURE__ */ React.createElement("h3", { style: { ...headStyle, fontSize: 20, margin: "0 0 8px", lineHeight: 1.2 } }, "Procedural RPG Environment Generator"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: "var(--text-dim)", lineHeight: 1.6 } }, "Houdini HDA toolkit for generating ruin environments procedurally with terrain-aware scatter."))
    ), PORTFOLIO_PROJECTS.slice(1).map((proj) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: proj.id,
        onClick: () => navigate("portfolio"),
        style: {
          cursor: "pointer",
          overflow: "hidden",
          borderRadius: 6,
          border: "1px solid var(--border)",
          background: "var(--surface-elevated)",
          display: "flex",
          transition: "transform 0.2s, box-shadow 0.2s"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(40,28,16,0.1)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "none";
        }
      },
      /* @__PURE__ */ React.createElement(Placeholder, { label: "", width: 130, height: "100%", color: proj.phase === 2 ? "#ede8d0" : "#d8ede0", style: { width: 130, flexShrink: 0, borderRadius: "6px 0 0 6px" } }),
      /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 10 } }, /* @__PURE__ */ React.createElement(PhasePill, { phase: proj.phase })), /* @__PURE__ */ React.createElement("h3", { style: { ...headStyle, fontSize: 15, margin: "0 0 6px", lineHeight: 1.25 } }, proj.title), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 11, color: "var(--text-dim)", lineHeight: 1.5 } }, proj.subtitle))
    )))), /* @__PURE__ */ React.createElement("section", { style: { padding: "72px 80px 80px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" } }, "Library"), /* @__PURE__ */ React.createElement("h2", { style: { ...headStyle, fontSize: 40 } }, "Resources.")), /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", onClick: () => navigate("resources") }, "Browse library \u2192")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 } }, RESOURCES.slice(0, 4).map((r) => {
      const typeColor = { course: "#7b9ab5", documentation: "#8aaa90", article: "#c4a464", video: "#c08070", tutorial: "#a090c0" }[r.type] || "var(--text-dim)";
      return /* @__PURE__ */ React.createElement("div", { key: r.id, style: { padding: 20, borderRadius: 6, background: "var(--surface-elevated)", border: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 8, padding: "2px 6px", borderRadius: 2, background: `${typeColor}18`, color: typeColor, letterSpacing: "0.1em", textTransform: "uppercase" } }, r.type), /* @__PURE__ */ React.createElement(PhasePill, { phase: r.phase })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: 6 } }, r.title), r.notes && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--text-dim)", lineHeight: 1.5 } }, r.notes));
    }))), /* @__PURE__ */ React.createElement("footer", { style: { padding: "28px 80px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: "var(--text-primary)", marginBottom: 3, letterSpacing: "-0.02em" } }, "ROAD TO MASTERY"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.14em" } }, "12-WEEK TECHNICAL ARTIST CURRICULUM \xB7 2026")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 24 } }, ["Curriculum", "Portfolio", "Resources", "Case Study"].map((l) => /* @__PURE__ */ React.createElement("span", { key: l, style: { fontSize: 12, color: "var(--text-dim)", cursor: "pointer", fontFamily: "var(--font-body)" } }, l)))));
  }
  window.Dashboard = Dashboard;
  function Timeline({ navigate }) {
    const [filter, setFilter] = React.useState(0);
    const filtered = filter === 0 ? WEEKS : WEEKS.filter((w) => w.phase === filter);
    return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1100, margin: "0 auto", padding: "56px 48px 96px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" } }, "Curriculum"), /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: "var(--font-display)", fontSize: 60, fontWeight: 600, fontStyle: "italic", margin: "0 0 8px", letterSpacing: "-0.02em", lineHeight: 1 } }, "12-Week Timeline"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--text-dim)", fontSize: 14, marginBottom: 40 } }, "Three phases \xB7 Three portfolio-ready deliverables")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 56, borderBottom: "1px solid var(--border)", paddingBottom: 24, flexWrap: "wrap" } }, [{ id: 0, tag: "ALL PHASES", color: "var(--text-dim)" }, ...PHASES].map((p) => {
      const active = filter === p.id;
      return /* @__PURE__ */ React.createElement("button", { key: p.id, onClick: () => setFilter(p.id), style: {
        padding: "7px 16px",
        borderRadius: 4,
        border: `1px solid ${active ? p.color || "var(--text-primary)" : "var(--border)"}`,
        background: active ? p.colorDim || "rgba(40,28,16,0.06)" : "transparent",
        color: active ? p.color || "var(--text-primary)" : "var(--text-dim)",
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.1em",
        cursor: "pointer",
        transition: "all 0.15s"
      } }, p.tag || "ALL PHASES");
    })), PHASES.filter((p) => filter === 0 || p.id === filter).map((phase) => {
      const phaseWeeks = filtered.filter((w) => w.phase === phase.id);
      const done = WEEKS.filter((w) => w.phase === phase.id && w.status === "complete").length;
      const pct = Math.round(done / 4 * 100);
      return /* @__PURE__ */ React.createElement("div", { key: phase.id, style: { marginBottom: 64 } }, /* @__PURE__ */ React.createElement("div", { style: {
        padding: "28px 32px",
        borderRadius: "6px 6px 0 0",
        background: phase.colorDim,
        border: `1px solid ${phase.color}33`,
        borderBottom: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 20
      } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: phase.color, letterSpacing: "0.18em", marginBottom: 8, textTransform: "uppercase" } }, phase.tag), /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, fontStyle: "italic", color: "var(--text-primary)", margin: 0 } }, phase.name), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--text-dim)", fontSize: 13, margin: "6px 0 0", fontFamily: "var(--font-body)" } }, "Goal: ", phase.goal)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 28, fontStyle: "italic", fontWeight: 600, color: phase.color } }, pct, "%"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em" } }, done, "/4 weeks")), /* @__PURE__ */ React.createElement(WeekRing, { completion: pct, color: phase.color, size: 52 }))), /* @__PURE__ */ React.createElement("div", { style: { border: `1px solid ${phase.color}22`, borderTop: "none", borderRadius: "0 0 6px 6px", overflow: "hidden" } }, phaseWeeks.map((w, i) => {
        const isLast = i === phaseWeeks.length - 1;
        const isCurrent = w.week === STATS.currentWeek;
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: w.week,
            onClick: () => navigate("week-detail", { weekNum: w.week }),
            onMouseEnter: (e) => e.currentTarget.style.background = "rgba(40,28,16,0.025)",
            onMouseLeave: (e) => e.currentTarget.style.background = isCurrent ? "rgba(40,28,16,0.02)" : "var(--surface-elevated)",
            style: {
              display: "grid",
              gridTemplateColumns: "56px 1fr auto",
              borderBottom: isLast ? "none" : "1px solid var(--border)",
              background: isCurrent ? "rgba(40,28,16,0.02)" : "var(--surface-elevated)",
              cursor: "pointer",
              transition: "background 0.15s"
            }
          },
          /* @__PURE__ */ React.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px 0",
            borderRight: "1px solid var(--border)",
            background: isCurrent ? phase.colorDim : "transparent"
          } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--text-dim)", letterSpacing: "0.08em" } }, "W"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, fontStyle: "italic", color: phase.color, lineHeight: 1 } }, w.week)),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 28px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "var(--text-primary)" } }, w.title), isCurrent && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 8, padding: "2px 6px", background: phase.colorDim, color: phase.color, borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase" } }, "Current")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--text-dim)", lineHeight: 1.5, marginBottom: w.completion > 0 ? 10 : 0 } }, w.objectives.slice(0, 2).join("  \xB7  ")), w.completion > 0 && /* @__PURE__ */ React.createElement(ProgressBar, { value: w.completion, color: phase.color, height: 2, style: { maxWidth: 200 } }), w.notes && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, fontSize: 12, color: "var(--text-dim)", fontStyle: "italic", borderLeft: `2px solid ${phase.color}44`, paddingLeft: 10, fontFamily: "var(--font-display)" } }, w.notes)),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 24px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between", gap: 10, minWidth: 180 } }, /* @__PURE__ */ React.createElement(Badge, { label: w.status }), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" } }, "Output"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--text-dim)", maxWidth: 160, lineHeight: 1.4, textAlign: "right" } }, w.output)), /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "ghost" }, "Open log \u2192"))
        );
      })));
    }));
  }
  window.Timeline = Timeline;
  function WeekDetail({ navigate, weekNum = 3 }) {
    const w = WEEKS.find((x) => x.week === weekNum) || WEEKS[2];
    const phase = PHASES[w.phase - 1];
    const [tasks, setTasks] = React.useState({
      learn: w.objectives.map((o, i) => ({ id: i, label: o, done: w.completion === 100 })),
      build: w.tasks.map((t, i) => ({ id: i, label: t, done: w.completion === 100 }))
    });
    const [notes, setNotes] = React.useState(w.notes || "");
    const [tab, setTab] = React.useState("overview");
    const [completion, setCompletion] = React.useState(w.completion);
    const [devlogs, setDevlogs] = React.useState([
      { id: 1, day: "Day 1", note: "Started SOP setup. Attribute wrangle basics solid." },
      { id: 2, day: "Day 3", note: "Slope masking working on terrain. Falloff still needs tuning." }
    ]);
    const [newEntry, setNewEntry] = React.useState("");
    const [newDay, setNewDay] = React.useState("");
    const addDevlog = () => {
      if (!newEntry.trim()) return;
      setDevlogs((prev) => [...prev, { id: Date.now(), day: newDay.trim() || `Day ${prev.length + 1}`, note: newEntry.trim() }]);
      setNewEntry("");
      setNewDay("");
    };
    const removeDevlog = (id) => setDevlogs((prev) => prev.filter((e) => e.id !== id));
    const toggleTask = (group, id) => setTasks((prev) => ({ ...prev, [group]: prev[group].map((t) => t.id === id ? { ...t, done: !t.done } : t) }));
    const { allResources, addResource, removeResource } = useLocalResources();
    const [showAddResource, setShowAddResource] = React.useState(false);
    const tabs = ["overview", "progress", "gallery", "resources"];
    const inputStyle = {
      width: "100%",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: 4,
      padding: 12,
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: 1.6,
      resize: "vertical",
      outline: "none",
      boxSizing: "border-box"
    };
    return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1e3, margin: "0 auto", padding: "48px 48px 96px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("timeline"), style: {
      background: "none",
      border: "none",
      color: "var(--text-dim)",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.12em",
      marginBottom: 40,
      padding: 0
    } }, "\u2190 BACK TO TIMELINE"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center", marginBottom: 16, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(PhasePill, { phase: w.phase }), /* @__PURE__ */ React.createElement(Badge, { label: w.status }), w.week === STATS.currentWeek && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: phase.color, padding: "3px 8px", background: phase.colorDim, borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase" } }, "Current Week")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", marginBottom: 8, letterSpacing: "0.1em" } }, "WEEK ", w.week, " OF 12"), /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 600, fontStyle: "italic", margin: "0 0 20px", letterSpacing: "-0.02em", lineHeight: 1.05 } }, w.title), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 360 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.1em" } }, "COMPLETION"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: 16, fontStyle: "italic", color: "var(--text-primary)" } }, completion, "%")), /* @__PURE__ */ React.createElement(ProgressBar, { value: completion, color: phase.color, height: 3 }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "range",
        min: 0,
        max: 100,
        step: 5,
        value: completion,
        onChange: (e) => setCompletion(Number(e.target.value)),
        style: {
          width: "100%",
          marginTop: 10,
          accentColor: phase.color,
          cursor: "pointer",
          height: 3
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 2 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)" } }, "0%"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)" } }, "100%")))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 2, borderBottom: "1px solid var(--border)", marginBottom: 40 } }, tabs.map((t) => /* @__PURE__ */ React.createElement("button", { key: t, onClick: () => setTab(t), style: {
      padding: "9px 18px",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: tab === t ? phase.color : "var(--text-dim)",
      borderBottom: `2px solid ${tab === t ? phase.color : "transparent"}`,
      marginBottom: -1,
      transition: "all 0.15s"
    } }, t))), tab === "overview" && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } }, /* @__PURE__ */ React.createElement(Card, { style: { padding: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: phase.color, letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" } }, "Learning Objectives"), tasks.learn.map((t) => /* @__PURE__ */ React.createElement("label", { key: t.id, style: { display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { onClick: () => toggleTask("learn", t.id), style: {
      width: 18,
      height: 18,
      borderRadius: 3,
      border: `1.5px solid ${t.done ? phase.color : "var(--border-mid)"}`,
      background: t.done ? phase.colorDim : "transparent",
      flexShrink: 0,
      marginTop: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.15s"
    } }, t.done && /* @__PURE__ */ React.createElement("span", { style: { color: phase.color, fontSize: 10, fontWeight: 700 } }, "\u2713")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: t.done ? "var(--text-dim)" : "var(--text-primary)", textDecoration: t.done ? "line-through" : "none", lineHeight: 1.5 } }, t.label)))), /* @__PURE__ */ React.createElement(Card, { style: { padding: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "#c4a464", letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" } }, "Build Tasks"), tasks.build.map((t) => /* @__PURE__ */ React.createElement("label", { key: t.id, style: { display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { onClick: () => toggleTask("build", t.id), style: {
      width: 18,
      height: 18,
      borderRadius: 3,
      border: `1.5px solid ${t.done ? "#c4a464" : "var(--border-mid)"}`,
      background: t.done ? "rgba(196,164,100,0.12)" : "transparent",
      flexShrink: 0,
      marginTop: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.15s"
    } }, t.done && /* @__PURE__ */ React.createElement("span", { style: { color: "#c4a464", fontSize: 10, fontWeight: 700 } }, "\u2713")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: t.done ? "var(--text-dim)" : "var(--text-primary)", textDecoration: t.done ? "line-through" : "none", lineHeight: 1.5 } }, t.label)))), /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 20px", borderLeft: `3px solid ${phase.color}`, background: phase.colorDim, borderRadius: "0 4px 4px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.12em", marginBottom: 6, textTransform: "uppercase" } }, "Expected Output"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 17, fontStyle: "italic", color: "var(--text-primary)", lineHeight: 1.4 } }, w.output))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } }, /* @__PURE__ */ React.createElement(Card, { style: { padding: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "#8aaa90", letterSpacing: "0.14em", marginBottom: 12, textTransform: "uppercase" } }, "Progress Update"), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        value: notes,
        onChange: (e) => setNotes(e.target.value),
        placeholder: "Document your progress this week...",
        style: { ...inputStyle, minHeight: 110 }
      }
    )), /* @__PURE__ */ React.createElement(Card, { style: { padding: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "#b04040", letterSpacing: "0.14em", marginBottom: 12, textTransform: "uppercase" } }, "Problems Encountered"), /* @__PURE__ */ React.createElement("textarea", { placeholder: "What's blocking you?", style: { ...inputStyle, minHeight: 70 } }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "#5a8060", letterSpacing: "0.14em", margin: "16px 0 12px", textTransform: "uppercase" } }, "Breakthroughs"), /* @__PURE__ */ React.createElement("textarea", { placeholder: "What clicked? What did you solve?", style: { ...inputStyle, minHeight: 70 } })), /* @__PURE__ */ React.createElement(Card, { style: { padding: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: phase.color, letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" } }, "Weekly Reflection"), ["What I learned", "What I need to improve", "What carries into next week"].map((q, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 14, fontStyle: "italic", color: "var(--text-secondary)", marginBottom: 6 } }, q), /* @__PURE__ */ React.createElement("textarea", { placeholder: `${q}...`, style: { ...inputStyle, minHeight: 52 } })))))), tab === "gallery" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 28 } }, [...Array(6)].map((_, i) => /* @__PURE__ */ React.createElement(Placeholder, { key: i, label: i < 2 ? "Screenshot" : "Drop here", width: "100%", height: 170, color: "#e0d8cc", style: { width: "100%", borderRadius: 6, border: "1px dashed var(--border-mid)" } }))), /* @__PURE__ */ React.createElement("div", { style: { border: "2px dashed var(--border-mid)", borderRadius: 6, padding: 40, textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", marginBottom: 14, letterSpacing: "0.12em", textTransform: "uppercase" } }, "Upload screenshots \xB7 videos \xB7 node graphs"), /* @__PURE__ */ React.createElement(Btn, { variant: "secondary" }, "+ Add Files"))), tab === "progress" && /* @__PURE__ */ React.createElement(Card, { style: { padding: 32 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.14em", marginBottom: 24, textTransform: "uppercase" } }, "Devlog Entries"), devlogs.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 15, fontStyle: "italic", color: "var(--text-dim)", marginBottom: 24 } }, "No entries yet \u2014 add one below."), devlogs.map((e) => /* @__PURE__ */ React.createElement("div", { key: e.id, style: { display: "flex", gap: 20, paddingBottom: 20, borderBottom: "1px solid var(--border)", marginBottom: 20, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 14, fontStyle: "italic", color: phase.color, minWidth: 52, paddingTop: 1 } }, e.day), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, flex: 1 } }, e.note), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => removeDevlog(e.id),
        title: "Remove entry",
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-dim)",
          fontSize: 15,
          lineHeight: 1,
          padding: "2px 4px",
          borderRadius: 3,
          transition: "color 0.15s, background 0.15s",
          flexShrink: 0
        },
        onMouseEnter: (e2) => {
          e2.currentTarget.style.color = "#b04040";
          e2.currentTarget.style.background = "rgba(176,64,64,0.08)";
        },
        onMouseLeave: (e2) => {
          e2.currentTarget.style.color = "var(--text-dim)";
          e2.currentTarget.style.background = "none";
        }
      },
      "\u2715"
    ))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: devlogs.length > 0 ? "none" : void 0, paddingTop: devlogs.length > 0 ? 4 : 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 10 } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: newDay,
        onChange: (e) => setNewDay(e.target.value),
        placeholder: "Label (e.g. Day 4)",
        style: {
          width: 130,
          padding: "9px 12px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 4,
          color: "var(--text-primary)",
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: 13,
          outline: "none"
        }
      }
    ), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        value: newEntry,
        onChange: (e) => setNewEntry(e.target.value),
        placeholder: "What did you work on today?",
        onKeyDown: (e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) addDevlog();
        },
        style: {
          flex: 1,
          minHeight: 70,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 4,
          padding: "9px 12px",
          color: "var(--text-primary)",
          fontFamily: "var(--font-body)",
          fontSize: 13,
          lineHeight: 1.6,
          resize: "vertical",
          outline: "none",
          boxSizing: "border-box"
        }
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "secondary", onClick: addDevlog }, "+ Add Entry"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.08em" } }, "\u2318 + Enter to submit")))), tab === "resources" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 0 } }, showAddResource && /* @__PURE__ */ React.createElement(AddResourceForm, { weekNum: w.week, phase: w.phase, onAdd: addResource, onClose: () => setShowAddResource(false) }), !showAddResource && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "primary", onClick: () => setShowAddResource(true) }, "+ Add Resource")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, allResources.filter((r) => r.week === w.week || r.phase === w.phase && !r.userAdded).length === 0 && !showAddResource && /* @__PURE__ */ React.createElement("div", { style: { padding: "32px 0", textAlign: "center", color: "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em" } }, "NO RESOURCES YET \u2014 add your first one above"), allResources.filter((r) => r.week === w.week || r.phase === w.phase && !r.userAdded).map((r) => {
      const statusMap = { completed: "complete", "in-progress": "in-progress", "not-started": "upcoming" };
      const typeColor = { course: "var(--accent-blue)", documentation: "var(--accent-teal)", article: "var(--accent-amber)", video: "#c08070", tutorial: "#a090c0" }[r.type] || "var(--text-dim)";
      return /* @__PURE__ */ React.createElement(Card, { key: r.id, style: { padding: "16px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 6, flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 6px", borderRadius: 2, background: `${typeColor}18`, color: typeColor, letterSpacing: "0.1em", textTransform: "uppercase" } }, r.type), r.userAdded && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 6px", borderRadius: 2, background: "rgba(78,143,104,0.1)", color: "#4e8f68", letterSpacing: "0.1em", textTransform: "uppercase" } }, "Added Week ", r.usedInWeek || r.week), /* @__PURE__ */ React.createElement(Badge, { label: statusMap[r.status] || "upcoming" })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 } }, r.title), r.notes && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--text-dim)", lineHeight: 1.5, marginBottom: 6 } }, r.notes), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" } }, (r.tags || []).map((t) => /* @__PURE__ */ React.createElement(Tag, { key: t, label: t })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexShrink: 0 } }, r.link && r.link !== "#" && /* @__PURE__ */ React.createElement("a", { href: r.link, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "secondary" }, "Open \u2192")), r.userAdded && /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "ghost", onClick: () => removeResource(r.id) }, "Remove"))));
    }))));
  }
  window.WeekDetail = WeekDetail;
  function Resources({ navigate }) {
    const { allResources, removeResource, updateResource } = useLocalResources();
    const [filterTool, setFilterTool] = React.useState("All");
    const [filterStatus, setFilterStatus] = React.useState("All");
    const [filterSource, setFilterSource] = React.useState("All");
    const [search, setSearch] = React.useState("");
    const tools = ["All", "Houdini", "Maya", "Python", "Shaders", "Optimization", "General"];
    const statuses = ["All", "not-started", "in-progress", "completed"];
    const filtered = allResources.filter((r) => {
      const toolMatch = filterTool === "All" || r.tool === filterTool || (r.tags || []).includes(filterTool);
      const statusMatch = filterStatus === "All" || r.status === filterStatus;
      const sourceMatch = filterSource === "All" || (filterSource === "Added" ? r.userAdded : !r.userAdded);
      const searchMatch = !search || r.title.toLowerCase().includes(search.toLowerCase()) || (r.tags || []).some((t) => t.toLowerCase().includes(search.toLowerCase())) || (r.notes || "").toLowerCase().includes(search.toLowerCase());
      return toolMatch && statusMatch && sourceMatch && searchMatch;
    });
    const typeColor = {
      course: "var(--accent-blue)",
      documentation: "var(--accent-teal)",
      article: "var(--accent-amber)",
      video: "#c08070",
      tutorial: "#a090c0",
      reference: "var(--text-dim)",
      book: "#b07850"
    };
    const statusMap = { completed: "complete", "in-progress": "in-progress", "not-started": "upcoming" };
    const userAddedCount = allResources.filter((r) => r.userAdded).length;
    return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1100, margin: "0 auto", padding: "56px 48px 96px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 40 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" } }, "Library"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 800, margin: 0, letterSpacing: "-0.03em", lineHeight: 1 } }, "Resources"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--text-dim)", fontSize: 13, margin: "8px 0 0" } }, allResources.length, " total \xB7 ", userAddedCount, " added by you")))), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: search,
        onChange: (e) => setSearch(e.target.value),
        placeholder: "Search resources, tags, notes...",
        style: {
          width: "100%",
          maxWidth: 420,
          padding: "10px 16px",
          marginBottom: 20,
          display: "block",
          background: "var(--surface-elevated)",
          border: "1px solid var(--border-mid)",
          borderRadius: 4,
          color: "var(--text-primary)",
          fontFamily: "var(--font-body)",
          fontSize: 13,
          outline: "none"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, marginBottom: 8, flexWrap: "wrap" } }, [["All", `All (${allResources.length})`], ["Built-in", "Built-in"], ["Added", `My Additions (${userAddedCount})`]].map(([val, label]) => /* @__PURE__ */ React.createElement("button", { key: val, onClick: () => setFilterSource(val), style: {
      padding: "5px 12px",
      borderRadius: 3,
      border: `1px solid ${filterSource === val ? "var(--border-mid)" : "var(--border)"}`,
      background: filterSource === val ? "rgba(20,18,14,0.07)" : "transparent",
      color: filterSource === val ? "var(--text-primary)" : "var(--text-dim)",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.08em",
      cursor: "pointer",
      textTransform: "uppercase"
    } }, label))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, marginBottom: 8, flexWrap: "wrap" } }, tools.map((t) => /* @__PURE__ */ React.createElement("button", { key: t, onClick: () => setFilterTool(t), style: {
      padding: "5px 12px",
      borderRadius: 3,
      border: `1px solid ${filterTool === t ? "var(--accent-blue)" : "var(--border)"}`,
      background: filterTool === t ? "rgba(90,135,168,0.1)" : "transparent",
      color: filterTool === t ? "var(--accent-blue)" : "var(--text-dim)",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.08em",
      cursor: "pointer",
      textTransform: "uppercase"
    } }, t))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, marginBottom: 36, flexWrap: "wrap" } }, statuses.map((s) => {
      const label = s === "All" ? "All Status" : s === "not-started" ? "Not Started" : s === "in-progress" ? "In Progress" : "Completed";
      return /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => setFilterStatus(s), style: {
        padding: "5px 12px",
        borderRadius: 3,
        border: `1px solid ${filterStatus === s ? "var(--border-mid)" : "var(--border)"}`,
        background: filterStatus === s ? "rgba(20,18,14,0.05)" : "transparent",
        color: filterStatus === s ? "var(--text-primary)" : "var(--text-dim)",
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.08em",
        cursor: "pointer",
        textTransform: "uppercase"
      } }, label);
    })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, filtered.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: 48, textAlign: "center", color: "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em" } }, "NO RESOURCES MATCH \u2014 try adjusting filters"), filtered.map((r) => {
      const tc = typeColor[r.type] || "var(--text-dim)";
      const stars = r.rating > 0 ? "\u2605".repeat(r.rating) + "\u2606".repeat(5 - r.rating) : null;
      const weekData = r.usedInWeek ? WEEKS[r.usedInWeek - 1] : r.week ? WEEKS[r.week - 1] : null;
      const phaseData = r.phase ? PHASES[r.phase - 1] : null;
      return /* @__PURE__ */ React.createElement(Card, { key: r.id, style: { padding: "18px 22px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 7, marginBottom: 8, flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 6px", borderRadius: 2, background: `${tc}18`, color: tc, letterSpacing: "0.1em", textTransform: "uppercase" } }, r.type), r.phase && /* @__PURE__ */ React.createElement(PhasePill, { phase: r.phase }), (r.usedInWeek || r.week) && /* @__PURE__ */ React.createElement("button", { onClick: () => navigate && navigate("week-detail", { weekNum: r.usedInWeek || r.week }), style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      } }, /* @__PURE__ */ React.createElement("span", { style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        padding: "2px 8px",
        borderRadius: 2,
        background: r.userAdded ? "rgba(78,143,104,0.1)" : "rgba(20,18,14,0.05)",
        color: r.userAdded ? "#4e8f68" : "var(--text-dim)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textDecoration: "underline",
        textDecorationStyle: "dotted"
      } }, r.userAdded ? `Added in` : `Used in`, " Week ", r.usedInWeek || r.week, weekData ? ` \xB7 ${weekData.title.split(" ").slice(0, 3).join(" ")}\u2026` : "")), r.userAdded && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 8, padding: "2px 5px", borderRadius: 2, background: "rgba(78,143,104,0.08)", color: "#4e8f68", letterSpacing: "0.1em", textTransform: "uppercase" } }, "MY ADDITION")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 } }, r.title), r.notes && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--text-dim)", lineHeight: 1.55, marginBottom: 8 } }, r.notes), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" } }, (r.tags || []).map((t) => /* @__PURE__ */ React.createElement(Tag, { key: t, label: t })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 } }, /* @__PURE__ */ React.createElement(Badge, { label: statusMap[r.status] || "upcoming" }), stars && /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-amber)", letterSpacing: 1 } }, stars), r.userAdded && /* @__PURE__ */ React.createElement("select", { value: r.status, onChange: (e) => updateResource(r.id, { status: e.target.value }), style: {
        background: "var(--bg)",
        border: "1px solid var(--border)",
        borderRadius: 3,
        color: "var(--text-dim)",
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        padding: "3px 6px",
        cursor: "pointer",
        letterSpacing: "0.06em"
      } }, /* @__PURE__ */ React.createElement("option", { value: "not-started" }, "Not Started"), /* @__PURE__ */ React.createElement("option", { value: "in-progress" }, "In Progress"), /* @__PURE__ */ React.createElement("option", { value: "completed" }, "Completed")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, r.link && r.link !== "#" && /* @__PURE__ */ React.createElement("a", { href: r.link, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" } }, /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "secondary" }, "Open \u2192")), r.userAdded && /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "ghost", onClick: () => removeResource(r.id) }, "Remove")))));
    })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, padding: "28px 32px", border: "2px dashed var(--border-mid)", borderRadius: 6, textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.12em", marginBottom: 10, textTransform: "uppercase" } }, "Add resources from your weekly log \u2014 they appear here automatically"), /* @__PURE__ */ React.createElement(Btn, { variant: "secondary", small: true, onClick: () => navigate("week-detail") }, "Go to Week Log \u2192")));
  }
  window.Resources = Resources;
  const phaseP = [
    { color: "#7b9ab5", dim: "rgba(123,154,181,0.15)", bg: "#eef2f6", text: "#3a5a70" },
    { color: "#c4a464", dim: "rgba(196,164,100,0.15)", bg: "#f6f0e2", text: "#7a5a18" },
    { color: "#8aaa90", dim: "rgba(138,170,144,0.15)", bg: "#edf3ee", text: "#3a6040" }
  ];
  function PieceThumb({ piece, onClick, large = false }) {
    const [hov, setHov] = React.useState(false);
    const pc = phaseP[piece.phase - 1];
    const ph = PHASES[piece.phase - 1];
    const isUpcoming = piece.status === "upcoming";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        onClick: () => !isUpcoming && onClick(piece),
        onMouseEnter: () => setHov(true),
        onMouseLeave: () => setHov(false),
        style: {
          position: "relative",
          overflow: "hidden",
          borderRadius: 4,
          cursor: isUpcoming ? "default" : "pointer",
          boxShadow: hov && !isUpcoming ? "0 12px 40px rgba(40,28,16,0.18)" : "0 1px 6px rgba(40,28,16,0.08)",
          transition: "transform 0.25s, box-shadow 0.25s",
          transform: hov && !isUpcoming ? "translateY(-4px)" : "none",
          background: piece.coverBg,
          aspectRatio: large ? "16/10" : "4/3"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        inset: 0,
        background: piece.coverBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      } }, isUpcoming ? /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(40,28,16,0.3)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 } }, "Upcoming"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 13, fontStyle: "italic", color: "rgba(40,28,16,0.35)" } }, "Week ", piece.week)) : (
        /* Subtle hatch pattern over the bg color to suggest an image */
        /* @__PURE__ */ React.createElement("div", { style: {
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 12px)`
        } })
      )),
      !isUpcoming && /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(28,23,18,0.88) 0%, rgba(28,23,18,0.4) 50%, transparent 100%)",
        opacity: hov ? 1 : 0,
        transition: "opacity 0.22s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: large ? "28px 28px" : "18px 16px"
      } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: pc.color, letterSpacing: "0.14em", marginBottom: 5, textTransform: "uppercase" } }, ph.tag, " \xB7 Week ", piece.week), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: large ? 22 : 16, fontStyle: "italic", fontWeight: 600, color: "#f6f1e9", marginBottom: 6, lineHeight: 1.2 } }, piece.title), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" } }, piece.tags.slice(0, 3).map((t) => /* @__PURE__ */ React.createElement("span", { key: t, style: { fontFamily: "var(--font-mono)", fontSize: 9, padding: "2px 6px", borderRadius: 2, background: "rgba(246,241,233,0.15)", color: "rgba(246,241,233,0.8)", letterSpacing: "0.06em" } }, t)))),
      !isUpcoming && /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: 10,
        right: 10,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: piece.status === "complete" ? "#8aaa90" : "#c4a464",
        boxShadow: `0 0 0 2px rgba(246,241,233,0.5)`,
        opacity: hov ? 0 : 1,
        transition: "opacity 0.2s"
      } }),
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: 10,
        left: 10,
        fontFamily: "var(--font-mono)",
        fontSize: 8,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "3px 7px",
        borderRadius: 2,
        background: "rgba(246,241,233,0.85)",
        color: "rgba(40,28,16,0.6)",
        opacity: isUpcoming ? 0.4 : 0.9
      } }, piece.type)
    );
  }
  function PieceDetail({ piece, onBack, isTouchstone = false }) {
    const pc = phaseP[piece.phase - 1];
    const ph = PHASES[piece.phase - 1];
    const imgCount = piece.images || (isTouchstone ? 6 : 3);
    const [activeImg, setActiveImg] = React.useState(0);
    const galleryBgs = [piece.coverBg, ...Array(imgCount - 1).fill(null).map((_, i) => {
      const shades = ["#c8d8e4", "#b8ccdc", "#d0dce8", "#c4d4e4", "#bcc8d8", "#b0c4d4"];
      return shades[i % shades.length];
    })];
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { padding: "32px 64px 0" } }, /* @__PURE__ */ React.createElement("button", { onClick: onBack, style: {
      background: "none",
      border: "none",
      color: "var(--text-dim)",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.12em",
      padding: 0
    } }, "\u2190 PORTFOLIO")), /* @__PURE__ */ React.createElement("div", { style: { margin: "24px 0 0", position: "relative", height: 520, overflow: "hidden", background: galleryBgs[activeImg] } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 14px)`
    } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 } }, galleryBgs.map((_, i) => /* @__PURE__ */ React.createElement("button", { key: i, onClick: () => setActiveImg(i), style: {
      width: i === activeImg ? 24 : 8,
      height: 8,
      borderRadius: 4,
      border: "none",
      background: i === activeImg ? "#f6f1e9" : "rgba(246,241,233,0.4)",
      cursor: "pointer",
      transition: "all 0.2s",
      padding: 0
    } }))), activeImg > 0 && /* @__PURE__ */ React.createElement("button", { onClick: () => setActiveImg((i) => i - 1), style: { position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)", background: "rgba(246,241,233,0.85)", border: "none", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 18, color: "#1c1712" } }, "\u2039"), activeImg < galleryBgs.length - 1 && /* @__PURE__ */ React.createElement("button", { onClick: () => setActiveImg((i) => i + 1), style: { position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", background: "rgba(246,241,233,0.85)", border: "none", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 18, color: "#1c1712" } }, "\u203A"), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 52, left: 0, right: 0, textAlign: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(246,241,233,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" } }, activeImg + 1, " / ", galleryBgs.length))), galleryBgs.length > 1 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, padding: "12px 64px", overflowX: "auto" } }, galleryBgs.map((bg, i) => /* @__PURE__ */ React.createElement("div", { key: i, onClick: () => setActiveImg(i), style: {
      width: 80,
      height: 52,
      flexShrink: 0,
      borderRadius: 3,
      background: bg,
      cursor: "pointer",
      outline: i === activeImg ? `2px solid ${pc.color}` : "2px solid transparent",
      transition: "outline 0.15s",
      opacity: i === activeImg ? 1 : 0.6
    } }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 360px", gap: 64, padding: "48px 64px 80px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, padding: "3px 9px", borderRadius: 2, background: pc.dim, color: pc.color, letterSpacing: "0.12em", textTransform: "uppercase" } }, ph.tag), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.1em" } }, "WEEK ", piece.week), /* @__PURE__ */ React.createElement(Badge, { label: piece.status })), /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: "var(--font-display)", fontSize: 52, fontWeight: 600, fontStyle: "italic", margin: "0 0 20px", letterSpacing: "-0.02em", lineHeight: 1 } }, piece.title), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8, margin: "0 0 32px", maxWidth: 560 } }, piece.desc || isTouchstone && piece.description), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, piece.tags.map((t) => /* @__PURE__ */ React.createElement(Tag, { key: t, label: t }))), isTouchstone && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 40 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", color: "var(--text-dim)", marginBottom: 20, textTransform: "uppercase" } }, "Portfolio Notes"), ["What problem does this solve?", "What was the technical challenge?", "What makes it production-ready?"].map((q, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 14, fontStyle: "italic", color: "var(--text-secondary)", marginBottom: 6 } }, q), /* @__PURE__ */ React.createElement("textarea", { placeholder: `${q}...`, style: {
      width: "100%",
      minHeight: 64,
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: 4,
      padding: 10,
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: 1.6,
      resize: "vertical",
      outline: "none",
      boxSizing: "border-box"
    } }))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { padding: 24, background: "var(--surface-elevated)", border: "1px solid var(--border)", borderRadius: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", color: "var(--text-dim)", marginBottom: 20, textTransform: "uppercase" } }, "Details"), [
      ["Type", piece.type],
      ["Phase", ph.name],
      ["Week", `Week ${piece.week} of 12`],
      ["Status", piece.status],
      ["Images", `${galleryBgs.length} screenshots`]
    ].map(([label, value]) => /* @__PURE__ */ React.createElement("div", { key: label, style: { display: "flex", justifyContent: "space-between", paddingBottom: 12, marginBottom: 12, borderBottom: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.08em" } }, label), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--text-primary)", fontFamily: "var(--font-body)", fontWeight: 500 } }, value)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, padding: "20px 24px", border: "2px dashed var(--border-mid)", borderRadius: 6, textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 } }, "Add Screenshots"), /* @__PURE__ */ React.createElement(Btn, { variant: "secondary", small: true }, "+ Upload")))));
  }
  function Portfolio({ navigate }) {
    const [selected, setSelected] = React.useState(null);
    const [phaseFilter, setPhaseFilter] = React.useState(0);
    const [view, setView] = React.useState("grid");
    if (selected) {
      const isTouchstone = !!selected.sections;
      return /* @__PURE__ */ React.createElement(PieceDetail, { piece: selected, onBack: () => setSelected(null), isTouchstone });
    }
    const filteredWeekly = phaseFilter === 0 ? WEEKLY_PIECES : WEEKLY_PIECES.filter((p) => p.phase === phaseFilter);
    const filteredTouchstone = phaseFilter === 0 ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter((p) => p.phase === phaseFilter);
    const touchstoneForThumb = filteredTouchstone.map((p) => ({
      ...p,
      coverBg: p.phase === 1 ? "#c0d4e4" : p.phase === 2 ? "#d8cc9c" : "#b4c8b4",
      type: "Capstone",
      images: 6,
      desc: p.description
    }));
    return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1400, margin: "0 auto", padding: "56px 64px 96px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 20 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 12, textTransform: "uppercase" } }, "Portfolio"), /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: "var(--font-display)", fontSize: 60, fontWeight: 600, fontStyle: "italic", margin: 0, letterSpacing: "-0.02em", lineHeight: 1 } }, "Work")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, [{ id: 0, label: "All" }, ...PHASES.map((p) => ({ id: p.id, label: p.tag }))].map((f) => /* @__PURE__ */ React.createElement("button", { key: f.id, onClick: () => setPhaseFilter(f.id), style: {
      padding: "6px 12px",
      borderRadius: 3,
      border: `1px solid ${phaseFilter === f.id ? f.id === 0 ? "var(--border-mid)" : phaseP[f.id - 1].color : "var(--border)"}`,
      background: phaseFilter === f.id ? f.id === 0 ? "rgba(40,28,16,0.06)" : phaseP[f.id - 1].dim : "transparent",
      color: phaseFilter === f.id ? f.id === 0 ? "var(--text-primary)" : phaseP[f.id - 1].color : "var(--text-dim)",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.1em",
      cursor: "pointer",
      textTransform: "uppercase",
      transition: "all 0.15s"
    } }, f.label))), /* @__PURE__ */ React.createElement(Btn, { variant: "secondary", small: true, onClick: () => navigate("case-study") }, "Case Study \u2192"))), filteredTouchstone.length > 0 && /* @__PURE__ */ React.createElement("section", { style: { marginBottom: 72 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16, marginBottom: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--text-dim)", textTransform: "uppercase" } }, "Capstone Projects"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 1, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)" } }, filteredTouchstone.length)), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 } }, touchstoneForThumb.map((p) => /* @__PURE__ */ React.createElement("div", { key: p.id }, /* @__PURE__ */ React.createElement(PieceThumb, { piece: p, onClick: setSelected, large: true }), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 4px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 17, fontStyle: "italic", fontWeight: 600, color: "var(--text-primary)", marginBottom: 3 } }, p.title), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.08em" } }, p.subtitle || p.type)))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16, marginBottom: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--text-dim)", textTransform: "uppercase" } }, "Weekly Work"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 1, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)" } }, filteredWeekly.length, " pieces")), (phaseFilter === 0 ? PHASES : PHASES.filter((p) => p.id === phaseFilter)).map((ph) => {
      const pieces = filteredWeekly.filter((p) => p.phase === ph.id);
      if (pieces.length === 0) return null;
      const pc = phaseP[ph.id - 1];
      return /* @__PURE__ */ React.createElement("div", { key: ph.id, style: { marginBottom: 56 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 6, height: 6, borderRadius: "50%", background: pc.color, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: pc.color, letterSpacing: "0.14em", textTransform: "uppercase" } }, ph.tag, " \u2014 ", ph.name)), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 } }, pieces.map((piece) => /* @__PURE__ */ React.createElement("div", { key: piece.id }, /* @__PURE__ */ React.createElement(PieceThumb, { piece, onClick: setSelected }), /* @__PURE__ */ React.createElement("div", { style: { padding: "9px 2px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: piece.status === "upcoming" ? "var(--text-dim)" : "var(--text-primary)", marginBottom: 2, fontFamily: "var(--font-body)" } }, piece.title), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.06em" } }, "Week ", piece.week, " \xB7 ", piece.type))))));
    })));
  }
  function ProjectDetail({ proj, onBack }) {
    return /* @__PURE__ */ React.createElement(PieceDetail, { piece: { ...proj, coverBg: "#c0d0e0", images: 6, desc: proj.description }, onBack, isTouchstone: true });
  }
  window.Portfolio = Portfolio;
  window.ProjectDetail = ProjectDetail;
  window.PieceThumb = PieceThumb;
  window.PieceDetail = PieceDetail;
  function CaseStudy({ navigate }) {
    const [activeSection, setActiveSection] = React.useState(0);
    const sections = [
      { id: "overview", label: "Overview" },
      { id: "pipeline", label: "Pipeline" },
      { id: "houdini", label: "Houdini" },
      { id: "python", label: "Python + Maya" },
      { id: "shaders", label: "Shaders" },
      { id: "breakdown", label: "Breakdown" }
    ];
    const pipelineSteps = [
      { phase: 1, color: "#7b9ab5", bg: "#eef2f6", icon: "H", label: "Houdini", desc: "Procedural geometry & scatter" },
      { phase: 2, color: "#c4a464", bg: "#f6f0e2", icon: "Py", label: "Python + Maya", desc: "Validate & export assets" },
      { phase: 3, color: "#8aaa90", bg: "#edf3ee", icon: "SH", label: "Shaders", desc: "Material system & optimization" }
    ];
    const inputStyle = {
      width: "100%",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: 4,
      padding: 14,
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      lineHeight: 1.6,
      resize: "vertical",
      outline: "none",
      boxSizing: "border-box"
    };
    return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1100, margin: "0 auto", padding: "56px 48px 96px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("portfolio"), style: {
      background: "none",
      border: "none",
      color: "var(--text-dim)",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.12em",
      marginBottom: 40,
      padding: 0
    } }, "\u2190 BACK TO PORTFOLIO"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 48 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--text-dim)", marginBottom: 14, textTransform: "uppercase" } }, "Integrated Case Study"), /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: "var(--font-display)", fontSize: 72, fontWeight: 600, fontStyle: "italic", margin: "0 0 6px", letterSpacing: "-0.03em", lineHeight: 0.95 } }, "Stylized RPG"), /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: "var(--font-display)", fontSize: 72, fontWeight: 400, margin: "0 0 24px", letterSpacing: "-0.03em", lineHeight: 0.95, color: "#8aaa90" } }, "Ruins Pipeline"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 600, margin: "0 0 24px" } }, "A senior-level Technical Artist case study combining all three learning phases: Houdini procedural generation, Python+Maya pipeline tooling, and an optimized stylized shader system \u2014 unified into a production-ready environment."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, ["Houdini", "Python", "Maya", "Shaders", "UE5", "Procedural", "Pipeline", "Optimization"].map((t) => /* @__PURE__ */ React.createElement(Tag, { key: t, label: t })))), /* @__PURE__ */ React.createElement(Placeholder, { label: "Stylized RPG Ruins \u2014 Final environment render", width: "100%", height: 380, color: "#dce8dc", style: { width: "100%", borderRadius: 6, marginBottom: 10 } }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", marginBottom: 48, paddingLeft: 4, letterSpacing: "0.08em" } }, "FIG 01 \u2014 Final environment render \xB7 Stylized RPG Ruins Pipeline"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 2, borderBottom: "1px solid var(--border)", marginBottom: 56, flexWrap: "wrap" } }, sections.map((s, i) => /* @__PURE__ */ React.createElement("button", { key: s.id, onClick: () => setActiveSection(i), style: {
      padding: "10px 20px",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: activeSection === i ? "#8aaa90" : "var(--text-dim)",
      borderBottom: `2px solid ${activeSection === i ? "#8aaa90" : "transparent"}`,
      marginBottom: -1,
      transition: "all 0.15s"
    } }, s.label))), activeSection === 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 48 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 } }, pipelineSteps.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { padding: "32px 28px", borderRadius: 6, background: s.bg, borderTop: `3px solid ${s.color}` } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontWeight: 800, fontSize: 14, color: s.color, marginBottom: 16, width: 40, height: 40, borderRadius: 8, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center" } }, s.icon), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: s.color, letterSpacing: "0.14em", marginBottom: 8, textTransform: "uppercase" } }, "Phase ", s.phase), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 20, fontStyle: "italic", fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 } }, s.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--text-dim)", lineHeight: 1.5 } }, s.desc)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" } }, "Pipeline Flow"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center" } }, pipelineSteps.map((s, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: i }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, padding: "18px 22px", background: "var(--surface-elevated)", border: `1px solid ${s.color}33`, borderRadius: 4, textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 10, color: s.color, marginBottom: 4, letterSpacing: "0.08em" } }, s.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--text-dim)" } }, s.desc)), i < 2 && /* @__PURE__ */ React.createElement("div", { style: { padding: "0 8px", color: "var(--text-dim)", fontSize: 18 } }, "\u2192")))))), activeSection === 1 && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.14em", marginBottom: 14, textTransform: "uppercase" } }, "Pipeline Diagram"), /* @__PURE__ */ React.createElement(Placeholder, { label: "Pipeline flow diagram\\nHoudini \u2192 Maya \u2192 Engine", width: "100%", height: 320, color: "#dce8dc", style: { width: "100%", borderRadius: 6 } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, [
      { step: "01", title: "Procedural Generation", desc: "Houdini HDAs generate ruin geometry with terrain-aware scatter and full parameter control.", color: "#7b9ab5" },
      { step: "02", title: "Validation & Export", desc: "Python Maya tool runs 10+ checks: naming, UVs, pivots, transforms \u2014 then one-click FBX export.", color: "#c4a464" },
      { step: "03", title: "Material Assignment", desc: "Optimized master material with ORM-packed textures, atlas support, and instanced materials.", color: "#8aaa90" },
      { step: "04", title: "Engine Integration", desc: "LODs, collision, and material instances in UE5. Final profiling confirms optimization targets hit.", color: "#c08070" }
    ].map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { padding: "20px 24px", background: "var(--surface-elevated)", borderRadius: "0 6px 6px 0", border: "1px solid var(--border)", borderLeft: `3px solid ${s.color}` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: 22, fontStyle: "italic", fontWeight: 600, color: s.color, minWidth: 32, lineHeight: 1 } }, s.step), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 5 } }, s.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--text-dim)", lineHeight: 1.6 } }, s.desc))))))), activeSection === 2 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 28 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 } }, ["Final ruin geometry", "SOP scatter network", "HDA parameter UI", "Terrain masking"].map((l, i) => /* @__PURE__ */ React.createElement(Placeholder, { key: i, label: l, width: "100%", height: 200, color: "#d8e4ee", style: { width: "100%", borderRadius: 6 } }))), /* @__PURE__ */ React.createElement(Card, { style: { padding: 28 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "#7b9ab5", letterSpacing: "0.14em", marginBottom: 20, textTransform: "uppercase" } }, "Technical Breakdown"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 } }, [["Asset HDAs", "3 (wall, arch, floor)"], ["Scatter Rules", "Slope + height masking"], ["VEX Attributes", "12 per-point attrs"], ["LOD Levels", "3 per asset"], ["Export Format", "FBX batch via ROP"], ["Exposed Params", "12 per HDA"]].map(([label, value]) => /* @__PURE__ */ React.createElement("div", { key: label }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", marginBottom: 5, letterSpacing: "0.1em", textTransform: "uppercase" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 18, fontStyle: "italic", color: "var(--text-primary)" } }, value)))))), activeSection === 3 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 28 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 } }, ["Validator UI \u2014 PySide2", "Error report output", "Export settings panel", "Pre-export checklist"].map((l, i) => /* @__PURE__ */ React.createElement(Placeholder, { key: i, label: l, width: "100%", height: 200, color: "#ede8d0", style: { width: "100%", borderRadius: 6 } }))), /* @__PURE__ */ React.createElement(Card, { style: { padding: 28 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "#c4a464", letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" } }, "Validation Rules"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, ["Naming convention check (regex)", "UV island overlap detection", "Freeze transform validation", "Pivot at world origin check", "Polygon count within budget", "No history on mesh", "UV tile within 0\u20131 space", "Material assignment check", "LOD suffix naming", "Export path template validation"].map((rule, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", gap: 10, alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#8aaa90", fontFamily: "var(--font-mono)", fontSize: 12 } }, "\u2713"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--text-secondary)" } }, rule)))))), activeSection === 4 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 28 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 } }, ["Final stylized render", "Shader graph", "Before optimization", "After optimization", "ORM texture pack", "Atlas layout"].map((l, i) => /* @__PURE__ */ React.createElement(Placeholder, { key: i, label: l, width: "100%", height: 170, color: "#d8ede0", style: { width: "100%", borderRadius: 6 } }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } }, [
      { label: "Before Optimization", color: "#c06060", bg: "rgba(192,96,96,0.06)", data: [["Draw Calls", "847"], ["Memory", "1.2 GB VRAM"], ["Material Instances", "120+"]] },
      { label: "After Optimization", color: "#5a8a60", bg: "rgba(90,138,96,0.06)", data: [["Draw Calls", "212"], ["Memory", "340 MB VRAM"], ["Material Instances", "8"]] }
    ].map(({ label, color, bg, data }) => /* @__PURE__ */ React.createElement(Card, { key: label, style: { padding: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color, letterSpacing: "0.14em", marginBottom: 16, textTransform: "uppercase" } }, label), data.map(([k, v]) => /* @__PURE__ */ React.createElement("div", { key: k, style: { display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--text-secondary)" } }, k), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: 16, fontStyle: "italic", color } }, v))))))), activeSection === 5 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20 } }, [
      { q: "What problem does this solve?", color: "#7b9ab5" },
      { q: "What was the core technical challenge?", color: "#c4a464" },
      { q: "What makes this production-ready?", color: "#8aaa90" },
      { q: "What would I improve next?", color: "#c08070" }
    ].map(({ q, color }, i) => /* @__PURE__ */ React.createElement(Card, { key: i, style: { padding: 28 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 13, fontStyle: "italic", color, marginBottom: 4 } }, "0", i + 1), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 22, fontStyle: "italic", fontWeight: 600, color: "var(--text-primary)", marginBottom: 14 } }, q), /* @__PURE__ */ React.createElement("textarea", { placeholder: `${q}...`, style: { ...inputStyle, minHeight: 80 } })))));
  }
  window.CaseStudy = CaseStudy;
  const NAV_ITEMS = [
    { id: "dashboard", label: "Home" },
    { id: "timeline", label: "Curriculum" },
    { id: "week-detail", label: "Week Log" },
    { id: "resources", label: "Resources" },
    { id: "portfolio", label: "Portfolio" },
    { id: "case-study", label: "Case Study" }
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
    return /* @__PURE__ */ React.createElement("nav", { style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 64px",
      height: 58,
      background: scrolled ? "rgba(248,248,246,0.96)" : "var(--bg)",
      borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      backdropFilter: "blur(12px)",
      transition: "background 0.25s, border-color 0.25s"
    } }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("dashboard"), style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      display: "flex",
      alignItems: "baseline",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em" } }, "ROAD TO MASTERY"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase" } }, "W", STATS.currentWeek, "/12")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, NAV_ITEMS.map((item) => {
      const active = current === item.id;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: item.id,
          onClick: () => navigate(item.id),
          onMouseEnter: () => setHov(item.id),
          onMouseLeave: () => setHov(null),
          style: {
            padding: "7px 13px",
            border: "none",
            background: active ? "rgba(20,18,14,0.07)" : hov === item.id ? "rgba(20,18,14,0.04)" : "transparent",
            borderRadius: 4,
            color: active ? "var(--text-primary)" : "var(--text-secondary)",
            cursor: "pointer",
            transition: "all 0.15s",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: active ? 600 : 400
          }
        },
        item.label
      );
    })), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "4px 10px",
      borderRadius: 4,
      background: "rgba(90,135,168,0.08)",
      border: "1px solid rgba(90,135,168,0.18)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%", background: "var(--accent-blue)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--accent-blue)", letterSpacing: "0.12em", textTransform: "uppercase" } }, "PHASE 01 \xB7 WEEK ", STATS.currentWeek)));
  }
  const ACCENT_SCHEMES = {
    "White": { blue: "#5a87a8", amber: "#b8923a", teal: "#4e8f68", bg: "#f8f8f6", surface: "#f1f1ee" },
    "Warm": { blue: "#7b9ab5", amber: "#c4a464", teal: "#8aaa90", bg: "#f6f1e9", surface: "#faf8f4" },
    "Cool": { blue: "#4a7aaa", amber: "#9a8030", teal: "#3a8060", bg: "#f4f6f8", surface: "#eef0f2" },
    "Ink": { blue: "#4060a0", amber: "#a07020", teal: "#306050", bg: "#f5f5f3", surface: "#ededea" }
  };
  const FONT_MAP = {
    "Epilogue": "'Epilogue', sans-serif",
    "Syne": "'Syne', sans-serif",
    "Space Grotesk": "'Space Grotesk', sans-serif",
    "Cormorant Garamond": "'Cormorant Garamond', Georgia, serif"
  };
  function App() {
    const [page, setPage] = React.useState("dashboard");
    const [pageParams, setPageParams] = React.useState({});
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    React.useEffect(() => {
      const scheme = ACCENT_SCHEMES[t.accentScheme] || ACCENT_SCHEMES["White"];
      document.documentElement.style.setProperty("--accent-blue", scheme.blue);
      document.documentElement.style.setProperty("--accent-amber", scheme.amber);
      document.documentElement.style.setProperty("--accent-teal", scheme.teal);
      document.documentElement.style.setProperty("--bg", scheme.bg);
      document.documentElement.style.setProperty("--surface", scheme.surface);
      document.documentElement.style.setProperty("--font-body", `'${t.fontBody}', sans-serif`);
      const displayFont = FONT_MAP[t.fontDisplay] || "'Epilogue', sans-serif";
      document.documentElement.style.setProperty("--font-display", displayFont);
      document.documentElement.style.setProperty("--font-head", displayFont);
    }, [t.accentScheme, t.fontBody, t.fontDisplay]);
    const navigate = (p, params = {}) => {
      setPage(p);
      setPageParams(params);
      const main = document.querySelector("main");
      if (main) main.scrollTop = 0;
    };
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", minHeight: "100vh", background: "var(--bg)" } }, /* @__PURE__ */ React.createElement(TopNav, { current: page, navigate }), /* @__PURE__ */ React.createElement("main", { style: { flex: 1, overflowY: "auto" } }, page === "dashboard" && /* @__PURE__ */ React.createElement(Dashboard, { navigate }), page === "timeline" && /* @__PURE__ */ React.createElement(Timeline, { navigate }), page === "week-detail" && /* @__PURE__ */ React.createElement(WeekDetail, { navigate, weekNum: pageParams.weekNum || STATS.currentWeek }), page === "resources" && /* @__PURE__ */ React.createElement(Resources, { navigate }), page === "portfolio" && /* @__PURE__ */ React.createElement(Portfolio, { navigate }), page === "case-study" && /* @__PURE__ */ React.createElement(CaseStudy, { navigate })), /* @__PURE__ */ React.createElement(TweaksPanel, null, /* @__PURE__ */ React.createElement(TweakSection, { label: "Color Palette" }), /* @__PURE__ */ React.createElement(TweakRadio, { label: "Scheme", value: t.accentScheme, options: ["White", "Warm", "Cool", "Ink"], onChange: (v) => setTweak("accentScheme", v) }), /* @__PURE__ */ React.createElement(TweakSection, { label: "Typography" }), /* @__PURE__ */ React.createElement(TweakSelect, { label: "Display Font", value: t.fontDisplay, options: ["Epilogue", "Syne", "Space Grotesk", "Cormorant Garamond"], onChange: (v) => setTweak("fontDisplay", v) }), /* @__PURE__ */ React.createElement(TweakSelect, { label: "Body Font", value: t.fontBody, options: ["Manrope", "Inter", "DM Sans"], onChange: (v) => setTweak("fontBody", v) })));
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(/* @__PURE__ */ React.createElement(App, null));
})();
