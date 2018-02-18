import CssModulesLoaderCore from 'css-modules-loader-core';
import autoprefixer from 'autoprefixer';

export default {
  values: CssModulesLoaderCore.values,
  localByDefault: CssModulesLoaderCore.localByDefault,
  extractImports: CssModulesLoaderCore.extractImports,
  scope: CssModulesLoaderCore.scope,
  autoprefixer: autoprefixer
};