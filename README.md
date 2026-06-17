# The FDE Mindset Atlas

An interactive, zoomable, fully-cited **mind-map of the Forward Deployed Engineer mindset** — built for the Karsun-FDE 6-week intensive. Works on laptop and phone. Click/tap a node to expand its children and relational edges; tap the ⓘ / ◉ badge on a node to read its notes and switch role perspectives; scroll or pinch to zoom (zoom in near a node to dive deeper); drag to pan. Zero build step, zero dependencies — GitHub Pages serves it as-is.

**Live:** https://karsunfde.github.io/fde-mindset-atlas/

## Branches
What is an FDE? · The Mindset · Scenarios & Viewpoints · Decomposition (epic→story→subtask, BA vs engineer) · App Modernization (the FDE method + Galent 7-step pipeline) · Knowledge & Context Graphs · ReDuX & GalentAI · Resources & Video.

## Run locally
```bash
python3 -m http.server 8080   # from repo root, then open http://localhost:8080
```

## Interaction model
- **Tap / click** a node → expand/collapse its child nodes (reveals edges = the puzzle assembling).
- **Tap the ⓘ / ◉ badge** on a node → opens its cited notes drawer *at that level*; ◉ marks nodes that also carry **role perspectives** (BA / FDE / CIO / OIG / agent) you can switch between.
- **Scroll or pinch** to zoom; zooming in near a collapsed node dives deeper; zooming out climbs back a layer.
- **Drag / one-finger** to pan. HUD: zoom ±, climb a layer (↰), expand the whole map (⌗), reset (⟳).
- Responsive: re-fits on resize / orientation change. Deep-linkable: opening a node sets `#node/<id>`.

## How it's built (it's meant to grow)
| File | Role |
|------|------|
| `index.html` | shell |
| `assets/css/style.css` | design system + responsive rules |
| `assets/js/app.js` | renderer (graph, pan, wheel + pinch zoom, drawer, citation chips) — renderer-only, rarely changes |
| `assets/js/content.js` | **the living document — edit this** |

Content is a cited data tree: `SOURCES` (citation registry), `VIDEOS` (embeds), `BRANCHES` (root → branch → node → deeper). Each node: `t`, `lead`, `body`, `views` (role perspectives), `deeper` (nested layers), `video`. Write `[[SOURCE_ID]]` anywhere in `lead`/`body`/`views` and the renderer turns it into a linked chip + rolls it into that node's "Sources cited" list. Add a node to `nodes[]` or a layer to `deeper[]`, or a role to `views[]` — no renderer changes needed.

## Grounding
Every claim traces to a cited source — public FDE/Palantir writing, GraphRAG/context-graph research (Gartner 2026, Lettria/AWS), Atlassian agile decomposition, the AWS Public Sector ReDuX architecture post, and the Galent FDE Session 1 walkthrough. Curriculum sourcing lives in the Karsun-FDE working hub.

---
🤖 Authored with [Claude Code](https://claude.com/claude-code)
