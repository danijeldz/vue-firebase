new Vue({
  el: "#app",
  data: {
    title: "How deep is your love?",
    wage: 10
  },
  methods: {
    changeWage(amount) {
      this.wage += amount;
    }
  }
});
