# Submerged · Portfolio Mockup · Context Doc

> Handoff doc for resuming work on the Submerged portfolio mockup with Claude.
> Last updated: end of session that produced mockup v4.4.

---

## TL;DR for next-Claude

I'm Marina DiPonio, a UX researcher / product designer (UF senior, BFA Digital Arts & Sciences). I'm building a new portfolio concept called **Submerged** — an underwater-themed, glass-pane-styled site that lives at `mockup.html` in this repo (NOT `index.html`, which is my current live v2.5 site).

You and I have been iterating on the mockup over multiple sessions. **Read the live file first** before suggesting anything: <https://marskies.github.io/mockup.html>.

---

## What I want from you

- **Iterative design collaboration**, not a one-shot build. Make changes, commit, I review the live page, give feedback, repeat.
- **Always present a plan** via the planning tool before touching the file. Don't add features I didn't ask for.
- **Edit `mockup.html` only.** Never touch `index.html`, `projects.js`, or any other file in this repo without asking.
- **Match my design system.** Don't invent fonts or colors.

---

## Hard constraints (do not violate)

- **No animations, parallax, GIFs, or pane-morph in this version.** Static layout only.
- **Background image stays still** (`background-attachment: fixed`). It's at `images/background.jpg`.
- **Each frame fits one viewport** (`min-height:100vh`), no internal page-level scrolling — but individual panes can scroll their own content if needed.
- **Type must be accessible.** Body 16px base. No labels under 11px. Don't shrink things.
- **Panes hug their content,** they don't stretch to viewport edges. Frames are content-sized flex layouts centered with `max-width:1400px; margin:0 auto`.
- **Don't ADD new things in correction passes.** When I ask for fixes, only fix what I asked.

---

## Design system (locked in)

### Fonts (Google Fonts, loaded via `<link>` in mockup head)

- **Fraunces** (display / italic accents) — weights 400/500/600/700 + italic 400/500. Variable opsz 9..144.
- **Inter** (body / UI) — weights 400/500/600/700.

> Note: my current live `/index.html` uses Cormorant Garamond, not Fraunces. Submerged is the redesign that introduces Fraunces. If you fetch index.html and see Cormorant, that's expected — don't "fix" the mockup back to Cormorant.

### Color tokens (CSS custom properties on :root)

```
--bg-deep:    #0a1f24    /* deep teal background base */
--glass:      rgba(18,42,48,0.55)    /* primary pane fill */
--glass-strong: rgba(20,48,55,0.72)
--glass-edge: rgba(255,255,255,0.10) /* 1px border + inset highlight */
--ink:        #eaf6f7    /* primary text */
--ink-dim:    #b9d2d4    /* body text */
--ink-quiet:  #7fa2a5    /* tertiary / placeholder */
--teal:       #8fd4d6    /* ambient labels (h3, eyebrows) */
--copper:     #d18a5a    /* accent · active state · CTA */
--copper-dim: #a86a44
--shadow:     0 18px 60px rgba(0,0,0,0.45)
--radius:     22px
--radius-sm:  14px
```

### Visual language

