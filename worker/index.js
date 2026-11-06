// Worker delante de los archivos estáticos.
// Todo se sirve desde una sola URL canónica: https://redperu.org
// - http://...            -> 301 a https
// - www.redperu.org        -> 301 a redperu.org
// - *.workers.dev          -> 301 a redperu.org (evita contenido duplicado)
// - resto                  -> archivos estáticos de dist/ (binding ASSETS)
const CANONICAL_HOST = 'redperu.org';

export default {
  /**
   * @param {Request} request
   * @param {{ ASSETS: { fetch: (r: Request) => Promise<Response> } }} env
   */
  async fetch(request, env) {
    const url = new URL(request.url);
    const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';

    if (!isLocal && (url.hostname !== CANONICAL_HOST || url.protocol !== 'https:')) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
