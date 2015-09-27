Package.describe({
  summary: '4E custom package for Telescope',
  version: '1.0.0',
  name: '4e-custom'
});

Package.onUse(function (api) {
  api.use('stylus');
  api.use('pagebakers:ionicons');

  api.addFiles('custom.styl', 'client');
  api.addFiles('custom.js', 'client');
});
