const urlCruda = process.env.NEXT_PUBLIC_SITE_URL;

if (!urlCruda && typeof window === "undefined") {
  console.warn(
    "[datos.js] NEXT_PUBLIC_SITE_URL no definida. " +
    "Creá un archivo .env con NEXT_PUBLIC_SITE_URL=https://tusitio.com"
  );
}

export const urlSitio = (urlCruda || "https://transporteeldirecto.com.ar").replace(/\/+$/, "");

export const itinerarioDirecto = {
  diasSalida: ['miércoles', 'viernes'],
  arriboPrevisto: { referencia: 'al día siguiente', hora: '08:00' },
};

export const tituloSeo =
  'Envíos entre Rosario y Mar del Plata | El Directo';

export const descripcionSeo =
  `Encomiendas y carga entre Rosario y Mar del Plata. Salidas ${itinerarioDirecto.diasSalida.join(' y ')} desde ambas sucursales. Consultá precios, retiro y entrega.`;

export const empresa = {
  nombre: 'Transporte El Directo',
  sufijo: 'SRL',
  nombreCompleto: 'Transporte El Directo SRL',
  logo: '/truck.png',
  añoFundacion: 1963,
  descripcion:
    'Transporte El Directo SRL conecta Rosario y Mar del Plata con transporte de encomiendas y cargas en ambos sentidos. También coordina retiros, entregas y redespachos según el destino.',
  queHacemos: `Transportamos encomiendas, cajas y carga general entre Rosario y Mar del Plata sin transbordo entre sucursales. Los camiones salen los ${itinerarioDirecto.diasSalida.join(' y ')} desde ambas ciudades; el arribo a la sucursal de destino está previsto para ${itinerarioDirecto.arriboPrevisto.referencia} a las ${itinerarioDirecto.arriboPrevisto.hora}. También trasladamos mercadería paletizada, muebles, equipos, vehículos y mudanzas. El retiro, la entrega a domicilio y los envíos con redespacho se coordinan según cada caso.`,
  quienesSomos: 'Somos una empresa argentina de transporte que atiende a particulares, comercios y empresas desde nuestras sucursales de Rosario y Mar del Plata. Nuestro equipo recibe cada consulta y organiza el traslado de acuerdo con la carga, el origen y el destino.',
};

export const metadatosPaginas = {
  servicios: {
    titulo: 'Servicios de transporte y logística | El Directo',
    descripcion: 'Encomiendas, carga general, mudanzas y vehículos entre Rosario y Mar del Plata. Consultá por redespachos a otras localidades.',
    imagenAlt: 'Servicios de Transporte El Directo',
  },
  cobertura: {
    titulo: 'Cobertura y destinos de transporte | El Directo',
    descripcion: 'Servicio directo de carga y encomiendas entre Rosario y Mar del Plata. Consultá los destinos con redespacho y la disponibilidad, costo y plazo de tu envío.',
    imagenAlt: 'Cobertura de Transporte El Directo',
  },
  empresa: {
    titulo: `La empresa | ${empresa.nombre}`,
    descripcion: `${empresa.nombreCompleto}, fundada en ${empresa.añoFundacion}, transporta encomiendas y cargas entre Rosario y Mar del Plata. Conocé cómo trabajamos.`,
    imagenAlt: empresa.nombreCompleto,
  },
  sucursales: {
    titulo: `Sucursales en Rosario y Mar del Plata | ${empresa.nombre}`,
    descripcion: `Direcciones, teléfonos y horarios de las sucursales de ${empresa.nombre} en Rosario y Mar del Plata. Contactanos para organizar tu envío.`,
    imagenAlt: `Sucursales de ${empresa.nombre}`,
  },
  'preguntas-frecuentes': {
    titulo: `Preguntas frecuentes sobre envíos | ${empresa.nombre}`,
    descripcion: `Respuestas sobre encomiendas, tipos de carga, embalaje, retiro, entrega, redespachos, precios y seguro de carga de ${empresa.nombre}.`,
    imagenAlt: `Preguntas frecuentes de ${empresa.nombre}`,
  },
  contacto: {
    titulo: 'Contacto y cotización de envíos | El Directo',
    descripcion: 'Consultá por encomiendas y cargas entre Rosario y Mar del Plata. Enviá los datos de tu carga o contactá nuestras sucursales para solicitar una cotización.',
    imagenAlt: `Contacto con ${empresa.nombre}`,
  },
};

