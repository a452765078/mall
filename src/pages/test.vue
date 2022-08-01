<template>
  <div class="payModal" v-if="showModal">
      <div class="mask"></div>
      <div class="payImg clearfix">
          <div class="img1 fl">
              <img src="/imgs/pay/icon-scan.png" alt="">
          </div>
          <div class="img2 fl">
              <h5>微信支付</h5>
              <div class="wechatQrcode">
                <img :src="imgSrc" alt="">
              </div>
              <p>请使用<span>微信</span>扫一扫</p>
              <p>二维码完成支付</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'payModal',
    props: {
        imgSrc: {
            type:String,
            default: ''
        },
        showModal: {
            type: Boolean,
            default: true
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
.payModal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    .mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: #000000;
        opacity: 0.6;
    }
    .payImg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 22;

        .img1 {
            width: 296px;
            height: 485px;
            img {
                width: 296px;
                height: 485px;
            }
        }
        .img2 {
            width: 370px;
            height: 440px;
            margin-top: 26px;
            background: #FFFFFF;
            h5 {
                width: 370px;
                height: 60px;
                line-height: 60px;
                padding-left: 18px;
                box-sizing: border-box;
                background: #F5F5F5;
                font-size: 20px;
                font-weight: normal;
            }
            .wechatQrcode {
                padding: 44px 66px 26px 66px;
                img {
                    width: 237px;
                    height: 240px;
                }
            }
            p {
                font-size: 14px;
                text-align: center;
                span {
                    color: #FF6204;
                }
            }

        }
    }
}

</style>