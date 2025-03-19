<template>
  <li>
    <span>{{ tag }}</span>
    <button @click="emits('remove', tag)">x</button>
  </li>
</template>

<script setup lang="ts">
const emits = defineEmits(['remove']);
defineProps(['tag']);
</script>
