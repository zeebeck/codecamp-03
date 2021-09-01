import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1000px;
  margin: auto;
  border: 1px solid black;
  box-shadow: 0px 4px 20px; 
  padding: 40px 102px;
`
export const HeaderTitle = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 100px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`
export const Textarea = styled.textarea`
  width: 796px;
  height: 480px;
  padding-top: 10px;
  padding-left: 10px;
  resize: none;
  ::placeholder {
    color: #BDBDBD;
    font-size: 14px;
  }
`

export const Warning = styled.div`
  height: 20px;
  font-size: 15px;
  color: red;
`



export const Address = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`


export const Input = styled.input`
  margin-top: 5px;
  width: 796px;
  height: 32px;
  border: 1px solid #BDBDBD;
  padding-top: 14px;
  padding-left: 10px;
  padding-bottom: 14px;
  ::placeholder {
    color: #BDBDBD;
  }
`

export const Upload_box = styled.div`
  margin-top: 10px;
  display: flex;
  margin-bottom: 40px;
`
export const Upload = styled.div`
  width: 76px;
  height: 76px;
  margin-right: 15px;
  padding-top: 20px;
  background: #BDBDBD;
  text-align: center;
  color: #4F4F4F;
`
export const Upload_content1 = styled.div`
  font-size: 24px;
`
export const Upload_content2 = styled.div`
  font-size: 12px;
`

export const Post_Address = styled.input`
  width: 67px;
  height: 42px;
  margin-right: 10px;
  ::placeholder {
    color: #BDBDBD;
    text-align: center;
  }
`

export const PostNumber = styled.div`
  display: flex;
  align-items: center;
`


export const Post_Input = styled.input`

`

export const Post_btn = styled.button`
  width: 100px;
  height: 42px;
  background: black;
  color: white;
  text-align: center;
`

export const Youtube_box = styled.div`
  margin-top: 40px;
`

export const Attach_photo = styled.div`
  margin-top: 40px;
`

export const Submit_Box = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`

export const Radio_Btn = styled.input`
  input[type='radio']:checked {
    color: #FFD600;
  }

`

export const Submit = styled.button`
  padding: 5px 15px;
  border: none;
  background-color: #FFD600;
  width: 130px;
  height: 42px;
`