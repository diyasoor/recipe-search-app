import styled from "styled-components";

export const Header = styled.div`
  color: #000814;
  display: flex;
  flex-direction: row;
  padding: 15px;
  font-size: 25px;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;

  @media (min-width:0px) and (max-width:700px) {
    font-size: 20px;
    padding: 15px;
  }
`;
export const LogoName = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  font-size: 40px;
  @media (min-width:0px) and (max-width:700px) {
    font-size: 15px;
  }
  
`;

export const AppLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 60px;
  margin-right: 10px;

  @media (min-width:0px) and (max-width:700px) {
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-right: 5px;
  }
`;
export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 50%;
  border-color: #000814;
  border-style: solid;
  padding: 5px;
  border-radius: 9px;
  margin-right: 60px;
  
  @media (min-width:0px) and (max-width:700px) {
    border-radius: 5px;
    width: 30%;
    overflow: hidden;
    margin-right: 10px;
    border: 2px solid #000814;
  }
`;
export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 7px;

  @media (min-width:0px) and (max-width:700px) {
    width: 15px;
    height: 15px;
    margin: 0 4px;
  }
`;
export const SearchBoxInput = styled.input`
  border: none;
  outline: none;
  height: 30px;
  font-size: 16px;
  font-weight: bold;

  @media (min-width:0px) and (max-width:700px) {
    height: 15px;
    font-size: 13px;
  }

`;