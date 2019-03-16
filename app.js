new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue Ninja",
    name: "Ryu",
    age: 25,
    showAge: true,
    showName: false
  },
  methods: {
    updateName(e) {
      // console.log(e.target.value);
      this.name = e.target.value;
    },
    logMe(message) {
      console.log(message);
    },
    toggleName() {
      this.showName = !this.showName;
    },
    toggleAge() {
      this.showAge = !this.showAge;
    }
  }
});
