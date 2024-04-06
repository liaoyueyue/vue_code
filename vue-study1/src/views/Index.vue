<script setup>
import { ref } from 'vue'
import Problem from './Problem.vue'

const city = ref('武汉')
</script>

<template>
  <!-- <h1>你好，{{ city }}！</h1> -->
  <Problem />
</template>

<style scoped></style>
