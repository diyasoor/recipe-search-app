import { style } from "@mui/system";
import styled from "styled-components";

export const ImageIngredients = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width:0px) and (max-width:700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageDialog = styled.img`
  margin: 0 25px;
  object-fit: cover;

  @media (min-width:0px) and (max-width:700px) {
    margin: 0 15px;
    width: 75%;
  }
`;

export const TableDialog = styled.table`
  margin-right: 20px;
  height: 50px;

  @media (min-width:0px) and (max-width:700px) {
    margin-right: 10px;
    height: 20px;
  }
`;

export const TableData = styled.td`
  border-bottom: 1px solid #ddd;
  height: 50px;
  font-size: 19px;

  @media (min-width:0px) and (max-width:700px) {
    display: none;
  }

`;

export const TableHeader = styled.th`
  border-bottom: 1px solid #ddd;
  height: 50px;
  font-size: 19px;

  @media (min-width:0px) and (max-width:700px) {
    display: none;
  }
`;

export const DialogList = styled.li`
  margin: 25px 0;
  font-size: 19px;
`;

export const DialogListSpan = styled.span`
  font-weight: bold;
`;


