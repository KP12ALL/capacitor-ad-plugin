import { registerPlugin } from '@capacitor/core';

import type { AdPlugin } from './definitions';

const Ad = registerPlugin<AdPlugin>('Ad', {
  web: () => import('./web').then(m => new m.AdWeb()),
});

export * from './definitions';
export { Ad };
