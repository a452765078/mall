<template>
<div class="footer">
  <div class="wrap">
      <div class="service">
          <ul>
              <li>
                  <a href="javascript:;"  class="setting">
                      <img src="/imgs/icon-setting.png">预约维修服务
                  </a>
              </li>
              <li>
                  <a href="javascript:;" class="7day">
                      <img src="/imgs/icon-7day.png">7天无理由退货
                  </a>
              </li>
              <li>
                  <a href="javascript:;" class="15day">
                      <img src="/imgs/icon-15day.png">15天免费换货
                  </a>
              </li>
              <li>
                  <a href="javascript:;" class="post">
                      <img src="/imgs/icon-post.png">满150元包邮
                  </a>
              </li>
          </ul>
      </div>
  </div>
      <div class="bottom">
          <img src="/imgs/logo-footer.png" alt="" class="logo">
          <h3 class="title">小米商城</h3>
          <ul>
              <li>
                  <a href="javascript:;">河畔一角主页</a>
              </li>
              <li>
                  <a href="javascript:;">Vue全栈课程</a>
              </li>
              <li>
                  <a href="javascript:;">React全家桶课程</a>
              </li>
              <li>
                  <a href="javascript:;">微信支付专项课程（H5+小程序+Node+Mongo）</a>
              </li>
          </ul>
          <p class="copyright">Copyright&copy;<a href="javascript:;">mi.51purse.com</a>All Rights Reserved</p>
      </div>
</div>
</template>

<script>

export default {
  name: 'Footer',
  mounted() {

  }
}
</script>

<style lang="scss">
.footer {
    .wrap {
        width: 1226px;
        margin: 0 auto;
        .service {
            ul {
                display: flex;
                li {
                    flex: 1;
                    height: 84px;
                    line-height: 84px;
                    text-align: center;
                    position: relative;
                    &:after {
                        content: ' ';
                        display: inline-block;
                        width: 1px;
                        height: 34px;
                        background: #E5E5E5;
                        position: absolute;
                        right: 0;
                        top: 25px;
                    }
                }
                a {
                    font-size: 16px;
                    color: #666666;
                    font-weight: bold;
                    display: inline-block;
                    img {
                        width: 20px;
                        height: 20px;
                        vertical-align: middle;
                        margin-right: 8px;
                    }
                    
                }
            }
        }
    }
    .bottom {
        width: 100%;
        height: 234px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #333333;
        border-top: 4px solid #FF7301;
        img {
            width: 53px;
            height: 36px;
            margin-top: 46px;
        }
        .title {
            font-size: 16px; 
            margin-top: 13px;
            color: #999999;
        }
        ul {
            display: flex;
            margin-top: 31px;
            li {
                &:last-child::after {
                    display: none;                    
                }
                &:after {
                    content: ' ';
                    display: inline-block;
                    width: 1px;
                    height: 14px;
                    background:#999999;
                    margin: 0 8px;
                    vertical-align: middle;
                }
            }
            a {
                font-size: 16px;
                color: #999999;
                
                // &:last-child {
                //     background: yellow;
                // }
            }
        }
        .copyright {
            font-size: 16px;
            color: #999999;
            margin-top: 8px;
            a {
                color: #FF6600;
            }
        }
}
}

</style>
