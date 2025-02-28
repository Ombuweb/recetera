# recetera

::: Note
This project is a work in progress.
:::

The purpose of the Recetera app project is to showcase my skills as a Software Developer. It is a recipe sharing platform where users can record and share their favorite recipes with loved ones.

## Technologies

The project is built using the following technologies:

- Nuxt.js
- Vue.js
- Database: MySQL(will be designed to be database-agnostic)
- Vitest
- Tailwind CSS

## Features

The project has the following features:

- User Authentication
- Recipe CRUD
- Recipe Search
- Recipe Sharing
- Tagging

## Recetera System Design

### server

Below is a high-level overview of the Recetera app server side architecture.

The request handler (`defineEventHandler()`) communicates with the recipe service locator, which is responsible for instantiating the appropriate recipe database service.

The recipe database service interacts with the target database, which can be SQL, Firestore, MongoDB, etc.

![Recetera Server Architecture](/assets/images/recetera-server-architecture.webp)

Currently, I’ve implemented two SQL database services:
• Cloudflare D1 via NuxtHub
• Localhost: SQL database hosted on the same machine as the Nuxt.js server

The contract between `defineEventHandler()`, the recipe service locator, and the recipe database service is defined by the `IRecipeDatabaseService` interface. Any recipe database service must implement this interface.

```ts
interface IRecipeDatabaseService {
  getRecipes(): Promise<RecipeModel[]>;
  getRecipe(id: string): Promise<RecipeModel>;
  createRecipe(recipe: RecipeModel): Promise<string>;
  updateRecipe(recipe: RecipeModel): Promise<RecipeModel>;
  deleteRecipe(id: string): Promise<void>;
}
```

The RecipeModel interface defines the structure of a recipe object.

```ts
// RecipeModel.ts
interface RecipeModel {
  name: string;
  ingredients: string;
  steps: string;
  image: string;
  notes: string;
  tags: string[];
  user: string;
}
```

With this model and interface, any database service provided by the service locator can be used as long as it adheres to IRecipeDatabaseService.
