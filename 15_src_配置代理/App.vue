<template>
  <div>
    <button @click="getCategory">获取菜品信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  methods: {
    getCategory() {
      //去代理服务器8080要数据，但如果前端有相同的数据，就直接用前端数据，不会去后端调
      // axios.get("http://localhost:8080/category/list").then(
      axios.get("http://localhost:8080/api/category/list").then(
        (Response) => {
          console.log("请求成功", Response.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>