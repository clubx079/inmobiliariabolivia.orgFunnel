export default {
  slug: 'lotes-a-credito',
  title: 'Lotes a crédito: qué revisar antes de firmar en Bolivia',
  h1: 'Lotes a crédito: qué revisar antes de firmar',
  description: 'Lotes a crédito directo con el dueño o la urbanizadora en Bolivia: cuotas, intereses, cuándo llegan la minuta y el folio real y qué pasa si dejas de pagar.',
  navLabel: 'Lotes a crédito',
  blurb: 'Cuotas, intereses, minuta, folio real y qué pasa si dejas de pagar un lote comprado a crédito directo.',
  group: 'Comprar y financiar',
  order: 10,
  keyword: {
    phrase: 'lotes a credito',
    evidence: 'autocomplete gl=bo 2026-11-15: "lotes a credito en santa cruz bolivia", "lotes a credito cochabamba", "lotes a crédito en urubó santa cruz bolivia", "lotes a credito doble via la guardia", "terrenos a credito en cochabamba bolivia", "terrenos a credito directo", "lotes en venta en tarija a crédito", "lotes a crédito en samaipata".',
  },
  published: '2026-11-16',
  updated: '2026-11-16',
  review: 'pending',
  reviewNote: 'A Bolivian lawyer must check: Código Civil arts. 409-414 (written interest, 3% monthly cap, no anatocismo), 568-570 (resolución, cláusula resolutoria, 15-day notarial requerimiento), 585 (venta a cuotas con reserva de propiedad: cuotas returned minus compensation, judge may reduce the agreed indemnity), 1538 and 1545 (registry priority) as applied to lot sales by urbanizadoras; that Ley 453 complaints still go to a state consumer-defence office in 2026; and the statement that a rural/un-approved subdivision cannot get an urban folio or a building permit. The list of municipalities around Santa Cruz and Cochabamba is general local knowledge.',
  answer: 'En Bolivia, un lote a crédito directo se paga en cuotas al dueño o a la urbanizadora, sin banco. Casi siempre el lote sigue a nombre del vendedor en Derechos Reales hasta la última cuota: recién ahí se firma la minuta de transferencia y puedes inscribirlo y tener el folio real a tu nombre. Antes de firmar, pide por escrito el precio total a plazos, el interés, la multa por atraso, el plazo para entregarte la minuta y qué pasa con lo pagado si dejas de pagar. Y revisa que el lote exista en Derechos Reales, sin gravámenes, dentro de una urbanización aprobada por el gobierno municipal.',
  summary: [
    'El lote suele quedar a nombre del vendedor hasta que pagas la última cuota.',
    'El precio real es la cuota inicial más todas las cuotas: compáralo con el precio al contado.',
    'El interés debe estar escrito en el contrato; el Código Civil pone un tope de 3% mensual y prohíbe cobrar interés sobre interés.',
    'Si el contrato se resuelve porque no pagaste, el Código Civil manda devolver las cuotas, menos una compensación para el vendedor.',
    'Antes de la cuota inicial: folio real del lote, gravámenes, dueño y plano de urbanización aprobado.',
  ],
  flow: ['Revisar papeles', 'Contrato a plazos', 'Pago de cuotas', 'Minuta firmada', 'Folio real'],
  cta: {
    title: 'Mira qué terrenos hay publicados',
    text: 'En Casa-Libre Bolivia buscas por ciudad y en el mapa, y le escribes al anunciante por WhatsApp. Buscar es gratis y no pagas comisión.',
    button: 'Ver propiedades en venta',
    href: 'https://casa-libre.com.bo/comprar',
  },
  sections: [
    {
      id: 'como-funciona-un-lote-a-credito-directo',
      h2: '¿Cómo funciona un lote a crédito directo?',
      blocks: [
        { t: 'p', html: 'Le pagas el lote en cuotas al dueño o a la empresa urbanizadora, sin pasar por un banco. A cambio de esa facilidad, el lote suele quedar a nombre del vendedor hasta que terminas de pagar.' },
        {
          t: 'table',
          caption: 'Crédito directo del vendedor y crédito de una entidad financiera',
          head: ['Punto', 'Crédito directo', 'Crédito de banco o cooperativa'],
          rows: [
            ['Quién te evalúa', 'El vendedor. Suele pedir carnet y la cuota inicial', 'La entidad: ingresos, deudas y avalúo del lote'],
            ['A nombre de quién queda el lote', 'Del vendedor hasta la última cuota, salvo que el contrato diga otra cosa', 'A tu nombre desde la compra, con hipoteca a favor de la entidad'],
            ['Interés', 'El que diga el contrato. A veces va metido en el precio a plazos', 'Tasa informada por escrito, bajo supervisión de ASFI'],
            ['Si te atrasas', 'Lo que diga el contrato, dentro del Código Civil', 'Mora y, al final, ejecución de la hipoteca'],
            ['Quién revisa los papeles', 'Solo tú', 'Tú y la entidad, que no presta sobre un lote con problemas'],
          ],
          note: 'Comparación general, noviembre de 2026.',
        },
        { t: 'p', html: 'El Código Civil llama a esto venta a cuotas con reserva de propiedad: el comprador se hace dueño al pagar la última cuota. Por eso casi todo lo que te protege está en el contrato que firmas el primer día.' },
      ],
    },
    {
      id: 'cuotas-e-intereses',
      h2: 'Cuotas e intereses: ¿cuánto pagas en total?',
      blocks: [
        { t: 'p', html: 'Suma la cuota inicial y todas las cuotas: ese es el precio real del lote. Compáralo con el precio al contado del mismo lote y la diferencia es lo que te cuesta el crédito.' },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: precio al contado y precio a plazos',
          html: 'Números redondos e inventados, solo para mostrar la cuenta. No son precios de ningún lote real.',
          rows: [
            ['Precio al contado', 'USD 10.000'],
            ['Cuota inicial', 'USD 1.000'],
            ['60 cuotas mensuales de USD 200', 'USD 12.000'],
            ['Total a plazos', 'USD 13.000'],
            ['Costo de financiarte', 'USD 3.000 más que al contado'],
          ],
        },
        { t: 'p', html: 'Pide que el contrato o el plan de pagos firmado diga, con números:' },
        {
          t: 'ul',
          items: [
            'El precio al contado y el precio total a plazos, los dos.',
            'La cuota inicial y que cuenta como parte del precio.',
            'Cuántas cuotas son, de cuánto y qué día vence cada una.',
            '<strong>El interés.</strong> Según el Código Civil, el interés se pacta por escrito, no puede pasar de 3% mensual y no se puede cobrar interés sobre interés.',
            'La multa por atraso y los días de tolerancia.',
            '<strong>La moneda.</strong> Si la cuota está en dólares y pagas en bolivianos, que quede escrito el tipo de cambio que acuerden o cómo se fija cada mes.',
            'Si puedes adelantar cuotas o cancelar todo antes, y con qué descuento.',
          ],
        },
        { t: 'callout', tone: 'tip', title: 'Paga siempre con respaldo', html: 'Deposita en una cuenta a nombre del vendedor o de la empresa, no de un promotor. Guarda cada recibo con firma y sello: al final son la prueba de que pagaste todo.' },
      ],
    },
    {
      id: 'cuando-entregan-la-minuta-y-el-folio-real',
      h2: '¿Cuándo te entregan la minuta y el folio real?',
      blocks: [
        { t: 'p', html: 'En la mayoría de los contratos, recién cuando terminas de pagar. Mientras tanto tienes un contrato privado y tus recibos, no un título inscrito.' },
        {
          t: 'steps',
          items: [
            { title: 'Contrato de venta a plazos', html: 'Lo firmas al dar la cuota inicial. Pide que sea con reconocimiento de firmas ante notario de fe pública: así nadie puede negar después que firmó.' },
            { title: 'Pago de las cuotas', html: 'Durante todo ese tiempo el lote sigue a nombre del vendedor en Derechos Reales.' },
            { title: 'Minuta de transferencia', html: 'Con la última cuota, el vendedor firma la minuta, que es el documento de transferencia definitiva que redacta un abogado.' },
            { title: 'Protocolo e impuesto', html: 'Un notario de fe pública convierte la minuta en escritura pública y se paga el impuesto a la transferencia en el gobierno municipal.' },
            { title: 'Inscripción en Derechos Reales', html: 'Con el testimonio, que es la copia oficial de la escritura, el lote se inscribe a tu nombre. Desde ese día el folio real, la ficha del inmueble en Derechos Reales, te muestra como dueño.' },
          ],
        },
        { t: 'p', html: 'Mientras el lote no esté inscrito a tu nombre, frente a terceros el dueño sigue siendo el vendedor. Podría hipotecarlo, un acreedor suyo podría embargarlo y, si lo vendiera dos veces, la ley prefiere al que inscribe primero. Por eso el contrato debe decir en cuántos días te entregan la minuta después de la última cuota, quién paga los gastos de la transferencia y qué multa tiene el vendedor si se demora.' },
      ],
    },
    {
      id: 'papeles-antes-de-la-cuota-inicial',
      h2: '¿Qué papeles revisar antes de dar la cuota inicial?',
      blocks: [
        { t: 'p', html: 'Tres cosas: que el lote exista en Derechos Reales, que quien vende sea el dueño o tenga poder, y que la urbanización esté aprobada.' },
        {
          t: 'ul',
          items: [
            '<strong>Matrícula del lote.</strong> Pregunta si tu lote ya tiene folio real propio o si todavía es parte de un terreno grande sin dividir. Lo puedes ver con una <a href="/informacion-rapida-derechos-reales/">información rápida de Derechos Reales</a>.',
            '<strong>Gravámenes.</strong> Si el terreno de la urbanización está hipotecado, pide por escrito cómo y cuándo liberan tu lote. Aquí te explicamos <a href="/que-es-alodial/">qué es el alodial</a> y qué muestra.',
            '<strong>Dueño.</strong> El nombre del folio real debe ser el de quien firma. Si firma un apoderado, pide el poder notarial. Más en <a href="/como-saber-si-un-lote-tiene-dueno/">cómo saber si un lote tiene dueño</a>.',
            '<strong>Urbanización aprobada.</strong> Pide el plano de urbanización aprobado por el gobierno municipal y confirma que el lote está en área urbana. Un terreno rural loteado sin aprobación no se inscribe como lote urbano ni consigue permiso de construcción.',
            '<strong>Lo prometido.</strong> Calles, luz, agua, áreas verdes: lo que te ofrezcan de palabra debe estar en el contrato, con fecha.',
          ],
        },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un abogado o notario de fe pública antes de decidir.' },
      ],
    },
    {
      id: 'que-pasa-si-dejas-de-pagar',
      h2: '¿Qué pasa si dejas de pagar las cuotas?',
      blocks: [
        { t: 'p', html: 'Manda lo que diga tu contrato, dentro de los límites del Código Civil. Lo usual es que, después de cierto número de cuotas atrasadas, el vendedor pueda dar por terminado el contrato (resolverlo) y quedarse con el lote.' },
        {
          t: 'ul',
          items: [
            '<strong>Cláusula resolutoria.</strong> Muchos contratos dicen que se resuelven solos con cierta cantidad de cuotas impagas. Léela y anota cuántas cuotas y cuántos días.',
            '<strong>Requerimiento.</strong> El Código Civil también permite al vendedor intimarte por carta notariada a pagar en un plazo no menor a quince días, antes de dar por resuelto el contrato.',
            '<strong>Lo que ya pagaste.</strong> El artículo 585 dice que, si el contrato se resuelve por incumplimiento del comprador, el vendedor debe devolver las cuotas recibidas, pero puede cobrar una compensación por el uso y los daños. Si el contrato dice que las cuotas quedan para el vendedor como indemnización, un juez puede reducirla.',
            '<strong>En la práctica.</strong> Reclamar por la vía judicial es lento y cuesta. Negocia antes de llegar ahí.',
          ],
        },
        { t: 'p', html: 'Si ves que no vas a poder pagar, avisa antes de atrasarte. Pide por escrito una reprogramación y pregunta si el contrato te deja ceder tu lugar a otra persona que siga pagando, y cuánto cobran por ese cambio.' },
        { t: 'p', html: 'Si no te cumplen lo ofrecido, la Ley 453 protege a usuarios y consumidores, y puedes reclamar ante la oficina estatal de defensa del consumidor.' },
      ],
    },
    {
      id: 'lotes-a-credito-en-santa-cruz-y-cochabamba',
      h2: 'Lotes a crédito en Santa Cruz y en Cochabamba: qué cambia',
      blocks: [
        { t: 'p', html: 'Cambia el municipio que aprueba la urbanización y lo que conviene mirar en el terreno.' },
        {
          t: 'ul',
          items: [
            '<strong>Santa Cruz.</strong> Muchas urbanizaciones con lotes a crédito están fuera del municipio de Santa Cruz de la Sierra: en Warnes, Cotoca, La Guardia, El Torno o Porongo, donde queda el Urubó. El plano lo aprueba ese municipio y ahí pagarás impuestos. Mira el acceso desde la carretera o la doble vía, cómo queda el terreno después de una lluvia fuerte y hasta dónde llegan hoy el agua y la luz.',
            '<strong>Cochabamba.</strong> La oferta está sobre todo hacia Sacaba, Tiquipaya, Quillacollo, Vinto y la zona sur. Pregunta primero por el agua (red, pozo o cisterna) y confirma en el municipio que el lote está en área urbana y no en terreno agrícola.',
          ],
        },
        { t: 'p', html: 'Para ver qué se ofrece hoy, mira los terrenos en venta en Santa Cruz en <a href="https://casa-libre.com.bo/venta/terrenos/santa-cruz-de-la-sierra">Casa-Libre</a> y los de Cochabamba en <a href="https://casa-libre.com.bo/venta/terrenos/cochabamba">Casa-Libre</a>. Casa-Libre no vende ni intermedia y no verifica a cada anunciante: le escribes directo por WhatsApp y los papeles los revisas tú.' },
      ],
    },
  ],
  faq: [
    { q: '¿Lotes a crédito en Santa Cruz, Bolivia: qué pedir antes de firmar?', a: 'El folio real del lote, el plano de urbanización aprobado por el municipio donde está (muchas veces Warnes, Cotoca, La Guardia o Porongo) y un plan de pagos firmado con precio total, interés y multa. Y una cláusula que diga cuándo te entregan la minuta.' },
    { q: '¿Lotes a crédito en Cochabamba: qué revisar?', a: 'Lo mismo, más dos preguntas locales: de dónde viene el agua y si el terreno está dentro del área urbana del municipio (Sacaba, Tiquipaya, Quillacollo o Cercado). Un lote en terreno agrícola no se inscribe como lote urbano.' },
    { q: '¿Cuándo sale el folio real a mi nombre?', a: 'Después de la última cuota: el vendedor firma la minuta, un notario de fe pública la protocoliza, pagas el impuesto a la transferencia y recién entonces Derechos Reales inscribe el lote a tu nombre.' },
    { q: '¿Puedo construir en el lote mientras lo pago?', a: 'Solo si el contrato lo permite. Ten en cuenta que el lote todavía no es tuyo en Derechos Reales: si el contrato se resuelve, lo construido queda sobre un terreno ajeno. Además, el municipio suele pedir el título para aprobar planos.' },
    { q: '¿Terrenos a crédito directo o con crédito de banco?', a: 'El crédito directo pide menos requisitos, pero el lote queda a nombre del vendedor y nadie más revisa los papeles. Con una entidad financiera el lote se inscribe a tu nombre desde el inicio. Si te interesa, mira <a href="/cuanto-me-presta-el-banco-segun-mi-sueldo/">cuánto te presta el banco según tu sueldo</a>.' },
  ],
  sources: [
    { label: 'Código Civil de Bolivia (Decreto Ley 12760), artículos 409 a 414', detail: 'Interés convencional por escrito, tope de 3% mensual y prohibición de capitalizar intereses.' },
    { label: 'Código Civil de Bolivia, artículos 568 a 570 y 585', detail: 'Resolución de contratos y venta a cuotas con reserva de propiedad.' },
    { label: 'Código Civil de Bolivia, artículos 1538 y 1545', detail: 'Inscripción en Derechos Reales y preferencia de quien inscribe primero.' },
    { label: 'Ley 453, Ley General de los Derechos de las Usuarias y los Usuarios y de las Consumidoras y los Consumidores', detail: 'Reclamos por incumplimiento de lo ofrecido.' },
  ],
  internalSources: [
    { label: 'Código Civil de Bolivia, texto (arts. 409-414, 568-570, 585, 639, 1538, 1545)', url: 'https://www.lexivox.org/norms/BO-COD-DL12760B.xhtml', date: '2026-11-15', note: 'Art. 585 read in full: property passes with the last cuota; on resolution for buyer default the seller returns cuotas minus equitable compensation and damages; judge may reduce agreed indemnity. Art. 570: notarial requerimiento, not less than 15 days. Art. 409: 3% monthly cap. Art. 412: no anatocismo. Art. 1545: first to register prevails.' },
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=lotes%20a%20credito', date: '2026-11-15', note: 'Variants listed in keyword.evidence.' },
  ],
  closing: {
    title: 'Compara antes de dar la cuota inicial',
    text: 'Mira varios terrenos y lotes publicados, pregunta por los papeles y recién después firma. En Casa-Libre hablas directo con el anunciante por WhatsApp.',
    button: 'Buscar en el mapa',
    href: 'https://casa-libre.com.bo/propiedades',
  },
  related: ['como-saber-si-un-lote-tiene-dueno', 'casas-con-financiamiento-directo', 'que-es-alodial'],
};
