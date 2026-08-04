/* ─── Шапка: эффект при прокрутке ─── */
const header = document.getElementById('header');
const scrollProgress = document.getElementById('scrollProgress');
const backTop = document.getElementById('backTop');

function onScroll() {
  const scrolled = scrollY > 30;
  header.classList.toggle('scrolled', scrolled);
  backTop.classList.toggle('visible', scrollY > 600);

  const docH = document.documentElement.scrollHeight - innerHeight;
  scrollProgress.style.width = docH > 0 ? (scrollY / docH * 100) + '%' : '0';
}
onScroll();
addEventListener('scroll', onScroll, { passive: true });

/* ─── Мобильное меню ─── */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.textContent = open ? '×' : '☰';
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.textContent = '☰';
    burger.setAttribute('aria-expanded', 'false');
  });
});

/* ─── Подсветка активного пункта меню при скролле ─── */
const sections = [...document.querySelectorAll('section[id], main[id]')];
const navLinks = [...nav.querySelectorAll('a')];

function highlightNav() {
  const pos = scrollY + 120;
  let current = '';
  sections.forEach(sec => {
    if (sec.offsetTop <= pos) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

/* ─── Анимация появления блоков ─── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── Карточки сценариев: клик / Enter → прокрутка к комнатам ─── */
document.querySelectorAll('.scenario[data-scroll-to]').forEach(card => {
  const go = () => {
    const target = document.querySelector(card.dataset.scrollTo);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };
  card.addEventListener('click', go);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
  });
});

/* ─── Галерея сайта: лайтбокс ─── */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
let lastFocus = null;
let lightboxKeepOverflow = false;

function openLightbox(src, caption, alt, opts = {}) {
  lastFocus = document.activeElement;
  lightboxKeepOverflow = !!opts.keepOverflow;
  lightbox.classList.toggle('over-modal', !!opts.overModal);
  lightboxImg.src = src;
  lightboxImg.alt = alt || caption || '';
  lightboxCaption.textContent = caption || '';
  lightbox.hidden = false;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open', 'over-modal');
  lightbox.hidden = true;
  lightboxImg.src = '';
  if (!lightboxKeepOverflow) document.body.style.overflow = '';
  lightboxKeepOverflow = false;
  if (lastFocus) lastFocus.focus();
}

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    openLightbox(item.dataset.src, item.dataset.caption, item.querySelector('img')?.alt);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

const roomViewer = document.getElementById('roomViewer');
const roomViewerClose = document.getElementById('roomViewerClose');
const roomViewerEyebrow = document.getElementById('roomViewerEyebrow');
const roomViewerTitle = document.getElementById('roomViewerTitle');
const roomViewerTabs = document.getElementById('roomViewerTabs');
const roomViewerPanels = document.getElementById('roomViewerPanels');
let roomViewerLastFocus = null;
let roomViewerTabsList = [];

function goToBooking(e) {
  if (e) e.preventDefault();
  const booking = document.getElementById('booking');
  const finish = () => {
    if (booking) booking.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  if (roomViewer.classList.contains('open')) {
    closeRoomViewer();
    setTimeout(finish, 320);
  } else {
    finish();
  }
}

function buildGallery(photos) {
  const list = Array.isArray(photos) ? photos.filter(p => p && p.src) : [];
  const wrap = document.createElement('div');
  wrap.className = 'room-gallery';
  if (!list.length) return wrap;

  const first = list[0];
  const mainBtn = document.createElement('button');
  mainBtn.type = 'button';
  mainBtn.className = 'room-gallery-main';
  mainBtn.setAttribute('aria-label', 'Открыть фотографию на весь экран');
  const mainImg = document.createElement('img');
  mainImg.src = first.src;
  mainImg.alt = first.alt || '';
  mainImg.loading = 'lazy';
  mainBtn.appendChild(mainImg);

  const thumbs = document.createElement('div');
  thumbs.className = 'room-gallery-thumbs';
  thumbs.hidden = list.length < 2;

  const setActive = (photo, thumbEl) => {
    mainImg.src = photo.src;
    mainImg.alt = photo.alt || '';
    mainBtn.dataset.caption = photo.caption || '';
    thumbs.querySelectorAll('.room-gallery-thumb').forEach(t => t.classList.remove('is-active'));
    if (thumbEl) thumbEl.classList.add('is-active');
  };

  mainBtn.dataset.caption = first.caption || '';
  mainBtn.addEventListener('click', () => {
    openLightbox(mainImg.src, mainBtn.dataset.caption, mainImg.alt, {
      overModal: true,
      keepOverflow: true
    });
  });

  list.forEach((photo, i) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'room-gallery-thumb' + (i === 0 ? ' is-active' : '');
    thumb.setAttribute('aria-label', photo.caption || photo.alt || ('Фото ' + (i + 1)));
    const timg = document.createElement('img');
    timg.src = photo.src;
    timg.alt = '';
    timg.loading = 'lazy';
    thumb.appendChild(timg);
    thumb.addEventListener('click', () => setActive(photo, thumb));
    thumbs.appendChild(thumb);
  });

  wrap.appendChild(mainBtn);
  wrap.appendChild(thumbs);
  return wrap;
}

function activateRoomTab(tab) {
  const tabs = roomViewerTabsList;
  tabs.forEach(btn => {
    const on = btn === tab;
    btn.setAttribute('aria-selected', on ? 'true' : 'false');
    btn.tabIndex = on ? 0 : -1;
  });
  roomViewerPanels.querySelectorAll('.comfort-panel').forEach(panel => {
    const on = panel.id === tab.getAttribute('aria-controls');
    panel.classList.toggle('active', on);
    panel.hidden = !on;
  });
}

function renderRoomViewer(roomId) {
  const room = ROOM_CATALOG[roomId];
  if (!room) return;

  roomViewerEyebrow.textContent = room.eyebrow || '';
  roomViewerTitle.textContent = room.title || 'Варианты размещения';
  roomViewerTabs.innerHTML = '';
  roomViewerPanels.innerHTML = '';
  roomViewerTabsList = [];

  const scenarios = room.scenarios || [];
  roomViewerTabs.hidden = scenarios.length < 2;

  scenarios.forEach((scenario, index) => {
    const tabId = 'roomTab-' + scenario.id;
    const panelId = 'roomPanel-' + scenario.id;

    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'comfort-tab';
    tab.id = tabId;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panelId);
    tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    tab.tabIndex = index === 0 ? 0 : -1;
    tab.textContent = scenario.title || scenario.id;
    tab.addEventListener('click', () => activateRoomTab(tab));
    tab.addEventListener('keydown', e => {
      const i = roomViewerTabsList.indexOf(tab);
      let next = -1;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % roomViewerTabsList.length;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + roomViewerTabsList.length) % roomViewerTabsList.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = roomViewerTabsList.length - 1;
      if (next >= 0) {
        e.preventDefault();
        roomViewerTabsList[next].focus();
        activateRoomTab(roomViewerTabsList[next]);
      }
    });
    roomViewerTabs.appendChild(tab);
    roomViewerTabsList.push(tab);

    const panel = document.createElement('div');
    panel.className = 'comfort-panel' + (index === 0 ? ' active' : '');
    panel.id = panelId;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabId);
    panel.hidden = index !== 0;

    const copy = document.createElement('div');
    copy.className = 'comfort-panel-copy';

    if (scenario.title) {
      const titleEl = document.createElement('h4');
      titleEl.className = 'scenario-title';
      titleEl.textContent = scenario.title;
      copy.appendChild(titleEl);
    }
    // У категории «Комфорт» subtitle и meta guests/sleeping убраны — их заменяют фирменные бейджи
    if (scenario.subtitle && roomId !== 'comfort') {
      const subtitleEl = document.createElement('p');
      subtitleEl.className = 'scenario-subtitle';
      subtitleEl.textContent = scenario.subtitle;
      copy.appendChild(subtitleEl);
    }

    const metaBits = roomId === 'comfort'
      ? []
      : [scenario.guests, scenario.sleeping].filter(Boolean);
    if (metaBits.length) {
      const meta = document.createElement('div');
      meta.className = 'meta';
      metaBits.forEach(text => {
        const pill = document.createElement('span');
        pill.className = 'pill';
        pill.textContent = text;
        meta.appendChild(pill);
      });
      copy.appendChild(meta);
    }

    if (scenario.description) {
      const desc = document.createElement('p');
      desc.className = 'scenario-intro';
      desc.textContent = scenario.description;
      copy.appendChild(desc);
    }

    // Бейджи удобств: сразу после вступления, перед кнопкой «Проверить даты»
    const amenitiesHtml = renderAmenityGroups(scenario.amenityGroups);
    if (amenitiesHtml) {
      copy.insertAdjacentHTML('beforeend', amenitiesHtml);
    }

    const book = document.createElement('a');
    book.className = 'btn solid';
    book.href = '#booking';
    book.setAttribute('data-go-booking', '');
    book.textContent = scenario.buttonText || 'Проверить даты';
    copy.appendChild(book);

    panel.appendChild(buildGallery(scenario.photos));
    panel.appendChild(copy);
    roomViewerPanels.appendChild(panel);
  });
}

