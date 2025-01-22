<template>
  <div class="flex flex-col">
    <label :for="fieldName">
      {{ fieldName }}
    </label>
    <textarea
      :id="fieldName"
      v-model="model"
      rows="10"
      cols="30"
      placeholder="Enter your recipe here"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>();
defineProps(['fieldName']);
</script>
