import { useMutation, gql } from '@apollo/client'


const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
      number
      message
    }
  }
`



export default function GraphqlMutationBoard2Page() {
  const [ createBoard ] = useMutation(CREATE_BOARD)


  async function aaa() {
    const result = await createBoard({
      variables: { writer: "철수", title: "철수해라!", contents: "나는 철수다 다들 철수해라!" }
    }); 
    console.log(result)
    console.log(result.data.createBoard.number)
  }


  return (
    <button onClick={aaa}>GRAPHQL-API 요청하기</button>
  )
}