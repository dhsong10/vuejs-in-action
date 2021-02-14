<template>
  <div>
    <AppHeader :size="cartSize" />
    <ProductList @cart:update="onUpdateCart" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Home',
  components: {
    AppHeader,
    ProductList,
  },
  data() {
    return {
      cartSize: 0,
    };
  },
  methods: {
    onUpdateCart(cartSize) {
      this.cartSize = cartSize;
    },
  },
};
</script>
