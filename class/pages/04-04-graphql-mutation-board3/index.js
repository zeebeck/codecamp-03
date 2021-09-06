import { useMutation, gql } from '@apollo/client'
import { useState } from 'react';


const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
      number
      message
    }
  }
`



export default function GraphqlMutationBoard3Page() {
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [ myWriter, setMyWriter] = useState("")
  const [ myTitle, setMyTitle ] = useState("")
  const [ myContents, setMyContents ] = useState("")

  function onChangeMyWriter(e) {
    setMyWriter(e.target.value)
  }

  function onChangeMyTitle(e) {
    setMyTitle(e.target.value)
  }

  function OnChangeMyContents(e) {
    setMyContents(e.target.value)
  }

  async function aaa() {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents }
    }); 
    console.log(result)
    console.log(result.data.createBoard.number)
  }


  return (
    <>
      작성자: <input type="text" onChange={ onChangeMyWriter }/><br />
      제목: <input type="text" onChange={ onChangeMyTitle }/><br />
      내용: <input type="text" onChange={ OnChangeMyContents }/><br />
      <button onClick={aaa}>GRAPHQL-API 요청하기</button>
    </>
  )
}