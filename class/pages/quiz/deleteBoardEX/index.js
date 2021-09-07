import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'



const Row = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`
const Column = styled.div`
  width: 10%;
`


const FETCH_PRODUCTS = gql`
    query {
      fetchProducts {
        _id
        seller
        name
        price
        detail
      }
    }
    `

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
        _id
        number
        message
      }
    }
    `



export default function DeleteBoardPage() {
  const [ deleteProduct ] = useMutation(DELETE_PRODUCT)
  const { data } = useQuery(FETCH_PRODUCTS)


  function OnDeleteBoard(e) {
    deleteProduct({
      variables: { productId: e.target.id }, 
      refetchQueries: [{ query: FETCH_PRODUCTS }]
    })
    console.log(e.target.id) //  String
  }


  return (
          <>
            {
              data?.fetchProducts.map((item, index) => (
                <Row key={ item._id }>
                  <Column><input type="checkbox" /></Column>
                  <Column>{ index + 1 }</Column>
                  <Column>{ item.seller }</Column>
                  <Column>{ item.name }</Column>
                  <Column>{ item.detail }</Column>
                  <Column>
                    <button id= { item._id } onClick= { OnDeleteBoard }>삭제하기</button>
                  </Column>
                </Row>
              )).reverse()
            }
          </>
  )
}