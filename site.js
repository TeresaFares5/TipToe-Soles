document.documentElement.classList.add("js");

const products = [
  {
    "id": "gary-black",
    "name": "Gary Midnight",
    "category": "men",
    "type": "Men's comfort sneaker",
    "price": 79,
    "image": "images/Gary_Black.jpg",
    "colour": "Midnight",
    "code": "30213",
    "description": "Look good, feel great in these comfort sneakers you won't want to take off.",
    "features": [
      "Soft leather uppers",
      "Breathable mesh lining",
      "Removable footbed with soft mesh sock lining",
      "Contoured footbed with additional heel padding",
      "Orthotic friendly"
    ],
    "materials": {
      "Sole Material": "Rubber",
      "Sock Material": "Synthetic",
      "Lining Material": "Eco friendly",
      "Upper Material": "Leather"
    },
    "sizes": [
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "gary-tan",
    "name": "Gary Tan",
    "category": "men",
    "type": "Men's comfort sneaker",
    "price": 79,
    "image": "images/Gary Tan.png",
    "colour": "Tan",
    "code": "30213",
    "description": "Look good, feel great in these comfort sneakers you won't want to take off.",
    "features": [
      "Soft leather uppers",
      "Breathable mesh lining",
      "Removable footbed with soft mesh sock lining",
      "Contoured footbed with additional heel padding",
      "Orthotic friendly"
    ],
    "materials": {
      "Sole Material": "Rubber",
      "Sock Material": "Synthetic",
      "Lining Material": "Eco friendly",
      "Upper Material": "Leather"
    },
    "sizes": [
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "work-and-walk",
    "name": "Work and Walk",
    "category": "men",
    "type": "Men's ankle boot",
    "price": 85,
    "image": "images/Work_and_Walk_Chesnut.png",
    "colour": "Chestnut",
    "code": "30144",
    "description": "Hiking-inspired with everyday style, meet the Work and Walk boot. With a leather upper, these lace-up ankle boots are built for long days on your feet. The exterior features our No-Worry leather to protect from scuffs, stains and water. Plus, the inside is pretty comfy as well with a soft footbed that hugs your heel for extra support.",
    "features": [
      "Upper is scuff, stain & water-resistant",
      "Breathable & soft foam-backed mesh lining",
      "Padded collar is super soft on the heel",
      "Pull-tab for easy fitting",
      "Metal eyelet detail",
      "Footbed hugs your heel for extra support",
      "Removable insole to fit your own orthotics",
      "Dual Fit. Remove the insole for a wider fit"
    ],
    "materials": {
      "Sole Material": "Rubber",
      "Sock Material": "Pigskin",
      "Lining Material": "Mesh",
      "Upper Material": "Leather"
    },
    "sizes": [
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "sally-black",
    "name": "Sally Black",
    "category": "women",
    "type": "Women's everyday flat",
    "price": 75,
    "image": "images/Sally Black.jpg",
    "colour": "Black",
    "code": "301818",
    "description": "Sally, our new favourite lightweight flat, is giving us serious comfort goals with its soft semi-lined uppers and padded arch support.",
    "features": [
      "Soft smooth leather uppers",
      "Semi-lined uppers for a soft unstructured feel",
      "Super comfortable insole & padded arch support",
      "Super lightweight outsole helps to absorb shock",
      "Flexible & grippy outsole"
    ],
    "materials": {
      "Sole Material": "Phylon rubber",
      "Sock Material": "Pigskin",
      "Lining Material": "Leather/synthetic",
      "Upper Material": "Leather"
    },
    "sizes": [
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "sally-tan",
    "name": "Sally Tan",
    "category": "women",
    "type": "Women's everyday flat",
    "price": 75,
    "image": "images/Sally_Tan.jpg",
    "colour": "Tan",
    "code": "301818",
    "description": "Sally, our new favourite lightweight flat, is giving us serious comfort goals with its soft semi-lined uppers and padded arch support.",
    "features": [
      "Soft smooth leather uppers",
      "Semi-lined uppers for a soft unstructured feel",
      "Super comfortable insole & padded arch support",
      "Super lightweight outsole helps to absorb shock",
      "Flexible & grippy outsole"
    ],
    "materials": {
      "Sole Material": "Phylon rubber",
      "Sock Material": "Pigskin",
      "Lining Material": "Leather/synthetic",
      "Upper Material": "Leather"
    },
    "sizes": [
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "heavenly-black",
    "name": "Heavenly Black",
    "category": "women",
    "type": "Women's work shoe",
    "price": 90,
    "image": "images/Heavenly_Black.jpg",
    "colour": "Black",
    "code": "21960",
    "description": "Perfect for those on their feet all day who require leather uppers for easy cleaning. Featuring a super flexible and grippy outsole for durability and a soft padded footbed for extra comfort.",
    "features": [
      "Soft leather uppers and lightly padded collar",
      "Plush footbed for added comfort",
      "Recycled heel grip",
      "Flexible and grippy outsole with 10% recycled material"
    ],
    "materials": {
      "Sole Material": "Rubber",
      "Sock Material": "Pigskin",
      "Lining Material": "Unlined",
      "Upper Material": "Leather"
    },
    "sizes": [
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "clancy-blue",
    "name": "Clancy Blue",
    "category": "women",
    "type": "Women's comfort sandal",
    "price": 59,
    "image": "images/Clancy Blue.png",
    "colour": "Blue",
    "code": "30182",
    "description": "The Clancy sandal allows air circulation through the holes on each side. These sandals provide support to tired feet, with an arch support design to help reduce strain or imbalance.",
    "features": [
      "Stretchable mesh fabric allows an easy fit",
      "Memory foam insoles"
    ],
    "materials": {
      "Sole Material": "Rubber",
      "Sock Material": "Pigskin",
      "Lining Material": "Unlined",
      "Upper Material": "Leather"
    },
    "sizes": [
      6,
      7,
      8,
      9,
      10,
      11
    ]
  }
];

/* Hamburger menu */

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
    menuToggle.setAttribute(
      "aria-label",
      willOpen ? "Close menu" : "Open menu"
    );
  });

  header.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      header.classList.contains("menu-open")
    ) {
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

/* Wishlist storage */

const productIds = new Set(products.map((product) => product.id));
const tabWishlistPrefix = "tiptoe-wishlist:";
let memoryWishlist = [];

function cleanWishlist(ids) {
  if (!Array.isArray(ids)) return [];

  return [
    ...new Set(
      ids.filter(
        (id) =>
          typeof id === "string" &&
          productIds.has(id)
      )
    )
  ];
}

function readTabWishlist() {
  const isLocalFile =
    window.location &&
    window.location.protocol === "file:";

  const hasWishlistData =
    typeof window.name === "string" &&
    window.name.startsWith(tabWishlistPrefix);

  if (!isLocalFile || !hasWishlistData) {
    return null;
  }

  try {
    const savedValue = window.name.slice(
      tabWishlistPrefix.length
    );

    return cleanWishlist(JSON.parse(savedValue));
  } catch {
    return [];
  }
}

function readWishlist() {
  const tabWishlist = readTabWishlist();

  if (tabWishlist !== null) {
    memoryWishlist = tabWishlist;
    return [...memoryWishlist];
  }

  try {
    const storedValue =
      localStorage.getItem("tiptoe-wishlist") || "[]";

    memoryWishlist = cleanWishlist(
      JSON.parse(storedValue)
    );

    return [...memoryWishlist];
  } catch {
    return [...memoryWishlist];
  }
}

function saveWishlist(ids) {
  const validIds = cleanWishlist(ids);
  memoryWishlist = validIds;

  if (
    window.location &&
    window.location.protocol === "file:"
  ) {
    window.name =
      `${tabWishlistPrefix}${JSON.stringify(validIds)}`;
  }

  try {
    localStorage.setItem(
      "tiptoe-wishlist",
      JSON.stringify(validIds)
    );

    return true;
  } catch {
    return false;
  }
}

function announceWishlist(message) {
  let status = document.querySelector(
    "[data-wishlist-status]"
  );

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

  document
    .querySelectorAll("[data-wishlist-count]")
    .forEach((count) => {
      count.textContent = String(wishlist.length);
    });

  document
    .querySelectorAll("[data-wishlist-button]")
    .forEach((button) => {
      const card = button.closest("[data-product-id]");

      if (!card) return;

      const isSelected = wishlist.includes(
        card.dataset.productId
      );

      button.classList.toggle(
        "is-selected",
        isSelected
      );

      button.setAttribute(
        "aria-pressed",
        String(isSelected)
      );

      button.textContent = isSelected
        ? "Remove from wishlist"
        : "Add to wishlist";
    });
}

/* Product wishlist buttons */

document
  .querySelectorAll("[data-wishlist-button]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-product-id]");

      if (!card) return;

      const productId = card.dataset.productId;
      const wishlist = readWishlist();

      const isAlreadySaved =
        wishlist.includes(productId);

      const nextWishlist = isAlreadySaved
        ? wishlist.filter((id) => id !== productId)
        : [...wishlist, productId];

      saveWishlist(nextWishlist);
      updateWishlistControls();
      renderWishlist();

      const product = products.find(
        (item) => item.id === productId
      );

      announceWishlist(
        `${product?.name || "Product"} ${
          isAlreadySaved
            ? "removed from"
            : "added to"
        } your wishlist.`
      );
    });
  });

