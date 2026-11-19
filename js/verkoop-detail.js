// Detailpagina van één type machine: verkoop-detail.html?p=<slug>
(function () {
  var A = window.ASSORTIMENT, t = window.ST.t;
  var $ = function (id) { return document.getElementById(id); };
  var item = A.zoek(new URLSearchParams(location.search).get('p') || '');
  function taal() { return window.ST.taal(); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  if (!item) { location.replace(window.ST.link('verkoop.html')); return; }

  function bericht() {
    var naam = $('o-naam').value.trim(), tel = $('o-tel').value.trim(), extra = $('o-bericht').value.trim(), merk = $('o-merk').value;
    return t('vk.msg') + ' ' + item.naam[taal()].toLowerCase() + '. ' + t('vd.msg.offerte') +
      (merk ? '\n' + t('vd.msg.merk') + ' ' + merk : '') +
      (extra ? '\n\n' + extra : '') +
      (naam ? '\n\n' + naam : '') + (tel ? ' – ' + tel : '');
  }

  function teken() {
    var naam = item.naam[taal()], c = A.cat(item.cat);
    document.title = naam + ' – Stef Tanghe';
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = naam + ': ' + item.tekst[taal()] + ' ' + t('vd.meta');
    $('d-titel').textContent = naam;
    $('kruimel').innerHTML =
      '<a href="' + window.ST.link('./') + '">' + t('kr.home') + '</a> <span aria-hidden="true">»</span> ' +
      '<a href="' + window.ST.link('verkoop.html') + '">' + t('vk.h1') + '</a> <span aria-hidden="true">»</span> ' +
      '<a href="' + window.ST.link('verkoop.html?cat=' + item.cat) + '">' + esc(c.naam[taal()]) + '</a> <span aria-hidden="true">»</span> ' +
      '<span aria-current="page">' + esc(naam) + '</span>';
    $('d-beeld').innerHTML = item.foto
      ? '<img src="' + item.foto + '" alt="' + esc(naam) + '">'
      : '<span class="todo">Foto: nog toe te voegen</span>';
    $('d-tekst').textContent = item.tekst[taal()];
    $('d-merken').innerHTML = item.merken.map(esc).join(' <span aria-hidden="true">|</span> ');
    $('d-h-advies').textContent = t('vd.h.advies');
    $('d-h-regio').textContent = t('vd.h.regio').replace('{x}', naam);
    // Merkkeuze (behoudt de selectie bij taalwissel)
    var gekozen = $('o-merk').value;
    $('o-merk').innerHTML = '<option value="">' + esc(t('vd.merk.geen')) + '</option>' +
      item.merken.map(function (m) { return '<option' + (m === gekozen ? ' selected' : '') + '>' + esc(m) + '</option>'; }).join('');

    // Meer in dezelfde categorie
    var verwant = A.AANBOD.filter(function (a) { return a.cat === item.cat && a.slug !== item.slug; }).slice(0, 4);
    $('verwant-titel').textContent = t('vd.meer').replace('{x}', c.naam[taal()].toLowerCase());
    $('verwant').closest('section').hidden = !verwant.length;
    $('verwant').innerHTML = verwant.map(function (a) {
      return '<a class="product product-' + a.cat + '" href="' + window.ST.link('verkoop-detail.html?p=' + a.slug) + '">' +
        '<span class="product-beeld">' + (a.foto ? '<img src="' + A.klein(a.foto) + '" alt="" loading="lazy" width="640" height="400">' : '') + '</span>' +
        '<span class="product-body"><span class="product-titel">' + esc(a.naam[taal()]) + '</span>' +
        '<span class="product-tekst">' + esc(a.tekst[taal()]) + '</span>' +
        '<span class="product-actie">' + t('vk.meerinfo') + ' <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></span></a>';
    }).join('');

    $('o-mail').href = 'mailto:info@steftanghe.be?subject=' + encodeURIComponent(t('vd.offerte') + ': ' + naam) + '&body=' + encodeURIComponent(bericht());
  }

  $('offerteform').addEventListener('submit', function (e) {
    e.preventDefault();
    window.open('https://wa.me/32473235755?text=' + encodeURIComponent(bericht()), '_blank', 'noopener');
  });
  $('offerteform').addEventListener('change', function () {
    $('o-mail').href = 'mailto:info@steftanghe.be?subject=' + encodeURIComponent(t('vd.offerte') + ': ' + item.naam[taal()]) + '&body=' + encodeURIComponent(bericht());
  });
  $('offerteform').addEventListener('input', function () {
    $('o-mail').href = 'mailto:info@steftanghe.be?subject=' + encodeURIComponent(t('vd.offerte') + ': ' + item.naam[taal()]) + '&body=' + encodeURIComponent(bericht());
  });

  // Deel deze machine: systeemmenu van de gsm, anders WhatsApp
  $('deel').addEventListener('click', function () {
    var naam = item.naam[taal()], url = location.href;
    if (navigator.share) {
      navigator.share({ title: naam + ' – Stef Tanghe', text: t('vd.deel.tekst') + ' ' + naam, url: url }).catch(function () {});
    } else {
      window.open('https://wa.me/?text=' + encodeURIComponent(t('vd.deel.tekst') + ' ' + naam + '\n' + url), '_blank', 'noopener');
    }
  });

  document.addEventListener('taal', teken);
  teken();
})();
