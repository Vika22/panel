<template>
  <article class="buy-item">
    <img :src="item.photo" alt="">
    {{ item }}
  </article>
</template>
<script>
export default {
  name: "Buy",
  components: {},
  data: () => {
    return {
      item: ''
    };
  },
  created () {
    this.item = this.$route.params.preview
  }
};
</script>
<style scoped>
  .buy-item {
    margin-top: 10vh;
  }
</style>