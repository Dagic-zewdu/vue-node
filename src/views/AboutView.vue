<template>
  <ProtectedRoute>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </ProtectedRoute>
</template>

<script>
import ProtectedRoute from '../components/protectedRoute/index.vue';
export default {
  components: {
    ProtectedRoute,
  },
};
</script>
