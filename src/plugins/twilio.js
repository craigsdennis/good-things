import SyncClient from 'twilio-sync';

// TODO: Export
const SYNC_TOKEN_URI = 'https://quartz-ant-5504.twil.io/sync-token';

export default function install(Vue, options) {
    Vue.prototype.$getSyncClient = async function() {
        if (Vue.prototype.$_syncClient) {
            console('Using cached client');
            return Vue.prototype.$_syncClient;
        }
        const response = await fetch(options.SYNC_TOKEN_URL);
        const json = await response.json();
        return Vue.prototype.$_syncClient = new SyncClient(json.token);
    }
}