function openRoomViewer(roomId) {
  if (!ROOM_CATALOG[roomId]) return;
  roomViewerLastFocus = document.activeElement;
  renderRoomViewer(roomId);
  roomViewer.hidden = false;
  roomViewer.classList.add('open');
  document.body.style.overflow = 'hidden';
  roomViewerClose.focus();
}

function closeRoomViewer() {
  if (lightbox.classList.contains('open')) closeLightbox();
  roomViewer.classList.remove('open');
  roomViewer.hidden = true;
  document.body.style.overflow = '';
  if (roomViewerLastFocus) roomViewerLastFocus.focus();
}

/* ─── Карточки комнат из ROOM_CATALOG ─── */
function renderRooms() {
  const list = document.getElementById('roomsList');
  if (!list || typeof ROOM_CATALOG !== 'object') return;
  list.innerHTML = '';

  Object.keys(ROOM_CATALOG).forEach(roomId => {
    const room = ROOM_CATALOG[roomId];
    if (!room) return;

    const article = document.createElement('article');
    article.className = 'room reveal';
    article.dataset.roomId = roomId;

    const photo = document.createElement('div');
    photo.className = 'room-photo';
    photo.setAttribute('data-open-room', roomId);
    photo.title = 'Смотреть фотографии';

    const img = document.createElement('img');
    img.src = (room.photo && room.photo.src) || '';
    img.alt = (room.photo && room.photo.alt) || room.name || '';
    img.loading = 'lazy';
    photo.appendChild(img);

    if (room.label) {
      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = room.label;
      photo.appendChild(label);
    }

    const copy = document.createElement('div');
    copy.className = 'room-copy';

    if (room.eyebrow) {
      const eyebrow = document.createElement('p');
      eyebrow.className = 'eyebrow';
      eyebrow.textContent = room.eyebrow;
      copy.appendChild(eyebrow);
    }

    const title = document.createElement('h3');
    title.textContent = room.name || roomId;
    copy.appendChild(title);

    if (Array.isArray(room.pills) && room.pills.length) {
      const meta = document.createElement('div');
      meta.className = 'meta';
      room.pills.forEach(text => {
        const pill = document.createElement('span');
        pill.className = 'pill';
        pill.textContent = text;
        meta.appendChild(pill);
      });
      copy.appendChild(meta);
    }

    if (room.descriptionTitle) {
      const descTitle = document.createElement('h4');
      descTitle.className = 'room-description-title';
      descTitle.textContent = room.descriptionTitle;
      copy.appendChild(descTitle);
    }

    if (room.descriptionFull) {
      String(room.descriptionFull).split(/\n\s*\n/).forEach(part => {
        const text = part.trim();
        if (!text) return;
        const desc = document.createElement('p');
        desc.className = 'room-description-text';
        desc.textContent = text;
        copy.appendChild(desc);
      });
    } else if (room.shortDescription) {
      const desc = document.createElement('p');
      desc.textContent = room.shortDescription;
      copy.appendChild(desc);
    }

    if (Array.isArray(room.features) && room.features.length) {
      const features = document.createElement('ul');
      features.className = 'features';
      room.features.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        features.appendChild(li);
      });
      copy.appendChild(features);
    }

    const buttons = document.createElement('div');
    buttons.className = 'buttons';

    const viewBtn = document.createElement('button');
    viewBtn.type = 'button';
    viewBtn.className = 'btn solid';
    viewBtn.setAttribute('data-open-room', roomId);
    viewBtn.textContent = room.viewButtonText || 'Посмотреть варианты';
    buttons.appendChild(viewBtn);

    const bookBtn = document.createElement('a');
    bookBtn.className = 'btn outline';
    bookBtn.href = '#booking';
    bookBtn.setAttribute('data-go-booking', '');
    bookBtn.textContent = room.bookButtonText || 'Проверить даты';
    buttons.appendChild(bookBtn);

    copy.appendChild(buttons);
    article.appendChild(photo);
    article.appendChild(copy);
    list.appendChild(article);
  });

  list.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  list.querySelectorAll('img').forEach(bindImageFallback);
}

