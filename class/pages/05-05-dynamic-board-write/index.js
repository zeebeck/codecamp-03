import { useMutation, gql } from '@apollo/client'
import { useRouter} from 'next/router'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            number
            message
        }
    }
`

export default function DynamicBoardWrite() {
    const router = useRouter()

    const [ createBoard ] = useMutation(CREATE_BOARD)
    
    const [ myWriter, setMyWriter ] = useState("")
    const [ myTitle, setMyTitle ] = useState("")
    const [ myContents, setMyContents ] = useState("")

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
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
        <>
            작성자: <input type="text" onChange={onChangeMyWriter} /><br />
            제목: <input type="text" onChange={onChangeMyTitle} /><br />
            내용: <input type="text" onChange={onChangeMyContents} /><br />
            <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
        </>
    )
}