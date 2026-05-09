// ── Menu Data ──────────────────────────────────────────────────────────────
const MENU = {
  "Starters & Tapas": [
    {n:"Bread & Butter",d:"Freshly baked bread served with butter",p:"£6.50",t:["V"]},
    {n:"Marinated Mixed Olives",d:"Marinated in herbs and extra virgin olive oil",p:"£5.50",t:["V","GF"]},
    {n:"Garlic Bread / Pizza Bread",d:"Toasted garlic bread, plain or with cheese",p:"£7.50",t:["V"]},
    {n:"Cheega Bread",d:"Cheesy garlic bread — a house favourite",p:"£7.95",t:["V"]},
    {n:"Cheega Dough Balls",d:"Soft cheesy garlic dough balls",p:"£7.95",t:["V"]},
    {n:"Calamari",d:"Crispy fried squid rings served with lemon aioli",p:"£8.50",t:["F"]},
    {n:"Meatballs",d:"Homemade beef meatballs in rich tomato sauce",p:"£8.50",t:[]},
    {n:"Chorizo",d:"Pan-fried spicy chorizo with peppers and white wine",p:"£8.50",t:["H","GF"]},
    {n:"Salad Caprese",d:"Buffalo mozzarella, fresh tomato, basil & balsamic",p:"£7.95",t:["V","GF"]},
    {n:"Patatas Bravas",d:"Crispy potatoes with spicy smoky tomato sauce",p:"£7.95",t:["V","GF","H"]},
    {n:"Garlic Mushrooms",d:"Wild mushrooms sautéed in garlic butter & herbs",p:"£7.95",t:["V"]},
    {n:"Bruschetta",d:"Toasted sourdough with fresh tomatoes, basil & olive oil",p:"£8.50",t:["V"]},
    {n:"Fried Halloumi",d:"Golden fried halloumi with sweet chilli dip",p:"£7.95",t:["V","GF"]},
    {n:"King Prawns",d:"Sautéed in garlic butter, chilli and white wine",p:"£8.50",t:["F","GF"]},
    {n:"Chicken Wings",d:"Crispy wings — choose Hot or BBQ sauce",p:"£8.50",t:["H"]},
    {n:"Mozzarella Sticks",d:"Breaded mozzarella sticks with marinara sauce",p:"£7.95",t:["V"]},
    {n:"Jalapeño Poppers",d:"Cream cheese stuffed jalapeños, crispy coated",p:"£7.95",t:["V","H"]},
  ],
  "Pizza": [
    {n:"Margherita",d:"Tomato, fior di latte mozzarella, fresh basil",p:"£11.50",t:["V"]},
    {n:"Pepperoni",d:"Tomato, mozzarella, classic pepperoni",p:"£12.95",t:[]},
    {n:"American Hot",d:"Pepperoni, jalapeños, mozzarella, spicy tomato",p:"£12.95",t:["H"]},
    {n:"Comodor Special",d:"House special with mixed toppings and signature sauce",p:"£12.95",t:[]},
    {n:"Bacon",d:"Crispy smoked bacon, mozzarella, tomato base",p:"£13.50",t:[]},
    {n:"Chicken",d:"Grilled chicken, mozzarella, peppers, tomato",p:"£12.95",t:[]},
    {n:"Meat Feast",d:"Pepperoni, salami, ham, ground beef, mozzarella",p:"£13.50",t:[]},
    {n:"Caterina",d:"Chicken, avocado, mozzarella, tomato sauce",p:"£13.50",t:[]},
    {n:"Giardiniera",d:"Roasted vegetables, mozzarella, tomato base",p:"£13.50",t:["V"]},
    {n:"Hawaiian",d:"Ham, pineapple, mozzarella, tomato sauce",p:"£12.95",t:[]},
    {n:"Quattro Formaggi",d:"Four cheese: mozzarella, gorgonzola, parmesan, brie",p:"£12.95",t:["V"]},
    {n:"Spicy Beef",d:"Seasoned beef, jalapeños, mozzarella, tomato",p:"£12.95",t:["H"]},
    {n:"Siciliano",d:"Anchovies, olives, capers, mozzarella, tomato",p:"£12.95",t:["F"]},
    {n:"Capricciosa",d:"Ham, mushrooms, artichokes, olives, mozzarella",p:"£13.50",t:[]},
    {n:"Spinach",d:"Wilted spinach, garlic, mozzarella, tomato",p:"£13.50",t:["V"]},
    {n:"Chilli",d:"Fresh chillies, mozzarella, tomato — for spice lovers",p:"£12.95",t:["V","H"]},
    {n:"Four Seasons",d:"Ham, mushroom, artichoke, peppers — four quarters",p:"£13.50",t:[]},
    {n:"African Neptune",d:"Spiced seafood toppings, peppers, mozzarella, tomato",p:"£13.50",t:["F"]},
    {n:"Seafood Pizza",d:"King prawns, calamari, mussels, tomato, mozzarella",p:"£13.50",t:["F"]},
    {n:"Vegetarian Pizza",d:"Seasonal vegetables, mozzarella, tomato base",p:"£12.95",t:["V"]},
  ],
  "Pasta": [
    {n:"Spaghetti Bolognese",d:"Slow-cooked beef & pork ragu with parmesan",p:"£13.95",t:[]},
    {n:"Spaghetti Meatballs",d:"Homemade meatballs in San Marzano tomato sauce",p:"£14.95",t:[]},
    {n:"Spaghetti Carbonara",d:"Guanciale, egg yolk, pecorino romano, black pepper",p:"£14.95",t:[]},
    {n:"Di Pollo",d:"Grilled chicken, cream sauce, mushrooms, parmesan",p:"£14.95",t:[]},
    {n:"Di Jambon",d:"Ham, cream, mushrooms, parmesan — classic comfort",p:"£14.95",t:[]},
    {n:"Penne Pancetta",d:"Crispy pancetta, cherry tomatoes, cream, basil",p:"£15.25",t:[]},
    {n:"Pescare",d:"Mixed seafood in white wine & cherry tomato sauce",p:"£15.25",t:["F"]},
    {n:"Quattro Formaggi",d:"Four cheese pasta sauce — rich and indulgent",p:"£14.95",t:["V"]},
    {n:"Lasagna Bolognese",d:"Classic layers of pasta, ragu and béchamel",p:"£14.50",t:[]},
    {n:"Vegetarian Pasta",d:"Seasonal vegetables, tomato or cream sauce, herbs",p:"£14.50",t:["V"]},
    {n:"Vegetarian Cannelloni",d:"Spinach & ricotta filled cannelloni with tomato sauce",p:"£15.25",t:["V"]},
  ],
  "Special Dishes": [
    {n:"Calzone",d:"Folded pizza with ham, mozzarella and tomato",p:"£13.95",t:[]},
    {n:"Sea Calzone",d:"Folded pizza with mixed seafood and mozzarella",p:"£14.95",t:["F"]},
    {n:"Vegetarian Calzone",d:"Folded pizza with roasted vegetables and cheese",p:"£13.50",t:["V"]},
    {n:"Comodor Chicken",d:"Pan-fried chicken in a signature house sauce",p:"£15.95",t:["GF"]},
    {n:"Chilli Con Carne",d:"Rich beef chilli with rice and sour cream",p:"£15.95",t:["H","GF"]},
    {n:"Beef & Mushroom",d:"Tender beef strips with wild mushrooms in a rich sauce",p:"£15.95",t:["GF"]},
    {n:"Paella",d:"Saffron rice with chicken, chorizo and king prawns",p:"£15.95",t:["F","GF"]},
    {n:"Vegetable Paella",d:"Saffron rice with seasonal roasted vegetables",p:"£14.95",t:["V","GF"]},
    {n:"Roast Salmon",d:"Oven-roasted salmon fillet with seasonal vegetables",p:"£15.95",t:["F","GF"]},
    {n:"Roasted Sea Bass",d:"Whole sea bass with lemon, capers & fresh herbs",p:"£16.95",t:["F","GF"]},
  ],
  "Salads": [
    {n:"Comodor Salad",d:"House special salad with mixed leaves and toppings",p:"£14.95",t:["GF"]},
    {n:"Niçoise",d:"Tuna, green beans, boiled egg, olives, anchovies",p:"£15.95",t:["F","GF"]},
    {n:"Grilled Chicken Salad",d:"Grilled chicken, mixed leaves, cherry tomatoes, dressing",p:"£13.95",t:["GF"]},
    {n:"Pescare Salad",d:"Mixed seafood on a bed of leaves with citrus dressing",p:"£15.95",t:["F","GF"]},
    {n:"Mozzarella Tomato",d:"Buffalo mozzarella, heirloom tomatoes, basil, balsamic",p:"£14.95",t:["V","GF"]},
    {n:"Mixed Side Salad",d:"Fresh mixed leaf salad with house dressing",p:"£6.50",t:["V","GF"]},
    {n:"Tomato Side Salad",d:"Sliced tomatoes with basil and olive oil",p:"£6.50",t:["V","GF"]},
  ],
  "Steak & Burgers": [
    {n:"Sirloin Steak",d:"28-day aged sirloin with chips, mushroom, tomato & sauce",p:"£19.95",t:["GF"]},
    {n:"Grilled Chicken Steak",d:"Grilled chicken breast with seasonal vegetables & sauce",p:"£15.95",t:["GF"]},
    {n:"Beef Burger",d:"6oz beef patty, smoked cheese, lettuce, tomato, house sauce",p:"£13.95",t:[]},
    {n:"Grilled Chicken Burger",d:"Grilled chicken, lettuce, tomato, mayo in a brioche bun",p:"£13.95",t:[]},
    {n:"Southern Fried Chicken Burger",d:"Crispy fried chicken, slaw, pickle, sriracha mayo",p:"£13.95",t:[]},
    {n:"Chicken Strips & Chips",d:"Crispy seasoned strips with chips and dipping sauce",p:"£12.95",t:[]},
  ],
  "Cocktails": [
    {n:"Aperol Spritz",d:"Aperol, Prosecco, soda",p:"£9.25",t:["V"]},
    {n:"Passionfruit Martini",d:"Vodka, Passoã, pineapple juice, passionfruit juice, lime",p:"£9.25",t:["V"]},
    {n:"Espresso Martini",d:"Vodka, Kahlúa, espresso",p:"£9.25",t:["V"]},
    {n:"Sex on the Beach",d:"Vodka, peach schnapps, cranberry juice, orange juice",p:"£8.95",t:["V"]},
    {n:"Piña Colada",d:"White rum, pineapple juice, coconut, cream",p:"£8.95",t:["V"]},
    {n:"Blue Lagoon",d:"White rum, Malibu, blue curaçao, lemonade",p:"£8.95",t:["V"]},
    {n:"Alabama Slammer",d:"Vodka, Southern Comfort, amaretto, orange juice",p:"£8.95",t:[]},
    {n:"Tequila Sunrise",d:"Tequila, triple sec, grenadine, orange juice",p:"£8.95",t:["V"]},
    {n:"Screaming Orgasm",d:"Vodka, Kahlúa, amaretto, Baileys, cream, milk",p:"£8.95",t:[]},
    {n:"Antifreeze Martini",d:"Vodka, martini, midori, blue curaçao, pineapple juice",p:"£8.95",t:["V"]},
    {n:"Black Russian",d:"Vodka, Tia Maria, coke",p:"£8.95",t:["V"]},
  ],
  "Mocktails": [
    {n:"Virgin Colada",d:"Coconut cream, pineapple juice, cream — alcohol-free",p:"£6.50",t:["V"]},
    {n:"Sophie",d:"House mocktail — refreshing and fruity",p:"£6.50",t:["V"]},
    {n:"Cinderella",d:"House mocktail — light and zesty",p:"£6.50",t:["V"]},
  ],
  "Wine": [
    {n:"House Dry White",d:"Crisp and clean house white wine",p:"£6.95 / £7.95 / £18.95",t:["V"]},
    {n:"Pinot Grigio",d:"Light, dry Italian white",p:"£6.95 / £7.95 / £21.95",t:["V"]},
    {n:"Sauvignon Blanc",d:"Fresh, zesty New Zealand style",p:"£6.95 / £7.95 / £20.95",t:["V"]},
    {n:"Chardonnay",d:"Full-bodied oaked white",p:"£6.95 / £7.95 / £20.95",t:["V"]},
    {n:"Pinot Grigio Blush",d:"Delicate pink with fruity notes",p:"£6.95 / £7.95 / £21.95",t:["V"]},
    {n:"White Zinfandel Rosé",d:"Off-dry, fruity California rosé",p:"£6.95 / £7.95 / £20.95",t:["V"]},
    {n:"House Red",d:"Smooth and easy-drinking house red",p:"£6.95 / £7.95 / £18.95",t:["V"]},
    {n:"Merlot",d:"Soft, plummy Italian red",p:"£6.95 / £7.95 / £21.95",t:["V"]},
    {n:"Cabernet Sauvignon",d:"Full-bodied classic red",p:"£19.95",t:["V"]},
    {n:"Rioja",d:"Spanish oak-aged red, rich and spicy",p:"£22.95",t:["V"]},
    {n:"Montepulciano d'Abruzzo",d:"Deep Italian red with dark fruit",p:"£23.95",t:["V"]},
    {n:"Prosecco",d:"Light Italian sparkling — glass or bottle",p:"£8.95 / £26.00",t:["V"]},
    {n:"Rosé Prosecco",d:"Delicate Italian sparkling rosé — bottle",p:"£28.00",t:["V"]},
    {n:"Brut Champagne",d:"Classic celebration champagne",p:"£42.00",t:["V"]},
  ],
  "Beers & Ciders": [
    {n:"Peroni",d:"Premium Italian lager",p:"£4.95",t:["V"]},
    {n:"Budweiser",d:"Classic American lager",p:"£4.95",t:["V"]},
    {n:"San Miguel",d:"Spanish lager",p:"£4.95",t:["V"]},
    {n:"Stella Artois",d:"Belgian lager",p:"£4.95",t:["V"]},
    {n:"Becks",d:"German lager",p:"£4.95",t:["V"]},
    {n:"London Pride",d:"Fuller's classic English bitter",p:"£6.50",t:[]},
    {n:"Magners",d:"Refreshing Irish cider",p:"£6.50",t:["V"]},
    {n:"Kopparberg Strawberry & Lime",d:"Swedish fruit cider",p:"£6.50",t:["V"]},
    {n:"Old Mout Berries & Cherries",d:"New Zealand fruit cider",p:"£6.50",t:["V"]},
    {n:"Heineken 0.0%",d:"Alcohol-free lager",p:"£4.20",t:["V"]},
  ],
  "Spirits & Shooters": [
    {n:"Vodka / Gin / Whiskey / Brandy",d:"Premium spirits with your choice of mixer",p:"£5.50",t:[]},
    {n:"Rum / Tequila / Sambuca / Limoncello",d:"Classic spirits served straight or mixed",p:"£4.95",t:[]},
    {n:"Mixers",d:"Tonic, lemonade, Coke, soda",p:"£1.00",t:["V"]},
    {n:"Baby Guinness",d:"Kahlúa topped with Baileys — a classic shooter",p:"£5.95",t:[]},
    {n:"Jägerbomb",d:"Jägermeister dropped in Red Bull",p:"£5.95",t:[]},
    {n:"Slippery Nipple",d:"Sambuca and Baileys layered shooter",p:"£5.95",t:[]},
  ],
  "Soft Drinks": [
    {n:"Water (Still / Sparkling)",d:"Chilled still or sparkling water",p:"£2.50",t:["V"]},
    {n:"Coke / Diet Coke / Sprite / Fanta",d:"Classic soft drinks",p:"£3.10",t:["V"]},
    {n:"Appletiser",d:"Sparkling apple juice",p:"£3.10",t:["V"]},
    {n:"J2O",d:"Assorted fruit juice blends",p:"£3.10",t:["V"]},
    {n:"Tonic / Soda Water",d:"Fever-Tree or house tonic / soda",p:"£2.90",t:["V"]},
    {n:"Juice",d:"Orange, apple or cranberry",p:"£2.90",t:["V"]},
    {n:"Red Bull",d:"Energy drink, can",p:"£3.10",t:["V"]},
    {n:"Squash",d:"Diluted fruit squash",p:"£2.00",t:["V"]},
    {n:"Milk",d:"Cold whole or semi-skimmed milk",p:"£2.00",t:["V"]},
  ],
  "Hot Drinks": [
    {n:"Tea",d:"English breakfast tea",p:"£1.90",t:["V"]},
    {n:"Latte",d:"Espresso with steamed milk",p:"£2.95",t:[]},
    {n:"Cappuccino",d:"Espresso, steamed milk and foam",p:"£2.40",t:[]},
    {n:"Black Coffee",d:"Freshly brewed Americano",p:"£2.40",t:["V"]},
    {n:"White Coffee",d:"Americano with a splash of milk",p:"£2.40",t:[]},
    {n:"Espresso",d:"Single or double shot",p:"£1.90 / £2.40",t:["V"]},
    {n:"Floater Coffee",d:"Black coffee with a float of cream",p:"£2.95",t:[]},
    {n:"Liqueur Coffee",d:"Coffee with your choice of spirit",p:"£5.95",t:[]},
    {n:"Hot Chocolate",d:"Rich creamy hot chocolate",p:"£2.95",t:["V"]},
  ],
  "Desserts": [
    {n:"Chocolate Brownie",d:"Warm gooey brownie with vanilla ice cream",p:"£6.95",t:[]},
    {n:"Trillionaires Tart",d:"Chocolate pastry, toffee sauce & chocolate ganache",p:"£6.95",t:[]},
    {n:"Cheesecake",d:"Smooth creamy cheesecake with cream or ice cream",p:"£6.95",t:[]},
    {n:"Tiramisu",d:"Espresso-soaked sponge, mascarpone cream, cocoa dusting",p:"£6.95",t:[]},
    {n:"Sticky Toffee Pudding",d:"Classic pudding with toffee sauce, cream, ice cream or custard",p:"£6.95",t:[]},
    {n:"Chocolate Fudge Cake",d:"Moist chocolate sponge with fudge filling & coating",p:"£6.95",t:[]},
    {n:"Belgian Waffle",d:"Warm waffle with ice cream and choice of sauce",p:"£6.95",t:[]},
    {n:"Ice Cream Selection",d:"Choice of flavours — ask your server",p:"£6.95",t:["GF"]},
  ],
};

