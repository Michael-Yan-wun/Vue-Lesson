 <!-- 
 Page : computed.vue
 Author : Michael
 Time: 2021-03-25
 Des: show how computed works.
 -->
<template>
  <div>
    <div class="btn">
      <a
        href="#"
        :class="{ focus: visibility == 'all' }"
        @click.prevent="visibility = 'all'"
      >
        <span class="myText">All</span>
      </a>
    </div>
    <div class="btn">
      <a
        href="#"
        :class="{ focus: visibility == 'pass' }"
        @click.prevent="visibility = 'pass'"
      >
        <span class="myText"> Pass</span>
      </a>
    </div>
    <div class="btn">
      <a
        href="#"
        :class="{ focus: visibility == 'fail' }"
        @click.prevent="visibility = 'fail'"
      >
        <span class="myText">Fail</span>
      </a>
    </div>
    <!-- 顯示區塊 -->
    <ul v-for="(item, index) in filterDatas" :key="index">
      <li>姓名：{{ item.name }}</li>
      <li>分數：{{ item.score }}</li>
      <li>工作：{{ item.job }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibility: "all",
      details: [
        {
          name: "Michael",
          score: 40,
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
          score: 50,
          job: "Teacher",
        },
      ],
    };
  },
  methods: {},
  computed: {
    filterDatas() {
      if (this.visibility == "all") {
        return this.details;
      } else if (this.visibility == "pass") {
        let passDatas = [];
        this.details.forEach((element) => {
          if (element.score >= 60) {
            passDatas.push(element);
          }
        });
        return passDatas;
      } else if (this.visibility == "fail") {
        let failDatas = [];
        this.details.forEach((element) => {
          if (element.score < 60) {
            failDatas.push(element);
          }
        });
        return failDatas;
      }
    },
  },
};
</script>

<style scoped>
.myText {
  display: flex;
  justify-content: center;
}

.btn {
  display: inline-block;
  width: 40px;
  height: 30px;
  border: solid 1px;
  border-radius: 15px;
  background-color: white;
}
/* 注意偽元素有先後順序問題 */
a:link {
  color: black;
}

a:focus {
  color: green;
}
</style>