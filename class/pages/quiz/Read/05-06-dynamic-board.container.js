import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import DynamicBoardUI from './05-06-dynamic-board.presenter'
import { FETCH_BOARD } from './05-06-dynamic-board.queries'

export default function DynamicBoardRead() {

  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }
  })


  return (
    <DynamicBoardUI
    router= { router }
    data = { data }
    />
  )
}