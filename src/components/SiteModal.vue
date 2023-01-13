<script setup>
import axios from 'axios';
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const info = await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
      params: {
        api_key: "8d992bf093d92b23f2529662f9291664",
        append_to_response: "videos"
      },
    })

console.log(info)

</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <img :src="`https://image.tmdb.org/t/p/w500${info.data.poster_path}`" alt="">
        <div class="text">
          <h1>Title:{{ info.data.original_title }}</h1>
          <h3>Release Date:{{ info.data.release_date}}</h3>
          <h3>Overview:{{ info.data.overview}}</h3>
        </div>
        <iframe :src="`https://www.youtube.com/embed/${info.data.videos.results.filter((video) => video.type === 'Trailer').at(0).key}`"></iframe>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #1F2123;
  color: white;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1F2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

img{
  margin-top: 50px;
  float: left;
  width: 200px;
  padding-right: 5px;
}

iframe{
  width: 400px;
  height: 150px;
}

.text{
  padding-left: 5px;
}

h1{
  font-family: 'Oswald', sans-serif;
}
</style>
