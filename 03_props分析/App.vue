<template>
  <div>
    <Student name='李四' :age="19" sex='男'></Student>
    <Student name='李四' :age=19 sex='男'></Student>

  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    Student,
  },
};
</script>

<style>
</style>