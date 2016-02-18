Package.describe({
  name: 'yourcontainer:meteor-avatar',
  version: '0.0.1',
  summary: 'Simple helpers will be useful provide the avatar system to your awesome users',
  git: 'https://github.com/yourcontainer/meteor-avatar',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use(['ecmascript', 'templating']);
  api.addFiles(['meteor-avatar.html', 'meteor-avatar.js'], ['client']);
  api.addFiles('meteor-avatar-server.js', ['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('yourcontainer:meteor-avatar');
  api.addFiles('meteor-avatar-tests.js');
});
