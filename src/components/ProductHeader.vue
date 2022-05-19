<template>
    <div class="product-header" :class="{'sticky':isSticky}">
        <div class="wrapper">
            <h3 class="title">{{product.name}}</h3>
            <div class="product-info">
                <a href="javascript:;">概述</a>
                <span>|</span>
                <a href="javascript:;">参数</a>
                <span>|</span>
                <a href="javascript:;">用户评价</a>
                <div class="product-buy"  @click="buy">
                    <Btn>
                        <template #btn-content>
                            立即购买
                        </template>
                    </Btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Btn from '../components/Button.vue';
export default {
    name: 'product-title',
    components: {
        Btn
    },
    props: {
        product: {
            type: Object
        }
    },
    data() {
        return {
            isSticky: false
        }
    },
    mounted() {
        window.addEventListener('scroll',this.getScrollTop);
        // this.buy();  这行程序导致耽误了2个小时时间。
    },
    methods: {
        getScrollTop() {
            let curTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (curTop > 230) {
                this.isSticky = true;
            }else {
                this.isSticky = false;
            }
        },
        buy() {
            debugger
            console.log("buy")
            let id = this.$route.params.id;
            this.$router.push(`/detail/${id}`);
        }
    },
    destroyed() {
        window.removeEventListener('scroll',this.getScrollTop,false);
    }
}
</script>
<style lang="scss">
.product-header {
    height: 66px;
    width: 100%;
    border-top: 1px solid #E5E5E5;
    // transition: top .3s;
    // position: sticky;   # 不是兼容性写法
    // top: 0;
    background: #FFFFFF;
    &.sticky {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .wrapper {
        height: 100%;
        width: 1226px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            font-size: 18px;
            color: #333333;
        }
        .product-info {
            font-weight: bold;
            color: #666666;
            display: flex;
            align-items: center;
            a {
                font-size: 14px;
                color: #666666;
            }
            span {
                color: #999999;
                margin: 0 11px
            }
            .product-buy {
                margin-left: 11px;
            }
        }
    }
}

</style>