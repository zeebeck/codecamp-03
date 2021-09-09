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
      } from '../../../styles/BoardsNewPageStyle'





import { useState } from 'react';
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
  mutation ($createBoardInput:CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      title
      contents
    }
}
`

export default function BoardsNewPage() {

  

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [youtube, setYoutube] = useState('')

  const [warningEmptyTitle, setWarningEmptyTitle] = useState('')
  const [warningEmptyContent, setWarningEmptyContent] = useState('')


  const [button, setButton] = useState('')

  function checkTitle(e) {
    setTitle(e.target.value)
  }

  function checkContent(e) {
    setContent(e.target.value)
  }

  function checkYoutube(e) {
    setYoutube(e.target.value)
  }

  function checkValidation() {
    if (content === '') {
      setWarningEmptyContent('내용을 입력해주세요')
    }

    if (title === '') {
      setWarningEmptyTitle('제목을 입력해주세요')
    }

    if (content && title) {
      setWarningEmptyContent('')
      setWarningEmptyTitle('')
    }
  }

  const [creatBoard] = useMutation(CREATE_BOARD) 

  async function CreateBoardAPI() {
    const result = await creatBoard({
      variables: {
        createBoardInput: {
          title: title,
          contents: content,
          youtubeUrl: youtube,
        }
      }
    })
    console.log(result)
  }

  return (
    <Wrapper>
      <HeaderTitle>게시물 등록</HeaderTitle>
      <Title>
        <Label htmlFor="title">제목</Label>
        <Input onChange={ checkTitle } id="title" type="text" placeholder="제목을 입력해주세요."/>
        <Warning>{warningEmptyTitle}</Warning>
      </Title>
      <Title>
        <Label htmlFor="">내용</Label>
        <Textarea onChange={ checkContent } name="" id="" cols="30" rows="10" placeholder="내용을 작성해주세요."></Textarea>
        <Warning>{warningEmptyContent}</Warning>
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
        <Input onChange={ checkYoutube } type="text" placeholder="링크를 복사해주세요."/>
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
          <Submit type="submit" onClick= { CreateBoardAPI, checkValidation }>등록하기</Submit>
        </Submit_Box>
      </Attach_photo>
    </Wrapper>
  )
}