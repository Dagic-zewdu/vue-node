<template>
  <ProtectedRoute>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </ProtectedRoute>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ProtectedRoute from '../components/protectedRoute/index.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ProtectedRoute,
  },
};
</script>
