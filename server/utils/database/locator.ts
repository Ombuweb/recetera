import { IRecipeDatabaseRepository } from '~/core/contracts/repositories';
import { RecipeSQLDatabaseRepository } from './repositories/sql/RecipeSQLDatabaseRepository';
import { ConnectionOptions } from 'mysql2';
import { IRecipeDatabaseService } from '~/core/contracts/services';
import { RecipeDatabaseService } from './services';

let recipeDatabaseRepository: IRecipeDatabaseRepository;
let recipeFirestoreRepository: IRecipeDatabaseRepository;
let recipeCloudflareR2Repository: IRecipeDatabaseRepository;

const getRecipeSQLDatabaseRepository = (): IRecipeDatabaseRepository => {
  if (!recipeDatabaseRepository) {
    console.log('DB_OPTIONS', process.env.DATABASE_URL);
    // read mysql connection details from .env file
    if (!process.env.DATABASE_URL)
      throw new Error('DB_OPTIONS not found in .env file');
    const dbOptions = JSON.parse(process.env.DATABASE_URL) as ConnectionOptions;
    recipeDatabaseRepository = new RecipeSQLDatabaseRepository(dbOptions);
  }
  return recipeDatabaseRepository;
};

// export const getRecipeFirestoreRepository = (): IRecipeDatabaseRepository => {
//   if (!recipeFirestoreRepository) {
//     // read firestore connection details from .env file
//     if (!process.env.FIRESTORE_OPTIONS)
//       throw new Error('FIRESTORE_OPTIONS not found in .env file');
//     const dbOptions = JSON.parse(process.env.FIRESTORE_OPTIONS) as ConnectionOptions;
//     recipeFirestoreRepository = new RecipeFirestoreDatabaseRepository(dbOptions);
//   }
//   return recipeFirestoreRepository;
// };

// Services
let recipeDatabaseService: IRecipeDatabaseService;

export const getRecipeDatabaseService = (): IRecipeDatabaseService => {
  if (!recipeDatabaseService) {
    recipeDatabaseService = new RecipeDatabaseService(
      getRecipeSQLDatabaseRepository() // you swap databases here
    );
  }
  return recipeDatabaseService;
};
