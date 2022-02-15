<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
// import jsonp from 'jsonp';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    // let url = "https://www.fastmock.site/mock/3ed5f621ab8a105fc4b195e8c98437dc/api/test";
    let url = "/u/index/allcourses"
    axios.get(url).then((data) => {
      console.log("接口调用",data);
    })
    // jsonp(url,(err,data)=>{
    //   let result = data;
    //   console.log(result);
    // })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
