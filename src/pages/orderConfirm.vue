<template>
    <div class="orderConfirm">
        <header-vue></header-vue>
        <order-header-vue>
            <template #title>
                <h4>确认订单<span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span></h4>
            </template>
        </order-header-vue>
        <div class="orderConfirm-inner">
            <div class="container">
                <div class="orderConfirm-box">
                    <h4 class="receivAddress">收货地址</h4>
                    <div class="addressListWrap">
                        <div class="addressList clearfix">
                            <div class="item fl" v-for="(item,index) in addressList" :key="index" :class="{'checkedbox':checkedIndex === index}" @click="checkedIndex=index">
                                <h5 class="name">{{item.receiverName}}</h5>
                                <p class="number">{{item.receiverMobie}}</p>
                                <p class="address">
                                    <span class="ad1 detail">{{item.receiverProvince}}</span>&nbsp;
                                    <span class="ad2 detail">{{item.receiverCity}}</span>&nbsp;
                                    <span class="ad3 detail">{{item.receiverDistrict}}</span>&nbsp;
                                    <span class="ad4 detail">{{item.receiverAddress}}</span>
                                </p>
                                <div class="operation">
                                    <div class="icon-del" @click="delAddress(item)">删除</div>
                                    <div class="icon-edit" @click="editAddress(item)">编辑</div>
                                </div>
                            </div>
                            <div class="addAddress fl">
                                <div class="button" @click="addAddress">+</div>
                            </div>
                        </div>
                    </div>
                    <div class="selectedProductListWrap">
                        <h4 class="title">商品</h4>
                        <div class="splitLine-inner"></div>
                        <div class="selectedProductList">
                            <div class="product" v-for="(item,index) in cartListSelected" :key="index">
                                <img :src="item.productMainImage" alt="" class="img table-cell">
                                <span class="name table-cell">{{item.productName}}&nbsp;{{item.productSubtitle}}</span>
                                <span class="priceAndCount table-cell">{{item.productPrice}}元X{{item.quantity}}</span>
                                <span class="total table-cell">{{item.productTotalPrice}}元</span>
                            </div>
                        </div>
                    </div> 
                    <div class="splitLine"></div>
                    <div class="addressMethod">
                        <span class="method">配送方式</span><span class="name">包邮</span>
                    </div>
                    <div class="invoiceWrap">
                        <span class="invoice">发票</span>
                        <span class="item">电子发票</span>
                        <span class="item">个人</span>
                        <span class="item">商品明细</span>
                    </div>
                    <div class="orderTotalWrap">
                        <div class="orderTotal">
                            <div class="item">
                                <span class="title">商品件数：</span>
                                <span class="content">{{quantity}}件</span>
                            </div>
                            <div class="item">
                                <span class="title">商品总价：</span>
                                <span class="content">{{productTotalPrice}}元</span>
                            </div>
                            <div class="item">
                                <span class="title">优惠活动：</span>
                                <span class="content">{{activity}}元</span>
                            </div>
                            <div class="item">
                                <span class="title">运费：</span>
                                <span class="content">{{translate}}元</span>
                            </div>
                            <div class="item total">
                                <span class="title">应付总额：</span>
                                <span class="content totalAmount">{{total}}元</span>
                            </div>
                        </div>
                    </div>
                    <div class="splitLine"></div>
                    <div class="btn-group clearfix">
                        <div class="item fr" @click="submitOrder">
                            <button-vue :isBgColorGray="false" :btnType="'largeMax'">
                                <template #btn-content>
                                    去结算
                                </template>
                            </button-vue>
                        </div> 
                        <div class="item fr">
                            <button-vue :isBgColorGray="true" :btnType="'largeMax'">
                                <template #btn-content>
                                    返回购物车
                                </template>
                            </button-vue>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modal-vue :type="'2'" :showModal="showModal0">
            <template #header>
                地址操作
            </template>
            <template #body>
                确认是否要删除该地址！
            </template>
            <template #footer>
                <div class="btn-wrap" @click="submitAddressAction">
                    <button-vue>
                            <template #btn-content>确定</template>
                    </button-vue>
                </div>
                <div class="btn-wrap" @click="showModal0=false">
                    <button-vue :isBgColorGray="true">
                        <template #btn-content>取消</template>
                    </button-vue>
                </div>    
            </template>
        </modal-vue>
        <modal1-vue :showModal1="showModal1" modalType="normal" header="添加收货地址">
            <template #body>
                <div class="bodyInner">
                    <div class="item">
                        <input type="text" class="input" placeholder="姓名" v-model="address.receiverName">
                        <input type="text" class="input" placeholder="手机号" v-model="address.receiverPhone">
                    </div>
                    <div class="item">
                        <select name="" id="" class="province" v-model="address.receiverProvince">
                            <option value="广东省">广东省</option>
                            <option value="山东省">山东省</option>
                            <option value="河北省">河北省</option>
                        </select>
                        <select name="" id="" class="city" v-model="address.receiverCity">
                            <option value="深圳市">深圳市</option>
                            <option value="广州市">广州市</option>
                            <option value="佛山市">佛山市</option>
                        </select>
                        <select name="" id="" class="strict" v-model="address.receiverDistrict">
                            <option value="宝安区">宝安区</option>
                            <option value="罗湖区">罗湖区</option>
                            <option value="福田区">福田区</option>
                        </select>
                    </div>
                    <div class="item">
                        <textarea name="" id="" cols="30" rows="10" class="address" placeholder="详细地址" v-model="address.receiverAddress">

                        </textarea>
                    </div>
                    <div class="item">
                        <input type="text" class="number" placeholder="邮政编号" v-model="address.receiverZip">
                    </div>
                </div>
            </template>
            <template #footer>
                <button1-vue btnType="group" @confirm="submitAddressAction" @cancel="closeAddressAction"></button1-vue>
            </template>
        </modal1-vue>
        <footer-vue></footer-vue>
    </div>