/* Wishlist page */

function createWishlistCard(product) {
  const article = document.createElement("article");
  article.className = "product-card";
  article.dataset.productId = product.id;

  const imageLink = document.createElement("a");
  imageLink.href = `products.html#${product.id}`;
  imageLink.setAttribute(
    "aria-label",
    `View ${product.name}`
  );

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
  price.textContent = `$${product.price.toFixed(2)}`;

  const removeButton =
    document.createElement("button");

  removeButton.className = "text-button";
  removeButton.type = "button";
  removeButton.textContent =
    "Remove from wishlist";

  removeButton.addEventListener("click", () => {
    const updatedWishlist = readWishlist().filter(
      (id) => id !== product.id
    );

    saveWishlist(updatedWishlist);
    renderWishlist();
    updateWishlistControls();

    announceWishlist(
      `${product.name} removed from your wishlist.`
    );
  });

  content.append(
    type,
    heading,
    description,
    price,
    removeButton
  );

  article.append(imageLink, content);

  return article;
}

function renderWishlist() {
  const wishlistList = document.querySelector(
    "[data-wishlist-list]"
  );

  const emptyMessage = document.querySelector(
    "[data-empty-wishlist]"
  );

  if (!wishlistList || !emptyMessage) return;

  const wishlist = readWishlist();

  const savedProducts = wishlist
    .map((id) =>
      products.find((product) => product.id === id)
    )
    .filter(Boolean);

  wishlistList.replaceChildren();

  savedProducts.forEach((product) => {
    wishlistList.append(
      createWishlistCard(product)
    );
  });

  emptyMessage.hidden = savedProducts.length > 0;
  wishlistList.hidden = savedProducts.length === 0;
}

