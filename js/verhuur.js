// Verhuurconfigurator Kubota B1820
// Prijzen aanpassen? Wijzig enkel de tabel TARIEVEN hieronder.
(function () {
  var TARIEVEN = {
    kubota:       { dag: 110, weekend: 130, week: 450 },
    frees:        { dag: 55,  weekend: 70,  week: 210 },
    klepelmaaier: { dag: 60,  weekend: 75,  week: 240 },
    hakselaar:    { dag: 110, weekend: 130, week: 330 }
  };
  var WERKTUIGEN = [
    { id: 'frees', naam: 'Frees', uitleg: 'Grond losmaken en zaaiklaar leggen.', foto: 'img/frees.jpg' },
    { id: 'klepelmaaier', naam: 'Klepelmaaier', uitleg: 'Hoog gras, ruigte en bermen maaien.', foto: '' },
    { id: 'hakselaar', naam: 'Hakselaar', uitleg: 'Snoeihout en takken versnipperen.', foto: 'img/hakselaar.jpg' }
  ];
  var KLUSSEN = [
    { id: 'frezen', titel: 'Grond frezen', combo: 'Kubota + frees', zet: ['frees'] },
    { id: 'hakselen', titel: 'Snoeihout hakselen', combo: 'Kubota + hakselaar', zet: ['hakselaar'] },
    { id: 'maaien', titel: 'Weide of ruigte maaien', combo: 'Kubota + klepelmaaier', zet: ['klepelmaaier'] },
    { id: 'verzetten', titel: 'Grond of zand verzetten', combo: 'Kubota met frontlader', zet: [] }
  ];
  var FOTOS = [
    { src: 'img/kubota.jpg', alt: 'Kubota met frontlader en frees' },
    { src: 'img/kubota-hakselaar.jpg', alt: 'Kubota met hakselaar aangekoppeld' },
    { src: 'img/frees.jpg', alt: 'Achterkant van de Kubota met frees' },
    { src: 'img/hakselaar.jpg', alt: 'Pezzolato-hakselaar van dichtbij' }
  ];
  var PERIODES = [['dag', 'Dag'], ['weekend', 'Weekend'], ['week', 'Week']];

  var staat = { periode: 'dag', gekozen: {}, klus: '', datum: '' };
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }
  function datumNL(iso) {
    if (!iso) return '';
    var d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('nl-BE', { weekday: 'long', day: 'numeric', month: 'long' });
  }

  // Galerij
  FOTOS.forEach(function (f, i) {
    var b = el('button', { type: 'button', class: 'duim', 'aria-label': f.alt, 'aria-pressed': i === 0 ? 'true' : 'false' },
      '<img src="' + f.src + '" alt="" loading="lazy">');
    b.addEventListener('click', function () {
      $('hoofdfoto').src = f.src; $('hoofdfoto').alt = f.alt;
      document.querySelectorAll('.duim').forEach(function (d) { d.setAttribute('aria-pressed', d === b ? 'true' : 'false'); });
    });
    $('duimen').appendChild(b);
  });

  // Klussen
  KLUSSEN.forEach(function (k) {
    var b = el('button', { type: 'button', class: 'klus', 'data-klus': k.id, 'aria-pressed': 'false' },
      '<strong>' + k.titel + '</strong><span>' + k.combo + '</span>');
    b.addEventListener('click', function () {
      staat.klus = k.id; staat.gekozen = {};
      k.zet.forEach(function (id) { staat.gekozen[id] = true; });
      render();
    });
    $('klussen').appendChild(b);
  });

  // Periodes
  PERIODES.forEach(function (p) {
    var b = el('button', { type: 'button', class: 'periode', 'data-periode': p[0] },
      '<strong>' + p[1] + '</strong><span>Kubota € ' + TARIEVEN.kubota[p[0]] + '</span>');
    b.addEventListener('click', function () { staat.periode = p[0]; render(); });
    $('periodes').appendChild(b);
  });

  // Werktuigen
  WERKTUIGEN.forEach(function (w) {
    var beeld = w.foto
      ? '<img src="' + w.foto + '" alt="" loading="lazy">'
      : '<span class="geen-foto">Foto nog toe te voegen</span>';
    var l = el('label', { class: 'werktuig', for: 'wt-' + w.id },
      beeld + '<span class="werktuig-tekst"><span class="werktuig-kop"><strong>' + w.naam +
      '</strong><input type="checkbox" id="wt-' + w.id + '"></span><span class="werktuig-uitleg">' + w.uitleg +
      '</span><span class="werktuig-prijs" data-prijs="' + w.id + '"></span></span>');
    $('werktuigen').appendChild(l);
    l.querySelector('input').addEventListener('change', function (e) {
      staat.gekozen[w.id] = e.target.checked; staat.klus = ''; render();
    });
  });

  $('startdatum').min = new Date().toISOString().slice(0, 10);
  $('startdatum').addEventListener('change', function (e) { staat.datum = e.target.value; render(); });

  function render() {
    var per = staat.periode;
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
      document.querySelector('[data-prijs="' + w.id + '"]').textContent = '+ € ' + TARIEVEN[w.id][per] + ' per ' + per;
    });

    var lijnen = [['Kubota B1820 + frontlader', TARIEVEN.kubota[per]]];
    WERKTUIGEN.forEach(function (w) { if (staat.gekozen[w.id]) lijnen.push([w.naam, TARIEVEN[w.id][per]]); });
    var totaal = lijnen.reduce(function (s, l) { return s + l[1]; }, 0);

    var html = lijnen.map(function (l) {
      return '<div class="lijn"><span>' + l[0] + '</span><span style="font-weight:600">€ ' + l[1] + '</span></div>';
    }).join('');
    html += '<div class="lijn lijn-zacht"><span>Periode</span><span>1 ' + per + (staat.datum ? ', vanaf ' + datumNL(staat.datum) : '') + '</span></div>';
    $('lijnen').innerHTML = html;
    $('totaal').textContent = '€ ' + totaal;

    var namen = WERKTUIGEN.filter(function (w) { return staat.gekozen[w.id]; }).map(function (w) { return w.naam.toLowerCase(); });
    var tekst = 'Hallo Stef, ik wil graag de Kubota huren voor 1 ' + per +
      (staat.datum ? ', vanaf ' + datumNL(staat.datum) : '') +
      (namen.length ? ', met ' + namen.join(' en ') : '') +
      '. Totaal volgens de website: € ' + totaal + '.';
    $('wa-link').href = 'https://wa.me/32473235755?text=' + encodeURIComponent(tekst);
    $('mail-link').href = 'mailto:info@steftanghe.be?subject=' + encodeURIComponent('Huuraanvraag Kubota') + '&body=' + encodeURIComponent(tekst);
  }
  render();
})();