- Glass panes: `background:var(--glass); backdrop-filter:blur(22px); border:1px solid var(--glass-edge); border-radius:22px; box-shadow:var(--shadow), inset 0 1px 0 rgba(255,255,255,0.08)`
- Active/interactive: copper (#d18a5a) — used on chapter tabs, nav active, CTAs, accent borders
- Ambient labels: teal (--teal), uppercase, letter-spaced 0.18-0.22em
- Display headings: Fraunces, weight 500, italic for accent words

---

## Page structure (mockup.html)

Single HTML file with five vertically stacked frames. Each is one viewport tall. Fixed top bar overlays everything.

### Top bar (fixed)
Two rows. Row 1: logo + name (top-left), audio pill (top-right). Row 2: nav pill centered (Home / Work / About / Contact). All constrained to 1400px max-width centered on viewport.

### Frame A · #frame-a · Home
Three columns, content-sized:
- **Left side-stack (300px):** "On Deck" featured card (Learn To Leap, with a 160px-tall project image slot — currently placeholder text), "Currently" status card.
- **Center card (520px):** Portrait placeholder (200x260), name "Marina *DiPonio*" in Fraunces, tagline, "Let's chat!" copper CTA.
- **Right side-stack (300px):** Contact Channels (Email/LinkedIn/Behance/Calendly stacked 1-col), Said About Marina testimonial card (placeholder quote in Fraunces italic).

### Frame B · #frame-b · Work
Album-shelf layout. Centered column. Heading "Selected *Work*" + category filter pills (All / Research / PM / UI/UX) + a 5-card horizontal shelf (center hero + 2 each side, progressively dimmed/scaled) + 10-dot progress strip below.

### Frame C · #frame-c · Case study
Three columns:
- **Left rail:** flat project index with category headers + tag chips. All 10 projects listed under primary category (Research / Product Management / UI/UX). Search input at top.
- **Center case pane:** hero image, title in Fraunces, subtitle, chapter tabs (Overview / Research / Synthesis / Design / Outcome), scrollable chapter body with copper scrollbar.
- **Right side-stack:** Quick Stats, Methods chips, Tools chips.

### Frame D · #frame-d · About
Three columns:
- **Left (320px):** "About *Marina*" heading, role pill, bio paragraph, copper resume download CTA (`resume.pdf` placeholder), vertical timeline (2026→2022).
- **Center (560px):** photo placeholder (200px tall), chapter tabs (Story / Approach / Tools / Currently), scrollable about body. Story copy is placeholder — feel free to rewrite, it's a "human" first-person voice.
- **Right (300px):** Recognition accolades, Fun Facts list.

### Frame E · #frame-e · Contact
Three columns:
- **Left (280px):** "Reach Out For" tagged list (Full-Time / Freelance / Speaking / Coffee).
- **Center (560px):** "Let's *chat*." heading, lead, form with name / email / topic / message. Form action is `YOUR_FORMSPREE_URL_HERE` — Marina has a Formspree account from her v1 site, needs to paste the endpoint.
- **Right (300px):** Direct Channels mirror of Frame A's grid, "Before You Write" Q&A card.

---

## Projects (10 total, primary category + tag chips)

| Project | Primary | Tags |
|---|---|---|
| Learn To Leap | Research | PM, UI/UX (FEATURED) |
| ICE Accessibility Audit | Research | UI/UX |
| Tick Tock Trivia | Product Management | UI/UX, Research |
| Cosmic Catch | Product Management | UI/UX |
| Yuumi-Chan: Rent is Due! | Product Management | Research |
| StarTea | Product Management | UI/UX, Research |
| Insane Wizard | Product Management | UI/UX, Research |
| Social Media Campaign | Product Management | — |
| Nutrition Tracking App | UI/UX | PM |
| UF Club Software | UI/UX | Research |

---

## Repo structure (relevant files)

```
/                                  (repo root, GitHub Pages serves from main)
  index.html                       LIVE v2.5 site — DO NOT TOUCH
  mockup.html                      Submerged mockup — edit this
  projects.js                      DO NOT TOUCH
  CONTEXT.md                       this file
  resume.pdf                       (planned, not yet uploaded)
  LOGO_blue.png                    logo, root path
  underwaterambiance.mp3           ambient audio loop
  images/
    background.jpg                 underwater background
    (project hero images go here when Marina exports them)
  [other category pages: ui-ux-design.html, project-management.html, user-research.html, individual project pages — DO NOT TOUCH]
```

---

## Live URLs

- **Mockup:** <https://marskies.github.io/mockup.html>
- **Current live portfolio (v2.5):** <https://marskies.github.io/>
- **GitHub repo:** <https://github.com/marskies/marskies.github.io>
- Use cache-buster query strings (`?bust=vN`) when verifying after a commit — Pages caches aggressively.

---

## Version history (commits to mockup.html)

| Version | What landed |
|---|---|
| v1 | First three-frame composition, single nav, shared shelf container |
| v2 | Top bar with logo+audio, compressed Frame C, chapter tabs (too small) |
| v3 | Bigger type, two-row top bar, copper accent, album-style Frame B free-floating cards, internal copper scrollbar |
| v4 | Added Frame D (About) + Frame E (Contact), expanded Frame A right side (channels + testimonial), 5-card album shelf, fuller layout |
| v4.1 | Scope corrections: removed unsolicited status pill, reverted On Deck to single LL row, constrained width, enlarged portrait, fixed logo path |
| v4.2 | Loaded Cormorant + Inter via Google Fonts (had been referenced but not loaded — fonts were falling back to system serif). Switched frames from grid-fill-100vh to flex-content-sized. Big type pass: 23 sizing bumps. |
| v4.3 | Fixed nav-pill centering (specificity bump on `.nav-row` so it overrode the topbar row's space-between) |
| v4.4 | Swapped Cormorant Garamond → Fraunces. Enlarged Learn To Leap "On Deck" card to a featured variant with a 160px image slot, copper-tinted background, and bigger title (17px). |

---

## What's done

- All five frames built, styled, navigable
- Design system tokens locked in
- Fonts loading correctly (Fraunces + Inter)
- Type accessible across the board
- Layout: panes hug content, frames centered, max-width 1400px
- Nav properly centered, two-row top bar
- Copper scrollbars on internal scroll areas
- Audio toggle wired, intersection-observer nav active state

## What's open / known issues

- **Logo image is broken** in the top-left (shows alt-text "MD"). Path is now `LOGO_blue.png` (root) which fetches 200, but the visible render is still wonky. Marina deferred — fix in a later pass.
- **Resume PDF is a placeholder** — Marina needs to upload `resume.pdf` to repo root.
- **Project images for Frame B + Frame C hero + Frame A "On Deck" featured card** are all placeholders — Marina will export and add when ready.
- **Portrait + About photo** are placeholders — Marina will pull from her phone.
- **Formspree endpoint** in the contact form is `YOUR_FORMSPREE_URL_HERE`. Marina has the account from her v1 site, just needs to paste the URL into the `<form action="…">` attribute.
- **Testimonial quote is a placeholder** — needs a real quote from a manager / professor.
- **Marina's email** in the channel cards is masked to "marina@…" — needs the real address pasted in.
- **Calendly link** is "#" placeholder — Marina doesn't have a Calendly yet but plans to.
- **Mobile** has not been touched. Marina wants it to feel like an app — defer to a later session.
- **Animations / micro-interactions** all deferred to a later polish pass.

---

## How to resume next session (script for next-Claude)

1. **Read this file** before doing anything.
2. **Open the live mockup** in a tab: <https://marskies.github.io/mockup.html>
3. **Don't suggest sweeping changes.** Marina drives the iteration; you execute scoped edits.
4. **Always present a plan** via planning tool before touching the file. Be specific about what's changing and what isn't.
5. **Use the GitHub web editor** at <https://github.com/marskies/marskies.github.io/edit/main/mockup.html> to make changes. The CodeMirror 6 view is accessible at `document.querySelector('.cm-content').cmTile.view`. Inject HTML via `view.dispatch({changes:{from:0, to:doc.length, insert:html}})` rather than typing — typing causes auto-close issues.
6. **For surgical edits,** read the current doc into a JS variable, apply targeted string replacements, then dispatch the result. Don't rebuild the whole file from scratch unless it's a major version.
7. **After every commit,** wait ~15-30s for Pages to deploy, then fetch the file with a cache-buster to verify the new content is live before screenshotting.
8. **Never touch index.html, projects.js, or existing project HTML files.** Mockup.html only.
9. **If Marina says "don't add things,"** she means it. Even if you see something that "needs" fixing, ask first.
10. **The "TodoWrite" tool referenced in plan-approval responses doesn't exist** in your toolset. Ignore it; it's appended noise.

---

## Marina's voice / preferences (calibration)

- Direct, no filler. Calls out scope creep immediately.
- Wants to drive the design — you're a fast pair of hands, not a co-designer making bold choices.
- Cares deeply about typography and accessibility. Don't shrink type.
- Prefers "hug the content" layouts over "fill the viewport."
- Thinks in frames / panes / cards. Apple Watch and VisionOS are recurring references.
- Trusts written placeholders that sound real over lorem ipsum.

## Prioritization plan

> Drafted at end of v4.4 session. Effort tags: **S** = <30 min / quick copy or config paste. **M** = 30 min–2 hr / layout tweak, asset export, multi-file edit. **L** = half-day+ / new system, mobile pass, animation framework.

### Phase 0 · Open issues from v4.4 (lift-and-shift from "known issues")
- Logo render in top-left — **S**
- Paste real email into channel cards — **S**
- Paste Formspree endpoint into contact form action — **S**
- Replace Calendly "#" placeholder once account exists — **S**

### Phase 1 · Content & copy (unblocks review; do first)
- Fix copy on homepage — **S**
- Fix copy on About (bio paragraph) — **S**
- Fix copy on Work (heading + filter labels) — **S**
- Fix copy on Contact — **S**
- About · Story copy — **M**
- About · Approach copy — **M**
- About · Tools copy — **S**
- About · Currently copy — **S**
- Fix copy on each project page (10 projects) — **L**
- Learn To Leap copy (featured case study) — **M**
- Write testimonial quote — **S** (depends on outreach)
- Update resume — **M**

### Phase 2 · Assets (pair with Phase 1)
- Image of me (portrait + About photo) — **S** (phone export)
- Learn To Leap photos — **M**
- Images on each project page — **L** (10 projects)
- Upload resume.pdf for downloadable resume — **S**

### Phase 3 · Core functionality & structure (before polish)
- Set up contact form (Formspree endpoint + test send) — **S**
- Set up Calendly booking (account + embed/link) — **M**
- Make sure audio works across pages — **S**
- LinkedIn more accessible (placement/weight in channels) — **S**
- Work page tabs working (category filter active state + filtering) — **M**
- Work page scroll/navigation working (shelf nav + 10-dot progress) — **M**
- Correct Fraunces font on each page (audit all pages, not just mockup) — **M**
- Name in top-left font fix — **S**
- Restructure panels: tall on left, shorter on right (all frames) — **M**

### Phase 4 · Interaction polish (deferred per hard constraint; bundle together)
- BG animation (subtle underwater movement) — **M**
- Mouse effect (ambient reactive) — **M**
- Custom cursor — **S**
- Animation between page selection (frame transitions) — **M**
- Animation between panels on page change — **M**

### Phase 5 · Mobile (last, depends on desktop being locked)
- Mobile version, app-ish (Apple Watch / VisionOS feel) — **L**

### Rough session map
1. **Session A (copy marathon):** Phase 1 homepage/about/work/contact + About sub-sections.
2. **Session B (project copy):** Phase 1 per-project copy + Learn To Leap.
3. **Session C (assets):** Phase 2 all image + resume uploads.
4. **Session D (structure):** Phase 3 functionality + panel restructure + font audit.
5. **Session E (polish):** Phase 4 animation pass as one coherent bundle.
6. **Session F (mobile):** Phase 5.

---

End of context doc. Good luck.
