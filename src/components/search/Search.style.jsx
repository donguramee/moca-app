import styled from "styled-components";
import search from "../../assets/images/search.svg";

export const SearchInputWrapper = styled.label`
  width: 80%;
  height: 2.5rem;
  border: 2.5px solid var(--secondary-color);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 35px 0 40px 0;
  padding: 0 20px;
  background-color: #fff;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  border: 0;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b8b8b8;
  }
`;

export const SearchButton = styled.button`
  width: 25px;
  height: 25px;
  background: url(${search}) no-repeat center;
  cursor: pointer;
`;
