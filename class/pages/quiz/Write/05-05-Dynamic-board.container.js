import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DynamicBoardWriteUI from './05-05-Dynamic-board.presenter'
import { CREATE_BOARD } from "./05-05-Dynamic-board.queries"



export default function DynamicBoardWrite() {
    const router = useRouter()

    const [ createBoard ] = useMutation(CREATE_BOARD)
    
    const [ myWriter, setMyWriter ] = useState("")
    const [ myTitle, setMyTitle ] = useState("")
    const [ myContents, setMyContents ] = useState("")

    const[qqq, setQqq] = useState(false)

    function onChangeMyWriter(event){
    setMyWriter(event.target.value)
    if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
        setQqq(true);
        } else {
          setQqq('');
        }
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
    if (myWriter !== "" && event.target.value !== "" && myContents !== ""){
        setQqq(true);
    } else {
      setQqq('');
    }
  }
  
    function onChangeMyContents(event){
    setMyContents(event.target.value)
    if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
        setQqq(true);
    }else{
        setQqq('');
    }
    }

    async function aaa(){
        try {
            const result = await createBoard({
                variables: { writer: myWriter, title: myTitle, contents: myContents }
            })

            console.log(result)
            console.log(result.data.createBoard.number)
            router.push(`/05-06-dynamic-board-read/${result.data.createBoard.number}`) // 최신 방식(템플릿 리터럴)
            // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number) // 옛날 방식

        } catch(e) {
            console.log(e) // 실제 서비스 배포시에 자세하게 작성(예: 슬랙에 알람을 준다)
        }
    }

    return (
        <DynamicBoardWriteUI 
            onChangeMyWriter = { onChangeMyWriter }
            onChangeMyTitle = { onChangeMyTitle }
            onChangeMyContents = { onChangeMyContents }
            aaa = { aaa }
            qqq = { qqq }
        />
    )
}