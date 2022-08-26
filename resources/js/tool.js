/* eslint-disable */
Nova.booting((Vue, router, store) => {
    Nova.inertia('nova-translation-manager', require('./views/Translation.vue').default);
    // router.addRoutes([
    //     {
    //         name: 'nova-translation-manager',
    //         path: '/translation-manager',
    //         component: require('./views/Translation'),
    //     },
    // ]);
    Vue.config.devtools = true;
});
