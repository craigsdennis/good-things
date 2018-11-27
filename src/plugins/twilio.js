import SyncClient from 'twilio-sync';
import twilioConfig from './twilio.config.json';

export default function install(Vue) {
    Vue.mixin({
        data() {
            return {
                twilioNumber: twilioConfig.TWILIO_NUMBER
            }
        }
    })
    Vue.prototype.$getSyncClient = async function() {
        // The client may be cached on the Vue instance
        if (Vue.prototype.$_syncClient) {
            return Vue.prototype.$_syncClient;
        }
        const response = await fetch(twilioConfig['SYNC_TOKEN_URL']);
        const json = await response.json();
        return Vue.prototype.$_syncClient = new SyncClient(json.token);
    }
}
