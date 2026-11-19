// Homepage: categorietegels uit het verkoopassortiment en het herstellingsformulier
(function () {
  var t = window.ST.t;
  var $ = function (id) { return document.getElementById(id); };

  // ---------- Categorietegels (met foto van een machine uit die categorie) ----------
  var A = window.ASSORTIMENT, el = $('cat-tegels');
  // Welke foto per categorie: liefst een eigen foto, anders de eerste met beeld.
  var VOORKEUR = { tuin: 'zitmaaiers', reiniging: 'schoonmaakmachines', bouw: 'stroomgroepen', gereedschap: 'handgereedschap', aanbouw: 'hakselaar' };
  function tegels() {
    if (!A || !el) return;
    var taal = window.ST.taal();
    el.innerHTML = A.CATS.map(function (c) {
      var items = A.AANBOD.filter(function (a) { return a.cat === c.id; });
      var foto = (A.zoek(VOORKEUR[c.id]) || {}).foto || (items.filter(function (a) { return a.foto; })[0] || {}).foto;
      var voorbeelden = items.slice(0, 4).map(function (a) { return a.naam[taal]; }).join(', ');
      return '<a class="cat-tegel product-' + c.id + '" href="' + window.ST.link('verkoop.html?cat=' + c.id) + '">' +
        (foto ? '<img src="' + foto + '" alt="" loading="lazy">' : '') +
        '<span class="cat-tegel-tekst">' +
          '<span class="cat-tegel-aantal">' + items.length + ' ' + t(items.length === 1 ? 'aanbod.machine' : 'aanbod.machines') + '</span>' +
          '<span class="cat-tegel-naam">' + c.naam[taal] + '</span>' +
          '<span class="cat-tegel-vb">' + voorbeelden + (items.length > 4 ? ', …' : '') + '</span>' +
        '</span>' +
        '<span class="cat-tegel-pijl" aria-hidden="true">→</span></a>';
    }).join('');
  }

  // ---------- Herstelling / onderhoud aanvragen ----------
  var form = $('herstelform');
  function bericht() {
    var soort = form.querySelector('input[name="soort"]:checked').value;
    var regels = [t('h.msg'), '',
      t('h.l.soort') + ': ' + t(soort === 'onderhoud' ? 'h.onderhoud' : 'h.herstel'),
      t('h.l.machine') + ': ' + $('h-machine').value.trim()];
    var p = $('h-probleem').value.trim();
    if (p) regels.push(t('h.l.probleem') + ': ' + p);
    var naam = $('h-naam').value.trim(), tel = $('h-tel').value.trim();
    if (naam || tel) regels.push('', naam + (naam && tel ? ' – ' : '') + tel);
    return regels.join('\n');
  }
  function mailLink() {
    $('h-mail').href = 'mailto:info@steftanghe.be?subject=' + encodeURIComponent(t('h.onderwerp')) + '&body=' + encodeURIComponent(bericht());
  }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      window.open('https://wa.me/32473235755?text=' + encodeURIComponent(bericht()), '_blank', 'noopener');
    });
    form.addEventListener('input', mailLink);
    form.addEventListener('change', mailLink);
    // Klik op "Onderhoud" of "Herstellingen" bij de diensten: juiste keuze alvast aanvinken
    document.querySelectorAll('.dienst[data-soort]').forEach(function (a) {
      a.addEventListener('click', function () {
        var r = form.querySelector('input[value="' + a.dataset.soort + '"]');
        if (r) r.checked = true;
        mailLink();
        setTimeout(function () { $('h-machine').focus({ preventScroll: true }); }, 600);
      });
    });
    mailLink();
  }

  function teken() { tegels(); if (form) mailLink(); }
  document.addEventListener('taal', teken);
  teken();
})();
