'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Ad = core.registerPlugin('Ad', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AdWeb()),
});

class AdWeb extends core.WebPlugin {
    async getAdId() {
        throw new Error('getAdId() has no web implementation');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AdWeb: AdWeb
});

exports.Ad = Ad;
//# sourceMappingURL=plugin.cjs.js.map
