// Verkoopoverzicht: filter op categorie en merk (meerdere tegelijk), zoeken, kaarten.
// De machines zelf staan in js/assortiment.js.
(function () {
  var A = window.ASSORTIMENT, t = window.ST.t;
  var $ = function (id) { return document.getElementById(id); };
  var params = new URLSearchParams(location.search);
  var staat = {
    cats: (params.get('cat') || '').split(',').filter(Boolean),
    merken: (params.get('merk') || '').split(',').filter(Boolean),
    q: params.get('q') || ''
  };
  $('zoek').value = staat.q;

  function taal() { return window.ST.taal(); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function normaal(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  function past(a, negeer) {
    if (negeer !== 'cat' && staat.cats.length && staat.cats.indexOf(a.cat) < 0) return false;
    if (negeer !== 'merk' && staat.merken.length && !a.merken.some(function (m) { return staat.merken.indexOf(m) > -1; })) return false;
    if (staat.q) {
      var hooi = normaal([a.naam[taal()], a.naam.nl, a.tekst[taal()], a.merken.join(' '), A.cat(a.cat).naam[taal()]].join(' '));
      if (hooi.indexOf(normaal(staat.q)) < 0) return false;
    }
    return true;
  }

  function bewaar() {
    var u = new URL(location.href);
    ['cat', 'merk', 'q'].forEach(function (k) { u.searchParams.delete(k); });
    if (staat.cats.length) u.searchParams.set('cat', staat.cats.join(','));
    if (staat.merken.length) u.searchParams.set('merk', staat.merken.join(','));
    if (staat.q) u.searchParams.set('q', staat.q);
    history.replaceState(null, '', u);
  }

  function vinkje(groep, waarde, label, aantal, aan) {
    var id = 'f-' + groep + '-' + waarde.replace(/[^a-z0-9]+/gi, '-');
    return '<li><label for="' + id + '" class="vink' + (aantal ? '' : ' leeg') + '">' +
      '<input type="checkbox" id="' + id + '" data-groep="' + groep + '" value="' + esc(waarde) + '"' + (aan ? ' checked' : '') + '>' +
      '<span>' + esc(label) + '</span><span class="aantal">(' + aantal + ')</span></label></li>';
  }

  function tekenFilters() {
    $('filter-cat').innerHTML = A.CATS.map(function (c) {
      var n = A.AANBOD.filter(function (a) { return a.cat === c.id && past(a, 'cat'); }).length;
      return vinkje('cat', c.id, c.naam[taal()], n, staat.cats.indexOf(c.id) > -1);
    }).join('');
    $('filter-merk').innerHTML = A.merken().map(function (mk) {
      var n = A.AANBOD.filter(function (a) { return a.merken.indexOf(mk) > -1 && past(a, 'merk'); }).length;
      return vinkje('merk', mk, mk, n, staat.merken.indexOf(mk) > -1);
    }).join('');
    var actief = staat.cats.length + staat.merken.length + (staat.q ? 1 : 0);
    $('wis').hidden = !actief;
    $('filter-knop-aantal').textContent = actief ? '(' + actief + ')' : '';
  }

  function tekenKaarten() {
    var items = A.AANBOD.filter(function (a) { return past(a); });
    $('teller').textContent = items.length + ' ' + t(items.length === 1 ? 'vk.resultaat' : 'vk.resultaten');
    $('geen').hidden = items.length > 0;
    $('producten').innerHTML = items.map(function (a) {
      var href = window.ST.link('verkoop-detail.html?p=' + a.slug);
      var beeld = a.foto
        ? '<img src="' + a.foto + '" alt="" loading="lazy">'
        : '<span class="kaart-zonder-foto">Foto volgt</span>';
      return '<a class="product product-' + a.cat + '" href="' + href + '">' +
        '<span class="product-beeld">' + beeld + '</span>' +
        '<span class="product-body">' +
          '<span class="product-cat">' + esc(A.cat(a.cat).naam[taal()]) + '</span>' +
          '<span class="product-titel">' + esc(a.naam[taal()]) + '</span>' +
          '<span class="product-tekst">' + esc(a.tekst[taal()]) + '</span>' +
          '<span class="product-merken">' + a.merken.map(esc).join(' <span aria-hidden="true">|</span> ') + '</span>' +
          '<span class="product-actie">' + t('vk.meerinfo') + ' <span aria-hidden="true">|</span> ' + t('vk.kopen') + '</span>' +
        '</span></a>';
    }).join('');
  }

  function teken() { tekenFilters(); tekenKaarten(); }

  document.querySelector('.filterpaneel').addEventListener('change', function (e) {
    var el = e.target; if (!el.dataset.groep) return;
    var lijst = el.dataset.groep === 'cat' ? staat.cats : staat.merken;
    var i = lijst.indexOf(el.value);
    if (el.checked && i < 0) lijst.push(el.value);
    if (!el.checked && i > -1) lijst.splice(i, 1);
    bewaar(); teken();
    var terug = document.getElementById(el.id); if (terug) terug.focus();
  });
  $('zoek').addEventListener('input', function (e) { staat.q = e.target.value.trim(); bewaar(); teken(); });
  $('zoekform').addEventListener('submit', function (e) { e.preventDefault(); });
  $('wis').addEventListener('click', function () {
    staat.cats = []; staat.merken = []; staat.q = ''; $('zoek').value = '';
    bewaar(); teken();
  });
  // Gsm: filterpaneel open/dicht
  $('filter-knop').addEventListener('click', function () {
    var open = this.getAttribute('aria-expanded') !== 'true';
    this.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.querySelector('.filterpaneel').classList.toggle('open', open);
  });

  document.addEventListener('taal', teken);
  teken();
})();
