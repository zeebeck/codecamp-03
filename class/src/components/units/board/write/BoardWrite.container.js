import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from 'react';
import { useMutation } from '@apollo/client'
import { CREATE_BOARD } from "./BoardWrite.queries";


export default function BoardWrite() {
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [ myWriter, setMyWriter] = useState("")
  const [ myTitle, setMyTitle ] = useState("")
  const [ myContents, setMyContents ] = useState("")

  const [ zzz ] = useState(true)
  const [ qqq, setQQQ ] = useState(false)


  function onChangeMyWriter(e) {
    setMyWriter(e.target.value)
    if (e.target.value !== "" && myTitle !== "" && myContents !== "") {
      setQQQ(true)
    }
  }

  function onChangeMyTitle(e) {
    setMyTitle(e.target.value)
    if (myWriter !== "" && e.target.value !== "" && myContents !== "") {
      setQQQ(true)
    }
  }

  function OnChangeMyContents(e) {
    setMyContents(e.target.value)
    if (myWriter !== "" && myTitle !== "" && e.target.value !== "") {
      setQQQ(true)
    }
  }

  async function aaa() {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents }
    }); 
    console.log(result)
    console.log(result.data.createBoard.number)
  }

  return (
          <BoardWriteUI 
            onChangeMyWriter= { onChangeMyWriter }
            onChangeMyTitle= { onChangeMyTitle }
            OnChangeMyContents= { OnChangeMyContents }
            aaa= { aaa }
            zzz= { zzz }
            qqq= { qqq }
            />
  )
}