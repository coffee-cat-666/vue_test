<template>
  <div>
    <!-- 通过父组件给子组件传递数据 -->
    <School :getByname="getByname"></School>
    <!-- 自定义组件 第二种写法使用@-->
    <!-- <Student @atguigu="getStduentName"></Student> -->    

    <!-- 自定义组件 第二种写法使用ref -->
    <Student ref="student"></Student>
  </div>
</template>

<script>
//引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "APP",
  components: {
    School,
    Student,
  },
  methods: {
    getByname(name) {
      console.log("收到了学校名：", name);
    },
    getStduentName(name, ...params) {
      // 接收变量，对象，数组的各种方法
      console.log("收到了学生名", name, JSON.stringify(params), params);
    },
  },
  mounted() {
    // 设置定时器 ，只点一次
    // setTimeout(() => {
    //   this.$refs.student.$once("atguigu", this.getStduentName);
    // }, 3000);

    this.$refs.student.$on("atguigu", this.getStduentName);
  },
};
</script>

<style>
</style>