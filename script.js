const CLASS_COLORS = {
  warrior: "var(--warrior)",
  ninja: "var(--ninja)",
  sura: "var(--sura)",
  shaman: "var(--shaman)",
  lycan: "var(--lycan)"
};

const CLASS_LABELS = {
  warrior: "Warrior",
  ninja: "Ninja",
  sura: "Sura",
  shaman: "Shaman",
  lycan: "Lycan"
};

const board = document.getElementById("board");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll("#filters .filter-btn");
const contactWrap = document.getElementById("contactMethods");

// Deterministic slight tilt per card, so it doesn't reshuffle on re-render.
function tiltFor(index) {
  const angles = [-1.4, 1.1, -0.7, 1.6, -1.1, 0.8];
  return angles[index % angles.length];
}

function renderCards(classFilter) {
  board.innerHTML = "";
  const items = LISTINGS.filter(l => classFilter === "all" || l.classKey === classFilter);

  emptyState.hidden = items.length !== 0;

  items.forEach((item, i) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--tilt", `${tiltFor(i)}deg`);
    card.style.cursor = "pointer";
    card.setAttribute("role", "link");
    card.tabIndex = 0;
    card.setAttribute("aria-label", `View details for ${item.name}`);

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${item.image}" alt="Screenshot of ${item.name}, level ${item.level} ${CLASS_LABELS[item.classKey] || item.classKey}" loading="lazy">
      </div>
      <div class="card-body">
        <span class="class-badge" style="background:${CLASS_COLORS[item.classKey] || "#555"}">${(item.classKey || "?").slice(0, 3)}</span>
        <div class="card-top-row">
          <h3 class="char-name">${item.name}</h3>
          <span class="char-level">Lv. ${item.level}</span>
        </div>
        <p class="char-class">${CLASS_LABELS[item.classKey] || item.classKey}</p>
        <p class="char-notes">${item.notes || ""}</p>
        <p class="char-price">${item.price || "Ask for price"}</p>
      </div>
    `;

    const goToDetail = () => {
      window.location.href = `character.html?i=${LISTINGS.indexOf(item)}`;
    };
    card.addEventListener("click", goToDetail);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        goToDetail();
      }
    });

    board.appendChild(card);
  });
}

const accBoard = document.getElementById("accBoard");
const accEmptyState = document.getElementById("accEmptyState");
const accFilterButtons = document.querySelectorAll("#accFilters .filter-btn");

function renderAccounts(classFilter) {
  accBoard.innerHTML = "";

  const items = ACCOUNTS.filter(acc => {
    if (classFilter === "all" || !classFilter) return true;
    return (acc.characters || []).some(
      c => (c.classKey || "").toLowerCase() === classFilter
    );
  });

  accEmptyState.hidden = items.length !== 0;

  items.forEach((acc, i) => {
    const card = document.createElement("article");
    card.className = "card acc-card";
    card.style.setProperty("--tilt", `${tiltFor(i + 3)}deg`);

    const charList = (acc.characters || [])
      .map(c => `
        <li>
          <span class="acc-dot" style="background:${CLASS_COLORS[c.classKey] || "#555"}"></span>
          ${c.name} — ${CLASS_LABELS[c.classKey] || c.classKey}, Lv.${c.level}
        </li>
      `)
      .join("");

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${acc.image}" alt="Screenshot of ${acc.title}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-top-row">
          <h3 class="char-name">${acc.title}</h3>
        </div>
        <ul class="acc-char-list">${charList}</ul>
        <p class="char-notes">${acc.notes || ""}</p>
        <p class="char-price">${acc.price || "Ask for price"}</p>
      </div>
    `;
    accBoard.appendChild(card);
  });
}

function renderContact() {
  contactWrap.innerHTML = CONTACT
    .map(c => `<a href="${c.href}" target="_blank" rel="noopener">${c.label}</a>`)
    .join("");
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderCards(btn.dataset.class);
  });
});

accFilterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    accFilterButtons.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderAccounts(btn.dataset.class);
  });
});

renderCards("all");
renderAccounts("all");
renderContact();
