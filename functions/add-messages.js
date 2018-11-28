/**
 * Add Message
 *
 * path: /add-message
 * [x] Check for valid Twilio signature
 * Event: Incoming Message
 */

const niceties = [
    'You are the greatest',
    "Don't stop believin'",
    'Yassssss, you rule'
];
// TODO: How to dynamically set this?
const url = 'https://craigsdennis.github.io/good-things/';

exports.handler = async function(context, event, callback) {
    const message = { body: event.Body };
    const sync = Runtime.getSync();
    try {
        await sync.lists('messages')
            .syncListItems
            .create({ data: message });
        const twiml = new Twilio.twiml.MessagingResponse();
        const nicety = niceties[Math.floor(Math.random() * niceties.length)];
        twiml.message(`${nicety}. See yours, and more at ${url}`);
        callback(null, twiml);
    } catch (err) {
        console.log('err', err);
        callback(err);
    }
};