const REVIEWS = [
  {name:"Sarah M.",loc:"Byfleet, Surrey",rating:5,text:"Absolutely stunning food and atmosphere. The pasta is the best I've had outside of Italy — totally authentic. We come here for every special occasion!",date:"March 2025"},
  {name:"James & Lucy T.",loc:"Woking",rating:5,text:"We hosted our anniversary dinner at The Comodor and it was flawless. The team went above and beyond — service was impeccable.",date:"February 2025"},
  {name:"David R.",loc:"Weybridge",rating:5,text:"Found this gem by chance and now it's our go-to. The sirloin steak is cooked to perfection every time. Highly recommend the tiramisu!",date:"April 2025"},
  {name:"Priya K.",loc:"Guildford",rating:5,text:"Fantastic vegan options — I'm often limited at Italian restaurants but here the menu is thoughtful and delicious. Staff are incredibly warm.",date:"January 2025"},
];

const FAQS = [
  {q:"Where are you located?",a:"We are at 2-4 Cobb House, Oyster Lane, Byfleet, KT14 7DU. Free street parking is available nearby on Oyster Lane and surrounding roads."},
  {q:"How do I book a table?",a:"Use the 'Book a Table' form on this page or call us on 01932 354 888. We'll confirm your booking shortly."},
  {q:"Do you offer takeaway and delivery?",a:"Yes! Call us on 01932 354 888 or use the WhatsApp button to place your order. We offer both takeaway and local delivery."},
  {q:"Are you dog friendly?",a:"We love dogs but unfortunately they are not permitted inside. They are welcome on our outdoor terrace area."},
  {q:"Do you have highchairs and baby change?",a:"Yes, we have highchairs and a baby changing facility available for families dining with us."},
  {q:"What payment methods do you accept?",a:"We accept cash and most major credit/debit cards. Please note we do not accept American Express."},
  {q:"Do you cater for private events and parties?",a:"Absolutely! We've hosted many private parties and celebrations. Call 01932 354 888 to discuss your requirements and get a personalised quote."},
  {q:"Do you have vegan and gluten-free options?",a:"Yes, we offer vegan and gluten-free options across our menu. Please speak to your server and inform them of any dietary requirements or allergies."},
  {q:"Is there parking nearby?",a:"Yes, free street parking is available on Oyster Lane and nearby roads. The restaurant is easily accessible by car."},
];

