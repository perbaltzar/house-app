import { createClient } from "npm:@supabase/supabase-js@2.42.0";
import { getOrCreateIngredientsFromNames } from "./ingredientFunctions.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

Deno.serve({ path: "add" }, async (req) => {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify("Method Not Allowed, only POST is supported."),
      { status: 405, headers: { "Content-Type": "application/json" } },
    );
  }
  const { name, ingredients: ingredientNames } = await req.json();

  const allIngredients = await getOrCreateIngredientsFromNames(
    ingredientNames,
    supabase,
  );

  if (allIngredients.length === 0) {
    return new Response(
      JSON.stringify("Failed to create ingredients"),
      { headers: { "Content-Type": "application/json" }, status: 500 },
    );
  }

  const { status, statusText, data } = await supabase.from("recipe").insert([{
    name,
  }]).select();

  console.log({ status, statusText, data });

  if (!data) {
    return new Response(
      JSON.stringify("Failed to create recipe"),
      { headers: { "Content-Type": "application/json" }, status: 500 },
    );
  }

  const recipeIngredients = allIngredients.map((ingredient) => ({
    recipe_id: data[0].id,
    ingredient_id: ingredient.id,
    amount: ingredientNames.find((i: any) => i.name === ingredient.name).amount,
  }));

  await supabase.from(
    "recipe_ingredient",
  ).insert(recipeIngredients);

  return new Response(
    JSON.stringify("Success"),
    { headers: { "Content-Type": "application/json" }, status, statusText },
  );
});
