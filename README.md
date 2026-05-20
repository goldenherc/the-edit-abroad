# Deploy The Edit Abroad to Vercel

This folder is a complete static site. No build step. Just upload to Vercel and point your domain at it.

---

## 1 · Deploy to Vercel (5 minutes)

You have a Vercel account already, so the fastest path is the drag-and-drop deploy.

1. Open https://vercel.com/new
2. Click **"Browse"** (under the "Import Project" area) — or just drag this entire `deploy` folder onto the page.
   - **Important:** drag the folder *contents* (all the files at the top level), not the `deploy` folder itself. Vercel needs `index.html` at the project root.
3. Vercel will detect it as a static site. Give the project a name (e.g. `the-edit-abroad`).
4. Click **Deploy**.
5. After ~30 seconds, you'll get a live URL like `the-edit-abroad.vercel.app`. Open it — your homepage should load.

That preview URL works immediately. Your real domain comes next.

> **Optional — CLI method.** If you'd rather use the terminal:
> ```bash
> npm i -g vercel
> cd deploy
> vercel
> ```
> Follow the prompts. Same result.

---

## 2 · Point your Squarespace domain at Vercel (10 minutes)

You're keeping `theeditabroad.com` registered at Squarespace and just pointing it at your new Vercel site.

### In Vercel:

1. In your new project, go to **Settings → Domains**.
2. Type `theeditabroad.com` and click **Add**.
3. Repeat for `www.theeditabroad.com`.
4. Vercel will show you DNS records to set up. You'll typically see:
   - For the root (`theeditabroad.com`): an **A record** → `76.76.21.21`
   - For `www`: a **CNAME record** → `cname.vercel-dns.com`

Keep that page open — you'll paste those into Squarespace next.

### In Squarespace:

1. Sign in to https://account.squarespace.com
2. Go to **Settings → Domains** and click your domain `theeditabroad.com`.
3. Click **DNS Settings** (or **Advanced DNS**).
4. **Delete any existing A records** for `@` (the root) and any existing CNAME for `www` — these currently point at Squarespace.
5. Add a new **A record**:
   - Host: `@`
   - Type: `A`
   - Value: `76.76.21.21` (the exact value Vercel showed you)
6. Add a new **CNAME record**:
   - Host: `www`
   - Type: `CNAME`
   - Value: `cname.vercel-dns.com`
7. Save.

### Back in Vercel:

After a few minutes, Vercel will detect the new DNS and issue an SSL certificate automatically. You'll see green checkmarks next to both domains in **Settings → Domains**.

Full propagation can take up to 24 hours, but usually works within 15 minutes.

### Done — your site is now live at theeditabroad.com.

---

## 3 · After it's live: cancel the Squarespace website plan (optional)

You only need to keep the **domain** at Squarespace, not the website plan.

1. In Squarespace **Settings → Billing & Account**, find your website subscription.
2. Cancel it — but keep the domain registration (a separate, much cheaper line item, ~$20/yr).

Your domain stays at Squarespace; your site is hosted free on Vercel.

---

## 4 · Selling the PDFs

This deploy is a **front-end site only** — it doesn't have checkout. You'll need to add a way for customers to pay $15 and receive the PDF. Three good options:

**a) Stripe Payment Links** (fastest)
- Create one Payment Link per city in Stripe.
- Set the link as a **digital good** and upload the PDF — Stripe handles delivery after payment.
- Replace the `Add to cart` button's behavior with the appropriate Stripe Payment Link URL per city.

**b) Lemon Squeezy** (best for global tax)
- Same idea but Lemon Squeezy auto-handles VAT/sales tax for international customers.
- Each city becomes a product; "Buy" buttons link to the product's Lemon Squeezy URL.

**c) Gumroad** (cheapest)
- List each city as a Gumroad product.
- "Buy" buttons link to the Gumroad URL.
- Gumroad takes a small percentage per sale instead of a monthly fee.

To wire any of these in, replace the placeholder `Add to cart` `<button>` in `home-d-cover-index.jsx`, `shop-b-library.jsx`, and `guide-page.jsx` with an `<a href="...">` to the appropriate Payment/Product URL.

---

## 5 · Updating the site later

To add a new city:

1. Drop the new cover into `/covers/`
2. Drop the new PDF into `/guides/`
3. Add a new entry to the array in `/cities.js`
4. Push to Vercel (re-deploy by drag-and-drop, or `vercel --prod` from the terminal)

Everything else — homepage shelves, shop catalogue, individual product pages — picks up the new city automatically.

---

## Troubleshooting

- **Page loads blank?** Open the browser DevTools → Console. The most common issue is a network error loading a `.jsx` file — check that all files made it to Vercel.
- **DNS not working after 24 hours?** Verify the exact A record value in Vercel; some Squarespace DNS panels add trailing dots or auto-format the value. The A record should be exactly `76.76.21.21` with nothing else.
- **Want pretty URLs like `/guide/marrakech` instead of `/guide.html?city=marrakech`?** Already handled — `vercel.json` rewrites take care of it.

---

## File map

```
/                          → renders Home (Direction D)
/shop                      → renders Shop (Direction B, library catalogue)
/guide/<city-id>           → individual product page (e.g. /guide/marrakech)
/covers/<city>.jpg         → branded product covers
/guides/<city>.pdf         → the actual deliverable PDFs
/cities.js                 → all destinations + metadata (edit this to add cities)
/styles.css                → design tokens
/*.jsx                     → React components
```

City IDs are: `bcn cpt grc haw ibz ldn mar mex par sof ita syd tam tyo`.
