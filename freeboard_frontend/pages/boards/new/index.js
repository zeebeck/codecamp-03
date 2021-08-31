import {Wrapper, HeaderTitle, Title, Label, Textarea, Address, Post_Address, Post_Input, Post_btn, Input, Youtube_box, Upload_box, Upload, Upload_content1, Upload_content2, Attach_photo, Radio_Btn, Submit_Box, Submit} from '../../../styles/BoardsNewPageStyle'


export default function BoardsNewPage() {


  return (
    <Wrapper>
      <HeaderTitle>게시물 등록</HeaderTitle>
      <Title>
        <Label htmlFor="title">제목</Label>
        <Input id="title" type="text" placeholder="제목을 입력해주세요."/>
      </Title>
      <Title>
        <Label htmlFor="">내용</Label>
        <Textarea name="" id="" cols="30" rows="10" placeholder="내용을 작성해주세요."></Textarea>
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
          <Submit type="submit">등록하기</Submit>
        </Submit_Box>
      </Attach_photo>
    </Wrapper>
  )
}