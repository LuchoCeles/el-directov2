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
  `Enviá encomiendas y carga entre Rosario y Mar del Plata con salidas los ${itinerarioDirecto.diasSalida.join(' y ')}. Contanos qué necesitás transportar y te ayudamos a cotizar.`;

export const empresa = {
  nombre: 'Transporte El Directo',
  sufijo: 'SRL',
  nombreCompleto: 'Transporte El Directo SRL',
  logo: '/truck.png',
  añoFundacion: 1963,
  descripcion:
    'En Transporte El Directo llevamos encomiendas y cargas entre Rosario y Mar del Plata en ambos sentidos. Si necesitás un retiro, una entrega a domicilio o un redespacho, consultanos para ver cómo coordinarlo.',
  queHacemos: `Llevamos encomiendas, cajas y carga general entre nuestras sucursales de Rosario y Mar del Plata sin transbordos. Los camiones salen los ${itinerarioDirecto.diasSalida.join(' y ')} desde ambas ciudades y tienen previsto llegar a la sucursal de destino ${itinerarioDirecto.arriboPrevisto.referencia} a las ${itinerarioDirecto.arriboPrevisto.hora}. También transportamos mercadería paletizada, muebles, equipos y vehículos, y coordinamos mudanzas. Si necesitás retirar la carga en origen, recibirla a domicilio o enviarla a otra localidad, contanos tu caso para consultar las opciones disponibles.`,
  quienesSomos: 'Somos una empresa argentina de transporte. Desde las sucursales de Rosario y Mar del Plata atendemos a personas, comercios y empresas, y organizamos cada traslado según la carga, el origen y el destino.',
};

export const metadatosPaginas = {
  servicios: {
    titulo: 'Servicios de transporte y logística | El Directo',
    descripcion: 'Enviá encomiendas, carga general y vehículos entre Rosario y Mar del Plata. También coordinamos mudanzas y podés consultar por redespachos a otras localidades.',
    imagenAlt: 'Servicios de Transporte El Directo',
  },
  cobertura: {
    titulo: 'Cobertura y destinos de transporte | El Directo',
    descripcion: 'Viajamos directamente entre Rosario y Mar del Plata. Conocé nuestras rutas y consultanos por la disponibilidad, el costo y el plazo de los redespachos.',
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
    descripcion: `Encontrá respuestas de ${empresa.nombre} sobre embalaje, tipos de carga, retiros, entregas, redespachos, precios y seguro antes de preparar tu envío.`,
    imagenAlt: `Preguntas frecuentes de ${empresa.nombre}`,
  },
  contacto: {
    titulo: 'Contacto y cotización de envíos | El Directo',
    descripcion: '¿Necesitás enviar una encomienda o carga entre Rosario y Mar del Plata? Contanos qué vas a transportar o contactá una sucursal para pedir una cotización.',
    imagenAlt: `Contacto con ${empresa.nombre}`,
  },
  'terminos-y-condiciones': {
    titulo: `Términos y condiciones de uso del sitio | ${empresa.nombre}`,
    descripcion: `Información sobre el uso del sitio, las consultas y la contratación de servicios de ${empresa.nombreCompleto}.`,
    imagenAlt: `Términos y condiciones de ${empresa.nombre}`,
  },
  privacidad: {
    titulo: `Política de privacidad | ${empresa.nombre}`,
    descripcion: `Conocé qué datos recibe ${empresa.nombreCompleto} mediante el formulario de contacto y cómo ejercer tus derechos.`,
    imagenAlt: `Política de privacidad de ${empresa.nombre}`,
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
      domingo: 'Cerrado',
      feriados: 'Cerrado',
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
      domingo: 'Cerrado',
      feriados: 'Cerrado',
    },
  },
];

