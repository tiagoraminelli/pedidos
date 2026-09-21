// ============================================================
// BASES DE ARTÍCULOS
// ============================================================
const BASE_LIBRERIA_ORIGINAL = [
  "Abrochadora pinza p/broche (GRAP 21/6)",
  "Abrochadora p/broche 21/6",
  "Abrochadora p/broche 50",
  "Abrochadora p/100 hojas c/broches",
  "Abrojo autoadhesivo 2 cm de ancho x metro",
  "Abrojo 5 cm de ancho x metro",
  'Adhesivo "La Gotita"',
  "Adhesivo Poxi-ran pomo 90 grs.",
  "Almohadilla dactilar (humedecedora)",
  "Almohadilla p/sellos",
  "Anotador (Block esquelita) 10 x 16 cm, 80 pág., \"Nevado\"",
  "Arandela de cartón rojas x 500 unidades",
  "Aros metálicos para carpeta",
  "Bandas elásticas x 250gr",
  "Bandas elásticas 10 cm de diámetro x 500 grs.",
  "Batería 9V Energizer/Duracel",
  "Bibliorato oficio",
  "Bibliorato plastificado oficio",
  "Bloques Construcción (tipo Qubic) 600 piezas",
  "Bolsa de nylon cristal 15 x 20 cm., rollo",
  "Bolsa de nylon 20 x 30 cm., rollo x 1,25kg",
  "Borrador p/pizarra",
  "Broche dorado Nº 9, caja",
  "Broche dorado Nº 14, caja",
  "Broche plástico Nepaco, caja",
  "Broches Nº 10/50 para abrochadora GRAP (naranja), caja",
  "Broches Nº 21/6 para abrochadora, caja",
  "Broches Nº 50 para abrochadora, caja",
  "Broches sujetadores de Documentos (Manitas) Tamaño Chico",
  "Broches sujetadores de Documentos (Manitas) Tamaño Mediano",
  "Broches sujetadores de Documentos (Manitas) Tamaño Grande",
  "Caja de archivo fibra negra c/elástico altura 5cm",
  "Caja de cartón marrón para archivo",
  "Carátula/Separador Naranja tamaño A4 x 25",
  "Carpeta 3 solapas plastificada, color marrón",
  "Carpeta oficio negra",
  "Carpeta oficio tapa transparente, negra",
  "Carpeta veloz oficio de cartulina",
  "Cartulina amarilla pte x 20 hojas",
  "Cartulina azul pte x 20 hojas",
  "Cartulina celeste pte x 20 hojas",
  "Cartulina naranja pte x 20 hojas",
  "Cartulina roja pte x 20 hojas",
  "Cartulina verde pte x 20 hojas",
  "Cinta Bifaz, rollo",
  "Cinta correctora",
  "Cinta de embalar transparente",
  "Cinta de papel 18 mm x 50 mts.",
  "Cinta Sticko 48 mm x 50 mts. (grande)",
  "Clips de colores Nº6 x 50mm (Tipo Sifap)",
  "Clips de 10cm",
  "Clips Nº 5 x 100 unidades (tipo Sifap)",
  "Confeblock cuadriculado Potosi x 48 hojas",
  "Confeblock cuadriculado Potosi x 84 hojas",
  "Confeblock rayado Potosi x 48 hojas",
  "Contact transparente x metro",
  "Cuaderno tapa blanda x 84 hojas",
  "Cuaderno tapa dura x 84 hojas",
  "Cuaderno tapa dura x 100 hojas",
  "DVD",
  "Etiquetas autoadhesivas 3027 - caja",
  "Etiquetas autoadhesivas 3030 - caja",
  "Etiquetas autoadhesivas 3033 - caja",
  "Fibrón al agua celeste (tipo Faber Castell)",
  "Fibrón al agua negro (tipo Faber Castell)",
  "Fibrón al agua rojo (tipo Faber Castell)",
  "Fibrón indeleble azul (tipo Edding 400)",
  "Fibrón indeleble azul trazo 0,75 mm (tipo Edding)",
  "Fibrón indeleble negro (tipo Sabonis CD886)",
  "Fibrón p/pizarra, color azul",
  "Fibrón p/pizarra, color negro",
  "Fibrón p/pizarra, color rojo",
  "Fichas rayadas Nº 3",
  "Folio A4 x100",
  "Folio Oficio x100",
  "Goma de borra lápiz (común)",
  "Goma eva color amarillo",
  "Goma eva color azul",
  "Goma eva color naranja",
  "Goma eva color rojo",
  "Goma eva color verde",
  "Goma eva color marrón oscuro o ladrillo, plancha",
  "Hojas A4 amarillas para tarjeta",
  "Hoja Canson grande blanca, block",
  "Lapicera azul ACLARAR MARCA!",
  "Lapicera negra ACLARAR MARCA!",
  "Lapicera roja ACLARAR MARCA!",
  "Lapicera verde ACLARAR MARCA!",
  "Lapicera Signo N 07 negra (Uni-Ball Signo 0,7)",
  "Lapicera Signo N 07 roja (Uni-Ball Signo 0,7)",
  "Lápiz corrector (Tipo Paper Mate)",
  "Lápiz negro (común)",
  "Libro de Actas tamaño clochet (chico) tapa negra x 200 pág.",
  "Libro de Actas tamaño corona (oficio) tapa negra x 200 pág.",
  "Limpia pipas diferentes colores",
  "Linterna chica",
  "Lupa mediana",
  "Masa dura (colores)",
  "Microfibra color azul",
  "Microfibra color negro",
  "Notas autoadhesivas 18 x 8,5 tipo banderitas señaladores",
  "Notas autoadhesivas 38 x 50",
  "Notas autoadhesivas 50 x 40",
  "Notas autoadhesivas 76 x 76 (CON FORMA)",
  "Papel afiche blanco",
  "Papel afiche color",
  "Papel blanco 80cm de ancho x kg, rollo",
  "Papel carbónico azul x caja",
  "Papel para fax 210 x 25",
  "Perforadora de papel p/10-12 hojas (tipo MAPED)",
  "Perforadora de papel p/10-12 hojas con regla de 10cm (tipo MAPED)",
  "Perforadora de papel p/20-25 hojas (tipo MAPED)",
  "Pila AA Energizer/Duracel",
  "Pila AAA Energizer/Duracel",
  "Pila C (mediana) Energizer/Duracel",
  "Pila D (grande) Energizer/Duracel",
  "Pila de litio tipo botón, tamaño CR2032, 3V (p/glucómetro)",
  "Pila de litio tipo botón, tamaño CR2450, 3V",
  "Pila botón AG13 (p/termómetros)",
  "Pila botón LR41 ó AG3 (p/termómetros)",
  "Pincel N°12",
  "Plancha para plastificar",
  "Plancha de corcho de 1 m x 1 m (aclarar espesor)",
  "Plancha de tergopol de 1 m x 1 m x 20 mm",
  "Pincha papeles",
  "Pizarra de Corcho 40cm x 60cm",
  "Pizarra Olsen chica",
  "Pizarra blanca para escritura con marcadores de 120 x 80",
  "Pompones diferentes colores y tamaños",
  "Portablock oficio, de plástico o acrílico",
  "Portaclips",
  "Portasellos para 14/16 sellos manuales (cavidades grandes)",
  "Regla común transparente 30 cm.",
  "Resaltador amarillo flúor (Tipo Faber Castell)",
  "Resaltador rosado flúor (Tipo Faber Castell)",
  "Resma A4 x 500 ACLARAR MARCA!",
  "Resma Legal x 500 ACLARAR MARCA!",
  "Sacapunta metálico",
  "Set de pinzas para motricidad fina",
  "Set de Regletas",
  "Silicona liquida x 250ml",
  "Sobres marrones Nº5 (28 x 20 cm) x 100 - tipo papel madera",
  "Sobres marrones Nº6 A4 (24 x 30 cm ó 22,9 x 32,4) x 100 - tipo papel madera",
  "Sobres marrones Nº9 (30 x 40 cm) x 100 - tipo papel madera",
  "Sobres marrones Nº10 (37 x 45 cm) x 100 - tipo papel madera",
  "Sobres oficio blanco",
  "Témpera colores primarios, pote",
  "Témpera sólida común x caja",
  "Témpera sólida fluor x caja",
  "Tijera común (18 cm mango plástico)",
  "Tijera METAL grande (también MANGO DE METAL)",
  "Tinta para sello, azul",
  "Tinta para sello, azul (a bolilla)",
  "Tinta para sello, negra",
  "Tinta para sello, negra (a bolilla)",
  "Tiza blanca",
  "Tizas colores x caja",
  "Varillas Sticky de 12cm x 24",
  "Voligoma x 30 ml."
];

