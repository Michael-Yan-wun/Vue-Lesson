<!-- 
 Page : vfor.vue
 Author : Michael
 Time: 2021-03-24
 Des: show how v-for works.
 -->
<template>
  <div>
    <ul v-for="(item, index) in details" :key="index">
      <li>Index:{{index}}</li>
      <li>Name:{{ item.name }}</li>
      <li>score:{{ item.score }}</li>
      <li>Jobs:{{ item.job }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: [
        {
          name: "Michael",
          score: 83,
          job: "Actuary",
        },
        {
          name: "Julia",
          score: 95,
          job: "Sales",
        },
        {
          name: "Miles",
          score: 70,
          job: "Student",
        },
        {
          name: "Jyun",
          score: 87,
          job: "Developer",
        },
        {
          name: "Tree",
          score: 80,
          job: "Teacher",
        },
      ],
    };
  },
};
</script>

<style scoped>
li {
  color: blue;
}
</style>