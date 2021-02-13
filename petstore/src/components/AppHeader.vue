<template>
  <b-navbar class="p-3" type="dark" variant="dark">
    <b-navbar-brand class="ml-3" href="/">{{ sitename }}</b-navbar-brand>

    <b-navbar-nav class="ml-auto mr-3">
      <b-button variant="primary">
        <i class="fa fa-cart-arrow-down mr-3" /> 체크아웃
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
};
</script>
