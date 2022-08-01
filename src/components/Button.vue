<template>
    <div class="btn">
        <button class="btn-default" :class="[btnType,{'bag-color-gray':isBgColorGray},{'bag-color-white':isBgColorWhite}]">
            <slot name="btn-content"></slot>
        </button>
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
        btnType: {
            type: String,
            default: 'middle'
        },
        // isGroup: {
        //     type: Boolean,
        //     default: false
        // },
        isBgColorGray: {
            type:Boolean,
            default: false
        },
        isBgColorWhite: {
            type:Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
.btn {
    .btn-default {
        text-align: center;
        color: #FFFFFF;
        background: #FF7301;
        border: none;
        font-size: 12px;
        cursor: pointer;
        &.middle {
            width: 110px;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
        }
        &.large {
            width: 142px;
            height: 54px;
            line-height: 54px;
            font-size: 16px;
        }
        &.largeMax {
            width: 202px;
            height: 54px;
            line-height: 54px;
            font-size: 16px;
        }
        &.extraLarge {
            width: 300px;
            height: 54px;
            line-height: 54px;
            font-size: 16px;
        }
        &.bag-color-gray {
            background: gray;
        } 
        &.bag-color-white {
            background: #FFFFFF;
        }
    }    
}

</style>