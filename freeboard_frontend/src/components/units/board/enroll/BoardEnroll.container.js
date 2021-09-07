import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardEnrollUI from "./BoardEnroll.presenter";
import { CREATE_BOARD } from "./BoardEnroll.queries";
  


export default function BoardEnroll() {
  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  const [warningEmptyWriter, setWarningEmptyWriter] = useState('')
  const [warningPasswordError, setWarningPasswordError] = useState('')
  const [warningEmptyTitle, setWarningEmptyTitle] = useState('')
  const [warningEmptyContent, setWarningEmptyContent] = useState('')

  const [ createBoard ] = useMutation(CREATE_BOARD)
  const router = useRouter()

  function checkWriter(e) {
    setWriter(e.target.value)
    if(e.target.value !== "") {
      setWarningEmptyWriter("")
    }
  }

  function checkPassword(e) {
    setPassword(e.target.value)
    if(e.target.value !== "") {
      setWarningPasswordError("")
    }
  }

  function checkTitle(e) {
    setTitle(e.target.value)
    if(e.target.value !== "") {
      setWarningEmptyTitle("")
    }
  }

  function checkContent(e) {
    setContents(e.target.value)
    if(e.target.value !== "") {
      setWarningEmptyContent("")
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
      alert('게시물이 등록되었습니다.')
      }


    try{
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
          }
        }

      })

      router.push(`/boards/Details/${result.data.createBoard._id}`)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <BoardEnrollUI 
      checkWriter= { checkWriter }
      checkPassword= { checkPassword }
      checkTitle= { checkTitle }
      checkContent= { checkContent }
      clickSubmit= { clickSubmit }    
      warningEmptyWriter= { warningEmptyWriter }
      warningPasswordError= { warningPasswordError }  
      warningEmptyTitle= { warningEmptyTitle }
      warningEmptyContent= { warningEmptyContent }
    />
  )
}