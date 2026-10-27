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
  arriboPrevisto: { referencia: 'el día siguiente' },
};

export const tituloSeo =
  'Encomiendas y cargas generales desde Rosario y Mar del Plata | El Directo';

export const descripcionSeo =
  `Transporte de encomiendas y cargas generales desde Rosario y Mar del Plata, en ambos sentidos. Consultanos por equipos completos, maquinaria industrial y mercadería paletizada.`;

export const empresa = {
  nombre: 'Transporte El Directo',
  sufijo: 'SRL',
  nombreCompleto: 'Transporte El Directo SRL',
  logo: '/truck.png',
  trayectoria: 'Más de 60 años de trayectoria en el transporte de cargas',
  descripcion:
    'En Transporte El Directo llevamos encomiendas y cargas generales desde Rosario y Mar del Plata, en ambos sentidos. Consultanos por equipos completos, retiros, entregas a domicilio y conexiones con otros destinos.',
  queHacemos: `Transportamos encomiendas y cargas generales desde nuestras sucursales de Rosario y Mar del Plata, en ambos sentidos y sin transbordos en el trayecto directo. Los camiones salen los ${itinerarioDirecto.diasSalida.join(' y ')} desde ambas ciudades y el arribo a destino está previsto para ${itinerarioDirecto.arriboPrevisto.referencia}. Trabajamos con cajas, mercadería paletizada, muebles y equipamiento comercial. Consultanos por equipos completos, maquinaria industrial, repuestos e implementos agrícolas y alimentos; evaluamos cada operación según la carga y sus requisitos. Si necesitás retirar la carga en origen, recibirla a domicilio o enviarla a otra localidad, contanos tu caso para consultar las opciones disponibles.`,
  quienesSomos: 'Somos una empresa argentina de transporte. Desde las sucursales de Rosario y Mar del Plata atendemos a personas, comercios y empresas, y organizamos cada traslado según la carga, el origen y el destino.',
};

export const metadatosPaginas = {
  servicios: {
    titulo: 'Equipos completos, cargas generales y encomiendas | El Directo',
    descripcion: 'Consultanos por equipos completos, cargas generales, encomiendas, maquinaria industrial, repuestos agrícolas y alimentos desde Rosario y Mar del Plata.',
    imagenAlt: 'Servicios de Transporte El Directo',
  },
  cobertura: {
    titulo: 'Cobertura: Rosario, Mar del Plata y redespachos | El Directo',
    descripcion: 'Transportamos encomiendas y cargas generales desde Rosario y Mar del Plata, en ambos sentidos. Consultá por conexiones con otros destinos según la carga y disponibilidad.',
    imagenAlt: 'Cobertura de Transporte El Directo',
  },
  empresa: {
    titulo: `${empresa.nombre}: trayectoria y transporte de cargas`,
    descripcion: `Con más de 60 años de trayectoria, ${empresa.nombreCompleto} transporta encomiendas y cargas generales desde Rosario y Mar del Plata, en ambos sentidos.`,
    imagenAlt: empresa.nombreCompleto,
  },
  sucursales: {
    titulo: `Sucursales en Rosario y Mar del Plata | ${empresa.nombre}`,
    descripcion: `Encontrá las direcciones, horarios y teléfonos de nuestras sucursales en Rosario y Mar del Plata para consultar, despachar o retirar tu encomienda o carga.`,
    imagenAlt: `Sucursales de ${empresa.nombre}`,
  },
  'preguntas-frecuentes': {
    titulo: `Preguntas sobre cargas generales y encomiendas | ${empresa.nombre}`,
    descripcion: `Respondemos dudas sobre equipos completos, maquinaria industrial, alimentos, seguros, embalaje y salidas desde Rosario y Mar del Plata.`,
    imagenAlt: `Preguntas frecuentes de ${empresa.nombre}`,
  },
  contacto: {
    titulo: 'Cotizá encomiendas y cargas generales | El Directo',
    descripcion: 'Pedí una cotización para enviar encomiendas, cargas generales o un equipo completo desde Rosario y Mar del Plata, en ambos sentidos. Contanos qué necesitás transportar.',
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
    tituloSeo: `Encomiendas y cargas generales de Mar del Plata a Rosario | El Directo`,
    descripcionSeo: `Enviá encomiendas y cargas generales de Mar del Plata a Rosario con salidas los ${itinerarioDirecto.diasSalida.join(' y ')}. Consultá por retiro, entrega o equipo completo.`,
  },
  {
    slug: 'envios-a-mar-del-plata',
    origen: sucursales[0],
    destino: sucursales[1],
    titulo: `Envíos a ${sucursales[1].nombre} desde ${sucursales[0].nombre}`,
    descripcion: `Si enviás desde ${sucursales[0].nombre}, contanos qué necesitás transportar, sus medidas y el destino final. Te ayudamos a organizar el despacho y la recepción en ${sucursales[1].nombre}.`,
    tituloSeo: `Encomiendas y cargas generales de Rosario a Mar del Plata | El Directo`,
    descripcionSeo: `Enviá encomiendas y cargas generales de Rosario a Mar del Plata con salidas los ${itinerarioDirecto.diasSalida.join(' y ')}. Consultá por retiro, entrega o equipo completo.`,
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
      'Bahía Blanca',
    ],
  },
  {
    sucursal: sucursales[1],
    destinos: ['Costa Atlántica bonaerense', 'Balcarce', 'Miramar', 'Necochea', 'Otamendi', 'Pinamar', 'Mar de Ajó', 'San Clemente del Tuyú'],
  },
];

export const ciudadesRedespacho = redespachosPorSucursal.flatMap(
  ({ destinos }) => destinos
);

