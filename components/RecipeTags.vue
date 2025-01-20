<template>
  <div>
    <ul>
      <Tag
        v-for="tag in selectedTags"
        :key="tag"
        :tag="tag"
        @remove="removeTag"
      />
    </ul>
    <div></div>
    <USelectMenu
      :search-input="{
        placeholder: 'Filter...',
        icon: 'i-lucide-search',
      }"
      class="w-full lg:w-48"
      placeholder="Select a recipe"
      :items="recipeTags"
      v-model="selected"
    />
  </div>
</template>

<script setup lang="ts">
const selected = ref('');

watch(selected, (value) => {
  if (value) {
    console.log('selected', value);
    selectTag(value);
  }
});

const recipeTags = [
  'Vegetarian',
  'Vegan',
  'Gluten-Free',
  'Dairy-Free',
  'Nut-Free',
  'Paleo',
  'Keto',
  'Low-Carb',
  'High-Protein',
  'Low-Fat',
  'Sugar-Free',
  'Whole30',
  'Mediterranean',
  'Quick & Easy',
  'Slow Cooker',
  'Instant Pot',
  'Grill',
  'Baking',
  'Dessert',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snack',
  'Appetizer',
  'Side Dish',
  'Soup',
  'Salad',
  'Beverage',
];
const selectedTags = useSelectedTags();

const selectTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    return;
  }
  selectedTags.value.push(tag);
};
const removeTag = (tag: string) => {
  selectedTags.value = selectedTags.value.filter((t) => t !== tag);
};
</script>
