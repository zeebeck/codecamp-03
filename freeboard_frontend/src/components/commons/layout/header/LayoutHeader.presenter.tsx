import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
  HeaderImg,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>
          <HeaderImg src="/images/layout/header-logo.png" />
        </InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>
            <img src="/images/layout/signin.png" />
          </InnerButton>
          <InnerButton>
            <img src="/images/layout/signup.png" />
          </InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
