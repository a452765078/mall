<template>
<div>
  <header-vue></header-vue>
  <nav-vue></nav-vue>
  <menu-vue></menu-vue>
  <footer-vue></footer-vue>
  <modal-vue :type="2">
    <template #header>
      <h1>标题</h1>
    </template>
    <template #body>
      <p>添加购物车成功</p>
    </template>
    <template #footer>
      <p><button>确定</button><button>取消</button></p>
    </template>
  </modal-vue>
</div>
</template>

<script>
import HeaderVue from "../components/Header.vue";
import NavVue from "../components/Nav.vue";
import MenuVue from "../components/Menu.vue";
import FooterVue from '../components/Footer.vue';
import ModalVue from '../components/Modal.vue';
export default {
  name: 'Home',
  components:{
    HeaderVue,
    NavVue,
    MenuVue,
    FooterVue,
    ModalVue
  },
  mounted() {
  }
}
</script>

<style lang="scss">

</style>
