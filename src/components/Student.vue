<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ myAge }}</h2>
    <button @click="updateAge">点我更改年龄</button>
  </div>
</template>

<script>
export default {
  name: "StudentName",
  data() {
    return {
      //如果props和data存在同名的属性，会报错，但已props传递的属性值为主
      //注意props属性名不能是vue底层已征用的属性名(比如key, ref等等)
      msg: "学生信息",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge = this.age++;
    },
  },
  // 简单声明接收数据
  props: ["name", "age", "sex"],
};

//限制props中属性的类型 类型错误了会提示错误信息
// props: {
//   name: String,
//   sex: String,
//   age: Number
// }

//接收时不仅限制类型还加上默认值的指定并指定它的必须性
/* props:{
    name:{
      type: String, //类型
      required: true //必要的
    },
    age:{
      type: Number,
      default: 99 //默认值
    },
    sex:{
      type: String,
      required: true
    }
  } */
</script>

<style>
.demo {
  color: red;
  align-content: center;
  justify-content: center;
}
</style>