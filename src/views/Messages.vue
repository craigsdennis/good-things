<template>
    <div>
        <h1>Good Things</h1>
        <p>Latest texts to {{ twilioNumber }}</p>
        <article v-for="(message, idx) in messages" :key="idx">
            <p>{{ message.body }}</p>
        </article>
    </div>
</template>

<script>

function listItemToMessage(listItem) {
    return listItem.data.value;
}

export default {
  name: 'messages',
  data() {
      return {
          messages: []
      }
  },
  async mounted() {
      const sync = await this.$getSyncClient();
      const list = await sync.list('messages');
      const page = await list.getItems({order: 'desc'});
      this.messages = page.items.map(listItemToMessage);
      const VueThis = this;
      list.on('itemAdded', evt => VueThis.messages.unshift(listItemToMessage(evt.item)));
  }
}

</script>
