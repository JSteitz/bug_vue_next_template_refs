<template>
  <div ref="div">Hello World</div>
  <div> </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const div = ref<HTMLElement>()
</script>
