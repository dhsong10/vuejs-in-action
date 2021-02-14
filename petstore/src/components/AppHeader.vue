<template>
  <b-navbar class="p-3" type="dark" variant="dark">
    <b-navbar-brand class="ml-3" href="/">{{ sitename }}</b-navbar-brand>

    <b-navbar-nav class="ml-auto mr-3">
      <b-button variant="primary" @click="showCheckout">
        <i class="fa fa-cart-arrow-down" />
        <span class="mx-1" v-if="size > 0">{{ size }}</span>
        체크아웃
      </b-button>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      sitename: 'Vue.js 애완동물샵',
    };
  },
  props: {
    size: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    showCheckout() {
      this.$emit('checkout:show');
    },
  },
};
</script>
