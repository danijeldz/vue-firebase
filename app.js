new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue Ninja",
    items: ["crystal", "mashroom", "banana", "star", "Green Shells"],
    ninjas: [
      {
        name: "Crystal",
        age: 15,
        belt: "red"
      },
      {
        name: "Ryu",
        age: 19,
        belt: "blue"
      },
      {
        name: "Yoshi",
        age: 27,
        belt: "black"
      }
    ]
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
