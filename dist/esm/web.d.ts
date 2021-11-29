import { WebPlugin } from '@capacitor/core';
import type { AdPlugin } from './definitions';
export declare class AdWeb extends WebPlugin implements AdPlugin {
    getAdId(): Promise<{
        id: string;
    }>;
}
