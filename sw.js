importScripts('js/sw-toolbox.js');

toolbox.precache([
  'css/normalize.css',
  'css/styles.css',
  'css/material.min.css',
  'js/BluetoothConnection.js',
  'js/companion.js',
  'js/main.js',
  'js/material.min.js',
  'index.html',
]);

toolbox.router.default = toolbox.networkFirst;
toolbox.options.networkTimeoutSeconds = 5;

toolbox.router.get('icons/*', toolbox.fastest);
