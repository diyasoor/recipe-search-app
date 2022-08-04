import styled from "styled-components";
import {Header, Name, AppLogo, SearchBox, SearchBoxInput} from "./components/HeaderComponent.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const RecipeContainer = styled.div`
  display: flex;
  flex-direction: 
`;
function App() {
  return (
    <Container>
      <Header>
        <Name>
          <AppLogo src="/food.svg" /> 
          Recipe Search
        </Name>
        <SearchBox>
          <SearchBoxInput placeholder="Search"/>
        </SearchBox>
      </Header>
    </Container>
  );
}

export default App;
