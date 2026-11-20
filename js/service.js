// Service-pagina: aanvraagformulier (herstelling / onderhoud / slijpen, eventueel ophalen)
// Verstuurt een kant-en-klaar bericht via WhatsApp of mail. Vooraf kiezen kan met
// service.html?soort=onderhoud|herstel|slijp en/of &afhalen=1
(function () {
  var t = window.ST.t;
  var $ = function (id) { return document.getElementById(id); };
  var form = $('aanvragen');
  if (!form) return;
  var SOORT = { herstel: 'h.herstel', onderhoud: 'h.onderhoud', slijp: 'h.slijp' };
  // De tweede vraag past zich aan de keuze aan: [vraag, voorbeeld, label in het bericht]
  var VRAAG = {
    herstel: ['h.probleem', 'h.probleem.ph', 'h.l.probleem'],
    onderhoud: ['h.vraag.onderhoud', 'h.ph.onderhoud', 'h.l.onderhoud'],
    slijp: ['h.vraag.slijp', 'h.ph.slijp', 'h.l.slijp']
  };
  function soort() { return form.querySelector('input[name="soort"]:checked').value; }
  function vraagTekst() {
    var v = VRAAG[soort()];
    var label = form.querySelector('label[for="h-probleem"]');
    if (label.textContent !== t(v[0])) {
      label.textContent = t(v[0]);
      $('h-probleem').placeholder = t(v[1]);
      label.classList.remove('wissel-tekst'); void label.offsetWidth; label.classList.add('wissel-tekst');
    }
  }

  function bericht() {
    var regels = [t('h.msg'), '',
      t('h.l.soort') + ': ' + t(SOORT[soort()]),
      t('h.l.machine') + ': ' + $('h-machine').value.trim()];
    var p = $('h-probleem').value.trim();
    if (p) regels.push(t(VRAAG[soort()][2]) + ': ' + p);
    if ($('h-afhalen').checked) regels.push(t('h.l.afhaal') + ': ' + ($('h-adres').value.trim() || '…'));
    var naam = $('h-naam').value.trim(), tel = $('h-tel').value.trim();
    if (naam || tel) regels.push('', naam + (naam && tel ? ' – ' : '') + tel);
    return regels.join('\n');
  }
  function bijwerken() {
    vraagTekst();
    $('h-adres-blok').hidden = !$('h-afhalen').checked;
    $('h-adres').required = $('h-afhalen').checked;
    $('h-mail').href = 'mailto:info@steftanghe.be?subject=' + encodeURIComponent(t('h.onderwerp')) + '&body=' + encodeURIComponent(bericht());
  }
  function kies(soort, afhalen) {
    var r = soort && form.querySelector('input[name="soort"][value="' + soort + '"]');
    if (r) r.checked = true;
    if (afhalen) $('h-afhalen').checked = true;
    bijwerken();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    window.open('https://wa.me/32473235755?text=' + encodeURIComponent(bericht()), '_blank', 'noopener');
  });
  form.addEventListener('input', bijwerken);
  form.addEventListener('change', bijwerken);

  // Knoppen op de pagina ("Plan een beurt", "Slijpen", "Ophalen en terugbrengen")
  document.querySelectorAll('[data-soort], [data-afhalen]').forEach(function (a) {
    a.addEventListener('click', function () {
      kies(a.dataset.soort, a.dataset.afhalen);
      setTimeout(function () { $('h-machine').focus({ preventScroll: true }); }, 700);
    });
  });

  // Vooraf gekozen via de link (bv. vanaf de homepage)
  var q = new URLSearchParams(location.search);
  kies(q.get('soort'), q.get('afhalen'));
  document.addEventListener('taal', bijwerken);
})();
