<template>
  <div class="demo">
    <h2>学校名称:{{ schoolName }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 默认暴露
export default {
  name: "SchooL",
  data() {
    return {
      schoolName: "武汉科技大学",
      address: "武汉",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
</script>

<style>
</style>