const BASE_LIMPIEZA_ORIGINAL = [
  "Agua lavandina al 50% 1 litro",
  "Agua lavandina Ayudín x 2 litros",
  "Alcohol etílico desnaturalizado (de quemar) x litro",
  "Balde plástico de 10 litros",
  "Bolsa de consorcio negra de 60 x 90 cm, x 10 u",
  "Bolsa de consorcio roja de 60 x 90 cm, x 10 u (BUENA p/patológicos)",
  "Bolsa de residuo negra de 45 x 60 cm, x 30 u",
  "Bolsa de residuo roja de 45 x 60 cm, x 30 u",
  "Cepillo para manos (no descartable)",
  "Cepillo para pared (Rosca inclinada)",
  "Cepillo para uñas (no descartable)",
  "Cepillo plástico (tipo de raiz)",
  "Cloro puro x litro",
  "Desengrasante p/cocina 1 litro",
  "Desinfectante p/piso (azul o rosa) 1 litro",
  "Desinfectante de ambientes en aerosol (tipo Lysoform)",
  "Detergente (nacar) 1 litro",
  "Embudo plástico de 15 cm de diámetro (para cargar botellas)",
  "Embudo plástico de 30 cm de diámetro (para cargar botellas)",
  "Escoba común",
  "Escobilla p/inodoro con base",
  "Escobillón c/cabo",
  "Escurridor p/piso 40 cm, de goma",
  "Escurridor p/piso 50 cm, de goma",
  'Esponja de fibra OK (NO marca "Batuque")',
  "Esponja de acero chica",
  "Fósforos de madera, caja grande",
  "Guantes látex doméstico talle Grande",
  "Insecticida (tipo Sectisol), x litro",
  "Insecticida mata moscas/mosquitos SIN OLOR aerosol (tipo Raid)",
  "Jabón en pan, neutro (NO marca ASTRO) tipo Esencial",
  "Jabón líquido p/manos, x 5 litros",
  "Jarra plástica de 2 litros",
  "Lana de acero (tipo Virulana), paquete",
  "Limpiavidrios 1 litro",
  "Pala doméstica para basura, con cabo",
  "Palo de piso",
  "Papel higiénico de 30m, x 4 u",
  "Prestobarba -máquina afeitadora descartable- (tipo prestobarba)",
  "Quitaesmalte x 60ml",
  "Quitasarro 1 litro",
  "Rejilla de algodón (trama cerrada, gruesa)",
  "Rociador x 1 litro",
  "Rollo cocina x 3 u",
  "Rollo contínuo de papel de 20 cm de ancho x 400mt, doble hoja, premium, pack x 2",
  "Shampoo capilar x litro",
  "Sopapa p/cocina",
  "Tacho p/residuos de 12 litros",
  "Tacho p/residuos de 25 litros",
  "Trapo de piso de algodón (tipo Franciosa)",
  "Velas grande, paquete"
];

