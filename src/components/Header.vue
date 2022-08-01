<template>
<div class="header">
  <div class="wrap">
      <div class="header-inner">
          <div class="header-left">
              <ul class="flex-l">
                  <li class="item">松果出行</li>
                  <li class="item">MIUI</li>
                  <li class="item">云服务</li>
                  <li class="item">协议规则</li>
              </ul>
          </div>
          <div class="header-right">
              <ul class="flex-r">
                  <li class="item">
                      <a href="/#/login" v-if="username===''">登录</a>
                  </li>
                  <li class="item" v-if="username===''">
                      <a href="/register">注册</a>
                  </li>
                  <li class="item" v-if="username!==''">
                      <a href="#">{{username}}</a>
                  </li>
                  <li class="item" v-if="username!==''">
                    <a href="#" @click="exit">退出</a>
                  </li>
                  <li class="cart">
                      <img src="../../resource/img/购物车.png">
                      <span>购物车({{cartCount}})</span>
                  </li>
              </ul>
          </div>
      </div>

  </div>
</div>
</template>

<script>
// import { mapState } from "vuex"

export default {
  name: 'Header',
  data() {
      return {
        //   username: this.$store.state.username,
        //   cartCount: this.$store.state.cartCount
      }
  },
  computed: {
      username() {
          return this.$store.state.username;
      },
      cartCount() {
          return this.$store.state.cartCount;
      }
  },
  mounted() {
        this.getCartCount();
    //   let params = this.$route.params;
    //   console.log(params)
    //   if( params && params.from == 'login') {
    //         this.getCartCount();
    //   }
  },
  methods: {
      exit() {
          this.axios.post('/user/logout').then(()=>{
              alert("退出成功")
          })
          this.$store.dispatch("saveUserName",'');
          this.$store.dispatch("saveCartCount",'0');
          this.$cookie.set("userId",'',{expires:'session'});
          this.$router.push("/login");
      },
      getCartCount() {
          this.axios.get('/carts/products/sum').then((res)=>{
            if(res) {
                this.$store.dispatch('saveCartCount',res);
            }
          })
      }
  }
}
</script>

<style lang="scss" scoped>
.header {
    height: 39px;
    background: #333333;
    .wrap {
        margin: 0 auto;
        height: 39px;
        line-height: 39px;
        width: 1226px;
        .header-inner {
            display: flex;
            justify-content:space-between;
            align-items: center;
            font-size: 12px;
            color: #b0b0b0;
            .flex-l {
                display: flex;
                .item {
                    margin-right: 17px;
                }
            }
            .flex-r {
                display: flex;
                .item {
                        a  {
                        margin-right: 19px;
                        font-size: 12px;
                        color: #b0b0b0;
                    }
                }
                .cart {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width:16px;
                        height: 12px;
                    }
                    span {
                        margin-left: 4px;
                    }
                    width: 110px;
                    background: #666666;
                }
            }
        }

    }
}

</style>
