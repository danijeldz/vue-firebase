new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue Ninja",
    name: "Ryu",
    age: 36,
    showName: true,
    showAge: true
  },
  methods: {
    toggleName() {
      this.showName = !this.showName;
    },
    toggleAge() {
      this.showAge = !this.showAge;
    }
  }
});
