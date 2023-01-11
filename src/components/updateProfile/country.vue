<template>
  <select
    name=""
    :value="value"
    aria-placeholder="country"
    @change="handleCountryChange"
    class="p-2 w-96 mr-10 border rounded"
  >
    <option value="" selected>Select country code</option>
    <option v-for="country in countries" :key="country.code" :value="country.code">
      {{ country.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    id: String,
    countries: Array,
    handleChange: Function,
    value: String,
  },
  methods: {
    handleCountryChange(e) {
      this.handleChange(e, this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
