import { useQuery, gql } from '@apollo/client'
import {useRouter} from 'next/router'

const FETCH_BOARD = gql`
# 여기는 주석입니다.
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`


export default function DynamicBoardRead() {

  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }
  })

  console.log(data)
  


  return(
    <>
      <div>게시물 상세 페이지 입니다.</div>
      <div>게시글 번호: {router.query.number}</div>
      <div>게시글 작성자: {data?.fetchBoard.writer}</div> 
      {/* 실무에서 더더 많이 사용 옵셔널 체이닝 */}
      {/* <div>게시글 작성자: {data ? data.fetchBoard.writer : "loading.."}</div> */}
      <div>게시글 제목: {data && data.fetchBoard.title}</div> 
      {/* 실무에서 더 많이 사용 */}
      <div>게시글 내용: {data && data.fetchBoard.contents}</div>
    </>
  )
}