const CANT_INICIAL_LIBRERIA = {
  "Anotador (Block esquelita) 10 x 16 cm, 80 pág., \"Nevado\"": 80,
  "Bibliorato oficio": 10,
  "Bolsa de nylon cristal 15 x 20 cm., rollo": 10,
  "Caja de archivo fibra negra c/elástico altura 5cm": 2,
  "Caja de cartón marrón para archivo": 10,
  "Cinta de papel 18 mm x 50 mts.": 20,
  "Clips Nº 5 x 100 unidades (tipo Sifap)": 6,
  "Confeblock rayado Potosi x 48 hojas": 2,
  "Cuaderno tapa dura x 84 hojas": 4,
  "Cuaderno tapa dura x 100 hojas": 4,
  "Goma de borra lápiz (común)": 10,
  "Lapicera azul ACLARAR MARCA!": 60,
  "Lapicera negra ACLARAR MARCA!": 40,
  "Lapicera roja ACLARAR MARCA!": 20,
  "Lápiz corrector (Tipo Paper Mate)": 10,
  "Lápiz negro (común)": 10,
  "Papel blanco 80cm de ancho x kg, rollo": 1,
  "Perforadora de papel p/20-25 hojas (tipo MAPED)": 1,
  "Pila AA Energizer/Duracel": 20,
  "Pila AAA Energizer/Duracel": 30,
  "Resaltador amarillo flúor (Tipo Faber Castell)": 10,
  "Resaltador rosado flúor (Tipo Faber Castell)": 10,
  "Resma A4 x 500 ACLARAR MARCA!": 30,
  "Resma Legal x 500 ACLARAR MARCA!": 15,
  "Sobres marrones Nº6 A4 (24 x 30 cm ó 22,9 x 32,4) x 100 - tipo papel madera": 1,
  "Tijera común (18 cm mango plástico)": 4,
  "Voligoma x 30 ml.": 10
};

const CANT_INICIAL_LIMPIEZA = {
  "Agua lavandina al 50% 1 litro": 60,
  "Bolsa de consorcio negra de 60 x 90 cm, x 10 u": 30,
  "Bolsa de consorcio roja de 60 x 90 cm, x 10 u (BUENA p/patológicos)": 30,
  "Bolsa de residuo negra de 45 x 60 cm, x 30 u": 30,
  "Bolsa de residuo roja de 45 x 60 cm, x 30 u": 30,
  "Desinfectante p/piso (azul o rosa) 1 litro": 40,
  "Desinfectante de ambientes en aerosol (tipo Lysoform)": 10,
  "Detergente (nacar) 1 litro": 20,
  "Escurridor p/piso 40 cm, de goma": 10,
  'Esponja de fibra OK (NO marca "Batuque")': 20,
  "Esponja de acero chica": 20,
  "Fósforos de madera, caja grande": 10,
  "Insecticida mata moscas/mosquitos SIN OLOR aerosol (tipo Raid)": 10,
  "Jabón en pan, neutro (NO marca ASTRO) tipo Esencial": 20,
  "Papel higiénico de 30m, x 4 u": 60,
  "Rejilla de algodón (trama cerrada, gruesa)": 20,
  "Rociador x 1 litro": 10,
  "Rollo cocina x 3 u": 60,
  "Rollo contínuo de papel de 20 cm de ancho x 400mt, doble hoja, premium, pack x 2": 35,
  "Trapo de piso de algodón (tipo Franciosa)": 20
};

// ============================================================
// ESTADO
// ============================================================
let baseLibreria = [...BASE_LIBRERIA_ORIGINAL];
let baseLimpieza = [...BASE_LIMPIEZA_ORIGINAL];
let nuevosLibreria = [];
let nuevosLimpieza = [];

