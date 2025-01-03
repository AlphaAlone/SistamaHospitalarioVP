
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 494, hash: 'deec3f7dfb529e3a9d78b392c3f8a025aa267fb9c3cd2663b16375e7db37a65a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '440ae9e28aaba2ef1d7a16e5e4cf36243e7627954c02500cacf6b9aadd4176ab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20836, hash: 'a1f811b0ae4eeace3934321503d5fffb0ae184bdc7b95ee991ced521c7b09faf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
