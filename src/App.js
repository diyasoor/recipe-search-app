import styled from "styled-components";
import Axios from "axios";
import { useState } from 'react';
import React from 'react';
import {Header, Name, AppLogo, SearchBox, SearchIcon, SearchBoxInput} from "./components/HeaderComponent.js";
import {RecipeList, RecipeImage, RecipeDetails, CaloriesIngredients, RecipeCalories, RecipeIngredients, RecipeDiet} from "./components/RecipeComponent.js";
import {ImageIngredients, ImageDialog, TableDialog, TableData, TableHeader, DialogList, DialogListSpan} from "./components/DialogComponent.js";
import { DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';


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
const Placeholder = styled.img`
  opacity: 50%;
  width: 120px;
  height: 120px;
  margin: 200px;
`;

const RecipeComponent = (props) => {
  console.log("props", props);
  const [show, setShow] = React.useState(false);
  const {recipeObj} = props;
  return (
    <>
      <Dialog open={show}>

        <DialogTitle id="alert-dialog-slide-title">{recipeObj.label}</DialogTitle>

        <DialogContent>
          <ImageIngredients>
            <ImageDialog src={recipeObj.image}/>
            <ul>
              <DialogList><DialogListSpan>Dish Type: </DialogListSpan>{recipeObj.dishType}</DialogList>
              <DialogList><DialogListSpan>Calories: </DialogListSpan>{parseInt(recipeObj.calories)}</DialogList>
              <DialogList><DialogListSpan>Meal Type: </DialogListSpan>{recipeObj.mealType[0]}</DialogList> 
              <DialogList><DialogListSpan>Cuisine Type: </DialogListSpan>{recipeObj.cuisineType}</DialogList> 
            </ul>
          </ImageIngredients>
          
          <TableDialog>
            <thead>
              <TableHeader>{recipeObj.ingredients.length} INGREDIENTS</TableHeader>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientsObj) => (
                <tr>
                  <TableData>{ingredientsObj.text}</TableData>
                </tr>
              ))}
            </tbody>
          </TableDialog>         
        </DialogContent>

        <DialogActions>
          <RecipeIngredients onClick={() => window.open(recipeObj.url)}>See Full Recipe</RecipeIngredients>
          <RecipeCalories onClick={() => setShow("")}>Close</RecipeCalories>
        </DialogActions>

      </Dialog>

      <RecipeList>
        <RecipeImage src={recipeObj.image} onClick={() => setShow(true)}/>
        <RecipeDetails>{recipeObj.label}</RecipeDetails>
        <CaloriesIngredients>
          <RecipeCalories>{parseInt(recipeObj.calories)} CALORIES</RecipeCalories>
          <RecipeIngredients>{recipeObj.ingredients.length} INGREDIENTS</RecipeIngredients>
        </CaloriesIngredients>
        <RecipeDiet>{recipeObj.dietLabels[0]}</RecipeDiet>
      </RecipeList>
    </>
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
          <AppLogo src="homepage/food.svg" /> 
            Recipe Search
        </Name>
        <SearchBox>
          <SearchIcon src="homepage/search.svg" />
          <SearchBoxInput placeholder="Search" onKeyPress={(e) => handler(e)}/>
        </SearchBox>
      </Header>
      {/* ************BODY************ */}
      <RecipeContainer>
        {recipeList.length ? recipeList.map((recipeObj) => (
          <RecipeComponent recipeObj={recipeObj.recipe}/>
        )): <Placeholder src="/food.svg" />}  
      </RecipeContainer>
    </Container>
  );
}

export default App;
