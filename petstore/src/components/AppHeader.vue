<template>
  <b-navbar class="p-3" type="dark" variant="dark">
    <b-navbar-brand class="ml-3" href="/">{{ sitename }}</b-navbar-brand>

    <b-navbar-nav class="ml-auto mr-3">
      <router-link
        class="btn btn-primary"
        active-class="disabled cursor-none"
        to="/form"
      >
        <i class="fa fa-cart-arrow-down" />
        <span class="mx-1" v-if="size > 0">{{ size }}</span>
        체크아웃
      </router-link>
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
  computed: {
    size() {
      return this.$store.getters.cartSize;
    },
  },
};
</script>

<style scoped>
.cursor-none {
  cursor: none;
}
</style>