window.addEventListener("storage", (event) => {
  if (event.key === "tiptoe-wishlist") {
    updateWishlistControls();
    renderWishlist();
  }
});

/* Search and category filtering */

function applyProductFilters() {
  const searchInput = document.querySelector(
    "[data-product-search]"
  );

  const categorySelect = document.querySelector(
    "[data-product-filter]"
  );

  const productCards = document.querySelectorAll(
    "[data-search-item]"
  );

  const resultCount = document.querySelector(
    "[data-result-count]"
  );

  if (!productCards.length) return;

  const searchTerm =
    searchInput?.value.trim().toLowerCase() || "";

  const selectedCategory =
    categorySelect?.value || "all";

  let visibleProducts = 0;

  productCards.forEach((card) => {
    const productId = card.dataset.productId ||
      card.querySelector('a[href*="products.html#"]')?.getAttribute("href").split("#")[1];
    const product = products.find((item) => item.id === productId);
    const productText = (card.textContent + " " + (product ?
      [product.name, product.colour, product.type, product.code, product.description,
       ...product.features, ...Object.values(product.materials), ...product.sizes].join(" ") : "")
    ).toLowerCase();

    const productCategory =
      card.dataset.category;

    const matchesSearch =
      searchTerm === "" ||
      productText.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      productCategory === selectedCategory;

    const shouldShow =
      matchesSearch && matchesCategory;

    card.hidden = !shouldShow;
    card.style.display = shouldShow ? "" : "none";

    if (shouldShow) {
      visibleProducts++;
    }
  });

  if (resultCount) {
    resultCount.textContent =
      `${visibleProducts} ${
        visibleProducts === 1
          ? "result"
          : "results"
      }`;
  }
}

document
  .querySelector("[data-product-search]")
  ?.addEventListener(
    "input",
    applyProductFilters
  );

document
  .querySelector("[data-product-filter]")
  ?.addEventListener(
    "change",
    applyProductFilters
  );

/* Demonstration forms */

document
  .querySelectorAll("[data-demo-form]")
  .forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const status = form.querySelector(
        "[data-form-status]"
      );

      if (status) {
        status.hidden = false;
        status.focus();
      }

      form.reset();
    });
  });

/* Password visibility */

document
  .querySelector("[data-password-toggle]")
  ?.addEventListener("click", (event) => {
    const passwordInput =
      document.querySelector("#password");

    if (!passwordInput) return;

    const showPassword =
      passwordInput.type === "password";

    passwordInput.type = showPassword
      ? "text"
      : "password";

    event.currentTarget.textContent =
      showPassword
        ? "Hide password"
        : "Show password";

    event.currentTarget.setAttribute(
      "aria-pressed",
      String(showPassword)
    );
  });

/* Initialise page */

renderWishlist();
updateWishlistControls();
applyProductFilters();