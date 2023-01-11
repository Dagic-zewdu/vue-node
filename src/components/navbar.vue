<template>
  <nav class="navbar">
    <div class="input-container border rounded">
      <i class="fas fa-search search-icon"></i>
      <input placeholder="SEARCH FOR ANYTHING" type="text" class="search-input w-96 rounded" />
    </div>
    <div class="flex space-evenly justify-evenly">
      <i class="fas fa-book-open mr-10"></i>
      <i class="fas fa-cart-shopping mr-10"></i>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
}
.input-container {
  height: 50px;
  z-index: 3;
}
.search-input {
  height: 45px;
  padding-left: 25px;
}
.search-input:focus {
  outline: none;
}
.search-icon {
  position: absolute;
  display: flex;
  align-items: center;
  top: 40px;
  left: 36px;
}
</style>
