import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AdPlugin)
public class AdPlugin: CAPPlugin {
    @objc func getAdId(_ call: CAPPluginCall) {
        call.reject("No implementation")
    }
}
