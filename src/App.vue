<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-link to="/">根目录</router-link> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios';
// import jsonp from 'jsonp';

export default {
  name: 'App',
  components: {

  },
  mounted() {
    // let url = "https://www.fastmock.site/mock/3ed5f621ab8a105fc4b195e8c98437dc/api/test";
    // let url = "/u/index/allcourses"
    // axios.get(url).then((data) => {
    //   console.log("接口调用",data);
    // })
    // jsonp(url,(err,data)=>{
    //   let result = data;
    //   console.log(result);
    // })
    // console.log("this.$router =>",this.$router);
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser() {
      //res = {} 给个默认值，防止报错
      this.axios.get('/user').then((res={})=>{
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul,li {
  list-style: none;
}
a {
  text-decoration: none;
}
input {
  border: none;
  background: none;
  outline: none;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix::after{
  clear: both;
  content: ' ';
  display: table;
}
.container {
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
}

</style>
