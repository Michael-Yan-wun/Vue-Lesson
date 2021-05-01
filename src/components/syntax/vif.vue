<!-- 
 Page : vif.vue
 Author : Michael
 Time: 2021-03-24
 Des: show how v-if works.
 -->
<template>
  <div>
    <div v-if="vif">我是v-if區塊</div>
    <div v-show="vshow">我是v-show區塊</div>
    <button @click="showMyDatas">顯示全部</button>
    <!-- 綜合小練習 -->
    <div>
      <input
        type="text"
        v-model.trim="message"
        :class="{ error: message.length > 10 }"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vif: false,
      vshow: false,
      message:''
    };
  },
  methods: {
    showMyDatas() {
      this.vshow = true;
      this.vif = true;
    },
  },
};
</script>

<style scoped>
.error{
  border: red solid 2px;
  color: red;
}
</style>