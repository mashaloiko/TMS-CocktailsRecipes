export interface CommonInputProps {
  placeholder: string;
  type: string;
  name: string;
  styleInputProp: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorText?: string | undefined;
};

export interface DrinkType {
  idDrink: string | number;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
};

export interface DrinkInfoProps {
  title: string;
  img: string;
  ingredient1: string | undefined;
  ingredient2: string | undefined;
  ingredient3: string | undefined;
  ingredient4: string | undefined;
  ingredient5: string | undefined;
  ingredient6: string | undefined;
  ingredient7: string | undefined;
  measure1: string | undefined;
  measure2: string | undefined;
  measure3: string | undefined;
  measure4: string | undefined;
  measure5: string | undefined;
  measure6: string | undefined;
  measure7: string | undefined;
  instruction: string | undefined;
  drink: DrinkType;
};