<template>
  <b-row class="my-3">
    <b-col md="6" class="text-center">
      <img
        :src="product.image"
        :alt="product.title"
        style="width: 300px; height: 300px"
      />
    </b-col>
    <b-col align-self="center">
      <h1>{{ product.title }}</h1>
      <p v-html="product.description" />
      <p class="text-sm-left">$ {{ product.price | priceToDollar }}</p>
      <p>
        <b-button variant="primary"> 장바구니 담기</b-button>
        <span class="font-weight-bold mx-3">지금 구매하세요!</span>
        <span v-for="counter in product.rating" :key="`fill-${counter}`">
          ★
        </span>
        <span v-for="counter in 5 - product.rating" :key="`empty-${counter}`">
          ☆
        </span>
      </p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  filters: {
    priceToDollar(value) {
      return (parseInt(value) / 100).toFixed(2);
    },
  },
};
</script>

<style></style>
