// Generate a random string of specified length
const generateRandomString = (length) =>
    Math.random().toString(36).substr(2, length);

// Function to generate random credentials and store them in the context
const getRandomCredentials = (requestParams, context, ee, next) => {
    const username = `${generateRandomString(8)}`;
    const email = `user_${generateRandomString(8)}@example.com`;
    const password = generateRandomString(10);

    context.vars.username = username; // Store the username in the context
    context.vars.email = email; // Store the email in the context
    context.vars.password = password; // Store the password in the context
    next(); // Proceed to the next action
};

let count = 0;
const createRecipe = (requestParams, context, ee, next) => {
    count += 1;

    context.vars.name = `Recipe ${count}`;
    context.vars.ingredients = `Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4`;
    context.vars.steps = `1. Step one of Recipe ${count}. 2. Step two of Recipe ${count}. 3. Step three of Recipe ${count}.`;
    context.vars.image = `https://example.com/image${count}.jpg`;
    context.vars.notes = `This is a note for Recipe ${count}.`;
    context.vars.tags = ["Tag1", "Tag2", "Tag3"].join(",");
    context.vars.user_id = `${Math.floor(Math.random() * 150) + 1}`;

    next(); // Proc
    // {
    //     name: `Recipe ${index + 1}`,
    //     ingredients: `Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4`,
    //     steps: `1. Step one of Recipe ${index + 1}. 2. Step two of Recipe ${index + 1}. 3. Step three of Recipe ${index + 1}.`,
    //     image: `https://example.com/image${index + 1}.jpg`,
    //     notes: `This is a note for Recipe ${index + 1}.`,
    //     tags: ["Tag1", "Tag2", "Tag3"],
    //     user_id: `user_${Math.floor(Math.random() * 1000) + 1}`
    //   }
};


export { getRandomCredentials, createRecipe };