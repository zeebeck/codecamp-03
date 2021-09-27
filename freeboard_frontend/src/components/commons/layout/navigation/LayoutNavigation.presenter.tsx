import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        <img src="/images/layout/product.png" />
      </MenuItem>
      <>|</>
      <MenuItem id="/markets" onClick={props.onClickMenu}>
        <img src="/images/layout/real-time-products.png" />
      </MenuItem>
      <>|</>
      <MenuItem id="/mypages" onClick={props.onClickMenu}>
        <img src="/images/layout/my-pages.png" />
      </MenuItem>
    </Wrapper>
  );
}
