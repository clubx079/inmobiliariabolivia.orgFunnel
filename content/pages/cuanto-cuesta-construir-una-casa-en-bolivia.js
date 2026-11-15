export default {
  slug: 'cuanto-cuesta-construir-una-casa-en-bolivia',
  title: 'Cuánto cuesta construir una casa en Bolivia: costos y pasos',
  h1: 'Cuánto cuesta construir una casa en Bolivia',
  description: 'No hay un precio oficial por metro cuadrado para construir en Bolivia. Qué partidas forman el costo, cómo pedir presupuestos comparables y qué permisos sacar.',
  navLabel: 'Costo de construir',
  blurb: 'Las partidas que forman el costo de construir, cómo comparar presupuestos y qué permisos pide el municipio.',
  group: 'Comprar y financiar',
  order: 40,
  keyword: {
    phrase: 'cuanto cuesta construir una casa en bolivia',
    evidence: 'autocomplete gl=bo 2026-11-15: "cuanto cuesta construir una casa en bolivia santa cruz", "cuanto cuesta construir una casa en cochabamba bolivia", "cuanto cuesta construir una casa en la paz bolivia", "cuanto cuesta construir una casa de 2 pisos en bolivia", "cuanto cuesta construir un cuarto de 4x4 en bolivia", "cuanto cuesta el metro cuadrado de construccion en santa cruz bolivia", "precio de metro cuadrado de construcción en bolivia", "cuanto cobra un arquitecto por un plano de casa en bolivia", "crédito para construcción de vivienda bolivia".',
  },
  published: '2026-11-16',
  updated: '2026-11-16',
  review: 'pending',
  reviewNote: 'No construction price is given on purpose: no official per-m2 figure was found (INE publishes only the Índice del Costo de la Construcción, an index). An architect or civil engineer in Bolivia must check: the list of cost items and plans (arquitectónico, estructural, hidrosanitario, eléctrico), that municipalities require approved plans before building and that the finished construction must be regularised in catastro, the qualitative city notes (La Paz slopes and retaining walls, Santa Cruz rain and drainage, Cochabamba water storage), and that banks disburse construction loans in stages against progress. The VIS definition (construction cost including land; land for building up to 40% of the cap for houses) comes from the annex of Ley 393 quoted in DS 1842: confirm still in force. House asking prices come from content/data/bo-market.json (2026-11-13).',
  answer: 'En Bolivia no hay un precio oficial por metro cuadrado de construcción: el Instituto Nacional de Estadística publica un índice que mide cuánto sube o baja el costo de construir, no un precio. Lo que pagues depende de la ciudad, el terreno, el número de pisos, los acabados y la forma de contratar. La manera seria de saberlo es tener planos y pedir al menos tres presupuestos por ítems que incluyan lo mismo: obra gruesa, obra fina, instalaciones, mano de obra y permisos. Al costo de la obra suma el terreno, el proyecto, la aprobación de planos en el gobierno municipal, las conexiones de servicios y un margen para imprevistos.',
  summary: [
    'No existe un precio oficial por metro cuadrado: el INE publica un índice de variación, no un precio.',
    'El costo total es terreno, proyecto y permisos, obra gruesa, obra fina, instalaciones, conexiones e imprevistos.',
    'Pide al menos tres presupuestos por ítems, sobre los mismos planos y con los mismos acabados.',
    'Un precio por metro cuadrado solo sirve si sabes qué incluye y qué deja afuera.',
    'Sin planos aprobados por el gobierno municipal, la obra puede ser multada y la casa no queda en regla.',
  ],
  flow: ['Terreno en regla', 'Planos y permisos', 'Tres presupuestos', 'Obra por etapas', 'Casa regularizada'],
  cta: {
    title: 'Antes de construir, mira lo que ya está hecho',
    text: 'Compara tu presupuesto con lo que piden por casas terminadas. En Casa-Libre Bolivia buscas por ciudad y le escribes al anunciante por WhatsApp.',
    button: 'Ver casas en venta',
    href: 'https://casa-libre.com.bo/comprar',
  },
  sections: [
    {
      id: 'de-que-depende-el-costo',
      h2: '¿Cuánto cuesta construir una casa en Bolivia?',
      blocks: [
        { t: 'p', html: 'No hay una cifra oficial que sirva para todos. El costo sale de sumar partidas, y cada una cambia según tu terreno, tu ciudad y lo que quieras construir.' },
        {
          t: 'table',
          caption: 'Partidas que forman el costo de construir una casa',
          head: ['Partida', 'Qué incluye', 'Qué la hace subir'],
          rows: [
            ['Terreno', 'Compra, impuestos y papeles al día', 'Zona, pendiente, relleno o muros de contención'],
            ['Proyecto', 'Planos arquitectónicos, estructurales, hidrosanitarios y eléctricos; estudio de suelos si hace falta', 'Varios pisos, terreno difícil, cambios a mitad de camino'],
            ['Permisos', 'Aprobación de planos y permiso de construcción en el gobierno municipal', 'Tasas del municipio y superficie a construir'],
            ['Obra gruesa', 'Cimientos, columnas, vigas, losas, muros y techo', 'Fierro y cemento, número de pisos, tipo de suelo'],
            ['Obra fina', 'Revoques, pisos, puertas, ventanas, pintura, baños y cocina', 'La calidad de los acabados: aquí están las mayores diferencias'],
            ['Instalaciones', 'Agua, alcantarillado o cámara séptica, luz, gas, tanque o cisterna', 'Distancia a las redes, bomba, termotanque'],
            ['Mano de obra y dirección', 'Maestro albañil y ayudantes, o empresa constructora, y quien dirige la obra', 'Contrato por día, por avance o llave en mano'],
            ['Exteriores e imprevistos', 'Barda, portón, acera, y un margen para lo que no estaba previsto', 'Subidas de precio de materiales durante la obra'],
          ],
          note: 'Lista general, noviembre de 2026. Pide a tu arquitecto o ingeniero que la ajuste a tu proyecto.',
        },
      ],
    },
    {
      id: 'precio-del-metro-cuadrado-de-construccion',
      h2: 'Cuánto cuesta el metro cuadrado de construcción',
      blocks: [
        { t: 'p', html: 'No hay un valor oficial, ni para Bolivia ni para Santa Cruz, La Paz o Cochabamba. El Instituto Nacional de Estadística publica el Índice del Costo de la Construcción, que dice cuánto variaron materiales y mano de obra, pero no pone un precio por metro.' },
        { t: 'p', html: 'Los valores por metro cuadrado que escuchas de constructores o vecinos son estimaciones de cada uno. Antes de multiplicar por tus metros, pregunta:' },
        {
          t: 'ul',
          items: [
            '¿Es solo obra gruesa o incluye obra fina e instalaciones?',
            '¿Con qué acabados: piso cerámico o porcelanato, carpintería de madera o aluminio?',
            '¿Incluye el proyecto, los permisos y la dirección de obra?',
            '¿Es con factura? ¿En bolivianos o en dólares, y con qué tipo de cambio?',
            '¿Hasta qué fecha vale el precio? Los materiales cambian de precio durante la obra.',
          ],
        },
        { t: 'callout', tone: 'fact', title: 'Por qué esta guía no da una cifra', html: 'No hay una cifra de un organismo oficial que podamos citar, y un número sin fuente te haría más daño que no tener número. Tres presupuestos sobre tus planos valen más que cualquier promedio.' },
      ],
    },
    {
      id: 'como-pedir-presupuestos',
      h2: '¿Cómo pedir presupuestos para construir?',
      blocks: [
        { t: 'p', html: 'Con planos en la mano y por ítems. Si cada constructor cotiza una casa distinta, no hay forma de comparar.' },
        {
          t: 'steps',
          items: [
            { title: 'Ten los planos primero', html: 'Sin planos, cada presupuesto es una adivinanza. Con planos se pueden calcular las cantidades de cada ítem.' },
            { title: 'Pide el presupuesto por ítems', html: 'Cantidad, unidad y precio de cada trabajo: excavación, cimientos, muros, losa, techo, revoques, pisos, instalaciones.' },
            { title: 'Fija los mismos acabados para todos', html: 'Marca y tipo de piso, puertas, ventanas, artefactos de baño. Es lo que más mueve el total.' },
            { title: 'Pregunta qué queda afuera', html: 'Barda, tanque, conexiones de agua, luz y gas, limpieza final, trámites.' },
            { title: 'Firma un contrato', html: 'Con plazo, forma de pago por avance de obra, multa por demora y quién compra los materiales.' },
          ],
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: el presupuesto más bajo no siempre es el más barato',
          html: 'Cifras inventadas para mostrar la cuenta. No son precios de referencia.',
          rows: [
            ['Presupuesto A, todo incluido', 'Bs 500.000'],
            ['Presupuesto B, sin instalaciones ni obra fina', 'Bs 420.000'],
            ['Instalaciones que faltan en B', 'Bs 60.000'],
            ['Obra fina que falta en B', 'Bs 50.000'],
            ['Total real de B', 'Bs 530.000'],
          ],
        },
      ],
    },
    {
      id: 'casa-de-2-pisos-o-un-cuarto',
      h2: 'Casa de 2 pisos, un cuarto de 4x4 o una ampliación: qué cambia',
      blocks: [
        { t: 'p', html: 'Cambia la estructura. Una casa de dos pisos necesita cimientos, columnas, losa y escalera calculados por un ingeniero, y en muchos terrenos un estudio de suelos.' },
        {
          t: 'ul',
          items: [
            '<strong>Dos o tres pisos:</strong> más fierro y cemento por metro que una planta baja, pero menos terreno y menos techo. Si piensas ampliar hacia arriba más adelante, dilo ahora para que los cimientos lo aguanten.',
            '<strong>Un cuarto de 4x4:</strong> en obras chicas el metro suele salir más caro, porque el maestro, el traslado de material y los trámites pesan lo mismo sobre pocos metros.',
            '<strong>Ampliar una casa:</strong> revisa primero si la estructura existente resiste y si los planos de la casa están aprobados. Ampliar sobre algo sin aprobar complica una venta o un crédito después.',
          ],
        },
      ],
    },
    {
      id: 'planos-permisos-y-arquitecto',
      h2: '¿Qué planos y permisos necesito antes de construir?',
      blocks: [
        { t: 'p', html: 'Necesitas el terreno a tu nombre en Derechos Reales y los planos aprobados por el gobierno municipal donde está el terreno. Cada municipio tiene sus requisitos, tasas y normas de altura y retiros.' },
        {
          t: 'ul',
          items: [
            'Terreno con folio real a tu nombre e impuestos al día. Si todavía lo estás pagando a plazos, lee <a href="/lotes-a-credito/">lotes a crédito</a> antes de poner un ladrillo.',
            'Planos firmados por profesionales habilitados y aprobados por el municipio.',
            'Al terminar, regulariza lo construido en catastro. El impuesto anual, un crédito o una venta futura dependen de que la casa figure en los papeles.',
          ],
        },
        { t: 'p', html: 'Sobre los honorarios: los colegios de arquitectos de cada departamento tienen aranceles de referencia, y en la práctica se acuerda un monto por el proyecto completo o por metro cuadrado diseñado. Pide la propuesta por escrito, con qué planos incluye y si cubre el trámite de aprobación.' },
        { t: 'callout', tone: 'warn', title: 'Información general', html: 'Información general. Consulta con un abogado o notario de fe pública antes de decidir. Para la obra, consulta con un arquitecto o ingeniero civil habilitado.' },
      ],
    },
    {
      id: 'santa-cruz-la-paz-y-cochabamba',
      h2: 'Construir en Santa Cruz, La Paz o Cochabamba: qué mirar en cada una',
      blocks: [
        { t: 'p', html: 'El terreno y el clima cambian la obra más que el nombre de la ciudad.' },
        {
          t: 'ul',
          items: [
            '<strong>Santa Cruz:</strong> lluvia fuerte y calor. Mira el nivel del terreno respecto a la calle, el drenaje, y piensa en techos y ventilación.',
            '<strong>La Paz:</strong> pendientes. Estudio de suelos, muros de contención y movimiento de tierras pueden pesar tanto como la casa. Pregunta en el municipio por el riesgo de la zona.',
            '<strong>Cochabamba:</strong> el agua. Presupuesta tanque elevado o cisterna y bomba, y pregunta cómo llega el agua al barrio.',
          ],
        },
      ],
    },
    {
      id: 'construir-o-comprar-hecha',
      h2: '¿Conviene construir o comprar una casa hecha?',
      blocks: [
        { t: 'p', html: 'Haz la cuenta completa: terreno más el mejor de tus tres presupuestos, más permisos, conexiones e imprevistos. Y compárala con lo que piden por casas terminadas en tu ciudad.' },
        { t: 'p', html: 'Como referencia, la mediana del precio de publicación de una casa es de USD 145.500 en Santa Cruz de la Sierra, USD 167.500 en Cochabamba y USD 220.000 en La Paz, según los avisos publicados en <a href="https://casa-libre.com.bo/comprar">Casa-Libre</a> al 13 de noviembre de 2026. Son precios pedidos, no de cierre, e incluyen el terreno. Más detalle en <a href="/cuanto-cuesta-una-casa-en-bolivia/">cuánto cuesta una casa en Bolivia</a>.' },
        { t: 'p', html: 'Si vas a construir con crédito, la entidad financiera suele pedir planos aprobados y presupuesto, y desembolsa por etapas, según el avance de la obra. Calcula antes <a href="/cuanto-me-presta-el-banco-segun-mi-sueldo/">cuánto te presta el banco según tu sueldo</a>. Y si todavía buscas terreno, mira los que hay en Santa Cruz en <a href="https://casa-libre.com.bo/venta/terrenos/santa-cruz-de-la-sierra">Casa-Libre</a>.' },
      ],
    },
  ],
  faq: [
    { q: '¿Cuánto cuesta el metro cuadrado de construcción en Santa Cruz, Bolivia?', a: 'No hay un valor oficial. Los que circulan son estimaciones de constructores y cambian según acabados y lo que incluyen. Pide tres presupuestos por ítems sobre tus planos y divide cada total entre tus metros: ese es tu precio por metro.' },
    { q: '¿Cuánto cuesta construir una casa de 2 pisos en Bolivia?', a: 'Depende de la superficie, el suelo y los acabados. Una casa de dos pisos lleva estructura calculada por un ingeniero (cimientos, columnas, losa, escalera), que pesa más en el presupuesto que en una casa de una planta.' },
    { q: '¿Cuánto cuesta construir un cuarto de 4x4 en Bolivia?', a: 'No hay una cifra oficial. En obras chicas el metro cuadrado suele salir más caro que en una casa entera. Pide a dos o tres maestros albañiles un presupuesto que separe materiales y mano de obra.' },
    { q: '¿Cuánto cobra un arquitecto por un plano de casa en Bolivia?', a: 'Se acuerda por proyecto o por metro cuadrado diseñado, y los colegios de arquitectos tienen aranceles de referencia. Pide la propuesta por escrito y pregunta si incluye los planos estructurales y de instalaciones y el trámite en el municipio.' },
    { q: '¿Hay crédito para construcción de vivienda en Bolivia?', a: 'Sí, las entidades financieras tienen créditos para construir en terreno propio. Suelen pedir el terreno a tu nombre, planos aprobados y presupuesto, y desembolsan por etapas. Las condiciones las informa cada entidad, bajo supervisión de ASFI.' },
  ],
  sources: [
    { label: 'Instituto Nacional de Estadística (INE), Índice del Costo de la Construcción', detail: 'Mide la variación del costo de construir; no publica un precio por metro cuadrado.' },
    { label: 'Gobierno municipal del lugar del terreno', detail: 'Aprobación de planos, permiso de construcción y catastro.' },
    { label: 'Ley 393 de Servicios Financieros y Decreto Supremo 1842', detail: 'El crédito de vivienda de interés social alcanza también a la construcción en terreno propio.' },
    { label: 'Avisos publicados en Casa-Libre (consulta del 13 de noviembre de 2026)', detail: 'Precios de publicación de casas en venta. No son precios de cierre.' },
  ],
  internalSources: [
    { label: 'INE Bolivia, Índice del Costo de la Construcción (boletines y catálogo ANDA)', url: 'https://anda.ine.gob.bo/index.php/catalog/193/pdf-documentation', date: '2026-11-15', note: 'ICC is an index (base 2002) with a "Edificios Residenciales Urbanos" category for La Paz, Cochabamba, Santa Cruz and El Alto; no per-m2 price. 2026 figures not retrieved.' },
    { label: 'Decreto Supremo 1842, considerandos (anexo Ley 393)', url: 'https://www.lexivox.org/norms/BO-DS-N1842.xhtml', date: '2026-11-15', note: 'VIS: value or final construction cost including land; land bought to build counts if up to 40% of the cap for houses.' },
    { label: 'content/data/bo-market.json', url: 'https://casa-libre.com.bo/comprar', date: '2026-11-13', note: 'House medians: SCZ 145,500; CBBA 167,500; LP 220,000 (asking prices).' },
    { label: 'Google autocomplete gl=bo', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=cuanto%20cuesta%20construir%20una%20casa%20en%20bolivia', date: '2026-11-15', note: 'Variants listed in keyword.evidence.' },
  ],
  closing: {
    title: 'Compara tu presupuesto con casas terminadas',
    text: 'Mira lo que se pide hoy por casas y terrenos en tu ciudad y decide con los números al lado.',
    button: 'Buscar en el mapa',
    href: 'https://casa-libre.com.bo/propiedades',
  },
  related: ['cuanto-cuesta-una-casa-en-bolivia', 'lotes-a-credito', 'cuanto-me-presta-el-banco-segun-mi-sueldo'],
};
