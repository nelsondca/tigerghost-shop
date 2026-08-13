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
    title: "Email Sura lvl 1 Campeao,",
    price: "€350 limpo",
    notes: "Talisma do gelo nao negociavel a +10, nazares e item shop alquimia mitica e uma brilhante de granada.",
    image: "images/example.png",
    characters: [
      { name: "Buffer", classKey: "shaman", level: 106 },
      { name: "V2 character, Alquimia Lendaria Dentro da buffer ", classKey: "warrior", level: 55 },
      { name: "Ninja Adagas com 4 ninjas para lascas lvl 61", classKey: "ninja", level: 100 },
      { name: "Sura Armas lvl 1 Campeao",},
      { name: "Warrior Corpo", level: 107 },
      { name: "Char de Lascas " , level: 61 },
      { name: "Flowers Character", }
    ]
  },

  {
    title: "Email Warrior lvl 101,",
    price: "€70 limpo",
    notes: "Alquimia Mitica, Biologo Tiugy",
    image: "images/w.png",
    characters: [
      { name: "Warrior Corpo", classKey: "Warrior", level: 101 },
      { name: "4 lascas", classKey: "Warrior", level: 61 },
    ]
  },

  
  
];

// Edit these to your real contact details — add or remove lines as needed.
const CONTACT = [
  { label: "Discord", href: "https://discord.com/users/your-id-here" },
  { label: "Email", href: "mailto:you@example.com" },
];
