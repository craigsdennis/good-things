import SyncClient  from 'twilio-sync'

// TODO: Export
const SYNC_TOKEN_URI = 'https://quartz-ant-5504.twil.io/sync-token';

async function getToken() {
    // TODO: check here if we got a token already
    const response = await fetch(SYNC_TOKEN_URI, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return json.token;
}

export default async function getSyncClient() {
    const token = await getToken();
    return new SyncClient(token);
}