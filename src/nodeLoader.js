/* eslint-env node */
import AbstractLoader from './abstractLoader.js';
import cssnano from 'cssnano';
import fs from 'fs';
import path from 'path';

// Append a <style> tag to the page and fill it with inline CSS styles.
function cssInjectFunction(compileOpts, cssOptions) {
  let id = compileOpts.entryPoints.length > 0 ? compileOpts.entryPoints[0] + "-styles" : null;

  if (cssOptions.bundledStyleTagId) {
	  id = cssOptions.bundledStyleTagId;
  }

  const setId = id ? `s.setAttribute("id", "${id}");` : ``;
  return `(function(c){
    var d=document,a="appendChild",i="styleSheet",s=d.createElement("style");${setId}
    d.head[a](s);
    s[i]?s[i].cssText=c:s[a](d.createTextNode(c));
  })`;
}

// Escape any whitespace characters before outputting as string so that data integrity can be preserved.
const escape = (source) => {
  return source
    .replace(/(["\\])/g, '\\$1')
    .replace(/[\f]/g, '\\f')
    .replace(/[\b]/g, '\\b')
    .replace(/[\n]/g, '\\n')
    .replace(/[\t]/g, '\\t')
    .replace(/[\r]/g, '\\r')
    .replace(/[\']/g, '\\\'')
    .replace(/[\u2028]/g, '\\u2028')
    .replace(/[\u2029]/g, '\\u2029');
};

const emptySystemRegister = (system, name) => {
  return `${system}.register('${name}', [], function() { return { setters: [], execute: function() {}}});`;
};

export default class NodeLoader extends AbstractLoader {
  constructor(plugins) {
    super(plugins);

    this._injectableSources = {};

    this.fetch = this.fetch.bind(this);
    this.bundle = this.bundle.bind(this);
    this.cssOptions = {};
  }

  fetch(load, systemFetch) {
    if (load.metadata.cssOptions) {
      this.cssOptions = load.metadata.cssOptions;
    }
    return super.fetch(load, systemFetch)
      .then((styleSheet) => {
        /* If jspm / systemjs-builder are watching for file changes, this
         * will get called for the same file multiple times. So we overwrite
         * the previous injectableSource with the new one.
         */
        this._injectableSources[load.address] = styleSheet.injectableSource;
        return styleSheet;
      })
      // Return the export tokens to the js files
      .then((styleSheet) => styleSheet.exportedTokens);
  }

  bundle(loads, compileOpts, outputOpts) {
    const sourcesString = Object.keys(this._injectableSources).reduce((str, source) => str + this._injectableSources[source] + '\n', '');
    return cssnano.process(sourcesString, {
      safe: true
    }).then((result) => {
      const separateCSS = this.cssOptions.separateCSS || outputOpts.separateCSS;

      if (separateCSS) {
        const outFile = this.cssOptions.outFile || outputOpts.outCSSFile || outputOpts.outFile;
        const outCSSFile = path.resolve(outFile).replace(/\.js$/, '.css');

        fs.writeFileSync(outCSSFile, result.css);
      } else {
        return `${cssInjectFunction(compileOpts, this.cssOptions)}('${escape(result.css)}');`;
      }
    });
  }
}
