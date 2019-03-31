<template>
  <div>
    <h2>Hello!</h2>
    <ul>
      <li>
        <span>{{name}}</span>
      </li>
      <li v-if="platform == true">
        <a v-bind:href="'tel:'+mobile">{{mobile}}</a>
      </li>
      <li>
        <a v-bind:href="'mailto:'+email">{{email}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "danijeldzankic@hotmail.com",
      mobile: "+4915221042427",
      name: "Danijel Dzankic",
      platform: this.$route.params.mobile
    };
  },
  methods: {
    updatePlatform() {
      this.platform = this.$route.params.mobile;
    }
  },
  watch: {
    $route: "updatePlatform"
  }
};
</script>

<style>
</style>

