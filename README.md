# The FDE Mindset Atlas

An interactive, zoomable, fully-cited **mind-map of the Forward Deployed Engineer mindset** — built for the Karsun-FDE 6-week intensive. Click a node to expand its children and relational edges; scroll-in near a node to dive deeper down its branch; scroll-out to climb back a layer; click a leaf to read the cited detail. Zero build step, zero dependencies — GitHub Pages serves it as-is.

**Live:** https://karsunfde.github.io/fde-mindset-atlas/

## Branches
What is an FDE? · The Mindset · Scenarios & Viewpoints · Decomposition (epic→story→subtask, BA vs engineer) · App Modernization (the FDE method + Galent 7-step pipeline) · Knowledge & Context Graphs · ReDuX & GalentAI · Resources & Video.

## Run locally
```bash
python3 -m http.server 8080   # from repo root, then open http://localhost:8080
```

## Interaction model
- **Click** a node → expand/collapse its child nodes (reveals edges = the puzzle assembling).
- **Scroll-in** near a collapsed node → auto-dives deeper; **scroll-out** when zoomed far → climbs up a layer.
- **Drag** to pan. HUD: zoom ±, climb a layer (↰), expand the whole map (⌗), reset (⟳).
- **Double-click** a node (or click a leaf) → cited detail drawer (prose, viewpoint tabs, embedded video, sources). Drawer links jump you to deeper nodes on the map.
- Deep-linkable: opening a node sets `#node/<id>`.

## How it's built (it's meant to grow)
| File | Role |
|------|------|
| `index.html` | shell |
| `assets/css/style.css` | design system |
| `assets/js/app.js` | renderer (graph, zoom/pan, drawer, citation chips) — renderer-only, rarely changes |
| `assets/js/content.js` | **the living document — edit this** |

Content is a cited data tree: `SOURCES` (citation registry), `VIDEOS` (embeds), `BRANCHES` (root → branch → node → deeper). Write `[[SOURCE_ID]]` anywhere in a node's `lead`/`body`/`views` and the renderer turns it into a linked chip + rolls it into that node's "Sources cited" list. Add a node to `nodes[]` or a deeper layer to `deeper[]`; no renderer changes needed.

## Grounding
Every claim traces to a cited source — public FDE/Palantir writing, GraphRAG/context-graph research (Gartner 2026, Lettria/AWS), Atlassian agile decomposition, the AWS Public Sector ReDuX architecture post, and the Galent FDE Session 1 walkthrough. Sourcing for the curriculum lives in the Karsun-FDE working hub.

---
🤖 Authored with [Claude Code](https://claude.com/claude-code)