function bindImageFallback(img) {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    if (img.parentElement) {
      img.parentElement.style.background = 'linear-gradient(135deg,#dceff0,#efe2c8)';
    }
  });
}

function escapeAmenityText(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * HTML-блоки групп удобств для модального окна сценария.
 * Вставляется сразу после вступительного текста и перед кнопкой «Проверить даты».
 * @param {Array} groups — scenario.amenityGroups из data/*.json
 * @returns {string} разметка .scenario-amenities или ''
 */
function renderAmenityGroups(groups) {
  if (!Array.isArray(groups) || !groups.length) return '';

  const getIcon = (typeof window !== 'undefined' && typeof window.getOtdyh23Icon === 'function')
    ? window.getOtdyh23Icon
    : (typeof getOtdyh23Icon === 'function' ? getOtdyh23Icon : null);

  const groupsHtml = groups.map(group => {
    if (!group || !Array.isArray(group.items) || !group.items.length) return '';

    const titleHtml = group.title
      ? '<h4 class="amenity-group__title">' + escapeAmenityText(group.title) + '</h4>'
      : '';

    const badgesHtml = group.items.map(item => {
      if (!item || !item.label) return '';
      const iconHtml = getIcon ? (getIcon(item.icon) || '') : '';
      return (
        '<div class="amenity-badge">' +
          iconHtml +
          '<span class="amenity-badge__label">' + escapeAmenityText(item.label) + '</span>' +
        '</div>'
      );
    }).join('');

    if (!badgesHtml) return '';

    return (
      '<div class="amenity-group">' +
        titleHtml +
        '<div class="amenity-badges">' + badgesHtml + '</div>' +
      '</div>'
    );
  }).filter(Boolean).join('');

  if (!groupsHtml) return '';
  return '<section class="scenario-amenities">' + groupsHtml + '</section>';
}

/* ─── Загрузка data/*.json → ROOM_CATALOG (comfort, deluxe-2, deluxe-3, family) ─── */
const COMFORT_SCENARIO_PHOTO_DIRS = {
  '2-guests': 'images/comfort/2-guests',
  'comfort-2': 'images/comfort/2-guests',
  '3-guests': 'images/comfort/3-guests',
  'comfort-3': 'images/comfort/3-guests',
  'baby-cot': 'images/comfort/baby-cot',
  'comfort-cot': 'images/comfort/baby-cot'
};

function formatGuestsLabel(value) {
  if (typeof value === 'string' && value.trim()) return value;
  const n = Number(value);
  if (!n) return '';
  if (n === 1) return '1 гость';
  if (n >= 2 && n <= 4) return n + ' гостя';
  return n + ' гостей';
}

function buildComfortScenarioPhotos(scenario, roomName) {
  if (Array.isArray(scenario.photos) && scenario.photos.length) {
    return scenario.photos.filter(p => p && p.src);
  }

  const dir = COMFORT_SCENARIO_PHOTO_DIRS[scenario.id]
    || (scenario.photosFolder && !/[а-яё]/i.test(scenario.photosFolder) ? scenario.photosFolder.replace(/\/$/, '') : null)
    || 'images/comfort/2-guests';

  const fileName = scenario.mainPhoto && /\.(png|jpe?g|webp)$/i.test(scenario.mainPhoto)
    ? scenario.mainPhoto
    : '01.png';

  const src = dir + '/' + fileName;
  const caption = (roomName ? roomName + ' · ' : '') + (scenario.title || '');
  return [{
    src: src,
    alt: caption || 'Комната Комфорт',
    caption: caption
  }];
}

function adaptComfortJson(data, fallback) {
  if (!data || typeof data !== 'object') return fallback;

  const name = data.name || fallback.name;
  const bookingButton = (data.booking && data.booking.button) || data.bookButtonText || fallback.bookButtonText || 'Проверить даты';

  function mapScenario(scenario) {
    if (!scenario || typeof scenario !== 'object') return null;
    const fallbackScenario = (fallback.scenarios || []).find(s => s.id === scenario.id) || {};
    const photos = Array.isArray(scenario.photos) && scenario.photos.length
      ? scenario.photos.filter(p => p && p.src)
      : buildComfortScenarioPhotos(scenario, name);

    const isComfort = data.id === 'comfort';
    const amenityGroups = Array.isArray(scenario.amenityGroups) && scenario.amenityGroups.length
      ? scenario.amenityGroups
      : (Array.isArray(fallbackScenario.amenityGroups) ? fallbackScenario.amenityGroups : []);

    return {
      id: scenario.id || fallbackScenario.id,
      title: scenario.title || fallbackScenario.title,
      subtitle: isComfort
        ? ''
        : (scenario.subtitle || fallbackScenario.subtitle || (name + (scenario.title ? ' · ' + scenario.title : ''))),
      guests: isComfort ? '' : (formatGuestsLabel(scenario.guests) || fallbackScenario.guests || ''),
      sleeping: isComfort ? '' : (scenario.sleeping || fallbackScenario.sleeping || ''),
      description: scenario.description || fallbackScenario.description || '',
      amenityGroups: amenityGroups,
      photos: photos.length ? photos : (fallbackScenario.photos || []),
      buttonText: scenario.buttonText || bookingButton
    };
  }

  const scenarios = Array.isArray(data.scenarios)
    ? data.scenarios.map(mapScenario).filter(Boolean)
    : (fallback.scenarios || []);

  const pills = Array.isArray(data.pills) ? data.pills : (fallback.pills || []);
  const features = Array.isArray(data.cardFeatures)
    ? data.cardFeatures
    : (Array.isArray(data.features) ? data.features : (fallback.features || []));

  const coverFromTwoGuests = (function () {
    const twoGuests = scenarios.find(s => s.id === '2-guests' || s.id === 'comfort-2') || scenarios[0];
    if (!twoGuests || !Array.isArray(twoGuests.photos)) return null;
    const main = twoGuests.photos.find(p => {
      if (!p || !p.src) return false;
      const file = p.src.split('/').pop() || '';
      return file.indexOf('00_') === 0;
    }) || twoGuests.photos[0];
    return main ? { src: main.src, alt: main.alt || name } : null;
  })();

  return {
    name: name,
    eyebrow: data.eyebrow || fallback.eyebrow || ('Категория «' + name + '»'),
    shortDescription: data.descriptionShort || data.shortDescription || fallback.shortDescription,
    descriptionTitle: data.descriptionTitle || fallback.descriptionTitle || '',
    descriptionFull: data.descriptionFull || fallback.descriptionFull || '',
    label: Object.prototype.hasOwnProperty.call(data, 'label') ? (data.label || '') : (fallback.label || ''),
    photo: data.photo || coverFromTwoGuests || fallback.photo,
    pills: pills,
    features: features,
    viewButtonText: data.viewButtonText || fallback.viewButtonText || 'Посмотреть варианты',
    bookButtonText: bookingButton,
    title: data.title || fallback.title || 'Варианты размещения',
    scenarios: scenarios.length ? scenarios : fallback.scenarios
  };
}

async function loadRoomCategoryFromJson(roomId, url) {
  const fallback = ROOM_CATALOG[roomId];
  if (!fallback) return;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const json = await response.json();
    ROOM_CATALOG[roomId] = adaptComfortJson(json, fallback);
  } catch (err) {
    ROOM_CATALOG[roomId] = fallback;
  }
}

