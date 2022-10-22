<template>
  <div class="demo">
    <h2>学生姓名:{{ studentName }}</h2>
    <h2>年龄:{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "StudneT",
  data() {
    return {
      studnetName: "老王",
      age: 19,
    };
  },
};
</script>

<style>
.demo {
  color: pink;
  font-size: 20px;
}
</style>