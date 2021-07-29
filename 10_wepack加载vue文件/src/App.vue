<template>
  <div class="title">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
    };
  },
};
</script>
<style scoped lang="less">
.title {
    color: red;
}
</style>
