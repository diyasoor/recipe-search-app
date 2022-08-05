import styled from "styled-components";
import Axios from "axios";
import {useState} from 'react';
import {Header, Name, AppLogo, SearchBox, SearchBoxInput} from "./components/HeaderComponent.js";
import {RecipeList, RecipeImage, RecipeDetails, CaloriesIngredients, RecipeCalories, RecipeIngredients, RecipeDiet} from "./components/RecipeComponent.js";
// import { common } from "@material-ui/core/colors";

const APP_ID = "87eef540";
const APP_KEY = "5079932337360ca1caede06e3a3a7ee9";


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
`;
const RecipeComponent = (props) => {
  console.log("props", props);
  const {recipeObj} = props;
  return (
    <RecipeList>
      <RecipeImage src={recipeObj.image}/>
      <RecipeDetails>{recipeObj.label}</RecipeDetails>
      <CaloriesIngredients>
        <RecipeCalories>{parseInt(recipeObj.calories)} CALORIES</RecipeCalories>
        <RecipeIngredients>{recipeObj.ingredients.length} INGREDIENTS</RecipeIngredients>
      </CaloriesIngredients>
      <RecipeDiet>{recipeObj.dietLabels}</RecipeDiet>
    </RecipeList>
  );
};
function App() {

  const [recipeList, updateRecipeList] = useState([]);

  const findRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}
      `
    );
    updateRecipeList(response.data.hits);
  };
  const handler = (event) => {
    if (event.key === 'Enter') {
      findRecipe(event.target.value);
    } 
  };

  return (
    <Container>
      {/* ***********HEADER*********** */}
      <Header>
        <Name>
          <AppLogo src="/food.svg" /> 
            Recipe Search
        </Name>
        <SearchBox>
          <SearchBoxInput placeholder="Search" onKeyPress={(e) => handler(e)}/>
        </SearchBox>
      </Header>
      {/* ************BODY************ */}
      <RecipeContainer>
        {recipeList.length && recipeList.map((recipeObj) => (
          <RecipeComponent recipeObj={recipeObj.recipe}/>
        ))}  
      </RecipeContainer>
    </Container>
  );
}

export default App;
