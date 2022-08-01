<template>
    <div class="modal1" v-if="showModal1">
        <div class="mask"></div>
        <div class="content" :class="modalType">
            <div class="header">
                {{header}}
            </div>
            <div class="body">
                <slot name="body">这里是body，可在此添加插槽</slot>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modal1',
    data() {
        return {
        
        }
    },
    props: {
        modalType: {
            type:String,
            default: 'normal'
        },
        showModal1: {
            type: Boolean,
            default: false
        },
        header:{
            type:String,
            default: '这里是标题'
        },
        footer:{
            type:String,
            default: '这里是底部'
        },
    }
}
</script>
<style lang="scss">
.modal1 {
    position: fixed;
    top: 0;
    left: 0;
    .mask {
        width: 100vw;
        height: 100vh;
        opacity: 0.5;
        background: #55585A;
    }
    .content {
        position: absolute;
        box-sizing: border-box;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #FFFFFF;
        z-index: 22;
        .header {
            padding: 22px;
            background: #F5F5F5;
        }
        .body {
            padding: 41px 35px;
            background: #FFFFFF;
        }
        .footer {
            padding: 22px;
            background: #F5F5F5;
        }
    }
    .normal {
        width: 660px;
    }
}

</style>