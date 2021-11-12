package tv.m12all;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;

@CapacitorPlugin(name = "Ad")
public class AdPlugin extends Plugin {
    @PluginMethod
    public void getAdId(PluginCall call) {
        try {
            AdvertisingIdClient.Info idInfo;
            idInfo = AdvertisingIdClient.getAdvertisingIdInfo(getContext());
            String advertId = idInfo.getId();
            JSObject ret = new JSObject();
            ret.put("id", advertId);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Error while getting advertising id", e);
        }
    }
}