let estado = {
  fecha: '',
  sector: '',
  solicitante: '',
  destinatario: '',
  cargo: '',
  institucion: '',
  items: []
};
let sugerenciaActiva = { libreria: -1, limpieza: -1 };
let categoriaNuevo = 'libreria';
let itemsImportados = null;
const nombresMeses = ['', 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

// ============================================================
// PERSISTENCIA
// ============================================================
function guardar() { localStorage.setItem('pedidos_estado', JSON.stringify(estado)); }
function guardarBase() {
  localStorage.setItem('pedidos_base_nuevos', JSON.stringify({
    libreria: nuevosLibreria,
    limpieza: nuevosLimpieza
  }));
}
function cargar() {
  const raw = localStorage.getItem('pedidos_estado');
  if (raw) {
    try { estado = JSON.parse(raw); } catch(e) { console.warn('Error cargando estado', e); }
  }
  const rawBase = localStorage.getItem('pedidos_base_nuevos');
  if (rawBase) {
    try {
      const data = JSON.parse(rawBase);
      nuevosLibreria = data.libreria || [];
      nuevosLimpieza = data.limpieza || [];
    } catch(e) { console.warn('Error cargando base nuevos', e); }
  }
  reconstruirBases();
  document.getElementById('cfgFecha').value = fechaISOaInput(estado.fecha);
  document.getElementById('cfgDestinatario').value = estado.destinatario || '';
  document.getElementById('cfgCargo').value = estado.cargo || '';
  document.getElementById('cfgInstitucion').value = estado.institucion || '';
  document.getElementById('cfgSolicitante').value = estado.solicitante || '';
  document.getElementById('cfgSector').value = estado.sector || '';
  if (estado.fecha) {
    const help = document.getElementById('fechaHelp');
    help.textContent = formatearFechaLarga(estado.fecha);
    help.className = 'help ok';
  }
}
function reconstruirBases() {
  baseLibreria = [...BASE_LIBRERIA_ORIGINAL, ...nuevosLibreria];
  baseLimpieza = [...BASE_LIMPIEZA_ORIGINAL, ...nuevosLimpieza];
}

// ============================================================
// FECHAS
// ============================================================
function fechaISOaInput(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  if (!y || !m || !d) return iso;
  return `${d}/${m}/${y}`;
}
function inputAFechaISO(texto) {
  if (!texto || !texto.trim()) return '';
  let s = texto.trim().replace(/[-.\s]/g, '/').replace(/[^\d/]/g, '');
  const partes = s.split('/').filter(Boolean);
  const añoActual = new Date().getFullYear();
  let dia, mes, anio;
  if (partes.length === 1) {
    const p = partes[0];
    if (p.length <= 2) { dia = parseInt(p, 10); mes = new Date().getMonth() + 1; anio = añoActual; }
    else if (p.length === 4) { dia = parseInt(p.slice(0,2),10); mes = parseInt(p.slice(2,4),10); anio = añoActual; }
    else if (p.length === 6) { dia = parseInt(p.slice(0,2),10); mes = parseInt(p.slice(2,4),10); anio = parseInt(p.slice(4,8),10); }
    else return '';
  } else if (partes.length === 2) {
    dia = parseInt(partes[0],10); mes = parseInt(partes[1],10); anio = añoActual;
  } else if (partes.length === 3) {
    dia = parseInt(partes[0],10); mes = parseInt(partes[1],10); anio = parseInt(partes[2],10);
    if (String(partes[2]).length === 2) anio += 2000;
  } else return '';
  if (!dia || !mes) return '';
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31) return '';
  if (!anio || anio < 2000 || anio > 2100) return '';
  const fecha = new Date(anio, mes-1, dia);
  if (fecha.getFullYear() !== anio || fecha.getMonth() !== mes-1 || fecha.getDate() !== dia) return '';
  return `${anio}-${String(mes).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;
}
function formatearFechaLarga(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  if (!y || !m || !d) return '';
  const dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  const fecha = new Date(parseInt(y), parseInt(m)-1, parseInt(d));
  return `${dias[fecha.getDay()]} ${parseInt(d)} de ${nombresMeses[parseInt(m)].toLowerCase()} de ${y}`;
}
function formatearFechaLargaSimple(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  if (!y || !m || !d) return '';
  return `${parseInt(d)} de ${nombresMeses[parseInt(m)].toLowerCase()} de ${y}`;
}
function formatearFecha(f) {
  if (!f) return '—';
  const [y, m, d] = f.split('-');
  if (!y || !m || !d) return f;
  return `${d}/${m}/${y}`;
}
function onFechaInput(event) {
  const input = event.target;
  let valor = input.value.replace(/[^\d/]/g, '');
  const partes = valor.split('/');
  if (partes.length >= 1 && partes[0].length === 2 && !valor.includes('/')) valor = partes[0] + '/';
  if (partes.length >= 2 && partes[1].length === 2 && valor.split('/').length === 2) valor = partes[0] + '/' + partes[1] + '/';
  input.value = valor;
  const help = document.getElementById('fechaHelp');
  const iso = inputAFechaISO(valor);
  if (iso) { help.textContent = formatearFechaLarga(iso); help.className = 'help ok'; }
  else if (valor.length > 2) { help.textContent = 'Fecha incompleta'; help.className = 'help error'; }
  else { help.textContent = 'DD/MM o DD/MM/AAAA'; help.className = 'help'; }
}
function onFechaBlur(event) {
  const valor = event.target.value.trim();
  const iso = inputAFechaISO(valor);
  if (iso) {
    estado.fecha = iso;
    event.target.value = fechaISOaInput(iso);
    guardar();
    const help = document.getElementById('fechaHelp');
    help.textContent = formatearFechaLarga(iso);
    help.className = 'help ok';
  }
}
function onFechaKeydown(event) {
  if (event.key === 'Enter') { event.preventDefault(); event.target.blur(); }
}

// ============================================================
// CONFIG
// ============================================================
function actualizarConfig() {
  estado.sector = document.getElementById('cfgSector').value.trim();
  estado.solicitante = document.getElementById('cfgSolicitante').value.trim().toUpperCase();
  estado.destinatario = document.getElementById('cfgDestinatario').value.trim();
  estado.cargo = document.getElementById('cfgCargo').value.trim();
  estado.institucion = document.getElementById('cfgInstitucion').value.trim();
  guardar();
}

// ============================================================
// TABS
// ============================================================
function cambiarTab(tab) {
  const tabs = { pedido: 'btnTabPedido', libreria: 'btnTabLibreria', limpieza: 'btnTabLimpieza', resumen: 'btnTabResumen' };
  const panes = { pedido: 'tabPedido', libreria: 'tabLibreria', limpieza: 'tabLimpieza', resumen: 'tabResumen' };
  Object.keys(tabs).forEach(k => {
    document.getElementById(tabs[k]).classList.remove('active');
    document.getElementById(panes[k]).classList.add('hidden');
  });
  document.getElementById(tabs[tab]).classList.add('active');
  document.getElementById(panes[tab]).classList.remove('hidden');
  if (tab === 'resumen') renderResumen();
  if (tab === 'libreria') renderListadoBase('libreria');
  if (tab === 'limpieza') renderListadoBase('limpieza');
}

// ============================================================
// PEDIDO
// ============================================================
function agregarItem(categoria, articulo, cantidad) {
  if (!articulo) return;
  const existente = estado.items.find(i => i.categoria === categoria && i.articulo === articulo);
  if (existente) {
    existente.cantidad = (parseInt(existente.cantidad) || 0) + (parseInt(cantidad) || 1);
  } else {
    estado.items.push({ categoria, articulo, cantidad: parseInt(cantidad) || 1, observacion: '' });
  }
  guardar();
  renderPedido();
  renderListadoBase(categoria);
}
function quitarItem(idx) {
  estado.items.splice(idx, 1);
  guardar();
  renderPedido();
  renderListadoBase('libreria');
  renderListadoBase('limpieza');
}
function actualizarCantidad(idx, valor) {
  const n = parseInt(valor, 10);
  estado.items[idx].cantidad = isNaN(n) || n < 0 ? 0 : n;
  guardar();
}
function actualizarObservacion(idx, valor) {
  estado.items[idx].observacion = valor;
  guardar();
}
function renderPedido() {
  const tbody = document.getElementById('tbodyPedido');
  const empty = document.getElementById('emptyPedido');
  const cont = document.getElementById('contadorPedido');
  tbody.innerHTML = '';
  cont.textContent = `${estado.items.length} ítem${estado.items.length === 1 ? '' : 's'}`;
  if (estado.items.length === 0) { empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  estado.items.forEach((item, idx) => {
    const catLabel = item.categoria === 'libreria' ? 'Librería' : 'Limpieza';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="chip">${catLabel}</span></td>
      <td>${escapeHtml(item.articulo)}</td>
      <td><input type="number" min="0" value="${item.cantidad}" onchange="actualizarCantidad(${idx}, this.value)" style="text-align:center"></td>
      <td><input type="text" value="${escapeAttr(item.observacion || '')}" placeholder="—" onchange="actualizarObservacion(${idx}, this.value)"></td>
      <td style="text-align:center">
        <button class="danger icon-only" onclick="quitarItem(${idx})" title="Quitar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ============================================================
// LISTADO BASE
// ============================================================
function renderListadoBase(categoria) {
  const tbody = document.getElementById(categoria === 'libreria' ? 'tbodyLibreria' : 'tbodyLimpieza');
  const contador = document.getElementById(categoria === 'libreria' ? 'contadorLibreria' : 'contadorLimpieza');
  const base = categoria === 'libreria' ? baseLibreria : baseLimpieza;
  const nuevos = categoria === 'libreria' ? nuevosLibreria : nuevosLimpieza;

  contador.textContent = `${base.length} artículo${base.length === 1 ? '' : 's'}`;

  tbody.innerHTML = base.map(art => {
    const yaEsta = estado.items.find(i => i.categoria === categoria && i.articulo === art);
    const esNuevo = nuevos.includes(art);
    return `
      <tr>
        <td>${escapeHtml(art)}</td>
        <td style="text-align:center">
          ${esNuevo
            ? '<span class="chip chip-nuevo">Agregado</span>'
            : '<span class="chip">Base</span>'}
        </td>
        <td style="text-align:center">
          <div style="display:inline-flex;gap:6px;">
            ${yaEsta
              ? `<span class="chip">✓ ${yaEsta.cantidad}</span>`
              : `<button onclick="agregarItem('${categoria}', ${escapeAttr(JSON.stringify(art))}, 1)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  Agregar
                </button>`}
            ${esNuevo
              ? `<button class="danger icon-only" onclick="eliminarArticuloNuevo('${categoria}', ${escapeAttr(JSON.stringify(art))})" title="Eliminar de la base">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                </button>`
              : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ============================================================
// MODAL NUEVO ARTÍCULO
// ============================================================
function abrirModalNuevo(categoria) {
  categoriaNuevo = categoria || 'libreria';
  actualizarBotonesCategoriaNuevo();
  document.getElementById('inputNuevoArticulo').value = '';
  document.getElementById('msgNuevoError').classList.add('hidden');
  document.getElementById('modalNuevoTitulo').textContent =
    `Nuevo artículo — ${categoriaNuevo === 'libreria' ? 'Librería' : 'Limpieza'}`;
  const modal = document.getElementById('modalNuevo');
  modal.classList.remove('hidden');
  modal.onclick = (e) => { if (e.target === modal) cerrarModalNuevo(); };
  setTimeout(() => document.getElementById('inputNuevoArticulo').focus(), 100);
}
function cerrarModalNuevo() {
  document.getElementById('modalNuevo').classList.add('hidden');
}
function seleccionarCategoriaNuevo(cat) {
  categoriaNuevo = cat;
  actualizarBotonesCategoriaNuevo();
  document.getElementById('modalNuevoTitulo').textContent =
    `Nuevo artículo — ${cat === 'libreria' ? 'Librería' : 'Limpieza'}`;
}
function actualizarBotonesCategoriaNuevo() {
  document.querySelectorAll('#modalNuevo .rol-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === categoriaNuevo);
  });
}
function guardarNuevoArticulo() {
  const input = document.getElementById('inputNuevoArticulo');
  const msg = document.getElementById('msgNuevoError');
  const nombre = input.value.trim().replace(/\s+/g, ' ');
  if (!nombre) {
    msg.textContent = 'Escribí un nombre para el artículo.';
    msg.classList.remove('hidden');
    return;
  }
  const base = categoriaNuevo === 'libreria' ? baseLibreria : baseLimpieza;
  const normalizado = normalizarTexto(nombre);
  const existe = base.some(a => normalizarTexto(a) === normalizado);
  if (existe) {
    msg.textContent = 'Ese artículo ya existe en la lista.';
    msg.classList.remove('hidden');
    return;
  }
  if (categoriaNuevo === 'libreria') {
    nuevosLibreria.push(nombre);
    baseLibreria.push(nombre);
  } else {
    nuevosLimpieza.push(nombre);
    baseLimpieza.push(nombre);
  }
  guardarBase();
  renderListadoBase(categoriaNuevo);
  cerrarModalNuevo();
}
function eliminarArticuloNuevo(categoria, articulo) {
  if (!confirm(`¿Eliminar "${articulo}" de la lista de artículos?\n\nNo afecta los ítems ya cargados en el pedido.`)) return;
  if (categoria === 'libreria') {
    nuevosLibreria = nuevosLibreria.filter(a => a !== articulo);
    baseLibreria = baseLibreria.filter(a => a !== articulo);
  } else {
    nuevosLimpieza = nuevosLimpieza.filter(a => a !== articulo);
    baseLimpieza = baseLimpieza.filter(a => a !== articulo);
  }
  guardarBase();
  renderListadoBase(categoria);
}

// ============================================================
// BUSCADOR
// ============================================================
function actualizarSugerencias(categoria) {
  const input = document.getElementById(categoria === 'libreria' ? 'inputBuscLibreria' : 'inputBuscLimpieza');
  const box = document.getElementById(categoria === 'libreria' ? 'sugerenciasLibreria' : 'sugerenciasLimpieza');
  const base = categoria === 'libreria' ? baseLibreria : baseLimpieza;
  const valor = normalizarTexto(input.value);
  const yaEnPedido = new Set(estado.items.filter(i => i.categoria === categoria).map(i => i.articulo));
  let sugerencias = base.filter(a => !yaEnPedido.has(a));
  if (valor) sugerencias = sugerencias.filter(a => normalizarTexto(a).includes(valor));
  if (sugerencias.length === 0) { box.classList.add('hidden'); return; }
  box.innerHTML = sugerencias.slice(0, 12).map((a, i) => {
    const activo = i === sugerenciaActiva[categoria] ? ' activo' : '';
    return `<div class="sugerencia-item${activo}" onclick="elegirSugerencia('${categoria}', ${escapeAttr(JSON.stringify(a))})">
      <span>${escapeHtml(a)}</span>
      <span class="cat">${categoria === 'libreria' ? 'Librería' : 'Limpieza'}</span>
    </div>`;
  }).join('');
  box.classList.remove('hidden');
}
function elegirSugerencia(categoria, articulo) {
  agregarItem(categoria, articulo, 1);
  const input = document.getElementById(categoria === 'libreria' ? 'inputBuscLibreria' : 'inputBuscLimpieza');
  input.value = '';
  document.getElementById(categoria === 'libreria' ? 'sugerenciasLibreria' : 'sugerenciasLimpieza').classList.add('hidden');
  sugerenciaActiva[categoria] = -1;
  input.focus();
}
function manejarTeclasInput(event, categoria) {
  const box = document.getElementById(categoria === 'libreria' ? 'sugerenciasLibreria' : 'sugerenciasLimpieza');
  const visible = !box.classList.contains('hidden');
  const items = box.querySelectorAll('.sugerencia-item');
  if (event.key === 'ArrowDown' && visible) {
    event.preventDefault();
    sugerenciaActiva[categoria] = Math.min(sugerenciaActiva[categoria] + 1, items.length - 1);
    actualizarSugerencias(categoria);
  } else if (event.key === 'ArrowUp' && visible) {
    event.preventDefault();
    sugerenciaActiva[categoria] = Math.max(sugerenciaActiva[categoria] - 1, 0);
    actualizarSugerencias(categoria);
  } else if (event.key === 'Enter') {
    event.preventDefault();
    if (visible && sugerenciaActiva[categoria] >= 0 && items[sugerenciaActiva[categoria]]) {
      const art = items[sugerenciaActiva[categoria]].querySelector('span').textContent;
      agregarItem(categoria, art, 1);
      event.target.value = '';
      box.classList.add('hidden');
      sugerenciaActiva[categoria] = -1;
    }
  } else if (event.key === 'Escape') {
    box.classList.add('hidden');
    sugerenciaActiva[categoria] = -1;
  }
}

// ============================================================
// DOCUMENTO
// ============================================================
function hojaHTML(items, titulo) {
  const fechaStr = estado.fecha ? formatearFecha(estado.fecha) : '—';
  const fechaCorta = estado.fecha ? formatearFechaLargaSimple(estado.fecha) : '—';
  const solicitanteStr = estado.solicitante || '___________________';
  const cargoSolicitante = estado.sector || 'Miembro del Consejo Asesor';
  const destinatarioStr = estado.destinatario || '___________________';
  const cargoDestinatario = estado.cargo || 'Administrador/a General';
  const institucionStr = estado.institucion || 'Hospital San Cristóbal';
  const tipoProducto = titulo === 'Librería' ? 'productos de librería' : 'productos de limpieza';
  const articuloDet = titulo === 'Librería' ? 'los' : 'los';

  return `
    <div class="pedido-doc">
      <div class="doc-head">
        <div>
          <h3>PEDIDO DE INSUMOS — ${titulo.toUpperCase()}</h3>
          <div class="sub"><strong>Hospital Julio César Villanueva</strong> — San Cristóbal</div>
        </div>
        <img src="santa fe.webp" alt="Escudo de Santa Fe" class="doc-head-logo">
      </div>

      <!-- LEYENDA FORMAL -->
      <div class="leyenda">
        <p class="leyenda-lugar">San Cristóbal, ${fechaCorta}.-</p>
        <p>A la ${cargoDestinatario}</p>
        <p><strong>${escapeHtml(destinatarioStr)}</strong></p>
        <p><strong>${escapeHtml(institucionStr)}</strong></p>
        <p style="margin-top:14px;">Quien suscribe, <strong>${escapeHtml(solicitanteStr)}</strong>, ${escapeHtml(cargoSolicitante)} del Hospital de San Cristóbal, se dirige a Ud. a fin de solicitar que autorice la compra/licitación de ${tipoProducto} que se detallan en la planilla.</p>
        <p class="leyenda-cierre">Esperando contar con una respuesta favorable, saluda Atte. -</p>
      </div>

      <!-- TABLA -->
      <table class="doc-table">
        <thead>
          <tr>
            <th style="width:44px;text-align:center">Nº</th>
            <th>ARTÍCULOS Y CARACTERÍSTICAS</th>
            <th style="width:80px;text-align:center">CANTIDAD</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item, i) => `
            <tr>
              <td class="num">${i+1}</td>
              <td>${escapeHtml(item.articulo)}${item.observacion ? ` <span class="muted">(${escapeHtml(item.observacion)})</span>` : ''}</td>
              <td class="num">${item.cantidad}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="firma">
        <div>Firma Solicitante</div>
        <div>Firma Autorizante</div>
      </div>
    </div>
  `;
}

function renderResumen() {
  const cont = document.getElementById('contenedorResumen');
  const lib = estado.items.filter(i => i.categoria === 'libreria');
  const limp = estado.items.filter(i => i.categoria === 'limpieza');
  if (estado.items.length === 0) {
    cont.innerHTML = '<div class="empty">No hay ítems para mostrar. Agregá artículos al pedido.</div>';
    return;
  }
  cont.innerHTML = (lib.length ? hojaHTML(lib, 'Librería') : '') + (limp.length ? hojaHTML(limp, 'Limpieza') : '');
}

// ============================================================
// IMPRESIÓN
// ============================================================
function imprimirTodo() {
  cambiarTab('resumen');
  setTimeout(() => window.print(), 100);
}
function imprimirPedido() { imprimirTodo(); }

function imprimirSeccion(categoria) {
  const items = estado.items.filter(i => i.categoria === categoria);
  if (items.length === 0) { alert('No hay ítems en esa sección.'); return; }
  const titulo = categoria === 'libreria' ? 'Librería' : 'Limpieza';
  cambiarTab('resumen');
  const cont = document.getElementById('contenedorResumen');
  const backup = cont.innerHTML;
  cont.innerHTML = hojaHTML(items, titulo);
  setTimeout(() => {
    window.print();
    setTimeout(() => { cont.innerHTML = backup; }, 500);
  }, 100);
}

// ============================================================
// IMPORTAR EXCEL
// ============================================================
function abrirImportExcel() {
  document.getElementById('paso1Excel').classList.remove('hidden');
  document.getElementById('paso2Preview').classList.add('hidden');
  document.getElementById('btnConfirmarImport').classList.add('hidden');
  document.getElementById('inputExcel').value = '';
  document.getElementById('mensajeExcel').innerHTML = '';
  itemsImportados = null;
  const modal = document.getElementById('modalImportExcel');
  modal.classList.remove('hidden');
  modal.onclick = (e) => { if (e.target === modal) cerrarModalImport(); };
}
function cerrarModalImport() {
  document.getElementById('modalImportExcel').classList.add('hidden');
}
function leerExcel(event) {
  const file = event.target.files[0];
  if (!file) return;
  const msg = document.getElementById('mensajeExcel');
  msg.innerHTML = '<div style="font-size:13px;color:#6b7280;">Leyendo archivo...</div>';
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      procesarWorkbook(workbook);
    } catch (err) {
      msg.innerHTML = `<div style="background:#fef2f2;border:1px solid #fca5a5;color:#b91c1c;border-radius:6px;padding:10px;font-size:13px;">Error al leer el archivo: ${err.message}</div>`;
    }
  };
  reader.readAsArrayBuffer(file);
}
function normalizarTexto(s) {
  return String(s || '').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}
function procesarWorkbook(workbook) {
  const msg = document.getElementById('mensajeExcel');
  let hojaLibreria = null, hojaLimpieza = null;
  workbook.SheetNames.forEach(nombre => {
    const n = normalizarTexto(nombre);
    if (n.includes('LIBRER')) hojaLibreria = nombre;
    if (n.includes('LIMP')) hojaLimpieza = nombre;
  });

  if (!hojaLibreria && !hojaLimpieza) {
    msg.innerHTML = `<div style="background:#fffbeb;border:1px solid #fcd34d;color:#92400e;border-radius:6px;padding:10px;font-size:13px;">No se encontraron hojas de <strong>Librería</strong> ni <strong>Limpieza</strong>. Hojas revisadas: <em>${workbook.SheetNames.join(', ')}</em></div>`;
    return;
  }

  const items = [];
  if (hojaLibreria) items.push(...leerHojaPedido(workbook.Sheets[hojaLibreria], 'libreria'));
  if (hojaLimpieza) items.push(...leerHojaPedido(workbook.Sheets[hojaLimpieza], 'limpieza'));

  if (items.length === 0) {
    msg.innerHTML = `<div style="background:#fffbeb;border:1px solid #fcd34d;color:#92400e;border-radius:6px;padding:10px;font-size:13px;">No se encontraron artículos con cantidad mayor a cero.</div>`;
    return;
  }

  itemsImportados = items;
  const cantLib = items.filter(i => i.categoria === 'libreria').length;
  const cantLimp = items.filter(i => i.categoria === 'limpieza').length;
  document.getElementById('cantItems').textContent = items.length;
  document.getElementById('cantLib').textContent = cantLib;
  document.getElementById('cantLimp').textContent = cantLimp;

  const tbody = document.getElementById('tbodyPreview');
  tbody.innerHTML = items.map(it => `
    <tr>
      <td><span class="chip">${it.categoria === 'libreria' ? 'Librería' : 'Limpieza'}</span></td>
      <td>${escapeHtml(it.articulo)}</td>
      <td style="text-align:center;font-weight:600">${it.cantidad}</td>
    </tr>
  `).join('');

  document.getElementById('paso1Excel').classList.add('hidden');
  document.getElementById('paso2Preview').classList.remove('hidden');
  document.getElementById('btnConfirmarImport').classList.remove('hidden');
}
function leerHojaPedido(sheet, categoria) {
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true, defval: null });
  const items = [];
  if (!rows || rows.length === 0) return items;
  let headerIdx = -1;
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (!r) continue;
    const joined = r.map(c => normalizarTexto(c)).join('|');
    if (joined.includes('ARTICULO') && joined.includes('CANTIDAD')) { headerIdx = i; break; }
  }
  if (headerIdx === -1) return items;
  for (let i = headerIdx + 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r) continue;
    const articulo = limpiar(r[0]);
    const cantidad = toInt(r[1]);
    if (!articulo) continue;
    const artNorm = normalizarTexto(articulo);
    if (artNorm === 'LIBRERIA' || artNorm === 'LIMPIEZA') continue;
    if (artNorm.includes('TOTAL') || artNorm.includes('SON PESOS')) break;
    if (cantidad > 0) items.push({ categoria, articulo, cantidad, observacion: '' });
  }
  return items;
}
function confirmarImportExcel() {
  if (!itemsImportados) return;
  estado.items = itemsImportados;
  guardar();
  renderPedido();
  renderListadoBase('libreria');
  renderListadoBase('limpieza');
  renderResumen();
  cerrarModalImport();
  alert(`✅ Importados ${itemsImportados.length} ítems desde el Excel.`);
}

// ============================================================
// NORMALIZADORES
// ============================================================
function limpiar(v) { return (v === null || v === undefined) ? '' : String(v).trim(); }
function toInt(v) {
  if (v === null || v === undefined || v === '') return 0;
  if (typeof v === 'number') return Math.floor(v);
  const n = parseInt(String(v).replace(/[^\d-]/g, ''), 10);
  return isNaN(n) ? 0 : n;
}

// ============================================================
// UTILIDADES
// ============================================================
function escapeHtml(s) { if (s === undefined || s === null) return ''; return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function escapeAttr(s) { return escapeHtml(s).replace(/`/g, '&#96;'); }

