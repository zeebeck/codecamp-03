import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";


export default function BoardDetail() {
  const router = useRouter()
  const [ deleteBoard ] = useMutation(DELETE_BOARD);



  const { data } = useQuery( FETCH_BOARD, {
    variables: { boardId: router.query.url }
  })


  function ClickMoveToList() {
    router.push('/boards')
  }

  function ClickMoveToEdit() {
    router.push(`/boards/${ router.query.url }/edits`)
  }

  async function ClickDelete() {
    try {
      await deleteBoard( { variables: { boardId: router.query.url } });
      alert("게시물이 삭제 되었습니다.");
      router.push("/boards");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <BoardDetailUI 
    
    ClickMoveToList= { ClickMoveToList }
    ClickMoveToEdit= { ClickMoveToEdit }
    ClickDelete= { ClickDelete }
    data= { data }
    
    />
  )
}