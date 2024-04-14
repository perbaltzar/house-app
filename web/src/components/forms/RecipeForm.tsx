import { Button } from 'components/common/Button/Button';
import { Heading } from 'components/typography/Heading/Heading';
import { config } from 'config';
import { useState } from 'react';

type Ingredient = {
  name: string;
  amount: string;
};

type OnChangeIngredientProps = {
  ingredient: Ingredient;
  index: number;
};

type IngredientFormProps = {
  ingredient: Ingredient;
  index: number;
  onChangeIngredient: ({ ingredient, index }: OnChangeIngredientProps) => void;
};

const IngredientForm = ({
  ingredient,
  index,
  onChangeIngredient,
}: IngredientFormProps) => {
  const textInputId = `ingredient-${index}`;
  const amountInputId = `amount-${index}`;

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <label htmlFor={textInputId}>namn:</label>
      <input
        type="text"
        value={ingredient.name}
        onChange={(e) => {
          onChangeIngredient({
            ingredient: { ...ingredient, name: e.target.value },
            index,
          });
        }}
        id={textInputId}
      />
      <label htmlFor={amountInputId}>mängd:</label>
      <input
        onChange={(e) => {
          onChangeIngredient({
            ingredient: { ...ingredient, amount: e.target.value },
            index,
          });
        }}
        type="text"
        value={ingredient.amount}
        id={amountInputId}
      />
    </div>
  );
};

export const RecipeForm = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { amount: '', name: '' },
  ]);

  const submitRecipe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`${config.apiUrl}/recipe/add`, {
      body: JSON.stringify({ name, ingredients }),
      method: 'POST',
    });

    console.log(res.json());
  };

  const onChangeIngredient = ({
    ingredient,
    index,
  }: OnChangeIngredientProps) => {
    setIngredients((prevIngredients) => {
      const newIngredients = [...prevIngredients];
      newIngredients[index] = ingredient;
      return newIngredients;
    });
  };
  return (
    <form onSubmit={submitRecipe}>
      <Heading size="h2">Nytt recept</Heading>
      <label htmlFor="name">Namn: </label>
      <input onChange={(e) => setName(e.target.value)} type="text" id="name" />
      <h4>Ingredienser</h4>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
            gap: '0.5rem',
          }}
        >
          {ingredients.map((ingredient, index) => {
            return (
              <IngredientForm
                index={index}
                onChangeIngredient={onChangeIngredient}
                ingredient={ingredient}
                key={`ingredient-form-${index}`}
              />
            );
          })}
        </div>
        <Button
          type="button"
          text="Lägg till ingrediens"
          onClick={() => {
            setIngredients([...ingredients, { name: '', amount: '' }]);
          }}
        />
      </div>
      <Button text="Spara" type="submit" />
    </form>
  );
};
