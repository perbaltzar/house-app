import { SupabaseClient } from "npm:@supabase/supabase-js@2.42.0";

export const getOrCreateIngredientsFromNames = async (
  ingredientNames: string[],
  client: SupabaseClient,
) => {
  const existingIngredients = await client.from("ingredient").select("*").in(
    "name",
    ingredientNames.map((i: any) => i.name),
  );

  const newIngredients = ingredientNames.filter((ingredient: any) =>
    !existingIngredients.data?.some((i) => i.name === ingredient.name)
  ).map((ingredient: any) => ({ name: ingredient.name }));

  const ingredientsToBeCreated = await client.from("ingredient").insert(
    newIngredients,
  );

  const allIngredients = [
    ...(existingIngredients.data ?? []),
    ...(ingredientsToBeCreated.data ?? []),
  ];

  return allIngredients;
};
