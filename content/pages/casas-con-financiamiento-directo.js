export default {
  slug: 'casas-con-financiamiento-directo',
  title: 'Casas con financiamiento directo: cómo funcionan y riesgos',
  h1: 'Casas con financiamiento directo: cómo funcionan y qué riesgos tienen',
  description: 'Qué significa comprar una casa con financiamiento directo del dueño o la constructora en Bolivia, cuánto termina costando, qué riesgos tiene y cómo protegerte.',
  navLabel: 'Financiamiento directo',
  blurb: 'Cómo funciona comprarle una casa a plazos al dueño o a la constructora, qué riesgos tiene y cómo firmar protegido.',
  group: 'Comprar y financiar',
  order: 20,
  keyword: {
    phrase: 'casas con financiamiento directo',
    evidence: 'autocomplete gl=bo 2026-11-15: "casas con financiamiento directo", "venta de casas con financiamiento directo", "casas en venta con financiamiento bancario", "casas en venta financiamiento directo", "casas a credito directo en santa cruz bolivia", "casas a crédito sin cuota inicial en santa cruz bolivia", "financiamiento directo que es", "casas en venta en tarija con financiamiento".',
  },
  published: '2026-11-16',
  updated: '2026-11-16',
  review: 'pending',
  reviewNote: 'A Bolivian lawyer must check: Código Civil art. 585 (venta a cuotas con reserva de propiedad), arts. 409-414 (interest), art. 1368 (legal mortgage of the seller for the unpaid price) and whether notaries/Derechos Reales in practice register a transfer with a mortgage in favour of a private seller for the balance; arts. 1538/1545 (registry). The four "forms" in the first table describe common practice, not legal categories. Confirm that DS 1842 regulated rates for vivienda de interés social (5.5% to 6.5%) are still in force in November 2026.',
  answer: 'En Bolivia, una casa con financiamiento directo es la que el dueño o la constructora te vende a plazos, sin banco: das una cuota inicial, entras a vivir y pagas el saldo en cuotas. Pide menos requisitos que un crédito bancario, pero suele costar más y tiene un riesgo central: mientras pagas, la casa puede seguir a nombre del vendedor en Derechos Reales. Lo más seguro es que la transferencia se inscriba a tu nombre desde el inicio, con una hipoteca a favor del vendedor por el saldo, o que el contrato fije por escrito cuotas, interés, plazo de la minuta y qué pasa si te atrasas.',
  summary: [
    'Financiamiento directo: le pagas en cuotas al dueño o a la constructora, sin entidad financiera.',
    'El riesgo principal es pagar durante años una casa que sigue a nombre de otro.',
    'La forma más segura para el comprador: transferencia inscrita desde el inicio, con hipoteca por el saldo.',
    'Revisa en Derechos Reales si la casa ya tiene una hipoteca del vendedor con un banco.',
    'El interés se pacta por escrito y el Código Civil le pone un tope de 3% mensual.',
  ],
  cta: {
    title: 'Busca casas y pregunta cómo se pagan',
    text: 'En Casa-Libre Bolivia ves casas por ciudad y en el mapa, y le escribes al anunciante por WhatsApp para preguntar si acepta financiamiento directo o crédito bancario.',
    button: 'Ver casas en venta',
    href: 'https://casa-libre.com.bo/comprar',
  },
  sections: [
    {
      id: 'que-es-financiamiento-directo',
      h2: 'Financiamiento directo: qué es y qué formas tiene',
      blocks: [
        { t: 'p', html: 'Es un plan de pagos que te da el mismo vendedor. No interviene un banco, así que nadie evalúa tus ingresos con las reglas de una entidad financiera, pero tampoco nadie más revisa los papeles de la casa.' },
        {
          t: 'table',
          caption: 'Formas habituales de comprar una casa a plazos',
          head: ['Forma', 'Cómo funciona', 'A nombre de quién queda la casa mientras pagas'],
          rows: [
            ['Venta a plazos con reserva de propiedad', 'Das la cuota inicial, entras a vivir y pagas cuotas al dueño', 'Del vendedor, hasta la última cuota'],
            ['Transferencia con hipoteca por el saldo', 'Se firma e inscribe la transferencia ahora; lo que debes queda garantizado con hipoteca sobre la misma casa', 'A tu nombre, con la hipoteca inscrita a favor del vendedor'],
            ['Plan de pagos de la constructora', 'La empresa que construyó recibe cuotas; a veces el saldo final se paga con crédito de banco', 'De la empresa, hasta que pagas todo o entra el banco'],
            ['Financiamiento bancario', 'El banco o la cooperativa le paga al vendedor y tú le pagas a la entidad', 'A tu nombre, con hipoteca a favor de la entidad'],
          ],
          note: 'Descripción general de la práctica, noviembre de 2026. Los nombres pueden variar en cada contrato.',
        },
        { t: 'p', html: 'Cuando un aviso dice "financiamiento directo", pregunta cuál de estas formas ofrece. La respuesta cambia todo lo demás.' },
      ],
    },
    {
      id: 'cuanto-termina-costando',
      h2: '¿Cuánto termina costando una casa con financiamiento directo?',
      blocks: [
        { t: 'p', html: 'Más que al contado: el vendedor cobra por esperar. Para saber cuánto más, suma la cuota inicial y todas las cuotas y compara con el precio al contado.' },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: el costo de pagar a plazos',
          html: 'Números redondos e inventados para mostrar la cuenta. No son precios de mercado.',
          rows: [
            ['Precio al contado', 'USD 80.000'],
            ['Cuota inicial', 'USD 20.000'],
            ['96 cuotas mensuales de USD 800 (8 años)', 'USD 76.800'],
            ['Total a plazos', 'USD 96.800'],
            ['Costo del financiamiento', 'USD 16.800'],
          ],
        },
        { t: 'p', html: 'El Código Civil pide que el interés esté pactado por escrito, le pone un máximo de 3% mensual y prohíbe cobrar interés sobre interés. Que el contrato diga la tasa, si la cuota es fija y en qué moneda se paga. Si el precio está en dólares y vas a pagar en bolivianos, deja escrito el tipo de cambio que acuerden o cómo se calcula cada mes.' },
      ],
    },
    {
      id: 'riesgos-del-financiamiento-directo',
      h2: '¿Qué riesgos tiene el financiamiento directo?',
      blocks: [
        { t: 'p', html: 'El mayor es pagar durante años una casa que, en Derechos Reales, sigue siendo de otra persona. De ahí salen casi todos los demás.' },
        {
          t: 'ul',
          items: [
            '<strong>La casa ya está hipotecada.</strong> Si el vendedor le debe a un banco y deja de pagar, el banco puede ejecutar la casa aunque tú estés al día con tus cuotas.',
            '<strong>Deudas o juicios del vendedor.</strong> Un acreedor suyo puede embargar la casa mientras esté a su nombre.',
            '<strong>Doble venta.</strong> Si la vende a otra persona y esa persona inscribe primero, la ley la prefiere.',
            '<strong>Muerte del vendedor.</strong> Te tocará entenderte con sus herederos para que firmen la minuta.',
            '<strong>Pagos sin respaldo.</strong> Cuotas en efectivo, sin recibo o a nombre de un tercero.',
            '<strong>Cláusulas duras.</strong> Contratos que dicen que con un atraso pierdes todo lo pagado.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un abogado o notario de fe pública antes de decidir.' },
      ],
    },
    {
      id: 'como-protegerte-al-firmar',
      h2: '¿Cómo protegerte al firmar?',
      blocks: [
        { t: 'p', html: 'Primero revisa la casa en Derechos Reales, después elige la forma de la venta, y recién al final habla de cuotas.' },
        {
          t: 'steps',
          items: [
            { title: 'Pide el folio real actualizado', html: 'Muestra quién es el dueño y si hay hipotecas, anotaciones o embargos. Lo consigues con una <a href="/informacion-rapida-derechos-reales/">información rápida de Derechos Reales</a>, y aquí explicamos <a href="/que-es-alodial/">qué es el alodial</a>.' },
            { title: 'Propón transferir ahora, con hipoteca por el saldo', html: 'La casa se inscribe a tu nombre y el vendedor queda protegido con una hipoteca sobre la misma casa. El Código Civil reconoce al vendedor una hipoteca por el precio no pagado. Es la forma más segura para ti.' },
            { title: 'Si el vendedor no acepta, cierra bien el contrato a plazos', html: 'Con reconocimiento de firmas ante notario de fe pública, plan de pagos, plazo en días para firmar la minuta después de la última cuota y multa si el vendedor se demora.' },
            { title: 'Paga por el banco', html: 'Transferencia o depósito a la cuenta del vendedor, con el concepto escrito. Guarda todo.' },
            { title: 'Deja escrito quién paga qué', html: 'Impuesto anual, servicios y arreglos mientras dure el plan, y un acta de entrega con el estado de la casa.' },
          ],
        },
      ],
    },
    {
      id: 'que-pasa-si-no-puedes-pagar',
      h2: '¿Qué pasa si no puedes seguir pagando?',
      blocks: [
        { t: 'p', html: 'Depende de la forma de la venta. Si la casa quedó a nombre del vendedor, él puede pedir que el contrato se resuelva y recuperar la casa. Si ya está a tu nombre con hipoteca, tendría que ejecutar la hipoteca.' },
        { t: 'p', html: 'En la venta a cuotas con reserva de propiedad, el artículo 585 del Código Civil dice que el vendedor debe devolver las cuotas recibidas, pero puede cobrar una compensación por el tiempo que usaste la casa y los daños. Si el contrato dice que las cuotas quedan como indemnización, un juez puede reducirla. Las mismas reglas valen para un terreno: las contamos con más detalle en <a href="/lotes-a-credito/">lotes a crédito</a>.' },
        { t: 'p', html: 'Antes de atrasarte, habla con el vendedor y deja por escrito cualquier cambio de fechas o de montos.' },
      ],
    },
    {
      id: 'financiamiento-directo-o-bancario',
      h2: 'Financiamiento directo o financiamiento bancario: ¿cuál conviene?',
      blocks: [
        { t: 'p', html: 'Si calificas para un crédito de vivienda, casi siempre conviene el banco: la casa queda a tu nombre, la entidad revisa los papeles y, en vivienda de interés social, la tasa tiene un máximo regulado. El financiamiento directo sirve cuando no puedes demostrar ingresos como pide una entidad o cuando necesitas cerrar rápido.' },
        {
          t: 'ul',
          items: [
            'Para saber si calificas, haz primero la cuenta de <a href="/cuanto-me-presta-el-banco-segun-mi-sueldo/">cuánto te presta el banco según tu sueldo</a>.',
            'Hay una salida mixta: financiamiento directo por uno o dos años y después un crédito bancario por el saldo. Para eso la casa tiene que estar en regla, porque el banco la va a revisar.',
            'Si el aviso dice "acepta financiamiento bancario", el vendedor está dispuesto a esperar el trámite del crédito. Pregunta si los papeles están al día.',
          ],
        },
        { t: 'p', html: 'Para comparar opciones, mira las casas en venta en Santa Cruz en <a href="https://casa-libre.com.bo/venta/casas/santa-cruz-de-la-sierra">Casa-Libre</a> o las de Cochabamba en <a href="https://casa-libre.com.bo/venta/casas/cochabamba">Casa-Libre</a>, y pregunta al anunciante por WhatsApp cómo acepta el pago. Casa-Libre no vende ni intermedia y no verifica a cada anunciante: los papeles los revisas tú.' },
      ],
    },
  ],
  faq: [
    { q: '¿Qué es financiamiento directo en la venta de casas?', a: 'Es cuando el dueño o la constructora te vende la casa a plazos, sin banco. Das una cuota inicial y pagas el saldo en cuotas al mismo vendedor, con el interés y los plazos que diga el contrato.' },
    { q: '¿Casas a crédito sin cuota inicial en Santa Cruz: existen?', a: 'Hay avisos que lo ofrecen. Sin cuota inicial el vendedor corre más riesgo y suele compensarlo con cuotas más altas o con un contrato más duro si te atrasas. Suma todas las cuotas y compara con el precio al contado antes de decidir.' },
    { q: '¿Casas en venta con financiamiento bancario: qué significa en un aviso?', a: 'Que el vendedor acepta que pagues con un crédito de vivienda y está dispuesto a esperar el trámite. La casa debe tener sus papeles en regla, porque la entidad financiera la revisa y la hace avaluar.' },
    { q: '¿Sirve el financiamiento directo si no tengo boleta de pago?', a: 'Sí, por eso muchos lo buscan: el vendedor decide con qué requisitos vende. Pero antes pregunta en una entidad financiera, porque también evalúan a personas con ingresos independientes.' },
    { q: '¿Puedo vender la casa antes de terminar de pagarla?', a: 'Si la casa sigue a nombre del vendedor, solo puedes ceder tu contrato, y necesitas que él lo acepte. Si está a tu nombre con hipoteca, puedes venderla pagando el saldo para que se levante la hipoteca.' },
  ],
  sources: [
    { label: 'Código Civil de Bolivia (Decreto Ley 12760), artículo 585', detail: 'Venta a cuotas con reserva de propiedad.' },
    { label: 'Código Civil de Bolivia, artículos 409 a 414 y 1368', detail: 'Intereses entre particulares e hipoteca del vendedor por el precio no pagado.' },
    { label: 'Código Civil de Bolivia, artículos 1538 y 1545', detail: 'Efecto de la inscripción en Derechos Reales frente a terceros.' },
    { label: 'Ley 393 de Servicios Financieros y Decreto Supremo 1842', detail: 'Tasas máximas del crédito de vivienda de interés social, supervisadas por ASFI.' },
  ],
  internalSources: [
    { label: 'Código Civil de Bolivia, texto (arts. 409-414, 585, 1368, 1538, 1545)', url: 'https://www.lexivox.org/norms/BO-COD-DL12760B.xhtml', date: '2026-11-15', note: 'Art. 1368: the law grants a mortgage to "quien vende un inmueble, por el precio no pagado". Art. 585 read in full.' },
    { label: 'Decreto Supremo 1842 (18 Dec 2013)', url: 'https://www.lexivox.org/norms/BO-DS-N1842.xhtml', date: '2026-11-15', note: 'Regulated maximum rates for vivienda de interés social. DS 5562 (2 March 2026) changed only art. 4 (portfolio minimums).' },
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=casas%20con%20financiamiento%20directo', date: '2026-11-15', note: 'Variants listed in keyword.evidence.' },
  ],
  closing: {
    title: 'Primero los papeles, después las cuotas',
    text: 'Busca casas por ciudad, escribe al anunciante por WhatsApp y pide el folio real antes de hablar de plan de pagos.',
    button: 'Buscar casas en el mapa',
    href: 'https://casa-libre.com.bo/propiedades',
  },
  related: ['lotes-a-credito', 'cuanto-me-presta-el-banco-segun-mi-sueldo', 'informacion-rapida-derechos-reales'],
};
