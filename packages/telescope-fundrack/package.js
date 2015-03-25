Package.describe({
    summary: "Fund Rack modifications over Telescope",
    version: "0.0.1",
    name: "telescope-fundrack"
});

Package.onUse(function (api) {
    api.use(["telescope-base"], ['client', 'server']);


// --------------------------- 1. Meteor packages dependencies ---------------------------

    // automatic (let the package specify where it's needed)

    api.use([
        'tap:i18n',                   // internationalization package
        'iron:router',                // routing package
        'telescope-base',             // basic Telescope hooks and objects
        'telescope-lib',              // useful functions
        'telescope-i18n',             // internationalization wrapper
        'fourseven:scss'              // SCSS compilation package
    ]);

    // client

    api.use([
        'jquery',
        'underscore',
        'templating'
    ], ['client']);

    // server

    api.use([
        //
    ], ['server']);

    // ---------------------------------- 2. Files to include ----------------------------------

    // i18n config (must come first)

    api.addFiles([
        'package-tap.i18n'
    ], ['client', 'server']);

    // both

    api.addFiles([
        'lib/post-fields.js',
        'lib/hooks.js',
        'lib/main.js',
        'lib/routes.js',
        'lib/settings-config.js',
        'lib/templates.js'
    ], ['client', 'server']);

    // client

    api.addFiles([
        'lib/server/feedback.js'
    ], ['server']);

    api.addFiles([
        'lib/client/templates/custom_template.html',
        'lib/client/templates/custom_template.js',
        'lib/client/templates/empty-template.html',
        'lib/client/templates/post-item.html',
        'lib/client/templates/post-item.js',
        'lib/client/templates/post-list.html',
        'lib/client/templates/post-list.js',
        'lib/client/templates/custom-nav.html',
        'lib/client/templates/custom-nav.js',
        'lib/client/templates/source-link.html',
        'lib/client/templates/source-link.js',
        'lib/client/css/styles.scss',
        'lib/client/css/panel.scss'
    ], ['client']);

    api.export([
        'viewsMenu',
        'secondaryNav',
        'postHeading',
        'postMeta',
        'postModules'
    ]);
});

