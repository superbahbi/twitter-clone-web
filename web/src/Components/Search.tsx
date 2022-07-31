import React from "react";
import styled from "styled-components";
import { ISearchProps } from "../Helper/interface";
const SearchContainer = styled.div`
  display: flex;
`;
const SearchInput = styled.input`
  width: 100%;
  border-radius: 2px;
  border: 1px solid rgb(239, 243, 244);
  padding: 10px;
  margin: 0px;

  :hover {
    border-color: #71c9f8;
    color: none;
  }
`;
const Search: React.FC<ISearchProps> = ({ placeholder, onHandleChange }) => {
  return (
    <SearchContainer>
      <SearchInput placeholder={placeholder} onChange={onHandleChange} />
    </SearchContainer>
  );
};
export default Search;