// ── Tag rendering ──────────────────────────────────────────────────────────
const TAG_MAP = {
  V:{cls:"tag-vegan",icon:"🌱",label:"Vegan"},
  GF:{cls:"tag-gf",icon:"🌾",label:"GF"},
  H:{cls:"tag-hot",icon:"🌶️",label:"Hot"},
  F:{cls:"tag-fish",icon:"🐟",label:"Fish"},
  N:{cls:"tag-nuts",icon:"🥜",label:"Nuts"},
};
function tagHTML(tags){
  return tags.map(t=>{const m=TAG_MAP[t];return m?`<span class="diet-tag ${m.cls}">${m.icon} ${m.label}</span>`:''}).join('');
}

// ── Menu rendering ─────────────────────────────────────────────────────────
const categories = Object.keys(MENU);
let activeCategory = categories[0];

function renderTabs(){
  const el=document.getElementById('menu-tabs');
  el.innerHTML=categories.map(c=>`
    <button class="menu-tab-btn${c===activeCategory?' active':''}" onclick="switchTab('${c.replace(/'/g,"\\'")}')">
      ${c}
    </button>`).join('');
}

function renderGrid(){
  const el=document.getElementById('menu-grid');
  const items=MENU[activeCategory]||[];
  el.innerHTML=items.map(item=>`
    <div class="menu-card fade-up">
      <div class="flex justify-between items-start mb-2">
        <h3 class="font-serif text-lg font-semibold text-white leading-snug pr-3">${item.n}</h3>
        <span class="text-gold font-bold text-base whitespace-nowrap">${item.p}</span>
      </div>
      <p class="text-white/55 text-sm leading-relaxed mb-3">${item.d}</p>
      <div class="flex flex-wrap gap-1">${tagHTML(item.t)}</div>
    </div>`).join('');
}

