/*
  ====================================================================
  EDIT THIS FILE ONLY. You never need to touch index.html/style.css/script.js.

  1) Drop your screenshot PNGs into the /images folder.
  2) Copy one block below per character, fill in the details,
     and point "image" at your PNG's filename.
  3) classKey must be exactly one of: warrior, ninja, sura, shaman, lycan
  4) For full accounts (multiple characters bundled together), use the
     separate ACCOUNTS array further down this file instead.
  ====================================================================
*/

const LISTINGS = [
  {
    name: "Example Character",
    classKey: "warrior",
    level: 105,
    price: "€50",
    notes: "Full epic set, +9 weapon, replace this example.",
    image: "images/example.png"
  },

  // Copy the block above (including the comma before it) to add more, e.g.:
  // {
  //   name: "ShadowFang",
  //   classKey: "ninja",
  //   level: 98,
  //   price: "€35",
  //   notes: "Rare costume, maxed dagger mastery.",
  //   image: "images/shadowfang.png"
  // },
];

/*
  Full accounts (bundles of multiple characters sold together).
  "characters" is a short list of what's inside — just name, class, level.
*/
const ACCOUNTS = [
  {
    title: "Example Account",
    price: "€120",
    notes: "Replace this example. Started 2023, all characters PvP-geared.",
    image: "images/example.png",
    characters: [
      { name: "Example Warrior", classKey: "warrior", level: 105 },
      { name: "Example Shaman", classKey: "shaman", level: 92 }
    ]
  },

  // Copy the block above to add more accounts, e.g.:
  // {
  //   title: "Starter Bundle",
  //   price: "€80",
  //   notes: "2 mains + 1 alt, all epic sets.",
  //   image: "images/account2.png",
  //   characters: [
  //     { name: "NightClaw", classKey: "ninja", level: 100 },
  //     { name: "MoonHowl", classKey: "lycan", level: 95 },
  //     { name: "Ashen", classKey: "sura", level: 80 }
  //   ]
  // },
];

// Edit these to your real contact details — add or remove lines as needed.
const CONTACT = [
  { label: "Discord", href: "https://discord.com/users/your-id-here" },
  { label: "Email", href: "mailto:you@example.com" },
];
