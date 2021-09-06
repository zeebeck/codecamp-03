import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
# 여기는 주석입니다.
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`