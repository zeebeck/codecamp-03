import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardEnrollUI from "./BoardEnroll.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardEnroll.queries";
  


export default function BoardEnroll(props) {
  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  const [warningEmptyWriter, setWarningEmptyWriter] = useState('')
  const [warningPasswordError, setWarningPasswordError] = useState('')
  const [warningEmptyTitle, setWarningEmptyTitle] = useState('')
  const [warningEmptyContent, setWarningEmptyContent] = useState('')

  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [ updateBoard ] = useMutation(UPDATE_BOARD)

  const router = useRouter()
  const [ isActive, setIsActive ] = useState(false)

  function checkWriter(e) {
    setWriter(e.target.value)
    if(e.target.value !== "") {
      setWarningEmptyWriter("")
    }

    if(e.target.value !== "" && password !== "" && title !== "" && contents !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  function checkPassword(e) {
    setPassword(e.target.value)
    if(e.target.value !== "") {
      setWarningPasswordError("")
    }

    if(writer !== "" && e.target.value !== "" && title !== "" && contents !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  function checkTitle(e) {
    setTitle(e.target.value)
    if(e.target.value !== "") {
      setWarningEmptyTitle("")
    }
    if(writer !== "" && password !== "" && e.target.value !== "" && contents !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  function checkContent(e) {
    setContents(e.target.value)
    if(e.target.value !== "") {
      setWarningEmptyContent("")
    }

    if(writer !== "" && password !== "" && title !== "" && e.target.value !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }




  async function clickSubmit(){
    if(writer === ""){
      setWarningEmptyWriter("작성자를 입력해주세요.")
    }
    if(password === ""){
      setWarningPasswordError("비밀번호를 입력해주세요.")
    }
    if(title === ""){
      setWarningEmptyTitle("제목을 입력해주세요.")
    }
    if(contents === ""){
      setWarningEmptyContent("내용을 입력해주세요.")
    }
   
    if(writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
            },
          },
        });
        // console.log(result.data.createBoard._id)
        router.push(`/boards/${result.data.createBoard._id}`)
      } catch(e){
        console.log(e)
      }
    }
  }


  async function ClickUpdate(){
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.url,
          password: password,
          updateBoardInput: { title: title, contents: contents, },
        },
      });
      alert("수정 되었습니다")
      router.push(`/boards/${result.data.updateBoard._id}`)
    } catch(e){
      // console.log(err.message)
      alert(e.message)
    }
  }

  return (
    <BoardEnrollUI 
      isActive={ isActive }
      checkWriter= { checkWriter }
      checkPassword= { checkPassword }
      checkTitle= { checkTitle }
      checkContent= { checkContent }
      clickSubmit= { clickSubmit }    
      warningEmptyWriter= { warningEmptyWriter }
      warningPasswordError= { warningPasswordError }  
      warningEmptyTitle= { warningEmptyTitle }
      warningEmptyContent= { warningEmptyContent }

      isEdit={ props.isEdit }
      ClickUpdate={ ClickUpdate }
    />
  )
}