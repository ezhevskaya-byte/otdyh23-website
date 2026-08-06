/* ═══════════════════════════════════════════════════════════
   OTDYH23 Icons — фирменная SVG-библиотека «Отдых.23»

   Оригинальные минималистичные inline SVG.
   Без emoji, icon fonts и внешних библиотек.

   Стиль: тонкий контур, rounded caps/joins, без заливки.
   viewBox: 0 0 24 24 · stroke: currentColor · width: 1.5
   ═══════════════════════════════════════════════════════════ */

const OTDYH23_ICONS = {
  /* ─── Комната ─── */
  bed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 18V10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"/><path d="M3 14h18"/><path d="M3 18h18"/><path d="M5 8V6.5A1.5 1.5 0 0 1 6.5 5H10"/></svg>',

  mattress: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M6 12h12"/><path d="M7.5 10.2c1.2 1.2 2.8 1.2 4.5 0s3.3-1.2 4.5 0"/></svg>',

  pillow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 9.5c0-1.4 1.3-2.5 2.8-2.5h7.4c1.5 0 2.8 1.1 2.8 2.5v5c0 1.4-1.3 2.5-2.8 2.5H8.3c-1.5 0-2.8-1.1-2.8-2.5v-5z"/><path d="M8 9.5h8"/></svg>',

  linen: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6.5h16v3.2H4z"/><path d="M5 9.7h14v3.2H5z"/><path d="M6 12.9h12V17H6z"/><path d="M8 15.2h8"/></svg>',

  airConditioning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="9.5" rx="1.5"/><path d="M6.5 9.25h11"/><path d="M8 17c1-.7 2-.7 3 0s2 .7 3 0 2-.7 3 0"/><path d="M8 19.75c1-.7 2-.7 3 0s2 .7 3 0 2-.7 3 0"/></svg>',

  smartTv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4" width="19" height="12.5" rx="1.5"/><path d="M8.5 20.5h7"/><path d="M12 16.5v4"/><path d="M10 8.5h4"/></svg>',

  wifi: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 9.2a11 11 0 0 1 15 0"/><path d="M7.5 12.4a6.8 6.8 0 0 1 9 0"/><path d="M10.4 15.5a3 3 0 0 1 3.2 0"/><circle cx="12" cy="18.6" r="1"/></svg>',

  miniFridge: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="1.5"/><path d="M6 11h12"/><path d="M9 6.5v2"/><path d="M9 14v3.5"/></svg>',

  safe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14.5" rx="1.5"/><circle cx="12" cy="12.25" r="3.25"/><path d="M12 12.25v-1.75"/><path d="M6 8h1.75"/></svg>',

  armchairBed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 13.5V9a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v4.5"/><path d="M4.5 13.5h15v3a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-3z"/><path d="M6.5 18.5v2"/><path d="M17.5 18.5v2"/></svg>',

  babyCot: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 18V8"/><path d="M20 18V8"/><path d="M4 8h16"/><path d="M4 18h16"/><path d="M7.5 8v10"/><path d="M12 8v10"/><path d="M16.5 8v10"/><path d="M3 8h2"/><path d="M19 8h2"/></svg>',

  /* ─── Ванная и комплектация ─── */
  shower: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v2.25"/><path d="M7.5 5.25h9"/><path d="M16.5 5.25a4.5 4.5 0 0 1-9 0"/><path d="M9 13.5v1.25"/><path d="M12 12.75v1.75"/><path d="M15 13.5v1.25"/><path d="M10.25 17.25v1"/><path d="M13.75 17.25v1"/></svg>',

  sink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4.5v4"/><path d="M10 4.5h4"/><path d="M3.5 10.5h17"/><path d="M5 10.5c0 4.6 2.6 7.5 7 7.5s7-2.9 7-7.5"/></svg>',

  hygienicShower: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h2.5A2.5 2.5 0 0 1 19 6.5V8"/><path d="M16.5 8c-2.2 0-4 1.7-4 4.2V19"/><path d="M12.5 19H11"/><path d="M9.5 13.5 7 15.5"/><path d="M9.5 16.25 7.25 17.5"/><path d="M10.75 11.5 8.25 12.75"/></svg>',

  hairDryer: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 10a5 5 0 0 1 10 0v1.25H3.5V10z"/><path d="M13.5 8.75h2.75a3 3 0 0 1 3 3v0a2.25 2.25 0 0 1-2.25 2.25H13.5"/><path d="M8.5 11.25V19"/><path d="M6.75 19h3.5"/></svg>',

  towelWarmer: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3.5v17"/><path d="M18 3.5v17"/><path d="M6 7h12"/><path d="M6 11h12"/><path d="M6 15h12"/><path d="M6 19h12"/></svg>',

  towels: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5.5h10.5A2.5 2.5 0 0 1 18 8v1.25H7.5A2.5 2.5 0 0 0 5 11.75"/><path d="M5 12.5h10.5a2.5 2.5 0 0 1 2.5 2.5v1.25H7.5A2.5 2.5 0 0 0 5 18.75"/><path d="M5 5.5v13.25"/></svg>',

  poolTowel: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="7" width="16" height="10" rx="2"/><path d="M8 7v10"/><path d="M4 12h16"/><path d="M11.5 9.5h3"/><path d="M11.5 14.5h3"/></svg>',

  slippers: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 15c0-2.8 2-4.75 5.75-4.75H14c2.8 0 4.5 1.4 4.5 3.75v2.25H3.5V15z"/><path d="M9.5 10.25c.9-1.7 2.2-2.6 4-2.6"/><path d="M6 17.25h10"/></svg>',

  cosmetics: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.5 8h4v12h-4z"/><path d="M8.5 5h2v3h-2z"/><path d="M14.5 12h4v8h-4z"/><path d="M15.5 10h2v2h-2z"/></svg>',

  /* ─── Забота о комфорте ─── */
  pool: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="6.5" width="17" height="11" rx="2"/><path d="M3.5 14c1.2-.8 2.4-.8 3.6 0s2.4.8 3.6 0 2.4-.8 3.6 0 2.4.8 3.6 0"/><path d="M7 6.5V5.25"/><path d="M17 6.5V5.25"/></svg>',

  aroma: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20.5c-3.1 0-5.25-2.35-5.25-5.35C6.75 11.4 12 4.5 12 4.5s5.25 6.9 5.25 10.65c0 3-2.15 5.35-5.25 5.35z"/><path d="M15.75 6.25c.85-.55 1.55-1.45 1.85-2.55"/><path d="M17.85 8.1c.95-.2 1.9-.75 2.55-1.55"/></svg>',

  accessCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/><rect x="5.5" y="10.5" width="13" height="10" rx="1.5"/><circle cx="12" cy="15.25" r="1.25"/><path d="M12 16.5v1.75"/></svg>',

  /* ─── Общие ─── */
  guests: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="2.5"/><path d="M4.5 18.5v-1a4.5 4.5 0 0 1 9 0v1"/><circle cx="16.75" cy="8" r="2"/><path d="M14.25 18.5v-.85a3.4 3.4 0 0 1 5.5-2.65"/></svg>',

  balcony: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5 12 4.5l8 5"/><path d="M6.5 9.75V14"/><path d="M17.5 9.75V14"/><path d="M3.5 14h17"/><path d="M3.5 19h17"/><path d="M5 14v5"/><path d="M9.5 14v5"/><path d="M14.5 14v5"/><path d="M19 14v5"/></svg>',

  floor: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h16"/><path d="M6 20V8.5L12 4.5l6 4V20"/><path d="M6 12.5h12"/><path d="M6 16.25h12"/></svg>',

  privateBathroom: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3.5h9.5A2 2 0 0 1 17.5 5.5v15H6V3.5z"/><path d="M17.5 20.5H5"/><circle cx="13.75" cy="12" r="0.9"/><path d="M9 8.5h3"/></svg>',

  child: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="6.5" r="2.5"/><path d="M8.5 20v-1a3.5 3.5 0 0 1 7 0v1"/><path d="M9.5 12.25 7.75 15"/><path d="M14.5 12.25 16.25 15"/><path d="M10.25 11h3.5"/></svg>',

  accessibility: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="6.75" r="2.25"/><path d="M7.5 19.5v-.75a4.5 4.5 0 0 1 9 0v.75"/><path d="M5.5 12.5c2-1.75 4.1-2.6 6.5-2.6s4.5.85 6.5 2.6"/></svg>',

  /* ─── Терраса для гостей ─── */
  numberedContainer: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="5.5" width="15" height="13" rx="1.5"/><path d="M4.5 10h15"/><path d="M9.5 13.25h5"/><path d="M10.75 15.5h2.5"/></svg>',

  microwave: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="1.5"/><rect x="5" y="8" width="10.5" height="8" rx="1"/><path d="M18.25 9.25v1.5"/><path d="M18.25 13.25v1.5"/><path d="M6.5 18.5v1"/><path d="M17.5 18.5v1"/></svg>',

  thermopot: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 7.5h8v11.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7.5z"/><path d="M9.5 7.5V6a2.5 2.5 0 0 1 5 0v1.5"/><path d="M16 11.5h1.75a1.75 1.75 0 0 1 0 3.5H16"/><path d="M10.5 12.5h3"/></svg>',

  hotColdWater: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 11.5V8.75A2.75 2.75 0 0 1 9.75 6h4.5A2.75 2.75 0 0 1 17 8.75V11.5"/><path d="M5.5 11.5h13v2.25a2 2 0 0 1-2 2H12"/><path d="M12 15.75v2"/><path d="M12 20.5c1.1 0 2-.7 2-1.75S13.1 17 12 17s-2 .7-2 1.75.9 1.75 2 1.75z"/></svg>',

  dishes: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="9" cy="14.5" rx="5.5" ry="3.25"/><path d="M3.5 14.5v1.25c0 1.8 2.5 3.25 5.5 3.25s5.5-1.45 5.5-3.25V14.5"/><path d="M16.25 6.5c1.8 0 3.25 1.7 3.25 4.25S18.05 15 16.25 15"/><path d="M16.25 6.5V15"/><path d="M16.25 8.25c.7.35 1.15 1.2 1.15 2.5"/></svg>',

  ceilingFan: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5v4"/><circle cx="12" cy="11" r="1.75"/><path d="M12 9.25c-2.4-2.1-5.4-2.6-7.5-1.5 1.4 2.4 3.8 3.9 6.4 4"/><path d="M13.6 10.4c2.1-2.4 4.9-3.5 7.15-2.9-1 2.6-3.1 4.5-5.7 5"/><path d="M11.35 12.4c-1.35 2.9-1.2 5.9.2 7.85 2.35-1.7 3.55-4.35 3.2-7.05"/></svg>',

  numberedLocker: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3.5" width="14" height="17" rx="1.5"/><path d="M5 12h14"/><path d="M12 7.25v2"/><path d="M12 14.5v2"/><path d="M9.75 8.75h.01"/><path d="M9.75 16h.01"/></svg>',

  qrCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><path d="M6 6h2v2H6z"/><path d="M16 6h2v2h-2z"/><path d="M6 16h2v2H6z"/><path d="M13.5 13.5h2.5V16"/><path d="M18.5 13.5V16H16"/><path d="M13.5 18.5H16"/><path d="M18.5 18.5H20.5V16.5"/></svg>',

  foodDelivery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 9.5h13l-.8 8.2a2 2 0 0 1-2 1.8H8.3a2 2 0 0 1-2-1.8L5.5 9.5z"/><path d="M9 9.5V7.75A3 3 0 0 1 12 4.75a3 3 0 0 1 3 3V9.5"/><path d="M9.5 13.25h5"/></svg>',

  nearbyPlaces: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20.5s-6.5-5.1-6.5-10A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.5c0 4.9-6.5 10-6.5 10z"/><circle cx="12" cy="10.5" r="2.25"/></svg>',

  activeLeisure: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 19.5h15"/><path d="M7 19.5V12l5-5 5 5v7.5"/><path d="M10 19.5v-4h4v4"/><circle cx="12" cy="4.75" r="1.25"/></svg>',

  stroller: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="19" r="1.75"/><circle cx="16.5" cy="19" r="1.75"/><path d="M4.5 5.5h3.2A6.5 6.5 0 0 1 14.2 12H18"/><path d="M7.7 5.5 9.5 12H16"/><path d="M9.5 12v5.25"/><path d="M16 12v5.25"/></svg>',

  shop: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 9.5 6 5.5h12l1.5 4"/><path d="M4.5 9.5h15v9a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 4.5 18.5v-9z"/><path d="M9.5 18.5v-5h5v5"/></svg>',

  supermarket: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="19.25" r="1.25"/><circle cx="17" cy="19.25" r="1.25"/><path d="M3.5 4.75h2.2l1.6 9.5h10.4l2-6.5H7.2"/><path d="M7.3 14.25h9.4"/></svg>',

  cafe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 4.5v7.5"/><path d="M8 12a4 4 0 0 0 8 0V4.5"/><path d="M16 7.5h1.5A2.5 2.5 0 0 1 20 10v0A2.5 2.5 0 0 1 17.5 12.5H16"/><path d="M7 19.5h10"/><path d="M9.5 16.5h5"/></svg>',

  coffee: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 9.5h9.5v5.5a3.5 3.5 0 0 1-3.5 3.5h-2.5a3.5 3.5 0 0 1-3.5-3.5V9.5z"/><path d="M16 11h1.75A2.25 2.25 0 0 1 20 13.25v0A2.25 2.25 0 0 1 17.75 15.5H16"/><path d="M8 20.5h8"/><path d="M10 4.75c.4.7.4 1.4 0 2.1"/><path d="M12.5 4.25c.4.7.4 1.4 0 2.1"/></svg>',

  market: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 9.5 6.5 5h11l3 4.5"/><path d="M4 9.5h16"/><path d="M5.5 9.5V19h13V9.5"/><path d="M10 19v-5.5h4V19"/></svg>',

  pharmacy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.25"/><path d="M12 7.75v8.5"/><path d="M7.75 12h8.5"/></svg>',

  atm: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="12.5" rx="1.5"/><path d="M7 10.5h10"/><path d="M7 13.25h4"/><path d="M8 20.5h8"/><path d="M12 17v3.5"/></svg>',

  /* ─── До моря ─── */
  walk: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13.25" cy="4.75" r="1.75"/><path d="M9.5 21.25 12 13.5l-2.25-2.5"/><path d="M12 13.5 15.25 21"/><path d="M8.75 11.25 12 13.5l3.5-3.25"/><path d="M14.5 8.75 12 13.5"/></svg>',

  minibus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 12.5h17v4.25a1.75 1.75 0 0 1-1.75 1.75H5.25A1.75 1.75 0 0 1 3.5 16.75V12.5z"/><path d="M4.5 12.5V9.25A2.75 2.75 0 0 1 7.25 6.5h9.5A2.75 2.75 0 0 1 19.5 9.25V12.5"/><path d="M7 9.5h3"/><path d="M12 9.5h3"/><path d="M3.5 15h17"/><circle cx="7.25" cy="18.5" r="1.35"/><circle cx="16.75" cy="18.5" r="1.35"/><path d="M19.5 10.5h1"/></svg>'
};

/**
 * Возвращает SVG-разметку иконки по ключу.
 * @param {string} name — ключ из OTDYH23_ICONS
 * @param {string} [className=''] — CSS-класс для корневого <svg>
 * @returns {string} SVG-строка или '' для неизвестного ключа
 */
function getOtdyh23Icon(name, className = '') {
  const svg = OTDYH23_ICONS[name];
  if (!svg) return '';
  if (!className) return svg;
  const safeClass = String(className).replace(/"/g, '');
  return svg.replace('<svg ', '<svg class="' + safeClass + '" ');
}

window.OTDYH23_ICONS = OTDYH23_ICONS;
window.getOtdyh23Icon = getOtdyh23Icon;
