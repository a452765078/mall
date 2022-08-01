<template>
  <div class="orderDetail">
      <order-header>
        <template #title>
            <h4>支付订单</h4>
        </template>
      </order-header>
      <div class="orderDetailInner">
          <div class="container">
              <div class="orderInfo">
                  <div class="orderInfoInner" :class="{'hidden':showDetail}">
                      <div class="orderInfo-top clearfix">
                          <div class="icon fl">
                              
                          </div>
                          <div class="content fl">
                              <h4>订单提交成功！去付款咯~</h4>

                              <div class="addressInfo">
                                <p>请在<span>0小时30分钟</span>内完成支付，超时后将取消订单</p>
                                <p>收货信息：{{addressInfo}}</p>
                              </div>
                             
                          </div>
                          <div class="slider fr">
                              <div class="payAmount">
                                  应付金额：<span>{{totalPrice}}</span>
                              </div>
                              <div class="detail-toggle" @click="showDetail=!showDetail">
                                订单详情
                                <div class="icon-toggle"></div>
                              </div>
                          </div>
                      </div>
                      <div class="splitLine"></div>
                      <div class="orderInfo-bottom">
                          <div class="content">
                            <div class="item">
                                <div class="key">订单号：</div>
                                <div class="value">
                                    <span>{{orderNo}}</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="key">收货信息：</div>
                                <div class="value">
                                    {{addressInfo}}
                                </div>
                            </div>
                            <div class="item">
                                <div class="key">商品名称：</div>
                                <div class="value">
                                    <ul>
                                        <li v-for="(item,index) in orderItemVoList" :key="index">
                                            {{item.productName}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="item">
                                <div class="key">发票信息：</div>
                                <div class="value">
                                    电子发票   个人
                                </div>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div class="orderPay">
                      <div class="title">选择以下支付方式付款</div>
                      <div class="payMethodWrap">
                          <div class="optionTitle">支付平台</div>
                          <div class="payMethod clearfix">
                            <div class="alipay item fl" :class="{'checked':payType==1}" @click="paySubmit(1)"></div>
                            <div class="weixin item fl" :class="{'checked':payType==2}" @click="paySubmit(2)"></div>
                            
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <footer-vue></footer-vue>
        <pay-modal
        :imgSrc="imgSrc"
        :showModal="showModal"
        @cancel="cancelPay"
        ></pay-modal>
        <modal1-vue :showModal1="showModal1" modalType="normal" header="支付确认">
            <template #body>
                <p>确认是否已经是支付</p>
            </template>
            <template #footer>
                <button1-vue btnType="group1" @confirm="submitAction" @cancel="cancelAction"></button1-vue>
            </template>
        </modal1-vue>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue';
import FooterVue from '../components/Footer.vue';
import PayModal from '../pages/payModal.vue';
import Modal1Vue from '../components/Modal1.vue';
import Button1Vue from '../components/Button1.vue';
import QRCode  from 'qrcode';
export default {
    name: 'orderDetail',
    components: { 
        OrderHeader,
        FooterVue,
        PayModal,
        Modal1Vue,
        Button1Vue
    },
    data() {
        return {
            showDetail:true,
            payType:'',
            orderNo: this.$route.query.orderNo,
            orderItemVoList:[],
            addressInfo:{},
            totalPrice:0,
            imgSrc: '', //微信支付地址
            showModal: false, //是否显示微信弹框
            showModal1: false, //确认是否已经支付
            T: '' ,//轮询状态
        }
    },
    mounted() {
       this.getOrderDetail();
    },
    methods: {
        getOrderDetail() {
            this.axios.get(`/orders/${this.orderNo}`).then(res=>{
                this.orderItemVoList = res.orderItemVoList;
                this.totalPrice = res.payment;
                let shippingVo = res.shippingVo;
                this.addressInfo = `${shippingVo.receiverName} ${shippingVo.receiverPhone} ${shippingVo.receiverProvince} ${shippingVo.receiverCity} ${shippingVo.receiverDistrict} ${shippingVo.receiverName}`
            })
        },
        paySubmit(payType) {
            this.payType = payType;
            if(payType == 1) {
                window.open(`/#/order/alipay?orderNo=${this.orderNo}`,'_blank');
            }else if(payType == 2){
                this.showModal = true;
                this.axios.post('/pay',{
                orderId:this.orderNo,
                orderName:'小米手机',
                amount: 0.01,
                payType:2
                }).then(res=>{
                    this.loopOrder();
                    QRCode.toDataURL(res.content)
                    .then((url) => {
                        this.imgSrc = url;
                    })
                }).catch(err=>{
                    this.$message.error(err);
                })
            }
        },
        cancelPay() {
            this.showModal = false;
            this.showModal1 = true;
        },
        loopOrder() {
            this.T = setInterval(()=>{
                this.axios.get(`/orders/${this.orderNo}`).then(res=>{
                    if(res.status == 20) {
                        this.showModal = false;
                        this.showModal1 = true;
                        this.submitAction();
                        clearInterval(this.T);
                    }
                })
            },1000)
        },
        submitAction() {
            this.$router.push("/order/list");
        },
        cancelAction() {
            this.showModal1 = false;
            clearInterval(this.T);
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';

.orderDetail {
    .orderDetailInner {
        background: #EFEFEF;
        padding-top: 32px;
        padding-bottom: 130px;
        .orderInfo {
            .orderInfoInner {
                width: 100%;
                // min-height: 444px;
                background: #FFFFFF;
                padding: 52px;
                box-sizing: border-box;
                transition: height .3s;
                overflow: hidden;
                &.hidden {
                    // min-height: 204px;
                    height:204px;
                }
                .orderInfo-top {
                    .icon {
                        width: 90px;
                        height: 90px;
                        border-radius: 50%;
                        background: url('/imgs/icon-gou.png') #80c58a no-repeat center;
                        background-size: 60px;
                        // @include bgImg(90px,90px,'/imgs/icon-gou.png')
                        margin-top:8px;
                    }
                    .content {
                        margin-left: 40px;
                        margin-top: 28px;
                        h4 {
                            font-size: 24px;
                        }
                        .addressInfo {
                            margin-top: 10px;
                            p {
                                font-size: 14px;
                                span {
                                    color: #FF6600;
                                }
                            }
                        }
                        .slider {

                        }
                        
                    }   
                    .slider {
                        margin-top: 28px;
                        .payAmount {
                            font-size: 14px;
                            span {
                                font-size: 24px;
                                color: #FF6600;
                            }
                        }
                        .detail-toggle {
                            margin-top: 25px;
                            font-size: 14px;
                            cursor: pointer;
                            .icon-toggle {
                                display: inline-block;
                                width: 30px;
                                height: 30px;
                                // background: yellow;
                                background: url('/imgs/icon-down.png') no-repeat bottom;
                                background-size: 15px;
                            }
                        }
                    }
                }
                .splitLine {
                    width: 100%;
                    height: 1px;
                    background: #D7D7D7;
                    margin-top: 45px;
                }
                .orderInfo-bottom {
                    margin-top: 47px;
                    .content {
                        font-size: 14px;
                        margin-left: 130px;
                        .item {
                            text-align: left;
                            display:table-row;
                            .key {
                                width: 70px;
                                height: 28px;
                                line-height: 28px;
                                display: table-cell;

                            }
                            .value {
                                height: 28px;
                                line-height: 28px;
                                display: table-cell;
                                margin-left: 24px;
                                span {
                                    color: #FF6600;
                                }
                            }
                        }
                    }
                }
            }
            .orderPay {
                margin-top: 30px;
                width: 100%;
                height: 270px;
                background: #FFFFFF;
                padding: 0 53px;
                .title {
                    color: #333333;
                    font-size: 20px;
                    height: 70px;
                    line-height: 70px;
                    border-bottom: solid 1px #D7D7D7;
                }
                .payMethodWrap {
                    .optionTitle {
                        font-size: 18px;
                        height: 70px;
                        line-height: 70px;
                    }
                    .payMethod {
                        .item {
                            width: 188px;
                            height: 64px;
                            border: solid 1px #D7D7D7;
                            margin-left: 20px;
                        }
                        .alipay {
                            display: inline-block;
                            background: url('/imgs/pay/icon-ali.png') no-repeat center;
                            background-size: 111px;
                        }
                        .weixin {
                            display: inline-block;
                            background: url('/imgs/pay/icon-wechat.png') no-repeat center;
                            background-size: 111px;
                        }
                        .checked {
                            border: solid 1px #FF6700;
                        }
                    }
                }
            }
        }
    }
}

</style>