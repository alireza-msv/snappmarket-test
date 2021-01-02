import * as React from 'react';
import styled from 'styled-components';

interface SearchBarProps extends React.ComponentPropsWithoutRef<'input'> {
  inputRef?: React.RefObject<HTMLInputElement>
}

const SearchInput = styled.input`
  background-color: transparent;
  height: 36px;
  border: none;
  width: 100%;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 36px;
  border-radius: 18px;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.svg`
  position: absolute;
  right: 14px;
  top: 10px;
  width: 16px;
  height: 16px;
  opacity: 0.5;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNTA1IDQ0Mi43TDQwNS4zIDM0M2MtNC41LTQuNS0xMC42LTctMTctN0gzNzJjMjcuNi0zNS4zIDQ0LTc5LjcgNDQtMTI4QzQxNiA5My4xIDMyMi45IDAgMjA4IDBTMCA5My4xIDAgMjA4czkzLjEgMjA4IDIwOCAyMDhjNDguMyAwIDkyLjctMTYuNCAxMjgtNDR2MTYuM2MwIDYuNCAyLjUgMTIuNSA3IDE3bDk5LjcgOTkuN2M5LjQgOS40IDI0LjYgOS40IDMzLjkgMGwyOC4zLTI4LjNjOS40LTkuNCA5LjQtMjQuNi4xLTM0ek0yMDggMzM2Yy03MC43IDAtMTI4LTU3LjItMTI4LTEyOCAwLTcwLjcgNTcuMi0xMjggMTI4LTEyOCA3MC43IDAgMTI4IDU3LjIgMTI4IDEyOCAwIDcwLjctNTcuMiAxMjgtMTI4IDEyOHoiLz48L3N2Zz4=");
`;

const SearchBarContainer = styled.div`
  background-color: white;
  position: fixed;
  top: 20px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 1000;
  height: 36px;
  border-radius: 18px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  
  @media (min-width: 576px) {
    max-width: 400px;
    left: calc((100% - 440px) / 2);
  }
`;
const SearchBar: React.FC<SearchBarProps> = ({ inputRef, ...props }) => (
  <SearchBarContainer>
    <SearchInput ref={inputRef} {...props} />
    <SearchIcon />
  </SearchBarContainer>
);

export default SearchBar;
