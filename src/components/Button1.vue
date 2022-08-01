<template>
    <div class="btn">
        <button class="btn-public normal" v-if="btnType == 'normal'" @click="$emit('confirm')">
            {{btnContent}}
        </button>
        <button class="btn-public middle" v-if="btnType == 'middle'" @click="$emit('confirm')">
            {{btnContent}}
        </button>
        <button class="btn-public large" v-if="btnType == 'large'" @click="$emit('confirm')">
            {{btnContent}}
        </button>
        <div class="btn-group" v-if="btnType == 'group' ">
            <button class="btn-public btn-item normal" @click="$emit('confirm')">
                确定
            </button>
            <button class="btn-public btn-item normal" @click="$emit('cancel')">
                取消
            </button>
        </div>
        
        <div class="btn-group" v-if="btnType == 'group1' ">
            <button class="btn-public btn-item normal" @click="$emit('confirm')">
                查看订单
            </button>
            <button class="btn-public btn-item normal" @click="$emit('cancel')">
                未支付
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'btn',
    data() {
        return {

        }
    },
    props: {
        btnContent: {
            type: String,
            default: '这是按钮'
        },
        btnType: {
            type: String,
            default: 'middle'
        },
    }
}
</script>
<style lang="scss" scoped>
.btn {
    .btn-public {
        text-align: center;
        color: #FFFFFF;
        background: #FF6600;
        border: none;
    }
    .normal {
        width: 160px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
    }
    .middle {
        width: 300px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
    }
    .large {
        width: 348px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
    }
    .btn-group {
        display: flex;
        justify-content: center;
        .btn-item {
            margin-right: 12px;
            &:last-child {
                margin-right: 0;
            }
            &:nth-child(1) {
                background: #FF6600;
            }
            &:nth-child(2) {
                background: #BBBBBB;
            }
        }
    }
}
</style>