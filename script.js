// PRODUCTS
const products = [
  
 
  {
    id: 1,
    name: "Red Bridal Lehenga",
    cat: "lehnga",
    catLbl: "Designer Lehnga",
    price: 3999,
    per: "/ day",
    badge: "bridal",
    rating: 5,
    img: "images/lehengas/lehengas_image2.jpeg",
  },
  {
    id: 2,
    name: "Gold Bridal Jewellery Set",
    cat: "jewellery",
    catLbl: "jewellery",
    price: 1999,
    per: "/ day",
    badge: "bridal",
    rating: 5,
    img: "images/jewellery/j_1.jpg",
  },
  {
    id: 3,
    name: "Royal Blue Gown",
    cat: "gown",
    catLbl: "Gown",
    price: 2999,
    per: "/ day",
    badge: "rental",
    rating: 5,
    img: "images/gowns/g_2.jpg",
  },
  {
    id: 4,
    name: "Diamond Necklace Set",
    cat: "jewellery",
    catLbl: "jewellery",
    price: 2499,
    per: "/ day",
    badge: "new",
    rating: 5,
    img: "images/jewellery/j_2.jpg",
  },
  {
    id: 5,
    name: "Emerald Bridal Set",
    cat: "bridal",
    catLbl: "Bridal Wear",
    price: 5499,
    per: "/ rental",
    badge: "bridal",
    rating: 5,
    img: "images/bridel/bridal_image10.jpeg",
  },
  {
    id: 6,
    name: "Kundan Jewellery Set",
    cat: "jewellery",
    catLbl: "jewellery",
    price: 1799,
    per: "/ day",
    badge: "rental",
    rating: 4,
    img: "images/jewellery/j_3.jpg",
  },
  {
    id: 7,
    name: "Pink Anarkali Suit",
    cat: "bridesmaids",
    catLbl: "BridesMaids",
    price: 1299,
    per: "/ day",
    badge: "new",
    rating: 4,
    img: "images/bridel/bridal_image4.jpg",
  },
  {
    id: 8,
    name: "Antique Gold Jewellery",
    cat: "jewellery",
    catLbl: "jewellery",
    price: 2199,
    per: "/ day",
    badge: "new",
    rating: 4,
    img: "images/jewellery/j_4.jpg",
  },
  {
    id: 9,
    name: "Gold Embroidered Lehenga",
    cat: "lehnga",
    catLbl: "Designer Lehnga",
    price: 4499,
    per: "/ day",
    badge: "bridal",
    rating: 5,
    img: "images/lehengas/lehengas_image5.jpeg",
  },
  {
    id: 10,
    name: "Temple Jewellery Set",
    cat: "jewellery",
    catLbl: "jewellery",
    price: 1899,
    per: "/ day",
    badge: "bridal",
    rating: 5,
    img: "images/jewellery/j_5.jpg",
  },
  {
    id: 11,
    name: "Ivory Floral Gown",
    cat: "gown",
    catLbl: "Gown",
    price: 2499,
    per: "/ day",
    badge: "new",
    rating: 4,
    img: "images/gowns/g_1.jpg",
  },
  {
    id: 12,
    name: "Maroon Velvet Lehnga",
    cat: "lehnga",
    catLbl: "Designer Lehnga",
    price: 3599,
    per: "/ day",
    badge: "rental",
    rating: 4,
    img: "images/lehengas/lehengas_image7.jpeg",
  },
  {
    id: 13,
    name: "Teal Sharara Set",
    cat: "bridesmaids",
    catLbl: "BridesMaids",
    price: 1699,
    per: "/ day",
    badge: "new",
    rating: 4,
    img: "images/bridel/bridal_image10.jpeg",
  },
  {
    id: 14,
    name: "Teal Sharara Set",
    cat: "bridesmaids",
    catLbl: "BridesMaids",
    price: 1699,
    per: "/ day",
    badge: "new",
    rating: 4,
    img: "images/bridel/bridal_image11.jpeg",
  },
    {
    id: 15,
    name: "Emerald Bridal Set",
    cat: "bridal",
    catLbl: "Bridal Wear",
    price: 5499,
    per: "/ rental",
    badge: "bridal",
    rating: 5,
    img: "images/bridel/bridal_image9.jpeg",
  },
    {
    id: 16,
    name: "Royal Blue Gown",
    cat: "gown",
    catLbl: "Gown",
    price: 2999,
    per: "/ day",
    badge: "rental",
    rating: 5,
    img: "images/gowns/g_3.jpg",
  },
];







const badgeColors = {
  bridal: "background:var(--maroon)",
  rental: "background:var(--teal)",
  new: "background:#2E5D4B",
  buy: "background:var(--gold-dark)",
};

function stars(n) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function renderProducts(filter) {
  const grid = document.getElementById("productGrid");
  const list =
    filter === "all" ? products : products.filter((p) => p.cat === filter);
  grid.innerHTML = "";
  list.forEach((p, i) => {
    const badgeHtml = p.badge
      ? `<div class="prod-badge ${p.badge}" style="${badgeColors[p.badge] || "background:var(--teal)"}">${p.badge.charAt(0).toUpperCase() + p.badge.slice(1)}</div>`
      : "";
    const col = document.createElement("div");
    col.className = "col-sm-6 col-lg-3 card-animate";
    col.style.transitionDelay = i * 0.07 + "s";
    col.innerHTML = `
      <div class="product-card h-100" onclick="openBooking(${p.id})">
        <div class="prod-img-wrap">
          ${badgeHtml}
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          <div class="prod-overlay"><button class="overlay-book">Book / Buy</button></div>
        </div>
        <div class="prod-body">
          <div class="prod-cat">${p.catLbl}</div>
          <div class="prod-name">${p.name}</div>
          <div class="prod-price">₹${p.price.toLocaleString("en-IN")}<span>${p.per}</span></div>
          <div class="prod-rating">${stars(p.rating)}</div>
        </div>
      </div>`;
    grid.appendChild(col);
  });
  setTimeout(observeCards, 50);
}

