<template>
  <div class="alipay">
        <order-header>
            <template #title>
                <h4>支付订单</h4>
            </template>
        </order-header>
        <div class="loading">
            <img src="/imgs/loading-svg/loading-bars.svg" alt="">
        </div>
        <div class="content" v-html="content">
        </div>
        <footer-vue></footer-vue>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue';
import FooterVue from '../components/Footer.vue';
export default {
    name: 'alipay',
    components: {
        OrderHeader,
        FooterVue
    },
    data() {
        return {
            content: '<div>content</div>',
            orderNo: this.$route.query.orderNo
        }
    },
    mounted() {
        this.paySubmit();
    },
    methods: {
        paySubmit() {
            this.axios.post('/pay',{
                orderId:this.orderNo,
                orderName:'小米手机',
                amount: 0.01,
                payType:1
            }).then(res=>{
                this.content = res.content;
                setTimeout(()=>{
                    document.forms[0].submit();
                },100)
            })
        }
    }
}
</script>

<style lang="scss">
.alipay {
    .loading {
        width: 200px;
        height: 200px;
        margin:0 auto;
        img {
            width: 200px;
            height: 200px;
        }
    }
}
</style>