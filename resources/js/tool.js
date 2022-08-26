/* eslint-disable */
import Translation from './views/Translation'

Nova.booting((Vue, router, store) => {
    Nova.inertia('nova-translation-manager', Translation);
});
