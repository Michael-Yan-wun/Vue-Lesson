<template>
  <dir>
    <div v-on:click="studentPrinter">Hello Student</div>
    <div @click="teacherPrinter">Hello Teacher</div>
    <div @click="parameter(1, 2, $event)">Send Parameter</div>
  </dir>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    studentPrinter() {
      console.log("I am Student!");
    },
    teacherPrinter() {
      console.log("I am Teacher!");
    },
    parameter(value1, value2, event) {
      console.log(`value1:${value1}`);
      console.log(`value2:${value2}`);
      console.log(event);
    },
  },
};
</script>

<style>
</style>