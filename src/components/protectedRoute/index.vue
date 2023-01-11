<template>
  <slot v-if="show" />
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  async beforeMount() {
    let token = localStorage.getItem('Token');
    if (!token) {
      this.$router.push('login');
    }
    this.show = true;
  },
};
</script>

<style lang="scss" scoped></style>
