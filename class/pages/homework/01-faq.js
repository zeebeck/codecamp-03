import { FAT, MainMenu, FooterTextMy, My_faq, FAQ, Wrapper,Q, R_arrow, Q_01, Q_01_content, Main_Content, My, Search_black, Search, R_Image, Status_bar, My_info, UserInfo, User_Profile, Name, Menu, Main, Footer, UserImage, FooterText } from '../../styles/faq';

export default function Faq() {

  return (
    <Wrapper>
      <Status_bar></Status_bar>
      <My_faq>
        <Search>
          <Search_black src="/search-black.svg" alt="" />
        </Search>
        <My_info>
          <UserInfo>
            <My>마이</My>
            <User_Profile>
              <UserImage src="/profile.png"/>
              <Name>임정아</Name>
              <R_Image src="/r-arrow.svg" alt="" />
            </User_Profile>
          </UserInfo>
          <Menu>
            <div className="menu-item1">
              <MainMenu>공지사항</MainMenu>
            </div>
            <div className="menu-item2">
              <MainMenu>이벤트</MainMenu>
            </div>
            <FAQ>
                <MainMenu>FAQ</MainMenu>
            </FAQ>
            <div className="menu-item4">
              <MainMenu>Q&A</MainMenu>
            </div>
          </Menu>
          <Main>
            <Main_Content>
              <Q>
                <Q_01>Q.01</Q_01>
                <Q_01_content>리뷰 작성은 어떻게 하나요?</Q_01_content>
              </Q>
              <R_arrow>
                <img src="/d-arrow.svg" alt="" />
              </R_arrow>
            </Main_Content>
            <Main_Content>
              <Q>
                <Q_01>Q.02</Q_01>
                <Q_01_content>리뷰 수정/삭제는 어떻게 하나요?</Q_01_content>
              </Q>
              <Q>
                <img src="/d-arrow.svg" alt="" />
              </Q>
            </Main_Content>
            <Main_Content>
              <Q>
                <Q_01>Q.03</Q_01>
                <Q_01_content>아이디/비밀번호를 잊어버렸어요.</Q_01_content>
              </Q>
              <R_arrow>
                <img src="/d-arrow.svg" alt="" />
              </R_arrow>
            </Main_Content>
            <Main_Content>
              <Q>
                <Q_01>Q.04</Q_01>
                <Q_01_content>회원탈퇴를 하고싶어요.</Q_01_content>
              </Q>
              <R_arrow>
                <img src="/d-arrow.svg" alt="" />
              </R_arrow>
            </Main_Content>
            <Main_Content>
              <Q>
                <Q_01>Q.05</Q_01>
                <Q_01_content>출발지 설정은 어떻게 하나요?</Q_01_content>
              </Q>
              <R_arrow>
                <img src="/d-arrow.svg" alt="" />
              </R_arrow>
            </Main_Content>
            <Main_Content>
              <Q>
                <Q_01>Q.06</Q_01>
                <Q_01_content>비밀번호를 변경하고 싶어요.</Q_01_content>
              </Q>
              <R_arrow>
                <img src="/d-arrow.svg" alt="" />
              </R_arrow>
            </Main_Content>
          </Main>
          <Footer>
            <div className="home">
              <img src="/home.svg" alt="" />
              <FooterText>홈</FooterText>
            </div>
            <div className="location">
              <img src="/location.svg" alt="" />
              <FooterText>잇츠로드</FooterText>
            </div>
            <div className="like">
              <img src="/like.svg" alt="" />
              <FooterText>마이찜</FooterText>
            </div>
            <div className="my">
              <img src="/my.svg" alt="" />
              <FooterTextMy>마이</FooterTextMy>
            </div>
          </Footer>
        </My_info>
      </My_faq>
    </Wrapper>
  )
}