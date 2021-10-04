import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  function onClickMenu(e) {
    router.push("/boards");
  }

  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
