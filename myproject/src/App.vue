<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar/>
    <Blogs/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Blogs from "./Blogs";

export default {
  name: "app",
  components: {
    Navbar: Navbar,
    Blogs: Blogs
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
