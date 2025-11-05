import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  max-width: 402px;
  flex-shrink: 0;
  padding-bottom: 200px;

  @media screen and (min-width: 768px) {
    max-width: 100%; /* ✅ PC에서 화면이 꽉 차게 */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fff;
  }
`;

// 모바일에서만 보이게
export const MobileOnly = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

// PC에서만 보이게
export const DesktopOnly = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 402px;
  height: 54px;
  flex-shrink: 0;
  padding: 15px 17px;
  justify-content: space-between;
  align-items: center;

  #back {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  #bookmark {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
`;

export const Hr = styled.div`
  width: 368px;
  height: 1px;
  flex-shrink: 0;
  background: #d9d9d9;
  margin-top: 6px;
  margin-left: 17px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 130px 0 75px;
  height: 100px;

  #logo {
    width: 188px;
  }
`;

export const Menu = styled.div`
  width: 800px;
  // height: 22px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 120px;

  #tag {
    margin-top: 16px;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    display: flex;

    #circle {
      margin-top: -3px;
      margin-left: 35px;
      width: 6px;
      height: 6px;
      flex-shrink: 0;
      background-color: #213ce9;
      border-radius: 50%;
      position: absolute;
    }
  }
`;

export const Body = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column; // 기본: 모바일 세로 정렬

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center; // 중앙 정렬
    gap: 60px;
    align-items: flex-start;
  }
`;

export const LeftPannel = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 620px;
    margin-top: 75px;
  }
`;

export const RightPannel = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 368px;
    margin-top: 162px;
  }
`;

export const Up = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  align-items: start;

  @media screen and (min-width: 768px) {
    width: 620px;
  }
`;

export const Category = styled.div`
  display: flex;
  width: 68px;
  height: 25px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #213ce9;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.28px;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    display: inline-flex; /* ✅ inline-flex로 바꿔서 텍스트 크기에 맞게 조정 */
    width: auto; /* ✅ 고정된 width 제거 */
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    border: 2px solid #213ce9;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    background: transparent;
  }
`;

export const Title = styled.div`
  margin-top: 5px;
  text-align: left;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
  letter-spacing: -0.4px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    color: #000;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 107.143% */
    letter-spacing: -0.56px;
  }
`;

export const Date = styled.div`
  margin-top: 20px;
  color: #a9a9a9;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.26px;
  text-align: left;

  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
`;

export const Img = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* ✅ 넘치는 부분 잘라내기 */
  width: 368px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* ✅ 이미지 비율 유지하며 자르기 */
  }

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    width: 620px;

    img {
      width: 100%;
      object-fit: cover; /* ✅ 이미지 비율 유지하며 자르기 */
    }
  }
`;

export const Exp = styled.div`
  color: #b2b2b2;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  width: 368px;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    color: #969696;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 368px;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    width: 620px;
  }
`;

export const Content = styled.div`
  text-align: left;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 2; /* ✅ 줄 간격 늘림 */

  max-height: ${({ expanded }) => (expanded ? "none" : "125px")};
  /* 25px(line-height) x 5줄 = 125px */
  overflow: hidden;
  transition: max-height 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 620px;
    text-align: left;

    max-height: ${({ expanded }) => (expanded ? "none" : "250px")};
  }
`;

export const GradientOverlay = styled.div`
  display: ${({ expanded }) => (expanded ? "none" : "block")};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px; /* 흐려지는 영역 높이 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
`;

export const Button = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */
  display: flex;
  width: 151px;
  height: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #213ce9;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
  margin-top: 24px;

  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;

export const Related = styled.div`
  margin-top: 77px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 620px;
    align-items: start;
  }
`;

export const RTitle = styled.div`
  width: 73px;
  height: 35px;
  flex-shrink: 0;
  margin-right: auto;
  background-image: url("/images/bubble.svg");
  justify-content: center;
  align-items: center;
  display: flex;
  color: #213ce9;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const List = styled.div`
  width: 368px;
  margin-top: 20px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

export const Mass = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  align-items: center;
`;

export const Component = styled.div`
  width: 368px;
  height: 132px;
  flex-shrink: 0;
  border-radius: 20px;
  background: linear-gradient(273deg, #213ce9 1.52%, #c3cbff 98.83%);
  padding: 19px 11px 17px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  z-index: 2;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 239px;
  height: 100%;
  justify-content: space-between;
`;

export const ATitle = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
`;

export const ACC = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
`;

export const ADate = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.26px;
`;

export const Rate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dropdown = styled.div`
  width: 368px;
  background: #ebedff;
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  margin-top: -18px;
  max-height: ${({ expanded }) => (expanded ? "500px" : "0")};
  opacity: ${({ expanded }) => (expanded ? "1" : "0")};
  transition: max-height 0.4s ease, opacity 0.4s ease;
  padding: ${({ expanded }) => (expanded ? "20px" : "0 20px")};
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    color: #686868;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.6; /* ✅ 줄 간격 늘림 */
    list-style-position: inside; /* ✅ bullet을 ul 내부로 이동 */
    padding-left: 1.5em; /* 전체 들여쓰기 (점 + 여백 확보) */
    text-indent: -1.2em; /* 첫 줄만 당겨서 점 옆으로 맞추기 */
  }

  ul {
    ul {
      width: 350px !important; /* 우선순위 높이기 */
      gap: 6px;
    }
    display: flex;
    flex-direction: column;
    gap: 6px; /* ✅ li들 간격 */
  }
`;

export const DropTitle = styled.div`
  margin-top: 15px;
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Go = styled.div`
  width: 368px;
  height: 47px;
  border-radius: 0 0 200px 200px;
  background: #ebedff;
  color: #7c8dd9;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  padding: 23px 0;
  margin-top: -18px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #dfe4ff;
  }
