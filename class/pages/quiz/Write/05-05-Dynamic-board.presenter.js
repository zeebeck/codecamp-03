import {
  Input,
  Button,
} from './05-05-Dynamic-board.styles'


export default function DynamicBoardWriteUI(props) {

  return (
    <>
        작성자: <Input type="text" onChange={props.onChangeMyWriter} /><br />
        제목: <Input type="text" onChange={props.onChangeMyTitle} /><br />
        내용: <Input type="text" onChange={props.onChangeMyContents} /><br />
        <Button onClick={props.aaa} qqq= { props.qqq }>GRAPHQL-API 요청하기!!!</Button>
    </>
  )
}