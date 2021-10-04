import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 100%px;
  height: 52px;
  background-color: grey;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchOutline = styled(SearchOutlined)`
  color: yellow;
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const SearchbarInput = styled.input`
  ::placeholder {
    color: white;
  }
  width: 100%;
  height: 100%;
  color: yellow;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;