`;

export const Comment = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 368px;
  align-items: start;

  @media screen and (min-width: 768px) {
    widith: 620px;
    margin-top: 60px;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 368px;
  text-align: left;

  #num {
    color: #213ce9;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
  }

  #detail {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    width: 16px;
    height: 16px;
    aspect-ratio: 1/1;
    margin-left: 5px;
  }
`;

export const Input = styled.div`
  width: 368px;
  height: 242px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #a5b1ff;
  background: #eceeff;
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 620px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 368px;
  align-items: center;
  padding: 8px 9px;

  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    // background: #fff;
    // border-radius: 50%;
  }

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 123.077% */
    letter-spacing: -0.325px;
  }
`;

export const TextArea = styled.div`
  margin-top: 12px;
  width: 338px;
  text-align: left;
  margin-left: 15px;

  textarea {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.325px;
    width: 338px;
    height: 120px;
    background: transparent;
    border: none;
    outline: none;
    resize: none; /* 크기 조절 막기 */

    &placeholder {
      color: #686868;
      font-family: Pretendard;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.325px;
    }

    @media screen and (min-width: 768px) {
      width: 580px;

      textarea {
        font-size: 15px;
      }
    }
  }
`;

export const IHr = styled.div`
  width: 366px;
  height: 1px;
  flex-shrink: 0;
  background: #d9d9d9;
  margin-left: 1px;
  margin-top: auto;

  @media screen and (min-width: 768px) {
    width: 618px;
  }
`;

export const Down = styled.div`
  width: 368px;
  padding: 7px 7px 12px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 620px;
  }
`;

export const Char = styled.div`
  display: flex;
  flex-direction: row;

  #now {
    color: #686868;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.325px;
  }

  #max {
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.325px;
  }

  @media screen and (min-width: 768px) {
    #now {
      font-size: 15px;
    }

    #max {
      font-size: 15px;
    }
  }
`;

export const Btn = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.22px;
  display: flex;
  width: 42px;
  height: 24px;
  justify-content: center;
  align-items: center;
  gap: 3.911px;
  flex-shrink: 0;
  border-radius: 11.734px;

  /* ✅ 상태에 따른 스타일 변경 */
  background: ${({ active }) => (active ? "#213CE9" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#213CE9")};
  cursor: ${({ active }) => (active ? "pointer" : "default")};
  transition: background 0.2s ease, color 0.2s ease;
`;

export const Sort = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
  width: 368px;
  margin-top: 25px;
  text-align: left;
  margin-left: 8px;
  margin-bottom: 6px;

  #new {
    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  #up {
    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  @media screen and (min-width: 768px) {
    #new {
      font-size: 15px;
    }

    #up {
      font-size: 15px;
    }
  }
`;

export const RList = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 620px;
  }
`;

export const Comp = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 23px;
    width: 620px;
  }
`;

export const Small = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;

  #username {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 123.077% */
    letter-spacing: -0.325px;
  }

  #date {
    color: #aaa;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.25px;
  }

  @media screen and (min-width: 768px) {
    width: 620px;

    #username {
      color: #000;
      font-family: Pretendard;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px; /* 106.667% */
      letter-spacing: -0.375px;
    }

    #date {
      color: #aaa;
      font-family: Pretendard;
      font-size: 13px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: -0.325px;
    }
  }
`;

export const CDet = styled.div`
  width: 360px;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
  text-align: left;
  margin-top: 9px;

  @media screen and (min-width: 768px) {
    width: 610px;
    font-size: 15px;
    margin-top: 14px;
  }
`;

export const Icon = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  width: 368px;
  justify-content: space-between;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    width: 620px;
    margin-top: 14px;
  }
`;

export const Decl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    color: #686868;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.275px;
  }

  img {
    width: 13px;
    height: 13px;
  }

  @media screen and (min-width: 768px) {
    div {
      font-size: 14px;
    }

    img {
      width: 17px;
      hieght: 17px;
    }
  }
`;

export const LoginPrompt = styled.div`
  width: 368px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #a5b1ff;
  background: #eceeff;
  color: #b2b2b2;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.325px;
  align-items: center;
  padding: 15px 14px;
  margin-top: 32.5px;

  @media screen and (min-width: 768px) {
    width: 622px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid #a5b1ff;
    background: #eceeff;
    color: #b2b2b2;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.375px;
    align-items: center;
    padding: 14px 23px;
    margin-top: 20px;
  }
`;

export const AHr = styled.div`
  width: 368px;
  height: 1px;
  flex-shrink: 0;
  background: #d9d9d9;

  @media screen and (min-width: 768px) {
    width: 622px;
  }
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const TUp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;

  img {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
  div {
    color: #686868;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.25px;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 18px;
      height: 18px;
    }

    div {
      font-size: 14px;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Book = styled.div`
  width: 24px;
  height: 24px;

  img {
    width: 24px;
    height: 24px;
  }
`;
