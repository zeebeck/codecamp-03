import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 152px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: "BTTF";
  color: gold;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 13px;
  color: gold;
  cursor: pointer;
`;

export const HeaderImg = styled.img`
  width: 300px;
`;
