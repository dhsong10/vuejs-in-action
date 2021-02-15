<template>
  <b-container fluid>
    <Product v-for="product in products" :key="product.id" :product="product" />
  </b-container>
</template>

<script>
import Product from '@/components/Product.vue';
import axios from 'axios';

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [
        {
          id: 1001,
          title: '고양이 사료, 25 파운드',
          description:
            '당신의 고양이를 위한 <em>거부할 수 없는</em>, 유기농 25파운드 사료입니다.',
          price: 2000,
          image: 'images/product-fullsize.png',
          rating: 1,
          availableInventory: 5,
        },
        {
          id: 1002,
          title: '고양이 집',
          description: '고양이가 놀 수 있는 장소!',
          price: 799,
          image: 'images/cat-house.jpg',
          rating: 5,
          availableInventory: 5,
        },
        {
          id: 1003,
          title: '고양이 화장실',
          description: '당신의 고양이를 위한 최고급 화장실입니다.',
          price: 1100,
          image: 'images/cat-litter.jpg',
          rating: 4,
          availableInventory: 5,
        },
        {
          id: 1004,
          title: '레이저 포인터',
          description: '이 <em>놀라운</em> 상품으로 고양이와 놀아주세요',
          price: 4999,
          image: 'images/laser-pointer.jpg',
          rating: 1,
          availableInventory: 5,
        },
        {
          id: 1005,
          title: '실뭉치',
          description:
            '실뭉치로 당신의 고양이에게 <strong>오랜</strong> 놀이시간을 주세요',
          price: 299,
          image: 'images/yarn.jpg',
          rating: 1,
          availableInventory: 5,
        },
      ],
      carts: [],
    };
  },
  created() {
    axios.get('data/products.json').then(response => {
      this.products = response.data.products;
    });
  },
};
</script>

<style></style>
