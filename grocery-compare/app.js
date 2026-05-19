const { supermarkets, products } = window.GROCERY_DATA;

const singleItemInput = document.querySelector("#single-item");
const shoppingListInput = document.querySelector("#shopping-list");
const addItemButton = document.querySelector("#add-item-button");
const compareButton = document.querySelector("#compare-button");
const clearButton = document.querySelector("#clear-button");
const totalsGrid = document.querySelector("#totals-grid");
const resultsHead = document.querySelector("#results-head");
const resultsBody = document.querySelector("#results-body");
const matchList = document.querySelector("#match-list");
const resultSummary = document.querySelector("#result-summary");
const emptyStateTemplate = document.querySelector("#empty-state-template");

const currency = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP"
});

function normalise(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseList(value) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function scoreProduct(query, product) {
  const cleanQuery = normalise(query);
  const terms = [product.name, product.id, ...product.aliases].map(normalise);

  if (terms.includes(cleanQuery)) {
    return 100;
  }

  if (terms.some((term) => term.startsWith(cleanQuery) || cleanQuery.startsWith(term))) {
    return 80;
  }

  const queryTokens = cleanQuery.split(" ");
  const matchedTokens = queryTokens.filter((token) =>
    terms.some((term) => term.includes(token))
  );

  return matchedTokens.length * 20;
}

function matchProduct(query) {
  const scored = products
    .map((product) => ({ product, score: scoreProduct(query, product) }))
    .sort((a, b) => b.score - a.score);

  return scored[0]?.score > 0 ? scored[0].product : null;
}

function getBestOffer(product) {
  return supermarkets
    .map((store) => ({ store, offer: product.offers[store.id] }))
    .filter((entry) => entry.offer)
    .sort((a, b) => a.offer.price - b.offer.price)[0];
}

function buildComparison(items) {
  const rows = items.map((query) => {
    const product = matchProduct(query);
    return {
      query,
      product,
      best: product ? getBestOffer(product) : null
    };
  });

  const totals = supermarkets.map((store) => {
    const availableRows = rows.filter((row) => row.product?.offers[store.id]);
    const missingRows = rows.filter((row) => !row.product?.offers[store.id]);
    const total = availableRows.reduce((sum, row) => sum + row.product.offers[store.id].price, 0);

    return {
      store,
      total,
      availableCount: availableRows.length,
      missingCount: missingRows.length
    };
  });

  return { rows, totals };
}

function renderHead() {
  const staticHeaders = ["Shopping list item", "Matched product", "Best"];
  resultsHead.innerHTML = "";

  [...staticHeaders, ...supermarkets.map((store) => store.name)].forEach((label) => {
    const th = document.createElement("th");
    th.textContent = label;
    resultsHead.appendChild(th);
  });
}

function renderTotals(totals) {
  totalsGrid.innerHTML = "";
  const comparableTotals = totals.filter((total) => total.availableCount > 0);
  const bestTotal = comparableTotals.reduce((best, current) => {
    if (!best) {
      return current;
    }
    if (current.missingCount < best.missingCount) {
      return current;
    }
    if (current.missingCount === best.missingCount && current.total < best.total) {
      return current;
    }
    return best;
  }, null);

  totals.forEach((total) => {
    const card = document.createElement("article");
    card.className = `total-card ${bestTotal?.store.id === total.store.id ? "best" : ""}`;
    card.innerHTML = `
      <strong>${total.store.name}</strong>
      <span class="amount">${currency.format(total.total)}</span>
      <span class="missing">${total.availableCount} items priced, ${total.missingCount} unavailable</span>
    `;
    totalsGrid.appendChild(card);
  });
}

function renderRows(rows) {
  resultsBody.innerHTML = "";

  if (!rows.length) {
    resultsBody.appendChild(emptyStateTemplate.content.cloneNode(true));
    return;
  }

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    const bestStoreId = row.best?.store.id;

    const queryCell = document.createElement("td");
    queryCell.className = "item-cell";
    queryCell.innerHTML = `<strong>${row.query}</strong>`;
    tr.appendChild(queryCell);

    const productCell = document.createElement("td");
    productCell.className = "item-cell";
    productCell.innerHTML = row.product
      ? `<strong>${row.product.name}</strong><span>${row.product.size}</span>`
      : `<strong>No sample match</strong><span>Add this product to the catalogue later</span>`;
    tr.appendChild(productCell);

    const bestCell = document.createElement("td");
    bestCell.className = "price-cell best";
    bestCell.innerHTML = row.best
      ? `${row.best.store.name}<br><span>${currency.format(row.best.offer.price)} · ${row.best.offer.unit}</span>`
      : "—";
    tr.appendChild(bestCell);

    supermarkets.forEach((store) => {
      const cell = document.createElement("td");
      const offer = row.product?.offers[store.id];

      if (!offer) {
        cell.className = "price-cell missing";
        cell.textContent = "—";
      } else {
        cell.className = `price-cell ${store.id === bestStoreId ? "best" : ""}`;
        cell.innerHTML = `${currency.format(offer.price)}<br><span>${offer.unit}</span>`;
      }

      tr.appendChild(cell);
    });

    resultsBody.appendChild(tr);
  });
}

function renderMatches(rows) {
  matchList.innerHTML = "";

  if (!rows.length) {
    const card = document.createElement("article");
    card.className = "match-card unmatched";
    card.innerHTML = "<strong>No items yet</strong><span>Add a list to see product matching.</span>";
    matchList.appendChild(card);
    return;
  }

  rows.forEach((row) => {
    const card = document.createElement("article");
    card.className = `match-card ${row.product ? "" : "unmatched"}`;
    card.innerHTML = row.product
      ? `<strong>${row.query}</strong><span>Matched to ${row.product.name} · ${row.product.size}</span>`
      : `<strong>${row.query}</strong><span>No sample product match yet</span>`;
    matchList.appendChild(card);
  });
}

function compareCurrentList() {
  const items = parseList(shoppingListInput.value);
  const comparison = buildComparison(items);
  const matchedCount = comparison.rows.filter((row) => row.product).length;

  renderHead();
  renderTotals(comparison.totals);
  renderRows(comparison.rows);
  renderMatches(comparison.rows);

  resultSummary.textContent = items.length
    ? `${matchedCount} of ${items.length} list items matched to the sample catalogue. Prices are prototype sample data, not live supermarket prices yet.`
    : "Add at least one item to compare.";

  window.localStorage.setItem("basketcompare:list", shoppingListInput.value);
}

function addSingleItem() {
  const value = singleItemInput.value.trim();
  if (!value) {
    return;
  }

  const existing = shoppingListInput.value.trim();
  shoppingListInput.value = existing ? `${existing}\n${value}` : value;
  singleItemInput.value = "";
  compareCurrentList();
}

function clearList() {
  shoppingListInput.value = "";
  singleItemInput.value = "";
  compareCurrentList();
}

function restoreSavedList() {
  const saved = window.localStorage.getItem("basketcompare:list");
  if (saved) {
    shoppingListInput.value = saved;
  }
}

addItemButton.addEventListener("click", addSingleItem);
compareButton.addEventListener("click", compareCurrentList);
clearButton.addEventListener("click", clearList);
singleItemInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addSingleItem();
  }
});

restoreSavedList();
compareCurrentList();
