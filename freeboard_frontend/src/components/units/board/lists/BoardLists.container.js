import BoardListsUI from "./BoardLists.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardLists.queries";
import { useRouter } from "next/router";

export default function BoardLists() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  function ClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function ClickMoveToBoardDetail(e) {
    router.push(`/boards/${e.target.id}`);
  }

  return (
    
    <BoardListsUI
      data={ data }
      ClickMoveToBoardNew={ ClickMoveToBoardNew }
      ClickMoveToBoardDetail={ ClickMoveToBoardDetail }
    />
  );
}
