<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);
const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/real");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="home-container">
    <h1>Login</h1>
    <form @submit.prevent="login()">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="submit" value="Login" />
    </form>
    <div v-if="error" class="error">
      <p>Try Again!</p>
      <p>Hint:The username is the database you are trying to reach!</p>
      <p>Hint:The password is what you are trying to get more info about!</p>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 4rem;
  padding: 0%;
  margin: 0;
}
form {
  display: flex;
  flex-direction: column;
}
form input {
  padding: 0.25rem;
  color: purple;
  font-size: 1.5rem;
  font-weight: bold;
}


h1{
  color: bisque;
}

p{
  font-size: large;
  color: bisque;
  text-align: center;
}


</style>