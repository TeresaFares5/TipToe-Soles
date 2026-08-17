document.documentElement.classList.add("js");

const products = [
  {
    id: "gary-black",
    name: "Gary Black",
    category: "men",
    type: "Men's comfort shoe",
    price: 79,
    image: "images/Gary Black.jpg",
    description: "Soft leather uppers, breathable lining and an orthotic-friendly removable footbed."
  },
  {
    id: "gary-tan",
    name: "Gary Tan",
    category: "men",
    type: "Men's comfort shoe",
    price: 79,
    image: "images/Gary Tan.png",
    description: "Everyday leather comfort with supportive heel padding and a flexible rubber sole."
  },
  {
    id: "work-and-walk",
    name: "Work & Walk Chestnut",
    category: "men",
    type: "Men's walking shoe",
    price: 85,
    image: "images/Work and Walk Chesnut.png",
    description: "Water-resistant leather, a padded collar and a removable insole for long days."
  },
  {
    id: "sally-black",
    name: "Sally Black",
    category: "women",
    type: "Women's everyday flat",
    price: 75,
    image: "images/Sally Black.jpg",
    description: "A lightweight leather flat with shock absorption and padded arch support."
  },
  {
    id: "sally-tan",
    name: "Sally Tan",
    category: "women",
    type: "Women's everyday flat",
    price: 75,
    image: "images/Sally Tan.jpg",
    description: "Soft leather and a flexible, grippy outsole in a versatile tan finish."
  },
  {
    id: "heavenly-black",
    name: "Heavenly Black",
    category: "women",
    type: "Women's work shoe",
    price: 90,
    image: "images/Heavenly Black.jpg",
    description: "Easy-clean leather, a plush footbed and durable grip for all-day support."
  },
  {
    id: "clancy-blue",
    name: "Clancy Blue",
    category: "women",
    type: "Women's comfort sandal",
    price: 59,
    image: "images/Clancy Blue.png",
    description: "Breathable stretch mesh, arch support and memory foam cushioning."
  }
];

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

function closeMenu() {
  if (!header || !menuToggle) return;
  header.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

if (header && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const willOpen = !header.classList.contains("menu-open");
    header.classList.toggle("menu-open", willOpen);
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Close menu" : "Open menu");
  });

  header.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("menu-open")) {
      closeMenu();
      menuToggle.focus();
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 981px)");
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", closeMenu);
  } else {
    desktopQuery.addListener(closeMenu);
  }
}

const productIds = new Set(products.map((product) => product.id));
let memoryWishlist = [];

function cleanWishlist(ids) {
  if (!Array.isArray(ids)) return [];
  return [...new Set(ids.filter((id) => typeof id === "string" && productIds.has(id)))];
}

function readWishlist() {
  try {
    const value = JSON.parse(localStorage.getItem("tiptoe-wishlist") || "[]");
    memoryWishlist = cleanWishlist(value);
    return [...memoryWishlist];
  } catch {
    return [...memoryWishlist];
  }
}

function saveWishlist(ids) {
  const validIds = cleanWishlist(ids);
  memoryWishlist = validIds;
  try {
    localStorage.setItem("tiptoe-wishlist", JSON.stringify(validIds));
  } catch {
    return false;
  }
  return true;
}

function readTransferredWishlist() {
  if (!window.location || window.location.protocol !== "file:") return null;
  const params = new URLSearchParams(window.location.search);
  if (!params.has("wishlist")) return null;
  return cleanWishlist(params.get("wishlist").split(",").filter(Boolean));
}

function syncLocalFileLinks(ids) {
  if (!window.location || window.location.protocol !== "file:") return;
  const wishlistValue = cleanWishlist(ids).join(",");

  try {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("wishlist", wishlistValue);
    window.history.replaceState(null, "", currentUrl.href);
  } catch {
    // Links below still carry the wishlist if the browser blocks history updates.
  }

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    const url = new URL(href, window.location.href);
    if (url.protocol !== "file:" || !url.pathname.toLowerCase().endsWith(".html")) return;
    url.searchParams.set("wishlist", wishlistValue);
    link.href = url.href;
  });
}

const transferredWishlist = readTransferredWishlist();
if (transferredWishlist !== null) {
  saveWishlist(transferredWishlist);
}

function announceWishlist(message) {
  let status = document.querySelector("[data-wishlist-status]");
  if (!status) {
    status = document.createElement("p");
    status.className = "sr-only";
    status.dataset.wishlistStatus = "";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    document.body.append(status);
  }
  status.textContent = message;
}

