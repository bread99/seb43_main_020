import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MyAccount = styled.div`
  font-weight: bold;
  width: 60%;
  font-size: 20px;
  padding-bottom: 10px;
  margin: 0;
  margin-bottom: 16px;
`;

const NavButton = styled.button`
  background-color: ${(props) => (props.activeButton ? "#ddd" : "white")};
  color: ${(props) => (props.activeButton ? "#fff" : "#333")};
  font-size: 16px;
  border: none;
  padding: 12px;
  margin: 0;
  cursor: pointer;
  width: 60%;
  border-radius: 10px;
  padding-left: 50px;
  text-align: left;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    background-color: #ddd;
    color: #fff;
  }
`;

function UserinfoNav({ activeButton, onButtonClick }) {
  return (
    <NavWrapper>
      <MyAccount>내 계정</MyAccount>
      <NavButton
        className={activeButton === "profile" ? "active" : ""}
        onClick={() => {
          window.location.href = "/mypage/profile";
          onButtonClick("profile");
        }}
      >
        회원정보
      </NavButton>
      <NavButton
        className={activeButton === "posting" ? "active" : ""}
        onClick={() => {
          window.location.href = "/mypage/posting";
          onButtonClick("posting");
        }}
      >
        내 게시글
      </NavButton>
      <NavButton
        className={activeButton === "comment" ? "active" : ""}
        onClick={() => {
          window.location.href = "/mypage/comment";
          onButtonClick("comment");
        }}
      >
        내 댓글
      </NavButton>
      <NavButton
        className={activeButton === "scrap" ? "active" : ""}
        onClick={() => {
          window.location.href = "/mypage/scrap";
          onButtonClick("scrap");
        }}
      >
        내 스크랩
      </NavButton>
    </NavWrapper>
  );
}

export default UserinfoNav;
