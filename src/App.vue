<template>

  <navBar :items="items" :langs="langs" />

</template>

<script setup>
import navBar from './components/navBar/navBar.vue'
import {items, langs} from './store/menu'


</script>


