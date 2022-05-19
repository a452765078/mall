<template>
<div class="orderHeader">
    <div class="container clearfix">
        <a class="logo fl">
            <img src="../../resource/img/屏幕快照 2019-06-26 上午10.57.35.png" alt="">
        </a>
        <div class="title fl">
            <h4>
                <slot name="title"></slot>
                <slot name="desc"></slot>
            </h4>

        </div>
        <a href="javascript:;" class="username fr">
            {{username}}
        </a>
    </div>
</div>    
</template>
<script>
import { mapState } from "vuex";

export default {
    name: 'orderHeader',
    props: {

    },
    computed: {
        ...mapState(['username'])
    }
}

</script>
<style lang="scss">
.orderHeader {
    padding: 30px 0;
    .logo {
        display: inline-block;
        width: 52px;
        height: 52px;
        line-height: 52px;
    }
    .title {
        height: 52px;
        line-height: 52px;
        margin-left: 54px;
        h4 {
            font-size: 28px;
            span {
                font-size: 14px;
                color: #999999;
                margin-left: 17px;
                font-weight: normal;
            }
        }
    }
    .username {
        font-size: 16px;
        color: #666666;
    }
}

</style>