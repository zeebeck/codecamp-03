import {
  Title,
  SemiTitle,
} from './05-06-dynamic-board.styles'


export default function DynamicBoardUI(props) {
  return(
    <>
      <Title>게시물 상세 페이지 입니다.</Title>
      <SemiTitle>게시글 번호: {props.router.query.number}</SemiTitle>
      <SemiTitle>게시글 작성자: {props.data?.fetchBoard.writer}</SemiTitle> 
      {/* 실무에서 더더 많이 사용 옵셔널 체이닝 */}
      {/* <div>게시글 작성자: {data ? data.fetchBoard.writer : "loading.."}</div> */}
      <SemiTitle>게시글 제목: {props.data?.fetchBoard.title}</SemiTitle> 
      {/* 실무에서 더 많이 사용 */}
      <SemiTitle>게시글 내용: {props.data?.fetchBoard.contents}</SemiTitle>
    </>
  )
} 


// const jihun = {}