import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: black;
  color: yellow;
  width: 1200px;
  margin: 100px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: white;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: white;
    font-size: 18px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  @font-face {
    font-family: "BTTF";
    src: local("/Fonts/BTTF.ttf");
  }
  width: 171px;
  height: 52px;
  background-color: black;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
  }
`;
