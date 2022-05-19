<template>
    <div>
        <header-vue></header-vue>
        <nav-vue></nav-vue>
        <detail-header :product="product"> 
        </detail-header>
        <div class="detail">
            <div class="container clearfix">
                <div class="left fl">
                    <div class="wrapper">
                        <Swiper :options="swiperOptions">
                            <swiper-slide>
                                <a href="javascript:;">
                                    <img src="/imgs/detail/phone-1.jpg" alt="">
                                </a>
                            </swiper-slide>
                            <swiper-slide>
                                <a href="javascript:;">
                                    <img src="/imgs/detail/phone-2.jpg" alt="">
                                </a>
                            </swiper-slide>
                            <swiper-slide>
                                <a href="javascript:;">
                                    <img src="/imgs/detail/phone-3.jpg" alt="">
                                </a>
                            </swiper-slide>
                            <swiper-slide>
                                <a href="javascript:;">
                                    <img src="/imgs/detail/phone-4.jpg" alt="">
                                </a>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
                        </Swiper>
                        <div class="swiper-button-prev swiper-button-style"></div>
                        <div class="swiper-button-next swiper-button-style"></div>
                    </div>

                </div>
                <div class="right fr">
                    <div class="wrapper">
                        <h3 class="product-title">{{product.name}}</h3>
                        <p class="product-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红 外人脸解锁 / A</p>
                        <p class="product-seller">小米自营</p>
                        <p class="product-price">{{product.price}}</p>
                        <span class="line"></span>
                        <div class="product-address">
                            <span class="content">北京 北京市 朝阳区 安定门街道</span><a href="javascript:;" class="update">修改</a>
                            <br/><a href="javascript:;" class="receive">有货收</a>
                        </div>
                        <div class="product-option">
                            <h4 class="title">选择版本</h4>
                            <div class="content">
                                <a href="javascript:;"  @click="v1Checked=1" :class="{'checked':isChecked1(1)}">6GB+64GB 全网通   1099元</a>
                                <a href="javascript:;"  @click="v1Checked=2" :class="{'checked':isChecked1(2)}">4GB+64GB 全网通   1049元</a> 
                            </div>

                        </div>
                        <div class="product-option" :class="checked">
                            <h4 class="title">选择颜色</h4>
                            <div class="content">
                                <a href="javascript:;" >深空灰</a>
                                <a href="javascript:;">祖母绿</a>
                            </div>
                        </div>
                        <div class="product-amount">
                            <p class="product-total-info">
                                <span class="product-name">小米8 6GB+64GB 全网通 深灰色</span>
                                <span class="subtotal">{{product.price}}</span>
                            </p>
                            <p class="total">总计：{{product.price}}</p>
                        </div>
                        <div class="buy">
                            <div @click="addCart" class="btn-wrap">
                                <Button-Vue :btnType="'extraLarge'" :isBgColorGray="false" >
                                    <template #btn-content>加入购物车</template>
                                </Button-Vue>
                            </div>
                            <div class="btn-wrap">
                                <Button-Vue :btnType="'large'" :isBgColorGray="true" >
                                    <template #btn-content>喜欢</template>
                                </Button-Vue>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <footer-vue></footer-vue>
    </div>
</template>
<script>
import HeaderVue from "../components/Header.vue";
import FooterVue from '../components/Footer.vue';
import DetailHeader from '../components/DetailHeader.vue';
import NavVue from "../components/Nav.vue";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import ButtonVue from "../components/Button.vue";
export default {
    name: 'detail',
    components: {
        FooterVue,
        HeaderVue,
        DetailHeader,
        NavVue,
        Swiper,
        SwiperSlide,
        ButtonVue
    },
    data() {
        return {
            id: this.$route.params.id,
            product: {},
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                    // type: 'fraction'
                },   
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                // },
            },
            v1Checked: 1,
            v2Checked: 1
        }
    },
    mounted() {
        this.getProduct();
    },
    methods: {
        isChecked1(val) {
            return this.v1Checked == val;
        },
        getProduct() {
            let id = this.id;
            console.log(id)
            this.axios.get(`/products/${id}`).then((res)=>{
                this.product = res;
            })
        },
        addCart() {
            let id = this.id;
            this.axios.post('/carts',{
                productId:id,
                selected: true
            }).then((res={} )=>{
                this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
                // this.$router.push('/cart');
            })
        }
    }
}
</script>
<style lang="scss">
.swiper-button-style {
    color: gray;
}

.detail {
    .left {
        width: 544px;
        height: 870px;

        .wrapper {
            width: 100%;
            height: 100%;
            position: relative;
            .swiper-slide {
                margin-top: 90px;
                img {
                    width: 100%;
                    height: 486px;
                }
            }
            .swiper-button-prev {
                position: absolute;
                top: 40%;
                left: 0;
                transform: translateY(-50%);
            }
            .swiper-button-next {
                position: absolute;
                top: 40%;
                right: 0;
                transform: translateY(-50%);
            }
            .swiper-pagination {

                .swiper-pagination-bullet {
                    width: 50px;
                    height: 3px;
                    border-radius: 0;
                    &.swiper-pagination-bullet-active {
                        background-color: gray;
                    }
                }
            }   
        }
        
    }
    .right {
        width: 586px;
        height: 870px;
        margin-bottom: 50px;
        .wrapper {
            .product-title {
                font-size: 28px;
                padding-top: 30px;
            }
            .product-info {
                font-size: 14px;
                margin-top: 16px;
                color: #999999;
            }
            .product-seller {
                font-size: 16px;
                margin-top: 26px;
                color: #FF6700;
            }
            .product-price {
                font-size: 20px;
                margin-top: 14px;
                color: #FF6700 ;
            }
            .line {
                display: inline-block;
                width: 583px;
                border: 1px solid #E5E5E5;
                margin-top: 25px;
            }
            .product-address {
                margin-top: 28px;
                width: 584px;
                height: 108px;
                padding-top: 27px;
                padding-left: 34px;
                font-size: 14px;
                background-color:#FAFAFA ;
                border: 1px solid #E5E5E5;
                line-height: 28px;
                box-sizing: border-box;
                .content {
                    color: #666666;
                }
                .update {
                    color: #FF6700;
                    margin-left: 20px;
                }
                .receive {
                    color: #FF6700;
                    margin-top: 15px;
                }
            }
            .product-option {
                margin-top: 30px;
                .title {
                    font-size: 18px;
                }
                .content {
                    margin-top: 20px;
                    display: flex;
                    a {
                        display: block;
                        width: 287px;
                        height: 50px;
                        border: solid 1px #E5E5E5 ;
                        margin-right: 10px;
                        font-size: 16px;
                        text-align: center;
                        line-height: 50px;
                        color: #333333;
                        &:last-child {
                            margin-right: 0;
                        }
                        &:hover {
                            color: #FF6600;
                            border: solid 1px #FF6600;
                        }
                        &.checked {
                            color: #FF6600;
                            border: solid 1px #FF6600;
                        }
                    }
                }
            }
            .product-amount {
                margin-top: 50px;
                background: #FAFAFA;
                width: 584px;
                height: 108px;
                padding-top: 24px;
                padding-left: 30px;
                padding-right: 30px;
                box-sizing: border-box;
                .product-total-info {
                    color: #333333;
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                    .product-name {

                    }
                }
                .total {
                    font-size: 24px;
                    margin-top: 18px;
                    color: #FF6600;
                }
            }
            .buy {
                display: flex;
                margin-top: 30px;
                .btn-wrap {
                    margin-right: 21px;
                    &:last-child {
                    margin-right: 0;
                    }
                }
            }
        }
    }
}

</style>