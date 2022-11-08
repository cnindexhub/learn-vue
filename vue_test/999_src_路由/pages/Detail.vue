<template>
  <div>
    <h2>id： {{ $route.params.id }}</h2>
    <h2>title： {{ $route.params.title }}</h2>
    <h2>a： {{ id }}</h2>
    <h2>b： {{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ['id', 'title'],
  mounted() {
    console.log(this.$router)
  }
}
</script>

<style scoped>

</style>