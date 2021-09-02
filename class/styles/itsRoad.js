import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 639px;
  margin: auto;
  background-image: url('/itroad.png');
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 104px;
`


export const MainImage = styled.img`
  width: 100px;
`
export const MainTitle = styled.h1`
  color: white;
  font-size: 60px;
  margin-bottom: 162px;
`
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Input = styled.input`
  border: none; 
  color: white;
  background: transparent;
  width: 540px;
  height: 40px;
  font-size: 24px;
  border-bottom: 2px solid white;
  ::placeholder {
    color: white;
  }
`

export const Btn1 = styled.button`
  width: 540px;
  height: 76px;
  font-size: 26px;
  color: white;
  border-radius: 38px;
  margin-top: 50px;
  margin-bottom: 80px;
  background: #C8707E;
`
export const Btn2 = styled.button`
  background-color:transparent;
  width: 540px;
  height: 76px;
  font-size: 26px;
  color: white;
  border-radius: 38px;
  border: 2px solid #fae100;
  color: #fae100;
  margin-bottom: 80px;
`
export const email_type = styled.input`
  color: white;
`

export const Find_box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`

export const Box_text = styled.div`
  color: white;
  font-size: 20px;
  margin-right: 20px;
  margin-left: 20px;
`
export const Email = styled.div`
  width: 540px;
  height: 30px;
`
export const Warning1 = styled.div`
  width: 540px;
  height: 25px;
  font-size: 25px;
  margin-top: 15px;
  color: red;
  margin-bottom: 20px;
`

export const Warning2 = styled.div`
  width: 540px;
  height: 25px;
  font-size: 25px;
  margin-top: 3px;
  color: red;
`