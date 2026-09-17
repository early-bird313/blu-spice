/**
 * Blu Spice | Tangail - Official Web Application
 * Features: 5-Page Navigation, Dynamic Food Menu, Live Portion Pricing,
 * Interactive Review System, Table Booking, and WhatsApp Order Integration.
 */

// Restaurant Configuration
const RESTAURANT_CONFIG = {
  name: "Blu Spice | Tangail",
  tagline: "We like to give you the best quality",
  phone: "+8801700000000",
  whatsapp: "8801700000000",
  address: "কলেজ পাড়া, টাঙ্গাইল সদর, বাংলাদেশ",
  deliveryCharge: 40,
  minOrder: 150
};

// Menu Database with Real Photos
const MENU_ITEMS = [
  {
    id: "p1",
    name: "সিগনেচার চিকেন পিৎজা",
    enName: "Signature Special Chicken Pizza",
    category: "pizza",
    tag: "বেস্ট সেলার 🔥",
    tagBg: "bg-orange-500",
    image: "pizza-baked.jpg", // Real photo from restaurant
    description: "খাঁটি ওভেনে বেক করা, প্রিমিয়াম মোজারেলা চিজ, স্পাইসড চিকেন, অলিভ, পুদিনা ও দুটি স্পেশাল সস সহ।",
    portions: [
      { name: "১-২ জন (৮\")", price: 480 },
      { name: "৩-৪ জন (১০\")", price: 780 },
      { name: "ফ্যামিলি (১২\")", price: 1150 }
    ]
  },
  {
    id: "p2",
    name: "মেক্সিকান ফ্রেশ টপিংস পিৎজা",
    enName: "Mexican Loaded Chicken Pizza",
    category: "pizza",
    tag: "হট & স্পাইসি",
    tagBg: "bg-red-500",
    image: "pizza-prep.jpg", // Real photo from kitchen prep
    description: "তাজা বেলপেপার, মাশরুম, চিকেন স্ট্রিপস, পেঁয়াজ ও হট মেক্সিকান সসে ভরপুর টপিংস।",
    portions: [
      { name: "১-২ জন (৮\")", price: 520 },
      { name: "৩-৪ জন (১০\")", price: 850 },
      { name: "ফ্যামিলি (১২\")", price: 1250 }
    ]
  },
  {
    id: "p3",
    name: "স্মোকি বিবিকিউ চিকেন পিৎজা",
    enName: "Smoky BBQ Chicken Pizza",
    category: "pizza",
    tag: "শেফ স্পেশাল",
    tagBg: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    description: "মিষ্টি ও ঝাল স্মোকি বারবিকিউ সসে মাখানো রসালো চিকেন ও ডাবল লেয়ার মোজারেলা চিজ।",
    portions: [
      { name: "১-২ জন (৮\")", price: 550 },
      { name: "৩-৪ জন (১০\")", price: 890 },
      { name: "ফ্যামিলি (১২\")", price: 1290 }
    ]
  },
  {
    id: "b1",
    name: "ক্রিস্পি জিঙ্গার চিকেন বার্গার",
    enName: "Crispy Zinger Chicken Burger",
    category: "burger",
    tag: "জনপ্রিয়",
    tagBg: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    description: "মুচমুচে ফ্রাইড চিকেন প্যাটি, ব্লু স্পাইস স্পেশাল সস, গলিত চিজ ও ফ্রেশ আইসবার্গ লেটুস।",
    portions: [
      { name: "১ জন (সিঙ্গেল)", price: 220 },
      { name: "২ জন (ডাবল প্যাক)", price: 420 }
    ]
  },
  {
    id: "b2",
    name: "ডাবল প্যাটি চিজ বার্গার",
    enName: "Double Patty Cheese Burger",
    category: "burger",
    tag: "হেভি মিল",
    tagBg: "bg-amber-600",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
    description: "ডাবল গ্রিলড প্যাটি, দুই লেয়ারের মেল্টেড চিজ ও ক্যারামেলাইজড পেঁয়াজের দুর্দান্ত সমন্বয়।",
    portions: [
      { name: "১ জন (সিঙ্গেল)", price: 320 },
      { name: "২ জন (কম্বো)", price: 590 }
    ]
  },
  {
    id: "c1",
    name: "গোল্ডেন ক্রিস্পি চিকেন ফ্রাই",
    enName: "Golden Crispy Fried Chicken",
    category: "chicken",
    tag: "ক্রাঞ্চি",
    tagBg: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
    description: "১১টি স্পেশাল মসলায় ম্যারিনেট করা গরম গরম ক্রাঞ্চি ও রসালো চিকেন ফ্রাই।",
    portions: [
      { name: "২ পিস (১ জন)", price: 180 },
      { name: "৪ পিস (২ জন)", price: 340 },
      { name: "৮ পিস (ফ্যামিলি)", price: 650 }
    ]
  },
  {
    id: "c2",
    name: "হট নাগা চিকেন উইংস",
    enName: "Hot Naga Glazed Wings",
    category: "chicken",
    tag: "ঝাল লাভার 🔥",
    tagBg: "bg-red-600",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    description: "আগুনে ঝাল নাগা মরিচের গ্লেজ সসে মাখানো উইংস, তিলের গার্নিশ সহ।",
    portions: [
      { name: "৬ পিস", price: 240 },
      { name: "১২ পিস", price: 460 }
    ]
  },
  {
    id: "m1",
    name: "ওভেন বেকড চিজি পাস্তা",
    enName: "Oven Baked Cheesy Pasta",
    category: "pasta",
    tag: "চিজি ডিলাইট",
    tagBg: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    description: "পেন্নে পাস্তা, কিমা চিকেন ও লালচে গোল্ডেন চিজের ক্রাস্টে ওভেনে প্রস্তুত।",
    portions: [
      { name: "১ জন (রেগুলার)", price: 280 },
      { name: "২ জন (লার্জ)", price: 520 }
    ]
  },
  {
    id: "d1",
    name: "ব্লু ওশান স্পেশাল মকটেল",
    enName: "Blu Ocean Mocktail (Signature)",
    category: "drinks",
    tag: "সিগনেচার 💙",
    tagBg: "bg-sky-500",
    image: "cafe-counter.png", // Cafe counter asset
    description: "ব্লু কুরাসাও, লেমন জুস ও মিন্ট স্প্রিগের সতেজ ঠান্ডা ফিজি মকটেল।",
    portions: [
      { name: "১ গ্লাস", price: 150 },
      { name: "২ গ্লাস", price: 280 }
    ]
  }
];

