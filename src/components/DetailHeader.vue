<template>
    <div class="detail-header" :class="{'sticky':isSticky}">
        <div class="wrapper">
            <h3 class="title">{{product.name}}</h3>
            <div class="product-info">
                <a href="javascript:;">概述</a>
                <span>|</span>
                <a href="javascript:;">参数</a>
                <span>|</span>
                <a href="javascript:;">用户评价</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'detail-title',
    components: {
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
    },
    destroyed() {
        window.removeEventListener('scroll',this.getScrollTop,false);
    }
}
</script>
<style lang="scss">
.detail-header {
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
        z-index: 12;
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
            .product-remark {
                margin-left: 11px;
            }
        }
    }
}

</style>