// ============================================================
// BASE / VACIAR / JSON
// ============================================================
function cargarBase() {
  if (estado.items.length > 0 && !confirm('Ya hay ítems cargados. ¿Reemplazar por la base inicial?')) return;
  estado.items = [];
  Object.entries(CANT_INICIAL_LIBRERIA).forEach(([art, cant]) => estado.items.push({ categoria: 'libreria', articulo: art, cantidad: cant, observacion: '' }));
  Object.entries(CANT_INICIAL_LIMPIEZA).forEach(([art, cant]) => estado.items.push({ categoria: 'limpieza', articulo: art, cantidad: cant, observacion: '' }));
  guardar();
  renderPedido();
  renderListadoBase('libreria');
  renderListadoBase('limpieza');
  alert(`✅ Se cargaron ${estado.items.length} ítems desde la base inicial.`);
}

function vaciarTodo() {
  if (!confirm('¿Estás seguro? Se van a borrar TODOS los ítems del pedido y la configuración.\n\nEsta acción NO se puede deshacer.\n\n(Los artículos nuevos agregados a la base NO se borran.)')) return;
  estado = {
    fecha: '', sector: '', solicitante: '',
    destinatario: '', cargo: '', institucion: '',
    items: []
  };
  localStorage.removeItem('pedidos_estado');
  document.getElementById('cfgFecha').value = '';
  document.getElementById('cfgDestinatario').value = '';
  document.getElementById('cfgCargo').value = '';
  document.getElementById('cfgInstitucion').value = '';
  document.getElementById('cfgSolicitante').value = '';
  document.getElementById('cfgSector').value = '';
  document.getElementById('fechaHelp').textContent = 'DD/MM o DD/MM/AAAA';
  document.getElementById('fechaHelp').className = 'help';
  renderPedido();
  renderListadoBase('libreria');
  renderListadoBase('limpieza');
  renderResumen();
  alert('✅ Todo fue vaciado.');
}

