import styled from "styled-components";

export const RecipeList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 4px 3px 8px 1px #969696;
  align-items: center;
  width: 320px;

  @media (min-width:0px) and (max-width:700px) {
    width: 240px;
  }

`;
export const RecipeImage = styled.img`
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  @media (min-width:0px) and (max-width:700px) {
    height: 150px;
  }
`;
export const RecipeDetails = styled.span`
  font-size: 19px;
  color: black;
  margin: 10px 15px;
  font-weight: bold;
  @media (min-width:0px) and (max-width:700px) {
    font-size: 15px;
    margin: 7px 10px;
  }
`;
export const CaloriesIngredients = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RecipeCalories = styled.span`
  font-size: 15px;
  color: black;
  margin: 10px 5px;
  border: solid 1px red;
  padding: 7px;
  text-align: center;
  width: 130px;
  border-radius: 5px;
  cursor: pointer;

  @media (min-width:0px) and (max-width:700px) {
    font-size: 11px;
    width: 90px;
  }
`;
export const RecipeIngredients = styled(RecipeCalories)`
  border: solid 1px green;
`;

export const RecipeDiet = styled.span`
  font-size: 19px;
  color: black;
  margin: 10px 15px;

  @media (min-width:0px) and (max-width:700px) {
    font-size: 11px;
    margin: 7px 10px;
  }
`;
