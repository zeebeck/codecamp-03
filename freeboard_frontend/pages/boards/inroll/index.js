import { useState } from 'react';
import { useRouter } from 'next/router'
import { useMutation, gql } from '@apollo/client'
import {  
  Wrapper, 
  HeaderTitle, 
  Title, 
  Label, 
  Textarea, 
  Address, 
  PostNumber, 
  Post_Address, 
  Post_btn, 
  Input, 
  Youtube_box, 
  Upload_box, 
  Upload, 
  Upload_content1, 
  Upload_content2, 
  Attach_photo, 
  Radio_Btn, 
  Submit_Box, 
  Submit, 
  Warning,
  WriterWrapper,
  Writer,
  Password,
  InputWrapper,
} from '../../../styles/BoardsInrollPageStyle';


const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
  createBoard(
    createBoardInput: $createBoardInput
  ){
    _id
    writer
    title
    contents
    createdAt
  }
}
`

export default function BoardsInrollPage() {
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
    <Wrapper>
        <HeaderTitle>게시판 등록</HeaderTitle>
        <WriterWrapper>
          <InputWrapper>
            <Label htmlFor="writer">작성자</Label>
            <Writer
              name="writer"
              id="writer"
              type="text"
              placeholder="이름을 적어주세요."
              onChange={ checkWriter }
            />
            <Warning>{ warningEmptyWriter }</Warning>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">비밀번호</Label>
            <Password
              name="password"
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={ checkPassword }
            />
            <Warning>{ warningPasswordError }</Warning>
          </InputWrapper>
        </WriterWrapper>
        <Title>
          <Label htmlFor="title">제목</Label>
          <Input onChange={ checkTitle } id="title" type="text" placeholder="제목을 입력해주세요."/>
          <Warning>{warningEmptyTitle}</Warning>
        </Title>
        <Title>
          <Label htmlFor="">내용</Label>
          <Textarea onChange={ checkContent } name="" id="" cols="30" rows="10" placeholder="내용을 작성해주세요."></Textarea>
          <Warning>{ warningEmptyContent }</Warning>
        </Title>
        <Address>
        <Label htmlFor="">주소</Label>
        <PostNumber>
          <Post_Address type="text" placeholder="07250" maxlength="5"/>
          <Post_btn type="submit">우편번호 검색</Post_btn>
        </PostNumber>
        <div>
          <Input type="text" />
          <Input type="text" />
        </div>
        </Address>
        <Youtube_box>
          <Label htmlFor="">유튜브</Label>
          <Input type="text" placeholder="링크를 복사해주세요."/>
          <Warning></Warning>
        </Youtube_box>
        <Attach_photo>
        <Label htmlFor="">사진 첨부</Label>
        <Upload_box>
          <Upload>
            <Upload_content1>+</Upload_content1>
            <Upload_content2>Upload</Upload_content2>
          </Upload>
          <Upload>
            <Upload_content1>+</Upload_content1>
            <Upload_content2>Upload</Upload_content2>
          </Upload>
          <Upload>
            <Upload_content1>+</Upload_content1>
            <Upload_content2>Upload</Upload_content2>
          </Upload>
        </Upload_box>
        <div>
          <Label htmlFor="">메인 설정</Label>
          <Radio_Btn type="radio" name="content" checked="checked" value="유튜브"/> 유튜브
          <Radio_Btn type="radio" name="content" value="사진"/> 사진
        </div>
        <Submit_Box>
          <Submit type="submit" onClick= { clickSubmit }>등록하기</Submit>
        </Submit_Box>
        </Attach_photo>
    </Wrapper>
  );
}