export const rutasDirectas = [
  {
    slug: 'envios-a-rosario',
    origen: sucursales[1],
    destino: sucursales[0],
    titulo: `Envíos a ${sucursales[0].nombre} desde ${sucursales[1].nombre}`,
    descripcion: `Podés traer tus encomiendas o tu carga a la sucursal de ${sucursales[1].nombre} para enviarlas directamente a ${sucursales[0].nombre}. Cuando lleguen, podés retirarlas en sucursal o consultar por una entrega a domicilio.`,
    tituloSeo: `Envíos a ${sucursales[0].nombre} desde ${sucursales[1].nombre} | El Directo`,
    descripcionSeo: `Enviá encomiendas y carga de ${sucursales[1].nombre} a ${sucursales[0].nombre} con servicio directo entre sucursales. Consultanos por retiro en origen y entrega en destino.`,
  },
  {
    slug: 'envios-a-mar-del-plata',
    origen: sucursales[0],
    destino: sucursales[1],
    titulo: `Envíos a ${sucursales[1].nombre} desde ${sucursales[0].nombre}`,
    descripcion: `Si enviás desde ${sucursales[0].nombre}, contanos qué necesitás transportar, sus medidas y el destino final. Te ayudamos a organizar el despacho y la recepción en ${sucursales[1].nombre}.`,
    tituloSeo: `Envíos a ${sucursales[1].nombre} desde ${sucursales[0].nombre} | El Directo`,
    descripcionSeo: `Enviá encomiendas y carga de ${sucursales[0].nombre} a ${sucursales[1].nombre} con atención en ambas sucursales. Consultanos por retiro y entrega a domicilio.`,
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
    destinos: ['Tandil', 'Balcarce', 'Miramar', 'Necochea', 'Otamendi', 'Pinamar', 'Villa Gesell', 'Mar de Ajó', 'San Clemente del Tuyú'],
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
      'Enviá cajas, bultos y paquetes, ya sea para vos o para tu negocio. Si tenés dudas sobre las medidas, el embalaje o el retiro y la entrega, escribinos antes de despachar.',
  },
  {
    nombre: 'Mudanzas',
    descripcion:
      'Te ayudamos a organizar la mudanza de tu casa u oficina. Contanos qué necesitás llevar y adónde va para coordinar el espacio y las opciones de retiro y entrega.',
  },
  {
    nombre: 'Transporte de vehículos',
    descripcion:
      'Transportamos autos, motos, bicicletas y cuatriciclos. Antes de enviarlo, consultanos cómo preparar tu vehículo y qué opciones hay para retirarlo y entregarlo.',
  },
  {
    nombre: 'Redespachos',
    descripcion:
      'Si tu envío va más allá de Rosario o Mar del Plata, podemos consultar un redespacho desde nuestras sucursales. Decinos el destino para confirmar si está disponible y cuánto puede demorar.',
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
      'Escribinos por WhatsApp, llamanos o completá el formulario. Contanos desde dónde y hacia dónde va el envío, qué vas a mandar y cuáles son sus medidas y peso aproximados. Con esos datos podemos orientarte sobre el embalaje y el despacho.',
  },
  {
    pregunta: '¿Pueden retirar o entregar la carga a domicilio?',
    respuesta:
      'Sí, podemos coordinar un retiro en origen o una entrega en destino según la dirección, el tipo de carga y la disponibilidad. Pasanos los domicilios para consultar esta opción al cotizar.',
  },
  {
    pregunta: '¿Qué tipos de carga transportan?',
    respuesta:
      'Transportamos desde cajas y encomiendas hasta mercadería paletizada, muebles, electrodomésticos, equipos gastronómicos y vehículos. Si lo que querés enviar es grande o frágil, consultanos cómo prepararlo antes de llevarlo a la sucursal.',
  },
  {
    pregunta: '¿Hacen envíos a otras localidades?',
    respuesta: `Sí, podemos coordinar redespachos desde nuestras sucursales a localidades como ${[...ciudadesRedespacho.slice(0, 2), ciudadesRedespacho[4], ...ciudadesRedespacho.slice(-4)].join(', ')}. Decinos adónde va tu envío para confirmar la disponibilidad, el costo y el plazo.`,
  },
  {
    pregunta: '¿Cuánto cuesta enviar una encomienda o carga?',
    respuesta:
      'Para darte un precio necesitamos saber qué enviás, cuánto mide y pesa, y cuál es el origen y el destino. El retiro, la entrega a domicilio o un redespacho también pueden influir. Podés pedirnos una cotización por WhatsApp o desde el formulario.',
  },
  {
    pregunta: '¿La carga viaja asegurada?',
    respuesta:
      'Sí, el servicio incluye seguro de carga. Antes de confirmar tu envío, consultanos qué condiciones y qué cobertura corresponden a tu mercadería.',
  },
  {
    pregunta: '¿Cómo tengo que embalar mi encomienda?',
    respuesta:
      'Prepará el bulto para que el contenido quede protegido durante el viaje. Usá una caja, film u otra protección adecuada y acolchá los objetos frágiles. Si no sabés cómo embalar algo, consultanos antes de acercarte a la sucursal.',
  },
];