export const ciudadesDirecto = ['Rosario', 'Mar del Plata'];

export const servicios = [
  {
    nombre: 'Equipo completo',
    descripcion:
      '¿Necesitás transportar una carga de gran volumen? Consultanos por un vehículo completo para mercadería, maquinaria y cargas empresariales. Evaluamos dimensiones, peso y requisitos antes de coordinar el traslado.',
  },
  {
    nombre: 'Cargas generales',
    descripcion:
      'Transportamos mercadería paletizada, muebles, equipamiento comercial y cargas de mayor volumen. Atendemos consultas de fábricas, comercios y distribuidores según las características de cada operación.',
  },
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
    nombre: 'Redespachos y conexiones con otros destinos',
    descripcion:
      'Si el destino no aparece en el recorrido habitual, consultanos. Evaluamos opciones de conexión desde nuestras sucursales según el tipo de carga, su volumen, el destino y la disponibilidad.',
  },
];

export const tiposDeCarga = [
  'Mercadería paletizada',
  'Equipamiento comercial',
  'Maquinaria industrial y equipamiento para empresas',
  'Repuestos e implementos para maquinaria agrícola',
  'Alimentos (sujetos a consulta)',
  'Cajas y bultos sueltos',
  'Línea blanca (heladeras, cocinas, lavarropas)',
  'Equipos gastronómicos',
  'Muebles',
];

export const preguntasFrecuentes = [
  {
    pregunta: '¿Qué días salen los camiones?',
    respuesta: `Los camiones salen los ${itinerarioDirecto.diasSalida.join(' y ')} desde ambas ciudades. El arribo a la sucursal de destino está previsto para ${itinerarioDirecto.arriboPrevisto.referencia}. Antes de acercarte a retirar una carga o coordinar una entrega, consultanos para confirmar su disponibilidad.`,
  },
  {
    pregunta: '¿Cómo puedo despachar una encomienda?',
    respuesta:
      'Escribinos por WhatsApp, llamanos o completá el formulario. Contanos desde dónde y hacia dónde va el envío, qué vas a mandar, cuántos bultos son y cuáles son sus medidas y peso aproximados. Con esos datos podemos orientarte sobre el embalaje y el despacho.',
  },
  {
    pregunta: '¿Qué información necesito para pedir una cotización?',
    respuesta:
      'Decinos qué tipo de carga querés enviar, cuántos bultos son y sus medidas y peso aproximados. También necesitamos las ciudades de origen y destino. Si necesitás retiro o entrega a domicilio, pasanos las direcciones para consultar esa opción y cotizarla.',
  },
  {
    pregunta: '¿Realizan retiros o entregas a domicilio?',
    respuesta:
      'Sí, podemos coordinar un retiro en origen o una entrega en destino según la dirección, el tipo de carga y la disponibilidad. Pasanos los domicilios para consultar esta opción al cotizar.',
  },
  {
    pregunta: '¿Qué cargas pueden transportar?',
    respuesta:
      'Transportamos cargas generales y encomiendas: mercadería paletizada, cajas, muebles, electrodomésticos y equipamiento comercial. También podemos trasladar maquinaria industrial, repuestos e implementos para maquinaria agrícola y cargas de mayor volumen, según sus dimensiones, peso y requisitos.',
  },
  {
    pregunta: '¿Transportan autos, motos y bicicletas?',
    respuesta:
      'Sí, transportamos autos, motos, bicicletas y cuatriciclos. Contanos qué necesitás trasladar para consultar el espacio disponible, cómo prepararlo y las opciones de retiro y entrega.',
  },
  {
    pregunta: '¿Puedo solicitar un equipo completo?',
    respuesta:
      'Sí. Ofrecemos un equipo completo para mercadería, maquinaria y cargas empresariales de gran volumen. Para coordinarlo necesitamos conocer las dimensiones, el peso, el origen y el destino.',
  },
  {
    pregunta: '¿Transportan maquinaria industrial?',
    respuesta:
      'Sí, transportamos maquinaria industrial y equipamiento para empresas, incluidos tornos. El traslado se coordina según las dimensiones, el peso y los requisitos de la carga.',
  },
  {
    pregunta: '¿Se pueden llevar alimentos?',
    respuesta:
      'Sí, podemos transportar alimentos. Contanos qué productos querés enviar, en qué cantidad y cómo están embalados, además del origen y el destino. Con esos datos podemos revisar los requisitos de la carga y orientarte sobre el despacho.',
  },
  {
    pregunta: '¿Realizan envíos a otros destinos?',
    respuesta:
      'Nuestro recorrido habitual conecta Rosario y Mar del Plata en ambos sentidos. Para otros destinos evaluamos alternativas según la mercadería, su volumen y el lugar de entrega; la disponibilidad, el costo y el plazo se confirman para cada operación.',
  },
  {
    pregunta: '¿Cuánto cuesta enviar una encomienda o carga?',
    respuesta:
      'El precio depende del tipo de carga, la cantidad, las medidas, el peso, el origen y el destino. El retiro, la entrega a domicilio o un redespacho también pueden influir. Podés pedirnos una cotización por WhatsApp o desde el formulario.',
  },
  {
    pregunta: '¿La carga viaja asegurada?',
    respuesta:
      'Sí, el servicio incluye seguro de carga si no contás con seguro propio.',
  },
  {
    pregunta: '¿Cómo tengo que embalar una encomienda?',
    respuesta:
      'Prepará el bulto para que el contenido quede protegido durante el viaje. Usá una caja, film u otra protección adecuada y protegé especialmente los objetos frágiles. Si no sabés cómo embalar algo, consultanos antes de acercarte a la sucursal.',
  },
];
