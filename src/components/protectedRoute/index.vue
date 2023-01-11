<template>
  <slot v-if="show" />
</template>

<script>
import baseUrl from '@/api';
export default {
  data() {
    return {
      show: true,
    };
  },
  async beforeMount() {
    let token = localStorage.getItem('Token');
    if (!token) {
      this.show = false;
      this.$router.push('login');
    }
    const res = await baseUrl({ Token: token }).get('/user');
    if (res.status !== 200) {
      this.show = false;
      this.$router.push('login');
    }
    this.show = true;
  },
};
</script>

<style lang="scss" scoped></style>