// Initial Reviews Database
const DEFAULT_REVIEWS = [
  {
    id: "r1",
    name: "রাকিবুল হাসান",
    location: "কলেজ পাড়া, টাঙ্গাইল",
    rating: 5,
    date: "২ দিন আগে",
    comment: "Blu Spice এর Special Chicken Pizza টা টাঙ্গাইলের বেস্ট! চিজ আর ক্রাস্ট দুটোই অসাধারণ ছিল। কলেজ পাড়ায় এমন ভালো ফাস্টফুড পেয়ে খুব খুশি হলাম।"
  },
  {
    id: "r2",
    name: "ফারহানা ইসলাম",
    location: "ভিক্টোরিয়া রোড, টাঙ্গাইল",
    rating: 5,
    date: "৪ দিন আগে",
    comment: "রেস্টুরেন্টের ভেতরের লাইটিং আর ডাইন-ইন ক্যাফের পরিবেশটা খুবই প্রিমিয়াম ও শান্ত। বন্ধুদের সাথে আড্ডা বা ছবি তোলার চমৎকার জায়গা।"
  },
  {
    id: "r3",
    name: "আহমেদ রাফি",
    location: "আকুর টাকুর পাড়া, টাঙ্গাইল",
    rating: 5,
    date: "১ সপ্তাহ আগে",
    comment: "হোয়াটসঅ্যাপে অর্ডার করেছিলাম, মাত্র ২৫ মিনিটে গরম গরম পিৎজা আর উইংস ডেলিভারি পেয়েছি। প্যাকেজিংও অনেক পরিচ্ছন্ন ছিল।"
  },
  {
    id: "r4",
    name: "সাদিয়া আক্তার",
    location: "টাঙ্গাইল সদর",
    rating: 5,
    date: "২ সপ্তাহ আগে",
    comment: "ব্লু ওশান মকটেল আর গোল্ডেন চিকেন ফ্রাই দুটোই সুপার টেস্ট ছিল। রেস্টুরেন্টের কর্মীরাও অনেক আন্তরিক।"
  }
];

