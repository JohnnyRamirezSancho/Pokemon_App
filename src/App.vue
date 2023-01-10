<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderGlobal from './components/HeaderGlobal.vue'
import FooterGlobal from './components/FooterGlobal.vue'
</script>

<template>
  <HeaderGlobal textHOne="Hola" />
  <RouterView />
  <FooterGlobal />
</template>

<style scoped>
</style>
