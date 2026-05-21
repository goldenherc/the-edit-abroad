# The Edit Abroad — Site Code

A small, real, multi-page website. Hosts on Vercel. Domain stays at Squarespace.

## What's in here

```
/                         → Homepage (Direction D)
/shop                     → Shop / Library catalogue (Direction B)
/journal                  → Journal (blog listing)
/about                    → About the studio
/guide/<city-id>          → Individual product page for any city
```

Plus assets:

```
/covers/<city>.jpg        → Branded product covers
/guides/<city>.pdf        → The actual PDFs sold to customers (NOT linked publicly — Gumroad delivers)
/cities.js                → The whole library — add/edit destinations here
/styles.css               → Shared design tokens (colors, type, hover behavior)
/primitives.jsx           → Nav, Footer, Compass, Pinterest icon, CityCover (clickable, hover-animated)
/home-d-cover-index.jsx   → Homepage layout
/shop-b-library.jsx       → Shop / library catalogue layout
/journal.jsx              → Journal layout + JOURNAL_POSTS array (edit to add posts)
/about.jsx                → About page
/guide-page.jsx           → Per-city product page template
```

City IDs: `bcn cpt grc haw ibz ldn mar mex par sof ita syd tam tyo`.

---

## 1 · Deploy to Vercel  (5 min)

1. Go to https://vercel.com/new
2. Drag the **contents** of this folder onto the page (the files at top level, not the wrapping `deploy` folder).
3. Click **Deploy**. You'll have a live preview URL in 30 sec.

Or via CLI:
```bash
npm i -g vercel
cd deploy
vercel
```

---

## 2 · Connect your Squarespace domain  (10 min)

You're keeping `theeditabroad.com` registered at Squarespace and just pointing the DNS at Vercel.

**In Vercel:** Project → Settings → Domains → add `theeditabroad.com` and `www.theeditabroad.com`. Vercel will tell you exactly what DNS records to set.

**In Squarespace:** Settings → Domains → your domain → **DNS Settings**.

- Delete existing A records for `@` (root).
- Add a new **A record**: host `@`, value `76.76.21.21`.
- Add a **CNAME record**: host `www`, value `cname.vercel-dns.com`.
- Save.

Vercel auto-issues SSL. Live within ~15 minutes (up to 24 hours worst case).

After it works: cancel the Squarespace **website** subscription. Keep just the **domain** (~$20/yr line item).

---

## 3 · Connect Gumroad  (15 min)

This is how you actually sell. Every "Buy" button on the site points at a Gumroad product URL.

### One-time Gumroad setup:

1. Sign in at https://gumroad.com.
2. For each city, create a **product**: type "Digital product", title `The Edit Abroad — Marrakech`, price `$15`, upload `marrakech.pdf` from `/guides/`.
3. Publish the product. Gumroad gives you a URL like `https://shanedunn.gumroad.com/l/marrakech`. Copy it.
4. Repeat for all 14 cities.
5. (Optional) Create a 15th "Complete Library" product priced at the bundle amount with all 14 PDFs.

### Wire each URL into the site:

Open `cities.js` and paste each Gumroad URL into the matching city's `gumroad: ''` slot:

```js
{ id:'mar', name:'Marrakech', …,  gumroad: 'https://shanedunn.gumroad.com/l/marrakech', …, intro:'…' },
```

Save, push to Vercel, done. Every "Buy on Gumroad" button on the homepage shelves, the shop catalogue, and the individual product pages now goes to the right Gumroad product.

> **Tip:** Gumroad supports custom domains and a "Gumroad Overlay" — a small modal checkout that opens on top of your site instead of redirecting. You can switch to that any time without changing your URLs in `cities.js`. See https://help.gumroad.com.

---

## 4 · Update content

### Add or remove a city

1. Drop the cover into `/covers/`, the PDF into `/guides/`.
2. Add a new entry to the array in `/cities.js`.
3. Set the Gumroad URL.
4. Re-deploy.

Everything else — homepage shelves, shop catalogue, individual product page, "Other Edits" carousel — picks it up automatically.

### Add a journal entry

Open `/journal.jsx` and prepend a new entry to the `JOURNAL_POSTS` array:

```js
{
  slug: 'new-post-slug',
  title: 'The title of the piece',
  date: '20 May 2026',
  category: 'Wardrobe',     // Wardrobe, Packing, Field notes, Process, Reading
  tone: 'dune',             // dune / bone / sage / warm / indigo / ochre / cool / terracotta
  excerpt: 'A couple of sentences shown on the listing card.',
  readMin: 5,
},
```

The post listing card renders automatically. Clicking it currently goes to `/journal/<slug>` — that route isn't wired yet. Either add a `journal-post.html` template later, or point the `href` to a Substack/Medium URL for now.

### Update the editor bio / about page

Open `/about.jsx` and edit the Manifesto, Editor, Method, or Contact blocks.

### Pinterest

The Pinterest link currently points at `https://pinterest.com/theeditabroad` — change in `/primitives.jsx` if your account handle differs. Two places: in `Nav` and in `Footer`.

---

## 5 · What makes this "a real website" vs. just an HTML page

You already have most of it. Here's the punchlist:

- [x] Multiple linked pages (home, shop, journal, about, 14 product pages)
- [x] Real navigation between them (`<a>` tags wired in the Nav and Footer)
- [x] Pretty URLs (`/shop`, `/guide/marrakech`) via Vercel rewrites
- [x] Per-page `<title>` and `<meta description>` for SEO
- [x] Real product covers, real PDFs, real intros per city
- [x] Pinterest brand link in nav + footer
- [x] Cart wired to a real checkout (Gumroad)
- [x] Dynamic pricing (bundle auto-calculates from library size)
- [ ] **Add Google Search Console** — verify your domain so it shows up in search. Free; takes 5 min at https://search.google.com/search-console.
- [ ] **Add analytics** — Vercel's built-in analytics is free for the first 2.5k events/month. Plausible / Fathom are nicer if you want privacy-respecting third-party.
- [ ] **Add a `sitemap.xml` and `robots.txt`** — helps search engines crawl. (One-page snippets; I can generate these on request.)
- [ ] **Add Open Graph images** — for nice link previews when shared on Pinterest, iMessage, etc. (One image per shareable page.)
- [ ] **Add a 404 page** — when someone mistypes a URL. Vercel falls back to a default if you don't have one.
- [ ] **Replace journal photo placeholders** with real photographs.

If you want, drop me a note and I'll add any of those four checkbox items in one go.

---

## Troubleshooting

- **Page loads blank** — open DevTools → Console. Usually a `.jsx` file failed to load; check it made it to Vercel.
- **DNS not propagating** — verify A record value in Vercel is exactly `76.76.21.21` (no trailing dot).
- **Gumroad button does nothing** — `cities.js` likely has an empty `gumroad: ''`. Paste in the product URL.