// App State
let cart = [];
let reviews = [];
let currentCategory = "all";
let selectedPortions = {};

// On Load
document.addEventListener("DOMContentLoaded", () => {
  // Set default portions
  MENU_ITEMS.forEach((item) => {
    selectedPortions[item.id] = 0;
  });

  loadCart();
  loadReviews();
  initRouting();
  renderMenu();
  renderReviews();
  setupEvents();
  updateCartUI();
});

// 5-Page Routing & Switching
window.switchPage = function (pageId) {
  // Update pages
  document.querySelectorAll(".page-section").forEach((sec) => {
    sec.classList.remove("active");
  });
  const target = document.getElementById(`page-${pageId}`);
  if (target) {
    target.classList.add("active");
  }

  // Update Nav Links
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("data-page") === pageId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Update Mobile Nav
  document.querySelectorAll(".mobile-nav-item").forEach((btn) => {
    if (btn.getAttribute("data-page") === pageId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update URL hash without reload
  window.location.hash = pageId;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function initRouting() {
  const hash = window.location.hash.replace("#", "") || "home";
  const validPages = ["home", "menu", "about", "reviews", "contact"];
  if (validPages.includes(hash)) {
    switchPage(hash);
  } else {
    switchPage("home");
  }

  window.addEventListener("hashchange", () => {
    const newHash = window.location.hash.replace("#", "");
    if (validPages.includes(newHash)) {
      switchPage(newHash);
    }
  });
}

// Portion Selection
window.selectPortion = function (itemId, index) {
  selectedPortions[itemId] = index;
  renderMenu();
};

// Render Menu
function renderMenu() {
  const container = document.getElementById("menuGrid");
  if (!container) return;

  const searchQuery = document.getElementById("menuSearchInput")?.value.toLowerCase().trim() || "";

  const filtered = MENU_ITEMS.filter((item) => {
    const matchesCat = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.enName.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <span class="text-4xl block mb-2">🍽️</span>
        <h4 class="text-lg font-bold text-gray-800">কোনো খাবার পাওয়া যায়নি</h4>
        <p class="text-xs text-gray-500">অন্য নাম লিখে খুঁজুন অথবা সব ক্যাটাগরি সিলেক্ট করুন</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((item) => {
      const selectedIndex = selectedPortions[item.id] || 0;
      const currentPortion = item.portions[selectedIndex] || item.portions[0];

      return `
      <div class="food-card">
        <!-- Image Area -->
        <div class="img-container">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <span class="absolute top-3 left-3 ${item.tagBg} text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
            ${item.tag}
          </span>
          <span class="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-gray-900 font-black text-base px-3 py-1 rounded-xl shadow">
            ৳${currentPortion.price}/-
          </span>
        </div>

        <!-- Details -->
        <div class="p-6 flex flex-col flex-grow text-center">
          <h3 class="text-xl font-black text-gray-900 mb-1">${item.name}</h3>
          <p class="text-xs font-bold text-orange-600 mb-2">${item.enName}</p>
          <p class="text-sm text-gray-600 line-clamp-2 mb-5 leading-relaxed font-normal">${item.description}</p>

          <!-- Portion Selector Buttons -->
          <div class="mt-auto pt-4 border-t border-gray-100">
            <div class="grid grid-cols-${item.portions.length} gap-2 mb-4">
              ${item.portions
                .map(
                  (portion, idx) => `
                <button 
                  onclick="selectPortion('${item.id}', ${idx})"
                  class="flex flex-col items-center justify-center p-2.5 rounded-xl transition border text-center ${
                    idx === selectedIndex
                      ? 'border-orange-500 bg-orange-50 text-orange-600 font-bold shadow-sm'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }"
                >
                  <span class="text-xs font-bold mb-0.5">${portion.name}</span>
                  <span class="text-sm font-black text-gray-900">৳${portion.price}</span>
                </button>
              `
                )
                .join("")}
            </div>

            <!-- Add to Cart Button -->
            <button 
              onclick="addItemToCart('${item.id}')"
              class="btn-primary-orange w-full py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <span>কার্টে যোগ করুন (৳${currentPortion.price}/-)</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// Add Item with selected portion
window.addItemToCart = function (itemId) {
  const item = MENU_ITEMS.find((i) => i.id === itemId);
  if (!item) return;

  const portionIdx = selectedPortions[itemId] || 0;
  const portion = item.portions[portionIdx];
  const cartKey = `${itemId}_${portionIdx}`;

  const existing = cart.find((c) => c.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      cartKey: cartKey,
      id: item.id,
      name: item.name,
      portionName: portion.name,
      price: portion.price,
      image: item.image,
      qty: 1
    });
  }

  saveCart();
  showToast(`✅ "${item.name} (${portion.name})" কার্টে যোগ হয়েছে!`);
};

// Cart Helpers
function loadCart() {
  try {
    const saved = localStorage.getItem("blu_spice_cart_v2");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem("blu_spice_cart_v2", JSON.stringify(cart));
  updateCartUI();
}

window.updateQty = function (cartKey, delta) {
  const item = cart.find((c) => c.cartKey === cartKey);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter((c) => c.cartKey !== cartKey);
    }
  }
  saveCart();
};

window.removeFromCart = function (cartKey) {
  cart = cart.filter((c) => c.cartKey !== cartKey);
  saveCart();
};

function updateCartUI() {
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const grandTotal = subtotal > 0 ? subtotal + RESTAURANT_CONFIG.deliveryCharge : 0;

  // Badges
  document.querySelectorAll(".cart-badge").forEach((badge) => {
    badge.innerText = totalCount;
    badge.classList.toggle("hidden", totalCount === 0);
  });

  // Drawer
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const grandTotalEl = document.getElementById("cartGrandTotal");

  if (subtotalEl) subtotalEl.innerText = `৳${subtotal}/-`;
  if (grandTotalEl) grandTotalEl.innerText = `৳${grandTotal}/-`;

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-gray-400">
        <span class="text-5xl block mb-3">🛒</span>
        <p class="text-base font-bold text-gray-800">আপনার কার্ট খালি!</p>
        <p class="text-xs text-gray-500 mt-1">মেন্যু থেকে পছন্দের খাবার যোগ করুন</p>
      </div>
    `;
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
      <div class="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-xl object-cover" />
        <div class="flex-grow min-w-0">
          <h5 class="text-xs font-bold text-gray-900 truncate">${item.name}</h5>
          <p class="text-[11px] text-orange-600 font-semibold">${item.portionName} - ৳${item.price}</p>
        </div>
        <div class="flex items-center gap-1 bg-gray-100 rounded-lg px-2 py-1">
          <button onclick="updateQty('${item.cartKey}', -1)" class="w-5 h-5 flex items-center justify-center font-bold text-gray-600 hover:text-orange-600">-</button>
          <span class="text-xs font-bold px-1">${item.qty}</span>
          <button onclick="updateQty('${item.cartKey}', 1)" class="w-5 h-5 flex items-center justify-center font-bold text-gray-600 hover:text-orange-600">+</button>
        </div>
        <button onclick="removeFromCart('${item.cartKey}')" class="text-gray-400 hover:text-red-600 p-1">✕</button>
      </div>
    `
    )
    .join("");
}

// Drawer Toggle
window.toggleCart = function (forceState) {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer || !overlay) return;

  const isOpen = forceState !== undefined ? forceState : drawer.classList.contains("translate-x-full");

  if (isOpen) {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.add("opacity-100"), 10);
    document.body.style.overflow = "hidden";
  } else {
    drawer.classList.add("translate-x-full");
    overlay.classList.remove("opacity-100");
    setTimeout(() => overlay.classList.add("hidden"), 300);
    document.body.style.overflow = "";
  }
};

// WhatsApp Order Submit
window.sendWhatsAppOrder = function () {
  if (cart.length === 0) {
    showToast("⚠️ কার্টে কোনো খাবার নেই!");
    return;
  }

  const name = document.getElementById("custName")?.value.trim() || "";
  const phone = document.getElementById("custPhone")?.value.trim() || "";
  const address = document.getElementById("custAddress")?.value.trim() || "";

  if (!name || !phone || !address) {
    showToast("⚠️ দয়া করে নাম, মোবাইল এবং ঠিকানা পূরণ করুন!");
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const delivery = RESTAURANT_CONFIG.deliveryCharge;
  const grandTotal = subtotal + delivery;

  let msg = `🍕 *নতুন ফুড অর্ডার - ${RESTAURANT_CONFIG.name}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *নাম:* ${name}\n`;
  msg += `📞 *মোবাইল:* ${phone}\n`;
  msg += `📍 *ডেলিভারি ঠিকানা:* ${address}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `🍽️ *অর্ডারকৃত আইটেম:*\n`;

  cart.forEach((item, index) => {
    msg += `${index + 1}. ${item.name} (${item.portionName}) x ${item.qty} = ৳${item.price * item.qty}\n`;
  });

  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💵 সাবটোটাল: ৳${subtotal}\n`;
  msg += `🛵 ডেলিভারি চার্জ (টাঙ্গাইল): ৳${delivery}\n`;
  msg += `🔥 *সর্বমোট বিল:* ৳${grandTotal}/-\n`;
  msg += `_অফিশিয়াল ওয়েবসাইট থেকে পাঠানো অর্ডার_`;

  window.open(`https://api.whatsapp.com/send?phone=${RESTAURANT_CONFIG.whatsapp}&text=${encodeURIComponent(msg)}`, "_blank");
  cart = [];
  saveCart();
  toggleCart(false);
  showToast("🚀 আপনার অর্ডারটি হোয়াটসঅ্যাপে পাঠানো হয়েছে!");
};

// Table Booking Submit (Page 5)
window.handleTableBooking = function (e) {
  e.preventDefault();
  const name = document.getElementById("bookName")?.value.trim();
  const phone = document.getElementById("bookPhone")?.value.trim();
  const date = document.getElementById("bookDate")?.value;
  const time = document.getElementById("bookTime")?.value;
  const guests = document.getElementById("bookGuests")?.value;
  const occasion = document.getElementById("bookOccasion")?.value;

  if (!name || !phone || !date || !time) {
    showToast("⚠️ দয়া করে বুকিংয়ের সকল তথ্য পূরণ করুন!");
    return;
  }

  let bookingMsg = `🍽️ *টেবিল বুকিং রিকোয়েস্ট - ${RESTAURANT_CONFIG.name}*\n`;
  bookingMsg += `━━━━━━━━━━━━━━━━━━━━\n`;
  bookingMsg += `👤 *নাম:* ${name}\n`;
  bookingMsg += `📞 *মোবাইল:* ${phone}\n`;
  bookingMsg += `📅 *তারিখ:* ${date}\n`;
  bookingMsg += `⏰ *সময়:* ${time}\n`;
  bookingMsg += `👥 *অতিথি সংখ্যা:* ${guests}\n`;
  bookingMsg += `🎉 *উপলক্ষ:* ${occasion}\n`;
  bookingMsg += `━━━━━━━━━━━━━━━━━━━━\n`;
  bookingMsg += `_দয়া করে টেবিল নিশ্চিত করে আমাকে জানান_`;

  window.open(`https://api.whatsapp.com/send?phone=${RESTAURANT_CONFIG.whatsapp}&text=${encodeURIComponent(bookingMsg)}`, "_blank");
  showToast("🎉 আপনার বুকিং রিকোয়েস্ট হোয়াটসঅ্যাপে পাঠানো হয়েছে!");
};

// Reviews System (Page 4)
function loadReviews() {
  try {
    const saved = localStorage.getItem("blu_spice_reviews");
    if (saved) {
      reviews = JSON.parse(saved);
    } else {
      reviews = DEFAULT_REVIEWS;
    }
  } catch (e) {
    reviews = DEFAULT_REVIEWS;
  }
}

function saveReviews() {
  localStorage.setItem("blu_spice_reviews", JSON.stringify(reviews));
  renderReviews();
}

function renderReviews() {
  const container = document.getElementById("reviewsGrid");
  if (!container) return;

  container.innerHTML = reviews
    .map(
      (r) => `
      <div class="bg-white p-7 rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3.5">
            <div class="text-orange-500 text-base font-bold tracking-widest">
              ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
            </div>
            <span class="text-xs font-semibold text-gray-400">${r.date}</span>
          </div>
          <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-5 italic font-medium">
            "${r.comment}"
          </p>
        </div>
        <div class="flex items-center gap-3.5 pt-4 border-t border-gray-100">
          <div class="w-11 h-11 rounded-full bg-[#0b1e3d] text-white font-black flex items-center justify-center text-sm shadow">
            ${r.name.charAt(0)}
          </div>
          <div>
            <h5 class="text-sm font-bold text-gray-900">${r.name}</h5>
            <p class="text-xs font-medium text-gray-500">${r.location}</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Add New Review Form Submit
window.handleReviewSubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById("revName")?.value.trim();
  const location = document.getElementById("revLocation")?.value.trim();
  const rating = parseInt(document.getElementById("revRating")?.value || "5");
  const comment = document.getElementById("revComment")?.value.trim();

  if (!name || !comment) {
    showToast("⚠️ দয়া করে নাম ও রিভিউ মেসেজ লিখুন!");
    return;
  }

  reviews.unshift({
    id: "r_" + Date.now(),
    name: name,
    location: location || "টাঙ্গাইল সদর",
    rating: rating,
    date: "আজকে",
    comment: comment
  });

  saveReviews();
  document.getElementById("reviewForm")?.reset();
  showToast("🌟 আপনার চমৎকার রিভিউটির জন্য ধন্যবাদ!");
};

// Events Setup
function setupEvents() {
  // Category tabs
  document.querySelectorAll(".cat-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderMenu();
    });
  });

  // Search
  document.getElementById("menuSearchInput")?.addEventListener("input", () => {
    renderMenu();
  });
}

// Toast
function showToast(message) {
  const existing = document.getElementById("toastNotification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toastNotification";
  toast.className =
    "fixed top-5 right-5 z-50 bg-[#0b1e3d] text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold transition-all duration-300 transform -translate-y-5 opacity-0 flex items-center gap-2 border border-orange-500/40";
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.remove("-translate-y-5", "opacity-0"), 10);
  setTimeout(() => {
    toast.classList.add("-translate-y-5", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
