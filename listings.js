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
    classKey: "warrior",
    level: 70,
    price: "7 Wons or ask for price",
    image: "images/warrioritens/aco.png"
  },
  {
    name: "Colar de Cobre +9",
    classKey: "warrior",
    level: 8,
    price: "Ask for price",
    image: "images/warrioritens/colarcobre+9.png"
  },
  {
    name: "Elmo Aco de Dragao +7",
    classKey: "warrior",
    level: 100,
    price: "Ask for price",
    image: "images/warrioritens/elmo.png"
  },
  {
    name: "Elmo de Ferro +9",
    classKey: "warrior",
    level: 21,
    price: "Ask for price",
    image: "images/warrioritens/elmoferro+910dem15rel.png"
  },
  {
    name: "Mascara de Gladiador +6",
    classKey: "warrior",
    level: 60,
    price: "Ask for price",
    image: "images/warrioritens/gladiador+615vento.png"
  },
  {
    name: "Sapatos em Madeira +9",
    classKey: "warrior",
    level: 17,
    price: "Ask for price",
    image: "images/warrioritens/madeira+9.png"
  },
  {
    name: "Armadura Mortal +9",
    classKey: "warrior",
    level: 34,
    price: "Ask for price",
    image: "images/warrioritens/mortal+915ven10abs10fg15vd.png"
  },
  {
    name: "Pulseira de Safira +8",
    classKey: "warrior",
    level: 54,
    price: "Ask for price",
    image: "images/warrioritens/pulsafira+8.png"
  },
  {
    name: "Roupa da Aura Normal",
    classKey: "warrior",
    price: "Ask for price",
    image: "images/warrioritens/roupadaura.png"
  },
  {
    name: "Colar de Safira +9",
    classKey: "warrior",
    level: 54,
    price: "Ask for price",
    image: "images/warrioritens/safira+9.png"
  },
  {
    name: "Talisma da Terra +0 (Deserto)",
    classKey: "warrior",
    level: 20,
    price: "Ask for price",
    image: "images/warrioritens/talisma.png"
  },
  {
    name: "Talisma da Terra +0 (Gelo)",
    classKey: "warrior",
    level: 20,
    price: "Ask for price",
    image: "images/warrioritens/talisma2.png"
  },
  {
    name: "Armadura Tigre +9 (Max VD)",
    classKey: "warrior",
    level: 18,
    price: "Ask for price",
    image: "images/warrioritens/tigre+915rel1kvd.png"
  },
  {
    name: "Armadura Tigre +9 (Reflete Ataques)",
    classKey: "warrior",
    level: 18,
    price: "Ask for price",
    image: "images/warrioritens/tigre+915relampagos.png"
  },
  {
    name: "Escudo Tita +9",
    classKey: "warrior",
    level: 81,
    price: "Ask for price",
    image: "images/warrioritens/tita.png"
  },
  {
    name: "Espada Venenosa +9",
    classKey: "warrior",
    level: 75,
    price: "Ask for price",
    image: "images/warrioritens/venas.png"
  },

  {
    name: "Cinto das Almas +8",
    classKey: "sura",
    level: 100,
    price: "Ask for price",
    image: "images/suraitens/almas+8.png"
  },
  {
    name: "Colar de Safira +9",
    classKey: "sura",
    level: 54,
    price: "Ask for price",
    image: "images/suraitens/colar8metins.png"
  },
  {
    name: "Colar de Perolas +9",
    classKey: "sura",
    level: 38,
    price: "Ask for price",
    image: "images/suraitens/colarperolas.png"
  },
  {
    name: "Elmo Escama de Dragao +7",
    classKey: "sura",
    level: 100,
    price: "Ask for price",
    image: "images/suraitens/elmo1.png"
  },
  {
    name: "Brincos de Esmeralda +8",
    classKey: "sura",
    level: 95,
    price: "Ask for price",
    image: "images/suraitens/esmeraldas+8.png"
  },
  {
    name: "Faixa Chen (Pessoal) Gelo +3",
    classKey: "sura",
    level: 90,
    price: "Ask for price",
    image: "images/suraitens/faixa.png"
  },
  {
    name: "Talisma do Gelo +10",
    classKey: "sura",
    level: 30,
    price: "Ask for price",
    image: "images/suraitens/gelo+10.png"
  },
  {
    name: "Sapatos Oceanicos +6",
    classKey: "sura",
    level: 96,
    price: "Ask for price",
    image: "images/suraitens/oceanicos.png"
  },
  {
    name: "Pet Heroico Nivel 97",
    classKey: "sura",
    level: 97,
    price: "Ask for price",
    image: "images/suraitens/pet.png"
  },
  {
    name: "Brincos de Rubi +8",
    classKey: "sura",
    level: 85,
    price: "Ask for price",
    image: "images/suraitens/Rubi+8.png"
  },
  {
    name: "Pulseira de Safira +5",
    classKey: "sura",
    level: 54,
    price: "Ask for price",
    image: "images/suraitens/safira+5.png"
  },
  {
    name: "Sapatos de Fogo +8",
    classKey: "sura",
    level: 88,
    price: "Ask for price",
    image: "images/suraitens/sapatosfogo.png"
  },
  {
    name: "Talisma da Terra +0 (Zodiaco)",
    classKey: "sura",
    level: 20,
    price: "Ask for price",
    image: "images/suraitens/talismazodiaco.png"
  },
  {
    name: "Escudo Tita +8",
    classKey: "sura",
    level: 81,
    price: "Ask for price",
    image: "images/suraitens/tita.png"
  },
  {
    name: "Espada do Zodiaco +8",
    classKey: "sura",
    level: 105,
    price: "Ask for price",
    image: "images/suraitens/zodiaco.png"
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
    notes: "Talisma do gelo nao negociavel a +10, nazares e item shop alquimia mitica e uma brilhante de granada. V2 char com Alquimia Lendaria, 2 contas com 4 chares de lascas lvl 61",
    image: "images/characters/s.png",
    characters: [
      { name: "Shaman", classKey: "Dragao", level: 106 },
      { name: "Ninja", classKey: "Adagas", level: 103 },
      { name: "Sura", classKey: "Armas", level: 1 },
      { name: "Warrior", classKey: "Corpo", level: 107 },
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
