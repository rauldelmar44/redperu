# laredperu.com — Astro

Sitio estático de la Red de Empresas y Discapacidad – Perú. Astro 7, Figtree (fontsource), iconos Lucide (`@lucide/astro`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
npm run check    # tipos
```

## Estructura

```
src/
  layouts/Base.astro          head, SEO, header, footer
  components/                 Header, Footer, IconTile, PageTitle, LogoMarquee, LogoGrid
  pages/                      index, nosotros, miembros, programa, unete, contacto, 404
  data/site.ts                nav, redes, email, enlaces de formularios
  data/members.ts             listas de logos (miembros / aliados)
  data/content.ts             textos y listas de cada sección
  assets/logos/               logos (Astro los optimiza a webp)
  styles/global.css           tokens de diseño y utilidades
public/assets/                network-*.svg, social-*.svg
```

## Pendientes del cliente

- Nombres reales de logos + texto `alt` (en `data/members.ts`).
- Validar separación miembros / aliados.
- URLs de perfiles de redes (hoy apuntan a publicaciones) en `data/site.ts`.
