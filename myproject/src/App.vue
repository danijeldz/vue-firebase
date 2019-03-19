<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "app",
  components: {
    Navbar: Navbar
  },
  data() {
    return {
      title: "My first Vue app, wooooo :)"
    };
  },
  methods: {}
};
</script>

<style>
#app {
  width: 800px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  font-weight: normal;
  color: #444;
}
</style>
