import {WebPlugin} from '@capacitor/core';

import type {AdPlugin} from './definitions';

export class AdWeb extends WebPlugin implements AdPlugin {
  async getAdId(): Promise<{ id: string }> {
    throw new Error('getAdId() has no web implementation');
  }
}
