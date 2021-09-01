import { 
  Wrapper, 
  Header, 
  MainImage, 
  MainTitle, 
  MainContent, 
  Input, 
  Btn1,
  Btn2, 
  Find_box,
  Box_text,
  Email,
  Warning1,
  Warning2,
  email_type,
} from '../../../styles/itsRoad';


import { useState } from 'react';


export default function ItsRoad() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [button, setButton] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  function onCheckEmail(e) {
    setEmail(e.target.value)
  }

  function onCheckPassword(e) {
    setButton(e.target.value)
  }

  function onClickSignUp() {
    if (!email.includes('@') || email.length == 0) {
      setEmailError("이메일 주소를 다시 확인해주세요.")
    }

    if (password === "" || password.length < 8) {
      setPasswordError("8-16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
    }
  }

  return (
      <Wrapper>
        <Header>
          <MainImage src="/its.svg" alt="" />
          <MainTitle>잇츠로드</MainTitle>
        </Header>
        <MainContent>
          <Email>
            <Input onChange= { onCheckEmail } type="email" placeholder="이메일 주소를 입력하세요"></Input>
            {/* <img src="/x-btn.svg" alt="" /> */}
          </Email>
          <Warning1>{emailError}</Warning1>
          <div className="password">
            <Input onChange= {onCheckPassword} type="password" placeholder="패스워드를 입력하세요" />
            {/* <img src="/x-btn.svg" alt="" /> */}
          </div>
          <Warning2>{passwordError}</Warning2>
          <Btn1 onClick= {onClickSignUp}>로그인</Btn1>
          <Find_box>
            <Box_text>이메일 찾기</Box_text> |
            <Box_text>비밀번호 찾기</Box_text> |
            <Box_text>회원가입</Box_text>
          </Find_box>
          <Btn2>카카오톡으로 로그인</Btn2>
        </MainContent>
      </Wrapper>
  )
}