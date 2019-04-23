Package.describe({
  name: 'wanglian:lodash',
  version: '0.0.1',
  summary: 'Meteor wrapper for lodash',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/wanglian/meteor-lodash.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.1');
  api.use('ecmascript');
  api.mainModule('lodash.js');
  api.export('_');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('wanglian:lodash');
  api.mainModule('lodash-tests.js');
});

Npm.depends({
  "lodash": "4.17.11",
});