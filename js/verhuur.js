// Verhuurconfigurator Kubota B1820
// Prijzen aanpassen? Wijzig enkel de tabel TARIEVEN hieronder.
// Teksten staan in js/i18n.js.
(function () {
  var TARIEVEN = {
    kubota:       { dag: 110, weekend: 130, week: 450 },
    frees:        { dag: 55,  weekend: 70,  week: 210 },
    klepelmaaier: { dag: 60,  weekend: 75,  week: 240 },
    hakselaar:    { dag: 110, weekend: 130, week: 330 }
  };
  var WERKTUIGEN = [
    { id: 'frees', foto: 'img/klein/frees.webp' },
    { id: 'klepelmaaier', foto: '' },
    { id: 'hakselaar', foto: 'img/klein/hakselaar.webp' }
  ];
  var KLUSSEN = [
    { id: 'frezen', zet: ['frees'] },
    { id: 'hakselen', zet: ['hakselaar'] },
    { id: 'maaien', zet: ['klepelmaaier'] },
    { id: 'verzetten', zet: [] }
  ];
  var FOTOS = ['img/kubota.webp', 'img/kubota-hakselaar.webp', 'img/frees.webp', 'img/hakselaar.webp'];
  var PERIODES = ['dag', 'weekend', 'week'];

  var t = window.ST.t;
  var staat = { periode: 'dag', gekozen: {}, klus: '', datum: '', foto: 0 };
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }
  function datumTekst(iso) {
    if (!iso) return '';
    return new Date(iso + 'T12:00:00').toLocaleDateString(window.ST.locale(), { weekday: 'long', day: 'numeric', month: 'long' });
  }
  function naam(id) { return t('w.' + id); }

  // Galerij (bouwt één keer)
  function toonFoto(i) {
    i = (i + FOTOS.length) % FOTOS.length;
    if (staat.foto === i) return;
    staat.foto = i;
    var hf = $('hoofdfoto');
    hf.classList.add('wissel');
    setTimeout(function () { hf.onload = hf.onerror = function () { hf.classList.remove('wissel'); }; hf.src = FOTOS[i]; }, 180);
    document.querySelectorAll('.duim').forEach(function (d, j) { d.setAttribute('aria-pressed', j === i ? 'true' : 'false'); });
    if (lb && lb.classList.contains('open')) lbFoto();
  }
  FOTOS.forEach(function (src, i) {
    var b = el('button', { type: 'button', class: 'duim', 'aria-pressed': i === 0 ? 'true' : 'false', 'aria-label': 'Foto ' + (i + 1) },
      '<img src="' + src.replace('img/', 'img/klein/') + '" alt="" loading="lazy">');
    b.addEventListener('click', function () { toonFoto(i); });
    $('duimen').appendChild(b);
  });

  // Swipen over de grote foto (gsm)
  function swipe(doel, links, rechts) {
    var x0 = null;
    doel.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    doel.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 45) (dx < 0 ? links : rechts)();
    });
  }
  swipe($('hoofdfoto'), function () { toonFoto(staat.foto + 1); }, function () { toonFoto(staat.foto - 1); });

  // Schermvullend bekijken (lightbox)
  var lb = el('div', { class: 'lightbox', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Kubota B1820' },
    '<img alt="">' +
    '<button type="button" class="lb-knop lb-sluit"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
    '<button type="button" class="lb-knop lb-vorige"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg></button>' +
    '<button type="button" class="lb-knop lb-volgende"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></button>' +
    '<p class="lb-teller"></p>');
  document.body.appendChild(lb);
  function lbFoto() {
    lb.querySelector('img').src = FOTOS[staat.foto];
    lb.querySelector('.lb-teller').textContent = (staat.foto + 1) + ' / ' + FOTOS.length;
  }
  function lbLabels() {
    lb.querySelector('.lb-sluit').setAttribute('aria-label', t('menu.sluiten'));
    lb.querySelector('.lb-vorige').setAttribute('aria-label', t('lb.vorige'));
    lb.querySelector('.lb-volgende').setAttribute('aria-label', t('lb.volgende'));
    $('hoofdfoto').setAttribute('aria-label', t('lb.vergroot'));
  }
  function lbOpen() { lbFoto(); lb.classList.add('open'); document.body.classList.add('dialoog-open'); lb.querySelector('.lb-sluit').focus(); }
  function lbSluit() { lb.classList.remove('open'); document.body.classList.remove('dialoog-open'); $('hoofdfoto').focus(); }
  $('hoofdfoto').setAttribute('tabindex', '0');
  $('hoofdfoto').setAttribute('role', 'button');
  $('hoofdfoto').addEventListener('click', lbOpen);
  $('hoofdfoto').addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lbOpen(); } });
  lb.querySelector('.lb-sluit').addEventListener('click', lbSluit);
  lb.querySelector('.lb-vorige').addEventListener('click', function () { toonFoto(staat.foto - 1); });
  lb.querySelector('.lb-volgende').addEventListener('click', function () { toonFoto(staat.foto + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lbSluit(); });
  swipe(lb, function () { toonFoto(staat.foto + 1); }, function () { toonFoto(staat.foto - 1); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lbSluit();
    if (e.key === 'ArrowRight') toonFoto(staat.foto + 1);
    if (e.key === 'ArrowLeft') toonFoto(staat.foto - 1);
  });
  lbLabels();
  document.addEventListener('taal', lbLabels);

  $('startdatum').min = new Date().toISOString().slice(0, 10);
  $('startdatum').addEventListener('change', function (e) { staat.datum = e.target.value; render(); });

  // Klussen, periodes en werktuigen: opnieuw opgebouwd bij taalwissel
  function bouw() {
    $('klussen').innerHTML = '';
    KLUSSEN.forEach(function (k) {
      var combo = k.zet.length ? 'Kubota + ' + naam(k.zet[0]).toLowerCase() : t('k.lader');
      var b = el('button', { type: 'button', class: 'klus', 'data-klus': k.id },
        '<strong>' + t('k.' + k.id) + '</strong><span>' + combo + '</span>');
      b.addEventListener('click', function () {
        staat.klus = k.id; staat.gekozen = {};
        k.zet.forEach(function (id) { staat.gekozen[id] = true; });
        render();
      });
      $('klussen').appendChild(b);
    });

    $('periodes').innerHTML = '';
    PERIODES.forEach(function (p) {
      var b = el('button', { type: 'button', class: 'periode', 'data-periode': p },
        '<strong>' + t('p.' + p) + '</strong><span>Kubota € ' + TARIEVEN.kubota[p] + '</span>');
      b.addEventListener('click', function () { staat.periode = p; render(); });
      $('periodes').appendChild(b);
    });

    $('werktuigen').innerHTML = '';
    WERKTUIGEN.forEach(function (w) {
      var beeld = w.foto
        ? '<img src="' + w.foto + '" alt="" loading="lazy">'
        : '<span class="geen-foto">Foto nog toe te voegen</span>';
      var l = el('label', { class: 'werktuig', for: 'wt-' + w.id },
        beeld + '<span class="werktuig-tekst"><span class="werktuig-kop"><strong>' + naam(w.id) +
        '</strong><input type="checkbox" id="wt-' + w.id + '"></span><span class="werktuig-uitleg">' + t('w.' + w.id + '.uitleg') +
        '</span><span class="werktuig-prijs" data-prijs="' + w.id + '"></span></span>');
      $('werktuigen').appendChild(l);
      l.querySelector('input').addEventListener('change', function (e) {
        staat.gekozen[w.id] = e.target.checked; staat.klus = ''; render();
      });
    });
    render();
  }

  function render() {
    var per = staat.periode;
    var perWoord = t('pk.' + per);
    document.querySelectorAll('.periode').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.periode === per ? 'true' : 'false');
    });
    document.querySelectorAll('.klus').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.klus === staat.klus ? 'true' : 'false');
    });
    WERKTUIGEN.forEach(function (w) {
      var aan = !!staat.gekozen[w.id];
      $('wt-' + w.id).checked = aan;
      $('wt-' + w.id).closest('.werktuig').classList.toggle('gekozen', aan);
      document.querySelector('[data-prijs="' + w.id + '"]').textContent = '+ € ' + TARIEVEN[w.id][per] + ' ' + t('per') + ' ' + perWoord;
    });

    var lijnen = [[t('lijn.kubota'), TARIEVEN.kubota[per]]];
    WERKTUIGEN.forEach(function (w) { if (staat.gekozen[w.id]) lijnen.push([naam(w.id), TARIEVEN[w.id][per]]); });
    var totaal = lijnen.reduce(function (s, l) { return s + l[1]; }, 0);
    var vanaf = staat.datum ? ', ' + t('vanaf') + ' ' + datumTekst(staat.datum) : '';

    var html = lijnen.map(function (l) {
      return '<div class="lijn"><span>' + l[0] + '</span><span style="font-weight:600">€ ' + l[1] + '</span></div>';
    }).join('');
    html += '<div class="lijn lijn-zacht"><span>' + t('periode') + '</span><span>1 ' + perWoord + vanaf + '</span></div>';
    $('lijnen').innerHTML = html;
    $('totaal').textContent = '€ ' + totaal;

    var namen = WERKTUIGEN.filter(function (w) { return staat.gekozen[w.id]; }).map(function (w) { return naam(w.id).toLowerCase(); });
    if (window.ST.taal() === 'de') namen = WERKTUIGEN.filter(function (w) { return staat.gekozen[w.id]; }).map(function (w) { return naam(w.id); });
    var tekst = t('msg.start') + ' ' + perWoord + vanaf +
      (namen.length ? ', ' + t('msg.met') + ' ' + namen.join(' ' + t('en') + ' ') : '') +
      t('msg.de.huren') + '. ' + t('msg.eind') + ' € ' + totaal + '.';
    $('wa-link').href = 'https://wa.me/32473235755?text=' + encodeURIComponent(tekst);
    // Gsm-balk onderaan: live totaal + aanvragen
    if ($('ab-totaal')) {
      if ($('ab-totaal').textContent !== '€ ' + totaal) {
        $('ab-totaal').textContent = '€ ' + totaal;
        $('ab-totaal').classList.remove('tik'); void $('ab-totaal').offsetWidth; $('ab-totaal').classList.add('tik');
      }
      $('ab-wa').href = $('wa-link').href;
    }
    $('mail-link').href = 'mailto:info@steftanghe.be?subject=' + encodeURIComponent(t('msg.onderwerp')) + '&body=' + encodeURIComponent(tekst);
  }

  document.addEventListener('taal', bouw);
  bouw();
})();
