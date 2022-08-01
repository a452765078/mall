<template>
<div class="cart">
    <header-vue></header-vue>
    <order-vue>
        <template #title>
            <h4>我的购物车<span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span></h4>
        </template>
    </order-vue>
    <div class="cart-inner">
        <div class="container">
            <div class="data-list">
                <!-- 购物车 头部 -->
                <div class="data-title">
                    <div class="checked-box">
                        <i class="checkbox" @click="toggleSelect" :class="{'Selected':selectedAll}">√</i>
                        <span class="allChecked">全选</span>
                    </div>
                    <div class="product-name">商品名称</div>
                    <div class="price">单价</div>
                    <div class="quatity">数量</div>
                    <div class="subtotal">小计</div>
                    <div class="operate">操作</div>
                </div>
                <!-- 购物车列表数据 -->
                <ul>
                    <li v-for="(item,index) in cartProductVoList" :key="index">
                        <div class="data-content">
                            <div class="checked-box">
                                <i class="checkbox" @click="updateProductSelected(item)" :class="{'Selected':item.productSelected}">√</i>
                            </div>
                            <div class="product-name">
                                <div class="product-inner">
                                    <img :src="item.productMainImage" />
                                    <span>{{item.productName}}</span>
                                </div>
                                
                            </div>
                            <div class="price">{{item.productPrice}}</div>
                            <div class="quatity">
                                <div class="quatity-inner">
                                    <button class="minus" @click="minusQuantity(item)">-</button>
                                    <span>{{item.quantity}}</span>
                                     <button class="add" @click="addQuantity(item)">+</button>
                                </div>
                               
                            </div>
                            <div class="subtotal">{{item.productTotalPrice}}</div>
                            <div class="operate" @click="deleteCart(item)">
                                    <img src="/imgs/icon-close.png" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 购物车数据汇总 -->
            <div class="bottom clearfix">
                <div class="total-quatity fl">
                    继续购物
                    <span class="total-quatity-inner">
                        共<span class="all-quatity">{{cartTotalQuantity}}</span>件商品，已选择<span class="select-quatity">{{SelectQuantity}}</span>件
                    </span>
                </div>
                <div class="buy-operate fr" @click="order">
                    <button-vue :btnType="'largeMax'">
                        <template #btn-content>去结算</template>
                    </button-vue>
                </div>
                <div class="total-amount fr">
                    合计：<span class="total-price">{{cartTotalPrice}}</span>元
                </div>
                
            </div>
        </div>
    </div>
    <footer-vue></footer-vue>
</div>    
</template>
<script>
import HeaderVue from "../components/Header.vue";
import OrderVue from '../components/OrderHeader.vue';
import FooterVue from "../components/Footer.vue";
import ButtonVue from "../components/Button.vue";
export default {
    name: 'cart',
    components: {
        HeaderVue,
        OrderVue,
        FooterVue,
        ButtonVue
    },
    data() {
        return {
            cartProductVoList:[],
            cartTotalPrice:0,
            selectedAll: false,
            cartTotalQuantity: 0,
            SelectQuantity:0
        }
    },
    mounted() {
        this.getCartList();
    },
    methods: {
        handleCartListData(res) {
            console.log(res);
            this.cartProductVoList = res.cartProductVoList;
            this.cartTotalPrice = res.cartTotalPrice;
            this.cartTotalQuantity = res.cartTotalQuantity;
            let seletctQuantity = 0;
            res.cartProductVoList.filter(item=>item.productSelected).map(item=>{
                seletctQuantity = seletctQuantity + item.quantity;
            })
            this.SelectQuantity = seletctQuantity;
            this.selectedAll = res.selectedAll;
        },
        getCartList() {
            this.axios.get('/carts').then((res)=>{
                this.handleCartListData(res)
            })
        },
        minusQuantity(product) {
            if(product.quantity == 1) {
                window.alert("商品数量不能为0")
            }else {
                let quantity = product.quantity - 1;
                this.axios.put(`/carts/${product.productId}`,{
                    quantity,
                    selected: true
                }).then((res)=>{
                    this.handleCartListData(res)
                })
            }
        },
        addQuantity(product) {
            if(product.quantity == product.productStock) {
                window.alert("商品数量不能超过库存")
            }else {
                let quantity = product.quantity + 1;
                this.axios.put(`/carts/${product.productId}`,{
                    quantity,
                    selected: true
                }).then((res)=>{
                    this.handleCartListData(res) 
                })
            }
        },
        deleteCart(product) {
            let productId = product.productId;
            this.axios.delete(`/carts/${productId}`).then((res) => {
               this.handleCartListData(res)
            })
        },
        updateProductSelected(product) {
            let selected = !product.productSelected;
            let productId = product.productId;
            this.axios.put(`/carts/${productId}`,{
                selected
            }).then(res=>{
                this.handleCartListData(res)
            })
        },
        toggleSelect() {
            console.log("调用了")
            if(this.selectedAll) {
                this.axios.put('/carts/unSelectAll').then((res)=>{
                    this.handleCartListData(res)
                })
            }else {
                this.axios.put('/carts/selectAll').then((res)=>{
                    this.handleCartListData(res);
                })
            }
        },
        order() {
            let isChecked = this.cartProductVoList.some(item=>item.productSelected);
            if(isChecked) {
                this.$router.push('/order/confirm')
            }else {
                window.alert("需要选中一件商品");
            }
        }
        
    }
}
</script>
<style lang="scss">
// .checked {
//     checked: true
// }

