<template>
    <div class="product">
        <header-vue></header-vue>
        <nav-vue></nav-vue>
        <Product-Header :product="product">
        </Product-Header>
        <div class="product-bg1"></div>
        <div class="product-bg2"></div>
        <div class="product-bg3"></div>
        <div class="video">
            <h2 class="video-title">60帧超慢动作摄影</h2>
            <h2 class="video-subtitle">慢慢回味每一瞬间的精彩</h2>
            <p class="video-desc">
                后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓精致更能AI 精准分析视频内容，15个场景智能匹配背景音效。
            </p>
            <div class="video-bg" @click="showVideoModal=true"></div>
            <div class="video-box">
                <div class="overlay" :class="{'showVideo':showVideoModal}"></div>
                <div class="video-wrap" :class="{'video-up':showVideoModal}">
                    <span class="close"  @click="showVideoModal=false"></span>
                    <video  controls="controls" muted autoplay width="250" src="/imgs/product/video.mp4">
                        <!-- <source src="/imgs/product/video.mp4"> -->
                    </video>
                </div>
            </div>
        </div>
        <footer-vue></footer-vue>
    </div>
</template>
<script>
import HeaderVue from "../components/Header.vue";
import NavVue from "../components/Nav.vue";
import FooterVue from "../components/Footer.vue"
import ProductHeader from "../components/ProductHeader.vue";
export default {
    name: 'product',
    components: {
        HeaderVue,
        NavVue,
        FooterVue,
        ProductHeader
    },
    data() {
        return {
            product: {
               
            },
            showVideoModal: false
        }
    },
    mounted() {
        this.getProduct();
    },
    methods: {
        getProduct() {
            let id = this.$route.params.id;
            console.log(id)
            this.axios.get(`/products/${id}`).then((res)=>{
                this.product = res;
            })
        },
        getProductDetail() {

        },
        handeShowVideo() {
            console.log(this.showVideoModal)
            this.showVideoModal = true;
        }
    }
}
</script>
<style lang="scss">
.product {
    width: 100%;
    .product-bg1 {
        height: 718px;
        background: url('/imgs/product/product-bg-1.png') no-repeat center;
        background-size: cover;
    }
    .product-bg2 {
        margin: 0 auto;
        width: 1226px;
        height: 397px;
        background: url('/imgs/product/product-bg-2.png') no-repeat center;
        background-size: cover;
    }
    .product-bg3 {
        height: 638px;
        background: url('/imgs/product/product-bg-3.png') no-repeat center;
        background-size: cover;
    }
    .video {
        width: 100%;
        background: #070708;
        display: flex;
        flex-direction: column;
        justify-content: center ;
        align-items: center;

        .video-title {
            color: #ffffff;
            margin-top: 82px;
            font-size: 60px;
        }
        .video-subtitle {
            color: #ffffff;
            font-size: 60px;
        }
        .video-desc {
            color: #ffffff;
            margin-top: 47px;
            font-size: 24px;
            width: 732px;
            text-align: center;
        }
        .video-bg {
            margin-top: 58px;
            margin-bottom: 120px;
            width: 1226px;
            height: 540px;
            background: url('/imgs/product/gallery-1.png') no-repeat center;
            background-size: contain;
            cursor: pointer;
        }
        .video-box {
            // display: block;
            position: relative;
            // &.showVideo {
            //     display: block;
            // }
            
            .overlay {
                position: fixed;
                top: 0;
                left: 0;
                width:100vw;
                height: 100vh;
                background: #ffffff;
                opacity: 0;
                z-index: 9;
                display: none;
                &.showVideo {
                    opacity: .7;
                    display: block;
                }
            }
            .video-wrap {
                position: fixed;
                left: 50%;
                top: -50%;
                transform: translate(-50%,-50%);
                margin-top: 58px;
                width: 1226px;
                height: 554px;
                z-index: 12;
                transition: all .5s;
                &.video-up {
                    opacity: 1;
                    top: 50%;
                }
                video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    display: block;
                    width: 22px;
                    height: 22px;
                    background: url('/imgs/icon-close.png') no-repeat center;
                    background-size:cover ;
                    z-index: 15;
                    border-radius: 50%;
                    background-color: #ffffff;
                    transition: all .3s;
                    cursor: pointer;
                    &:hover {
                        width: 24px;
                        height: 24px;
                    }
                }
            }
        }
    }
}
</style>