import type { ImageMetadata } from 'astro';

// Logos extraídos de la presentación original.
// TODO: renombrar archivos con el nombre de cada empresa y completar `alt`.
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
  return { file, src: mod.default, alt: '' };
}

export const memberLogos = members.map(logo);
export const allyLogos = allies.map(logo);
