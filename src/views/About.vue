<template>
  <div class="about">
    <div class="flyer">
      <h1>What's your good thing?</h1>
      <h2>It can't be all bad</h2>
      <p>Text something good to {{ twilioNumber }}</p>
    </div>
    <p>This is a <a href="https://github.com/craigsdennis/good-things">Serverless application</a> built using Twilio magic.</p>
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
.flyer {
  border: 2px #ccc dashed;
  margin: 0 30%;
}
</style>
