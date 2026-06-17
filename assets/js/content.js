/* =====================================================================
   FDE MINDSET ATLAS — content model
   Data-driven so the page is a living document: edit this file to grow it.
   Every factual claim carries an inline citation token [[ID]] that app.js
   renders as a linked chip and rolls up into each branch's Sources list.
   Sources registry + branch tree below.
   Last grounded: 2026-06-17 via /web-research (Firecrawl) + WebSearch.
   ===================================================================== */

const SOURCES = {
  // --- FDE mindset spine ---
  PAL_DAY:   { t: "Palantir — A Day in the Life of a Forward Deployed Software Engineer", url: "https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1", d: "2020" },
  VINOO_FDE: { t: "Vinoo Ganesh — Forward Deployed Engineering (Project Frontline)", url: "https://vinoo.io/writing/2026-02-05-forward-deployed-engineering/", d: "2026-02-05" },
  VINOO_BLD: { t: "Vinoo Ganesh — Build Products Like a Forward Deployed Engineer", url: "https://vinoo.io/teaching/2026-03-17-build-products-like-a-forward-deployed-engineer/", d: "2026-03-17" },
  PRAG:      { t: "Pragmatic Engineer — What are Forward Deployed Engineers, and why are they so in demand?", url: "https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers", d: "2025" },
  SVPG:      { t: "Silicon Valley Product Group — Forward Deployed Engineers", url: "https://www.svpg.com/forward-deployed-engineers/", d: "2025" },
  FDEACAD:   { t: "FDE Academy — How Palantir Invented the FDE Model", url: "https://fde.academy/", d: "2026" },
  // --- graphs ---
  KOREAI:    { t: "kore.ai — What are context graphs and how do they make AI agents smarter", url: "https://www.kore.ai/blog/what-are-context-graphs", d: "2026-06-17 scrape" },
  TRANTOR:   { t: "Trantor — Knowledge Graphs for Enterprise AI: Replacing RAG with Structured Reasoning", url: "https://www.trantorinc.com/blog/knowledge-graphs-enterprise-ai", d: "2026-05-28" },
  ARXIV_GA:  { t: "arXiv 2506.18019 — Graphs Meet AI Agents: Taxonomy, Progress, and Future Opportunities", url: "https://arxiv.org/pdf/2506.18019", d: "2025" },
  MSGRAPH:   { t: "Microsoft GraphRAG (open-source, v1.0)", url: "https://github.com/microsoft/graphrag", d: "2024+" },
  // --- decomposition ---
  ATL:       { t: "Atlassian — Epics, stories, and initiatives", url: "https://www.atlassian.com/agile/project-management/epics-stories-themes", d: "2026" },
  PLANE:     { t: "Plane — Epic vs. feature vs. user story vs. task", url: "https://plane.so/blog/epic-vs-feature-vs-user-story-vs-task-understanding-the-differences", d: "2026" },
  // --- spec-driven development ---
  SDD_BCMS:  { t: "BCMS — Spec-Driven Development (SDD): The Definitive 2026 Guide", url: "https://thebcms.com/blog/spec-driven-development", d: "2026-05-11" },
  SPECKIT:   { t: "GitHub — Spec-Driven Development with AI: get started with GitHub Spec Kit (open-source toolkit)", url: "https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/", d: "2025" },
  KIRO:      { t: "AWS Kiro — agentic IDE with a native spec-driven workflow (Requirements / Design / Tasks)", url: "https://kiro.dev/", d: "2025" },
  // --- platforms: ReDuX / Karsun ---
  AWSPS:     { t: "AWS Public Sector Blog — Karsun builds modernization platform on Amazon Bedrock", url: "https://aws.amazon.com/blogs/publicsector/karsun-solutions-builds-modernization-platform-using-amazon-bedrock/", d: "2024-03-19" },
  AWSMP:     { t: "AWS Marketplace — Karsun ReDuX (SaaS listing)", url: "https://aws.amazon.com/marketplace/pp/prodview-ewysxj3be4vra", d: "2025-07-30" },
  AWSPART:   { t: "AWS Partner Success — Karsun Solutions", url: "https://aws.amazon.com/partners/success/karsun-solutions/", d: "2026-05-22 scrape" },
  TRADEWINDS:{ t: "Karsun — ReDuX Assessed Awardable for DoW work in the CDAO Tradewinds Solutions Marketplace", url: "https://karsun-llc.com/news/karsun-redux-assessed-awardable-for-department-of-war-work-in-the-cdaos-tradewinds-solutions-marketplace/", d: "2025-10" },
  ISG:       { t: "BusinessWire / ISG Provider Lens 2026 — U.S. Public Sector Applies AI to Mainframe Modernization", url: "https://www.businesswire.com/news/home/20260414955677/en/U.S.-Public-Sector-Applies-AI-to-Mainframe-Modernization", d: "2026-04-14" },
  KARSUN:    { t: "Karsun Solutions — homepage / ReDuX", url: "https://karsun-llc.com/", d: "2026-05-22 scrape" },
  // --- platforms: GalentAI ---
  GALENT:    { t: "GalentAI — platform homepage (9 engines, KG + CG)", url: "https://galent.com/", d: "2026-05-22 scrape" },
  GALENTFDE: { t: "Galent — Beyond the Build: Why Forward-Deployed Engineers Are the New Face of Tech", url: "https://galent.com/insights/blogs/beyond-the-build-why-forward-deployed-engineers-are-the-new-face-of-tech/", d: "2026-06-17 scrape" },
  GALENTMA:  { t: "Galent — Claude Managed Agents vs. Enterprise AI Platforms", url: "https://galent.com/insights/blogs/claude-managed-agents-vs-enterprise-ai-platforms/", d: "2026-05" },
  // --- videos ---
  YCFDE:     { t: "Y Combinator — The FDE Playbook for AI Startups with Bob McGrew (50 min)", url: "https://www.youtube.com/watch?v=Zyw-YA0k3xo", d: "2025-09-08" },
  VIMEO:     { t: "Galent FDE Session 1 — What is an FDE? (private, instructor copy)", url: "https://vimeo.com/1202201578/3c00b899c5", d: "2026" }
};

const VIDEOS = {
  vimeoSession1: { kind: "vimeo", id: "1202201578", hash: "3c00b899c5", title: "Galent FDE Session 1 — What is an FDE?", src: "VIMEO" },
  ycMcGrew:      { kind: "youtube", id: "Zyw-YA0k3xo", title: "The FDE Playbook for AI Startups — Bob McGrew (Y Combinator)", src: "YCFDE" }
};

/* Each branch is a mind-map node. Each `node` may have:
   t (title), lead (always-visible summary), body (HTML revealed on expand),
   views (viewpoint tabs), deeper (nested child nodes — the "dive deeper" layers),
   video (key into VIDEOS), tagline. Citations as [[ID]] tokens anywhere. */

