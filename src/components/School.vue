<template>
  <div class="demo">
    <h2>学校名称{{ name }}</h2>
    <h2>学校地址{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "SchoolName",
  data() {
    return {
      name: "安师大",
      address: "芜湖",
    };
  },
};
</script>

<style>
.demo{
    background: black;
    color: palegoldenrod;
    align-content: center;
    justify-content: center;
}

</style>