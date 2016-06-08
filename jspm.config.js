SystemJS.config({
  nodeConfig: {
    "paths": {
      "github:": "jspm_packages/github/",
      "npm:": "jspm_packages/npm/",
      "jspm-loader-css/": "src/"
    }
  },
  devConfig: {
    "map": {
      "ava": "npm:ava@0.12.0",
      "babel-cli": "npm:babel-cli@6.9.0",
      "babel-core": "npm:babel-core@6.9.1",
      "babel-preset-es2015": "npm:babel-preset-es2015@6.9.0",
      "eslint": "npm:eslint@2.11.1",
      "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
      "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
      "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
      "chokidar": "npm:chokidar@1.5.1",
      "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
      "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
      "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
      "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "events": "github:jspm/nodelibs-events@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "fsevents": "npm:fsevents@1.0.12",
      "http": "github:jspm/nodelibs-http@0.2.0-alpha",
      "https": "github:jspm/nodelibs-https@0.2.0-alpha",
      "jodid25519": "npm:jodid25519@1.0.2",
      "jsbn": "npm:jsbn@0.1.0",
      "module": "github:jspm/nodelibs-module@0.2.0-alpha",
      "net": "github:jspm/nodelibs-net@0.2.0-alpha",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
      "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
      "readline": "github:jspm/nodelibs-readline@0.2.0-alpha",
      "repl": "github:jspm/nodelibs-repl@0.2.0-alpha",
      "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
      "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
      "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
      "tweetnacl": "npm:tweetnacl@0.13.3",
      "url": "github:jspm/nodelibs-url@0.2.0-alpha",
      "util": "github:jspm/nodelibs-util@0.2.0-alpha",
      "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
      "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha",
      "jspm": "npm:jspm@0.17.0-beta.17",
      "cluster": "github:jspm/nodelibs-cluster@0.2.0-alpha",
      "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
      "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
      "console": "github:jspm/nodelibs-console@0.2.0-alpha"
    },
    "packages": {
      "npm:acorn-jsx@3.0.1": {
        "map": {
          "acorn": "npm:acorn@3.1.0"
        }
      },
      "npm:array-union@1.0.1": {
        "map": {
          "array-uniq": "npm:array-uniq@1.0.2"
        }
      },
      "npm:ava-init@0.1.4": {
        "map": {
          "arr-exclude": "npm:arr-exclude@1.0.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "read-pkg-up": "npm:read-pkg-up@1.0.1",
          "the-argv": "npm:the-argv@1.0.0",
          "write-pkg": "npm:write-pkg@1.0.0"
        }
      },
      "npm:ava@0.12.0": {
        "map": {
          "arr-flatten": "npm:arr-flatten@1.0.1",
          "arrify": "npm:arrify@1.0.1",
          "ava-init": "npm:ava-init@0.1.4",
          "babel-core": "npm:babel-core@6.9.1",
          "babel-plugin-espower": "npm:babel-plugin-espower@2.2.0",
          "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.9.0",
          "babel-preset-es2015": "npm:babel-preset-es2015@6.9.0",
          "babel-preset-stage-2": "npm:babel-preset-stage-2@6.5.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "bluebird": "npm:bluebird@3.4.0",
          "caching-transform": "npm:caching-transform@1.0.1",
          "chalk": "npm:chalk@1.1.3",
          "cli-cursor": "npm:cli-cursor@1.0.2",
          "co-with-promise": "npm:co-with-promise@4.6.0",
          "common-path-prefix": "npm:common-path-prefix@1.0.0",
          "convert-source-map": "npm:convert-source-map@1.2.0",
          "core-assert": "npm:core-assert@0.1.3",
          "debug": "npm:debug@2.2.0",
          "deeper": "npm:deeper@2.1.0",
          "empower-core": "npm:empower-core@0.5.0",
          "figures": "npm:figures@1.7.0",
          "find-cache-dir": "npm:find-cache-dir@0.1.1",
          "fn-name": "npm:fn-name@2.0.1",
          "globby": "npm:globby@4.1.0",
          "ignore-by-default": "npm:ignore-by-default@1.0.1",
          "is-ci": "npm:is-ci@1.0.8",
          "is-generator-fn": "npm:is-generator-fn@1.0.0",
          "is-observable": "npm:is-observable@0.1.0",
          "is-promise": "npm:is-promise@2.1.0",
          "last-line-stream": "npm:last-line-stream@1.0.0",
          "loud-rejection": "npm:loud-rejection@1.4.1",
          "max-timeout": "npm:max-timeout@1.0.0",
          "md5-hex": "npm:md5-hex@1.3.0",
          "meow": "npm:meow@3.7.0",
          "multimatch": "npm:multimatch@2.1.0",
          "object-assign": "npm:object-assign@4.1.0",
          "observable-to-promise": "npm:observable-to-promise@0.3.0",
          "option-chain": "npm:option-chain@0.1.1",
          "pkg-conf": "npm:pkg-conf@1.1.3",
          "plur": "npm:plur@2.1.2",
          "power-assert-formatter": "npm:power-assert-formatter@1.4.0",
          "power-assert-renderers": "npm:power-assert-renderers@0.1.1",
          "pretty-ms": "npm:pretty-ms@2.1.0",
          "require-precompiled": "npm:require-precompiled@0.1.0",
          "resolve-cwd": "npm:resolve-cwd@1.0.0",
          "serialize-error": "npm:serialize-error@1.1.0",
          "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
          "source-map-support": "npm:source-map-support@0.4.0",
          "stack-utils": "npm:stack-utils@0.4.0",
          "strip-bom": "npm:strip-bom@2.0.0",
          "time-require": "npm:time-require@0.1.2",
          "unique-temp-dir": "npm:unique-temp-dir@1.0.0",
          "update-notifier": "npm:update-notifier@0.6.3"
        }
      },
      "npm:babel-cli@6.9.0": {
        "map": {
          "babel-core": "npm:babel-core@6.9.1",
          "babel-polyfill": "npm:babel-polyfill@6.9.1",
          "babel-register": "npm:babel-register@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "bin-version-check": "npm:bin-version-check@2.1.0",
          "chalk": "npm:chalk@1.1.1",
          "commander": "npm:commander@2.9.0",
          "convert-source-map": "npm:convert-source-map@1.2.0",
          "fs-readdir-recursive": "npm:fs-readdir-recursive@0.1.2",
          "glob": "npm:glob@5.0.15",
          "lodash": "npm:lodash@4.13.1",
          "log-symbols": "npm:log-symbols@1.0.2",
          "output-file-sync": "npm:output-file-sync@1.1.1",
          "path-exists": "npm:path-exists@1.0.0",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "request": "npm:request@2.72.0",
          "slash": "npm:slash@1.0.0",
          "source-map": "npm:source-map@0.5.6",
          "v8flags": "npm:v8flags@2.0.11"
        }
      },
      "npm:babel-code-frame@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "chalk": "npm:chalk@1.1.3",
          "esutils": "npm:esutils@2.0.2",
          "js-tokens": "npm:js-tokens@1.0.3"
        }
      },
      "npm:babel-core@6.9.1": {
        "map": {
          "babel-code-frame": "npm:babel-code-frame@6.8.0",
          "babel-generator": "npm:babel-generator@6.9.0",
          "babel-helpers": "npm:babel-helpers@6.8.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-register": "npm:babel-register@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babylon": "npm:babylon@6.8.1",
          "convert-source-map": "npm:convert-source-map@1.2.0",
          "debug": "npm:debug@2.2.0",
          "json5": "npm:json5@0.4.0",
          "lodash": "npm:lodash@4.13.1",
          "minimatch": "npm:minimatch@2.0.10",
          "path-exists": "npm:path-exists@1.0.0",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "private": "npm:private@0.1.6",
          "shebang-regex": "npm:shebang-regex@1.0.0",
          "slash": "npm:slash@1.0.0",
          "source-map": "npm:source-map@0.5.6"
        }
      },
      "npm:babel-generator@6.9.0": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1",
          "detect-indent": "npm:detect-indent@3.0.1",
          "lodash": "npm:lodash@4.13.1",
          "source-map": "npm:source-map@0.5.6"
        }
      },
      "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0": {
        "map": {
          "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helper-call-delegate@6.8.0": {
        "map": {
          "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helper-define-map@6.9.0": {
        "map": {
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-helper-explode-assignable-expression@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helper-function-name@6.8.0": {
        "map": {
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helper-get-function-arity@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helper-hoist-variables@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helper-optimise-call-expression@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helper-regex@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-helper-remap-async-to-generator@6.8.0": {
        "map": {
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helper-replace-supers@6.8.0": {
        "map": {
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helpers@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-check-es2015-constants@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-espower@2.2.0": {
        "map": {
          "babel-generator": "npm:babel-generator@6.9.0",
          "babylon": "npm:babylon@6.8.1",
          "call-matcher": "npm:call-matcher@1.0.0",
          "core-js": "npm:core-js@2.4.0",
          "espower-location-detector": "npm:espower-location-detector@0.1.2",
          "espurify": "npm:espurify@1.6.0",
          "estraverse": "npm:estraverse@4.2.0"
        }
      },
      "npm:babel-plugin-syntax-async-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-syntax-exponentiation-operator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-syntax-object-rest-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-syntax-trailing-function-commas@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-async-to-generator@6.8.0": {
        "map": {
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.8.0",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-block-scoping@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-plugin-transform-es2015-classes@6.9.0": {
        "map": {
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
        "map": {
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0"
        }
      },
      "npm:babel-plugin-transform-es2015-destructuring@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-for-of@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
        "map": {
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-literals@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-commonjs@6.8.0": {
        "map": {
          "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
        "map": {
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-parameters@6.9.0": {
        "map": {
          "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.8.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
        "map": {
          "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-es2015-unicode-regex@6.8.0": {
        "map": {
          "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "regexpu-core": "npm:regexpu-core@1.0.0"
        }
      },
      "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
        "map": {
          "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0",
          "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-object-rest-spread@6.8.0": {
        "map": {
          "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-regenerator@6.9.0": {
        "map": {
          "babel-core": "npm:babel-core@6.9.1",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0",
          "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.9.0",
          "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babylon": "npm:babylon@6.8.1",
          "private": "npm:private@0.1.6"
        }
      },
      "npm:babel-plugin-transform-runtime@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-strict-mode@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-polyfill@6.9.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "core-js": "npm:core-js@2.4.0",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
        }
      },
      "npm:babel-preset-es2015@6.9.0": {
        "map": {
          "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
          "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
          "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
          "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.9.0",
          "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.9.0",
          "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
          "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.9.0",
          "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0",
          "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
          "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
          "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
          "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.8.0",
          "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
          "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.9.0",
          "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0",
          "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
          "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
          "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
          "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0",
          "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.8.0",
          "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.9.0"
        }
      },
      "npm:babel-preset-stage-2@6.5.0": {
        "map": {
          "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.8.0",
          "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.8.0",
          "babel-preset-stage-3": "npm:babel-preset-stage-3@6.5.0"
        }
      },
      "npm:babel-preset-stage-3@6.5.0": {
        "map": {
          "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.8.0",
          "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0"
        }
      },
      "npm:babel-register@6.9.0": {
        "map": {
          "babel-core": "npm:babel-core@6.9.1",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "core-js": "npm:core-js@2.4.0",
          "home-or-tmp": "npm:home-or-tmp@1.0.0",
          "lodash": "npm:lodash@4.13.1",
          "mkdirp": "npm:mkdirp@0.5.1",
          "path-exists": "npm:path-exists@1.0.0",
          "source-map-support": "npm:source-map-support@0.2.10"
        }
      },
      "npm:babel-runtime@6.9.2": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
        }
      },
      "npm:babel-template@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babylon": "npm:babylon@6.8.1",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-traverse@6.9.0": {
        "map": {
          "babel-code-frame": "npm:babel-code-frame@6.8.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.9.1",
          "babylon": "npm:babylon@6.8.1",
          "debug": "npm:debug@2.2.0",
          "globals": "npm:globals@8.18.0",
          "invariant": "npm:invariant@2.2.1",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-types@6.9.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.13.1",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:babylon@6.8.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:bin-version-check@2.1.0": {
        "map": {
          "bin-version": "npm:bin-version@1.0.4",
          "minimist": "npm:minimist@1.2.0",
          "semver": "npm:semver@4.3.6",
          "semver-truncate": "npm:semver-truncate@1.1.0"
        }
      },
      "npm:bin-version@1.0.4": {
        "map": {
          "find-versions": "npm:find-versions@1.2.1"
        }
      },
      "npm:boxen@0.3.1": {
        "map": {
          "chalk": "npm:chalk@1.1.3",
          "filled-array": "npm:filled-array@1.1.0",
          "object-assign": "npm:object-assign@4.1.0",
          "repeating": "npm:repeating@2.0.1",
          "string-width": "npm:string-width@1.0.1",
          "widest-line": "npm:widest-line@1.0.0"
        }
      },
      "npm:caching-transform@1.0.1": {
        "map": {
          "md5-hex": "npm:md5-hex@1.3.0",
          "mkdirp": "npm:mkdirp@0.5.1",
          "write-file-atomic": "npm:write-file-atomic@1.1.4"
        }
      },
      "npm:call-matcher@1.0.0": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "deep-equal": "npm:deep-equal@1.0.1",
          "espurify": "npm:espurify@1.6.0",
          "estraverse": "npm:estraverse@4.2.0"
        }
      },
      "npm:caller-path@0.1.0": {
        "map": {
          "callsites": "npm:callsites@0.2.0"
        }
      },
      "npm:camelcase-keys@2.1.0": {
        "map": {
          "camelcase": "npm:camelcase@2.1.1",
          "map-obj": "npm:map-obj@1.0.1"
        }
      },
      "npm:chalk@0.4.0": {
        "map": {
          "ansi-styles": "npm:ansi-styles@1.0.0",
          "has-color": "npm:has-color@0.1.7",
          "strip-ansi": "npm:strip-ansi@0.1.1"
        }
      },
      "npm:chalk@1.1.1": {
        "map": {
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "has-ansi": "npm:has-ansi@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "supports-color": "npm:supports-color@2.0.0"
        }
      },
      "npm:cli-cursor@1.0.2": {
        "map": {
          "restore-cursor": "npm:restore-cursor@1.0.1"
        }
      },
      "npm:co-with-promise@4.6.0": {
        "map": {
          "pinkie-promise": "npm:pinkie-promise@1.0.0"
        }
      },
      "npm:code-point-at@1.0.0": {
        "map": {
          "number-is-nan": "npm:number-is-nan@1.0.0"
        }
      },
      "npm:concat-stream@1.5.1": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@2.0.6",
          "typedarray": "npm:typedarray@0.0.6"
        }
      },
      "npm:configstore@2.0.0": {
        "map": {
          "dot-prop": "npm:dot-prop@2.4.0",
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "mkdirp": "npm:mkdirp@0.5.1",
          "object-assign": "npm:object-assign@4.1.0",
          "os-tmpdir": "npm:os-tmpdir@1.0.1",
          "osenv": "npm:osenv@0.1.3",
          "uuid": "npm:uuid@2.0.2",
          "write-file-atomic": "npm:write-file-atomic@1.1.4",
          "xdg-basedir": "npm:xdg-basedir@2.0.0"
        }
      },
      "npm:core-assert@0.1.3": {
        "map": {
          "buf-compare": "npm:buf-compare@1.0.0"
        }
      },
      "npm:create-error-class@3.0.2": {
        "map": {
          "capture-stack-trace": "npm:capture-stack-trace@1.0.0"
        }
      },
      "npm:currently-unhandled@0.4.1": {
        "map": {
          "array-find-index": "npm:array-find-index@1.0.1"
        }
      },
      "npm:d@0.1.1": {
        "map": {
          "es5-ext": "npm:es5-ext@0.10.11"
        }
      },
      "npm:del@2.2.0": {
        "map": {
          "globby": "npm:globby@4.1.0",
          "is-path-cwd": "npm:is-path-cwd@1.0.0",
          "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
          "object-assign": "npm:object-assign@4.1.0",
          "pify": "npm:pify@2.3.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "rimraf": "npm:rimraf@2.5.2"
        }
      },
      "npm:detect-indent@3.0.1": {
        "map": {
          "get-stdin": "npm:get-stdin@4.0.1",
          "minimist": "npm:minimist@1.2.0",
          "repeating": "npm:repeating@1.1.3"
        }
      },
      "npm:doctrine@1.2.2": {
        "map": {
          "esutils": "npm:esutils@1.1.6",
          "isarray": "npm:isarray@1.0.0"
        }
      },
      "npm:dot-prop@2.4.0": {
        "map": {
          "is-obj": "npm:is-obj@1.0.1"
        }
      },
      "npm:duplexer2@0.1.4": {
        "map": {
          "readable-stream": "npm:readable-stream@2.0.6"
        }
      },
      "npm:empower-core@0.5.0": {
        "map": {
          "call-signature": "npm:call-signature@0.0.2",
          "core-js": "npm:core-js@1.2.6",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "npm:error-ex@1.3.0": {
        "map": {
          "is-arrayish": "npm:is-arrayish@0.2.1"
        }
      },
      "npm:es5-ext@0.10.11": {
        "map": {
          "es6-iterator": "npm:es6-iterator@2.0.0",
          "es6-symbol": "npm:es6-symbol@3.0.2"
        }
      },
      "npm:es6-iterator@2.0.0": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11",
          "es6-symbol": "npm:es6-symbol@3.1.0"
        }
      },
      "npm:es6-map@0.1.4": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11",
          "es6-iterator": "npm:es6-iterator@2.0.0",
          "es6-set": "npm:es6-set@0.1.4",
          "es6-symbol": "npm:es6-symbol@3.1.0",
          "event-emitter": "npm:event-emitter@0.3.4"
        }
      },
      "npm:es6-set@0.1.4": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11",
          "es6-iterator": "npm:es6-iterator@2.0.0",
          "es6-symbol": "npm:es6-symbol@3.1.0",
          "event-emitter": "npm:event-emitter@0.3.4"
        }
      },
      "npm:es6-symbol@3.0.2": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11"
        }
      },
      "npm:es6-symbol@3.1.0": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11"
        }
      },
      "npm:es6-weak-map@2.0.1": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11",
          "es6-iterator": "npm:es6-iterator@2.0.0",
          "es6-symbol": "npm:es6-symbol@3.1.0"
        }
      },
      "npm:escope@3.6.0": {
        "map": {
          "es6-map": "npm:es6-map@0.1.4",
          "es6-weak-map": "npm:es6-weak-map@2.0.1",
          "esrecurse": "npm:esrecurse@4.1.0",
          "estraverse": "npm:estraverse@4.2.0"
        }
      },
      "npm:eslint@2.11.1": {
        "map": {
          "chalk": "npm:chalk@1.1.3",
          "concat-stream": "npm:concat-stream@1.5.1",
          "debug": "npm:debug@2.2.0",
          "doctrine": "npm:doctrine@1.2.2",
          "es6-map": "npm:es6-map@0.1.4",
          "escope": "npm:escope@3.6.0",
          "espree": "npm:espree@3.1.4",
          "estraverse": "npm:estraverse@4.2.0",
          "esutils": "npm:esutils@2.0.2",
          "file-entry-cache": "npm:file-entry-cache@1.2.4",
          "glob": "npm:glob@7.0.3",
          "globals": "npm:globals@9.7.0",
          "ignore": "npm:ignore@3.1.2",
          "imurmurhash": "npm:imurmurhash@0.1.4",
          "inquirer": "npm:inquirer@0.12.0",
          "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
          "is-resolvable": "npm:is-resolvable@1.0.0",
          "js-yaml": "npm:js-yaml@3.6.1",
          "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
          "levn": "npm:levn@0.3.0",
          "lodash": "npm:lodash@4.13.1",
          "mkdirp": "npm:mkdirp@0.5.1",
          "optionator": "npm:optionator@0.8.1",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "path-is-inside": "npm:path-is-inside@1.0.1",
          "pluralize": "npm:pluralize@1.2.1",
          "progress": "npm:progress@1.1.8",
          "require-uncached": "npm:require-uncached@1.0.2",
          "shelljs": "npm:shelljs@0.6.0",
          "strip-json-comments": "npm:strip-json-comments@1.0.4",
          "table": "npm:table@3.7.8",
          "text-table": "npm:text-table@0.2.0",
          "user-home": "npm:user-home@2.0.0"
        }
      },
      "npm:espower-location-detector@0.1.2": {
        "map": {
          "is-url": "npm:is-url@1.2.1",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "source-map": "npm:source-map@0.5.6",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "npm:espree@3.1.4": {
        "map": {
          "acorn": "npm:acorn@3.1.0",
          "acorn-jsx": "npm:acorn-jsx@3.0.1"
        }
      },
      "npm:espurify@1.6.0": {
        "map": {
          "core-js": "npm:core-js@2.4.0"
        }
      },
      "npm:esrecurse@4.1.0": {
        "map": {
          "estraverse": "npm:estraverse@4.1.1",
          "object-assign": "npm:object-assign@4.1.0"
        }
      },
      "npm:event-emitter@0.3.4": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11"
        }
      },
      "npm:figures@1.7.0": {
        "map": {
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "object-assign": "npm:object-assign@4.1.0"
        }
      },
      "npm:file-entry-cache@1.2.4": {
        "map": {
          "flat-cache": "npm:flat-cache@1.0.10",
          "object-assign": "npm:object-assign@4.1.0"
        }
      },
      "npm:find-cache-dir@0.1.1": {
        "map": {
          "commondir": "npm:commondir@1.0.1",
          "mkdirp": "npm:mkdirp@0.5.1",
          "pkg-dir": "npm:pkg-dir@1.0.0"
        }
      },
      "npm:find-up@1.1.2": {
        "map": {
          "path-exists": "npm:path-exists@2.1.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:find-versions@1.2.1": {
        "map": {
          "array-uniq": "npm:array-uniq@1.0.2",
          "get-stdin": "npm:get-stdin@4.0.1",
          "meow": "npm:meow@3.7.0",
          "semver-regex": "npm:semver-regex@1.0.0"
        }
      },
      "npm:flat-cache@1.0.10": {
        "map": {
          "del": "npm:del@2.2.0",
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "read-json-sync": "npm:read-json-sync@1.1.1",
          "write": "npm:write@0.2.1"
        }
      },
      "npm:glob@5.0.15": {
        "map": {
          "inflight": "npm:inflight@1.0.5",
          "inherits": "npm:inherits@2.0.1",
          "minimatch": "npm:minimatch@3.0.0",
          "once": "npm:once@1.3.3",
          "path-is-absolute": "npm:path-is-absolute@1.0.0"
        }
      },
      "npm:glob@6.0.4": {
        "map": {
          "inflight": "npm:inflight@1.0.5",
          "inherits": "npm:inherits@2.0.1",
          "minimatch": "npm:minimatch@3.0.0",
          "once": "npm:once@1.3.3",
          "path-is-absolute": "npm:path-is-absolute@1.0.0"
        }
      },
      "npm:globby@4.1.0": {
        "map": {
          "array-union": "npm:array-union@1.0.1",
          "arrify": "npm:arrify@1.0.1",
          "glob": "npm:glob@6.0.4",
          "object-assign": "npm:object-assign@4.1.0",
          "pify": "npm:pify@2.3.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:got@5.6.0": {
        "map": {
          "create-error-class": "npm:create-error-class@3.0.2",
          "duplexer2": "npm:duplexer2@0.1.4",
          "is-plain-obj": "npm:is-plain-obj@1.1.0",
          "is-redirect": "npm:is-redirect@1.0.0",
          "is-retry-allowed": "npm:is-retry-allowed@1.0.0",
          "is-stream": "npm:is-stream@1.1.0",
          "lowercase-keys": "npm:lowercase-keys@1.0.0",
          "node-status-codes": "npm:node-status-codes@1.0.0",
          "node-unzip-response": "npm:unzip-response@1.0.0",
          "object-assign": "npm:object-assign@4.1.0",
          "parse-json": "npm:parse-json@2.2.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "read-all-stream": "npm:read-all-stream@3.1.0",
          "readable-stream": "npm:readable-stream@2.0.6",
          "timed-out": "npm:timed-out@2.0.0",
          "unzip-response": "npm:unzip-response@1.0.0",
          "url-parse-lax": "npm:url-parse-lax@1.0.0"
        }
      },
      "npm:home-or-tmp@1.0.0": {
        "map": {
          "os-tmpdir": "npm:os-tmpdir@1.0.1",
          "user-home": "npm:user-home@1.1.1"
        }
      },
      "npm:indent-string@2.1.0": {
        "map": {
          "repeating": "npm:repeating@2.0.1"
        }
      },
      "npm:inquirer@0.12.0": {
        "map": {
          "ansi-escapes": "npm:ansi-escapes@1.4.0",
          "ansi-regex": "npm:ansi-regex@2.0.0",
          "chalk": "npm:chalk@1.1.3",
          "cli-cursor": "npm:cli-cursor@1.0.2",
          "cli-width": "npm:cli-width@2.1.0",
          "figures": "npm:figures@1.7.0",
          "lodash": "npm:lodash@4.13.1",
          "readline2": "npm:readline2@1.0.1",
          "run-async": "npm:run-async@0.1.0",
          "rx-lite": "npm:rx-lite@3.1.2",
          "string-width": "npm:string-width@1.0.1",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "through": "npm:through@2.3.8"
        }
      },
      "npm:invariant@2.2.1": {
        "map": {
          "loose-envify": "npm:loose-envify@1.2.0"
        }
      },
      "npm:is-builtin-module@1.0.0": {
        "map": {
          "builtin-modules": "npm:builtin-modules@1.1.1"
        }
      },
      "npm:is-finite@1.0.1": {
        "map": {
          "number-is-nan": "npm:number-is-nan@1.0.0"
        }
      },
      "npm:is-fullwidth-code-point@1.0.0": {
        "map": {
          "number-is-nan": "npm:number-is-nan@1.0.0"
        }
      },
      "npm:is-observable@0.1.0": {
        "map": {
          "symbol-observable": "npm:symbol-observable@0.1.0"
        }
      },
      "npm:is-path-in-cwd@1.0.0": {
        "map": {
          "is-path-inside": "npm:is-path-inside@1.0.0"
        }
      },
      "npm:is-path-inside@1.0.0": {
        "map": {
          "path-is-inside": "npm:path-is-inside@1.0.1"
        }
      },
      "npm:is-resolvable@1.0.0": {
        "map": {
          "tryit": "npm:tryit@1.0.2"
        }
      },
      "npm:json-stable-stringify@1.0.1": {
        "map": {
          "jsonify": "npm:jsonify@0.0.0"
        }
      },
      "npm:last-line-stream@1.0.0": {
        "map": {
          "through2": "npm:through2@2.0.1"
        }
      },
      "npm:latest-version@2.0.0": {
        "map": {
          "package-json": "npm:package-json@2.3.2"
        }
      },
      "npm:levn@0.3.0": {
        "map": {
          "prelude-ls": "npm:prelude-ls@1.1.2",
          "type-check": "npm:type-check@0.3.2"
        }
      },
      "npm:load-json-file@1.1.0": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "parse-json": "npm:parse-json@2.2.0",
          "pify": "npm:pify@2.3.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "strip-bom": "npm:strip-bom@2.0.0"
        }
      },
      "npm:log-symbols@1.0.2": {
        "map": {
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:loose-envify@1.2.0": {
        "map": {
          "js-tokens": "npm:js-tokens@1.0.3"
        }
      },
      "npm:loud-rejection@1.4.1": {
        "map": {
          "currently-unhandled": "npm:currently-unhandled@0.4.1",
          "signal-exit": "npm:signal-exit@2.1.2"
        }
      },
      "npm:md5-hex@1.3.0": {
        "map": {
          "md5-o-matic": "npm:md5-o-matic@0.1.1"
        }
      },
      "npm:meow@3.7.0": {
        "map": {
          "camelcase-keys": "npm:camelcase-keys@2.1.0",
          "decamelize": "npm:decamelize@1.2.0",
          "loud-rejection": "npm:loud-rejection@1.4.1",
          "map-obj": "npm:map-obj@1.0.1",
          "minimist": "npm:minimist@1.2.0",
          "normalize-package-data": "npm:normalize-package-data@2.3.5",
          "object-assign": "npm:object-assign@4.1.0",
          "read-pkg-up": "npm:read-pkg-up@1.0.1",
          "redent": "npm:redent@1.0.0",
          "trim-newlines": "npm:trim-newlines@1.0.0"
        }
      },
      "npm:multimatch@2.1.0": {
        "map": {
          "array-differ": "npm:array-differ@1.0.0",
          "array-union": "npm:array-union@1.0.1",
          "arrify": "npm:arrify@1.0.1",
          "minimatch": "npm:minimatch@3.0.0"
        }
      },
      "npm:normalize-package-data@2.3.5": {
        "map": {
          "hosted-git-info": "npm:hosted-git-info@2.1.5",
          "is-builtin-module": "npm:is-builtin-module@1.0.0",
          "semver": "npm:semver@5.1.0",
          "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1"
        }
      },
      "npm:observable-to-promise@0.3.0": {
        "map": {
          "is-observable": "npm:is-observable@0.1.0",
          "symbol-observable": "npm:symbol-observable@0.1.0"
        }
      },
      "npm:option-chain@0.1.1": {
        "map": {
          "object-assign": "npm:object-assign@4.1.0"
        }
      },
      "npm:optionator@0.8.1": {
        "map": {
          "deep-is": "npm:deep-is@0.1.3",
          "fast-levenshtein": "npm:fast-levenshtein@1.1.3",
          "levn": "npm:levn@0.3.0",
          "prelude-ls": "npm:prelude-ls@1.1.2",
          "type-check": "npm:type-check@0.3.2",
          "wordwrap": "npm:wordwrap@1.0.0"
        }
      },
      "npm:osenv@0.1.3": {
        "map": {
          "os-homedir": "npm:os-homedir@1.0.1",
          "os-tmpdir": "npm:os-tmpdir@1.0.1"
        }
      },
      "npm:output-file-sync@1.1.1": {
        "map": {
          "mkdirp": "npm:mkdirp@0.5.1",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "npm:package-json@2.3.2": {
        "map": {
          "got": "npm:got@5.6.0",
          "rc": "npm:rc@1.1.6",
          "registry-url": "npm:registry-url@3.1.0",
          "semver": "npm:semver@5.1.0"
        }
      },
      "npm:parse-json@2.2.0": {
        "map": {
          "error-ex": "npm:error-ex@1.3.0"
        }
      },
      "npm:path-exists@2.1.0": {
        "map": {
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:path-type@1.1.0": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "pify": "npm:pify@2.3.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:pinkie-promise@1.0.0": {
        "map": {
          "pinkie": "npm:pinkie@1.0.0"
        }
      },
      "npm:pkg-conf@1.1.3": {
        "map": {
          "find-up": "npm:find-up@1.1.2",
          "load-json-file": "npm:load-json-file@1.1.0",
          "object-assign": "npm:object-assign@4.1.0",
          "symbol": "npm:symbol@0.2.3"
        }
      },
      "npm:pkg-dir@1.0.0": {
        "map": {
          "find-up": "npm:find-up@1.1.2"
        }
      },
      "npm:plur@2.1.2": {
        "map": {
          "irregular-plurals": "npm:irregular-plurals@1.1.0"
        }
      },
      "npm:power-assert-context-formatter@1.0.5": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "power-assert-context-traversal": "npm:power-assert-context-traversal@1.0.0"
        }
      },
      "npm:power-assert-context-reducer-ast@1.0.2": {
        "map": {
          "acorn": "npm:acorn@3.1.0",
          "acorn-es7-plugin": "npm:acorn-es7-plugin@1.0.14",
          "core-js": "npm:core-js@2.4.0",
          "espurify": "npm:espurify@1.6.0",
          "estraverse": "npm:estraverse@4.2.0"
        }
      },
      "npm:power-assert-context-traversal@1.0.0": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "estraverse": "npm:estraverse@4.2.0"
        }
      },
      "npm:power-assert-formatter@1.4.0": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "power-assert-context-formatter": "npm:power-assert-context-formatter@1.0.5",
          "power-assert-context-reducer-ast": "npm:power-assert-context-reducer-ast@1.0.2",
          "power-assert-renderer-assertion": "npm:power-assert-renderer-assertion@1.0.1",
          "power-assert-renderer-comparison": "npm:power-assert-renderer-comparison@1.0.6",
          "power-assert-renderer-diagram": "npm:power-assert-renderer-diagram@1.0.6",
          "power-assert-renderer-file": "npm:power-assert-renderer-file@1.0.1"
        }
      },
      "npm:power-assert-renderer-assertion@1.0.1": {
        "map": {
          "power-assert-renderer-base": "npm:power-assert-renderer-base@1.0.2"
        }
      },
      "npm:power-assert-renderer-comparison@1.0.6": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "googlediff": "npm:googlediff@0.1.0",
          "power-assert-renderer-base": "npm:power-assert-renderer-base@1.0.2",
          "stringifier": "npm:stringifier@1.3.0",
          "type-name": "npm:type-name@2.0.1"
        }
      },
      "npm:power-assert-renderer-diagram@1.0.6": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "eastasianwidth": "npm:eastasianwidth@0.1.1",
          "power-assert-renderer-base": "npm:power-assert-renderer-base@1.0.2",
          "stringifier": "npm:stringifier@1.3.0"
        }
      },
      "npm:power-assert-renderer-file@1.0.1": {
        "map": {
          "power-assert-renderer-base": "npm:power-assert-renderer-base@1.0.2"
        }
      },
      "npm:power-assert-renderer-succinct@1.0.1": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "power-assert-renderer-diagram": "npm:power-assert-renderer-diagram@1.0.6"
        }
      },
      "npm:power-assert-renderers@0.1.1": {
        "map": {
          "power-assert-renderer-assertion": "npm:power-assert-renderer-assertion@1.0.1",
          "power-assert-renderer-comparison": "npm:power-assert-renderer-comparison@1.0.6",
          "power-assert-renderer-diagram": "npm:power-assert-renderer-diagram@1.0.6",
          "power-assert-renderer-file": "npm:power-assert-renderer-file@1.0.1",
          "power-assert-renderer-succinct": "npm:power-assert-renderer-succinct@1.0.1"
        }
      },
      "npm:pretty-ms@0.2.2": {
        "map": {
          "parse-ms": "npm:parse-ms@0.1.2"
        }
      },
      "npm:pretty-ms@2.1.0": {
        "map": {
          "is-finite": "npm:is-finite@1.0.1",
          "parse-ms": "npm:parse-ms@1.0.1",
          "plur": "npm:plur@1.0.0"
        }
      },
      "npm:read-all-stream@3.1.0": {
        "map": {
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "readable-stream": "npm:readable-stream@2.0.6"
        }
      },
      "npm:read-json-sync@1.1.1": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.4"
        }
      },
      "npm:read-pkg-up@1.0.1": {
        "map": {
          "find-up": "npm:find-up@1.1.2",
          "read-pkg": "npm:read-pkg@1.1.0"
        }
      },
      "npm:read-pkg@1.1.0": {
        "map": {
          "load-json-file": "npm:load-json-file@1.1.0",
          "normalize-package-data": "npm:normalize-package-data@2.3.5",
          "path-type": "npm:path-type@1.1.0"
        }
      },
      "npm:readline2@1.0.1": {
        "map": {
          "code-point-at": "npm:code-point-at@1.0.0",
          "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
          "mute-stream": "npm:mute-stream@0.0.5"
        }
      },
      "npm:redent@1.0.0": {
        "map": {
          "indent-string": "npm:indent-string@2.1.0",
          "strip-indent": "npm:strip-indent@1.0.1"
        }
      },
      "npm:regexpu-core@1.0.0": {
        "map": {
          "regenerate": "npm:regenerate@1.3.1",
          "regjsgen": "npm:regjsgen@0.2.0",
          "regjsparser": "npm:regjsparser@0.1.5"
        }
      },
      "npm:registry-url@3.1.0": {
        "map": {
          "rc": "npm:rc@1.1.6"
        }
      },
      "npm:regjsparser@0.1.5": {
        "map": {
          "jsesc": "npm:jsesc@0.5.0"
        }
      },
      "npm:repeating@1.1.3": {
        "map": {
          "is-finite": "npm:is-finite@1.0.1"
        }
      },
      "npm:repeating@2.0.1": {
        "map": {
          "is-finite": "npm:is-finite@1.0.1"
        }
      },
      "npm:require-uncached@1.0.2": {
        "map": {
          "caller-path": "npm:caller-path@0.1.0",
          "resolve-from": "npm:resolve-from@1.0.1"
        }
      },
      "npm:resolve-cwd@1.0.0": {
        "map": {
          "resolve-from": "npm:resolve-from@2.0.0"
        }
      },
      "npm:restore-cursor@1.0.1": {
        "map": {
          "exit-hook": "npm:exit-hook@1.1.1",
          "onetime": "npm:onetime@1.1.0"
        }
      },
      "npm:run-async@0.1.0": {
        "map": {
          "once": "npm:once@1.3.3"
        }
      },
      "npm:semver-diff@2.1.0": {
        "map": {
          "semver": "npm:semver@5.1.0"
        }
      },
      "npm:semver-truncate@1.1.0": {
        "map": {
          "semver": "npm:semver@5.1.0"
        }
      },
      "npm:source-map-support@0.2.10": {
        "map": {
          "source-map": "npm:source-map@0.1.32"
        }
      },
      "npm:source-map-support@0.4.0": {
        "map": {
          "source-map": "npm:source-map@0.1.32"
        }
      },
      "npm:source-map@0.1.32": {
        "map": {
          "amdefine": "npm:amdefine@1.0.0"
        }
      },
      "npm:spdx-correct@1.0.2": {
        "map": {
          "spdx-license-ids": "npm:spdx-license-ids@1.2.1"
        }
      },
      "npm:spdx-expression-parse@1.0.2": {
        "map": {
          "spdx-exceptions": "npm:spdx-exceptions@1.0.4",
          "spdx-license-ids": "npm:spdx-license-ids@1.2.1"
        }
      },
      "npm:string-width@1.0.1": {
        "map": {
          "code-point-at": "npm:code-point-at@1.0.0",
          "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1"
        }
      },
      "npm:stringifier@1.3.0": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "traverse": "npm:traverse@0.6.6",
          "type-name": "npm:type-name@2.0.1"
        }
      },
      "npm:strip-bom@2.0.0": {
        "map": {
          "is-utf8": "npm:is-utf8@0.2.1"
        }
      },
      "npm:strip-indent@1.0.1": {
        "map": {
          "get-stdin": "npm:get-stdin@4.0.1"
        }
      },
      "npm:table@3.7.8": {
        "map": {
          "bluebird": "npm:bluebird@3.4.0",
          "chalk": "npm:chalk@1.1.3",
          "lodash": "npm:lodash@4.13.1",
          "slice-ansi": "npm:slice-ansi@0.0.4",
          "string-width": "npm:string-width@1.0.1",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "tv4": "npm:tv4@1.2.7",
          "xregexp": "npm:xregexp@3.1.1"
        }
      },
      "npm:through2@2.0.1": {
        "map": {
          "readable-stream": "npm:readable-stream@2.0.6",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "npm:time-require@0.1.2": {
        "map": {
          "chalk": "npm:chalk@0.4.0",
          "date-time": "npm:date-time@0.1.1",
          "pretty-ms": "npm:pretty-ms@0.2.2",
          "text-table": "npm:text-table@0.2.0"
        }
      },
      "npm:type-check@0.3.2": {
        "map": {
          "prelude-ls": "npm:prelude-ls@1.1.2"
        }
      },
      "npm:unique-temp-dir@1.0.0": {
        "map": {
          "mkdirp": "npm:mkdirp@0.5.1",
          "os-tmpdir": "npm:os-tmpdir@1.0.1",
          "uid2": "npm:uid2@0.0.3"
        }
      },
      "npm:update-notifier@0.6.3": {
        "map": {
          "boxen": "npm:boxen@0.3.1",
          "chalk": "npm:chalk@1.1.3",
          "configstore": "npm:configstore@2.0.0",
          "is-npm": "npm:is-npm@1.0.0",
          "latest-version": "npm:latest-version@2.0.0",
          "semver-diff": "npm:semver-diff@2.1.0"
        }
      },
      "npm:url-parse-lax@1.0.0": {
        "map": {
          "prepend-http": "npm:prepend-http@1.0.4"
        }
      },
      "npm:user-home@2.0.0": {
        "map": {
          "os-homedir": "npm:os-homedir@1.0.1"
        }
      },
      "npm:v8flags@2.0.11": {
        "map": {
          "user-home": "npm:user-home@1.1.1"
        }
      },
      "npm:validate-npm-package-license@3.0.1": {
        "map": {
          "spdx-correct": "npm:spdx-correct@1.0.2",
          "spdx-expression-parse": "npm:spdx-expression-parse@1.0.2"
        }
      },
      "npm:widest-line@1.0.0": {
        "map": {
          "string-width": "npm:string-width@1.0.1"
        }
      },
      "npm:write-file-atomic@1.1.4": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "imurmurhash": "npm:imurmurhash@0.1.4",
          "slide": "npm:slide@1.1.6"
        }
      },
      "npm:write-json-file@1.2.0": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "mkdirp": "npm:mkdirp@0.5.1",
          "object-assign": "npm:object-assign@4.1.0",
          "pify": "npm:pify@2.3.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "sort-keys": "npm:sort-keys@1.1.2",
          "write-file-atomic": "npm:write-file-atomic@1.1.4"
        }
      },
      "npm:write-pkg@1.0.0": {
        "map": {
          "write-json-file": "npm:write-json-file@1.2.0"
        }
      },
      "npm:write@0.2.1": {
        "map": {
          "mkdirp": "npm:mkdirp@0.5.1"
        }
      },
      "npm:xdg-basedir@2.0.0": {
        "map": {
          "os-homedir": "npm:os-homedir@1.0.1"
        }
      },
      "github:jspm/nodelibs-buffer@0.2.0-alpha": {
        "map": {
          "buffer-browserify": "npm:buffer@4.6.0"
        }
      },
      "github:jspm/nodelibs-crypto@0.2.0-alpha": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "github:jspm/nodelibs-http@0.2.0-alpha": {
        "map": {
          "http-browserify": "npm:stream-http@2.3.0"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "github:jspm/nodelibs-punycode@0.2.0-alpha": {
        "map": {
          "punycode-browserify": "npm:punycode@1.3.2"
        }
      },
      "github:jspm/nodelibs-stream@0.2.0-alpha": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      },
      "github:jspm/nodelibs-url@0.2.0-alpha": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "github:jspm/nodelibs-zlib@0.2.0-alpha": {
        "map": {
          "zlib-browserify": "npm:browserify-zlib@0.1.4"
        }
      },
      "npm:anymatch@1.3.0": {
        "map": {
          "arrify": "npm:arrify@1.0.1",
          "micromatch": "npm:micromatch@2.3.8"
        }
      },
      "npm:are-we-there-yet@1.1.2": {
        "map": {
          "delegates": "npm:delegates@1.0.0",
          "readable-stream": "npm:readable-stream@1.1.14"
        }
      },
      "npm:argparse@1.0.7": {
        "map": {
          "sprintf-js": "npm:sprintf-js@1.0.3"
        }
      },
      "npm:arr-diff@2.0.0": {
        "map": {
          "arr-flatten": "npm:arr-flatten@1.0.1"
        }
      },
      "npm:asn1.js@4.6.2": {
        "map": {
          "bn.js": "npm:bn.js@4.11.4",
          "inherits": "npm:inherits@2.0.1",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:bl@1.1.2": {
        "map": {
          "readable-stream": "npm:readable-stream@2.0.6"
        }
      },
      "npm:block-stream@0.0.9": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:boom@2.10.1": {
        "map": {
          "hoek": "npm:hoek@2.16.3"
        }
      },
      "npm:brace-expansion@1.1.4": {
        "map": {
          "balanced-match": "npm:balanced-match@0.4.1",
          "concat-map": "npm:concat-map@0.0.1"
        }
      },
      "npm:braces@1.8.5": {
        "map": {
          "expand-range": "npm:expand-range@1.8.2",
          "preserve": "npm:preserve@0.2.0",
          "repeat-element": "npm:repeat-element@1.1.2"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "buffer-xor": "npm:buffer-xor@1.0.3",
          "cipher-base": "npm:cipher-base@1.0.2",
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "browserify-des": "npm:browserify-des@1.0.0",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.2",
          "des.js": "npm:des.js@1.0.0",
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.4",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:browserify-sign@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.4",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "elliptic": "npm:elliptic@6.2.8",
          "inherits": "npm:inherits@2.0.1",
          "parse-asn1": "npm:parse-asn1@5.0.0"
        }
      },
      "npm:browserify-zlib@0.1.4": {
        "map": {
          "pako": "npm:pako@0.2.8",
          "readable-stream": "npm:readable-stream@2.1.4"
        }
      },
      "npm:buffer@4.6.0": {
        "map": {
          "base64-js": "npm:base64-js@1.1.2",
          "ieee754": "npm:ieee754@1.1.6",
          "isarray": "npm:isarray@1.0.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "has-ansi": "npm:has-ansi@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "supports-color": "npm:supports-color@2.0.0"
        }
      },
      "npm:chokidar@1.5.1": {
        "map": {
          "anymatch": "npm:anymatch@1.3.0",
          "async-each": "npm:async-each@1.0.0",
          "glob-parent": "npm:glob-parent@2.0.0",
          "inherits": "npm:inherits@2.0.1",
          "is-binary-path": "npm:is-binary-path@1.0.1",
          "is-glob": "npm:is-glob@2.0.1",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "readdirp": "npm:readdirp@2.0.0"
        }
      },
      "npm:cipher-base@1.0.2": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:combined-stream@1.0.5": {
        "map": {
          "delayed-stream": "npm:delayed-stream@1.0.0"
        }
      },
      "npm:commander@2.9.0": {
        "map": {
          "graceful-readlink": "npm:graceful-readlink@1.0.1"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.4",
          "elliptic": "npm:elliptic@6.2.8"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.2",
          "inherits": "npm:inherits@2.0.1",
          "ripemd160": "npm:ripemd160@1.0.1",
          "sha.js": "npm:sha.js@2.4.5"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:cryptiles@2.0.5": {
        "map": {
          "boom": "npm:boom@2.10.1"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "browserify-sign": "npm:browserify-sign@4.0.0",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "inherits": "npm:inherits@2.0.1",
          "pbkdf2": "npm:pbkdf2@3.0.4",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:dashdash@1.14.0": {
        "map": {
          "assert-plus": "npm:assert-plus@1.0.0"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "bn.js": "npm:bn.js@4.11.4",
          "miller-rabin": "npm:miller-rabin@4.0.0",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:ecc-jsbn@0.1.1": {
        "map": {
          "jsbn": "npm:jsbn@0.1.0"
        }
      },
      "npm:elliptic@6.2.8": {
        "map": {
          "bn.js": "npm:bn.js@4.11.4",
          "brorand": "npm:brorand@1.0.5",
          "hash.js": "npm:hash.js@1.0.3",
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:expand-brackets@0.1.5": {
        "map": {
          "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
        }
      },
      "npm:expand-range@1.8.2": {
        "map": {
          "fill-range": "npm:fill-range@2.2.3"
        }
      },
      "npm:extglob@0.3.2": {
        "map": {
          "is-extglob": "npm:is-extglob@1.0.0"
        }
      },
      "npm:fill-range@2.2.3": {
        "map": {
          "is-number": "npm:is-number@2.1.0",
          "isobject": "npm:isobject@2.1.0",
          "randomatic": "npm:randomatic@1.1.5",
          "repeat-element": "npm:repeat-element@1.1.2",
          "repeat-string": "npm:repeat-string@1.5.4"
        }
      },
      "npm:for-own@0.1.4": {
        "map": {
          "for-in": "npm:for-in@0.1.5"
        }
      },
      "npm:form-data@1.0.0-rc4": {
        "map": {
          "async": "npm:async@1.5.2",
          "combined-stream": "npm:combined-stream@1.0.5",
          "mime-types": "npm:mime-types@2.1.11"
        }
      },
      "npm:fsevents@1.0.12": {
        "map": {
          "nan": "npm:nan@2.3.5",
          "node-pre-gyp": "npm:node-pre-gyp@0.6.28"
        }
      },
      "npm:fstream-ignore@1.0.5": {
        "map": {
          "fstream": "npm:fstream@1.0.9",
          "inherits": "npm:inherits@2.0.1",
          "minimatch": "npm:minimatch@3.0.0"
        }
      },
      "npm:fstream@1.0.9": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "inherits": "npm:inherits@2.0.1",
          "mkdirp": "npm:mkdirp@0.5.1",
          "rimraf": "npm:rimraf@2.5.2"
        }
      },
      "npm:gauge@1.2.7": {
        "map": {
          "ansi": "npm:ansi@0.3.1",
          "has-unicode": "npm:has-unicode@2.0.0",
          "lodash.pad": "npm:lodash.pad@4.4.0",
          "lodash.padend": "npm:lodash.padend@4.5.0",
          "lodash.padstart": "npm:lodash.padstart@4.5.0"
        }
      },
      "npm:generate-object-property@1.2.0": {
        "map": {
          "is-property": "npm:is-property@1.0.2"
        }
      },
      "npm:getpass@0.1.6": {
        "map": {
          "assert-plus": "npm:assert-plus@1.0.0"
        }
      },
      "npm:glob-base@0.3.0": {
        "map": {
          "glob-parent": "npm:glob-parent@2.0.0",
          "is-glob": "npm:is-glob@2.0.1"
        }
      },
      "npm:glob-parent@2.0.0": {
        "map": {
          "is-glob": "npm:is-glob@2.0.1"
        }
      },
      "npm:glob@7.0.3": {
        "map": {
          "inflight": "npm:inflight@1.0.5",
          "inherits": "npm:inherits@2.0.1",
          "minimatch": "npm:minimatch@3.0.0",
          "once": "npm:once@1.3.3",
          "path-is-absolute": "npm:path-is-absolute@1.0.0"
        }
      },
      "npm:har-validator@2.0.6": {
        "map": {
          "chalk": "npm:chalk@1.1.3",
          "commander": "npm:commander@2.9.0",
          "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
          "pinkie-promise": "npm:pinkie-promise@2.0.1"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:hawk@3.1.3": {
        "map": {
          "boom": "npm:boom@2.10.1",
          "cryptiles": "npm:cryptiles@2.0.5",
          "hoek": "npm:hoek@2.16.3",
          "sntp": "npm:sntp@1.0.9"
        }
      },
      "npm:http-signature@1.1.1": {
        "map": {
          "assert-plus": "npm:assert-plus@0.2.0",
          "jsprim": "npm:jsprim@1.2.2",
          "sshpk": "npm:sshpk@1.8.3"
        }
      },
      "npm:inflight@1.0.5": {
        "map": {
          "once": "npm:once@1.3.3",
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:is-binary-path@1.0.1": {
        "map": {
          "binary-extensions": "npm:binary-extensions@1.4.1"
        }
      },
      "npm:is-equal-shallow@0.1.3": {
        "map": {
          "is-primitive": "npm:is-primitive@2.0.0"
        }
      },
      "npm:is-glob@2.0.1": {
        "map": {
          "is-extglob": "npm:is-extglob@1.0.0"
        }
      },
      "npm:is-my-json-valid@2.13.1": {
        "map": {
          "generate-function": "npm:generate-function@2.0.0",
          "generate-object-property": "npm:generate-object-property@1.2.0",
          "jsonpointer": "npm:jsonpointer@2.0.0",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "npm:is-number@2.1.0": {
        "map": {
          "kind-of": "npm:kind-of@3.0.3"
        }
      },
      "npm:isobject@2.1.0": {
        "map": {
          "isarray": "npm:isarray@1.0.0"
        }
      },
      "npm:jodid25519@1.0.2": {
        "map": {
          "jsbn": "npm:jsbn@0.1.0"
        }
      },
      "npm:js-yaml@3.6.1": {
        "map": {
          "argparse": "npm:argparse@1.0.7",
          "esprima": "npm:esprima@2.7.2"
        }
      },
      "npm:jsprim@1.2.2": {
        "map": {
          "extsprintf": "npm:extsprintf@1.0.2",
          "json-schema": "npm:json-schema@0.2.2",
          "verror": "npm:verror@1.3.6"
        }
      },
      "npm:kind-of@3.0.3": {
        "map": {
          "is-buffer": "npm:is-buffer@1.1.3"
        }
      },
      "npm:lodash.pad@4.4.0": {
        "map": {
          "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
          "lodash._basetostring": "npm:lodash._basetostring@4.12.0",
          "lodash.tostring": "npm:lodash.tostring@4.1.3"
        }
      },
      "npm:lodash.padend@4.5.0": {
        "map": {
          "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
          "lodash._basetostring": "npm:lodash._basetostring@4.12.0",
          "lodash.tostring": "npm:lodash.tostring@4.1.3"
        }
      },
      "npm:lodash.padstart@4.5.0": {
        "map": {
          "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
          "lodash._basetostring": "npm:lodash._basetostring@4.12.0",
          "lodash.tostring": "npm:lodash.tostring@4.1.3"
        }
      },
      "npm:micromatch@2.3.8": {
        "map": {
          "arr-diff": "npm:arr-diff@2.0.0",
          "array-unique": "npm:array-unique@0.2.1",
          "braces": "npm:braces@1.8.5",
          "expand-brackets": "npm:expand-brackets@0.1.5",
          "extglob": "npm:extglob@0.3.2",
          "filename-regex": "npm:filename-regex@2.0.0",
          "is-extglob": "npm:is-extglob@1.0.0",
          "is-glob": "npm:is-glob@2.0.1",
          "kind-of": "npm:kind-of@3.0.3",
          "normalize-path": "npm:normalize-path@2.0.1",
          "object.omit": "npm:object.omit@2.0.0",
          "parse-glob": "npm:parse-glob@3.0.4",
          "regex-cache": "npm:regex-cache@0.4.3"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.4",
          "brorand": "npm:brorand@1.0.5"
        }
      },
      "npm:mime-types@2.1.11": {
        "map": {
          "mime-db": "npm:mime-db@1.23.0"
        }
      },
      "npm:minimatch@2.0.10": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.4"
        }
      },
      "npm:minimatch@3.0.0": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.4"
        }
      },
      "npm:mkdirp@0.5.1": {
        "map": {
          "minimist": "npm:minimist@0.0.8"
        }
      },
      "npm:node-pre-gyp@0.6.28": {
        "map": {
          "mkdirp": "npm:mkdirp@0.5.1",
          "nopt": "npm:nopt@3.0.6",
          "npmlog": "npm:npmlog@2.0.4",
          "rc": "npm:rc@1.1.6",
          "request": "npm:request@2.72.0",
          "rimraf": "npm:rimraf@2.5.2",
          "semver": "npm:semver@5.1.0",
          "tar": "npm:tar@2.2.1",
          "tar-pack": "npm:tar-pack@3.1.3"
        }
      },
      "npm:nopt@3.0.6": {
        "map": {
          "abbrev": "npm:abbrev@1.0.7"
        }
      },
      "npm:npmlog@2.0.4": {
        "map": {
          "ansi": "npm:ansi@0.3.1",
          "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
          "gauge": "npm:gauge@1.2.7"
        }
      },
      "npm:object.omit@2.0.0": {
        "map": {
          "for-own": "npm:for-own@0.1.4",
          "is-extendable": "npm:is-extendable@0.1.1"
        }
      },
      "npm:once@1.3.3": {
        "map": {
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:parse-asn1@5.0.0": {
        "map": {
          "asn1.js": "npm:asn1.js@4.6.2",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.4"
        }
      },
      "npm:parse-glob@3.0.4": {
        "map": {
          "glob-base": "npm:glob-base@0.3.0",
          "is-dotfile": "npm:is-dotfile@1.0.2",
          "is-extglob": "npm:is-extglob@1.0.0",
          "is-glob": "npm:is-glob@2.0.1"
        }
      },
      "npm:pbkdf2@3.0.4": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:pinkie-promise@2.0.1": {
        "map": {
          "pinkie": "npm:pinkie@2.0.4"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.4",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "create-hash": "npm:create-hash@1.1.2",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:randomatic@1.1.5": {
        "map": {
          "is-number": "npm:is-number@2.1.0",
          "kind-of": "npm:kind-of@3.0.3"
        }
      },
      "npm:rc@1.1.6": {
        "map": {
          "deep-extend": "npm:deep-extend@0.4.1",
          "ini": "npm:ini@1.3.4",
          "minimist": "npm:minimist@1.2.0",
          "strip-json-comments": "npm:strip-json-comments@1.0.4"
        }
      },
      "npm:readable-stream@1.1.14": {
        "map": {
          "core-util-is": "npm:core-util-is@1.0.2",
          "inherits": "npm:inherits@2.0.1",
          "isarray": "npm:isarray@0.0.1",
          "stream-browserify": "npm:stream-browserify@1.0.0",
          "string_decoder": "npm:string_decoder@0.10.31"
        }
      },
      "npm:readable-stream@2.0.6": {
        "map": {
          "core-util-is": "npm:core-util-is@1.0.2",
          "inherits": "npm:inherits@2.0.1",
          "isarray": "npm:isarray@1.0.0",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "string_decoder": "npm:string_decoder@0.10.31",
          "util-deprecate": "npm:util-deprecate@1.0.2"
        }
      },
      "npm:readable-stream@2.1.4": {
        "map": {
          "buffer-shims": "npm:buffer-shims@1.0.0",
          "core-util-is": "npm:core-util-is@1.0.2",
          "inherits": "npm:inherits@2.0.1",
          "isarray": "npm:isarray@1.0.0",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "string_decoder": "npm:string_decoder@0.10.31",
          "util-deprecate": "npm:util-deprecate@1.0.2"
        }
      },
      "npm:readdirp@2.0.0": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "minimatch": "npm:minimatch@2.0.10",
          "readable-stream": "npm:readable-stream@2.1.4"
        }
      },
      "npm:regex-cache@0.4.3": {
        "map": {
          "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
          "is-primitive": "npm:is-primitive@2.0.0"
        }
      },
      "npm:request@2.72.0": {
        "map": {
          "aws-sign2": "npm:aws-sign2@0.6.0",
          "aws4": "npm:aws4@1.4.1",
          "bl": "npm:bl@1.1.2",
          "caseless": "npm:caseless@0.11.0",
          "combined-stream": "npm:combined-stream@1.0.5",
          "extend": "npm:extend@3.0.0",
          "forever-agent": "npm:forever-agent@0.6.1",
          "form-data": "npm:form-data@1.0.0-rc4",
          "har-validator": "npm:har-validator@2.0.6",
          "hawk": "npm:hawk@3.1.3",
          "http-signature": "npm:http-signature@1.1.1",
          "is-typedarray": "npm:is-typedarray@1.0.0",
          "isstream": "npm:isstream@0.1.2",
          "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
          "mime-types": "npm:mime-types@2.1.11",
          "node-uuid": "npm:node-uuid@1.4.7",
          "oauth-sign": "npm:oauth-sign@0.8.2",
          "qs": "npm:qs@6.1.0",
          "stringstream": "npm:stringstream@0.0.5",
          "tough-cookie": "npm:tough-cookie@2.2.2",
          "tunnel-agent": "npm:tunnel-agent@0.4.3"
        }
      },
      "npm:rimraf@2.5.2": {
        "map": {
          "glob": "npm:glob@7.0.3"
        }
      },
      "npm:sha.js@2.4.5": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:sntp@1.0.9": {
        "map": {
          "hoek": "npm:hoek@2.16.3"
        }
      },
      "npm:sort-keys@1.1.2": {
        "map": {
          "is-plain-obj": "npm:is-plain-obj@1.1.0"
        }
      },
      "npm:sshpk@1.8.3": {
        "map": {
          "asn1": "npm:asn1@0.2.3",
          "assert-plus": "npm:assert-plus@1.0.0",
          "dashdash": "npm:dashdash@1.14.0",
          "getpass": "npm:getpass@0.1.6"
        }
      },
      "npm:stream-browserify@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@1.1.14"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@2.0.6"
        }
      },
      "npm:stream-http@2.3.0": {
        "map": {
          "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@2.1.4",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:tar-pack@3.1.3": {
        "map": {
          "debug": "npm:debug@2.2.0",
          "fstream": "npm:fstream@1.0.9",
          "fstream-ignore": "npm:fstream-ignore@1.0.5",
          "once": "npm:once@1.3.3",
          "readable-stream": "npm:readable-stream@2.0.6",
          "rimraf": "npm:rimraf@2.5.2",
          "tar": "npm:tar@2.2.1",
          "uid-number": "npm:uid-number@0.0.6"
        }
      },
      "npm:tar@2.2.1": {
        "map": {
          "block-stream": "npm:block-stream@0.0.9",
          "fstream": "npm:fstream@1.0.9",
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "punycode": "npm:punycode@1.3.2",
          "querystring": "npm:querystring@0.2.0"
        }
      },
      "npm:verror@1.3.6": {
        "map": {
          "extsprintf": "npm:extsprintf@1.0.2"
        }
      },
      "npm:jspm@0.17.0-beta.17": {
        "map": {
          "bluebird": "npm:bluebird@3.4.0",
          "chalk": "npm:chalk@1.1.3",
          "core-js": "npm:core-js@1.2.6",
          "glob": "npm:glob@6.0.4",
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "minimatch": "npm:minimatch@3.0.0",
          "mkdirp": "npm:mkdirp@0.5.1",
          "request": "npm:request@2.72.0",
          "rimraf": "npm:rimraf@2.5.2",
          "semver": "npm:semver@5.1.0",
          "sane": "npm:sane@1.3.4",
          "resolve": "npm:resolve@1.1.7",
          "ncp": "npm:ncp@2.0.0",
          "liftoff": "npm:liftoff@2.2.1",
          "jspm-registry": "npm:jspm-registry@0.4.1",
          "systemjs": "npm:systemjs@0.19.29",
          "systemjs-builder": "npm:systemjs-builder@0.15.19",
          "proper-lockfile": "npm:proper-lockfile@1.1.2",
          "uglify-js": "npm:uglify-js@2.6.2",
          "jspm-npm": "npm:jspm-npm@0.28.14",
          "traceur": "npm:traceur@0.0.105",
          "jspm-github": "npm:jspm-github@0.14.7"
        }
      },
      "npm:sane@1.3.4": {
        "map": {
          "minimist": "npm:minimist@1.2.0",
          "walker": "npm:walker@1.0.7",
          "fb-watchman": "npm:fb-watchman@1.9.0",
          "exec-sh": "npm:exec-sh@0.2.0",
          "watch": "npm:watch@0.10.0",
          "minimatch": "npm:minimatch@0.2.14"
        }
      },
      "npm:liftoff@2.2.1": {
        "map": {
          "resolve": "npm:resolve@1.1.7",
          "extend": "npm:extend@2.0.1",
          "findup-sync": "npm:findup-sync@0.3.0",
          "flagged-respawn": "npm:flagged-respawn@0.3.2",
          "rechoir": "npm:rechoir@0.6.2"
        }
      },
      "npm:jspm-registry@0.4.1": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "rimraf": "npm:rimraf@2.5.2",
          "semver": "npm:semver@4.3.6",
          "rsvp": "npm:rsvp@3.2.1"
        }
      },
      "npm:systemjs-builder@0.15.19": {
        "map": {
          "babel-core": "npm:babel-core@6.9.1",
          "bluebird": "npm:bluebird@3.4.0",
          "glob": "npm:glob@7.0.3",
          "mkdirp": "npm:mkdirp@0.5.1",
          "source-map": "npm:source-map@0.5.6",
          "systemjs": "npm:systemjs@0.19.29",
          "uglify-js": "npm:uglify-js@2.6.2",
          "traceur": "npm:traceur@0.0.105",
          "es6-template-strings": "npm:es6-template-strings@2.0.0",
          "data-uri-to-buffer": "npm:data-uri-to-buffer@0.0.4",
          "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.9.0",
          "rollup": "npm:rollup@0.25.8"
        }
      },
      "npm:proper-lockfile@1.1.2": {
        "map": {
          "extend": "npm:extend@3.0.0",
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "err-code": "npm:err-code@1.1.1",
          "retry": "npm:retry@0.9.0"
        }
      },
      "npm:uglify-js@2.6.2": {
        "map": {
          "source-map": "npm:source-map@0.5.6",
          "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
          "async": "npm:async@0.2.10",
          "yargs": "npm:yargs@3.10.0"
        }
      },
      "npm:jspm-npm@0.28.14": {
        "map": {
          "bluebird": "npm:bluebird@3.4.0",
          "mkdirp": "npm:mkdirp@0.5.1",
          "semver": "npm:semver@5.1.0",
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "readdirp": "npm:readdirp@2.0.0",
          "systemjs-builder": "npm:systemjs-builder@0.15.19",
          "traceur": "npm:traceur@0.0.105",
          "rmdir": "npm:rmdir@1.1.0",
          "which": "npm:which@1.2.10",
          "request": "npm:request@2.58.0",
          "tar": "npm:tar@1.0.3"
        }
      },
      "npm:traceur@0.0.105": {
        "map": {
          "semver": "npm:semver@4.3.6",
          "commander": "npm:commander@2.9.0",
          "glob": "npm:glob@5.0.15",
          "source-map-support": "npm:source-map-support@0.2.10",
          "rsvp": "npm:rsvp@3.2.1"
        }
      },
      "npm:jspm-github@0.14.7": {
        "map": {
          "bluebird": "npm:bluebird@3.4.0",
          "graceful-fs": "npm:graceful-fs@4.1.4",
          "mkdirp": "npm:mkdirp@0.5.1",
          "semver": "npm:semver@5.1.0",
          "tar": "npm:tar@2.2.1",
          "which": "npm:which@1.2.10",
          "netrc": "npm:netrc@0.1.4",
          "expand-tilde": "npm:expand-tilde@1.2.2",
          "request": "npm:request@2.53.0",
          "rimraf": "npm:rimraf@2.3.4"
        }
      },
      "npm:findup-sync@0.3.0": {
        "map": {
          "glob": "npm:glob@5.0.15"
        }
      },
      "npm:es6-template-strings@2.0.0": {
        "map": {
          "es5-ext": "npm:es5-ext@0.10.11",
          "esniff": "npm:esniff@1.0.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-systemjs@6.9.0": {
        "map": {
          "babel-template": "npm:babel-template@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0"
        }
      },
      "npm:exec-sh@0.2.0": {
        "map": {
          "merge": "npm:merge@1.2.0"
        }
      },
      "npm:fb-watchman@1.9.0": {
        "map": {
          "bser": "npm:bser@1.0.2"
        }
      },
      "npm:rechoir@0.6.2": {
        "map": {
          "resolve": "npm:resolve@1.1.7"
        }
      },
      "npm:walker@1.0.7": {
        "map": {
          "makeerror": "npm:makeerror@1.0.11"
        }
      },
      "npm:systemjs@0.19.29": {
        "map": {
          "when": "npm:when@3.7.7"
        }
      },
      "npm:expand-tilde@1.2.2": {
        "map": {
          "os-homedir": "npm:os-homedir@1.0.1"
        }
      },
      "npm:request@2.58.0": {
        "map": {
          "bl": "npm:bl@0.9.5",
          "caseless": "npm:caseless@0.10.0",
          "mime-types": "npm:mime-types@2.0.14",
          "qs": "npm:qs@3.1.0",
          "http-signature": "npm:http-signature@0.11.0",
          "hawk": "npm:hawk@2.3.1",
          "aws-sign2": "npm:aws-sign2@0.5.0",
          "har-validator": "npm:har-validator@1.8.0",
          "forever-agent": "npm:forever-agent@0.6.1",
          "form-data": "npm:form-data@1.0.0-rc4",
          "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
          "tunnel-agent": "npm:tunnel-agent@0.4.3",
          "tough-cookie": "npm:tough-cookie@2.2.2",
          "oauth-sign": "npm:oauth-sign@0.8.2",
          "stringstream": "npm:stringstream@0.0.5",
          "combined-stream": "npm:combined-stream@1.0.5",
          "isstream": "npm:isstream@0.1.2",
          "extend": "npm:extend@2.0.1",
          "node-uuid": "npm:node-uuid@1.4.7"
        }
      },
      "npm:request@2.53.0": {
        "map": {
          "caseless": "npm:caseless@0.9.0",
          "forever-agent": "npm:forever-agent@0.5.2",
          "form-data": "npm:form-data@0.2.0",
          "qs": "npm:qs@2.3.3",
          "http-signature": "npm:http-signature@0.10.1",
          "oauth-sign": "npm:oauth-sign@0.6.0",
          "combined-stream": "npm:combined-stream@0.0.7",
          "node-uuid": "npm:node-uuid@1.4.7",
          "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
          "tunnel-agent": "npm:tunnel-agent@0.4.3",
          "tough-cookie": "npm:tough-cookie@2.2.2",
          "isstream": "npm:isstream@0.1.2",
          "bl": "npm:bl@0.9.5",
          "mime-types": "npm:mime-types@2.0.14",
          "hawk": "npm:hawk@2.3.1",
          "stringstream": "npm:stringstream@0.0.5",
          "aws-sign2": "npm:aws-sign2@0.5.0"
        }
      },
      "npm:minimatch@0.2.14": {
        "map": {
          "sigmund": "npm:sigmund@1.0.1",
          "lru-cache": "npm:lru-cache@2.7.3"
        }
      },
      "npm:har-validator@1.8.0": {
        "map": {
          "bluebird": "npm:bluebird@2.10.2",
          "chalk": "npm:chalk@1.1.3",
          "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
          "commander": "npm:commander@2.9.0"
        }
      },
      "npm:hawk@2.3.1": {
        "map": {
          "hoek": "npm:hoek@2.16.3",
          "boom": "npm:boom@2.10.1",
          "cryptiles": "npm:cryptiles@2.0.5",
          "sntp": "npm:sntp@1.0.9"
        }
      },
      "npm:combined-stream@0.0.7": {
        "map": {
          "delayed-stream": "npm:delayed-stream@0.0.5"
        }
      },
      "npm:form-data@0.2.0": {
        "map": {
          "combined-stream": "npm:combined-stream@0.0.7",
          "mime-types": "npm:mime-types@2.0.14",
          "async": "npm:async@0.9.2"
        }
      },
      "npm:tar@1.0.3": {
        "map": {
          "block-stream": "npm:block-stream@0.0.9",
          "fstream": "npm:fstream@1.0.9",
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:which@1.2.10": {
        "map": {
          "isexe": "npm:isexe@1.1.2"
        }
      },
      "npm:rollup@0.25.8": {
        "map": {
          "source-map-support": "npm:source-map-support@0.3.3",
          "chalk": "npm:chalk@1.1.3",
          "minimist": "npm:minimist@1.2.0"
        }
      },
      "npm:esniff@1.0.0": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11"
        }
      },
      "npm:bser@1.0.2": {
        "map": {
          "node-int64": "npm:node-int64@0.4.0"
        }
      },
      "npm:makeerror@1.0.11": {
        "map": {
          "tmpl": "npm:tmpl@1.0.4"
        }
      },
      "npm:yargs@3.10.0": {
        "map": {
          "decamelize": "npm:decamelize@1.2.0",
          "camelcase": "npm:camelcase@1.2.1",
          "window-size": "npm:window-size@0.1.0",
          "cliui": "npm:cliui@2.1.0"
        }
      },
      "npm:rmdir@1.1.0": {
        "map": {
          "node.flow": "npm:node.flow@1.2.3"
        }
      },
      "npm:source-map-support@0.3.3": {
        "map": {
          "source-map": "npm:source-map@0.1.32"
        }
      },
      "npm:rimraf@2.3.4": {
        "map": {
          "glob": "npm:glob@4.5.3"
        }
      },
      "npm:http-signature@0.11.0": {
        "map": {
          "ctype": "npm:ctype@0.5.3",
          "asn1": "npm:asn1@0.1.11",
          "assert-plus": "npm:assert-plus@0.1.5"
        }
      },
      "npm:http-signature@0.10.1": {
        "map": {
          "ctype": "npm:ctype@0.5.3",
          "asn1": "npm:asn1@0.1.11",
          "assert-plus": "npm:assert-plus@0.1.5"
        }
      },
      "npm:glob@4.5.3": {
        "map": {
          "inflight": "npm:inflight@1.0.5",
          "inherits": "npm:inherits@2.0.1",
          "minimatch": "npm:minimatch@2.0.10",
          "once": "npm:once@1.3.3"
        }
      },
      "npm:mime-types@2.0.14": {
        "map": {
          "mime-db": "npm:mime-db@1.12.0"
        }
      },
      "npm:node.flow@1.2.3": {
        "map": {
          "node.extend": "npm:node.extend@1.0.8"
        }
      },
      "npm:cliui@2.1.0": {
        "map": {
          "wordwrap": "npm:wordwrap@0.0.2",
          "center-align": "npm:center-align@0.1.3",
          "right-align": "npm:right-align@0.1.3"
        }
      },
      "npm:bl@0.9.5": {
        "map": {
          "readable-stream": "npm:readable-stream@1.0.34"
        }
      },
      "npm:readable-stream@1.0.34": {
        "map": {
          "core-util-is": "npm:core-util-is@1.0.2",
          "string_decoder": "npm:string_decoder@0.10.31",
          "inherits": "npm:inherits@2.0.1",
          "stream-browserify": "npm:stream-browserify@1.0.0",
          "isarray": "npm:isarray@0.0.1"
        }
      },
      "npm:node.extend@1.0.8": {
        "map": {
          "object-keys": "npm:object-keys@0.4.0",
          "is": "npm:is@0.2.7"
        }
      },
      "npm:center-align@0.1.3": {
        "map": {
          "align-text": "npm:align-text@0.1.4",
          "lazy-cache": "npm:lazy-cache@1.0.4"
        }
      },
      "npm:right-align@0.1.3": {
        "map": {
          "align-text": "npm:align-text@0.1.4"
        }
      },
      "npm:align-text@0.1.4": {
        "map": {
          "kind-of": "npm:kind-of@3.0.3",
          "repeat-string": "npm:repeat-string@1.5.4",
          "longest": "npm:longest@1.0.1"
        }
      },
      "github:jspm/nodelibs-domain@0.2.0-alpha": {
        "map": {
          "domain-browserify": "npm:domain-browser@1.1.7"
        }
      },
      "github:jspm/nodelibs-timers@0.2.0-alpha": {
        "map": {
          "timers-browserify": "npm:timers-browserify@1.4.2"
        }
      },
      "npm:timers-browserify@1.4.2": {
        "map": {
          "process": "npm:process@0.11.3"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "jspm-loader-css": {
      "main": "jspm-loader-css.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      },
      "map": {
        "cssnano": {
          "browser": "@empty"
        }
      }
    },
    "npm:autoprefixer@6.3.6": {
      "map": {
        "browserslist": "npm:browserslist@1.3.2",
        "caniuse-db": "npm:caniuse-db@1.0.30000475",
        "normalize-range": "npm:normalize-range@0.1.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:browserslist@1.3.2": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000475"
      }
    },
    "npm:clap@1.1.1": {
      "map": {
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:coa@1.0.1": {
      "map": {
        "q": "npm:q@1.4.1"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:color@0.11.1": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "color-string": "npm:color-string@0.3.0"
      }
    },
    "npm:colormin@1.1.0": {
      "map": {
        "color": "npm:color@0.11.1",
        "css-color-names": "npm:css-color-names@0.0.3"
      }
    },
    "npm:css-modules-loader-core@1.0.0": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.10",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0",
        "postcss-modules-values": "npm:postcss-modules-values@1.1.0"
      }
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "map": {
        "cssesc": "npm:cssesc@0.1.0",
        "fastparse": "npm:fastparse@1.1.1"
      }
    },
    "npm:cssnano@3.7.0": {
      "map": {
        "autoprefixer": "npm:autoprefixer@6.3.6",
        "decamelize": "npm:decamelize@1.2.0",
        "defined": "npm:defined@1.0.0",
        "indexes-of": "npm:indexes-of@1.0.1",
        "object-assign": "npm:object-assign@4.1.0",
        "postcss": "npm:postcss@5.0.21",
        "postcss-calc": "npm:postcss-calc@5.2.1",
        "postcss-colormin": "npm:postcss-colormin@2.2.0",
        "postcss-convert-values": "npm:postcss-convert-values@2.3.6",
        "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
        "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.0.1",
        "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
        "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
        "postcss-discard-unused": "npm:postcss-discard-unused@2.2.1",
        "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.0",
        "postcss-merge-idents": "npm:postcss-merge-idents@2.1.6",
        "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.1",
        "postcss-merge-rules": "npm:postcss-merge-rules@2.0.9",
        "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
        "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.2",
        "postcss-minify-params": "npm:postcss-minify-params@1.0.4",
        "postcss-minify-selectors": "npm:postcss-minify-selectors@2.0.5",
        "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.0",
        "postcss-normalize-url": "npm:postcss-normalize-url@3.0.7",
        "postcss-ordered-values": "npm:postcss-ordered-values@2.2.1",
        "postcss-reduce-idents": "npm:postcss-reduce-idents@2.3.0",
        "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.0",
        "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.3",
        "postcss-svgo": "npm:postcss-svgo@2.1.3",
        "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss-zindex": "npm:postcss-zindex@2.1.1"
      }
    },
    "npm:csso@2.0.0": {
      "map": {
        "clap": "npm:clap@1.1.1",
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:is-svg@2.0.1": {
      "map": {
        "html-comment-regex": "npm:html-comment-regex@1.1.0"
      }
    },
    "npm:normalize-url@1.5.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "prepend-http": "npm:prepend-http@1.0.4",
        "query-string": "npm:query-string@4.2.1",
        "sort-keys": "npm:sort-keys@1.1.2"
      }
    },
    "npm:postcss-calc@5.2.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "reduce-css-calc": "npm:reduce-css-calc@1.2.3"
      }
    },
    "npm:postcss-colormin@2.2.0": {
      "map": {
        "colormin": "npm:colormin@1.1.0",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-convert-values@2.3.6": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-comments@2.0.4": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-discard-duplicates@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-discard-empty@2.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-discard-overridden@0.1.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-discard-unused@2.2.1": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "postcss": "npm:postcss@5.0.21",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-filter-plugins@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "uniqid": "npm:uniqid@1.0.0"
      }
    },
    "npm:postcss-merge-idents@2.1.6": {
      "map": {
        "has-own": "npm:has-own@1.0.0",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-merge-longhand@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-merge-rules@2.0.9": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-minify-font-values@1.0.5": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-minify-gradients@1.0.2": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-minify-params@1.0.4": {
      "map": {
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-minify-selectors@2.0.5": {
      "map": {
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss": "npm:postcss@5.0.21",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.0.0"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-modules-local-by-default@1.0.0": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-modules-scope@1.0.0": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-modules-values@1.1.0": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-normalize-charset@1.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-normalize-url@3.0.7": {
      "map": {
        "is-absolute-url": "npm:is-absolute-url@2.0.0",
        "normalize-url": "npm:normalize-url@1.5.2",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-ordered-values@2.2.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-reduce-idents@2.3.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-reduce-initial@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-reduce-transforms@1.0.3": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-selector-parser@2.0.0": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "indexes-of": "npm:indexes-of@1.0.1",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:postcss-svgo@2.1.3": {
      "map": {
        "is-svg": "npm:is-svg@2.0.1",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "svgo": "npm:svgo@0.6.6"
      }
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "map": {
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss": "npm:postcss@5.0.21",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-zindex@2.1.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss@5.0.10": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:postcss@5.0.21": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:query-string@4.2.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:reduce-css-calc@1.2.3": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0",
        "reduce-function-call": "npm:reduce-function-call@1.0.1"
      }
    },
    "npm:reduce-function-call@1.0.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:svgo@0.6.6": {
      "map": {
        "coa": "npm:coa@1.0.1",
        "colors": "npm:colors@1.1.2",
        "csso": "npm:csso@2.0.0",
        "js-yaml": "npm:js-yaml@3.6.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "sax": "npm:sax@1.2.1",
        "whet.extend": "npm:whet.extend@0.9.9"
      }
    }
  },
  map: {
    "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
    "cssnano": {
      "default": "@empty",
      "node": "npm:cssnano@3.7.0"
    },
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {},
  packages: {}
});
