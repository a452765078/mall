<template>
    <div class="modal">
        <div class="mask"></div>
        <div :class="['dialog',type===1?'':'mini']">
            <div class="header">
                <slot name="header"></slot>
            </div>
            <div class="body">
                <slot name="body"></slot>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modal',
    data() {
        return {

        }
    },
    props: {
        type:{
            type:String,
            default:'1'
        },
        title:String,
        content:String
    }
}
</script>
<style lang="scss">
@import './../assets/scss/modal.scss';
@import './../assets/scss/mixin.scss';

.modal {
    @include pos(fixed,0,0);
    z-index: 30;
    .mask {
        z-index: 20;
        width: 100vw;
        height: 100vh;
        background: #000000;
        opacity: 0.5;
    }
    .dialog {
        @include pos(absolute,50%,50%);
        transform: translate(-50%,-50%);
        z-index: 20;
        width: 660px;
        height: 462px;
        &.mini {
            width: 370px;
            height: 440px;
        }
        .header {
            background: #F5F5F5;
            padding:0 15px;
            font-size: 16px;
            height: 60px;
            line-height: 60px;
        }
        .body {
            background: #FFFFFF;
            padding: 20px 20px;
        }
        .footer {
            background: #F5F5F5;
            padding:15px 15px;
            font-size: 16px;
        }
    }
}
</style>