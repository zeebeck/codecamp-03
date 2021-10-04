import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Landing = styled.div`
  width: 100%;
`;
const LandingImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

export default function LandingPage() {
  const router = useRouter();

  function onClickMove(event: any) {
    router.push(event.target.id);
  }

  return (
    <Landing>
      <LandingImage
        id="/boards"
        src="/images/landing/landing.jpeg"
        onClick={onClickMove}
      />
    </Landing>
  );
}
