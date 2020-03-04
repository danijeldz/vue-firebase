new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue Ninja",
    name: "Ryu",
    url: "http://www.youtube.com",
    classes: ["one", "two"]
  },
  methods: {
    logEvent() {
      console.log("Oh, you used a modifier. Nicely done!");
    },
    logMessage() {
      console.log("I've just prevented this link from firing to other page.");
    }
  }
});
