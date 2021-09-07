import {  
  Wrapper,
  Header,
  Left,
  Right,
  UserImg,
  UserName,
  Date,
  UserInfo, 
  LinkIcon,
  AlarmIcon,
  Main,
  Title,
  MainImg,
  Contents,
  IndieImg,
  Footer,
  ThumbUp,
  ThumbDown,
} from './BoardDetail.styles';


export default function BoardDetailUI(props) {
  
  return (
    <Wrapper>
      <Header>
        <Left>
          <UserImg>
           <img src="../../user.png" alt="" />
          </UserImg>
          <UserInfo>
            <UserName>{ props.data?.fetchBoard.writer }</UserName>
            <Date>{ props.data?.fetchBoard.createdAt }</Date>
          </UserInfo>
        </Left>
        <Right>
            <LinkIcon src="../../linkicon.png" alt="" />
            <AlarmIcon src="../../alarm.png" alt="" />
        </Right>
      </Header>
      <Main>
        <Title> { props.data?.fetchBoard.title }</Title>
        <MainImg src="../../festa.png" alt="" />
        <Contents> { props.data?.fetchBoard.contents }</Contents>
        <IndieImg src="../../indiefork.png" alt="" />
      </Main>
      <Footer>
        <ThumbUp>
          <img src="../../thumbup.png" alt="" />1983
        </ThumbUp>
        <ThumbDown>
          <img src="../../thumbdown.png" alt="" />1993 
        </ThumbDown>
      </Footer>
    </Wrapper>
  )
}