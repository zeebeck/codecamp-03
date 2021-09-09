import {
  Wrapper,
  TableTop,
  TableBottom,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  PencilIcon,
  Button,
} from "./BoardLists.styles";

export default function BoardListsUI(props) {
  return (
    <Wrapper>
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번 호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제 목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {
        props.data?.fetchBoards.map((item, index) => (
          <Row key={item._id}>
            <ColumnBasic>{ 10 - index }</ColumnBasic>
            <ColumnTitle id={ item._id } onClick={ props.ClickMoveToBoardDetail }>
              { item.title }
            </ColumnTitle>
            <ColumnBasic>{ item.writer }</ColumnBasic>
            <ColumnBasic>{ item.createdAt }</ColumnBasic>
          </Row>
        ))
      }
      <TableBottom />
      <Footer>
        <Button onClick={props.ClickMoveToBoardNew}>
          <PencilIcon src="./write.png" />
          게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
