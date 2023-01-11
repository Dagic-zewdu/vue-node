<template>
  <input type="text" :value="countryCode.dial_code" disabled class="w-20 p-2 border rounded" />
  <div class="w-96 mr-10">
    <input
      type="number"
      @change="handlePhoneNumber"
      placeholder="Phone number"
      :class="[error ? 'p-2 w-full   border border-red-700 rounded' : 'p-2 w-full border rounded']"
    />
    <p v-if="error" class="text-red-700">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    countryCode: String,
    handleChange: Function,
    error: String,
  },
  methods: {
    handlePhoneNumber(e) {
      this.handleChange(e, this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
