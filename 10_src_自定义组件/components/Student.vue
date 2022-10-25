<template>
  <div class="demo">
    <h2>学生姓名:{{ studnetName }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="sendStudentName">点我提示学生名</button>
    <button @click="unbind">点我解绑</button>
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
  methods: {
    sendStudentName() {
      // 省略props,直接用$emit来获取标签值
      this.$emit(
        "atguigu",
        this.studnetName,
        { key: "666", wang: "222" },
        111,
        333
      );
    },
    unbind() {
      // this.$off("atguigu");  //解绑一个自定义事件，多个用数组包裹
      this.$off()  //解绑所有自定义事件
    },
  },
};
</script>

<style>
.demo {
  color: pink;
  font-size: 20px;
}
</style>