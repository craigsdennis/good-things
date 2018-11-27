<template>
  <div class="about">
    <h1>It can't be all that bad</h1>
    <p>Text something good to {{ twilioNumber }}</p>
    <h2>This is a Serverless application</h2>
    <p>Check out these new features offered from Twilio</p>
    <h3>Learn More</h3>
    <ul>
      <li><a href="https://www.twilio.com/functions">Twilio Functions</a></li>
      <li><a href="https://www.twilio.com/sync">Twilio Sync</a></li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
