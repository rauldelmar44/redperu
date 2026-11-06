// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL pública del sitio: se usa en canónicas, Open Graph (vista previa al compartir),
// sitemap y robots.txt. Debe ser una URL que YA responda; si no, WhatsApp/Facebook/LinkedIn
// no pueden descargar la imagen de vista previa.
// Cuando redperu.org esté conectado, cambiar a 'https://redperu.org' (o usar SITE_URL al construir).
const SITE = process.env.SITE_URL || 'https://laredperu.raul-f3d.workers.dev';

export default defineConfig({
  site: SITE,
  // URLs sin barra final (/nosotros), igual que los enlaces del menú y las canónicas
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-PE' } },
    }),
  ],
});
