<template>
  <div>
    <label>請輸入文字</label>
    <!-- vmodel綁定 -->
    <!-- 1.文字輸入綁定 -->
    <input type="text" v-model.trim="inputValue" />
    <h3>Input value is :{{ inputValue }}</h3>
    <br />
    <!-- 2. 綁定資料送出 -->
    <div>
      <label>輸入電話：</label>
      <input type="text" v-model="phone" />
      <label>輸入郵箱：</label>
      <input type="text" v-model="email" />
      <button @click="print">送出資料</button>
    </div>
    <br />
    <!-- 3. radio選擇框綁定方法 -->
    <div>
      <label for="one">One</label>
      <input type="radio" value="1" id="one" v-model="picked" />
      <label for="two">Two</label>
      <input type="radio" value="2" id="two" v-model="picked" />
    </div>
    <br />
    <span>Picked:{{ picked }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      phone: "",
      email: "",
      picked: 1,
    };
  },
  methods: {
    print() {
      console.log(this);
      console.log(`輸入電話為：${this.phone}`);
      console.log(`輸入郵箱為：${this.email}`);
    },
  },
};
</script>

<style scoped>
</style>