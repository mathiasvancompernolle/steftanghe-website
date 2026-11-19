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
    $('filter-toon').textContent = items.length === 1 ? t('vk.toon1') : t('vk.toon').replace('{n}', items.length);
    $('producten').innerHTML = items.map(function (a) {
      var href = window.ST.link('verkoop-detail.html?p=' + a.slug);
      var beeld = a.foto
        ? '<img src="' + A.klein(a.foto) + '" alt="" loading="lazy" width="640" height="400">'
        : '<span class="kaart-zonder-foto">Foto volgt</span>';
      return '<a class="product product-' + a.cat + '" href="' + href + '">' +
        '<span class="product-beeld">' + beeld + '</span>' +
        '<span class="product-body">' +
          '<span class="product-cat">' + esc(A.cat(a.cat).naam[taal()]) + '</span>' +
          '<span class="product-titel">' + esc(a.naam[taal()]) + '</span>' +
          '<span class="product-tekst">' + esc(a.tekst[taal()]) + '</span>' +
          '<span class="product-merken"><span>' + a.merken.map(esc).join(' | ') + '</span></span>' +
          '<span class="product-actie">' + t('vk.meerinfo') + ' <span aria-hidden="true">|</span> ' + t('vk.kopen') +
            ' <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>' +
        '</span></a>';
    }).join('');
  }

  // Snelle categorieknoppen boven de kaarten (één categorie tegelijk; "Alles" wist de categoriefilter)
  function tekenChips() {
    var alle = [{ id: '', naam: t('vk.alle'), n: A.AANBOD.filter(function (a) { return past(a, 'cat'); }).length }]
      .concat(A.CATS.map(function (c) {
        return { id: c.id, naam: c.naam[taal()], n: A.AANBOD.filter(function (a) { return a.cat === c.id && past(a, 'cat'); }).length };
      }));
    $('cat-chips').innerHTML = alle.map(function (c) {
      var aan = c.id ? (staat.cats.length === 1 && staat.cats[0] === c.id) : !staat.cats.length;
      return '<button type="button" class="chip" data-cat="' + c.id + '" aria-pressed="' + aan + '">' + esc(c.naam) + ' <span>' + c.n + '</span></button>';
    }).join('');
  }
  $('cat-chips').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    staat.cats = b.dataset.cat ? [b.dataset.cat] : [];
    bewaar(); teken();
    var terug = document.querySelector('.chip[data-cat="' + b.dataset.cat + '"]'); if (terug) terug.focus();
  });

  function teken() { tekenFilters(); tekenChips(); tekenKaarten(); }

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
  // Gsm: filterpaneel schuift van onder in, met "Toon x resultaten"
  function zetFilter(open) {
    $('filter-knop').setAttribute('aria-expanded', open ? 'true' : 'false');
    $('filterpaneel').classList.toggle('open', open);
    $('filter-achtergrond').classList.toggle('open', open);
    document.body.classList.toggle('filter-open', open);
    if (open) setTimeout(function () { $('filter-sluit').focus(); }, 50);
    else $('filter-knop').focus({ preventScroll: true });
  }
  $('filter-knop').addEventListener('click', function () { zetFilter(true); });
  $('filter-sluit').addEventListener('click', function () { zetFilter(false); });
  $('filter-achtergrond').addEventListener('click', function () { zetFilter(false); });
  $('filter-toon').addEventListener('click', function () {
    zetFilter(false);
    $('teller').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && $('filterpaneel').classList.contains('open')) zetFilter(false); });

  document.addEventListener('taal', teken);
  teken();
})();
