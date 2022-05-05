<template>
<div class="Menu">
    <div class="wrap">
        <div class="nav">
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="javascript:;" class="item-category">手机 电话卡</a>
                    <div class="children">
                        <ul>
                            <li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li><li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#" class="item-category">电视 盒子</a>
                    <div class="children">
                        <ul>
                            <li>
                                <a href="#" class="product-item">
                                    <img src="../../public/imgs/item-box-1.png" alt="">
                                    <p>小米9</p>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#" class="item-category">笔记本 平板</a>
                    <div class="children"></div>
                </li>
            </ul>
        </div>
        <div class="window">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="item in slideList" :key="item.id">
                    <a :href="item.id"><img class="sliderImg" :src="item.img" alt=""></a>
                </swiper-slide>
                <!-- 分页器，也叫指示器，就是底部的小圆点 -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            
            <!-- 导航器，左右切换按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="ad">
            <ul>
                <li v-for="ad in adList" :key="ad.id" class="item">
                    <a href="javascript:;">
                        <img :src="ad.img" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div class="banner">
            <a href="javascript:;">
                <img :src="banner.img" alt="">
            </a>
        </div>
        <div class="productList">
            <div class="left">
                <h3 class="title">手机</h3>
                <a class="logo">
                    <img src="/imgs/mix-alpha.jpg" alt="">
                </a>
            </div>
            <div class="right">
                <ul>
                    <li v-for="product in productList" :key="product.id">
                        <a href="javasript:;" class="product">
                            <p class="remark">{{product.remark}}</p>
                            <p class="img"><img :src="product.img" alt=""></p>
                            <p class="name">{{product.name}}</p>
                            <p class="detail">{{product.detail}}</p>
                            <p class="price">{{product.price}}</p>
                        </a>
                    </li>    
                </ul>
            </div>
            <div class="back"></div>
        </div>

    </div>

</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  name: 'Menu',
  components: {
      Swiper,
      SwiperSlide
  },
  data() {
      return {
        swiperOptions: {
            // 分页器
            pagination: {
                el: '.swiper-pagination',   // 分页器元素
                clickable: true   // 点击分页器切换
            },
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',   
          },
          autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
          },
          effect: "coverflow"
        },
        slideList: [
            {
                id: '1',
                img: '/imgs/slider/slide-1.jpg'
            },
            {
                id: '2',
                img: '/imgs/slider/slide-2.jpg'
            },
            {
                id: '3',
                img: '/imgs/slider/slide-3.jpg'
            },
            {
                id: '4',
                img: '/imgs/slider/slide-4.jpg'
            },
            {
                id: '5',
                img: '/imgs/slider/slide-5.jpg'
            },
            
        ],
        adList:[
            {
                id:'1',
                img:'/imgs/ads/ads-1.png',
                src:''
            },
            {
                id:'2',
                img:'/imgs/ads/ads-2.jpg',
                src:''
            },
            {
                id:'3',
                img:'/imgs/ads/ads-3.png',
                src:''
            },
            {
                id:'4',
                img:'/imgs/ads/ads-4.jpg',
                src:''
            },  
        ],
        banner:{
            id:'1',
            img:'/imgs/banner-1.png'
        },
        productList:[
            {
                id: '1',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '2',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '3',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '4',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '5',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '6',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '7',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '8',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
        ]
      }
  },
  mounted() {

  },
  methods: {
      testClick() {
          console.log("testClick");
      }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
.Menu {
    .wrap {
        margin: 0 auto;
        width: 1226px;
        position: relative;
            .nav {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9;
            width: 264px;
            height: 451px;
            background: #55585a85;    
            .nav-list {
                margin-top: 26px;
                .nav-item {
                    box-sizing: border-box;
                    padding-left: 30px;
                    width: 264px;
                    height: 50px;
                    line-height: 50px;
                    &:hover {
                        background: #FF6600;
                        .children {
                            display: block;
                        }
                    }
                    .item-category {
                        display: inline-block;
                        width: 224px;
                        height: 50px;
                        font-size: 16px;
                        color: #FFFFFF;
                        position: relative;
                        &:after {
                            content: ' ';
                            display: inline-block;
                            width: 10px;
                            height: 15px;
                            background: url('../../public/imgs/icon-arrow.png') no-repeat center;
                            background-size: 10px 15px;
                            position: absolute;
                            right: 30px;
                            top: 25px;
                            transform: translateY(-50%);
                        }   
                    }
                    .children {
                        display: none;
                        width: 964px;
                        height: 451px;
                        background: #FFFFFF;
                        position: absolute;
                        top: 0;
                        left: 264px;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                        z-index: 9;
                        ul {
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            li {
                                width: 24.8%;
                                height: 75px;

                            }
                            .product-item {
                                    width: 100%;
                                    height: 100%;
                                    display: flex;
                                    align-items: center;
                                    img {
                                        width: 35px;
                                        margin-left: 23px;
                                    }
                                    p {
                                        font-size: 14px;
                                        font-weight: bold;
                                        color: #333333;
                                        margin-left: 15px;
                                    }
                                }
                        }


                    }
                }
            } 
        }
        .window {
            width: 1226px;
            height: 451px;
            position: relative;
            .sliderImg {
                width: 1226px;
                height: 451px;
  
            }
            .swiper-button-prev {
                position: absolute;
                left: 284px;
                top: 50%;
                transform: translate(-50%,-50%);
                z-index: 12;
            }
            .swiper-button-next {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translate(-50%,-50%);
            }
        }
        .ad {
            margin-top: 14px;
            ul {
                @include flex();
                li {
                    margin-right: 14px;
                }
                .item {
                    img {
                        width: 296px;
                        height: 167px;
                    }
                }
                
            }
        }
        .banner {
            margin-top: 31px;
            img {
                width: 1226px;
                height: 130px;
            }
        }
        .productList {
            display: flex;
            width: 1226px;
            height: 740px;
            margin-top: 50px;
            position: relative;
            .left {
                z-index: 9;
                display: flex;
                flex-direction: column;
                .title {
                    font-size: 22px;
                    margin-top: 30px;
                }
                .logo {
                    display: block;
                    margin-top: 20px;
                    img {
                        width: 224px;
                        height: 619px;
                    }
                }
            }
            .right {
                z-index: 9;
                width: 1006px;
                height: 740px;
                ul {
                    margin-top: 64px;
                    display: flex;
                    flex-wrap: wrap;
                    margin-left: 2px;
                    li {
                        width: 236px;
                        height: 302px;
                        background: #FFFFFF;
                        margin-left:14px ;
                        margin-top: 14px;
                    }
                    .product {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .remark {
                            width: 67px;
                            height: 24px;
                            background: #7ECF68;
                            font-size: 14px;
                            font-weight: bold;
                            color: #FFFFFF;
                            line-height: 24px;
                            text-align: center;
                        }
                        .img {
                            width: 190px;
                            height: 195px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            img {
                                width: 178px;
                            }
                        }
                        .name {
                            font-size: 14px;
                            font-weight: bold;
                            color: #333333
                        }
                        .detail {
                            font-size: 12px;
                            font-weight: bold;
                            color: #999999;
                            margin-top: 6px;
                        }
                        .price {
                            font-size: 14px;
                            font-weight: bold;
                            color: #F20A0A;
                            margin-top: 16px;
                            &::after {
                                content: ' ';
                                @include bgImg(20px,20px,'/imgs/icon-cart-hover.png');
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
            .back {
                position: absolute;
                left: -584px;
                top: 0;
                width: 1920px;
                height: 740px;
                background:  #F5F5F5;;
            }
        }
    }
}

</style>
