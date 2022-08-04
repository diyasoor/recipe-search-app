import styled from "styled-components";
import {Header, Name, AppLogo, SearchBox, SearchBoxInput} from "./components/HeaderComponent.js";
import {RecipeList, RecipeImage, RecipeDetails, CaloriesIngredients, RecipeCalories, RecipeIngredients, RecipeDiet} from "./components/RecipeContainer.js";

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

function App() {
  return (
    <Container>
      {/* ***********HEADER*********** */}
      <Header>
        <Name>
          <AppLogo src="/food.svg" /> 
          Recipe Search
        </Name>
        <SearchBox>
          <SearchBoxInput placeholder="Search"/>
        </SearchBox>
      </Header>
      {/* ************BODY************ */}
      <RecipeContainer>
        <RecipeList>
          <RecipeImage src="/food.svg"/>
          <RecipeDetails>details</RecipeDetails>
          <CaloriesIngredients>
            <RecipeCalories>calories</RecipeCalories>
            <RecipeIngredients>ingredients</RecipeIngredients>
          </CaloriesIngredients>
          <RecipeDiet>diet</RecipeDiet>
        </RecipeList>

        <RecipeList>
          <RecipeImage src="/food.svg"/>
          <RecipeDetails>details</RecipeDetails>
          <CaloriesIngredients>
            <RecipeCalories>calories</RecipeCalories>
            <RecipeIngredients>ingredients</RecipeIngredients>
          </CaloriesIngredients>
          <RecipeDiet>diet</RecipeDiet>
        </RecipeList>

        <RecipeList>
          <RecipeImage src="/food.svg"/>
          <RecipeDetails>details</RecipeDetails>
          <CaloriesIngredients>
            <RecipeCalories>calories</RecipeCalories>
            <RecipeIngredients>ingredients</RecipeIngredients>
          </CaloriesIngredients>
          <RecipeDiet>diet</RecipeDiet>
        </RecipeList>

        <RecipeList>
          <RecipeImage src="/food.svg"/>
          <RecipeDetails>details</RecipeDetails>
          <CaloriesIngredients>
            <RecipeCalories>calories</RecipeCalories>
            <RecipeIngredients>ingredients</RecipeIngredients>
          </CaloriesIngredients>
          <RecipeDiet>diet</RecipeDiet>
        </RecipeList>

        <RecipeList>
          <RecipeImage src="/food.svg"/>
          <RecipeDetails>details</RecipeDetails>
          <CaloriesIngredients>
            <RecipeCalories>calories</RecipeCalories>
            <RecipeIngredients>ingredients</RecipeIngredients>
          </CaloriesIngredients>
          <RecipeDiet>diet</RecipeDiet>
        </RecipeList>

        <RecipeList>
          <RecipeImage src="/food.svg"/>
          <RecipeDetails>details</RecipeDetails>
          <CaloriesIngredients>
            <RecipeCalories>calories</RecipeCalories>
            <RecipeIngredients>ingredients</RecipeIngredients>
          </CaloriesIngredients>
          <RecipeDiet>diet</RecipeDiet>
        </RecipeList>

        <RecipeList>
          <RecipeImage src="/food.svg"/>
          <RecipeDetails>details</RecipeDetails>
          <CaloriesIngredients>
            <RecipeCalories>calories</RecipeCalories>
            <RecipeIngredients>ingredients</RecipeIngredients>
          </CaloriesIngredients>
          <RecipeDiet>diet</RecipeDiet>
        </RecipeList>

        <RecipeList>
          <RecipeImage src="/food.svg"/>
          <RecipeDetails>details</RecipeDetails>
          <CaloriesIngredients>
            <RecipeCalories>calories</RecipeCalories>
            <RecipeIngredients>ingredients</RecipeIngredients>
          </CaloriesIngredients>
          <RecipeDiet>diet</RecipeDiet>
        </RecipeList>
      </RecipeContainer>

      
    </Container>
  );
}

export default App;
