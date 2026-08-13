# TigerGhost Items Sell

A simple static site to showcase game characters for sale, filterable by class.

## Files

- `index.html` — page structure, don't need to touch this
- `style.css` — visual styling, don't need to touch this
- `script.js` — filter/render logic, don't need to touch this
- `listings.js` — **this is the only file you edit**
- `images/` — put your PNG screenshots here

## Add a character for sale

1. Save the screenshot as a `.png` inside the `images/` folder.
2. Open `listings.js` and copy one block inside the `LISTINGS` array, e.g.:

```js
{
  name: "ShadowFang",
  classKey: "ninja",       // one of: warrior, ninja, sura, shaman, lycan
  level: 98,
  price: "€35",
  notes: "Rare costume, maxed dagger mastery.",
  image: "images/shadowfang.png"
},
```

3. Save the file, refresh the page — the card appears automatically, sorted into the right filter tab.

Remove or edit the "Example Character" block once you have real listings.

## Add a full account for sale

Full accounts (bundles of multiple characters) are separate from single-character
listings and appear in their own "Full Accounts" section. In `listings.js`, copy
a block inside the `ACCOUNTS` array, e.g.:

```js
{
  title: "Starter Bundle",
  price: "€80",
  notes: "2 mains + 1 alt, all epic sets.",
  image: "images/account2.png",
  characters: [
    { name: "NightClaw", classKey: "ninja", level: 100 },
    { name: "MoonHowl", classKey: "lycan", level: 95 },
    { name: "Ashen", classKey: "sura", level: 80 }
  ]
},
```

Add as many `characters` entries as the account actually has — the card lists them
all with a small colour dot per class.

## Update your contact info

At the bottom of `listings.js`, edit the `CONTACT` array with your real Discord/email/WhatsApp links.

## View it locally

Just double-click `index.html` to open it in a browser — no install needed.

## Put it online (free options)

Any of these host static sites for free, drag-and-drop:

- **Netlify Drop** — netlify.com/drop — drag the whole `tigerghost-shop` folder in, get a live link instantly.
- **GitHub Pages** — push this folder to a GitHub repo, enable Pages in repo settings.
- **Vercel** — vercel.com, import the folder/repo, deploy.

Netlify Drop is the fastest if you just want a link to share today.