document.querySelectorAll(".filter-btn").forEach((b) => {
  b.addEventListener("click", function () {
    document
      .querySelectorAll(".filter-btn")
      .forEach((x) => x.classList.remove("active"));
    this.classList.add("active");
    renderProducts(this.dataset.filter);
  });
});

// BOOKING
let curProd = null;
function openBooking(id) {
  curProd = products.find((p) => p.id === id);
  document.getElementById("mImg").src = curProd.img;
  document.getElementById("mName").textContent = curProd.name;
  document.getElementById("mPrice").textContent =
    "₹" + curProd.price.toLocaleString("en-IN") + " " + curProd.per;
  document.getElementById("mCat").textContent = curProd.catLbl;
  updateTotal();
  new bootstrap.Modal(document.getElementById("bookingModal")).show();
}
function updateTotal() {
  if (!curProd) return;
  const type = document.getElementById("bType").value;
  const days = parseInt(document.getElementById("bDays").value) || 1;
  const amt = type === "buy" ? curProd.price * 8 : curProd.price * days;
  document.getElementById("totalAmt").textContent =
    "₹" + amt.toLocaleString("en-IN");
  document.getElementById("daysRow").style.display =
    type === "buy" ? "none" : "";
}
document.getElementById("bDays").addEventListener("change", updateTotal);
document.getElementById("bType").addEventListener("change", updateTotal);

// ✅ NAYA sendContact()
function sendContact() {
  const name = document.getElementById("cName").value.trim();
  const phone = document.getElementById("cPhone").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const occasion = document.getElementById("cOccasion").value;
  const msg = document.getElementById("cMsg").value.trim();

  if (!name || !phone || !email) {
    showToast("Error ❌", "Please fill all required fields");
    return;
  }

  fetch(SHEET_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sheet: "Contacts",
      type: "contact",

      name,
      phone,
      email,
      occasion,
      message: msg,
    }),
  })
    .then(() => {
      showToast("Sent! ✦", "Your message has been saved successfully.");
      document.getElementById("cName").value = "";
      document.getElementById("cPhone").value = "";
      document.getElementById("cEmail").value = "";
      document.getElementById("cOccasion").value = "";
      document.getElementById("cMsg").value = "";
    })
    .catch(() => showToast("Error ❌", "Something went wrong. Try again."));
}

// ✅ NAYA confirmBooking() — WhatsApp ke saath Google Sheet bhi
function confirmBooking() {
  const name = document.getElementById("bName").value.trim();
  const phone = document.getElementById("bPhone").value.trim();
  const date = document.getElementById("bDate").value;
  const type = document.getElementById("bType").value;
  const days = document.getElementById("bDays").value;
  const occasion = document.getElementById("bOcc").value;
  const address = document.getElementById("bAddr").value;

  if (!name || !phone || !date) {
    showToast("Incomplete ❌", "Please fill required fields.");
    return;
  }

  const amount = document.getElementById("totalAmt").textContent;

  // ✅ Google Sheet Save
  fetch(SHEET_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sheet: "Bookings",
      type: "booking",
      name,
      phone,
      product: curProd.name,
      category: curProd.catLbl,
      eventDate: date,
      bookingType: type,
      rentalDays: type === "rental" ? days : "N/A",
      occasion,
      address,
      amount,
    }),
  });

  // ❗ Booking Success Message (IMPORTANT)
  showToast(
    "Booking Successful 🎉",
    "Your booking has been successfully submitted. We will contact you soon.",
  );

  // Modal close
  bootstrap.Modal.getInstance(document.getElementById("bookingModal")).hide();

  // Reset form (optional)
  document.getElementById("bName").value = "";
  document.getElementById("bPhone").value = "";
  document.getElementById("bDate").value = "";
  document.getElementById("bOcc").value = "";
  document.getElementById("bAddr").value = "";
}
function subscribeNews() {
  showToast("Subscribed! ✦", "You'll receive our latest arrivals & offers.");
}

function showToast(title, msg) {
  document.getElementById("toastT").textContent = title;
  document.getElementById("toastM").textContent = msg;
  const t = document.getElementById("kpToast");
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 4200);
}

// SCROLL
window.addEventListener("scroll", () => {
  const nav = document.getElementById("mainNav");
  const st = document.getElementById("scrollTop");
  if (window.scrollY > 80) {
    nav.classList.add("scrolled");
    st.classList.add("visible");
  } else {
    nav.classList.remove("scrolled");
    st.classList.remove("visible");
  }
  ["home", "about", "collection", "bridal", "contact"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const r = el.getBoundingClientRect();
    const lnk = document.querySelector(`.nav-link[href="#${id}"]`);
    if (lnk) {
      if (r.top <= 100 && r.bottom >= 100) lnk.classList.add("active");
      else lnk.classList.remove("active");
    }
  });
});

function observeCards() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  document.querySelectorAll(".card-animate").forEach((el) => obs.observe(el));
}

renderProducts("all");
observeCards();
