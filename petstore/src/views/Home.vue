<template>
  <div>
    <AppHeader :size="carts.length" @checkout:show="closeProduct" />
    <ProductList v-if="showProduct" @cart:update="onUpdateCart" />
    <CheckoutForm v-else @checkout:hide="openProduct" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import ProductList from '@/components/ProductList.vue';
import CheckoutForm from '@/components/CheckoutForm.vue';

export default {
  name: 'Home',
  components: {
    AppHeader,
    ProductList,
    CheckoutForm,
  },
  data() {
    return {
      carts: [],
      showProduct: true,
    };
  },
  methods: {
    onUpdateCart(carts) {
      this.carts = carts;
    },
    closeProduct() {
      this.showProduct = false;
    },
    openProduct() {
      this.carts = [];
      this.showProduct = true;
    },
  },
};
</script>
