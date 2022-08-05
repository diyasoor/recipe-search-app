
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
`;
export const Name = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
`;

export const AppLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 60px;
  margin-right: 10px;
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
  margin-right: 60px
`;
export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 7px;
`;
export const SearchBoxInput = styled.input`
  border: none;
  outline: none;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
`;