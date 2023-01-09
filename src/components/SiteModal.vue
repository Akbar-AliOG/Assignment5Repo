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
        <h1>{{ info.data.overview }}</h1>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
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
</style>
