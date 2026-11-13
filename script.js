/* =====================================================
   SCRIPT.JS
   PART 1: tripData  -> the ONLY place you need to edit
   PART 2: the code that builds the website from tripData
   ===================================================== */


// =====================================
// EDIT YOUR ITINERARY CONTENT HERE
// =====================================
//
// Rules for editing (beginner friendly):
//  1. Only change the text INSIDE the "quotes".
//  2. Keep the commas at the end of each line.
//  3. To add an activity, copy one { ... }, block and paste it below.
//  4. To remove an activity, delete one whole { ... }, block.
//  5. Leave "image" as "" if you do not want a photo for that activity.
//
// IMAGES: every image on the website is a link (URL) in this object.
//  - Online image: paste a full link, e.g. "https://....jpg"
//  - Your own photo: put it in an "images" folder next to index.html
//    and write the path, e.g. "images/hero.jpg"
//
const tripData = {

  // ---------- GENERAL ----------
  destination: "Destination Name",
  tripName: "Destination Name Escape",          // shown in navbar, footer
  duration: "4 Days 3 Nights",
  tagline: "A short and inspiring tagline about the trip goes here",

  // HERO IMAGE (big photo at the very top of the page)
  heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80",

  // ---------- TRIP OVERVIEW CARDS (4-6 cards) ----------
  // icon can be any emoji. Add or remove cards freely.
  overview: [
    { icon: "📍", label: "Destination",    value: "Destination Name" },
    { icon: "🗓", label: "Duration",       value: "4 Days 3 Nights" },
    { icon: "🏨", label: "Accommodation",  value: "Hotel Name" },
    { icon: "🚌", label: "Transportation", value: "Private Vehicle" },
    { icon: "🍽", label: "Meals",          value: "Breakfast & Dinner" },
    { icon: "👥", label: "Group",          value: "Min. 10 People" }
  ],

  // ---------- PACKAGES (exactly two are designed, A and B) ----------
  packages: [

    // =============== PACKAGE A ===============
    {
      id: "package-a",
      name: "Package A",
      label: "Package A",                         // small tag on the card
      badge: "Selected",                          // shown when this package is active
      price: "Rp XXX",
      priceNote: "per person",
      description: "Short description of Package A. Explain what makes this package special in one or two sentences.",
      itineraryIntro: "A short introduction to the Package A itinerary.",
      heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      highlights: ["Highlight number one", "Highlight number two", "Highlight number three"],
      summary: "A short summary of this package. It appears in the final 'Your Journey' card at the bottom.",

      // ----- ITINERARY DAYS (package A) -----
      days: [
        {
          day: 1,
          title: "Arrival & First Impressions",
          meals: "Dinner",                         // optional, shown under the day title
          activities: [
            {
              time: "08:00",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description. Write what the group will do here.",
              image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80",
              duration: "1 hour",                  // optional
              notes: "",                           // optional (shown as a small note box)
              meal: ""                             // optional, e.g. "Breakfast" / "Lunch" / "Dinner"
            },
            {
              time: "12:30",
              title: "Lunch Stop",
              location: "Restaurant Name",
              description: "Short description of the meal or the restaurant.",
              image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
              duration: "1.5 hours",
              notes: "",
              meal: "Lunch"
            },
            {
              time: "15:30",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80",
              duration: "2 hours",
              notes: "Optional note, e.g. bring a hat.",
              meal: ""
            }
          ]
        },
        {
          day: 2,
          title: "Day Two Title",
          meals: "Breakfast, Dinner",
          activities: [
            {
              time: "07:30",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
              duration: "3 hours",
              notes: "",
              meal: "Breakfast"
            },
            {
              time: "13:00",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
              duration: "2 hours",
              notes: "",
              meal: ""
            }
          ]
        },
        {
          day: 3,
          title: "Day Three Title",
          meals: "Breakfast, Dinner",
          activities: [
            {
              time: "09:00",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
              duration: "2 hours",
              notes: "",
              meal: ""
            },
            {
              time: "16:00",
              title: "Free Time",
              location: "Location Name",
              description: "Short description of the free time or optional activity.",
              image: "",
              duration: "",
              notes: "",
              meal: ""
            }
          ]
        },
        {
          day: 4,
          title: "Farewell",
          meals: "Breakfast",
          activities: [
            {
              time: "08:00",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&q=80",
              duration: "1.5 hours",
              notes: "",
              meal: "Breakfast"
            },
            {
              time: "11:00",
              title: "Check-out & Departure",
              location: "Hotel Name",
              description: "Check-out, souvenir stop, and the journey home.",
              image: "",
              duration: "",
              notes: "",
              meal: ""
            }
          ]
        }
      ],

      // ----- HOTEL (package A) -----
      hotel: {
        name: "Hotel Name",
        stars: 4,                                  // 1 to 5, use 0 to hide stars
        location: "Hotel Location, City",
        nights: "3 Nights",
        description: "Short description of the hotel and the room type.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        facilities: ["Wi-Fi", "Breakfast", "Parking", "Air Conditioning", "Swimming Pool"]
      },

      // ----- INCLUDED / NOT INCLUDED (package A) -----
      inclusions: ["Transportation", "Accommodation", "Meals as listed", "Entrance tickets"],
      exclusions: ["Personal expenses", "Optional activities", "Other expenses"]
    },

    // =============== PACKAGE B ===============
    {
      id: "package-b",
      name: "Package B",
      label: "Package B",
      badge: "Selected",
      price: "Rp XXX",
      priceNote: "per person",
      description: "Short description of Package B. Explain how it is different from Package A.",
      itineraryIntro: "A short introduction to the Package B itinerary.",
      heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      highlights: ["Highlight number one", "Highlight number two", "Highlight number three"],
      summary: "A short summary of Package B. It appears in the final 'Your Journey' card.",

      days: [
        {
          day: 1,
          title: "Day One Title",
          meals: "Dinner",
          activities: [
            {
              time: "09:00",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80",
              duration: "2 hours",
              notes: "",
              meal: ""
            },
            {
              time: "18:30",
              title: "Welcome Dinner",
              location: "Restaurant Name",
              description: "Short description of the dinner.",
              image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
              duration: "2 hours",
              notes: "",
              meal: "Dinner"
            }
          ]
        },
        {
          day: 2,
          title: "Day Two Title",
          meals: "Breakfast, Lunch, Dinner",
          activities: [
            {
              time: "08:00",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
              duration: "3 hours",
              notes: "",
              meal: ""
            },
            {
              time: "14:00",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80",
              duration: "2 hours",
              notes: "Optional note.",
              meal: ""
            }
          ]
        },
        {
          day: 3,
          title: "Day Three Title",
          meals: "Breakfast, Dinner",
          activities: [
            {
              time: "10:00",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
              duration: "2.5 hours",
              notes: "",
              meal: ""
            },
            {
              time: "15:30",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
              duration: "2 hours",
              notes: "",
              meal: ""
            }
          ]
        },
        {
          day: 4,
          title: "Farewell",
          meals: "Breakfast",
          activities: [
            {
              time: "09:00",
              title: "Activity Name",
              location: "Location Name",
              description: "Short activity description.",
              image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80",
              duration: "1.5 hours",
              notes: "",
              meal: "Breakfast"
            },
            {
              time: "12:00",
              title: "Departure",
              location: "Meeting Point",
              description: "Journey home.",
              image: "",
              duration: "",
              notes: "",
              meal: ""
            }
          ]
        }
      ],

      hotel: {
        name: "Hotel Name (Package B)",
        stars: 5,
        location: "Hotel Location, City",
        nights: "3 Nights",
        description: "Short description of the hotel and the room type for Package B.",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        facilities: ["Wi-Fi", "Breakfast", "Parking", "Spa", "Restaurant", "Swimming Pool"]
      },

      inclusions: ["Transportation", "Premium accommodation", "All meals", "Entrance tickets", "Tour guide"],
      exclusions: ["Personal expenses", "Optional activities", "Travel insurance"]
    }
  ],

  // ---------- GALLERY (add or remove image links freely) ----------
  gallery: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
  ],

  // ---------- IMPORTANT INFORMATION (accordion) ----------
  // Add, remove, or rename items freely.
  information: [
    { title: "Meeting Point",         content: "Write the meeting point address and time here." },
    { title: "Departure Information", content: "Write the departure date, time, and transport details here." },
    { title: "What to Bring",         content: "Write the packing list here (ID, clothes, medicine, etc.)." },
    { title: "Dress Code",            content: "Write any dress code or recommended clothing here." },
    { title: "Important Notes",       content: "Write any important notes or rules here." },
    { title: "Cancellation Policy",   content: "Write the cancellation and refund policy here." }
  ],

  // ---------- CONTACT ----------
  contact: {
    whatsappNumber: "628123456789",                // digits only, with country code (no + or spaces)
    whatsappDisplay: "+62 812-3456-789",
    instagramHandle: "yourinstagram",              // without @
    email: "hello@example.com",
    bookText: "Contact / Book"                     // text on the final button
  },

  footerText: "A short sentence about your trip or tour goes here."
};
// =====================================
// END OF EDITABLE CONTENT
// You do not need to change anything below this line.
// =====================================



