export default {
  slug: 'cuanto-me-presta-el-banco-segun-mi-sueldo',
  title: 'Cuánto me presta el banco según mi sueldo: cómo calcularlo',
  h1: 'Cuánto me presta el banco según mi sueldo: cómo calcular tu crédito de vivienda',
  description: 'La fórmula para saber cuánto te presta el banco según tu sueldo en Bolivia: qué parte del ingreso va a la cuota, qué tasa usar y un ejemplo paso a paso.',
  navLabel: 'Cuánto me presta',
  blurb: 'La cuenta para pasar de tu sueldo a la cuota y de la cuota al monto del crédito de vivienda, con un ejemplo.',
  group: 'Comprar y financiar',
  order: 50,
  keyword: {
    phrase: 'cuanto me presta el banco segun mi sueldo',
    evidence: 'autocomplete gl=bo 2026-11-15: "cuanto me presta el banco segun mi sueldo", "cuanto me presta un banco para vivienda según mi sueldo", "cuanto me presta el banco para una casa", "como saber cuanto me presta el banco para una casa", "cuanto me presta el banco para vivienda", "simulador de crédito hipotecario bolivia", "simulador de crédito vivienda social bolivia", "credito de vivienda social bolivia requisitos".',
  },
  published: '2026-11-16',
  updated: '2026-11-16',
  review: 'pending',
  reviewNote: 'A Bolivian credit officer must check: (1) NOT CONFIRMED: the share of income accepted for the cuota. No ASFI text with a single cap for housing loans was found; the page says each entity sets it and gives 25% to 40% of net family income only as an order of magnitude (old press notes cite 25% of total ganado; an ASFI editorial mentions thresholds for the ratio amortización/ingreso familiar without the number). (2) DS 1842 maximum rates for vivienda de interés social (5.5% up to UFV 255,000; 6% to UFV 380,000; 6.5% to UFV 460,000; caps UFV 400,000 departamento / 460,000 casa) and that they exclude seguro de desgravamen: confirmed in the decree text, and DS 5562 of 2 March 2026 changed only art. 4, but confirm nothing later changed them. (3) Usual 80% financing / 20% aporte propio and the guarantee fund covering the aporte in VIS. (4) Variable rates tied to the TRE published by the Banco Central de Bolivia, and the TEAC disclosure. The example uses a hypothetical 6% rate, 30% share and Bs 8,000 income.',
  answer: 'En Bolivia, el banco te presta lo que tu ingreso puede pagar en cuotas, no un múltiplo fijo de tu sueldo. La cuenta tiene dos pasos. Primero, la cuota máxima: una parte de tu ingreso líquido familiar, menos las cuotas de otras deudas. Cada entidad fija esa parte según su política, dentro de las normas de ASFI. Segundo, el monto: esa cuota, la tasa de interés y el plazo dan el préstamo. Con una tasa hipotética de 6% anual a 20 años, cada Bs 1.000 de cuota mensual equivalen a unos Bs 139.600 de crédito. El tope final lo pone el avalúo de la vivienda.',
  summary: [
    'El banco calcula desde la cuota que puedes pagar, no desde un múltiplo del sueldo.',
    'No hay un porcentaje único del sueldo: lo fija cada entidad financiera, bajo las normas de ASFI.',
    'Se suma el ingreso de tu pareja y se restan las cuotas de otras deudas.',
    'En vivienda de interés social la tasa tiene un máximo regulado, de 5,5% a 6,5% anual según el valor de la vivienda.',
    'Con una tasa hipotética de 6% a 20 años, cada Bs 1.000 de cuota dan unos Bs 139.600 de préstamo.',
    'El monto también depende del avalúo: la entidad financia una parte del valor de la vivienda.',
  ],
  flow: ['Ingreso líquido', 'Cuota máxima', 'Tasa y plazo', 'Monto del crédito', 'Vivienda posible'],
  cta: {
    title: 'Con tu número, mira qué hay en venta',
    text: 'En Casa-Libre Bolivia filtras por ciudad y tipo de propiedad y le escribes al anunciante por WhatsApp. Buscar es gratis.',
    button: 'Ver propiedades en venta',
    href: 'https://casa-libre.com.bo/comprar',
  },
  sections: [
    {
      id: 'cuanto-presta-el-banco',
      h2: '¿Cuánto me presta el banco según mi sueldo?',
      blocks: [
        { t: 'p', html: 'Lo que tu ingreso alcanza a pagar en cuotas, hasta el tope que permita el avalúo de la vivienda. La tabla te da una idea rápida: cuánto préstamo sostiene cada Bs 1.000 de cuota mensual.' },
        {
          t: 'table',
          caption: 'Préstamo que se paga con una cuota fija de Bs 1.000 al mes',
          head: ['Plazo', 'Con tasa de 6% anual', 'Con tasa de 8% anual'],
          rows: [
            ['10 años', 'Bs 90.100', 'Bs 82.400'],
            ['15 años', 'Bs 118.500', 'Bs 104.600'],
            ['20 años', 'Bs 139.600', 'Bs 119.600'],
            ['25 años', 'Bs 155.200', 'Bs 129.600'],
            ['30 años', 'Bs 166.800', 'Bs 136.300'],
          ],
          note: 'Tasas hipotéticas, solo para hacer la cuenta. Cuota fija mensual, sin seguros. Cálculo propio con la fórmula de abajo, redondeado a la centena.',
        },
        { t: 'p', html: 'Si tu cuota posible es de Bs 2.500, multiplica la fila por 2,5. Cambia la tasa por la que te ofrezca tu entidad y el resultado cambia bastante: por eso conviene saber hacer la cuenta.' },
      ],
    },
    {
      id: 'la-formula',
      h2: 'Cómo saber cuánto me presta el banco para una casa: la fórmula',
      blocks: [
        { t: 'p', html: 'Son dos cuentas: de tu sueldo a la cuota, y de la cuota al préstamo.' },
        {
          t: 'steps',
          items: [
            { title: 'Suma el ingreso líquido', html: 'Lo que recibes en mano después de descuentos. Si compras con tu pareja, se suma su ingreso.' },
            { title: 'Saca la cuota máxima', html: 'Ingreso líquido por el porcentaje que acepte la entidad, menos las cuotas que ya pagas por otros créditos y tarjetas.' },
            { title: 'Pasa la tasa a mensual', html: 'Tasa anual dividida entre 12. Una tasa de 6% anual es 0,5% mensual, o 0,005.' },
            { title: 'Cuenta las cuotas', html: 'Años por 12. Veinte años son 240 cuotas.' },
            { title: 'Aplica la fórmula', html: '<strong>Préstamo = cuota × (1 − (1 + i)<em> elevado a −n</em>) ÷ i</strong>, donde <em>i</em> es la tasa mensual y <em>n</em> el número de cuotas. En una hoja de cálculo es la función de valor actual (VA).' },
          ],
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: de un ingreso de Bs 8.000 al monto del crédito',
          html: 'Ingreso, porcentaje y tasa hipotéticos, para que repitas la cuenta con tus números. Con i = 0,005 y n = 240, el factor de la fórmula es 139,58.',
          rows: [
            ['Ingreso líquido familiar', 'Bs 8.000'],
            ['Parte para cuotas (30%, hipotético)', 'Bs 2.400'],
            ['Otras cuotas que ya pagas', 'Bs 400'],
            ['Cuota disponible para vivienda', 'Bs 2.000'],
            ['Tasa y plazo', '6% anual, 20 años (240 cuotas)'],
            ['Préstamo: 2.000 × 139,58', 'Bs 279.000 aprox.'],
            ['Si la entidad financia 80% del avalúo', 'Vivienda de hasta Bs 349.000 aprox., con Bs 70.000 de aporte propio'],
          ],
        },
      ],
    },
    {
      id: 'que-porcentaje-del-sueldo',
      h2: '¿Qué porcentaje del sueldo aceptan para la cuota?',
      blocks: [
        { t: 'p', html: 'No hay un porcentaje único que valga para todas las entidades. Cada banco, cooperativa o entidad financiera de vivienda evalúa tu capacidad de pago con su propia política, dentro de las normas de ASFI.' },
        { t: 'p', html: 'Como orden de magnitud, la suma de todas tus cuotas suele tener que caber en una franja de entre un cuarto y dos quintos del ingreso líquido familiar. Tómalo como punto de partida para tu cuenta, no como regla: el porcentaje exacto pídelo en la entidad.' },
        {
          t: 'ul',
          items: [
            '<strong>Qué ingreso cuenta:</strong> el demostrable. Boletas de pago y aportes si eres dependiente; movimiento del negocio, facturas o declaraciones si eres independiente.',
            '<strong>Pareja o codeudor:</strong> su ingreso suma, y sus deudas también restan.',
            '<strong>Otras deudas:</strong> crédito de consumo, tarjeta, moto o auto. Pagarlas antes de pedir el crédito de vivienda sube tu monto.',
            '<strong>Estabilidad:</strong> antigüedad en el trabajo o en el negocio.',
          ],
        },
      ],
    },
    {
      id: 'que-tasa-usar',
      h2: '¿Qué tasa de interés pongo en la cuenta?',
      blocks: [
        { t: 'p', html: 'La que te informe por escrito la entidad para tu caso. Si todavía no la tienes, usa estas referencias.' },
        {
          t: 'ul',
          items: [
            '<strong>Vivienda de interés social:</strong> la tasa tiene un máximo regulado por el Decreto Supremo 1842, que reglamenta la Ley 393: 5,5% anual si la vivienda vale hasta UFV 255.000, 6% hasta UFV 380.000 y 6,5% hasta UFV 460.000. La UFV es una unidad que el Banco Central de Bolivia actualiza cada día. Confirma en ASFI o en tu entidad que esos máximos siguen vigentes.',
            '<strong>Otros créditos de vivienda:</strong> la tasa la fija cada entidad. Muchas ofrecen tasa fija un primer tiempo y después variable, atada a la tasa de referencia (TRE) que publica el Banco Central de Bolivia.',
            '<strong>Seguros:</strong> la tasa regulada no incluye el seguro de desgravamen. Ese seguro y el de la vivienda se suman a la cuota.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con tu entidad financiera antes de decidir.' },
      ],
    },
    {
      id: 'que-mas-limita-el-monto',
      h2: '¿Qué más limita el monto que te prestan?',
      blocks: [
        { t: 'p', html: 'El valor de la vivienda. La entidad manda a avaluar la casa con un perito y financia una parte de ese valor, no del precio que pactaste.' },
        {
          t: 'ul',
          items: [
            '<strong>Aporte propio:</strong> lo habitual es que la entidad financie hasta alrededor de 80% y tú pongas el resto. En vivienda de interés social existe un fondo de garantía que puede cubrir ese aporte.',
            '<strong>Avalúo más bajo que el precio:</strong> la diferencia la pones tú.',
            '<strong>Plazo y edad:</strong> un plazo largo baja la cuota, pero la entidad mira que termines de pagar dentro de la edad que acepta su seguro.',
            '<strong>Papeles de la vivienda:</strong> sin folio real limpio no hay hipoteca y sin hipoteca no hay crédito. Mira antes <a href="/informacion-rapida-derechos-reales/">la información rápida de Derechos Reales</a>.',
            '<strong>Gastos de entrada:</strong> avalúo, notario, Derechos Reales e impuesto a la transferencia se pagan aparte del crédito.',
          ],
        },
      ],
    },
    {
      id: 'simulador-de-credito-hipotecario',
      h2: 'Simulador de crédito hipotecario en Bolivia: cómo usarlo bien',
      blocks: [
        { t: 'p', html: 'Los simuladores de las entidades financieras hacen esta misma cuenta. Sirven si pones los datos reales y lees el resultado completo.' },
        {
          t: 'ol',
          items: [
            'Usa la tasa que te ofrecieron a ti, no la más baja del aviso.',
            'Mira la cuota total, con seguros, no solo capital e interés.',
            'Pregunta si la tasa es fija todo el plazo. Si es variable, simula también con dos o tres puntos más.',
            'Pide el plan de pagos completo y la tasa efectiva activa al cliente (TEAC), que incluye los cargos.',
            'Simula en dos o tres entidades con el mismo monto y plazo. Recién ahí compara.',
          ],
        },
      ],
    },
    {
      id: 'que-puedes-comprar',
      h2: 'Con ese monto, ¿qué vivienda puedes mirar?',
      blocks: [
        { t: 'p', html: 'Suma el crédito y tu aporte propio: ese es tu presupuesto. El crédito sale en bolivianos y casi todos los avisos están en dólares, así que pregunta al vendedor qué tipo de cambio acepta antes de ilusionarte con una casa.' },
        { t: 'p', html: 'Para ubicarte, mira <a href="/cuanto-cuesta-una-casa-en-bolivia/">cuánto cuesta una casa en Bolivia</a>, con lo que se pide en Santa Cruz, La Paz y Cochabamba. Después busca por ciudad en <a href="https://casa-libre.com.bo/propiedades">Casa-Libre</a>: le escribes al anunciante por WhatsApp y le preguntas si acepta crédito bancario.' },
        { t: 'p', html: 'Si el banco no te alcanza, hay vendedores que dan plan de pagos. Lee antes los riesgos en <a href="/casas-con-financiamiento-directo/">casas con financiamiento directo</a>. Y si quieres empezar por algo más chico, mira los departamentos en venta en Santa Cruz en <a href="https://casa-libre.com.bo/venta/departamentos/santa-cruz-de-la-sierra">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto me presta el banco para una casa?', a: 'Lo que puedas pagar en cuotas con tu ingreso demostrable, hasta la parte del avalúo que financie la entidad. Con una tasa hipotética de 6% anual a 20 años, una cuota de Bs 2.000 sostiene un préstamo de unos Bs 279.000.' },
    { q: '¿Cuánto me presta un banco para vivienda según mi sueldo si soy independiente?', a: 'La cuenta es la misma, pero el ingreso se demuestra de otra forma: la entidad evalúa tu negocio, tus ventas, facturas o declaraciones. Lleva respaldo de varios meses y pregunta qué documentos aceptan.' },
    { q: '¿Puedo sumar el sueldo de mi pareja?', a: 'Sí. La entidad mira el ingreso de la familia, no solo el tuyo. También cuenta las deudas de los dos, y los dos firman el crédito.' },
    { q: '¿Hay un simulador de crédito de vivienda social en Bolivia?', a: 'Las entidades financieras tienen simuladores en sus sitios y oficinas. Para vivienda de interés social, usa la tasa máxima regulada que corresponda al valor de tu vivienda y suma los seguros. También puedes hacer la cuenta con la fórmula de esta guía.' },
    { q: '¿Cuánto tengo que ganar para un crédito de Bs 300.000?', a: 'Con una tasa hipotética de 6% anual a 20 años, la cuota sería de unos Bs 2.150 al mes, sin seguros. Si la entidad aceptara que la cuota sea 30% del ingreso, necesitarías un ingreso líquido familiar cercano a Bs 7.200, sin otras deudas.' },
  ],
  sources: [
    { label: 'Ley 393 de Servicios Financieros', detail: 'Marco del crédito de vivienda y de la vivienda de interés social.' },
    { label: 'Decreto Supremo 1842, de 18 de diciembre de 2013', detail: 'Tasas de interés máximas para el crédito de vivienda de interés social, según el valor de la vivienda en UFV.' },
    { label: 'Autoridad de Supervisión del Sistema Financiero (ASFI)', detail: 'Supervisa a las entidades financieras y sus normas de evaluación de capacidad de pago.' },
    { label: 'Banco Central de Bolivia', detail: 'Publica la UFV y la tasa de referencia (TRE).' },
  ],
  internalSources: [
    { label: 'Decreto Supremo 1842 (text)', url: 'https://www.lexivox.org/norms/BO-DS-N1842.xhtml', date: '2026-11-15', note: 'Art. 3: 5.5% up to UFV 255,000; 6.0% UFV 255,001-380,000; 6.5% UFV 380,001-460,000; regulated rates exclude seguro de desgravamen; value set by a perito. Annex Ley 393: VIS caps UFV 400,000 departamento, UFV 460,000 casa.' },
    { label: 'Decreto Supremo 5562 (2 March 2026)', url: 'https://www.pixilegal.com/normativa/decreto-5562-2026-03-02', date: '2026-11-15', note: 'Modifies only art. 4 of DS 1842 (minimum portfolio levels). Rates untouched as of that date.' },
    { label: 'ASFI, document on the Fondo de Garantía de Créditos de Vivienda de Interés Social', url: 'https://asfi.gob.bo/sites/default/files/2025-09/11.%20FOGAVISP.pdf', date: '2026-11-15', note: 'Guarantee of up to 20% of the purchase value when the applicant has no aporte propio.' },
    { label: 'Press notes on income share (not regulatory)', url: 'https://eju.tv/?p=440744', date: '2026-11-15', note: 'Old notes mention cuota up to 25% of total ganado and examples near 30-40%. No current ASFI cap found: stated on the page as set by each entity.' },
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=cuanto%20me%20presta%20el%20banco', date: '2026-11-15', note: 'Variants listed in keyword.evidence.' },
  ],
  closing: {
    title: 'Ya tienes tu número: ahora compara',
    text: 'Busca casas y departamentos dentro de tu presupuesto y pregunta al anunciante si acepta crédito bancario.',
    button: 'Buscar en el mapa',
    href: 'https://casa-libre.com.bo/propiedades',
  },
  related: ['cuanto-cuesta-una-casa-en-bolivia', 'casas-con-financiamiento-directo', 'informacion-rapida-derechos-reales'],
};
