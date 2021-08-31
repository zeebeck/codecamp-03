import { useState } from 'react';

export default function SinupStatePage() {
  const [ email, setEmail ] = useState("")
  const [ emailError, setEmailError] = useState("")

  const [ password1, setPassword1 ] = useState("")
  const [ password2, setPassword2 ] = useState("")


  function onChangeEmail(event) {
    // on이 포함된 이름의 이벤트 핸들러가 실행되면 event를 보내주는데, 그 event안에는 target이란 속성이 있으며,
    // 해당 속성은 모든 태그 값을 나타낸다.
    setEmail(event.target.value)
  }

  function onChangePassword1(event) {
    setPassword1(event.target.value)
  }

  function onChangePassword2(event) {
    setPassword2(event.target.value)
  }

  function onClickSignup() {
    // console.log('email : ', email);
    // console.log('password1 :', password1);
    // console.log('password2 :', password2);
    
    if(!email.includes("@")) {
      setEmailError("@가 없습니다.")
    }
    
    if(password1 !== password2) {

    }
    // (!email.includes("@") || password1 !== password2) ? alert("이메일 또는 비밀번호가 잘못 되었습니다.") : alert("로그인 되었습니다");
  }

  return (
    <>
      이메일: <input type="text" onChange={ onChangeEmail }/><br />
      <div>{ emailError }</div> { /* emotion으로 색과 사이즈 변경하기 */ }
      비밀번호: <input type="password" onChange={ onChangePassword1 }/><br />
      비밀번호확인: <input type="password" onChange={ onChangePassword2 }/><br />
      <button onClick= { onClickSignup }>회원가입하기</button>
    </>
  )
}