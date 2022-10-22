<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <School></School>
    <button @click="showDOM">点击提示</button>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "欢迎学习vue",
    };
  },
  components: {
    School,
  },
  methods:{
    showDOM(){
        alert(this.msg),
        // 收集refs
        console.log(this.$refs.title);
    }
  }
};
</script>

<style>
</style>