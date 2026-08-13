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
    name: "Armadura de Aco Preto +9",
    classKey: "Warrior",
    level: 70,
    price: "7 Wons",
    image: "images/warrioritens/aco.png"
  },
  {
    name: "Ninja",
    classKey: "ninja",
    image: "images/example.png"
  },
  {
    name: "Sura",
    classKey: "Sura",
    image: "images/example.png"
  },
  {
    name: "Lycan",
    classKey: "lycan",
    image: "images/example.png"
  },
  



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
      { name: "Shaman", classKey: "Dragao", level: 106 },
      { name: "V2 char Dentro da buffer, Alquimia Lendaria", classKey: "Warrior corpo", level: 55 },
      { name: "Ninja com 4 ninjas para lascas lvl 61", classKey: "Adagas", level: 103 },
      { name: "Sura", classKey: "Sura Armas", level: 1 },
      { name: "Warrior com 4 chares para lascas lvl 61", classKey: "Corpo", level: 107 },
      { name: "Flowers ", classKey: "Flowers", level: 1 }
    ]
  },

  {
    title: "Email Warrior lvl 101,",
    price: "€70 limpo",
    notes: "Alquimia Mitica, Biologo Tiugy, Chare de lascas lvl 61 com luvas do ladrao 7 dias e 2h. aneis de teletransporte e .",
    image: "images/characters/w.png",
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
