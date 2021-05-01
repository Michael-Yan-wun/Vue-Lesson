<!-- 
 Page : vbind.vue
 Author : Michael
 Time: 2021-03-24
 Des: show how v-bind works.
 -->
<template>
  <div>
    <!-- v-bind:[屬性]原始寫法 -->
    <p v-bind:id="title">我是v-bind id 示範</p>
    <!-- : 表示v-bind的意思 -->
    <button :disabled='btnControl'>click me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "myTag",
      btnControl: false,
    };
  },
};
</script>

<style scoped>
#myTag {
  color: green;
}
</style>