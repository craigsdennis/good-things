/**
 * Reset Message
 *
 * path: /reset-messages
 * [ ] Check for valid Twilio signature
 * Event: Incoming Message
 */

exports.handler = async function (context, event, callback) {
    const sync = Runtime.getSync();
    try {
        await sync.lists('messages')
            .remove();
    } catch (err) {
        callback(err);
    }
    try {
        await sync.lists.create({uniqueName: "messages"});
        callback(null, {status: 'success'})
    } catch (err) {
        callback(err);
    }

};