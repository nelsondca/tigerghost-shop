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

const detailWrap = document.getElementById("detailWrap");
const contactWrap = document.getElementById("contactMethods");

function renderContact() {
  contactWrap.innerHTML = CONTACT
    .map(c => `<a href="${c.href}" target="_blank" rel="noopener">${c.label}</a>`)
    .join("");
}

function renderDetail() {
  const params = new URLSearchParams(window.location.search);
  const index = Number(params.get("i"));
  const item = LISTINGS[index];

  if (!Number.isInteger(index) || !item) {
    detailWrap.innerHTML = `
      <p class="empty-state">Character not found. <a href="index.html#characters">Back to the board</a>.</p>
    `;
    return;
  }

  document.title = `${item.name} — TigerGhost Bounty Board`;

  detailWrap.innerHTML = `
    <article class="detail-card">
      <div class="detail-img-wrap">
        <img src="${item.image}" alt="Screenshot of ${item.name}, level ${item.level} ${CLASS_LABELS[item.classKey] || item.classKey}">
      </div>
      <div class="detail-body">
        <span class="class-badge" style="background:${CLASS_COLORS[item.classKey] || "#555"}">${(item.classKey || "?").slice(0, 3)}</span>
        <div class="card-top-row">
          <h2 class="char-name">${item.name}</h2>
          <span class="char-level">Lv. ${item.level}</span>
        </div>
        <p class="char-class">${CLASS_LABELS[item.classKey] || item.classKey}</p>
        <p class="char-notes">${item.notes || ""}</p>
        <p class="char-price">${item.price || "Ask for price"}</p>
      </div>
    </article>
  `;
}

renderDetail();
renderContact();
