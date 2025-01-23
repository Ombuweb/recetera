<template>
  <div class="flex flex-col gap-2">
    <label :for="fieldName" class="uppercase text-sm">
      {{ fieldName }}
    </label>
    <textarea
      class="focus:outline-0 focus:border-red-700 border border-gray-700 border-opacity-50 rounded-lg p-5"
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
