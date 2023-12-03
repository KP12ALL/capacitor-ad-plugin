import { WebPlugin } from '@capacitor/core';

import type { AdPlugin } from './definitions';

export class AdWeb extends WebPlugin implements AdPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