.cart {
    .cart-inner {
        background: #F5F5F5;
        padding-top: 20px;
        padding-bottom: 114px;
        .data-list {
            background: #ffffff;
            margin-top: 15px;
            padding-left:43px;
            padding-right: 43px;
            .data-title {
                font-size: 14px;
                color: #666666;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 86px;
                line-height: 86px;
                border-bottom: 1px solid #F5F5F5;
                text-align: center;
                .checked-box {
                    .checkbox {
                        display: inline-block;
                        margin-right: 20px;
                        border: none;
                        width: 22px;
                        height: 22px;
                        line-height: 22px;
                        font-size: 16px;
                        font-weight: bold;
                        text-align: center;
                        color: #ffffff;
                        vertical-align: middle;
                        cursor: pointer;
                        border: solid 1px #E5E5E5;
                        &:hover {
                            color: #333333;
                        }
                    }
                    .Selected {
                        background: #FF6600;
                        color: #E5E5E5;
                        &:hover {
                            color: #E5E5E5;;
                        }
                    }
                    
                }
                .checked-box {
                    width: 80px;
                }
                .product-name {
                    width: 300px;

                    // text-align: center;
                }
                .quatity {
                    width: 200px;
                    // text-align: center;
                }
                .price {
                    width: 100px;
                }
                .subtotal {
                    width: 80px;
                }
                .operate {
                    width: 100px;
                }
            }
            .data-content {
                font-size: 18px;
                color: #333333;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 100px;
                line-height: 100px;
                border-bottom: 1px solid #F5F5F5;
                text-align: center;
                .checked-box {
                    .checkbox {
                        display: inline-block;
                        margin-right: 20px;
                        border: none;
                        width: 22px;
                        height: 22px;
                        line-height: 22px;
                        font-size: 16px;
                        font-weight: bold;
                        text-align: center;
                        color: #ffffff;
                        vertical-align: middle;
                        cursor: pointer;
                        border: solid 1px #E5E5E5;
                        &:hover {
                            color: #333333;
                        }
                    }
                    .Selected {
                        background: #FF6600;
                        color: #E5E5E5;
                        &:hover {
                            color: #E5E5E5;;
                        }
                    }
                    
                }
                .product-name {
                    width: 300px;
                    // text-align: left;

                    .product-inner {
                        display: flex;
                        justify-items: center;
                        align-items: center;
                        width: 250px;
                        img {
                        width: 80px;
                        height: 80px;
                    }
                    }
    
                }
                .quatity {
                    width: 200px;
                    .quatity-inner {
                        width: 150px;
                        height: 40px;
                        margin: 0 auto;
                        border: 1px solid #E5E5E5;
                        display: flex;
                        button,span {
                            display: inline-block;
                            height: 40px;
                            width: 50px;
                            border: none;
                            line-height: 40px;
                            text-align: center;
                            font-size: 14px;
                        }
                        .minus {
                            cursor: pointer;
                        }
                        .add {
                            cursor: pointer;
                        }
                    }
                    // text-align: center;
                }
                .price {
                    width: 100px;
                }
                .subtotal {
                    width: 80px;
                }
                .operate {
                    width: 100px;
                    cursor: pointer;
                    img {
                        width: 14px;
                        height: 12px;
                    }
                }
            }
            // 购物车表格宽高
        }
        .bottom {
            height: 50px;
            line-height: 50px;
            margin-top: 20px;
            font-size: 14px;
            .total-quatity {
                .total-quatity-inner {
                    margin-left: 37px;
                    .all-quatity {
                        padding-left: 5px;
                        padding-right: 5px;
                        color: #FF6600;
                    }
                    .select-quatity {
                        padding-left: 5px;
                        padding-right: 5px;
                        color: #FF6600;
                    }
                }
                
            }
            .total-amount {
                color: #FF6700;
                font-size: 14px;
                margin-right: 31px;
                span {
                    font-size: 18px;
                    font-weight: bold;
                }
            }
            .buy-operate {
                
            }
        }
    }
}
</style>