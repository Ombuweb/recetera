<template>
  <div>
    <label :for="props.label">
      {{ props.label }}
    </label>
    <textarea
      v-model="model"
      id="recipe"
      rows="10"
      cols="30"
      placeholder="Enter your recipe here"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>();
const props: { label: string } = defineProps();
</script>
