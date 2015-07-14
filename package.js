Package.describe({
  name: 'poetic:material-design-lite',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'material-design-lite': '1.0.0-3',
  'material-design-icons': '2.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var mdlDir = '.npm/package/node_modules/material-design-lite/';
  api.addFiles(mdlDir + 'material.min.css', 'client');
  api.addFiles(mdlDir + 'material.min.js', 'client');

  var mdiDir = '.npm/package/node_modules/material-design-icons/iconfont/';
  api.addFiles([
    mdiDir + 'MaterialIcons-Regular.eot',
    mdiDir + 'MaterialIcons-Regular.ttf',
    mdiDir + 'MaterialIcons-Regular.woff',
    mdiDir + 'MaterialIcons-Regular.woff2'
  ], 'client');

  api.addFiles('material-design-icons.css', 'client');
});
