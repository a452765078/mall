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
                  <li class="item">登录</li>
                  <li class="item">注册</li>
                  <li class="cart">
                      <img src="../../resource/img/购物车.png">
                      <span>购物车(0)</span>
                  </li>
              </ul>
          </div>
      </div>

  </div>
</div>
</template>

<script>

export default {
  name: 'Header',
  mounted() {

  }
}
</script>

<style lang="scss">
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
                    margin-right: 19px
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
