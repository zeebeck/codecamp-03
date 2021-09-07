import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'

  const FETCH_BOARDS = gql`
  query {
    fetchBoards{
      number
      writer
      title
      contents
      createdAt
    }
  }
`


const Row = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`
const Column = styled.div`
  width: 20%;
`
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number:$number) {
      message
    }
  }
`



export default function MapSelectorPage() {
  const [ deleteboard ] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARDS) // [{}, {}, {}]



  async function onClickDelete(e) {
    
    await deleteboard({
      variables: {
        number: Number(e.target.id)
      },
      refetchQueries: [{ query: FETCH_BOARDS }] // 새로고침하지 않으면 새로운 결과가 즉시 나오지 않음
    })
  }


  return (
    <div>
        {data?.fetchBoards.map((el, index) => (
          <Row key={ el.number }>
            <Column><input type="checkbox" /></Column>
            <Column>{ index }</Column>
            <Column>{ el.title }</Column>
            <Column>{ el.createdAt }</Column>
            <Column>
              <button id= { el.number } onClick= { onClickDelete }>삭제하기</button>
            </Column>
          </Row>
        ))}
    </div>
  )
}