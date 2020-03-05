<template>
  <div class="blogs">
    <h2>{{ blogsTitle }}</h2>
    <button v-on:click="changeTitle">Change title</button>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      blogsTitle: "Blogs"
    };
  },
  beforeCreate() {
    alert("beforeCreate hook");
  },
  created() {
    alert("created hook");
  },
  beforeUpdate() {
    alert("beforeUpdate hook");
  },
  updated() {
    alert("updated hook");
  },
  methods: {
    changeTitle() {
      this.blogsTitle = "blog is on!";
    }
  }
};
</script>

<style></style>
