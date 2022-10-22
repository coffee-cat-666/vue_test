<template>
  <div>
    <h2 @click="showName">学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
  </div>
</template>

<script>

export default {
  name: "StudentName",
  data() {
    return {
      name: "老王",
      age: 10,
    };
  },
};
</script>

<style>
</style>