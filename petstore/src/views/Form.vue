<template>
  <div>
    <AppHeader />
    <CheckoutForm />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import CheckoutForm from '@/components/CheckoutForm.vue';

export default {
  name: 'Form',
  components: {
    AppHeader,
    CheckoutForm,
  },
  data() {
    return {};
  },
};
</script>
