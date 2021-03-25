<!-- 
 Page : von.vue
 Author : Michael
 Time: 2021-03-24
 Des: show how v-on works.
 -->
<template>
  <div>
    <!-- 原生click事件寫法 -->
    <div v-on:click="studentPrinter">Hello Student</div>
  
    <!-- click寫法 -->
    <div @click="teacherPrinter">Hello Teacher</div>
    <div @click="parameter(1, 2, $event)">Send Parameter</div>

    <!-- click.prevent阻擋元素預設行為 -->
    <p>第一個網址：</p>
    <a href="http://google.com" @click="hiPrinter">google page</a>
    <p>第二個網址：</p>
    <a href="http://google.com" @click.prevent="hiPrinter">second:google</a>
  </div>
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
    hiPrinter(){
      console.log('hi')
    }
  },
};
</script>

<style>
</style>