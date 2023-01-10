<script setup>
import axios from "axios";
import { ref } from 'vue';
import SiteModal from '../components/SiteModal.vue';

const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
    params: {
        api_key: "8d992bf093d92b23f2529662f9291664"
    }
})).data.results;
console.log(data)
</script>

<template>
    <div>
        <img v-for="movie in data" @click="openModal(movie.id)" class="poster" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
    </div>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</template>

<style scoped>
img{
  width: 330px;
  margin-top: 15px;
  margin-right: 25px;
  border: 10px solid; 
  border-image-source: linear-gradient(45deg,red, blue);
  border-image-slice: 1;
}

</style>