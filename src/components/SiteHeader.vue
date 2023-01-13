<script setup>

</script>

<template>
    <div class="main-container">
        <h1 class="text"> Welcome to Eddard Stark Corporations</h1>
        <p>For more information,scroll down.To login and make your very own account and start with the fun,click on the login button!</p>
        <RouterLink to="/login" custom v-slot="{ navigate }">
    <button class="btn" @click="navigate" role="link">Login</button>
</RouterLink>
    </div>
</template>

<style scoped>

.btn{
    position: relative;
    left: 88%;
    bottom: 60px;
    font-size: 18px;
    font-weight: bold;
    background: #1e90ff;
    width: 160px;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 10px rgb(242, 237, 237);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.text{
    color: rgb(250, 248, 248);
    font-family: 'Russo One', sans-serif;
    color: bisque;
    
}

p{
    font-size: x-large;
    color: white;
}
</style>