function switchTab(cat){
  activeCategory=cat;
  renderTabs();
  renderGrid();
}

// ── Reviews ────────────────────────────────────────────────────────────────
function renderReviews(){
  const el=document.getElementById('reviews-grid');
  el.innerHTML=REVIEWS.map(r=>`
    <div class="review-card">
      <div class="flex mb-3">${'★'.repeat(r.rating)}<span class="text-gold"></span></div>
      <p class="text-white/70 text-sm leading-relaxed mb-4 italic">"${r.text}"</p>
      <div class="flex items-center gap-3 mt-auto">
        <div class="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">${r.name[0]}</div>
        <div>
          <div class="text-white font-semibold text-sm">${r.name}</div>
          <div class="text-white/40 text-xs">${r.loc} · ${r.date}</div>
        </div>
      </div>
    </div>`).join('');
  document.querySelectorAll('.review-card .flex').forEach(el=>{el.style.color='#C9A84C'});
}

// ── FAQ ────────────────────────────────────────────────────────────────────
function renderFAQ(){
  const el=document.getElementById('faq-list');
  el.innerHTML=FAQS.map((f,i)=>`
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <i class="fas fa-plus faq-icon"></i>
      </button>
      <div class="faq-a" id="faq-a-${i}">
        <p class="text-white/65 text-sm leading-relaxed">${f.a}</p>
      </div>
    </div>`).join('');
}

