<template>
  <div id="app">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "My first Vue app, wooooo :)"
    };
  }
};
</script>

<style>
h1 {
  text-align: center;
  font-weight: normal;
  color: #444;
}
</style>
