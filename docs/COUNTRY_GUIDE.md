# Adding pages for Bolivia, Uruguay, Venezuela and El Salvador

Read `content/SCHEMA.md` first: the file shape, the block types, the honesty rules and the Casa-Libre link rules are the
same for every country. This file adds what changes per country. `npm run check` enforces most of it.

## Where things go

| Country | Folder | URL of a page | Home (`home.js`) | Casa-Libre site |
|---|---|---|---|---|
| Paraguay | `content/pages/` (listed in `lib/site.js`) | `/<slug>/` | `/` | https://casa-libre.com.py |
| Bolivia | `content/pages/bo/` | `/bolivia/<slug>/` | `/bolivia/` | https://casa-libre.com.bo |
| Uruguay | `content/pages/uy/` | `/uruguay/<slug>/` | `/uruguay/` | https://uy.casa-libre.com |
| Venezuela | `content/pages/ve/` | `/venezuela/<slug>/` | `/venezuela/` | https://casa-libre.com.ve |
| El Salvador | `content/pages/sv/` | `/el-salvador/<slug>/` | `/el-salvador/` | https://sv.casa-libre.com |

**Adding a page = adding one file to the country folder.** No other file changes: the menu, `/<pais>/guias/`, the sitemap,
llms.txt, hreflang and the lead form pick it up. The file name is the slug (`vender-casa-heredada-bolivia.js` →
`/bolivia/vender-casa-heredada-bolivia/`). Files starting with `_` are ignored (drafts).

Country data (name, currency, phone rules, form cities, notary term, registry, voice, the Casa-Libre paths checked live)
lives in `lib/countries.js`. Interface text per voice lives in `lib/voice.js`.

## File format

Same as SCHEMA.md, plus these fields (they live in `lib/site.js` for Paraguay; for other countries the file carries them):

```js
export default {
  slug: 'vender-casa-heredada-bolivia',  // = the file name; '' only in home.js
  group: 'Papeles y trámites',            // one of GROUPS in lib/site.js (the /guias/ index sections)
  nav: 'Herencia',                        // optional: 2 words, shows the page in the header menu (keep the menu to ~6)
  order: 10,                              // optional: order inside its group
  equivalentOf: 'vender-casa-heredada-paraguay', // optional: the Paraguay slug this page is the local version of (hreflang)
  city: 'la-paz', cityName: 'La Paz',     // city pages only (adds the city listings button)
  rental: true,                           // optional: a rental page whose slug does not start with alquiler-de-casas-en-
  title, h1, description, navLabel, blurb, published, updated, review, reviewNote,
  answer, summary, cta, sections, faq, closing, related,   // as in SCHEMA.md; related = slugs of this country only
};
```

`equivalentOf` only when the page really answers the same question as the Paraguay page (same topic, localised). Never
for a page that exists only in one country. A country home is automatically the equivalent of the Paraguay home.

## Casa-Libre links (hard)

- **Only that country's Casa-Libre.** A page in `bo/` links only `https://casa-libre.com.bo`, and so on. A link to another
  country's Casa-Libre fails the check. Write the URL without UTM tags: the site adds them (`utm_campaign=seo-funnel-<code>`).
- **Only paths checked live** (`CL_PATHS` and `CL_CITY_PATHS` in `lib/countries.js`, checked 2026-11-13). Today every
  country has: `/`, `/publicar`, `/vender`, `/empresas`, `/descargar`, `/propiedades`, `/comprar`, `/alquilar`,
  `/como-funciona`, `/preguntas-frecuentes`, `/nuestra-historia`, `/administracion-de-propiedades`, `/guias`, and the
  8 Casa-Libre guides `/guias/como-vender-mi-casa`, `/guias/vender-sin-inmobiliaria`, `/guias/cuanto-vale-mi-propiedad`,
  `/guias/documentos-para-vender-un-inmueble`, `/guias/impuestos-y-gastos-al-vender`, `/guias/gastos-al-comprar-una-casa`,
  `/guias/como-alquilar-mi-propiedad`, `/guias/comprar-primera-casa`.
