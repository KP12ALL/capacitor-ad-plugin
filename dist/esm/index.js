import { registerPlugin } from '@capacitor/core';
const Ad = registerPlugin('Ad', {
    web: () => import('./web').then(m => new m.AdWeb()),
});
export * from './definitions';
export { Ad };
//# sourceMappingURL=index.js.map