/* eslint-disable */
Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'nova-translation-manager',
            path: '/translation-manager',
            component: require('./views/Translation'),
        },
    ]);
    Vue.config.devtools = true;
});