export const sucursales = [
  {
    nombre: 'Rosario',
    correo: 'eldirectorosario@hotmail.com',
    telefono: ['(0341) 439-7465', '(0341) 439-0198'],
    whatsapp: '+5492235229473',
    direccion: 'Sucre 1070, Rosario, Santa Fe',
    regionDireccion: 'Santa Fe',
    coordenadas: { lat: -32.940472, lng: -60.693676 },
    mapaIncrustado:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8742825394545!2d-60.69367562355524!3d-32.94047227356854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7acb3e8c1dccb%3A0x283f28125e408192!2sSucre%201070%2C%20S2002SGF%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1721068955432!5m2!1ses-419!2sar',
    horarios: {
      semana: { abre: '07:30', cierra: '15:30' },
      sabado: { abre: '07:30', cierra: '11:30' },
    },
  },
  {
    nombre: 'Mar del Plata',
    correo: 'eldirecto@live.com.ar',
    telefono: ['(0223) 477-1190', '(0223) 477-2930'],
    whatsapp: '+5492235838574',
    direccion: 'Teodoro Bronzini 2953, Mar del Plata, Buenos Aires',
    regionDireccion: 'Buenos Aires',
    coordenadas: { lat: -37.995496, lng: -57.592805 },
    mapaIncrustado:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10668.789698399297!2d-57.592805002337836!3d-37.99549622443571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d93ea488288d%3A0xaf6e9ff6aeeeb324!2sEl%20Directo!5e0!3m2!1ses-419!2sar!4v1721065757482!5m2!1ses-419!2sar',
    horarios: {
      semana: { abre: '08:00', cierra: '16:00' },
      sabado: { abre: '08:00', cierra: '12:00' },
    },
  },
];

export const rutasDirectas = [
  {
    slug: 'envios-a-rosario',
    origen: sucursales[1],
    destino: sucursales[0],
    titulo: `Envíos a ${sucursales[0].nombre} desde ${sucursales[1].nombre}`,
    descripcion: `Despachá encomiendas y carga en nuestra sucursal de ${sucursales[1].nombre}. Al llegar a ${sucursales[0].nombre}, podés retirar en sucursal o consultar por entrega a domicilio.`,
    tituloSeo: `Envíos a ${sucursales[0].nombre} desde ${sucursales[1].nombre} | El Directo`,
    descripcionSeo: `Para envíos hacia ${sucursales[0].nombre} desde ${sucursales[1].nombre}, consultá por cargas y encomiendas, retiro en origen y entrega en destino. Servicio directo entre sucursales.`,
  },
  {
    slug: 'envios-a-mar-del-plata',
    origen: sucursales[0],
    destino: sucursales[1],
    titulo: `Envíos a ${sucursales[1].nombre} desde ${sucursales[0].nombre}`,
    descripcion: `Para enviar desde ${sucursales[0].nombre}, indicá qué necesitás transportar, sus medidas y el destino final. Te ayudamos a coordinar el despacho y la recepción en ${sucursales[1].nombre}.`,
    tituloSeo: `Envíos a ${sucursales[1].nombre} desde ${sucursales[0].nombre} | El Directo`,
    descripcionSeo: `Para envíos hacia ${sucursales[1].nombre} desde ${sucursales[0].nombre}, cotizá encomiendas y carga con atención en ambas sucursales. Consultá retiro y entrega a domicilio.`,
  },
];

