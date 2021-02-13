<template>
  <div>
    <AppHeader />
    <ProductList />
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
};
</script>
