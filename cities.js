// All destinations in The Edit Abroad's library.
// `cover` is the branded product thumbnail; `accent` is the deep cover bg
// color so we can echo each guide's palette in the site.
// `pdf` is the actual sold deliverable (kept here for owner reference only —
// it is never linked publicly on the live site).
// `gumroad` is the Gumroad product URL each city's "Buy" button points at.
//   Paste in your Gumroad product link (e.g. 'https://shanedunn.gumroad.com/l/marrakech').
// `intro` is the brief description shown on the city's product page.
// Add, remove or reorder entries freely — the site reads from this list.

window.TEA_CITIES = [
  { id:'bcn', name:'Barcelona',       short:'Barcelona',       country:'Spain',          coords:'41.4° N · 2.2° E',    season:'Late spring',     tag:'Gothic Quarter · Barceloneta · Gràcia',                 cover:'covers/barcelona.jpg',       pdf:'guides/barcelona.pdf',       gumroad:'',       accent:'#7a2a14', no:'01',
    intro:'A week between the Gothic Quarter and Barceloneta. A capsule wardrobe that carries a long lunch into a Gràcia rooftop dinner without changing — plus the small bookshop, the leather workshop, and the swim before sunset that nobody Instagrams.' },

  { id:'cpt', name:'Cape Town',       short:'Cape Town',       country:'South Africa',   coords:'33.9° S · 18.4° E',   season:'January',         tag:'Camps Bay · Waterfront · Winelands',                    cover:'covers/cape-town.jpg',       pdf:'guides/cape-town.pdf',       gumroad:'',       accent:'#1d3025', no:'02',
    intro:'Three weeks at the bottom of the continent. What to pack for an Atlantic sunrise, dinner in Bo-Kaap, and a winelands afternoon — with the hotel that\'s still under-the-radar and the cellar door that doesn\'t take walk-ins.' },

  { id:'grc', name:'Greece',          short:'Greece',          country:'Greece',         coords:'37.0° N · 25.0° E',   season:'May – early Oct', tag:'Athens · Santorini · Mykonos · Corfu',                  cover:'covers/greece.jpg',          pdf:'guides/greece.pdf',       gumroad:'',          accent:'#0f2a5a', no:'03',
    intro:'A loose island-hop, edited. The packing capsule that survives ferries, sunset dinners and a midnight swim — plus the taverna we still talk about and the small hotel on Folegandros nobody\'s told you about.' },

  { id:'haw', name:'Hawai\u02bbi',    short:'Hawai\u02bbi',    country:'United States',  coords:'21.3° N · 157.8° W',  season:'Year-round',      tag:'O\u02bbahu · Maui · Kona · Kaua\u02bbi',                cover:'covers/hawaii.jpg',          pdf:'guides/hawaii.pdf',       gumroad:'',          accent:'#0f2a35', no:'04',
    intro:'Slow Pacific. What to pack for a windward-side rental, the surf check that actually matters, and the plate lunch that puts everything else to shame. Not the Hawai\u02bbi of the resorts — the one you go back to.' },

  { id:'ibz', name:'Ibiza',           short:'Ibiza',           country:'Spain',          coords:'38.9° N · 1.4° E',    season:'Shoulder season', tag:'Old Town · Las Salinas · Sunset Strip',                 cover:'covers/ibiza.jpg',           pdf:'guides/ibiza.pdf',       gumroad:'',           accent:'#2c1a4a', no:'05',
    intro:'Off-season Ibiza, the one with the cypresses. What to pack for October swims, the salt-flat lunch, the agroturismo in the hills, and the candle-lit dining room nobody books.' },

  { id:'ldn', name:'London',          short:'London',          country:'England',        coords:'51.5° N · 0.1° W',    season:'May & September', tag:'Mayfair · Notting Hill · Shoreditch',                   cover:'covers/london.jpg',          pdf:'guides/london.pdf',       gumroad:'',          accent:'#11182a', no:'06',
    intro:'Mayfair to Notting Hill in a single linen-and-cashmere kit. The tailor that still answers the phone, the hotel bar nobody documents, and what to wear for English weather that never commits.' },

  { id:'mar', name:'Marrakech',       short:'Marrakech',       country:'Morocco',        coords:'31.6° N · 8.0° W',    season:'Early spring',    tag:'Medina · Majorelle · Palmeraie · Souks',                cover:'covers/marrakech.jpg',       pdf:'guides/marrakech.pdf',       gumroad:'',       accent:'#3d1f10', no:'07',
    intro:'Eleven days inside the medina and out. What to pack for the souks, the two riads we\'d actually stay in, the rooftop at golden hour, and the spice merchant we still buy from by post.' },

  { id:'mex', name:'Mexico City',     short:'Mexico City',     country:'Mexico',         coords:'19.4° N · 99.1° W',   season:'October – April', tag:'Condesa · Roma · Polanco · Centro',                     cover:'covers/mexico-city.jpg',     pdf:'guides/mexico-city.pdf',       gumroad:'',     accent:'#241038', no:'08',
    intro:'Ten days across Condesa, Roma and Polanco. Where to eat at 2pm and 10pm, what to bring for the altitude, the gallery that doesn\'t open without an appointment, and the cantina we\'d never share with the internet.' },

  { id:'par', name:'Paris',           short:'Paris',           country:'France',         coords:'48.9° N · 2.3° E',    season:'September',       tag:'Le Marais · Saint-Germain · Montmartre',                cover:'covers/paris.jpg',           pdf:'guides/paris.pdf',       gumroad:'',           accent:'#161a3a', no:'09',
    intro:'Five September days. The hotel bar on rue de Rivoli, the cheese shop in the 6th, what to leave at home and what to buy when you land — for the city that punishes overpacking.' },

  { id:'sof', name:'South of France', short:'South of France', country:'France',         coords:'43.7° N · 7.3° E',    season:'Late spring',     tag:'C\u00f4te d\u2019Azur · Saint-Tropez · Monaco',         cover:'covers/south-of-france.jpg', pdf:'guides/south-of-france.pdf',       gumroad:'', accent:'#13254b', no:'10',
    intro:'Eight days between Saint-Tropez and Menton. The cove only the locals swim from, the breakfast that\'s worth the drive, and a packing list that actually fits in carry-on.' },

  { id:'ita', name:'Southern Italy',  short:'Southern Italy',  country:'Italy',          coords:'40.6° N · 14.5° E',   season:'May / September', tag:'Amalfi · Positano · Sicily · Puglia',                   cover:'covers/southern-italy.jpg',  pdf:'guides/southern-italy.pdf',       gumroad:'',  accent:'#1d2f1d', no:'11',
    intro:'Two weeks down the coast — Positano in May, Puglia in September. What packs flat, what to buy fresh, and the trattorias with no sign on the door.' },

  { id:'syd', name:'Sydney',          short:'Sydney',          country:'Australia',      coords:'33.9° S · 151.2° E',  season:'Southern summer', tag:'Bondi · Harbour · Manly · Paddington',                  cover:'covers/sydney.jpg',          pdf:'guides/sydney.pdf',       gumroad:'',          accent:'#1d3025', no:'12',
    intro:'Two weeks across the harbour. Where the eastern beaches actually breakfast, the dinner spot in Surry Hills, and the ferry route most people miss — with a packing kit that handles wind and water.' },

  { id:'tam', name:'Tamarindo',       short:'Tamarindo',       country:'Costa Rica',     coords:'10.3° N · 85.8° W',   season:'December – April',tag:'Guanacaste · Pacific · Surf · Jungle',                  cover:'covers/tamarindo.jpg',       pdf:'guides/tamarindo.pdf',       gumroad:'',       accent:'#1d3023', no:'13',
    intro:'A loose week on the Pacific. The surf school you\'d send your niece to, the empty beach an hour north, and what to pack for sand, jungle and the long flight home.' },

  { id:'tyo', name:'Tokyo',           short:'Tokyo',           country:'Japan',          coords:'35.7° N · 139.7° E',  season:'Autumn',          tag:'Ginza · Shibuya · Shimokitazawa',                       cover:'covers/tokyo.jpg',           pdf:'guides/tokyo.pdf',       gumroad:'',           accent:'#0e0d18', no:'14',
    intro:'Twelve days, four neighborhoods, one notebook. What to pack for the rainy season, the kissaten that opens at 7am, the standing sushi at midnight, and the bookshop in Jimbocho.' },
];

// quick lookup
window.TEA_CITY_BY_ID = Object.fromEntries(window.TEA_CITIES.map(c => [c.id, c]));
