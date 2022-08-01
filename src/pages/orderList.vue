<template>
  <div class="orderList">
      <order-header>
        <template #title>
            <h4>订单列表</h4>
        </template>
      </order-header>
      <div class="orderListBody">
        <div class="container">
          <div class="orderListBox">
            <div class="orderItemList">
              <div class="orderItem" v-for="(item,index) in list" :key="index">
                <div class="itemHeader">
                  <span class="orderInfo fl">{{item.createTime}} | {{item.receiverName}} | 订单号： {{item.orderNo}} | {{item.paymentTypeDesc}}</span>
                  <span class="orderAmount fr">应付金额：
                    <span>{{item.payment}}</span>
                    元
                  </span>
                </div>
                <div class="itemBody clearfix">
                  <div class="itemList fl">
                    <div class="item" v-for="(item_,index) in item.orderItemVoList" :key="index">
                      <div class="img">
                        <img :src="item_.productImage" alt="">
                      </div>
                      <div class="desc">
                        <div class="productName">{{item_.productName}}</div>
                        <div class="productPrice">{{item_.totalPrice}}元 X {{item_.quantity}}</div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="img">
                        <img src="/imgs/detail/phone-1.jpg" alt="">
                      </div>
                      <div class="desc">
                        <div class="productName">Redmi Note 8 4GB+64GB 皓月白 64GB</div>
                        <div class="productPrice">999元 X 2</div>
                      </div>
                    </div>
                  </div>
                  <div class="link fl">
                    <a href="javascript:;">{{item.statusDesc==='未支付'?'立即付款':'已支付'}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="loadMoreOrderList" @click="loadMoreOrderList" v-if="hasNextPage">
            加载更多
          </div>
          <div class="loadMoreOrderList"  v-infinite-scroll1="loadMoreOrderList" infinite-scroll-disabled="busy"
          infinite-scroll-distance="372">
            加载更多
          </div> -->
            <pagination
    layout="prev, pager, next"
    :total="total"
    :page-size="pageSize"
    :current-page="pageNum"
    @current-change="getOrderListPage"
    >
  </pagination>
        </div>
        
      </div>
      <footer-vue></footer-vue>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue';
import FooterVue from '../components/Footer.vue';
import  infiniteScroll1  from 'vue-infinite-scroll';
import { Pagination } from 'element-ui';

export default {
    name: 'orderList',
    components: { 
        OrderHeader,
        FooterVue,
        Pagination
    },
    data() {
      return {
        total:0,
        list: [],
        orderItemList:[],
        pageSize:4,
        pageNum:1,
        busy:true,
        hasNextPage: true
      }
    },
    directives: {infiniteScroll1},
    mounted() {
      this.getOrderList();
    },
    methods: {
      getOrderListPage(val) {
        this.pageNum = val;
        this.axios.get(`/orders?pageSize=${this.pageSize}&pageNum=${this.pageNum}`).then((res)=>{
        this.list = res.list;
        this.total = res.total;
        })
      },
      getOrderList() {
        this.axios.get(`/orders?pageSize=${this.pageSize}&pageNum=${this.pageNum}`).then((res)=>{
          this.list = this.list.concat(res.list);
          this.total = res.total;
          this.hasNextPage = res.hasNextPage;
          this.busy = false;
          this.pageNum++
        })
      },
      // loadMoreOrderList() {
      //   this.busy = true;
      //   setTimeout(() => {
      //     this.getOrderList();
      //   }, 500);
      // }
    }
}
</script>

<style lang="scss">
.orderListBody {
  padding-top: 33px;
  min-height: 700px;
  box-sizing: border-box;
  background: #F5F5F5;
  .orderListBox {
    .orderItem {
      min-height: 220px;
      border: solid 1px #FF6700;
      margin-bottom: 31px;
      .itemHeader {
        background: #FFFAF7;
        height: 74px;
        line-height: 74px;
        padding-left: 43px;
        padding-right: 43px;
        box-sizing: border-box;
        font-size: 16px;
        color: #666666;
        .orderInfo {
        }
        .orderAmount {
          color: #666666;
          span {
            font-size: 24px;
          }
        }
      }
      .itemBody {
        background: #FFFFFF;
        min-height: 146px;
        .itemList {
          width: 1000px;
          .item {
            display: flex;
            align-items: center;
            .img {
              height: 89px;
              width: 112px;
              display: flex;
              align-items: center;
              img {
                width: 88px;
                height: 65px;
              }
            }
            .desc {
            }
          }
        }
        .link {
          width: 220px;
          height: 146px;
          line-height: 146px;
          text-align: center;
          a {
            color: #FF6600;
            font-size: 20px;
            &::after {
              display: inline-block;
              content: '>';
              color:#FF6600;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  .loadMoreOrderList {
    text-align: center;
    cursor: pointer;
  }
}
</style>