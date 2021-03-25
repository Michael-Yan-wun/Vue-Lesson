<!-- 
 Page : life.vue
 Author : Michael
 Time: 2021-03-24
 Des: show what is vue life circle.
 -->
<template>
  <div>
    <label>輸入一些東西</label>
    <br>
    <input type="text" v-model="msg" />
    <button @click="$destroy()">destroyed vue</button>
    <br>
    <span>Message:{{msg}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello vue.js",
    };
  },
  created() {
    console.log("I am created");
  },
  mounted() {
    console.log("I am mounted");
  },
  destroyed() {
    console.log("I am destroyed!");
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style>
</style>