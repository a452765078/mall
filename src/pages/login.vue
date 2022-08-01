<template>
  <div class="login">
    <header-vue></header-vue>
    <div class="wrapper">
        <div class="container">
            <div class="login-form">
                <h3 class="title">
                    <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
                </h3>
                <div class="input">
                    <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
                </div>
                <div class="input">
                    <input type="password" placeholder="密码" v-model="password">
                </div>
                <div class="btn-box">
                    <a href="javascript:;" class="btn" @click="login">登录</a>
                </div>
                <div class="tips">
                    <div class="sms" @click="register">手机短信登录/注册</div>
                    <div class="reg">
                        <a href="javascript:;" @click="register">立即注册</a>
                        <span>|</span>
                        <a href="javascript:;">忘记密码？</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <footer-vue></footer-vue>
  </div>
</template>
<script>
import HeaderVue from "../components/Header.vue";
import FooterVue from "../components/Footer.vue";
export default {
  name: 'login',
  components: {
      HeaderVue,
      FooterVue
  },
  data(){
    return {
      username:'',
      password:'',
      userId:''
    }
  },
  methods:{
    login(){
      let { username,password } = this;
      this.axios.post('/user/login',{
        username,
        password
      }).then((res)=>{
        // this.$cookie.set('userId',res.id,{expires:'1M'});
        this.$cookie.set('userId',res.id,{expires:'session'});
        this.$store.dispatch('saveUserName',res.username);
        this.$router.push('/index');
      })
    },
    register(){
      this.axios.post('/user/register',{
        username:'yuanzitai',
        password:'yuanzitai',
        email:'yuanzitai@163.com'
      }).then((res)=>{
          console.log("res =>",res)
        alert('注册成功');
      })
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/mixin.scss';

.login {
    .wrapper {
        @include bgImg(100%,576px,'/imgs/login-bg.jpg',cover);
        .container {
            width: 1226px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            .login-form {
                position: absolute;
                top: 36px;
                right: 0px;
                width:410px;
                height: 510px;
                background: #FFFFFF;
                .title {
                    margin-top: 40px;
                    padding: 0 72px;
                    span {
                        font-size: 24px;
                        color: #666666;
                        cursor: pointer;
                        &:nth-child(2) {
                            margin-left: 33px;
                        }
                        &:last-child {
                            margin-left: 32px;
                        }
                    }
                    .checked {
                        color: #FF6600;
                    }
                }
                .input {
                    margin-top: 49px;
                    margin-bottom: 20px;
                    margin-left: 31px;
                    margin-right: 31px;
                    width: 348px;
                    height: 50px;
                    border: 1px solid #E5E5E5;
                    vertical-align: middle;
                    padding-left: 18px;
                    display: flex;
                    align-items: center;
                    &:last-child {
                        margin: 0 0;
                    }
                    input {
                        font-size: 14px;
                    }
                }
                .btn-box {
                    margin-top: 30px;
                    margin-left: 31px;
                    margin-right: 31px;
                    width: 348px;
                    height: 50px;
                    background: #FF6600;
                    text-align: center;
                    line-height: 50px;
                    .btn {
                        font-size: 16px;
                        font-weight: bold;
                        color: #FFFFFF;
                    }
                }
                .tips {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 14px;
                    margin-left: 31px;
                    margin-right: 31px;
                    font-size: 14px;
                    .sms {
                        color: #FF6600;
                        cursor: pointer;
                    }
                    .reg {
                        a {
                            color: #999999;
                            cursor: pointer;
                        }
                        span {
                            color: #999999;
                            margin-left: 7px;
                            margin-right: 7px;
                        }
                    }
                }
            }
        }
    }
}


</style>