// Volledig verkoopassortiment. Eén bron voor de verkooppagina, de detailpagina's en de homepage.
// Machine toevoegen, schrappen of merken aanpassen? Doe het enkel hier.
// foto: optioneel pad naar een eigen foto (bv. 'img/kubota.jpg').
window.ASSORTIMENT = (function () {
  var CATS = [
    { id: 'tuin',        naam: { nl: 'Tuin', en: 'Garden', fr: 'Jardin', de: 'Garten' } },
    { id: 'reiniging',   naam: { nl: 'Reinigingsmachines', en: 'Cleaning machines', fr: 'Machines de nettoyage', de: 'Reinigungsmaschinen' } },
    { id: 'bouw',        naam: { nl: 'Bouw', en: 'Construction', fr: 'Construction', de: 'Bau' } },
    { id: 'gereedschap', naam: { nl: 'Gereedschap', en: 'Tools', fr: 'Outillage', de: 'Werkzeug' } },
    { id: 'aanbouw',     naam: { nl: 'Aanbouwdelen', en: 'Implements', fr: 'Outils attelés', de: 'Anbaugeräte' } }
  ];

  function m(slug, cat, merken, nl, en, fr, de, tnl, ten, tfr, tde, foto) {
    return { slug: slug, cat: cat, merken: merken, foto: foto || '',
      naam: { nl: nl, en: en, fr: fr, de: de }, tekst: { nl: tnl, en: ten, fr: tfr, de: tde } };
  }

  var AANBOD = [
    // ---------- Tuin ----------
    m('compacte-traktoren', 'tuin', ['Farmtrac', 'Iseki', 'John Deere', 'Solis'],
      'Compacte traktoren', 'Compact tractors', 'Tracteurs compacts', 'Kompakttraktoren',
      'Wendbaar en sterk, voor grote tuinen, weides en kleine landbouw.', 'Agile and strong, for large gardens, paddocks and small farms.', 'Maniables et robustes, pour grands jardins, prairies et petite agriculture.', 'Wendig und stark, für große Gärten, Weiden und kleine Landwirtschaft.', 'img/kubota.jpg'),
    m('zitmaaiers', 'tuin', ['John Deere', 'Solo by AL-KO', 'Stiga'],
      'Zitmaaiers', 'Ride-on mowers', 'Tondeuses autoportées', 'Aufsitzmäher',
      'Comfortabel grote gazons maaien, met of zonder opvangbak.', 'Mow large lawns in comfort, with or without a grass collector.', 'Tondre confortablement de grandes pelouses, avec ou sans bac.', 'Große Rasenflächen bequem mähen, mit oder ohne Fangkorb.'),
    m('zitmaaiers-zero-turn', 'tuin', ['Cramer', 'John Deere', 'Scag', 'Stiga'],
      'Zitmaaiers zero-turn', 'Zero-turn mowers', 'Tondeuses zero-turn', 'Zero-Turn-Mäher',
      'Draaien op hun plaats: snel en precies rond bomen en borders.', 'Turn on the spot: fast and precise around trees and borders.', 'Tournent sur place : rapides et précises autour des arbres et massifs.', 'Drehen auf der Stelle: schnell und präzise um Bäume und Beete.'),
    m('frontmaaiers', 'tuin', ['Grillo', 'Stiga'],
      'Frontmaaiers', 'Front mowers', 'Tondeuses frontales', 'Frontmäher',
      'Maaidek vooraan, ideaal om onder struiken en tot tegen randen te maaien.', 'Deck at the front, ideal for mowing under shrubs and up to edges.', 'Plateau à l’avant, idéal sous les arbustes et le long des bordures.', 'Mähwerk vorne, ideal unter Sträuchern und bis an Kanten.'),
    m('robotmaaiers', 'tuin', ['Cramer', 'Stiga'],
      'Robotmaaiers', 'Robotic mowers', 'Robots tondeuses', 'Mähroboter',
      'Maait zelfstandig en stil. Stef helpt bij plaatsing en installatie.', 'Mows on its own, quietly. Stef helps with setup and installation.', 'Tond seul et en silence. Stef aide à l’installation.', 'Mäht selbstständig und leise. Stef hilft bei der Installation.'),
    m('hakselaars', 'tuin', ['Bugnot', 'Eliet', 'Negri'],
      'Hakselaars', 'Wood chippers', 'Broyeurs de branches', 'Häcksler',
      'Snoeihout en takken snel omzetten in bruikbare houtsnippers.', 'Turn prunings and branches into useful wood chips.', 'Transformez branches et tailles en copeaux utiles.', 'Schnittholz und Äste schnell zu Hackschnitzeln verarbeiten.'),
    m('verticuteermachines', 'tuin', ['Eliet', 'GTM', 'Sabo'],
      'Verticuteermachines', 'Scarifiers', 'Scarificateurs', 'Vertikutierer',
      'Mos en vilt uit het gazon halen voor een gezond grasveld.', 'Remove moss and thatch for a healthy lawn.', 'Retirer mousse et feutre pour une pelouse saine.', 'Moos und Filz entfernen für einen gesunden Rasen.'),
    m('motoculteurs-en-hakfrezen', 'tuin', ['BCS', 'Bertolini', 'Gamo'],
      'Motoculteurs en hakfrezen', 'Tillers and cultivators', 'Motoculteurs et motobineuses', 'Einachser und Motorhacken',
      'Grond losmaken en de moestuin klaarleggen.', 'Loosen soil and prepare the vegetable garden.', 'Ameublir le sol et préparer le potager.', 'Boden lockern und den Gemüsegarten vorbereiten.'),
    m('stronkenfrezen', 'tuin', ['FSI'],
      'Stronkenfrezen', 'Stump grinders', 'Rogneuses de souches', 'Stubbenfräsen',
      'Boomstronken tot onder het maaiveld wegfrezen.', 'Grind tree stumps away below ground level.', 'Éliminer les souches sous le niveau du sol.', 'Baumstümpfe bis unter Bodenniveau wegfräsen.'),
    m('loopmaaiers-op-benzine', 'tuin', ['Stiga'],
      'Loopmaaiers op benzine', 'Petrol lawn mowers', 'Tondeuses thermiques', 'Benzin-Rasenmäher',
      'Krachtig en betrouwbaar, ook voor hoog of nat gras.', 'Powerful and reliable, even in long or wet grass.', 'Puissantes et fiables, même dans l’herbe haute ou humide.', 'Kraftvoll und zuverlässig, auch bei hohem oder nassem Gras.'),
    m('loopmaaiers-op-accu', 'tuin', ['Cramer', 'Pellenc', 'Sabo', 'Stiga'],
      'Loopmaaiers op accu', 'Battery lawn mowers', 'Tondeuses à batterie', 'Akku-Rasenmäher',
      'Stil, licht en zonder uitlaatgassen. Eén accu voor meerdere toestellen.', 'Quiet, light and emission-free. One battery for several tools.', 'Silencieuses, légères et sans émissions. Une batterie pour plusieurs outils.', 'Leise, leicht und abgasfrei. Ein Akku für mehrere Geräte.'),
    m('ontmollers', 'tuin', ['Mauki'],
      'Ontmollers', 'Mole repellers', 'Anti-taupes', 'Maulwurfvertreiber',
      'Mollen diervriendelijk uit gazon en tuin weren.', 'Keep moles out of lawn and garden, animal-friendly.', 'Éloigner les taupes du jardin sans leur nuire.', 'Maulwürfe tierfreundlich aus Rasen und Garten fernhalten.'),
    m('kettingzagen', 'tuin', ['Cramer', 'Echo', 'Pellenc', 'Volpi'],
      'Kettingzagen', 'Chainsaws', 'Tronçonneuses', 'Kettensägen',
      'Op benzine of accu, voor brandhout, snoeiwerk en vellen.', 'Petrol or battery, for firewood, pruning and felling.', 'Thermiques ou à batterie, pour bois de chauffage, élagage et abattage.', 'Benzin oder Akku, für Brennholz, Schnitt und Fällung.'),
    m('zaagmachines', 'tuin', ['Balfor'],
      'Zaagmachines', 'Saw benches', 'Scies à bûches', 'Brennholzsägen',
      'Brandhout snel en veilig op maat zagen.', 'Cut firewood to length quickly and safely.', 'Couper le bois de chauffage à longueur, vite et en sécurité.', 'Brennholz schnell und sicher auf Länge sägen.'),
    m('houtklievers', 'tuin', ['Balfor', 'GTM'],
      'Houtklievers', 'Log splitters', 'Fendeuses de bûches', 'Holzspalter',
      'Zonder moeite stammen klieven tot haardhout.', 'Split logs into firewood without the effort.', 'Fendre les bûches sans effort.', 'Stämme mühelos zu Kaminholz spalten.'),
    m('heggenschaar-op-accu', 'tuin', ['Cramer', 'Echo'],
      'Heggenschaar op accu', 'Battery hedge trimmers', 'Taille-haies à batterie', 'Akku-Heckenscheren',
      'Strakke hagen, stil en zonder snoer, ook met verlengsteel.', 'Neat hedges, quiet and cordless, also with extension pole.', 'Des haies nettes, sans fil et silencieux, aussi sur perche.', 'Saubere Hecken, leise und kabellos, auch mit Verlängerung.'),
    m('snoeizagen', 'tuin', ['Pellenc', 'Volpi'],
      'Snoeizagen', 'Pruning saws', 'Scies d’élagage', 'Astsägen',
      'Voor dikkere takken in boomgaard, haag en bos.', 'For thicker branches in orchard, hedge and woodland.', 'Pour les grosses branches au verger, dans la haie ou en forêt.', 'Für dickere Äste in Obstgarten, Hecke und Wald.'),
    m('snoeischaren', 'tuin', ['ARS', 'Pellenc', 'Volpi'],
      'Snoeischaren', 'Pruning shears', 'Sécateurs', 'Gartenscheren',
      'Handmatig of elektrisch, voor nauwkeurig snoeiwerk.', 'Manual or electric, for precise pruning.', 'Manuels ou électriques, pour une taille précise.', 'Manuell oder elektrisch, für präzisen Schnitt.'),
    m('bladzuigers-op-2-of-4takt', 'tuin', ['Billy Goat', 'Echo', 'Remarc'],
      'Bladzuigers op 2- of 4takt', 'Petrol leaf vacuums', 'Aspirateurs de feuilles thermiques', 'Benzin-Laubsauger',
      'Grote hoeveelheden blad opzuigen en verkleinen.', 'Collect and shred large volumes of leaves.', 'Aspirer et broyer de grandes quantités de feuilles.', 'Große Laubmengen aufsaugen und zerkleinern.'),
    m('bladzuigers-op-accu', 'tuin', ['Cramer', 'Remarc'],
      'Bladzuigers op accu', 'Battery leaf vacuums', 'Aspirateurs de feuilles à batterie', 'Akku-Laubsauger',
      'Stil bladeren opruimen, zonder snoer of uitlaatgassen.', 'Clear leaves quietly, no cord or fumes.', 'Ramasser les feuilles en silence, sans fil ni émissions.', 'Leise Laub entfernen, ohne Kabel und Abgase.'),
    m('bladblazers-op-2-of-4takt', 'tuin', ['Billy Goat', 'Remarc'],
      'Bladblazers op 2- of 4takt', 'Petrol leaf blowers', 'Souffleurs thermiques', 'Benzin-Laubbläser',
      'Krachtige blazers voor grote oppervlakken en paden.', 'Powerful blowers for large areas and paths.', 'Souffleurs puissants pour grandes surfaces et allées.', 'Kraftvolle Bläser für große Flächen und Wege.'),
    m('bladblazers-op-accu', 'tuin', ['Cramer', 'Echo', 'Pellenc'],
      'Bladblazers op accu', 'Battery leaf blowers', 'Souffleurs à batterie', 'Akku-Laubbläser',
      'Licht en stil, ideaal rond huis en terras.', 'Light and quiet, ideal around house and patio.', 'Légers et silencieux, idéals autour de la maison.', 'Leicht und leise, ideal rund ums Haus.'),
    m('palenrammers', 'tuin', ['Tiger'],
      'Palenrammers', 'Post drivers', 'Enfonce-pieux', 'Pfahlramme',
      'Afsluitingspalen snel en recht de grond in.', 'Drive fence posts in quickly and straight.', 'Enfoncer les piquets de clôture vite et droit.', 'Zaunpfähle schnell und gerade einschlagen.'),
    m('sproeitoestellen', 'tuin', ['M.M. Spray', 'Solo by AL-KO'],
      'Sproeitoestellen', 'Sprayers', 'Pulvérisateurs', 'Sprühgeräte',
      'Rugspuiten en sproeiers voor tuin, boomgaard en paden.', 'Backpack and hand sprayers for garden, orchard and paths.', 'Pulvérisateurs à dos et à main pour jardin, verger et allées.', 'Rücken- und Handsprühgeräte für Garten, Obstgarten und Wege.'),

    // ---------- Reinigingsmachines ----------
    m('schoonmaakmachines', 'reiniging', ['Hizero', 'Kärcher'],
      'Schoonmaakmachines', 'Cleaning machines', 'Machines de nettoyage', 'Reinigungsmaschinen',
      'Hogedrukreinigers, zuigers en vloerreinigers voor elk werk.', 'Pressure washers, vacuums and floor cleaners for every job.', 'Nettoyeurs haute pression, aspirateurs et laveuses pour chaque tâche.', 'Hochdruckreiniger, Sauger und Bodenreiniger für jede Aufgabe.'),
    m('veegmachines-voor-buiten', 'reiniging', ['Remarc'],
      'Veegmachines voor buiten', 'Outdoor sweepers', 'Balayeuses d’extérieur', 'Kehrmaschinen für außen',
      'Erven, opritten en parkings snel proper.', 'Clean yards, driveways and car parks in no time.', 'Cours, allées et parkings propres en un rien de temps.', 'Höfe, Einfahrten und Parkplätze schnell sauber.'),

    // ---------- Bouw ----------
    m('stroomgroepen', 'bouw', ['Contimac', 'E-Power'],
      'Stroomgroepen', 'Generators', 'Groupes électrogènes', 'Stromerzeuger',
      'Betrouwbare stroom op de werf, het erf of bij een panne.', 'Reliable power on site, in the yard or during an outage.', 'Du courant fiable sur chantier, à la ferme ou en cas de panne.', 'Zuverlässiger Strom auf der Baustelle, am Hof oder bei Ausfall.'),
    m('compressors', 'bouw', ['Contimac'],
      'Compressors', 'Compressors', 'Compresseurs', 'Kompressoren',
      'Perslucht voor gereedschap, banden en reinigen.', 'Compressed air for tools, tyres and cleaning.', 'Air comprimé pour outils, pneus et nettoyage.', 'Druckluft für Werkzeug, Reifen und Reinigung.'),
    m('waterpompen', 'bouw', ['Contimac'],
      'Waterpompen', 'Water pumps', 'Pompes à eau', 'Wasserpumpen',
      'Water wegpompen of verplaatsen, ook bij wateroverlast.', 'Pump or move water, also during flooding.', 'Pomper ou déplacer l’eau, aussi en cas d’inondation.', 'Wasser abpumpen oder fördern, auch bei Überschwemmung.'),
    m('verwarmingstoestellen', 'bouw', ['Airrex', 'Remko'],
      'Verwarmingstoestellen', 'Heaters', 'Appareils de chauffage', 'Heizgeräte',
      'Mobiele warmte voor werkplaats, loods en werf.', 'Mobile heat for workshop, shed and site.', 'Chauffage mobile pour atelier, hangar et chantier.', 'Mobile Wärme für Werkstatt, Halle und Baustelle.'),
    m('ventilators', 'bouw', ['Remko'],
      'Ventilators', 'Fans', 'Ventilateurs', 'Ventilatoren',
      'Verkoeling en luchtcirculatie in grote ruimtes.', 'Cooling and air circulation in large spaces.', 'Rafraîchissement et circulation d’air dans les grands espaces.', 'Kühlung und Luftumwälzung in großen Räumen.'),
    m('bouwdrogers', 'bouw', ['Remko'],
      'Bouwdrogers', 'Dehumidifiers', 'Déshumidificateurs', 'Bautrockner',
      'Vocht uit nieuwbouw, kelders en ruimtes na waterschade halen.', 'Dry out new builds, cellars and rooms after water damage.', 'Assécher constructions neuves, caves et pièces après un dégât des eaux.', 'Neubauten, Keller und Räume nach Wasserschäden trocknen.'),

    // ---------- Gereedschap ----------
    m('handgereedschap', 'gereedschap', ['Licota', 'Sonic', 'Wemmeltools'],
      'Handgereedschap', 'Hand tools', 'Outillage à main', 'Handwerkzeug',
      'Degelijk gereedschap voor werkplaats en onderhoud.', 'Solid tools for workshop and maintenance.', 'Des outils solides pour l’atelier et l’entretien.', 'Solides Werkzeug für Werkstatt und Wartung.'),

    // ---------- Aanbouwdelen ----------
    m('hakselaar', 'aanbouw', ['Negri'],
      'Hakselaar', 'PTO wood chipper', 'Broyeur sur prise de force', 'Zapfwellen-Häcksler',
      'Grote hoeveelheden snoeihout, aangedreven door de tractor.', 'Large volumes of prunings, driven by the tractor.', 'De grandes quantités de branches, entraîné par le tracteur.', 'Große Mengen Schnittholz, vom Traktor angetrieben.', 'img/hakselaar.jpg'),
    m('bakfrezen', 'aanbouw', ['Caroni'],
      'Bakfrezen', 'Rotary tillers', 'Fraises rotatives', 'Bodenfräsen',
      'Grond zaaiklaar leggen achter de compacte tractor.', 'Prepare a seedbed behind the compact tractor.', 'Préparer le lit de semence derrière le tracteur compact.', 'Saatfertiger Boden hinter dem Kompakttraktor.', 'img/frees.jpg'),
    m('rotoreg', 'aanbouw', ['R2 Rinaldi'],
      'Rotoreg', 'Power harrows', 'Herses rotatives', 'Kreiseleggen',
      'Fijne, vlakke zaaibedden zonder de grond te keren.', 'Fine, level seedbeds without turning the soil.', 'Des lits de semence fins et plats sans retourner le sol.', 'Feine, ebene Saatbetten ohne den Boden zu wenden.'),
    m('gazonmaaiers', 'aanbouw', ['Caroni'],
      'Gazonmaaiers', 'Lawn mower decks', 'Plateaux de tonte', 'Rasenmähwerke',
      'Een mooi gazon maaien met de compacte tractor.', 'Mow a fine lawn with the compact tractor.', 'Une belle pelouse avec le tracteur compact.', 'Schöner Rasen mit dem Kompakttraktor.'),
    m('bermmaaiers', 'aanbouw', ['Marolin'],
      'Bermmaaiers', 'Verge mowers', 'Faucheuses d’accotement', 'Böschungsmäher',
      'Bermen, taluds en ruigte in één werkgang.', 'Verges, banks and rough ground in one pass.', 'Accotements, talus et friches en un passage.', 'Böschungen, Ränder und Brachen in einem Arbeitsgang.'),
    m('overtopfrezen', 'aanbouw', ['R2 Rinaldi'],
      'Overtopfrezen', 'Reverse rotary tillers', 'Enfouisseurs de pierres', 'Umkehrfräsen',
      'Stenen en resten onderwerken voor een strak zaaibed.', 'Bury stones and debris for a clean seedbed.', 'Enfouir pierres et résidus pour un lit de semence net.', 'Steine und Reste einarbeiten für ein sauberes Saatbett.'),
    m('maaiarmen', 'aanbouw', ['Marolin'],
      'Maaiarmen', 'Reach-arm mowers', 'Épareuses', 'Auslegemäher',
      'Sloten, hagen en hoge bermen veilig bereiken.', 'Reach ditches, hedges and high verges safely.', 'Atteindre fossés, haies et talus hauts en sécurité.', 'Gräben, Hecken und hohe Böschungen sicher erreichen.'),
    m('sproeimachines', 'aanbouw', ['M.M. Spray'],
      'Sproeimachines', 'Mounted sprayers', 'Pulvérisateurs portés', 'Anbauspritzen',
      'Gewasbescherming of onkruidbestrijding vanop de tractor.', 'Crop protection or weed control from the tractor.', 'Protection des cultures ou désherbage depuis le tracteur.', 'Pflanzenschutz oder Unkrautbekämpfung vom Traktor aus.'),
    m('houtklievers-aanbouw', 'aanbouw', ['Balfor'],
      'Houtklievers', 'PTO log splitters', 'Fendeuses sur prise de force', 'Zapfwellen-Holzspalter',
      'Krachtig klieven met de hydrauliek van de tractor.', 'Powerful splitting with the tractor’s hydraulics.', 'Fendre puissamment avec l’hydraulique du tracteur.', 'Kraftvoll spalten mit der Traktorhydraulik.'),
    m('aardappelrooier', 'aanbouw', ['Bomet'],
      'Aardappelrooier', 'Potato digger', 'Arracheuse de pommes de terre', 'Kartoffelroder',
      'Aardappelen oogsten zonder ze te beschadigen.', 'Harvest potatoes without damaging them.', 'Récolter les pommes de terre sans les abîmer.', 'Kartoffeln ernten, ohne sie zu beschädigen.'),
    m('mestverspreider', 'aanbouw', ['Wallenstein Equipment'],
      'Mestverspreider', 'Manure spreader', 'Épandeur de fumier', 'Miststreuer',
      'Stalmest of compost gelijkmatig over het perceel verdelen.', 'Spread manure or compost evenly over the field.', 'Épandre fumier ou compost de manière uniforme.', 'Mist oder Kompost gleichmäßig verteilen.'),
    m('kunstmeststrooiers', 'aanbouw', ['Faza'],
      'Kunstmeststrooiers', 'Fertiliser spreaders', 'Épandeurs d’engrais', 'Düngerstreuer',
      'Kunstmest, zaad of strooizout nauwkeurig verdelen.', 'Spread fertiliser, seed or road salt accurately.', 'Épandre engrais, semences ou sel avec précision.', 'Dünger, Saatgut oder Streusalz präzise verteilen.')
  ];

  function cat(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i]; }
  function zoek(slug) { for (var i = 0; i < AANBOD.length; i++) if (AANBOD[i].slug === slug) return AANBOD[i]; }
  function merken() {
    var s = {};
    AANBOD.forEach(function (a) { a.merken.forEach(function (mk) { s[mk] = (s[mk] || 0) + 1; }); });
    return Object.keys(s).sort(function (a, b) { return a.localeCompare(b, 'nl', { sensitivity: 'base' }); });
  }
  return { CATS: CATS, AANBOD: AANBOD, cat: cat, zoek: zoek, merken: merken };
})();