function exportarJSON() {
  const data = JSON.stringify({
    ...estado,
    _baseNuevos: { libreria: nuevosLibreria, limpieza: nuevosLimpieza }
  }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const nombre = estado.fecha ? estado.fecha.replace(/-/g, '') : 'sin_fecha';
  a.href = url; a.download = `pedido_${nombre}.json`;
  a.click(); URL.revokeObjectURL(url);
}
function importarJSON(event) {
  const file = event.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.items) throw new Error('Formato inválido');
      const baseNuevos = data._baseNuevos;
      delete data._baseNuevos;
      estado = data;
      if (baseNuevos) {
        nuevosLibreria = baseNuevos.libreria || [];
        nuevosLimpieza = baseNuevos.limpieza || [];
        guardarBase();
        reconstruirBases();
      }
      guardar();
      document.getElementById('cfgFecha').value = fechaISOaInput(estado.fecha);
      document.getElementById('cfgDestinatario').value = estado.destinatario || '';
      document.getElementById('cfgCargo').value = estado.cargo || '';
      document.getElementById('cfgInstitucion').value = estado.institucion || '';
      document.getElementById('cfgSolicitante').value = estado.solicitante || '';
      document.getElementById('cfgSector').value = estado.sector || '';
      if (estado.fecha) {
        const help = document.getElementById('fechaHelp');
        help.textContent = formatearFechaLarga(estado.fecha);
        help.className = 'help ok';
      }
      renderPedido();
      renderListadoBase('libreria');
      renderListadoBase('limpieza');
      renderResumen();
      alert('✅ Datos importados.');
    } catch(err) { alert('Error al importar: ' + err.message); }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  cargar();
  renderPedido();
  renderListadoBase('libreria');
  renderListadoBase('limpieza');
  renderResumen();
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modalN = document.getElementById('modalNuevo');
      const modalI = document.getElementById('modalImportExcel');
      if (!modalN.classList.contains('hidden')) cerrarModalNuevo();
      else if (!modalI.classList.contains('hidden')) cerrarModalImport();
    }
  });
});