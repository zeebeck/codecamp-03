
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
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
} from '../../../../styles/BoardDetailPageStyle';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
  fetchBoard(boardId: $boardId){
    writer
    createdAt
    title
    contents
  }
}
`


export default function BoardDetailPage() {
  const router = useRouter()

  const { data } = useQuery( FETCH_BOARD, {
    variables: { boardId: router.query.url }
  })
  
  return (
    <Wrapper>
      <Header>
        <Left>
          <UserImg>
           <img src="../../user.png" alt="" />
          </UserImg>
          <UserInfo>
            <UserName>{ data?.fetchBoard.writer }</UserName>
            <Date>{ data?.fetchBoard.createdAt }</Date>
          </UserInfo>
        </Left>
        <Right>
            <LinkIcon src="../../linkicon.png" alt="" />
            <AlarmIcon src="../../alarm.png" alt="" />
        </Right>
      </Header>
      <Main>
        <Title> { data?.fetchBoard.title }</Title>
        <MainImg src="../../festa.png" alt="" />
        <Contents> { data?.fetchBoard.contents }</Contents>
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