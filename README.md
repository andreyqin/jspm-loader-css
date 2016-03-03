# JSPM Loader: CSS

[![Join the chat at https://gitter.im/geelen/jspm-loader-css](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/geelen/jspm-loader-css?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is a CSS loader for jspm. It uses PostCSS plugins to parse your CSS files. By default, it only applies the CSS Modules plugin suite to your CSS, but it can be extended to suit your needs.
This loader has been built for jspm >0.17. You may experience difficulties, or it may not work at all, if you are using jspm v0.16.

To installl, run the following command:

```
jspm install github:MeoMix/jspm-loader-css@master -o "{ registry: 'npm' }"
```

and in `jspm.config.js` you'll need to add the following:

```
SystemJS.config({
  ...
  meta: {
    "*.css": {
      "loader": "jspm-loader-css"
    }
  },
  ...
});
```

Load the styles by referencing them in your JS:

```js
import styles from './foo.css'
elem.innerHTML = `<div class="${styles.fooComponent}"></div>`
```


## Loading additional PostCSS plugins

It's likely that you will want to load additional, non-default PostCSS plugins for additional processing of your CSS. That is a supported scenario with this plugin, but requires minor adjustments to `jspm.config.js`

You should re-write your meta configuration such that it looks similar to:

```
SystemJS.config({
  ...
  meta: {
    "*.css": {
      "loader": "css.js"
    }
  },
  ...
});
```

where `css.js` is a file you create yourself. You can place `css.js` in a directory if you'd like, but you'll need to provide the full path to it inside `jspm.config.js`.

You'll need to import `jspm-loader-css` from within `css.js` like so:

```
import Plugins from 'jspm-loader-css/lib/plugins.js'
import CSSLoader from 'jspm-loader-css/lib/CSSLoader.js'

const plugins = [
  Plugins.values,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope
];

const { fetch, bundle } = new CSSLoader(plugins);
export { fetch, bundle };
```

The above code will perform identically to the default behavior of `jspm-loader-css`. You are then free to add additional plugins to the mixture, such as:

```
import Plugins from 'jspm-loader-css/lib/plugins.js'
import CSSLoader from 'jspm-loader-css/lib/CSSLoader.js'
import autoprefixer from 'autoprefixer';

const plugins = [
  Plugins.values,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  autoprefixer()
];

const { fetch, bundle } = new CSSLoader(plugins);
export { fetch, bundle };
```

Keep in mind that `jspm-loader-css` runs both in the browser (during development) and in node (during production builds). Many PostCSS plugins are written with only node in mind. Your mileage may vary on being able to successfully use PostCSS plugins without modification.

For a working example of `jspm-loader-css` in `css.js`, see here: https://github.com/MeoMix/StreamusWebsite/blob/development/jspm/css.js
	
