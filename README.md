# karma-injector-preprocessor
Karma preprocessor for injecting any content before any file served by Karma.

## Sample usage (in karma.conf.js):
```js
preprocessors: {
  'App/**/*.js': ['commonjs', 'injector']
},
plugins: ['karma-*', {
  'config.injectorPreprocessor': ['value', {
    injection: 'window.global = window;'
  }],
}]
```
This code will add ```window.global = window;``` text to each js file in App directory.