function toggleFAQ(i){
  const item=document.getElementById(`faq-${i}`);
  const ans=document.getElementById(`faq-a-${i}`);
  const isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el=>el.classList.remove('open'));
  document.querySelectorAll('.faq-a').forEach(el=>el.classList.remove('open'));
  if(!isOpen){item.classList.add('open');ans.classList.add('open');}
}

// ── Booking form ───────────────────────────────────────────────────────────
function initBooking(){
  const form=document.getElementById('booking-form');
  const success=document.getElementById('booking-success');
  const dateEl=document.getElementById('b-date');
  if(dateEl){
    const today=new Date();
    dateEl.min=today.toISOString().split('T')[0];
  }
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data={
      name:document.getElementById('b-name').value,
      email:document.getElementById('b-email').value,
      phone:document.getElementById('b-phone').value,
      guests:document.getElementById('b-guests').value,
      date:document.getElementById('b-date').value,
      time:document.getElementById('b-time').value,
      notes:document.getElementById('b-notes').value,
    };
    console.log('Booking request:',data);
    form.style.display='none';
    success.classList.remove('hidden');
  });
}

// ── Navbar scroll & Mobile menu ────────────────────────────────────────────
function initNavbar(){
  const nav        = document.getElementById('navbar');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('menu-toggle');
  const menuIcon   = menuToggle.querySelector('i');

  // ── Scroll: add/remove scrolled class ──
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── Helper: open / close menu ──
  function openMenu() {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuIcon.className = 'fas fa-times text-xl';
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuIcon.className = 'fas fa-bars text-xl';
    document.body.style.overflow = '';
  }

  // ── Toggle on hamburger click ──
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  // ── Close when any nav link is clicked ──
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // ── Close on outside tap (touch & mouse) ──
  document.addEventListener('click', (e) => {
    if (
      mobileMenu.classList.contains('is-open') &&
      !mobileMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // ── Close on Escape key ──
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });

  // ── Close if viewport resizes to desktop ──
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMenu();
  }, { passive: true });

  // ── Responsive gallery columns ──
  function setGalleryCols() {
    const g = document.querySelector('.gallery-grid');
    if (!g) return;
    g.style.gridTemplateColumns =
      window.innerWidth >= 1024 ? 'repeat(3,1fr)' : 'repeat(2,1fr)';
  }
  setGalleryCols();
  window.addEventListener('resize', setGalleryCols, { passive: true });
}

// ── Active nav link on scroll ──────────────────────────────────────────────
function initScrollSpy(){
  const sections=['about','menu','gallery','reviews','faq','contact'];
  const links=document.querySelectorAll('.nav-link');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        links.forEach(l=>{
          l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id);
        });
      }
    });
  },{rootMargin:'-40% 0px -40% 0px'});
  sections.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el);});
}

// ── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  renderTabs();
  renderGrid();
  renderReviews();
  renderFAQ();
  initBooking();
  initNavbar();
  initScrollSpy();
});
