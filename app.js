new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue Ninja",
    name: "Ryu",
    url: "http://www.youtube.com",
    classes: ["one", "two"]
  },
  methods: {
    greet(time) {
      return `Hello there and good ${time}, ${this.name}!`;
    }
  }
});
