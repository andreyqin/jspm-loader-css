SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/",
    "paths": {
      "app/": "src/"
    }
  },
  nodeConfig: {
    "paths": {
      "app/": ""
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.css": {
          "loader": "jspm-loader-css"
        },
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "jspm-loader-css": "npm:jspm-loader-css@1.0.2",
    "os": "npm:jspm-nodelibs-os@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "punycode": "npm:jspm-nodelibs-punycode@0.2.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1"
  },
  packages: {
    "npm:jspm-loader-css@1.0.2": {
      "map": {
        "cssnano": "npm:cssnano@3.10.0",
        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.1"
      }
    },
    "npm:cssnano@3.10.0": {
      "map": {
        "has": "npm:has@1.0.1",
        "defined": "npm:defined@1.0.0",
        "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
        "decamelize": "npm:decamelize@1.2.0",
        "autoprefixer": "npm:autoprefixer@6.7.7",
        "object-assign": "npm:object-assign@4.1.1",
        "postcss-colormin": "npm:postcss-colormin@2.2.2",
        "postcss-convert-values": "npm:postcss-convert-values@2.6.1",
        "postcss": "npm:postcss@5.2.17",
        "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
        "postcss-calc": "npm:postcss-calc@5.3.1",
        "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.1.0",
        "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
        "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
        "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.2",
        "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.5",
        "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
        "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.1",
        "postcss-reduce-idents": "npm:postcss-reduce-idents@2.4.0",
        "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.2",
        "postcss-merge-idents": "npm:postcss-merge-idents@2.1.7",
        "postcss-minify-params": "npm:postcss-minify-params@1.2.2",
        "postcss-normalize-url": "npm:postcss-normalize-url@3.0.8",
        "postcss-ordered-values": "npm:postcss-ordered-values@2.2.3",
        "postcss-minify-selectors": "npm:postcss-minify-selectors@2.1.1",
        "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.4",
        "postcss-merge-rules": "npm:postcss-merge-rules@2.1.2",
        "postcss-discard-unused": "npm:postcss-discard-unused@2.2.3",
        "postcss-svgo": "npm:postcss-svgo@2.1.6",
        "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.1",
        "postcss-zindex": "npm:postcss-zindex@2.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:css-modules-loader-core@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.1.2",
        "postcss-modules-values": "npm:postcss-modules-values@1.2.2",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.2",
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.1.1"
      }
    },
    "npm:postcss-discard-comments@2.0.4": {
      "map": {
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss-colormin@2.2.2": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "colormin": "npm:colormin@1.1.2"
      }
    },
    "npm:postcss-convert-values@2.6.1": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:autoprefixer@6.7.7": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "normalize-range": "npm:normalize-range@0.1.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "browserslist": "npm:browserslist@1.7.7",
        "caniuse-db": "npm:caniuse-db@1.0.30000660"
      }
    },
    "npm:postcss-discard-empty@2.1.0": {
      "map": {
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss-discard-duplicates@2.1.0": {
      "map": {
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss-calc@5.3.1": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "reduce-css-calc": "npm:reduce-css-calc@1.3.0"
      }
    },
    "npm:postcss-discard-overridden@0.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:postcss-minify-font-values@1.0.5": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "postcss": "npm:postcss@5.2.17",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-minify-gradients@1.0.5": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-merge-longhand@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss-modules-values@1.2.2": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss-reduce-idents@2.4.0": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-minify-params@1.2.2": {
      "map": {
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss": "npm:postcss@5.2.17",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-merge-idents@2.1.7": {
      "map": {
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "has": "npm:has@1.0.1",
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss-normalize-url@3.0.8": {
      "map": {
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss": "npm:postcss@5.2.17",
        "is-absolute-url": "npm:is-absolute-url@2.1.0",
        "normalize-url": "npm:normalize-url@1.9.1"
      }
    },
    "npm:postcss-ordered-values@2.2.3": {
      "map": {
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss-reduce-transforms@1.0.4": {
      "map": {
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "has": "npm:has@1.0.1",
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss-normalize-charset@1.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss-filter-plugins@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "uniqid": "npm:uniqid@4.1.1"
      }
    },
    "npm:postcss-merge-rules@2.1.2": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "browserslist": "npm:browserslist@1.7.7",
        "caniuse-api": "npm:caniuse-api@1.6.1",
        "vendors": "npm:vendors@1.0.1",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3"
      }
    },
    "npm:postcss-discard-unused@2.2.3": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-svgo@2.1.6": {
      "map": {
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss": "npm:postcss@5.2.17",
        "is-svg": "npm:is-svg@2.1.0",
        "svgo": "npm:svgo@0.7.2"
      }
    },
    "npm:postcss-minify-selectors@2.1.1": {
      "map": {
        "has": "npm:has@1.0.1",
        "postcss": "npm:postcss@5.2.17",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3"
      }
    },
    "npm:postcss-reduce-initial@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss@5.2.17": {
      "map": {
        "supports-color": "npm:supports-color@3.2.3",
        "source-map": "npm:source-map@0.5.6",
        "js-base64": "npm:js-base64@2.1.9",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:postcss@5.1.2": {
      "map": {
        "supports-color": "npm:supports-color@3.2.3",
        "source-map": "npm:source-map@0.5.6",
        "js-base64": "npm:js-base64@2.1.9"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.17"
      }
    },
    "npm:postcss-zindex@2.2.0": {
      "map": {
        "has": "npm:has@1.0.1",
        "postcss": "npm:postcss@5.2.17",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:colormin@1.1.2": {
      "map": {
        "has": "npm:has@1.0.1",
        "css-color-names": "npm:css-color-names@0.0.4",
        "color": "npm:color@0.11.4"
      }
    },
    "npm:browserslist@1.7.7": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000660",
        "electron-to-chromium": "npm:electron-to-chromium@1.3.8"
      }
    },
    "npm:normalize-url@1.9.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "prepend-http": "npm:prepend-http@1.0.4",
        "sort-keys": "npm:sort-keys@1.1.2",
        "query-string": "npm:query-string@4.3.4"
      }
    },
    "npm:caniuse-api@1.6.1": {
      "map": {
        "browserslist": "npm:browserslist@1.7.7",
        "caniuse-db": "npm:caniuse-db@1.0.30000660",
        "lodash.memoize": "npm:lodash.memoize@4.1.2",
        "lodash.uniq": "npm:lodash.uniq@4.5.0"
      }
    },
    "npm:postcss-modules-scope@1.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.6.0"
      }
    },
    "npm:postcss-modules-local-by-default@1.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.17",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.6.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "supports-color": "npm:supports-color@2.0.0",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:supports-color@3.2.3": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:reduce-css-calc@1.3.0": {
      "map": {
        "math-expression-evaluator": "npm:math-expression-evaluator@1.2.16",
        "balanced-match": "npm:balanced-match@0.4.2",
        "reduce-function-call": "npm:reduce-function-call@1.0.2"
      }
    },
    "npm:uniqid@4.1.1": {
      "map": {
        "macaddress": "npm:macaddress@0.2.8"
      }
    },
    "npm:postcss-selector-parser@2.2.3": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "indexes-of": "npm:indexes-of@1.0.1",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:is-svg@2.1.0": {
      "map": {
        "html-comment-regex": "npm:html-comment-regex@1.1.1"
      }
    },
    "npm:reduce-function-call@1.0.2": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:svgo@0.7.2": {
      "map": {
        "coa": "npm:coa@1.0.1",
        "colors": "npm:colors@1.1.2",
        "whet.extend": "npm:whet.extend@0.9.9",
        "sax": "npm:sax@1.2.2",
        "mkdirp": "npm:mkdirp@0.5.1",
        "js-yaml": "npm:js-yaml@3.7.0",
        "csso": "npm:csso@2.3.2"
      }
    },
    "npm:query-string@4.3.4": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:color@0.11.4": {
      "map": {
        "clone": "npm:clone@1.0.2",
        "color-string": "npm:color-string@0.3.0",
        "color-convert": "npm:color-convert@1.9.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:sort-keys@1.1.2": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:css-selector-tokenizer@0.6.0": {
      "map": {
        "cssesc": "npm:cssesc@0.1.0",
        "regexpu-core": "npm:regexpu-core@1.0.0",
        "fastparse": "npm:fastparse@1.1.1"
      }
    },
    "npm:csso@2.3.2": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "clap": "npm:clap@1.1.3"
      }
    },
    "npm:coa@1.0.1": {
      "map": {
        "q": "npm:q@1.5.0"
      }
    },
    "npm:jspm-nodelibs-punycode@0.2.1": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.2"
      }
    },
    "npm:color-convert@1.9.0": {
      "map": {
        "color-name": "npm:color-name@1.1.2"
      }
    },
    "npm:jspm-nodelibs-os@0.2.1": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:js-yaml@3.7.0": {
      "map": {
        "argparse": "npm:argparse@1.0.9",
        "esprima": "npm:esprima@2.7.3"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:regexpu-core@1.0.0": {
      "map": {
        "regjsgen": "npm:regjsgen@0.2.0",
        "regjsparser": "npm:regjsparser@0.1.5",
        "regenerate": "npm:regenerate@1.3.2"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:clap@1.1.3": {
      "map": {
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:argparse@1.0.9": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.9"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:readable-stream@2.2.9": {
      "map": {
        "string_decoder": "npm:string_decoder@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.4.0",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:string_decoder@1.0.0": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "brorand": "npm:brorand@1.1.0",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    }
  }
});
