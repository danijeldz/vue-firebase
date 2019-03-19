<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar/>
    <AllFriends v-bind:friends="friends" @delete="deleteFriend"/>
    <OnlineFriends v-bind:friends="friends"/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AllFriends from "./AllFriends";
import OnlineFriends from "./OnlineFriends";

export default {
  name: "app",
  components: {
    Navbar: Navbar,
    AllFriends: AllFriends,
    OnlineFriends: OnlineFriends
  },
  data() {
    return {
      title: "My first Vue app, wooooo :)",
      friends: [
        { name: "Mario", online: true },
        { name: "Luigi", online: false },
        { name: "Bowser", online: false },
        { name: "Toad", online: true }
      ]
    };
  },
  methods: {
    deleteFriend(payload) {
      console.log(payload);
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name;
      });
    }
  }
};
</script>

<style>
#app {
  width: 800px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  font-weight: normal;
  color: #444;
}
</style>