function updateWishlistControls() {
  const wishlist = readWishlist();
  document.querySelectorAll("[data-wishlist-count]").forEach((count) => {
    count.textContent = String(wishlist.length);
  });

  document.querySelectorAll("[data-wishlist-button]").forEach((button) => {
    const card = button.closest("[data-product-id]");
    const selected = card && wishlist.includes(card.dataset.productId);
    button.classList.toggle("is-selected", Boolean(selected));
    button.setAttribute("aria-pressed", String(Boolean(selected)));
    button.textContent = selected ? "Remove from wishlist" : "Add to wishlist";
  });

  syncLocalFileLinks(wishlist);
}

document.querySelectorAll("[data-wishlist-button]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest("[data-product-id]");
    if (!card) return;
    const wishlist = readWishlist();
    const id = card.dataset.productId;
    const nextWishlist = wishlist.includes(id)
      ? wishlist.filter((item) => item !== id)
      : [...wishlist, id];
    const stored = saveWishlist(nextWishlist);
    updateWishlistControls();
    renderWishlist();
    const product = products.find((item) => item.id === id);
    const isSaved = nextWishlist.includes(id);
    const storageNote = stored ? "" : " It will be carried while you use the website links.";
    announceWishlist(`${product ? product.name : "Product"} ${isSaved ? "added to" : "removed from"} your wishlist.${storageNote}`);
  });
});

function createWishlistCard(product) {
  const article = document.createElement("article");
  article.className = "product-card";
  article.dataset.productId = product.id;

  const imageLink = document.createElement("a");
  imageLink.href = `products.html#${product.id}`;
  imageLink.setAttribute("aria-label", `View ${product.name}`);

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = `${product.name} comfort shoe`;
  imageLink.append(image);

  const content = document.createElement("div");
  content.className = "product-card-content";

  const type = document.createElement("p");
  type.className = "product-type";
  type.textContent = product.type;

  const heading = document.createElement("h3");
  const headingLink = document.createElement("a");
  headingLink.href = `products.html#${product.id}`;
  headingLink.textContent = product.name;
  heading.append(headingLink);

  const description = document.createElement("p");
  description.textContent = product.description;

  const price = document.createElement("p");
  price.className = "card-price";
  price.textContent = `$${product.price}`;

  const remove = document.createElement("button");
  remove.className = "text-button";
  remove.type = "button";
  remove.textContent = "Remove from wishlist";
  remove.addEventListener("click", () => {
    const stored = saveWishlist(readWishlist().filter((id) => id !== product.id));
    renderWishlist();
    updateWishlistControls();
    const storageNote = stored ? "" : " The change will be carried while you use the website links.";
    announceWishlist(`${product.name} removed from your wishlist.${storageNote}`);
  });

  content.append(type, heading, description, price, remove);
  article.append(imageLink, content);
  return article;
}

function renderWishlist() {
  const list = document.querySelector("[data-wishlist-list]");
  const empty = document.querySelector("[data-empty-wishlist]");
  if (!list || !empty) return;

  const wishlist = readWishlist();
  const savedProducts = wishlist
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);
  list.replaceChildren();
  savedProducts.forEach((product) => list.append(createWishlistCard(product)));

  empty.hidden = savedProducts.length > 0;
  list.hidden = savedProducts.length === 0;
  syncLocalFileLinks(wishlist);
}

window.addEventListener("storage", (event) => {
  if (event.key === "tiptoe-wishlist") {
    updateWishlistControls();
    renderWishlist();
  }
});

function applyProductFilters() {
  const queryInput = document.querySelector("[data-product-search]");
  const categoryInput = document.querySelector("[data-product-filter]");
  const items = [...document.querySelectorAll("[data-search-item]")];
  const count = document.querySelector("[data-result-count]");
  if (!items.length) return;

  const query = queryInput ? queryInput.value.trim().toLowerCase() : "";
  const category = categoryInput ? categoryInput.value : "all";
  let matches = 0;

  items.forEach((item) => {
    const textMatches = item.textContent.toLowerCase().includes(query);
    const categoryMatches = category === "all" || item.dataset.category === category;
    const visible = textMatches && categoryMatches;
    item.hidden = !visible;
    if (visible) matches += 1;
  });

  if (count) {
    count.textContent = `${matches} ${matches === 1 ? "result" : "results"}`;
  }
}

document.querySelector("[data-product-search]")?.addEventListener("input", applyProductFilters);
document.querySelector("[data-product-filter]")?.addEventListener("change", applyProductFilters);

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const status = form.querySelector("[data-form-status]");
    if (status) {
      status.hidden = false;
      status.focus();
    }
    form.reset();
  });
});

document.querySelector("[data-password-toggle]")?.addEventListener("click", (event) => {
  const input = document.querySelector("#password");
  if (!input) return;
  const showPassword = input.type === "password";
  input.type = showPassword ? "text" : "password";
  event.currentTarget.textContent = showPassword ? "Hide password" : "Show password";
  event.currentTarget.setAttribute("aria-pressed", String(showPassword));
});

renderWishlist();
updateWishlistControls();
applyProductFilters();