</template>
<script>
import HeaderVue from '../components/Header.vue';
import OrderHeaderVue from '../components/OrderHeader.vue';
import FooterVue from '../components/Footer.vue';
import ButtonVue from '../components/Button.vue';
import Button1Vue from '../components/Button1.vue';
import ModalVue from '../components/Modal.vue';
import Modal1Vue from '../components/Modal1.vue';
export default {
    name:'orderConfirm',
    components: {
        HeaderVue,
        OrderHeaderVue,
        FooterVue,
        ButtonVue,
        Button1Vue,
        ModalVue,
        Modal1Vue
    },
    data() {
        return {
            addressList:[],
            cartListSelected:[],
            quantity:0,
            productTotalPrice:0,
            activity:0,
            translate:0,
            total:0,
            showModal0: false,
            curShippingId:'',
            showModal1: false,   // 添加编辑收货地址需要显示的弹框,
            action:'',
            address:{},     // 地址数据模型
            checkedIndex:''        
        }
    },
    mounted() {
        this.getAddressList();
        this.getCartListSelected();
    },
    methods: {
        getAddressList() {
            this.axios.get('/shippings').then(res=>{
                this.addressList = res.list;
            })
        },
        getCartListSelected() {
            this.axios.get('/carts').then(res => {
                this.cartListSelected = res.cartProductVoList.filter((item)=>item.productSelected);
                let quantity = 0,productTotalPrice = 0;
                this.cartListSelected.forEach(item=>{
                    quantity = quantity + item.quantity;
                    productTotalPrice = productTotalPrice + item.productTotalPrice;
                })
                this.quantity = quantity;
                this.productTotalPrice = productTotalPrice;
                this.total = this.productTotalPrice + this.activity + this.translate;
            })
        },
        // showModalAddress(id) {
        //     this.isShowModalAddress = true;
        //     this.curShippingId = id;
        // },
        delAddress(item) {
            // this.axios.delete(`/shippings/${this.curShippingId}`).then(res=>{
            //     console.log("删除结果:",res);
            //     this.isShowModalAddress = false;
            // })
            // this.getAddressList();
            this.showModal0 = true;
            this.action = 'del';
            this.address = JSON.parse(JSON.stringify(item));
        },
        addAddress() {
            this.showModal1 = true;
            this.action = 'add';
        },
        editAddress(item) {
            this.showModal1 = true;
            this.action = 'edit';
            this.address =  JSON.parse(JSON.stringify(item));
        },
        submitAddressAction() {
            let url = '';
            let method = 'get'
            if(this.action == 'add') {
                url = `/shippings`;
                method = 'post'
            }else if(this.action == 'edit') {
                url = `/shippings/${this.address.id}`  
                method = 'put'
            }else if(this.action == 'del') {
                url = `/shippings/${this.address.id}`  
                method = 'delete'
            }
            let {receiverName,receiverPhone,receiverAddress,receiverZip} = this.address;
            let errMsg = '';
            if(!receiverName) {
                errMsg = "请输入收货人名称"
            }else if(!receiverPhone || /\d{12}/.test(receiverPhone)) {
                errMsg = "请输入正确的电话号码"
            }else if(!receiverAddress) {
                errMsg = "请输入详细收货地址"
            }else if(!receiverZip || /\d{6}/.test(receiverZip)) {
                errMsg = "请输入正确的邮政编码"
            }

            if(errMsg) {
                this.$message.error(errMsg)
                return
            }

            this.axios[method](url,{...this.address}).then(res=>{
                this.$message.success("操作成功",res)
                this.closeAddressAction();
                this.getAddressList();
            }).catch(err=>{
                this.$message.error(err)
            })
        },
        closeAddressAction() {
            this.showModal1 = false;
            this.showModal0 = false;
            this.address = {};
            this.action = {};
        },
        submitOrder() {
            if(this.checkedIndex === '') {
                this.$message.warning("请选择地址")
                return
            }
            let item = this.addressList[this.checkedIndex];
            this.axios.post('/orders',{
                shippingId:item.id
            }).then(res=>{
                console.log(res)
                this.$message.success("操作成功");
                this.$router.push({
                    path: 'detail',
                    query: {
                        orderNo: res.orderNo
                    }
                })  // TODO
            }).catch((err)=>{
                this.$message.error(`报错了,报错信息：${err}`);
            })
        }
    }
}
</script>
<style lang="scss">
.orderConfirm {
    .orderConfirm-inner {
        background: #efefef;
        padding-top: 30px;
        padding-bottom: 204px;
        .orderConfirm-box {
            background: #FFFFFF;
            width: 100%;
            min-height: 844px;
            padding: 38px 63px;
            box-sizing: border-box;
            .receivAddress {
                font-weight: normal;
                font-size: 20px;
            }
            .addressListWrap {
                padding: 21px 0;
                margin-bottom: 40px;
                .addressList {
                    .item {
                        width: 265px;
                        height: 180px;
                        border: 1px solid #E5E5E5;
                        margin-right: 10px;
                        margin-top: 8px;
                        font-size: 14px;
                        padding: 20px;
                        box-sizing: border-box;
                        color: #b0b0b0;
                        position: relative;
                        &.checkedbox {
                            border: solid 1px #FF6700
                        }
                        .name {
                            font-size: 20px;
                            color: #333333;
                            font-weight: normal;
                        }
                        .number {
                            margin-top: 8px;
                        }
                        .address {
                            font-size: 14px;
                            white-space: nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            .detail {
                                // white-space: nowrap;
                                // text-overflow:ellipsis;
                            }
                        }
                        .operation {
                            margin-top: 46px;
                            position: absolute;
                            bottom: 15px;
                            .icon-del,.icon-edit {
                                cursor: pointer;
                                display: inline-block;
                            }
                            .icon-edit {
                                margin-left: 155px;
                            }
                        }
                    }
                    .addAddress {
                        width: 265px;
                        height: 180px;
                        border: 1px solid #E5E5E5;
                        margin-right: 0px;
                        margin-top: 8px;
                        position: relative;
                        box-sizing: border-box;
                        .button {
                            width: 30px;
                            height: 30px;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                            background: #efefef;
                            cursor: pointer;
                            text-align: center;
                            line-height: 28px;
                            font-size: 30px;
                            color: #FFFFFF;
                            border-radius: 50%;
                        }
                    }
                }
            }
            .selectedProductListWrap {
                .splitLine-inner {
                    margin-top: 20px;
                    width: 100%;
                    height: 1px;
                    background: #E5E5E5;
                }
                .selectedProductList {
                    .product {
                        height: 55px;
                        line-height: 55px;
                        display: table-row;
                        .table-cell {
                            display: table-cell;
                        }
                        .img {
                            width: 20px;
                            height: 30px;
                            position: relative;
                            padding-right: 12px;
                            top: 8px;
                        }
                        .name {
                            width: 600px;
                        }
                        .priceAndCount {
                            width: 300px;
                        }
                        .total {
                            width: 185px;
                            text-align: right;
                        }
                    }
                }
            }
            .splitLine {
                width: 100%;
                height: 1px;
                background: #E5E5E5;
            }
            .addressMethod {
                margin-top: 31px;
                .method {
                    font-size: 20px;
                    color: #333333;
                    font-weight: 500;
                    display: inline-block;
                    width: 150px;
                }
                .name {
                    font-size: 16px;
                    color: #FF6700;
                    font-weight: bold;
                    display: inline-block;
                    text-align: left;
                }
            }
            .invoiceWrap {
                margin-top: 40px;
                .invoice {
                    font-size: 20px;
                    color: #333333;
                    font-weight: 500;
                    display: inline-block;
                    width: 150px;    
                }
                .item {
                    font-size: 16px;
                    color: #FF6700;
                    font-weight: bold;
                    display: inline-block; 
                    text-align: left;
                }
            }
            .orderTotalWrap {
                box-sizing: border-box;
                min-height: 200px;
                padding-top: 50px;
                margin-bottom: 30px;
                position: relative;
                .orderTotal {
                    font-size: 16px;
                    position: absolute;
                    right: 0;
                    .item {
                        position: relative;
                        width: 206px;
                        height: 20px;
                        line-height: 20px;
                        margin-bottom: 12px;
                        text-align: right;
                        font-size: 16px;
                        .title {
                            display: block;
                            position: absolute;
                            left: 0;
                            width: 124px;
                            white-space: nowrap;

                        }
                        .content {
                            display: block;
                            position: absolute;
                            right: 0;
                            width: 76px;
                            font-size: 14px;
                            color: #FF6700;
                            white-space: nowrap;
                        }
                        .totalAmount {
                            font-size: 22px;
                        }
                    }
                }
            }
            .btn-group {
                padding-top: 37px;
                .item {
                    margin-left: 20px;
                    &:last-child {
                        margin-right: 0px;
                    }
                }
            }
        }
    }
    .modal {
        .footer {
            display: flex;
            .btn-wrap {
                margin-right: 15px;
            }
        }
    }
    .modal1 {
        .content {
            .body {
                .item {
                    margin-bottom: 15px;
                    input {
                        width: 283px;
                        height: 40px;
                        line-height: 40px;
                        border: 1px solid #E5E5E5;
                        padding-left: 15px;
                        box-sizing: border-box;
                        margin-left: 12px;
                        display: inline-block;
                    }
                    select {
                        width: 150px;
                        height: 40px;
                        line-height: 40px;
                        border: solid 1px #E5E5E5;
                        padding-left: 15px;
                        box-sizing: border-box;
                        margin-left: 12px;
                    }
                    textarea {
                        width: 579px;
                        height: 62px;

                        border: solid 1px #E5E5E5;
                        padding: 12px;
                        box-sizing: border-box;
                        margin-left: 12px;
                    }
                }
            }
        }
    }
}
</style>