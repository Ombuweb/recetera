<template>
  <form @submit.prevent="submit" class="bg-black">
    <label for="name">
      <span>Name</span>
      <input type="text" id="name" />
    </label>
    <CustomTextarea label="Ingredients" />
    <CustomTextarea label="Instructions" />
    <label for="image">
      <span>Image</span>
      <input type="file" id="image" />
    </label>
    <RecipeTags />
    <CustomTextarea label="Notes" />
    <button type="submit">Add Recipe</button>
  </form>
</template>
<script setup lang="ts">
const submit = (e: Event) => {
  console.log('submit');
};
</script>
