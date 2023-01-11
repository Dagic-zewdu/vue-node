<template>
  <table v-if="show" class="table-auto w-full mt-10">
    <thead>
      <tr>
        <th class="px-4 py-2">Country</th>
        <th class="px-4 py-2">Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="phone in phones" :key="phone.id">
        <td class="border px-4 py-2">{{ phone.country.name }}</td>
        <td class="border px-4 py-2">{{ phone.country.dial_code }}{{ phone.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    phones: Array,
    show: Boolean,
  },
};
</script>

<style lang="css" scoped></style>