export const redespachosPorSucursal = [
  {
    sucursal: sucursales[0],
    destinos: [
      'Santa Fe',
      'Rafaela',
      'Sunchales',
      'San Cristóbal',
      'Córdoba',
      'La Pampa',
      'Bahía Blanca',
      'Bariloche',
      'San Martín de los Andes',
    ],
  },
  {
    sucursal: sucursales[1],
    destinos: ['Tandil', 'Balcarce', 'Miramar', 'Necochea'],
  },
];

export const ciudadesRedespacho = redespachosPorSucursal.flatMap(
  ({ destinos }) => destinos
);

export const ciudadesDirecto = ['Rosario', 'Mar del Plata'];

export const servicios = [
  {
    nombre: 'Encomiendas y paquetería',
    descripcion:
      'Despachá cajas, bultos y paquetes para particulares o empresas. Consultanos por dimensiones, embalaje y opciones de retiro o entrega.',
  },
  {
    nombre: 'Mudanzas',
    descripcion:
      'Coordinamos mudanzas de hogares y oficinas. Contanos qué necesitás trasladar para definir espacio, retiro y destino.',
  },
  {
    nombre: 'Transporte de vehículos',
    descripcion:
      'Trasladamos autos, motos, bicicletas y cuatriciclos. Consultá las condiciones de preparación, retiro y entrega.',
  },
  {
    nombre: 'Redespachos',
    descripcion:
      'Coordinamos conexiones con otras localidades desde ambas sucursales. Indicá el destino para confirmar disponibilidad y plazos.',
  },
];

export const tiposDeCarga = [
  'Cajas y bultos sueltos',
  'Carga general',
  'Mercadería paletizada',
  'Línea blanca (heladeras, cocinas, lavarropas)',
  'Equipos gastronómicos',
  'Muebles',
];

export const preguntasFrecuentes = [
  {
    pregunta: '¿Cómo puedo despachar una encomienda?',
    respuesta:
      'Escribinos por WhatsApp, llamanos o completá el formulario. Para orientarte necesitamos la ciudad de origen y destino, qué vas a enviar y sus medidas y peso aproximados. Te indicamos cómo preparar el bulto y dónde entregarlo.',
  },
  {
    pregunta: '¿Pueden retirar o entregar la carga a domicilio?',
    respuesta:
      'Podemos coordinar el retiro en origen o la entrega en destino según la dirección, el tipo de carga y la disponibilidad. Pasanos los domicilios para incluir esta opción en la cotización.',
  },
  {
    pregunta: '¿Qué tipos de carga transportan?',
    respuesta:
      'Recibimos cajas, bultos, encomiendas y mercadería paletizada. También trasladamos muebles, línea blanca, equipos gastronómicos y vehículos. Para objetos grandes o frágiles, consultanos las condiciones antes de despacharlos.',
  },
  {
    pregunta: '¿Hacen envíos a otras localidades?',
    respuesta: `Sí, coordinamos redespachos desde nuestras sucursales a localidades como ${[...ciudadesRedespacho.slice(0, 2), ciudadesRedespacho[4], ...ciudadesRedespacho.slice(-4)].join(', ')}. Indicá tu destino para confirmar cobertura, costo y plazo.`,
  },
  {
    pregunta: '¿Cuánto cuesta enviar una encomienda o carga?',
    respuesta:
      'El precio depende del tamaño, peso, tipo de carga, origen y destino. También influye si necesitás retiro, entrega a domicilio o redespacho. Pedí un presupuesto por WhatsApp o desde el formulario.',
  },
  {
    pregunta: '¿La carga viaja asegurada?',
    respuesta:
      'El servicio incluye seguro de carga. Consultanos las condiciones y el alcance de la cobertura para tu mercadería antes de confirmar el envío.',
  },
  {
    pregunta: '¿Cómo tengo que embalar mi encomienda?',
    respuesta:
      'La mercadería debe estar embalada para soportar el traslado. Usá caja, film o protección adecuada según el contenido, y acolchá los objetos frágiles. Si tenés dudas sobre un artículo, consultanos antes de llevarlo a la sucursal.',
  },
];
