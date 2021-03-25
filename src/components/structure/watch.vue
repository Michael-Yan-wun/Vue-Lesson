<template>
  <div>
    <label>試試看以下的箱子:</label>
    <input type="checkbox" v-model="status">
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: null,
    };
  },
  watch: {
    status: function (value) {
      console.log(value);
    },
  },
};
</script>

<style>
</style>