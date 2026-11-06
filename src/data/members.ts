import type { ImageMetadata } from 'astro';

// Logos extraídos de la presentación original.
// La separación miembros/aliados se infirió de la diapositiva; validar con el cliente.
export const members = [
  'image65.png', 'image36.png', 'image66.png', 'image42.png', 'image37.png', 'image29.png',
  'image33.png', 'image58.png', 'image24.png', 'image22.jpg', 'image17.png', 'image56.png',
  'image30.png', 'image38.png', 'image43.png', 'image57.png', 'image48.png', 'image44.png',
  'image8.png', 'image41.png', 'image49.png', 'image9.png', 'image71.png', 'image51.png',
  'image27.png', 'image62.png', 'image61.png', 'image35.png', 'image5.png', 'image40.png',
  'image7.png', 'image23.png', 'image53.png', 'image59.png', 'image4.png', 'image14.png',
  'image12.png', 'image50.png', 'image25.png', 'image19.png', 'image18.jpg', 'image20.png',
  'image52.png', 'image45.png', 'image55.png', 'image11.png', 'image54.png', 'image70.png',
  'image21.png', 'image47.png', 'image10.png', 'image15.png', 'image63.png',
];

export const allies = [
  'image16.png', 'image39.png', 'image69.png', 'image60.png', 'image31.png', 'image32.png',
  'image26.png', 'image64.png', 'image13.jpg', 'image34.png', 'image46.png', 'image6.png',
  'image3.png', 'image28.png', 'image67.png', 'image68.png',
];

// Nombre de cada organización (texto alternativo del logo para lectores de pantalla).
// Identificados a partir de los logos: validar ortografía oficial con el cliente.
export const names: Record<string, string> = {
  'image3.png': 'RIEI – Red Iberoamericana de Empresas Inclusivas',
  'image4.png': 'Farmacias Peruanas (Mifarma e Inkafarma)',
  'image5.png': 'Interseguro',
  'image6.png': 'CP Inclusión – Cámara Peruana de Inclusión',
  'image7.png': 'Inchcape',
  'image8.png': 'Ferreyros',
  'image9.png': 'Scotiabank',
  'image10.png': 'Ministerio del Ambiente del Perú',
  'image11.png': 'Promart Homecenter',
  'image12.png': 'IBT Group',
  'image13.jpg': 'Programa Ágora – Fundación ONCE América Latina (FOAL)',
  'image14.png': 'Talma',
  'image15.png': 'Primax',
  'image16.png': 'Hábitat Inclusión',
  'image17.png': 'Morpho',
  'image18.jpg': 'Gold Fields',
  'image19.png': 'Intercorp Retail',
  'image20.png': 'NGR',
  'image21.png': 'Oechsle',
  'image22.jpg': 'Caja Arequipa',
  'image23.png': 'Sodexo',
  'image24.png': 'Softtek',
  'image25.png': 'Pluz',
  'image26.png': 'Addme Work',
  'image27.png': 'Cencosud',
  'image28.png': 'Incluyeme.com',
  'image29.png': 'Chinalco',
  'image30.png': 'Adecco',
  'image31.png': 'FAIS Perú – Facilitadores en Accesibilidad e Inclusión Social',
  'image32.png': 'FENAMUDIP – Federación Nacional de Mujeres con Discapacidad del Perú',
  'image33.png': 'IBM',
  'image34.png': 'Koonsult',
  'image35.png': 'Konecta',
  'image36.png': 'Nestlé',
  'image37.png': 'Marriott Perú',
  'image38.png': 'Miranda & Amado',
  'image39.png': 'ONG ADECEP',
  'image40.png': 'OEFA – Organismo de Evaluación y Fiscalización Ambiental',
  'image41.png': 'Payet, Rey, Cauvi, Pérez Abogados',
  'image42.png': 'PwC',
  'image43.png': 'P&G',
  'image44.png': 'Protecta Perú',
  'image45.png': 'Repsol',
  'image46.png': 'Sodis',
  'image47.png': 'Grupo Vega',
  'image48.png': 'Entel',
  'image49.png': 'Tierra Viva Hoteles',
  'image50.png': 'Equans',
  'image51.png': 'Mission',
  'image52.png': 'Falabella',
  'image53.png': 'Hortifrut',
  'image54.png': 'APC',
  'image55.png': 'Urbanova',
  'image56.png': 'Nexa',
  'image57.png': 'LATAM Airlines',
  'image58.png': 'Interbank',
  'image59.png': 'Empana Combi',
  'image60.png': 'Fundades',
  'image61.png': 'ElectroDunas',
  'image62.png': 'Bancom',
  'image63.png': 'Sodimac y Maestro',
  'image64.png': 'OIT – Organización Internacional del Trabajo',
  'image65.png': 'ManpowerGroup',
  'image66.png': 'Lima Airport Partners',
  'image67.png': 'Sociedad Peruana de Síndrome Down',
  'image68.png': 'Blynk – Escuela Accesible',
  'image69.png': 'Yapaykuy – Certificación Inclusiva',
  'image70.png': 'Las Bambas',
  // TODO: logo solo con símbolo; confirmar nombre con el cliente
  'image71.png': 'Empresa miembro',
};

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/logos/*.{png,jpg}', {
  eager: true,
});

export interface Logo {
  file: string;
  src: ImageMetadata;
  alt: string;
}

export function logo(file: string): Logo {
  const mod = files[`../assets/logos/${file}`];
  if (!mod) throw new Error(`Logo no encontrado: ${file}`);
  return { file, src: mod.default, alt: names[file] ?? '' };
}

export const memberLogos = members.map(logo);
export const allyLogos = allies.map(logo);