const BRANCHES = [
  /* ============================================================ 1 */
  {
    id: "what-is-fde",
    t: "What is an FDE?",
    icon: "&#9678;",
    color: "#5eead4",
    tag: "The role, the inversion, the origin",
    lead: "A Forward Deployed Engineer is a software engineer who owns customer <em>outcomes</em> from inside the customer's world &mdash; not from a lab. This is the ground floor of everything else on this map.",
    nodes: [
      {
        t: "The one-sentence core",
        lead: "An FDE owns customer outcomes &mdash; the actual results the customer is trying to achieve &mdash; not relationships, not satisfaction scores, not the PR.",
        body: "<blockquote>&ldquo;An FDE is a software engineer who owns customer <em>outcomes</em>. Not customer relationships, not satisfaction scores, but outcomes: the actual results the customer is trying to achieve.&rdquo; [[VINOO_FDE]]</blockquote><p>Shipping the PR is an <strong>output</strong>. The analyst's morning being 45 minutes shorter is an <strong>outcome</strong>. FDEs are measured on the second. [[VINOO_FDE]]</p>",
        video: "vimeoSession1"
      },
      {
        t: "The inversion: Dev vs Delta",
        lead: "A traditional software engineer builds <strong>one capability for many customers</strong>. An FDE enables <strong>many capabilities for a single customer</strong>. Breadth over a customer, not depth over a feature.",
        body: "<p>Palantir's original name for the FDE was the <strong>&ldquo;Delta&rdquo;</strong> &mdash; and until 2016 Palantir had <em>more Deltas than software engineers.</em> [[PRAG]] The canonical framing: &ldquo;FDSEs focus on enabling many capabilities for a single customer.&rdquo; [[PAL_DAY]]</p><p>Galent draws the same inversion verbatim: <em>Software Engineers = one capability &rarr; many customers; FDSE = many capabilities &rarr; one customer.</em> [[GALENTFDE]]</p>",
        deeper: [
          {
            t: "Full-stack &times; Full-context",
            lead: "An FDSE isn't just full-stack &mdash; they're full-context.",
            body: "<p>&ldquo;An FDSE isn't just full-stack. They're full-context &mdash; engineers who run on curiosity, speed, and empathy.&rdquo; [[GALENTFDE]] They blend the depth of a Software Engineer, the systems fluency of a Platform Engineer, and the customer intuition of a Solutions Architect. [[GALENTFDE]]</p>"
          },
          {
            t: "Not a consultant, not a solutions architect",
            lead: "OpenAI deliberately separates the FDE from the professional-services Solution Architect role.",
            body: "<p>OpenAI established a dedicated <strong>Head of FDE</strong>, explicitly differentiated from the prof-services Solution Architect. [[PRAG]] FDEs run a <strong>dual loop</strong>: embed with customers <em>and</em> embed back into core product-engineering teams &mdash; roughly <strong>25% of time onsite.</strong> [[PRAG]]</p><blockquote>&ldquo;As an FDE, you'll embed with customers, understand their domain, and co-develop solutions to tackle real problems in often undefined or evolving problem spaces.&rdquo; &mdash; OpenAI job posting [[PRAG]]</blockquote>"
          }
        ]
      },
      {
        t: "Why the role is exploding now",
        lead: "a16z calls it &ldquo;the hottest job in tech.&rdquo; Three shifts converged to make it the default model for AI delivery.",
        body: "<p>Galent names three converging shifts: [[GALENTFDE]]</p><ol><li><strong>AI needs context.</strong> Large models without domain context are &ldquo;blunt instruments.&rdquo; FDEs sit where the data and decisions live.</li><li><strong>Enterprises want outcomes, not pilots.</strong> &ldquo;The age of endless PoCs is over.&rdquo;</li><li><strong>Velocity matters.</strong> FDEs compress delivery from months to weeks.</li></ol><p>OpenAI, Anthropic, Databricks, Anduril, xAI and the YC cohort are all building FDE functions &mdash; whether or not they use the name. [[PRAG]][[VINOO_BLD]]</p>",
        video: "ycMcGrew"
      },
      {
        t: "The Galent delivery arc (Session-1 framing)",
        lead: "Galent's public &ldquo;Day in the Life&rdquo; is a four-panel arc the cohort rehearses every week.",
        body: "<p>Galent's four panels: [[GALENTFDE]]</p><ol><li><strong>Problem Decomposition &amp; Scoping</strong> &mdash; define solvable challenges by asking the right questions.</li><li><strong>Rapid Prototyping &amp; Iteration</strong> &mdash; build side-by-side with users.</li><li><strong>Optimization &amp; Hardening</strong> &mdash; performance, security, scale.</li><li><strong>Deployment &amp; Feedback Loop</strong> &mdash; deploy, train, feed insights back.</li></ol><p>Galent's operating model: <strong>Scope &rarr; Sequence &rarr; Build &rarr; Ship &rarr; Measure</strong> &mdash; &ldquo;turning enterprise AI projects from long-cycle pilots into continuous value loops.&rdquo; They call the craft <em>engineering empathy</em>: &ldquo;writing code that understands the problem before it solves it.&rdquo; [[GALENTFDE]]</p><p class='note'>From <strong>Galent FDE Session 1</strong> (presenter: Archit; embedded above): the FDE is framed inside an <em>app-modernization</em> workflow worked through the <strong>Stellantis</strong> example &mdash; a Fortune-500 automotive warehouse system on 30&ndash;40-year-old mainframe COBOL. See the dedicated <strong>App Modernization</strong> branch for the full method, and the Mindset node <em>&ldquo;HITL is the FDE's direction-check.&rdquo;</em> [[VIMEO]]</p>"
      }
    ]
  },

  /* ============================================================ 2 */
  {
    id: "mindset",
    t: "The Mindset",
    icon: "&#9788;",
    color: "#fbbf24",
    tag: "6 traits &middot; principles &middot; traps &middot; moves",
    lead: "The mindset is the part a curriculum can't teach by lecture. These are the traits, mental models, and anti-patterns that separate a great FDE from a competent coder.",
    nodes: [
      {
        t: "The 6 traits of a great FDE",
        lead: "The spine. Memorize the order &mdash; it is the natural shape of every defense, retro, and review.",
        body: "<ol class='trait-list'><li><strong>Relentlessly curious about the customer's world.</strong> Great FDEs surface the problem the customer gave up on or never articulated. <em>Become a user before you become a builder.</em></li><li><strong>Calibrate engineering to the situation.</strong> Know when to build a robust system vs. a script that just works. Both over- and under-engineering leave scars.</li><li><strong>Communicate across audiences.</strong> Same problem, different language for the CTO vs the eng lead. If you can't explain it in one page without jargon, you don't understand it.</li><li><strong>Stay calm when things break.</strong> Things <em>will</em> break. Crisis composure matters as much as the fix.</li><li><strong>Own outcomes without authority.</strong> The hardest skill: get a team that doesn't report to you to act &mdash; by explaining the <em>why</em>.</li><li><strong>Know when to push back.</strong> Don't just do what the customer asks. Push back <em>with an alternative, not a no.</em></li></ol><p class='cite-line'>Canonical six from [[VINOO_FDE]].</p>",
        views: [
          { r: "As a Senior FDE", t: "You are scored on traits 4&ndash;6 (calm, ownership-without-authority, principled push-back). These are the defense-day differentiators &mdash; the CIO/OIG can't be commanded, only convinced." },
          { r: "As an Entry FDE", t: "You are scored on traits 1&ndash;3 first (curiosity, calibration, communication). Master &lsquo;become a user before a builder&rsquo; before you reach for ownership-without-authority." },
          { r: "As the instructor", t: "Every game clue and rubric line should reward a trait and trap the code-only learner. Map each war-room incident to the trait it stresses." }
        ]
      },
      {
        t: "Principles &amp; mental models",
        lead: "Quotable, load-bearing, and full of traps for the unwary.",
        body: "<ul><li><strong>The XY Problem.</strong> Customers ask for <em>Y</em> when they need a solution to <em>X</em>. The single most important FDE question: <em>&ldquo;What are you trying to accomplish?&rdquo;</em> [[VINOO_FDE]]</li><li><strong>Shelfware is the enemy.</strong> Most enterprise software fails not because it's broken but because it's never adopted. &ldquo;Software that gets adopted is worth infinitely more than software that sits on a shelf.&rdquo; [[VINOO_FDE]]</li><li><strong>Build from experience, not specs.</strong> The best ideas come from engineers who felt the pain themselves. [[VINOO_FDE]]</li><li><strong>Underpromise, overdeliver.</strong> &ldquo;Done Wednesday, finished Tuesday&rdquo; beats &ldquo;Done Monday, finished Wednesday.&rdquo; [[VINOO_FDE]]</li><li><strong>Credibility is points you can spend.</strong> You earn the right to disagree by being right and delivering. [[VINOO_FDE]]</li><li><strong>Calm is preparation, not personality.</strong> Volunteer for on-call; by the 10th escalation you have a playbook in your head. [[VINOO_FDE]]</li><li><strong>The telephone game.</strong> Every person a technical message passes through degrades it. FDEs short-circuit the chain by being in the room. [[VINOO_FDE]]</li></ul>"
      },
      {
        t: "The four core moves",
        lead: "Vinoo Ganesh's distilled FDE playbook &mdash; the verbs, not the virtues.",
        body: "<ol><li><strong>Detect problems</strong> &mdash; separate what users say they want from what they actually need.</li><li><strong>Demonstrate through action</strong> &mdash; build to show, don't tell.</li><li><strong>Control the narrative</strong> &mdash; own how the work is understood across audiences.</li><li><strong>Ship fast while maintaining production quality.</strong></li></ol><p>From the engineer who built Palantir's <strong>Project Frontline</strong> (trained 250+ FDEs; alumni now at OpenAI, xAI, Anduril). [[VINOO_BLD]]</p>"
      },
      {
        t: "Traps &amp; anti-patterns",
        lead: "The wrong instinct that looks right. Every defense and game must punish these.",
        body: "<table class='trap-table'><tr><th>Anti-pattern</th><th>Why it's a trap</th></tr><tr><td>Overengineering</td><td>Two weeks on a configurable dedup engine when a one-time SQL query was needed. The customer cared about Friday. [[VINOO_FDE]]</td></tr><tr><td>Solving the wrong problem</td><td>Building Y (the literal ask) instead of X (the real need). The most expensive mistake. [[VINOO_FDE]]</td></tr><tr><td>Retreating into code</td><td>When a meeting gets tense, hiding behind the laptop. Stay present. [[VINOO_FDE]]</td></tr><tr><td>Building without seeing the data</td><td>The Cassandra story: empty date &rarr; epoch 1970 &rarr; 2.3M keyspaces &rarr; 14TB RAM to boot &rarr; OOM. They'd never seen the real data. [[VINOO_FDE]]</td></tr><tr><td>Throwing it over the wall</td><td>The old model the FDE role exists to <em>correct</em>. [[VINOO_FDE]]</td></tr><tr><td>Can't set boundaries</td><td>FDE work expands to fill all available time. Saying no is a survival skill. [[VINOO_FDE]]</td></tr></table>"
      },
      {
        t: "Why AI makes this the default",
        lead: "AI is making deployment <em>harder</em>, not easier &mdash; which is exactly why the FDE wins.",
        body: "<p>LLM systems need fine-tuning, prompt engineering, evaluation, and ongoing adjustment. &ldquo;You can't throw an LLM over the wall and expect customers to figure it out.&rdquo; [[VINOO_FDE]] The engineer who stays valuable is the one who can do what AI can't: <em>sit with a customer, understand the real problem, own the outcome.</em></p><p>Galent's forward-looking name for this is the <strong>Context Engineer</strong> &mdash; &ldquo;a natural evolution of the FDSE [who] will pair code with cognition, systems with sensemaking&hellip; The most valuable engineers of tomorrow won't just ship code &mdash; they'll shape context.&rdquo; [[GALENTFDE]] That is the bridge straight into the Graphs branch of this map.</p>",
        video: "ycMcGrew"
      },
      {
        t: "HITL is the FDE's direction-check (Session 1)",
        lead: "From the Galent Session 1 close: Human-in-the-Loop isn't a feature you ship &mdash; it's the FDE's own discipline of checking that the build is still pointed at the deliverable.",
        body: "<blockquote>&ldquo;HITL will keep a check that &mdash; whatever implementation we are doing, whatever projects we are kicking off and implementing &mdash; is it going in the right direction? This is where your <strong>platform review</strong> comes into play.&rdquo; [[VIMEO]]</blockquote><blockquote>&ldquo;You have to take your own standpoint as an FDE: <strong>what are the finalized deliverables? Am I crossing them off?</strong> If there is any discrepancy, if there is any inflexibility in here, am I matching to those? Those will be some of the key things to check.&rdquo; [[VIMEO]]</blockquote><p>This is trait 5 (own outcomes) and trait 2 (calibrate to the situation) made operational: the FDE periodically zooms out from the code to a <em>platform review</em> &mdash; deliverables checklist, discrepancy check, flexibility check &mdash; and steers. It is also the human anchor of the 7-touchpoint HITL thread the cohort runs across the programme.</p><p class='note'>Source: Galent FDE Session 1 closing segment (~51:33&ndash;53:00), presenter Archit, instructor copy. The session was an app-modernization walkthrough; the practical <strong>Stellantis</strong> case study was deferred to the next workshop. [[VIMEO]]</p>",
        views: [
          { r: "As an FDE", t: "Build the checkpoint into your own cadence &mdash; don't wait for a gate. &lsquo;Am I crossing off the finalized deliverables?&rsquo; is a question you ask yourself, not one you wait to be asked. [[VIMEO]]" },
          { r: "As the platform reviewer", t: "The review checks direction, not just correctness: discrepancy against the deliverable, and inflexibility that will not survive the customer's real constraints. [[VIMEO]]" },
          { r: "Curriculum hook", t: "Maps to the 7 HITL touchpoints (W1 Fri &rarr; W5 Wed) and every Plan-Day &sect;0 retro &mdash; the recurring &lsquo;is this still pointed at the outcome?&rsquo; checkpoint." }
        ]
      }
    ]
  },

  /* ============================================================ 3 */
  {
    id: "scenarios",
    t: "Scenarios &amp; Viewpoints",
    icon: "&#9683;",
    color: "#f472b6",
    tag: "Same problem, many lenses",
    lead: "An FDE's hardest skill is holding multiple viewpoints at once. Each scenario below is a real Karsun-FDE situation &mdash; switch the lens tabs to see how the CTO, the eng lead, the BA, the OIG auditor, and the FDE each read it.",
    nodes: [
      {
        t: "Scenario: &ldquo;Just give us a chatbot for the FAR.&rdquo;",
        lead: "An agency sponsor asks for an LLM chatbot over the Federal Acquisition Regulation. Classic XY problem.",
        body: "<p>The literal ask (Y) is a chatbot. The real need (X) is faster, <em>defensible</em> answers to acquisition questions that won't get an analyst burned in an audit. The FDE move: build the answer to X &mdash; grounded, cited, with dual-source FAR/DFARS precedence &mdash; not the literal Y.</p>",
        views: [
          { r: "Agency CIO", t: "&ldquo;Will this pass an OIG review and not hallucinate a citation that embarrasses us? What's my exposure?&rdquo; Speak to risk, budget, and renewal." },
          { r: "Eng Lead", t: "&ldquo;Pure vector RAG can't traverse FAR&rarr;DFARS precedence. We need a graph layer for multi-hop and a white-box citation path.&rdquo; (See Graphs branch.) [[TRANTOR]]" },
          { r: "Business Analyst", t: "&ldquo;The epic is &lsquo;defensible acquisition answers,&rsquo; not &lsquo;a chatbot.&rsquo; I write stories around analyst workflows and outcomes, in the agency's language.&rdquo; [[ATL]]" },
          { r: "OIG Auditor", t: "&ldquo;Show me <em>why</em> the system answered this way. &lsquo;Semantically similar chunks&rsquo; is not an acceptable answer.&rdquo; Demands a traceable reasoning path. [[TRANTOR]]" },
          { r: "FDE", t: "Own the outcome: the analyst's answer is faster AND survives audit. Push back on &lsquo;just a chatbot&rsquo; with an alternative, not a no. [[VINOO_FDE]]" }
        ]
      },
      {
        t: "Scenario: the demo crashes in front of the CEO",
        lead: "Production breaks mid-showcase. Trait 4 (stay calm) is now the whole game.",
        body: "<p>The Palantir benchmark: fixed in 4 minutes, the CEO never knew an engineer was on the phone. [[VINOO_FDE]] <em>Calm is preparation, not personality</em> &mdash; the playbook was already in the FDE's head from the 10th on-call rotation.</p>",
        views: [
          { r: "FDE", t: "Triage silently, narrate confidence, fix the smallest thing that restores the demo. How you handle the crisis matters as much as whether you fix it. [[VINOO_FDE]]" },
          { r: "Eng Lead", t: "Was there a rollback path and a runbook? The incident is a retro input, not a blame event (red-band fault framing)." },
          { r: "Client Showcase audience", t: "Sees composure or panic. The narrative you control here is the renewal conversation." }
        ]
      },
      {
        t: "Scenario: the customer asks for the elegant rebuild",
        lead: "A sponsor wants a full microservices re-architecture. Calibrate engineering to the situation.",
        body: "<p>The trap: optimizing for the wrong thing &mdash; elegant architecture, great test coverage, solving a problem that didn't exist while ignoring the one that did. [[VINOO_FDE]] The FDE calibrates: is this a script-that-works moment or a robust-system moment? Push back <em>with an alternative.</em></p>",
        views: [
          { r: "FDE", t: "Surface the real constraint (the Friday deadline, the audit, the renewal) and propose the smallest thing that hits the outcome." },
          { r: "BA", t: "Re-frames the epic against the mission outcome, not the architecture diagram. Decomposes into stories that can ship incrementally. [[ATL]]" },
          { r: "Platform reality", t: "This is literally what ReDuX's incremental-migration model optimizes for &mdash; modernize in slices, not big-bang. [[AWSPS]]" }
        ]
      }
    ]
  },

  /* ============================================================ 4 */
  {
    id: "decomposition",
    t: "Decomposition",
    icon: "&#9635;",
    color: "#a78bfa",
    tag: "Epic &rarr; Story &rarr; Subtask",
    lead: "Decomposition is where the mindset, the graphs, and the platforms meet. The BA owns the <em>what/why</em> (epics &amp; stories); the engineer is the focal point for the <em>how</em> (subtasks that ship code); the AI agent plans against the company graph.",
    nodes: [
      {
        t: "The hierarchy",
        lead: "Initiative &rarr; Epic &rarr; Story &rarr; Task/Subtask. Each level answers a different question for a different audience.",
        body: "<table class='trap-table'><tr><th>Level</th><th>What</th><th>Horizon</th><th>Owner lens</th></tr><tr><td><strong>Initiative</strong></td><td>Collection of epics toward one goal</td><td>Multi-quarter&ndash;year</td><td>Program / sponsor</td></tr><tr><td><strong>Epic</strong></td><td>Large body of work &rarr; many stories; &ldquo;2&ndash;3 per quarter&rdquo;</td><td>Month&ndash;quarter</td><td>Business Analyst</td></tr><tr><td><strong>Story</strong></td><td>Requirement from the <em>end-user's</em> perspective; sprint-sized</td><td>1&ndash;2 weeks</td><td>BA &harr; Eng handoff</td></tr><tr><td><strong>Subtask</strong></td><td>The technical <em>how</em>; one dev/QA</td><td>Hours&ndash;days</td><td>Engineer (FDE)</td></tr></table><p class='cite-line'>Hierarchy + horizons from [[ATL]]; level definitions corroborated by [[PLANE]].</p>"
      },
      {
        t: "The BA-vs-Engineer split (the load-bearing line)",
        lead: "&ldquo;Reporting to the Head of Engineering, you'd speak in <strong>epics</strong>. Talking to a dev colleague, you'd speak at the <strong>story</strong> level.&rdquo; [[ATL]]",
        body: "<p>The altitude of the conversation tells you who owns it.</p>",
        views: [
          { r: "Business Analyst", t: "Owns Initiative &rarr; Epic &rarr; Story. Writes in the agency's/user's language, tied to mission outcomes. Asks the XY-Problem question on every story: is this the real need, or the literal ask? [[ATL]][[VINOO_FDE]]" },
          { r: "Engineer / FDE", t: "Owns Story &rarr; Subtask &rarr; code. Decides script-vs-robust-system (calibrate to situation). Writes the ADR &mdash; the &lsquo;why not X.&rsquo; The focal point for the sub-tasks that actually deliver. [[ATL]]" },
          { r: "AI Agent", t: "Task planning IS decomposition: break the complex task into subtasks &lsquo;easier to handle&rsquo;; good decomposition improves agent accuracy and efficiency. The graph is what lets it decompose <em>correctly.</em> [[ARXIV_GA]]" }
        ]
      },
      {
        t: "Worked decomposition: a Pair-Project epic",
        lead: "From sponsor wish to shippable subtasks &mdash; the full ladder on a federal-acquisitions Pair Project.",
        body: "<p><strong>Initiative</strong> (sponsor): <em>Modernize grants intake so award decisions are faster and audit-ready.</em></p>",
        deeper: [
          {
            t: "Epic (BA owns)",
            lead: "&ldquo;AI-assisted eligibility review for incoming grant applications.&rdquo;",
            body: "<p>Written as an outcome, not a feature. The BA defines acceptance in mission terms: <em>reviewer time per application drops, and every decision is explainable to an auditor.</em> [[ATL]]</p>"
          },
          {
            t: "Stories (BA &harr; Eng)",
            lead: "Sprint-sized, user-perspective slices.",
            body: "<ul><li>As a reviewer, I see an eligibility summary grounded in the actual 2 CFR 200 rule that applied.</li><li>As an auditor, I can trace why an application was flagged ineligible.</li><li>As a reviewer, I can override the AI with a recorded justification.</li></ul><p>That third story is a <strong>context-graph decision event</strong> in disguise (see Graphs branch). [[KOREAI]]</p>"
          },
          {
            t: "Subtasks (Engineer/FDE owns)",
            lead: "The technical how &mdash; one dev each.",
            body: "<ul><li>Build the knowledge-graph schema for application &rarr; rule &rarr; precedent.</li><li>Wire GraphRAG retrieval over the rule corpus; add white-box citation path.</li><li>Persist override events to the context graph with approver + condition + precedent link.</li><li>HITL gate: which decisions the agent may auto-resolve vs. escalate.</li></ul><p>The override-event subtask is where decomposition, graphs, and the 7-touchpoint HITL thread converge.</p>"
          }
        ]
      },
      {
        t: "Decomposition as an FDE-supervised AI act",
        lead: "AI tools now generate epic&rarr;story&rarr;task hierarchies from a high-level idea. The FDE supervises the cut.",
        body: "<p>AI backlog tools propose epics, break them into stories, and suggest initial tasks from a single idea. [[ARXIV_GA]] But an agent only decomposes <em>correctly</em> if it can traverse the company graph &mdash; which subtasks touch which services, entities, and compliance rules. Bad decomposition is usually a missing-graph problem, not a model problem. This is the direct hand-off to the next branch.</p>"
      },
      {
        t: "How Galent draws the line (Session 1)",
        lead: "The clearest real-world statement of the BA-vs-engineer split: epics/stories carry no file names; sub-tasks carry the legacy file references &mdash; for a dev <em>or an AI agent.</em>",
        body: "<p>In Galent's app-mod pipeline, decomposition is split across two deliberately separate steps for two different audiences: [[VIMEO]]</p><blockquote>&ldquo;Epics and stories we want in a very <strong>business-friendly language</strong> that the business analyst can validate. If it contains technical jargon and file names, that makes it complicated for them &mdash; they'd have to look into the codebase, and that's not the way of work.&rdquo; [[VIMEO]]</blockquote><blockquote>&ldquo;Sub-tasks are technically specific &mdash; <strong>technical specification, definition of done, and all the relevant files from the existing legacy codebase</strong>, so any dev <em>or any AI agent</em> working on the sub-task can understand the code that existed, alongside the spec and the expected outcome.&rdquo; [[VIMEO]]</blockquote><p>The split is literal: <strong>no file names above the line (BA), legacy file references below it (engineer/agent).</strong> The validated epics/stories + sub-tasks become a <em>ready-to-build backlog</em> in Jira, fetched in implementation order, and a per-sub-task implementation agent wraps each in ~5&ndash;7 minutes. See the App Modernization branch for the full pipeline. [[VIMEO]]</p>",
        views: [
          { r: "Business Analyst", t: "You validate epics/stories in business language &mdash; impact, time estimate, resource planning &mdash; without reading code. You review impact <em>preemptively</em>, before the change is built. [[VIMEO]]" },
          { r: "Engineer / FDE", t: "Your surface is the sub-task: technical spec + definition of done + the exact legacy files to reference. This is where code actually ships. [[VIMEO]]" },
          { r: "AI Agent", t: "The sub-task is written so an agent can execute it: legacy file references + DoD + expected outcome. The richer the sub-task context, the cleaner the agent's execution. [[VIMEO]][[ARXIV_GA]]" }
        ]
      }
    ]
  },

  /* ============================================================ 4b — App Modernization (Galent Session 1) */
  {
    id: "appmod",
    t: "App Modernization",
    icon: "&#9851;",
    color: "#f59e0b",
    tag: "The FDE method, end to end",
    lead: "This is the work itself: take a system a business has leaned on for decades and modernize it <em>without losing the business impact.</em> Grounded in Galent FDE Session 1 (presenter Archit), worked through the Stellantis example. [[VIMEO]]",
    nodes: [
      {
        t: "Why modernize &mdash; keep the value, remove the risk",
        lead: "Legacy is hard to maintain, expensive to run, and hard to extend. You replace it while making sure the business <em>gains</em>, never loses.",
        body: "<p>Companies modernize because legacy systems are &ldquo;hard to maintain, expensive to run&rdquo; (dependencies + size) and costly to customize on top. The job is to stand up new software that covers everything the old one did &mdash; <strong>&ldquo;keep the business value and remove the risk.&rdquo;</strong> It should be a gain, not a like-for-like swap. [[VIMEO]]</p><p>And it's never big-bang: modernization runs <strong>in phases</strong> over six months to multiple years, proven out with POCs on the most critical one or two modules first. [[VIMEO]]</p>",
        video: "vimeoSession1"
      },
      {
        t: "Spec-Driven Development (SDD)",
        lead: "The spine of the whole method: a versioned <em>spec</em> &mdash; not the code &mdash; is the source of truth. Write the spec, derive the plan, break it into tasks, then generate code. The Galent session runs exactly this loop.",
        body: "<p><strong>Spec-driven development</strong> is the methodology where an executable, version-controlled <em>specification</em> &mdash; not the code &mdash; is the single source of truth: you describe <em>what</em> the system should do, derive a plan, break it into atomic tasks, and only then generate code. When requirements change, you edit the spec and regenerate. [[SDD_BCMS]]</p><blockquote>&ldquo;The spec is the prompt.&rdquo; &mdash; the phrase that keeps recurring across 2025&ndash;26 GitHub and AWS posts. [[SDD_BCMS]]</blockquote><p>This is precisely the Galent FDE flow: analysis &rarr; a validated <strong>specification document</strong> (it goes to the client as the proposal) &rarr; epics &amp; stories &rarr; sub-tasks &rarr; implementation. The spec is the contract the agent builds against &mdash; the same discipline the cohort practises on every Plan Day. [[VIMEO]]</p>",
        deeper: [
          {
            t: "Why SDD exists &mdash; the vibe-coding correction",
            lead: "SDD emerged in 2025 as the answer to AI agents that produce plausible code which drifts from intent.",
            body: "<p>&ldquo;Vibe coding&rdquo; (term popularized by Andrej Karpathy, early 2025) is prompting an agent and accepting whatever it produces &mdash; fast for prototypes, miserable at scale: the code drifts from intent, hallucinates APIs, and decays as the project grows. A precise spec is the missing layer between human intent and machine execution. [[SDD_BCMS]] It is the FDE's antidote to <em>both</em> shelfware and vibe-coding drift. [[SDD_BCMS]][[VIMEO]]</p>"
          },
          {
            t: "The SDD loop",
            lead: "Spec &rarr; Plan &rarr; Tasks &rarr; Code &rarr; verify against the spec. The spec stays alive.",
            body: "<p>You capture intent, behaviour, edge cases, and acceptance criteria in a structured form a model can act on, then an agent reads it, plans, breaks it into tasks, writes code, and verifies against the original criteria. [[SDD_BCMS]] Tool workflows make this concrete: <strong>GitHub Spec Kit</strong> runs <code>/specify &rarr; /plan &rarr; /tasks &rarr; /implement</code>; <strong>AWS Kiro</strong> guides Requirements &rarr; Design &rarr; Tasks before any code is generated. [[SPECKIT]][[KIRO]]</p>"
          },
          {
            t: "It's gone mainstream (2026)",
            lead: "By 2026 every major AI coding tool ships an SDD flavour.",
            body: "<p>GitHub Spec Kit (open-source, supports Claude Code, Copilot, Gemini CLI), AWS Kiro (agentic IDE on Claude Sonnet 4.5), Cursor, OpenSpec, BMAD, Tessl, Google Antigravity &mdash; each shipped its own SDD flavour, and DeepLearning.AI launched a dedicated &ldquo;Spec-Driven Development with Coding Agents&rdquo; course in late 2025. GitHub reports teams on Spec Kit ship with roughly an order-of-magnitude fewer &ldquo;regenerate from scratch&rdquo; cycles. [[SDD_BCMS]][[SPECKIT]]</p>"
          }
        ],
        views: [
          { r: "Business Analyst", t: "The spec is your surface: you validate intent + acceptance criteria before code exists &mdash; the cheapest place to catch the wrong build. [[VIMEO]]" },
          { r: "Engineer / FDE", t: "You build against the spec, not vibes. The spec is the guardrail that keeps the agent's output from drifting from intent. [[SDD_BCMS]]" },
          { r: "Why it's the FDE discipline", t: "Intent captured up front, regenerable, auditable &mdash; exactly the co-pilot-not-autopilot stance, and what every Plan-Day §0 retro re-checks. [[SDD_BCMS]][[VIMEO]]" }
        ]
      },
      {
        t: "The FDE's 4-step method",
        lead: "Before any platform, this is the discipline you run yourself: understand the business, analyze the sources, write the spec, implement in modules.",
        body: "<p>Archit's four steps &mdash; the human method the Galent platform later accelerates: [[VIMEO]]</p>",
        deeper: [
          {
            t: "1 &middot; Understand the business before a single line of code",
            lead: "What is the app, why does it matter, where does it sit, and what must never break?",
            body: "<p>&ldquo;The first thing you do &mdash; understand the business before you even read a single line of code.&rdquo; On the first client call, take a walkthrough; see it from the <em>user's</em> perspective (persona, current features, desired enhancements). Find the <strong>core trade-offs</strong>: the modules that, if they break, halt the business. [[VIMEO]]</p><blockquote>Stellantis warehouse system: some modules must never break &mdash; downtime is loss on a minute-to-minute basis. Those get battle-tested before any deploy. [[VIMEO]]</blockquote>"
          },
          {
            t: "2 &middot; Analysis of sources &mdash; trust nothing, trace everything",
            lead: "Code + docs + manuals + screenshots. Never rely on one tool. Never take the AI analysis as hard truth.",
            body: "<blockquote>&ldquo;Do not rely on one platform or one tool&hellip; You should not take that analysis as hard truth. Always counter, question, and verify with the sources cited, and always trace it back to the business understanding you've built.&rdquo; [[VIMEO]]</blockquote><p>On a mismatch: flag it, redo the analysis with another tool, check the codebase yourself, escalate to <strong>FD support</strong>, then to a client <strong>SME</strong>. Legacy codebases run 3&ndash;4 million lines &mdash; expect heavy back-and-forth. [[VIMEO]]</p>"
          },
          {
            t: "3 &middot; Specification generation (via target state)",
            lead: "Map features to the validated business understanding, then write what the modernized app will be. This goes to the client as a proposal.",
            body: "<p>Once sources are analyzed and validated against the business understanding, you write the <strong>specification document</strong> &mdash; the modernized app's features, screens, personas &mdash; all traced back to ground truth. It is itself a checkpoint (&ldquo;how well are my specs grounded?&rdquo;) and it goes to the client <strong>as a proposal</strong>, with multiple iterations of feature addition/omission. [[VIMEO]]</p>"
          },
          {
            t: "4 &middot; Implement in modules, never in one go",
            lead: "AI coding tools + test, module by module, validated by SMEs &mdash; so a domino effect can't take the whole system down.",
            body: "<p>&ldquo;Don't let the domino effect happen &mdash; do it one step at a time and validate with SMEs and FD support.&rdquo; The common failure: a necessary feature gets missed and the <em>intended business impact isn't derived</em> &mdash; most often when the source (COBOL) and the target language are both unfamiliar. That's exactly where an SME validates the implemented approach. [[VIMEO]]</p>"
          }
        ]
      },
      {
        t: "Target state &mdash; the intermediary that decides everything",
        lead: "Between analysis and spec sits the target state: where UI/UX, database, language, and deployment strategy are actually chosen.",
        body: "<p><strong>Current state</strong> = where the app is now; <strong>target state</strong> = the modernized design. The <strong>target-state configuration</strong> is where the big calls land: UI/UX, DB choice (e.g. PostgreSQL &rarr; MongoDB), target language, deployment architecture (all-at-once vs phased), and the phase-out pattern. [[VIMEO]]</p>",
        views: [
          { r: "Where does UI/UX get decided?", t: "An audience question in Session 1: UI/UX inputs arrive in the target-state config, between analysis (step 2) and spec generation (step 3) &mdash; alongside DB, language, and deployment architecture. [[VIMEO]]" },
          { r: "Why it matters", t: "Get the target state right and the spec, the backlog, and the implementation all inherit correct decisions. Get it wrong and every downstream step compounds the error." }
        ]
      },
      {
        t: "The Galent app-mod pipeline (7 steps)",
        lead: "What the FDE does by hand, the platform pipelines &mdash; ingestion to a ready-to-build backlog to an implementation agent. A co-pilot, not autopilot.",
        body: "<p><strong>Inputs:</strong> source code, documentation, MOM (minutes of meeting), DB schema, client data + the target-state config. <strong>Outputs:</strong> an understanding of the existing app, a modernized target design (security, DB, data-migration strategy, features, architecture), and a <strong>ready-to-build backlog</strong> (epics/stories/subtasks straight into Jira, fetched in implementation order). [[VIMEO]]</p>",
        deeper: [
          {
            t: "1 &middot; Ingestion of sources",
            lead: "Ingest the legacy codebase + all client sources; map the correlation of features &harr; data schema &harr; user persona.",
            body: "<p>The platform ingests the legacy code and sources, infers the business features behind them, and builds a correlation map &mdash; features, data schema, personas. This is a <strong>company-graph</strong> step in disguise (see the Graphs branch). [[VIMEO]]</p>"
          },
          {
            t: "2 &middot; Target-state generation",
            lead: "A complete modernized design + config + security &mdash; &ldquo;dissect the whole application before it is built.&rdquo;",
            body: "<p>Lots of back-and-forth with the customer, with walkthrough checkpoints at each intermediary step (architecture diagram, parameters). [[VIMEO]]</p>"
          },
          {
            t: "4 &middot; Implementation-specs generation",
            lead: "From the target state, a spec that reads as a statement of work &mdash; agreed with the client.",
            body: "<p>The implementation spec is the agreed plan for how the whole modernized build will go. [[VIMEO]]</p>"
          },
          {
            t: "5 &middot; Epics &amp; stories &mdash; the BA's surface",
            lead: "Business-friendly language, no technical jargon or file names, so the BA can validate without reading code.",
            body: "<blockquote>&ldquo;Epics and stories we want in a very business-friendly language that the business analyst can validate. If it contains technical jargon and file names, that makes it complicated for them &mdash; they'd have to look into the codebase, and that's not the way of work.&rdquo; [[VIMEO]]</blockquote><p>This is where the client-side BA &ldquo;shines&rdquo;: time estimates, resource planning, accept/adjust the flow. [[VIMEO]] (Cross-ref the Decomposition branch.)</p>"
          },
          {
            t: "6 &middot; Sub-tasks &mdash; the engineer's / agent's surface",
            lead: "Technically specific: technical spec + definition of done + the relevant legacy files, so a dev OR an AI agent can execute.",
            body: "<blockquote>&ldquo;Sub-tasks are technically specific &mdash; technical specification, definition of done, and all the relevant files from the existing legacy codebase, so any dev <em>or any AI agent</em> working on the sub-task can understand the code that existed alongside the spec and the expected outcome.&rdquo; [[VIMEO]]</blockquote><p>Note the deliberate split: epics/stories carry <em>no</em> file names (BA surface); sub-tasks carry the legacy file references (engineer/agent surface). That is the BA-vs-engineer boundary, made literal. [[VIMEO]]</p>"
          },
          {
            t: "7 &middot; The implementation agent (code companion)",
            lead: "Triggers per sub-task, wraps each in ~5&ndash;7 minutes; plans, checks for duplication, implements, commits, resolves conflicts.",
            body: "<p>&ldquo;Understand it as a software engineer itself&rdquo; &mdash; it designs the plan for the sub-task, checks the codebase for existing implementations / duplication, and once the plan is validated, implements and commits, handling conflicts. ~5&ndash;7 minutes per sub-task. [[VIMEO]]</p>"
          }
        ]
      },
      {
        t: "Co-pilot, never autopilot (the closing thesis)",
        lead: "The platform helps &mdash; it does not do the task for you. The FDE keeps the human checkpoint.",
        body: "<blockquote>&ldquo;Treat this platform as a co-pilot&hellip; you cannot let it be on autopilot. There should be analysis and validation checks and HITL in the play that keeps a check &mdash; is it going in the right direction? This is where your platform review comes into play.&rdquo; [[VIMEO]]</blockquote><p>This is the same discipline as the Mindset branch's <em>direction-check</em> node: deliverables crossed off, discrepancies caught, inflexibility flagged. The FDE owns the steering even when the agent writes the code. [[VIMEO]]</p>",
        views: [
          { r: "As an FDE", t: "The agent accelerates; you adjudicate. &lsquo;Am I crossing off the finalized deliverables?&rsquo; stays your question. [[VIMEO]]" },
          { r: "Federal lens", t: "Co-pilot-not-autopilot is the federal posture too: a code-generating agent on a regulated workload needs human validation + an audit trail (cross-ref Graphs / OWASP LLM work)." }
        ]
      },
      {
        t: "Field jargon (defined in Session 1)",
        lead: "The vocabulary the cohort needs to follow a real modernization call.",
        body: "<table class='trap-table'><tr><th>Term</th><th>Meaning</th></tr><tr><td>Legacy system</td><td>Old software a business still relies on (e.g. Stellantis' COBOL warehouse system).</td></tr><tr><td>POC</td><td>Proof of concept on 1&ndash;2 critical modules first &mdash; lays the foundation for the whole project.</td></tr><tr><td>Current / target state</td><td>Where the app is now vs the modernized design you're driving toward.</td></tr><tr><td>Mainframe / COBOL / IBM z/OS</td><td>The legacy stack the Stellantis system was written on.</td></tr><tr><td>Specs</td><td>The documentation of what the modernized target state will be.</td></tr><tr><td>SME</td><td>Subject-matter expert &mdash; request from employer or client for unfamiliar tech. Encouraged.</td></tr><tr><td>FD support</td><td>An existing FDE supporting you (~6 months, phase 3) &mdash; distinct from a client SME.</td></tr><tr><td>BA</td><td>Business analyst &mdash; reviews impact <em>preemptively</em>, validates epics/stories.</td></tr></table><p class='cite-line'>All defined in Galent FDE Session 1. [[VIMEO]]</p>"
      }
    ]
  },

  /* ============================================================ 5 */
  {
    id: "graphs",
    t: "Knowledge &amp; Context Graphs",
    icon: "&#9903;",
    color: "#38bdf8",
    tag: "The company graph that lets agents execute",
    lead: "To understand a large, complex federal system &mdash; and to let an AI agent act in it safely &mdash; you build a graph of the company: what exists (knowledge graph) and how decisions get made (context graph). This is the substrate under ReDuX and GalentAI both.",
    nodes: [
      {
        t: "The three-layer context stack",
        lead: "Vector RAG, Knowledge Graph, and Context Graph are not alternatives &mdash; they are three layers of one stack.",
        body: "<table class='trap-table'><tr><th>Layer</th><th>Question it answers</th><th>Agent role</th></tr><tr><td><strong>Vector RAG</strong></td><td>What does our documentation <em>say</em>?</td><td>Surfaces knowledge</td></tr><tr><td><strong>Knowledge Graph</strong></td><td>What is true now, and how is it connected?</td><td>Structured reasoning</td></tr><tr><td><strong>Context Graph</strong></td><td>How did we get here? How have we handled this before?</td><td>Judgment on edge cases</td></tr></table><p>&ldquo;AI memory, RAG, and knowledge graphs are not alternatives to pick between &mdash; they are three distinct layers of the same context stack.&rdquo; [[TRANTOR]] &ldquo;RAG improves what a model <em>knows</em>. A context graph improves how an agent <em>decides</em>.&rdquo; [[KOREAI]]</p>"
      },
      {
        t: "Knowledge graph vs context graph",
        lead: "A knowledge graph maps what exists. A context graph records how decisions were made. Both are necessary; they conflate constantly.",
        body: "<table class='trap-table'><tr><th>Dimension</th><th>Knowledge Graph</th><th>Context Graph</th></tr><tr><td>Core unit</td><td>Entity + relationship</td><td>Decision event (situation, policy, exception, approver, precedent)</td></tr><tr><td>Time</td><td>Static snapshot of current state</td><td>Temporal record of evolving behavior</td></tr><tr><td>Query focus</td><td>&ldquo;what / who&rdquo;</td><td>&ldquo;how / why&rdquo;</td></tr><tr><td>Captures</td><td>Structure &amp; connections (data lineage)</td><td>Reasoning, exceptions, precedent (decision lineage)</td></tr><tr><td>Powers</td><td>Search, retrieval, entity resolution</td><td>Autonomous agent judgment &amp; edge cases</td></tr></table><p class='cite-line'>Gartner Feb 2026 line, via [[KOREAI]].</p>",
        deeper: [
          {
            t: "What a decision event looks like",
            lead: "The atomic unit of a context graph.",
            body: "<p>A decision event captures: the situation that triggered it, the entity involved, the conditions present, the policy version in effect; what was decided/approved/escalated/overridden; whether the standard rule was followed or <em>bent</em>, under what conditions, by whose authority; and a link to the prior decisions that informed it. [[KOREAI]]</p><blockquote>A log records that something happened. A database records current state. A context graph records <em>why a decision was permitted to happen, what it was based on, and what it means for every similar situation that follows.</em> [[KOREAI]]</blockquote>"
          },
          {
            t: "The analyst signal",
            lead: "Gartner + Forrester flagged context graphs as foundational infrastructure for agentic AI in early 2026.",
            body: "<p>Gartner projects that by <strong>2029, 80%</strong> of AI agent platforms will have context layers in place &mdash; today <strong>fewer than 10%</strong> do. [[KOREAI]] The missing piece they name is the &ldquo;why&rdquo; and the &ldquo;how,&rdquo; especially when decisions happened outside any formal system. [[KOREAI]]</p>"
          }
        ]
      },
      {
        t: "Why pure vector RAG isn't enough",
        lead: "Three structural failures that better prompting and bigger context windows cannot fix.",
        body: "<ol><li><strong>The multi-hop wall.</strong> &ldquo;How did the delay in Project Apollo affect Q3 APAC margins?&rdquo; Vector RAG retrieves Apollo docs and APAC docs but cannot traverse the causal link. GraphRAG: <strong>90.63% vs 46.88%</strong> on multi-hop. [[TRANTOR]]</li><li><strong>The audit gap.</strong> &ldquo;These chunks were semantically similar&rdquo; is not an acceptable answer to a compliance officer. Graphs give a white-box path: <em>Entity A &rarr; Relationship C &rarr; Entity B.</em> [[TRANTOR]]</li><li><strong>The global question.</strong> &ldquo;What are the compliance risks across all our vendor contracts?&rdquo; needs whole-corpus synthesis (Microsoft GraphRAG's Leiden-community summarization), not top-k chunks. [[TRANTOR]][[MSGRAPH]]</li></ol>",
        views: [
          { r: "The numbers", t: "GraphRAG ~80% accuracy vs ~51% for vector RAG &mdash; a 3.4x improvement on enterprise benchmarks (Lettria/AWS, Dec 2024). Up to +35% precision when KGs are integrated. [[TRANTOR]]" },
          { r: "The adoption gap", t: "71% of orgs use GenAI regularly (McKinsey) but only 17% attribute >5% of EBIT to it &mdash; &lsquo;largely an architecture problem.&rsquo; ~85% adopting hybrid vector+graph RAG by 2026. [[TRANTOR]]" },
          { r: "Federal lens", t: "White-box auditability is exactly what an OIG / ATO reviewer demands. &lsquo;Show me the reasoning path&rsquo; is a graph query, not a vector lookup. This is why every serious federal-modernization platform converges on a graph layer." }
        ]
      },
      {
        t: "The company graph &rarr; agent execution",
        lead: "Build a graph of the whole system, and the agent can finally decompose and act <em>clearly.</em>",
        body: "<p>This closes the loop with Decomposition. An agent that can traverse a knowledge graph of services, data, and dependencies &mdash; governed by a context graph of which decisions it may make autonomously vs. escalate &mdash; can break a complex task into correct subtasks and execute them with a defensible trail. [[ARXIV_GA]][[KOREAI]] The knowledge graph gives the agent the map; the context graph gives it the judgment and the guardrail.</p>"
      }
    ]
  },

  /* ============================================================ 6 */
  {
    id: "platforms",
    t: "ReDuX &amp; GalentAI",
    icon: "&#9881;",
    color: "#34d399",
    tag: "The end-goal capability",
    lead: "What the cohort builds by hand is what these platforms automate. Karsun's ReDuX is the federal-modernization end-goal; GalentAI is the horizontal comparator. Both lead with a graph layer &mdash; that's not a coincidence.",
    nodes: [
      {
        t: "Karsun ReDuX &mdash; the federal end-goal",
        lead: "An agentic mainframe/legacy-modernization platform on AWS Bedrock. A three-agent loop the cohort rehearses by hand.",
        body: "<p><strong>Blueprint &rarr; Modernization &rarr; Verifier.</strong> [[AWSPS]]</p><ol><li><strong>Blueprint Agent</strong> &mdash; discovery: analyzes COBOL/Java/Angular, builds a domain <strong>knowledge graph</strong> (user flows, APIs, data structures, jobs) in Amazon Neptune; RAG-grounded chatbot for business-rule Q&amp;A with hallucination controls.</li><li><strong>Modernization Agent</strong> &mdash; generates production code from Blueprint output; incremental migration; flexible foundation-model switching.</li><li><strong>Verifier Agent</strong> &mdash; auto-generates test scripts, organizes data into user stories, builds data-sync/ETL pipelines.</li></ol><p>Stack: EKS, Bedrock (Claude), AWS PrivateLink, Aurora PostgreSQL, <strong>Neptune (knowledge graph)</strong>, S3. [[AWSPS]]</p>",
        deeper: [
          {
            t: "Federal posture &mdash; the Tradewinds express lane",
            lead: "No FedRAMP. But CDAO Tradewinds Awardable (Oct 2025) + AWS competency stack + CMMI L5.",
            body: "<p>ReDuX is <strong>not FedRAMP-authorized.</strong> Its defensible federal claim is <strong>CDAO Tradewinds Awardable status (Oct 2025)</strong> for Department-of-War work, assessed via competitive scoring &mdash; an alternate, faster procurement path. [[TRADEWINDS]] Plus AWS Government/Migration/Modernization/DevOps competencies and CMMI v2.0 Level 5. [[KARSUN]] Origin: GSA + FAA modernization. ISG Provider Lens 2026 ranks Karsun <strong>Contender</strong> (US PubSec) + <strong>Product Challenger</strong> (Global Software) &mdash; not Leader. [[ISG]]</p>"
          },
          {
            t: "Pricing (unusually transparent)",
            lead: "Self-Hosted $1,500/mo, Cloud Tenant $4,000/mo, + $0.09/Input Unit + $0.05/Output Unit.",
            body: "<p>Published on AWS Marketplace &mdash; rare for a federal-targeting platform. [[AWSMP]] Claimed outcomes: 4x faster delivery, 50% fewer resources, 22.5% productivity, 2x code quality &mdash; all <em>marketing claims requiring validation</em>, no published baseline. [[AWSPART]]</p>"
          }
        ]
      },
      {
        t: "GalentAI &mdash; the horizontal comparator",
        lead: "An AI-native digital-engineering platform: 9 engines, 125+ reusable agents. Names both a Knowledge Graph and a Context Graph engine.",
        body: "<p>Four prominent engines: [[GALENT]]</p><ul><li><strong>NeuroQL</strong> &mdash; &ldquo;patent-pending prompt engine, 70% fewer context-window failures.&rdquo;</li><li><strong>RCM</strong> &mdash; neurosymbolic: fuses neural reasoning with rule enforcement.</li><li><strong>Knowledge Graph</strong> &mdash; &ldquo;maps entire systems including code, data, logs, dependencies before AI execution.&rdquo;</li><li><strong>Context Graph</strong> &mdash; &ldquo;encodes business logic, architecture standards, and compliance rules governing AI actions.&rdquo;</li></ul><p>That KG+CG split is a near-textbook version of the Graphs branch. Federal posture: <strong>none disclosed</strong> &mdash; no FedRAMP, no GovCloud, no named federal customer. Verticals are Banking/Healthcare/Insurance/Comms. [[GALENT]] Galent's own FDE practice runs in self-sufficient <strong>AI-native pods</strong>. [[GALENTFDE]]</p>",
        deeper: [
          {
            t: "Managed agents vs enterprise platforms",
            lead: "Galent's May-2026 counter-positioning vs Anthropic's Claude Managed Agents.",
            body: "<p>Galent's thesis: managed agents are &ldquo;infrastructure streamlined for convenience &mdash; but not designed for control,&rdquo; and recommends &ldquo;build your core on enterprise AI platforms, use managed agents to accelerate at the edges.&rdquo; [[GALENTMA]] A live W3 multi-agent design question: when do you use a managed-agent runtime vs. a platform layer vs. a custom LangGraph build?</p>"
          }
        ]
      },
      {
        t: "Comparative &amp; the cohort frame",
        lead: "Vertical federal (ReDuX) vs horizontal commercial (GalentAI). Both converge on a graph layer.",
        body: "<table class='trap-table'><tr><th></th><th>ReDuX</th><th>GalentAI</th></tr><tr><td>Scope</td><td>Vertical: legacy &rarr; cloud-native</td><td>Horizontal: 9 engines, 125+ agents</td></tr><tr><td>Customer</td><td>US federal agencies</td><td>Banking/Health/Insurance/Comms</td></tr><tr><td>Federal ATO</td><td>CDAO Tradewinds Awardable</td><td>None disclosed</td></tr><tr><td>LLM</td><td>Bedrock-only (Claude)</td><td>&ldquo;Routes across any LLM&rdquo;</td></tr><tr><td>Graph layer</td><td>Neptune KG</td><td>KG + CG engines</td></tr></table><blockquote>The cohort frame: <em>&ldquo;You are not building a from-scratch federal-AI platform. You are building the thing that, if validated, becomes a ReDuX accelerator on your pair's specific federal-acquisitions aspect.&rdquo;</em> [[AWSPS]]</blockquote>",
        views: [
          { r: "Pricing posture", t: "Karsun publishes per-unit rates; Galent says &lsquo;flat-priced&rsquo; with no rate card. In federal procurement, pricing opacity is often a blocker. [[AWSMP]][[GALENT]]" },
          { r: "Lock-in trade", t: "ReDuX's defensibility comes FROM leaning into the AWS stack; Galent's comes FROM abstracting the LLM. Both work &mdash; each breaks at a different 5&ndash;10yr horizon. [[AWSPS]][[GALENTMA]]" },
          { r: "Where ReDuX stops", t: "The three-agent loop ends at Verifier &mdash; no observability/AI-SRE/auto-remediation. That gap is exactly the cohort's W5 AIOps week. [[AWSPS]]" }
        ]
      }
    ]
  },

  /* ============================================================ 7 */
  {
    id: "resources",
    t: "Resources &amp; Video",
    icon: "&#9654;",
    color: "#fb7185",
    tag: "Watch, then read deeper",
    lead: "Every claim on this map is backed by a citation. Start with the videos, then follow the source links. This list grows with every research pass.",
    nodes: [
      {
        t: "Watch first",
        lead: "Two videos that frame the whole map.",
        body: "<p>Embedded below: the Galent FDE Session 1 (instructor copy) and Bob McGrew's YC FDE Playbook keynote.</p>",
        video: "vimeoSession1"
      },
      {
        t: "Bob McGrew &mdash; The FDE Playbook (YC)",
        lead: "Palantir/OpenAI pioneer on why &ldquo;doing things that don't scale, at scale&rdquo; is the heart of the AI boom.",
        body: "<p>50-minute keynote. [[YCFDE]]</p>",
        video: "ycMcGrew"
      },
      {
        t: "Read deeper &mdash; the mindset",
        lead: "The canonical FDE writing.",
        body: "<ul><li>[[VINOO_FDE]] &mdash; the richest single source (6 traits, traps, playbook).</li><li>[[VINOO_BLD]] &mdash; the four core moves.</li><li>[[PAL_DAY]] &mdash; the origin &lsquo;many capabilities for one customer.&rsquo;</li><li>[[PRAG]] &mdash; the market: Deltas, OpenAI, demand.</li><li>[[GALENTFDE]] &mdash; the Galent FDSE model + Context Engineer.</li><li>[[SVPG]] &mdash; product-leadership view.</li></ul>"
      },
      {
        t: "Read deeper &mdash; graphs &amp; decomposition",
        lead: "The agent-execution substrate.",
        body: "<ul><li>[[KOREAI]] &mdash; context graphs, decision events, Gartner 2026.</li><li>[[TRANTOR]] &mdash; GraphRAG stats, multi-hop wall, white-box audit.</li><li>[[ARXIV_GA]] &mdash; Graphs Meet AI Agents (taxonomy).</li><li>[[MSGRAPH]] &mdash; Microsoft GraphRAG.</li><li>[[ATL]] &mdash; epics/stories/initiatives.</li><li>[[PLANE]] &mdash; epic vs feature vs story vs task.</li></ul>"
      },
      {
        t: "Read deeper &mdash; the platforms",
        lead: "ReDuX &amp; GalentAI primary sources.",
        body: "<ul><li>[[AWSPS]] &mdash; ReDuX architecture (canonical).</li><li>[[AWSMP]] &mdash; ReDuX pricing.</li><li>[[TRADEWINDS]] &mdash; CDAO Tradewinds Awardable.</li><li>[[ISG]] &mdash; ISG Provider Lens 2026.</li><li>[[GALENT]] &mdash; GalentAI engines.</li><li>[[GALENTMA]] &mdash; managed-agents positioning.</li></ul><p class='note'>Full cited briefs live in this repo at <code>research/fde-mindset-20260617.md</code>, <code>research/fde-platform-graphs-decomposition-20260617.md</code>, and <code>research/galentai-vs-karsun-redux-comparative-20260522.md</code>.</p>"
      }
    ]
  }
];

// expose
window.FDE = { SOURCES, VIDEOS, BRANCHES };