- **City listings:** a path page (`/venta/casas/<city>`) only if it is in `CL_CITY_PATHS` (those pages exist only while the
  city has listings). Otherwise the filtered search, which works for any city:
  `https://casa-libre.com.bo/propiedades?op=venta&amp;type=casa&amp;q=La%20Paz` (in HTML write `&amp;`; in `cta.href`,
  `closing.href` and `casalibre.href` a plain `&`). `op` = venta | alquiler; `type` = casa | depto | terreno | duplex |
  comercial | oficina | deposito; `q` = the city name with its accents, URL-encoded (`Potos%C3%AD`).
- **A new path?** Check it first: `bash scripts/check-cl-paths.sh bo /venta/casas/sucre` (polite, read-only), then add the
  ones that answer 200 to `lib/countries.js`.
- **Caps:** 2 to 4 Casa-Libre links in the body (inline links + the button of the one `casalibre` block), at most 1
  `casalibre` block, none in `answer` or `summary`. The template adds 3 (header, footer, sticky bar), the city button adds 1
  on city pages, `cta` and `closing` add 2: every page stays at 10 or fewer.
- **Anchors:** link the brand (`... en <a href="…">Casa-Libre</a>`) or a plain phrase. No keyword anchors.
- **Rental pages link rental destinations** (`/alquilar`, `/alquiler/...`, `op=alquiler`, `/administracion-de-propiedades`,
  `/guias/como-alquilar-mi-propiedad`, `/publicar`); sale pages link sale destinations. Rental = slug starts with
  `alquiler-de-casas-en-`, or `rental: true`.
- **Internal links** go to pages of the same country (`/bolivia/<slug>/`, `/bolivia/guias/`) or to the shared info pages
  (`/privacidad/`, `/contacto/`, `/quienes-somos/`). Never to Paraguay pages.

## What is true about Casa-Libre outside Paraguay

