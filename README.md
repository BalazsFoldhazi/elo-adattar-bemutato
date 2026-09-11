# Élő Adattár — bemutató

Vizuális bemutató egy tervről: hogyan lesz a szétszórt cetlikből, füzetekből és
fejben tartott határidőkből egy közös adattár, amibe a cég minden vezetője
**AI-nak diktál** — és ami minden elmondott mondattól okosabb lesz.

**Bemutató oldal:** https://balazsfoldhazi.github.io/elo-adattar-bemutato/

Kapcsolódó: [Vetőmag CRM bemutató](https://balazsfoldhazi.github.io/vetomag-crm-bemutato/)

---

## Mit mutat az oldal

| Szakasz | Tartalom |
|---|---|
| **Ma** | Cetli-tábla három állapottal: szétszórva → a CRM-mel félig rendben → a végcél |
| **A CRM** | Ami ma is fut: partner, ajánlat, teendő, túra — valódi képernyőképekkel |
| **A végcél** | Egy mondat útja az AI-nak diktálástól a rekeszekig, és egy év alatt növő adattár |
| **Külföldi partner** | A partnerkeresés útja a jelölttől a többéves szerződésig, szakmai kongresszusokkal |
| **Tervnaptár** | Az év öt sávban, a marketinggel együtt |
| **Vezetők** | A vezetői kör egy közös adattárba, láthatósági javaslattal |
| **Reggel** | 15 perces reggeli megbeszélés egy automatikusan összerakott lapból |
| **Lépcsők** | Három lépcsős elkészítési terv és bevezetés |

## Mi van ebben a tárolóban

| Fájl / mappa | Tartalom |
|---|---|
| `index.html` | A bemutató oldal (GitHub Pages ezt szolgálja ki) |
| `kepek/` | Képernyőképek a működő Vetőmag CRM-ből |

## Fontos

- **Ez terv, nem kész termék.** Ami ma is működik, az az oldalon „ma is” jelvényt
  kap; ami terv, az „terv” jelvényt.
- **A cetlik, a nevek, a mondatok és a számok szemléltető példák.** A növekvő
  adattár pontjai és a reggeli lap sorai nem valódi adatok.
- **A képernyőképeken anonimizált demó-adatok szerepelnek.**
- A cégre vonatkozó tények a nyilvános cégismertetőből, a 2026-os
  fajtakatalógusból és a lajtamag.hu oldalról, a kongresszusi dátumok a
  szervezők nyilvános közléséből származnak.

## Telepítés

Az oldal telepíthető alkalmazásként is fut, és telepítés után hálózat nélkül is megnyílik.

- **Android / Chrome:** a fejlécben megjelenő **Telepítés** gombbal, vagy a böngésző menüjéből.
- **iPhone / Safari:** **Megosztás → Főképernyőhöz adás**.

Új változat kiadásakor a `sw.js`-ben emeld a `VERZIO` számát, hogy a telepített alkalmazás is frissüljön.

## Helyi megnyitás

Az `index.html` önmagában megnyitható böngészőben. A képek relatív útvonalon
hivatkoznak, ezért a mappát egyben kell tartani.