async function loadRoomCategoriesFromJson() {
  await Promise.all([
    loadRoomCategoryFromJson('comfort', 'data/comfort.json'),
    loadRoomCategoryFromJson('deluxe-2', 'data/deluxe-2.json'),
    loadRoomCategoryFromJson('deluxe-3', 'data/deluxe-3.json'),
    loadRoomCategoryFromJson('family', 'data/family.json')
  ]);
  renderRooms();
}

loadRoomCategoriesFromJson();

document.addEventListener('click', e => {
  const openTrigger = e.target.closest('[data-open-room]');
  if (openTrigger) {
    const id = openTrigger.getAttribute('data-open-room');
    if (!id || !ROOM_CATALOG[id]) return;
    e.preventDefault();
    openRoomViewer(id);
    return;
  }

  const bookTrigger = e.target.closest('[data-go-booking], a[href="#booking"]');
  if (bookTrigger) goToBooking(e);
});

roomViewerClose.addEventListener('click', closeRoomViewer);
roomViewer.addEventListener('click', e => {
  if (e.target === roomViewer) closeRoomViewer();
});

addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (lightbox.classList.contains('open')) closeLightbox();
  else if (roomViewer.classList.contains('open')) closeRoomViewer();
});

/* ─── Accordion Gallery: hover на ПК, tap на мобильных ─── */
(() => {
  const gallery = document.getElementById('accGallery');
  if (!gallery) return;

  const panels = [...gallery.querySelectorAll('.acc-panel')];
  if (!panels.length) return;

  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');

  function setOpen(panel) {
    panels.forEach(p => {
      const on = p === panel;
      p.classList.toggle('is-open', on);
      p.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
  }

  function bindMode() {
    gallery.classList.toggle('is-touch', !finePointer.matches);
    panels.forEach(panel => {
      panel.onmouseenter = null;
      panel.onclick = null;
    });
    gallery.onmouseleave = null;

    if (finePointer.matches) {
      panels.forEach(panel => {
        panel.onmouseenter = () => setOpen(panel);
      });
      gallery.onmouseleave = () => setOpen(panels[0]);
    } else {
      panels.forEach(panel => {
        panel.onclick = () => setOpen(panel);
      });
    }
  }

  bindMode();
  if (finePointer.addEventListener) finePointer.addEventListener('change', bindMode);
  else if (finePointer.addListener) finePointer.addListener(bindMode);

  panels.forEach(panel => {
    panel.addEventListener('focus', () => setOpen(panel));
    panel.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(panel);
      }
    });
  });

  /* Fade-ротация 3 главных фото в первой панели */
  const slides = [...gallery.querySelectorAll('.acc-panel__slides img')];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let slideIndex = 0;
  let slideTimer = null;

  function showSlide(next) {
    if (!slides.length) return;
    slides[slideIndex].classList.remove('is-active');
    slideIndex = next % slides.length;
    slides[slideIndex].classList.add('is-active');
  }

  function stopSlides() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  function startSlides() {
    stopSlides();
    if (slides.length < 2 || reduceMotion.matches) return;
    slideTimer = setInterval(() => showSlide(slideIndex + 1), 4000);
  }

  startSlides();
  if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', startSlides);
  else if (reduceMotion.addListener) reduceMotion.addListener(startSlides);
})();

/* ─── Кнопка «Наверх» ─── */
backTop.addEventListener('click', () => {
  scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── Запасной фон, если изображение не загрузилось ─── */
document.querySelectorAll('img').forEach(bindImageFallback);