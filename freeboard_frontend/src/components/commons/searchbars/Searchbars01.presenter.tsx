import {
  SearchOutline,
  Searchbar,
  SearchbarInput,
} from "./Searchbars01.styles";
import { ISearchbars01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    <Searchbar>
      <SearchOutline />
      <SearchbarInput
        placeholder="찾고 싶은 단어로 검색하세요"
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
