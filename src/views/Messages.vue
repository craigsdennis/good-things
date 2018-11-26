<template>
    <div>
        <h1>Please Work!</h1>
        <article v-for="(message, idx) in messages" :key="idx">
            <p>{{ message.body }}</p>
        </article>
    </div>
</template>

<script>

import getSyncClient from '../syncClient'
export default {
  name: 'messages',
  data() {
      return {
          messages: []
      }
  },
  async mounted() {
      const sync = await getSyncClient();
      const list = await sync.list('messages');
      const page = await list.getItems();
      this.messages = page.items.map(li => li.data.value);
      const VueThis = this;
      list.on('itemAdded', evt => VueThis.messages.push(evt.item.data.value));
      /*
      event { ToCountry: 'US',
  ToState: 'OR',
  SmsMessageSid: 'SM7a90a8dd09c86823513029b8f21e6d07',
  NumMedia: '0',
  ToCity: '',
  FromZip: '97016',
  SmsSid: 'SM7a90a8dd09c86823513029b8f21e6d07',
  FromState: 'OR',
  SmsStatus: 'received',
  FromCity: 'CLATSKANIE',
  Body: 'Again',
  FromCountry: 'US',
  To: '+19713513060',
  ToZip: '',
  NumSegments: '1',
  MessageSid: 'SM7a90a8dd09c86823513029b8f21e6d07',
  AccountSid: 'AC166216d487709dc2f431ee2b3848e24a',
  From: '+15033088404',
  ApiVersion: '2010-04-01' }
      */
  }
}

</script>
