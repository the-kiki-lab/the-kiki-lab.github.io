# KIKI Lab website

Static site for **KIKI Lab** — Knowledge, Informatics, Komputation & Influence —
Department of Communication, University of North Dakota.

No build step, no dependencies. Open `index.html` in a browser and it works.

## Editing content

Everything on the site comes from one file:

```
assets/js/data.js
```

It is plain JavaScript data. Add a publication, add a person, add a news item —
the pages re-render themselves. Keep the commas and quotation marks intact; if a
page goes blank, you have a syntax error, and the browser console will name the
line.

To check the file without opening a browser:

```sh
node --check assets/js/data.js
```

Google Scholar metrics (`SITE.metrics`) are a snapshot and go stale. The page
shows the retrieval date beside them, so update the numbers and `asOf` together.

### The codebook

The lab's four research areas are defined once, in `SITE.codes`:

| Code | Area | Color |
|---|---|---|
| `WB` | AI Design for Wellbeing | green |
| `COMP` | Computational Social Science | indigo |
| `HLTH` | Health Communication & Informatics | magenta |
| `FRAME` | Networked Multimodal Framing | amber |

Every publication and project carries a `codes: [...]` array naming the areas it
belongs to. Those become the colored chips you see across the site and drive the
filters on the publications page. Renaming an area in `SITE.codes` renames it
everywhere. Adding a fifth area also needs a color pair added in
`assets/css/main.css` (search for `--wb:` and copy the pattern, including the
`.chip--`, `.anno--`, `.pill[data-c=]`, and `.legend__code[data-c=]` rules).

## People

Only Dr. Lu is listed. `SITE.people` keeps empty lists for `affiliated`,
`graduate`, `undergraduate`, and `alumni` — add an entry and that section appears
on `people.html` automatically; leave a list empty and its section stays hidden.
So adding the lab's first graduate student is a single edit to `data.js`.

## Photos

`assets/img/` holds generated SVG placeholders. See `assets/img/README.md` for
the exact filename each slot expects. Drop in a real image with the same name
and it appears — no code change needed.

## Structure

```
index.html          Home — hero, research areas, latest papers, news
research.html       The four areas in full, projects, grants
publications.html   All publications, filterable by area and year
people.html         PI, plus sections for members that appear as people are added
news.html           Full news archive
teaching.html       Courses and released resources
join.html           Recruiting
contact.html        Address and contacts

assets/css/main.css Complete stylesheet
assets/js/data.js   All content  <- edit this
assets/js/site.js   Nav, footer, theme toggle, rendering, filters
assets/img/         Placeholder artwork
```

The header and footer are built in `site.js` (see the `NAV` array at the top) so
navigation exists in one place rather than eight copies.

## Local preview

Double-clicking `index.html` works. To preview over HTTP the way it will be
served:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

Every path in the site is relative, so it works both at a domain root and from a
subfolder like `/kiki-lab/`. Nothing needs rewriting for either.

`.nojekyll` tells Pages to serve the files as-is instead of running them through
Jekyll.

### 1. Create the repository

On github.com: **New repository** → name it `kiki-lab` → **Public** → do **not**
tick "Add a README", "Add .gitignore", or "Choose a license". The repo must start
empty, since this folder already has those files.

Public is required for Pages on a free account. Private repos need GitHub Pro.

### 2. Push this folder

```sh
cd ~/Documents/kiki_lab_page
git init -b main
git add .
git commit -m "KIKI Lab website"
git remote add origin https://github.com/USERNAME/kiki-lab.git
git push -u origin main
```

Replace `USERNAME`. If the push asks for a password, GitHub wants a personal
access token, not your account password — create one at Settings → Developer
settings → Personal access tokens, with `repo` scope. Or use SSH:
`git remote add origin git@github.com:USERNAME/kiki-lab.git`.

### 3. Turn on Pages

In the repo: **Settings** → **Pages** → Source: **Deploy from a branch** →
Branch: **main**, folder: **/ (root)** → **Save**.

The site is live at `https://USERNAME.github.io/kiki-lab/` in about a minute.
The first build is the slowest; later pushes appear within seconds.

### 4. Updating it

```sh
git add -A && git commit -m "what changed" && git push
```

### A cleaner URL

`USERNAME.github.io` itself can only host one site, and if that name is already
taken by a personal site, there are two ways to get the lab a root-level address:

**A GitHub organization.** Create an organization (e.g. `kiki-lab`), then a repo
inside it named exactly `kiki-lab.github.io`. That serves at
`https://kiki-lab.github.io/` — organizations get their own default address,
separate from any personal one. This also puts the site under an account the lab
owns rather than one person's, which matters when the person who set it up moves
on.

**A custom domain.** With a domain in hand — a subdomain of an existing one works
too, such as `lab.linqilu.com`:

1. At the DNS host, add a `CNAME` record: name `lab`, value `USERNAME.github.io`.
2. In the repo: Settings → Pages → Custom domain → enter `lab.linqilu.com` → Save.
   This commits a `CNAME` file to the repo; leave it there.
3. Once the DNS check passes, tick **Enforce HTTPS**.

DNS can take up to an hour to propagate. Until it does, Pages may report the
domain as unverified — that is expected, not an error to act on.

## Content sources

Publications, projects, teaching, and biography come from Dr. Lu's own public
pages, retrieved 28 August 2026:

- <https://linqilu.com/>
- <https://scholar.google.com/citations?user=78Fr7LIAAAAJ&hl=en>
- arXiv, for the two preprints' full author lists
- ResearchGate (returned HTTP 403; its record duplicates Google Scholar)

The "Join the lab" page and the "Openings" section on the People page are new
copy written for this site and describe no existing policy — review them before
publishing.