/* =====================================================
   PART 2: WEBSITE LOGIC (builds the page from tripData)
   ===================================================== */

// ---------- State ----------
let currentPackageIndex = 0;   // 0 = Package A, 1 = Package B
let currentDayIndex = 0;       // 0 = Day 1, etc.
let lightboxIndex = 0;

// ---------- Helpers ----------
const $ = (id) => document.getElementById(id);

// Escape text so special characters can't break the page
function esc(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function pad(n) { return String(n).padStart(2, "0"); }
function currentPackage() { return tripData.packages[currentPackageIndex]; }

// If an image link is broken, show a soft gradient instead of a broken icon
document.addEventListener("error", (e) => {
  if (e.target && e.target.tagName === "IMG") e.target.classList.add("img-broken");
}, true);

// Fade the content out and in when the package or day changes
function swap(elementId, renderFn) {
  const el = $(elementId);
  el.classList.add("is-swapping");
  setTimeout(() => {
    renderFn();
    el.classList.remove("is-swapping");
    observeReveals();
  }, 280);
}

// ---------- Static sections ----------
function renderStatic() {
  document.title = `${tripData.tripName} | ${tripData.duration}`;
  $("navBrand").textContent = tripData.tripName;

  // Hero
  $("heroImage").src = tripData.heroImage;
  $("heroImage").alt = tripData.destination;
  $("heroDuration").textContent = tripData.duration;
  $("heroTitle").textContent = tripData.destination;
  $("heroTagline").textContent = tripData.tagline;

  // Overview cards
  $("overviewGrid").innerHTML = tripData.overview.map((o) => `
    <div class="overview-card">
      <div class="overview-card__icon">${esc(o.icon)}</div>
      <div class="overview-card__label">${esc(o.label)}</div>
      <div class="overview-card__value">${esc(o.value)}</div>
    </div>`).join("");

  // Gallery
  $("galleryGrid").innerHTML = tripData.gallery.map((src, i) => `
    <button class="gallery__item reveal" data-index="${i}" aria-label="Open photo ${i + 1}">
      <img src="${esc(src)}" alt="Gallery photo ${i + 1}" loading="lazy" />
    </button>`).join("");

  // Accordion
  $("accordion").innerHTML = tripData.information.map((item) => `
    <div class="acc-item">
      <button class="acc-btn" aria-expanded="false">
        <span>${esc(item.title)}</span><span class="acc-icon"></span>
      </button>
      <div class="acc-panel"><div class="acc-panel__inner">${esc(item.content)}</div></div>
    </div>`).join("");

  renderFooter();
}

// ---------- Package cards + switch ----------
function renderPackageCards() {
  $("packageGrid").innerHTML = tripData.packages.map((p, i) => `
    <article class="package-card reveal ${i === currentPackageIndex ? "is-active" : ""}" data-package="${i}">
      <div class="package-card__media">
        <img src="${esc(p.heroImage)}" alt="${esc(p.name)}" loading="lazy" />
        <span class="package-card__tag">${esc(p.label || p.name)}</span>
        <span class="package-card__badge">${esc(p.badge || "Selected")}</span>
      </div>
      <div class="package-card__body">
        <h3 class="package-card__name">${esc(p.name)}</h3>
        <p class="package-card__desc">${esc(p.description)}</p>
        <p class="package-card__meta">${esc(tripData.duration)}</p>
        <ul class="package-card__highlights">
          ${(p.highlights || []).map((h) => `<li>${esc(h)}</li>`).join("")}
        </ul>
        <div class="package-card__footer">
          <div class="package-card__price">
            <small>${esc(p.priceNote || "")}</small>
            <strong>${esc(p.price)}</strong>
          </div>
          <button class="btn btn--primary" data-explore="${i}">Explore Package</button>
        </div>
      </div>
    </article>`).join("");
}

function renderPackageSwitch() {
  $("packageSwitch").innerHTML = tripData.packages.map((p, i) => `
    <button class="switch-btn ${i === currentPackageIndex ? "is-active" : ""}"
            role="tab" aria-selected="${i === currentPackageIndex}" data-switch="${i}">
      ${esc(p.name)}
    </button>`).join("");
}

// ---------- Itinerary ----------
function renderDayTabs() {
  const pkg = currentPackage();
  $("dayTabs").innerHTML = pkg.days.map((d, i) => `
    <button class="day-tab ${i === currentDayIndex ? "is-active" : ""}"
            role="tab" aria-selected="${i === currentDayIndex}" data-day="${i}">
      <span class="day-tab__num">DAY ${pad(d.day)}</span>
      <span class="day-tab__title">${esc(d.title)}</span>
    </button>`).join("");
}

function renderTimeline() {
  const pkg = currentPackage();
  const day = pkg.days[currentDayIndex];
  $("itineraryIntro").textContent = pkg.itineraryIntro || "";

  if (!day) {
    $("dayHeader").innerHTML = "";
    $("timeline").innerHTML = `<p style="text-align:center;color:var(--color-text-soft)">No itinerary added yet.</p>`;
    return;
  }

  $("dayHeader").innerHTML = `
    <div class="day-header__num">DAY ${pad(day.day)}</div>
    <h3 class="day-header__title">${esc(day.title)}</h3>
    ${day.meals ? `<p class="day-header__meals">Meals: ${esc(day.meals)}</p>` : ""}`;

  $("timeline").innerHTML = day.activities.map((a) => {
    const chips = [
      a.duration ? `<span class="chip">⏱ ${esc(a.duration)}</span>` : "",
      a.meal ? `<span class="chip chip--meal">🍽 ${esc(a.meal)}</span>` : ""
    ].join("");

    return `
      <div class="t-item reveal">
        <div class="t-item__time">${esc(a.time)}</div>
        <span class="t-item__dot"></span>
        <article class="t-card ${a.image ? "" : "t-card--noimg"}">
          <div class="t-card__body">
            <h4 class="t-card__title">${esc(a.title)}</h4>
            <p class="t-card__location">📍 ${esc(a.location)}</p>
            <p class="t-card__desc">${esc(a.description)}</p>
            ${chips ? `<div class="t-card__chips">${chips}</div>` : ""}
            ${a.notes ? `<p class="t-card__note">${esc(a.notes)}</p>` : ""}
          </div>
          ${a.image ? `<div class="t-card__media"><img src="${esc(a.image)}" alt="${esc(a.title)}" loading="lazy" /></div>` : ""}
        </article>
      </div>`;
  }).join("");
}

// ---------- Hotel ----------
function renderHotel() {
  const h = currentPackage().hotel;
  const stars = h.stars ? "★".repeat(h.stars) + "☆".repeat(Math.max(0, 5 - h.stars)) : "";
  $("hotelWrap").innerHTML = `
    <div class="hotel">
      <div class="hotel__media"><img src="${esc(h.image)}" alt="${esc(h.name)}" loading="lazy" /></div>
      <div class="hotel__body">
        ${stars ? `<div class="hotel__stars">${stars}</div>` : ""}
        <h3 class="hotel__name">${esc(h.name)}</h3>
        <p class="hotel__location">📍 ${esc(h.location)}</p>
        <p class="hotel__nights">${esc(h.nights)}</p>
        <p class="hotel__desc">${esc(h.description)}</p>
        <h4 class="hotel__title-sm">Facilities</h4>
        <ul class="facilities">${h.facilities.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      </div>
    </div>`;
}

// ---------- Inclusions ----------
function renderInclusions() {
  const p = currentPackage();
  $("inclWrap").innerHTML = `
    <div class="incl-card incl-card--yes">
      <h3 class="incl-card__title">Included</h3>
      <ul>${p.inclusions.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </div>
    <div class="incl-card incl-card--no">
      <h3 class="incl-card__title">Not Included</h3>
      <ul>${p.exclusions.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </div>`;
}

// ---------- Final summary card ----------
function renderSummary() {
  const p = currentPackage();
  const c = tripData.contact;
  const msg = encodeURIComponent(`Hello, I am interested in ${p.name} (${tripData.destination}).`);
  $("summaryCard").innerHTML = `
    <p class="summary__label">Your Journey</p>
    <h2 class="summary__name">${esc(p.name)}</h2>
    <p class="summary__duration">${esc(tripData.duration)}</p>
    <p class="summary__price">${esc(p.price)}</p>
    <p class="summary__text">${esc(p.summary)}</p>
    <a class="btn btn--light" href="https://wa.me/${esc(c.whatsappNumber)}?text=${msg}" target="_blank" rel="noopener">${esc(c.bookText)}</a>`;
}

// ---------- Footer ----------
function renderFooter() {
  const c = tripData.contact;
  $("footer").innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__brand">${esc(tripData.tripName)}</div>
          <p>${esc(tripData.footerText)}</p>
        </div>
        <div>
          <h4>Navigate</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#itinerary">Itinerary</a></li>
            <li><a href="#accommodation">Accommodation</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#information">Information</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="https://wa.me/${esc(c.whatsappNumber)}" target="_blank" rel="noopener">WhatsApp: ${esc(c.whatsappDisplay)}</a></li>
            <li><a href="https://instagram.com/${esc(c.instagramHandle)}" target="_blank" rel="noopener">Instagram: @${esc(c.instagramHandle)}</a></li>
            <li><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>
          </ul>
        </div>
      </div>
      <p class="footer__bottom">&copy; ${new Date().getFullYear()} ${esc(tripData.tripName)}. All rights reserved.</p>
    </div>`;
}

// ---------- Choosing a package ----------
function selectPackage(index, scrollToItinerary) {
  if (index === currentPackageIndex && !scrollToItinerary) return;
  const changed = index !== currentPackageIndex;
  currentPackageIndex = index;
  currentDayIndex = 0;

  // Update the active states right away
  renderPackageSwitch();
  document.querySelectorAll(".package-card").forEach((card) => {
    card.classList.toggle("is-active", Number(card.dataset.package) === index);
  });

  if (changed) {
    swap("itineraryWrap", () => { renderDayTabs(); renderTimeline(); });
    swap("hotelWrap", renderHotel);
    swap("inclWrap", renderInclusions);
    swap("summaryCard", renderSummary);
  }
  if (scrollToItinerary) {
    $("itinerary").scrollIntoView({ behavior: "smooth" });
  }
}

function selectDay(index) {
  if (index === currentDayIndex) return;
  currentDayIndex = index;
  document.querySelectorAll(".day-tab").forEach((t) => {
    t.classList.toggle("is-active", Number(t.dataset.day) === index);
    t.setAttribute("aria-selected", Number(t.dataset.day) === index);
  });
  swap("itineraryWrap", renderTimeline);
}

// ---------- Lightbox ----------
function openLightbox(i) {
  lightboxIndex = i;
  $("lbImg").src = tripData.gallery[i];
  $("lightbox").classList.add("is-open");
  $("lightbox").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  $("lightbox").classList.remove("is-open");
  $("lightbox").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function stepLightbox(dir) {
  const n = tripData.gallery.length;
  lightboxIndex = (lightboxIndex + dir + n) % n;
  $("lbImg").src = tripData.gallery[lightboxIndex];
}

// ---------- Fade-in on scroll ----------
let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));
}

// ---------- Events ----------
function setupEvents() {
  const navbar = $("navbar");
  const toggle = $("navToggle");
  const links = $("navLinks");

  // Navbar background on scroll
  const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 60);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const setMenu = (open) => {
    links.classList.toggle("is-open", open);
    navbar.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open);
  };
  toggle.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") setMenu(false); });

  // Package cards / switch / day tabs (event delegation)
  $("packageGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-explore]");
    if (btn) { selectPackage(Number(btn.dataset.explore), true); return; }
    const card = e.target.closest(".package-card");
    if (card) selectPackage(Number(card.dataset.package), false);
  });
  $("packageSwitch").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-switch]");
    if (btn) selectPackage(Number(btn.dataset.switch), false);
  });
  $("dayTabs").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-day]");
    if (btn) selectDay(Number(btn.dataset.day));
  });

  // Gallery + lightbox
  $("galleryGrid").addEventListener("click", (e) => {
    const item = e.target.closest(".gallery__item");
    if (item) openLightbox(Number(item.dataset.index));
  });
  $("lbClose").addEventListener("click", closeLightbox);
  $("lbPrev").addEventListener("click", () => stepLightbox(-1));
  $("lbNext").addEventListener("click", () => stepLightbox(1));
  $("lightbox").addEventListener("click", (e) => { if (e.target === $("lightbox")) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!$("lightbox").classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  // Accordion
  $("accordion").addEventListener("click", (e) => {
    const btn = e.target.closest(".acc-btn");
    if (!btn) return;
    const item = btn.parentElement;
    const panel = item.querySelector(".acc-panel");
    const open = item.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open);
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0";
  });
}

// ---------- Start ----------
function init() {
  renderStatic();
  renderPackageCards();
  renderPackageSwitch();
  renderDayTabs();
  renderTimeline();
  renderHotel();
  renderInclusions();
  renderSummary();
  setupEvents();
  observeReveals();
}
document.addEventListener("DOMContentLoaded", init);
