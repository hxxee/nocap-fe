import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMain";
import Sidebar from "./Sidebar"; // 컴포넌트 경로에 따라 조정
import axios from "axios";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAddBox, setShowAddBox] = useState(false);
  const [popNews, setPopNews] = useState(null); // ✅ 인기뉴스 데이터 상태 추가
  const navigate = useNavigate();
  const goSearch = () => navigate(`/search`);
  const goNews = () => navigate(`/news`);
  const goMy = () => navigate(`/my`);
  const goIntro = () => navigate(`/introduce`);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 로컬스토리지에서 토큰 읽기
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, []);

  const rankData = [
    {
      title: "습지는 메탄 배출의 원흉이다.",
      from: "출처: 예상치 못한 범인, 메탄의 원흉은 ‘습지’?",
    },
    {
      title: "기후 변화는 사실일까?",
      from: "출처: 과학자들의 경고",
    },
    {
      title: "바다는 탄소를 저장한다?",
      from: "출처: 해양 보고서",
    },
    {
      title: "플라스틱의 진실",
      from: "출처: 환경 단체 보고서",
    },
  ];

  // 페이지 전환용
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev < rankData.length - 1 ? prev + 1 : prev)),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev)),
    trackMouse: true,
  });

  // 처음 렌더링 시에만 애니메이션 이동
  useEffect(() => {
    const initialOffset = rankData[0].circleIndex * 60;
    const timer = setTimeout(() => {}, 100);

    return () => clearTimeout(timer);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("home");

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const [popNewsList, setPopNewsList] = useState([]); // 전체 인기뉴스 리스트
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0); // 현재 보여줄 인덱스

  // ✅ 인기뉴스 전체 불러오기
  useEffect(() => {
    const fetchPopNews = async () => {
      try {
        const res = await axios.get("https://www.nocap.kr/api/nocap/popnews");
        if (res.data && res.data.length > 0) {
          setPopNewsList(res.data);
          setCurrentNewsIndex(0);
        }
      } catch (err) {
        console.error("❌ 인기뉴스 불러오기 실패:", err);
      }
    };
    fetchPopNews();
  }, []);

  const getArrowImageSrc = (direction) => {
    const isFirst = currentNewsIndex === 0;
    const isLast = currentNewsIndex === popNewsList.length - 1;

    if (direction === "left") {
      return isFirst
        ? `${process.env.PUBLIC_URL}/images/left_g.svg`
        : `${process.env.PUBLIC_URL}/images/left_b.svg`;
    } else if (direction === "right") {
      return isLast
        ? `${process.env.PUBLIC_URL}/images/right_g.svg`
        : `${process.env.PUBLIC_URL}/images/right_b.svg`;
    }
  };

  // ✅ 자세히 보기 버튼 클릭 시 뉴스 상세 불러오기 + 조회기록 저장
  const handleMoreClick = async () => {
    try {
      const selectedNews = popNewsList[currentNewsIndex];
      if (!selectedNews) return;

      const token = localStorage.getItem("accessToken");

      // ✅ popNewsId로 뉴스 상세 API 호출
      const detailRes = await axios.get(
        `https://www.nocap.kr/api/nocap/popnews/${selectedNews.popNewsId}`
      );
      const detailedNews = detailRes.data;

      // ✅ 조회기록 저장
      try {
        await axios.post(
          "https://www.nocap.kr/api/nocap/history/record",
          {
            url: detailedNews.url,
            title: detailedNews.title,
            content: detailedNews.content,
            date: detailedNews.date,
            image: detailedNews.image,
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        console.log("🟢 조회기록 저장 완료");
      } catch (historyErr) {
        console.error("⚠️ 조회기록 저장 실패:", historyErr);
      }

      // ✅ NDetail로 이동
      navigate("/news/detail", {
        state: detailedNews,
      });
    } catch (err) {
      console.error("❌ 인기뉴스 상세 불러오기 실패:", err);
      alert("뉴스 상세 정보를 불러올 수 없습니다.");
    }
  };

  // ✅ 이전/다음 인기뉴스 이동
  const handlePrevNews = () =>
    setCurrentNewsIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNextNews = () =>
    setCurrentNewsIndex((prev) =>
      prev < popNewsList.length - 1 ? prev + 1 : prev
    );

  const [analysisList, setAnalysisList] = useState([]);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const res = await axios.get("https://www.nocap.kr/api/nocap/analysis", {
          headers: {
            Authorization: token,
          },
        });

        if (res.data) {
          const sorted = [...res.data].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setAnalysisList(sorted); // ✅ 더 이상 자르지 않기
        }
      } catch (err) {
        console.error("❌ 분석 뉴스 목록 불러오기 실패:", err);
      }
    };

    fetchAnalysis();
  }, []);

  const handleAnalysisClick = (analysisId) => {
    navigate("/analysis/article", {
      state: { analysisId },
    });
  };

  const handleMoreClickFromIndex = async (index) => {
    try {
      const selectedNews = popNewsList[index];
      if (!selectedNews) return;

      const token = localStorage.getItem("accessToken");

      const detailRes = await axios.get(
        `https://www.nocap.kr/api/nocap/popnews/${selectedNews.popNewsId}`
      );
      const detailedNews = detailRes.data;

      try {
        await axios.post(
          "https://www.nocap.kr/api/nocap/history/record",
          {
            url: detailedNews.url,
            title: detailedNews.title,
            content: detailedNews.content,
            date: detailedNews.date,
            image: detailedNews.image,
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        console.log("🟢 조회기록 저장 완료");
      } catch (historyErr) {
        console.error("⚠️ 조회기록 저장 실패:", historyErr);
      }

      navigate("/news/detail", {
        state: detailedNews,
      });
    } catch (err) {
      console.error("❌ 뉴스 상세 불러오기 실패:", err);
      alert("뉴스 상세 정보를 불러올 수 없습니다.");
    }
  };

  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth <= 768 ? 4 : 3
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth <= 768 ? 4 : 3);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <M.Container>
        <M.Header>
          <img
            id="logo"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
          />

          <M.MobileOnly>
            <img
              id="menu"
              src={`${process.env.PUBLIC_URL}/images/menu.svg`}
              alt="menu"
              onClick={toggleSidebar}
            />
          </M.MobileOnly>

          <M.DesktopOnly>
            <M.Menu>
              <div id="tag" style={{ cursor: "pointer" }}>
                홈
                <div id="circle" />
              </div>
              <div id="tag" style={{ cursor: "pointer" }} onClick={goIntro}>
                NOCAP 소개
              </div>
              <div id="tag" onClick={goNews} style={{ cursor: "pointer" }}>
                뉴스
              </div>
              <div
                id="tag"
                onClick={isLoggedIn ? goMy : () => navigate("/login/local")}
                style={{ cursor: "pointer" }}
              >
                {isLoggedIn ? "마이페이지" : "로그인/회원가입"}
              </div>
            </M.Menu>
          </M.DesktopOnly>
        </M.Header>
        <M.Body>
          <M.SearchBar>
            <div id="url" onClick={goSearch}>
              뉴스 키워드 또는 기사 URL을 입력하세요
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/search_blue.svg`}
              alt="search"
            />
          </M.SearchBar>

          <M.MobileOnly>
            <M.Ranking>
              <M.RTitle>오늘의 인기뉴스</M.RTitle>

              <M.SliderWrapper {...handlers}>
                <M.SliderContainer currentIndex={currentIndex}>
                  {popNewsList.slice(0, 4).map((item, idx) => (
                    <M.RBox
                      key={idx}
                      onClick={() => handleMoreClickFromIndex(idx)}
                      style={{ cursor: "pointer" }}
                    >
                      <M.Han>
                        <div id="title">{item.title}</div>
                        <div id="from">{item.date}</div>
                      </M.Han>
                      <img
                        src={
                          item.image ||
                          `${process.env.PUBLIC_URL}/images/news.jpg`
                        }
                        alt="news"
                      />
                    </M.RBox>
                  ))}
                </M.SliderContainer>
              </M.SliderWrapper>

              <M.Pagenation>
                {popNewsList.slice(0, 4).map((_, i) => (
                  <M.Dot key={i} active={i === currentIndex} />
                ))}
              </M.Pagenation>
            </M.Ranking>
          </M.MobileOnly>

          <M.DesktopOnly>
            <M.Famous>
              <M.Text>
                <M.TTitle>
                  <div id="title">오늘의 인기뉴스</div>
                  <div id="hr" />
                  <div id="date">
                    {popNewsList[currentNewsIndex]?.date || "날짜 로딩 중..."}
                  </div>
                </M.TTitle>
                <M.Tit onClick={handleMoreClick} style={{ cursor: "pointer" }}>
                  {popNewsList[currentNewsIndex]?.title || "제목 로딩 중..."}
                </M.Tit>

                <M.More
                  c
                  style={{ cursor: "pointer" }}
                  onClick={handleMoreClick}
                >
                  <div id="det">자세히 보기</div>
                  <div id="hr" />
                </M.More>

                <M.Page>
                  <img
                    src={getArrowImageSrc("left")}
                    alt="left"
                    onClick={handlePrevNews}
                    style={{ cursor: "pointer" }}
                  />
                  <img
                    src={getArrowImageSrc("right")}
                    alt="right"
                    onClick={handleNextNews}
                    style={{ cursor: "pointer" }}
                  />
                </M.Page>
              </M.Text>
              <M.Img onClick={handleMoreClick} style={{ cursor: "pointer" }}>
                <img
                  src={
                    popNewsList[currentNewsIndex]?.image ||
                    `${process.env.PUBLIC_URL}/images/news.jpg`
                  }
                  alt="news"
                />
                <div id="back" />
              </M.Img>
            </M.Famous>
          </M.DesktopOnly>

          <M.Recent>
            <M.Title>최근 분석된 기사</M.Title>
            <M.List>
              {analysisList.slice(0, visibleCount).map((item) => (
                <M.Component
                  key={item.analysisId}
                  $bgImage={item.image}
                  onClick={() => handleAnalysisClick(item.analysisId)}
                  style={{ cursor: "pointer" }}
                >
                  <div>{item.mainNewsTitle}</div>
                </M.Component>
              ))}
            </M.List>
          </M.Recent>
        </M.Body>
      </M.Container>
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
    </>
  );
};

export default Main;
