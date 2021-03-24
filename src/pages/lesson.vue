<template>
  <div>
    <h2>this is lesson page!</h2>
    <router-link :to="{ name: 'Vbind' }">vbind</router-link>
    <router-link :to="{ name: 'Vif' }">vif</router-link>
    <router-link :to="{ name: 'Vmodel' }">vmodel</router-link>
    <div @click="changePage">von</div>
  </div>
</template>

<script>
export default {
  name: "lesson",
  data() {
    return {};
  },
  methods: {
    changePage() {
      this.$router.push({ name: "Von" });
    },
  },
};
</script>

<style>
</style>