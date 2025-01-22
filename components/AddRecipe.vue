<template>
  <form @submit.prevent="submit" class="">
    <label for="name">
      <span>Name</span>
      <input type="text" id="name" v-model="form.name" />
    </label>
    <CustomTextarea field-name="Ingredients" v-model="form.ingredients" />
    <CustomTextarea field-name="Instructions" v-model="form.steps" />
    <label for="image">
      <span>Image</span>
      <input type="file" id="image" @change="handleFileUpload" />
    </label>
    <RecipeTags />
    <CustomTextarea label="Notes" />
    <button type="submit">Add Recipe</button>
  </form>
</template>

<script setup lang="ts">
import type { RecipeModel } from '~/core/models/domain';
const form = ref<RecipeModel>({
  id: '1',
  name: 'Spaghetti Carbonara',
  ingredients: 'Spaghetti, Eggs, Parmesan Cheese, Pancetta, Black Pepper, Salt',
  steps:
    '1. Boil spaghetti. 2. Cook pancetta. 3. Mix eggs and cheese. 4. Combine all with spaghetti. 5. Season with salt and pepper.',
  image: 'https://example.com/spaghetti-carbonara.jpg',
  notes: 'Use fresh eggs for better taste.',
  tags: ['Italian', 'Pasta', 'Main Course'],
  user: 'chef123',
});
const submit = async (e: Event) => {
  const formData = prepareData();
  try {
    await fetch('/api/recipe/create', {
      method: 'POST',
      body: formData,
    });
  } catch (error) {
    console.error('Error posting recipe', error);
  }
};

const prepareData = () => {
  const useTags = useSelectedTags();
  form.value.tags = useTags.value;

  const formData = new FormData();
  for (const key in form.value) {
    const value = form.value[key as keyof RecipeModel];
    if (value instanceof File) {
      formData.append(key, value);
    } else {
      formData.append(key, value as string);
    }
  }
  return formData;
};
const handleFileUpload = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (file) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = async () => {
      form.value.image = fileReader.result as string;
    };
  }
};
</script>
