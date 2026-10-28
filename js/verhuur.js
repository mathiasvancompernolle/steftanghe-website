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
    { id: 'frees', foto: 'img/frees.jpg' },
    { id: 'klepelmaaier', foto: '' },
    { id: 'hakselaar', foto: 'img/hakselaar.jpg' }
  ];
  var KLUSSEN = [
    { id: 'frezen', zet: ['frees'] },
    { id: 'hakselen', zet: ['hakselaar'] },
    { id: 'maaien', zet: ['klepelmaaier'] },
    { id: 'verzetten', zet: [] }
  ];
  var FOTOS = ['img/kubota.jpg', 'img/kubota-hakselaar.jpg', 'img/frees.jpg', 'img/hakselaar.jpg'];
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
  FOTOS.forEach(function (src, i) {
    var b = el('button', { type: 'button', class: 'duim', 'aria-pressed': i === 0 ? 'true' : 'false', 'aria-label': 'Foto ' + (i + 1) },
      '<img src="' + src + '" alt="" loading="lazy">');
    b.addEventListener('click', function () {
      staat.foto = i; $('hoofdfoto').src = src;
      document.querySelectorAll('.duim').forEach(function (d) { d.setAttribute('aria-pressed', d === b ? 'true' : 'false'); });
    });
    $('duimen').appendChild(b);
  });

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
    $('mail-link').href = 'mailto:info@steftanghe.be?subject=' + encodeURIComponent(t('msg.onderwerp')) + '&body=' + encodeURIComponent(tekst);
  }

  document.addEventListener('taal', bouw);
  bouw();
})();
