<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link :to="{ name: 'About' }">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
ul > li {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
