new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue Ninja",
    name: "Ryu"
  },
  methods: {
    greet(time) {
      return `Hello there and good ${time}, ${this.name}!`;
    },
    updateName(e) {
      //console.log(e.target.value);
      this.name = e.target.value;
    }
  }
});
