<!-- 
 Page : lesson.vue
 Author : Michael
 Time: 2021-03-24
 Des: The main page for lessons.
 -->
<template>
  <div>
    <h1>The Vue.js Lesson page!</h1>
    <h3>Please learn the following componenets</h3>
    <router-link class="link" :to="{ name: 'Vbind' }">vbind</router-link>
    <router-link class="link" :to="{ name: 'Vif' }">vif</router-link>
    <router-link class="link" :to="{ name: 'Vmodel' }">vmodel</router-link>
    <div class="link" @click="changePage">von</div>
    <router-link class="link" :to="{ name: 'Vfor' }">vfor</router-link>
    <router-link class="link" :to="{ name: 'Vlife' }">life</router-link>
    <router-link class="link" :to="{ name: 'Vcomputed' }">vcomputed</router-link>
    <router-link class="link" :to="{ name: 'Vwatch' }">vwatch</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "lesson",
  data() {
    return {};
  },
  created(){
    axios.get('https://original-future-308806.df.r.appspot.com/api/todo').then((res)=>{
      console.log(res);
    })
  },
  methods: {
    changePage() {
      this.$router.push({ name: "Von" });
    },
  },
};
</script>

<style scoped>
*{
  text-align: center;
  color: #2bb677;
}

.link{
  display: inline-block;
  width: 100px;
  border: solid 2px;
  border-radius: 20px;
}
</style>