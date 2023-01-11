<template>
  <ProtectedRoute>
    <div>
      <UpdateProfileVue />
    </div>
  </ProtectedRoute>
</template>

<script>
import UpdateProfileVue from '../components/updateProfile/updateProfile.vue';
import ProtectedRoute from '../components/protectedRoute/index.vue';

export default {
  components: {
    UpdateProfileVue,
    ProtectedRoute,
  },
};
</script>

<style lang="css" scoped></style>
