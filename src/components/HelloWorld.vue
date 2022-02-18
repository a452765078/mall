<template>
<div>
  Hello
</div>
</template>

<script>
// import storage from "../storage"
import env from "../config/env.js"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    // storage.setItem("user",{});
    // storage.setItem("a",123123,'user');
    // storage.setItem("a",123123);
    // console.log(storage.getItem("user"))
    // storage.clear('a');
    console.log(env)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
