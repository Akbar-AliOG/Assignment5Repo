<script setup>

</script>

<template>
    <div class="main-container">
        <h1>Welcome to Blockfuster Corporations!</h1>
        <RouterLink to="/login" custom v-slot="{ navigate }">
    <button @click="navigate" role="link">Login</button>
</RouterLink>
    </div>
</template>

<style scoped>
</style>