Use this description, word for word, at most once per page (the Paraguay sentence says "de mayor crecimiento en
Paraguay": never use that claim for another country):

> Casa-Libre es un marketplace inmobiliario donde inmobiliarias, agentes y propietarios publican casas, departamentos y
> terrenos gratis, con extras pagos opcionales. Los interesados contactan directo por WhatsApp y no hay comisión sobre la
> venta. Está en la web y en apps para iPhone y Android.

(Uruguay, Venezuela and El Salvador: "apartamentos" instead of "departamentos".) Everything else in SCHEMA.md's honesty
rules applies: no claims about how many listings Casa-Libre has overall, no "the largest", no promises of a sale, a price
or a time. (A city page may quote the city's counts and prices from its market file, see "Market data" below.)

## Country facts and words

| | Bolivia | Uruguay | Venezuela | El Salvador |
|---|---|---|---|---|
| Voice | tú (Puedes, publica, revisa) | voseo (Podés, publicá, revisá) | tú | usted (Puede, publique, revise) |
| Notary | notario de fe pública | escribano | notario / notaría (and the Registro) | notario (a lawyer) |
| Registry | Derechos Reales (Folio Real, certificado alodial) | Registro de la Propiedad, Sección Inmobiliaria | Registro Público inmobiliario (SAREN) | Centro Nacional de Registros (CNR) |
| Flat | departamento | apartamento | apartamento | apartamento |
| Money | bolivianos; many sales in dólares | sales in dólares; pesos uruguayos | sales in dólares; bolívar official | dólar (legal tender) |
| Phone (form) | +591, 8 digits | +598, 09X XXX XXX | +58, 04XX XXX XXXX | +503, 8 digits |

The checker fails "escribano" on BO/VE/SV pages and "notario/notaría" on UY pages, "apartamento" on BO pages, and warns on
voseo forms in BO/VE/SV. Never name another portal, agency network, newspaper or social network (SCHEMA.md list, plus
the local ones in the checker). Public bodies the reader must deal with may be named, never linked.

**Facts:** only what you are sure of, with a date ("al 13 de noviembre de 2026"). Every tax rate, fee and procedure goes
in `reviewNote` for a local notario/escribano or lawyer to check, and the page keeps `review: 'pending'`. No invented
prices: every price, count, m² value or yield comes from the country's market file (next section), nowhere else.

## Market data (`content/data/<cc>-market.json`)

Each country has a Casa-Libre listings snapshot with the same shape as `py-market.json`: `bo-market.json`,
`uy-market.json`, `ve-market.json`, `sv-market.json` (13 Nov 2026, built by `scripts/build-market.mjs`; re-run it to
refresh, it writes both funnel sites). Per city: `for_sale` / `for_rent` counts by type, price quartiles in USD per
type (`casas_venta_price`, `departamentos_venta_price`, `terrenos_venta_price`, `casas_alquiler_price_month`,
`departamentos_alquiler_price_month`), `terreno_usd_per_m2_median`, `casas_venta_median_bedrooms`, the gross rent
yields and `casa_libre_pages` (the Casa-Libre city pages that answered 200; they are also in `CL_CITY_PATHS`).
`departamentos` in the file = departamentos and apartamentos (write "apartamentos" in UY/VE/SV). `null` = fewer
than 5 listings with a price: say there is too little data, never fill the gap.

Cities with data on 13 Nov 2026 (a city needs 15+ live listings, as in Paraguay):

| Country | Live listings | Cities (sale + rent listings) |
|---|---|---|
| Bolivia | 388 | `santa-cruz-de-la-sierra` (253), `cochabamba` (32), `la-paz` (30) |
| Uruguay | 514 | `montevideo` (337), `punta-del-este` (25), `maldonado` (24), `ciudad-de-la-costa` (23) |
| Venezuela | 19 | none: no city page with numbers |
| El Salvador | 98 | none: no city page with numbers |

**How a country city page uses it.** The page file imports the loader and builds its numbers from it, so they can
only come from the snapshot:

```js
import { cityMarket, cityMarketTable, snapshotDateEs } from '../../../lib/market.js';
const m = cityMarket('bo', 'la-paz');          // null when the city has no data -> no city page
export default {
  slug: 'vender-casa-en-la-paz', city: 'la-paz', cityName: 'La Paz', /* ... */
  sections: [{ h2: '...', blocks: [
    cityMarketTable('bo', 'la-paz'),             // ready { t: 'table' } block, rows with no data left out
    { t: 'p', html: `... una mediana de USD ${m.departamentos_venta_price.median_usd.toLocaleString('es')} ...` },
  ] }],
};
```

`marketFor(cc)` gives the whole file, `marketCities(cc)` the city slugs, `localPerUsd(cc)` the file's rate,
`fmtUsd(n)` formats "USD 112.500". `cityMarketTable(cc, slug, { rent: false })` leaves the rent rows out.

Rules:
- **City pages only for cities in the file.** `vender-casa-en-<slug>` for any city listed above;
  `alquiler-de-casas-en-<slug>` only when the city has a rent median (`casas_alquiler_price_month` or
  `departamentos_alquiler_price_month` not null): Santa Cruz de la Sierra, La Paz, Montevideo, Punta del Este.
  `city` = the slug in the file, `cityName` = its `name`.
- Always say what the numbers are: "según las propiedades publicadas en Casa-Libre al 13 de noviembre de 2026 (precios
  pedidos, no precios de cierre)". Never call it "el mercado" without that qualifier. Mention the number of listings
  behind a median when it is small (under 10).
- Prices in US dollars as in the file. Uruguay: pesos only as "aprox." with `uyu_per_usd`. Bolivia: do not convert
  (Casa-Libre's rate `bob_per_usd` 6.89 and the parallel market rate differ a lot). Venezuela: no bolívar figures.
- Casa-Libre links on a city page: only paths in that city's `casa_libre_pages` (or the filtered search).
- Comparisons between cities only with cities in the same file.

## The sample pages (one per country, done)

`bo/home.js`, `uy/home.js`, `ve/home.js`, `sv/home.js`: "Cómo vender mi casa en <país>", written from that country's
procedure (not the Paraguay page with names swapped). Use them as the model for length, tone and link placement.

## Content plan: which Paraguay topics to localise

Write each as a new text for the country (its own procedure, words and examples). Do not translate the Paraguay page
sentence by sentence. Suggested slugs end with the country (`-bolivia`, `-uruguay`, `-venezuela`, `-el-salvador`);
set `equivalentOf` to the Paraguay slug.

**All four countries (selling):** `donde-publicar-casa-en-venta-<pais>`, `como-vender-mi-casa-sin-inmobiliaria`
(slug may stay generic), `casa-en-venta-por-dueno-<pais>`, `como-vender-un-terreno-<pais>`,
`como-vender-un-departamento-bolivia` / `como-vender-un-apartamento-<uruguay|venezuela|el-salvador>`,
`como-poner-mi-casa-en-venta-por-internet`, `fotos-para-vender-una-casa`, `anuncio-para-vender-una-casa`,
`como-mostrar-una-casa-a-compradores`, `por-que-no-se-vende-mi-casa`, `vendo-casa-urgente` (these six are general:
localise examples, currency and words; keep them clearly different from the Paraguay text).

**Papers and taxes (country law, check every fact):**
- `requisitos-para-vender-una-casa-<pais>` (BO: Folio Real, alodial, IPBI; UY: títulos, certificados, BPS; VE: documento
  registrado, solvencias, cédula catastral; SV: CNR, solvencia municipal).
- `vender-casa-heredada-<pais>` (BO declaratoria de herederos; UY certificado de resultancias de autos; VE declaración
  sucesoral SENIAT; SV aceptación de herencia).
- The pre-contract: BO minuta and anticipo; UY `compromiso-de-compraventa-uruguay` and seña; VE
  `opcion-de-compra-venezuela`; SV `promesa-de-venta-el-salvador`.
- `vender-casa-con-hipoteca-<pais>`, `contrato-de-compraventa-inmueble-<pais>`.
- The notary: BO `cuanto-cobra-un-notario-bolivia`; UY `cuanto-cobra-un-escribano-uruguay`; VE notaría and Registro fees;
  SV `cuanto-cobra-un-notario-el-salvador`.
- Taxes when selling: BO IMT; UY ITP and IRPF; VE anticipo de ISLR; SV transfer tax (paid by the buyer) and capital gains.
- The yearly property tax: BO IPBI; UY contribución inmobiliaria (and Primaria); VE impuesto inmobiliario urbano;
  SV has no yearly property tax on homes (municipal tasas only): write that page only if it answers a real search.
- `gastos-al-vender-una-casa-<pais>`, `quien-paga-la-escritura-<pais>`, `tasacion-de-inmuebles-<pais>`.

**Renting (country law differs a lot; check every fact):** `como-alquilar-mi-casa-<pais>`, `contrato-de-alquiler-<pais>`,
`cuanto-cobrar-de-alquiler-<pais>`, `donde-publicar-un-alquiler-gratis-<pais>`; Uruguay also
`garantia-de-alquiler-uruguay` (rental guarantees are a big topic there). These are rental pages: rental links only.

**City pages (only cities with market data):** the cities in the country's market file (see "Market data"): today
BO Santa Cruz de la Sierra, Cochabamba, La Paz; UY Montevideo, Punta del Este, Maldonado, Ciudad de la Costa. Venezuela
and El Salvador have no city with enough listings yet: no city pages there until a refreshed file lists one. Slugs
`vender-casa-en-<city>` and `alquiler-de-casas-en-<city>` (these prefixes turn on the city button and the rental rules).
Each city page needs real local content (zones and barrios, distances, the municipality, who buys or rents there) plus
the city's numbers from the file: a page that is another city's text with the name swapped must not exist. Numbers only
from the snapshot (`lib/market.js`).

**Skip (Paraguay only, no equivalent):** `terreno-del-indert-se-puede-vender` (INDERT), `condicion-de-dominio-paraguay`,
`como-titular-un-terreno-paraguay` (Paraguayan titling; Bolivia's INRA saneamiento would be its own topic, later),
`iva-del-alquiler-paraguay` and `impuesto-inmobiliario-paraguay` (replace with the country's own tax pages above), the
pages built on `py-market.json` (`cuanto-cuesta-una-casa-en-paraguay`, `cuanto-cuesta-un-terreno-en-paraguay`,
`cuanto-cuesta-un-departamento-en-asuncion`, `cuanto-cuesta-un-alquiler-en-paraguay`, the Paraguay city pages; a country's own versions
are allowed now that it has a market file, built on that file only), and `sena-de-trato-paraguay` (covered by the pre-contract page of each country).

## Before you finish

1. `npm run check`: 0 errors (warnings are advice; fix the voseo ones).
2. `npm run build` passes.
3. Every fact you were not sure of is in `reviewNote`.
