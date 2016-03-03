import Plugins from './lib/plugins.js';
import CSSLoader from './lib/CSSLoader.js';

const { fetch, bundle } = new CSSLoader([
  Plugins.values,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope
]);

export { CSSLoader, Plugins, fetch, bundle };