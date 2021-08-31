import { ErrorMessage, layOutDiv, SuccessLoginMessage } from '../../styles/02-4-1-state';


import { useState } from 'react';

export default function MemberShip() {

  const [ userEmail, setUserEmail ] = useState("")
  const [ userPassword1, setUserPassword1 ] = useState("")
  const [ userPassword2, setUserPassword2 ] = useState("")
  const [ emailError, setEmailError] = useState("")
  const [ passwordError, setPasswordError ] = useState("")
  const [ successLogin, setSuccessLogin ] = useState("")


  function handleChangeEmail(e) {
    setUserEmail(e.target.value)
  }

  function handleChangePassword1(e) {
    setUserPassword1(e.target.value)
  }

  function handleChangePassword2(e) {
    setUserPassword2(e.target.value)
  }

  function checkValidation() {
    
    if (!userEmail.includes('@')) {
      setEmailError('Email 양식이 잘못되었습니다.')
    }

    if (userPassword1 !== userPassword2) {
      setPasswordError('PassWord가 잘못되었습니다.')
    }

    if (userEmail.includes('@') && (userPassword1 === userPassword2)) {
      setSuccessLogin('성공적으로 로그인 되었습니다.')
    } else {
      setSuccessLogin('')
    }
  }





  return (
    <layOutDiv>
      <div className="">이메일 : <input type="email" onChange= { handleChangeEmail }/></div>
      <ErrorMessage> { emailError } </ErrorMessage>
      <div className="">비밀번호 : <input type="password" onChange= { handleChangePassword1 }/></div>
      <div className="">비밀번호확인 : <input type="password" onChange= { handleChangePassword2 }/></div>
      <ErrorMessage> { passwordError } </ErrorMessage>
      <div className=""><button onClick= { checkValidation }>가입하기</button></div>
      <SuccessLoginMessage> { successLogin } </SuccessLoginMessage>
    </layOutDiv>
  )
}