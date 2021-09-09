import {  
  Wrapper,
  HeaderTitle,
  Title,
  WriterWrapper,
  Writer,
  Password,
  InputWrapper,
  Label,
  Textarea,
  Warning,
  Address,
  Input,
  Upload_box,
  Upload,
  Upload_content1,
  Upload_content2,
  Post_Address,
  PostNumber,
  Post_btn,
  Youtube_box,
  Attach_photo,
  Submit_Box,
  Radio_Btn,
  Submit,
  SubmitButton,
  CancelButton,
  ButtonWrapper,
} from './BoardEnroll.styles'



export default function BoardEnrollUI(props) {
  return (
    <Wrapper>
        <HeaderTitle>{props.isEdit ? "게시판 수정" : "게시판 등록"}</HeaderTitle>
        <WriterWrapper>
          <InputWrapper>
            <Label htmlFor="writer">작성자</Label>
            <Writer
              name="writer"
              id="writer"
              type="text"
              placeholder="이름을 적어주세요."
              onChange={ props.checkWriter }
            />
            <Warning>{ props.warningEmptyWriter }</Warning>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">비밀번호</Label>
            <Password
              name="password"
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={ props.checkPassword }
            />
            <Warning>{ props.warningPasswordError }</Warning>
          </InputWrapper>
        </WriterWrapper>
        <Title>
          <Label htmlFor="title">제목</Label>
          <Input onChange={ props.checkTitle } id="title" type="text" placeholder="제목을 입력해주세요."/>
          <Warning>{ props.warningEmptyTitle }</Warning>
        </Title>
        <Title>
          <Label htmlFor="">내용</Label>
          <Textarea onChange={ props.checkContent } name="" id="" cols="30" rows="10" placeholder="내용을 작성해주세요."></Textarea>
          <Warning>{ props.warningEmptyContent }</Warning>
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
        <ButtonWrapper>
          { !props.isEdit && (
            <SubmitButton onClick={ props.clickSubmit } isActive={ props.isActive } disabled={ !props.isActive }>
              등록하기
            </SubmitButton>
          )}
          { props.isEdit && (
            <SubmitButton onClick={ props.ClickUpdate } isActive={ true }>
              수정하기
            </SubmitButton>
          )}
        </ButtonWrapper>
        </Attach_photo>
    </Wrapper>
  );
}

  