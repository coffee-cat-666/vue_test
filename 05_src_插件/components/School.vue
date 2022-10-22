<template>
  <div>
    <h2 @click="showName">学校名称:{{ name | myslice }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
// 默认暴露
export default {
  name: "SchoolName",
  data() {
    return {
      name: "武汉科技大学",
      address: "武汉",
    };
  },
};
</script>

<style>
</style>