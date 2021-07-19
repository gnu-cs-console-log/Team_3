import "./styles.css";

export default function About() {
  return (
    <div>
      <div className="about_container">
        <h6 className="title">📲 Skill</h6>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="about_container">
        <h6 className="title">💻 Extracurricular activities</h6>
        <p> - 경상대학교 2019 Bigdata&AI 해커톤 장려상</p>
        <p> - 2020 멋쟁이사자처럼 대학생 8기 활동 </p>
        <p> - 2021 멋쟁이사자처럼 대학생 9기 운영진 활동</p>
        <p> - 2021 멋쟁이사자처럼 전국연합 스터디 및 운영진 교육 수료</p>
        <p> - 2021 교내 웹 개발 동아리 '콘솔로그' 활동</p>
        <p> - 2021 USG IOS 개발 캠프 수료</p>
        <p> - 2019 말레이시아 어학연수 (HELP University) </p>
        <p> - 2018 GNU Buddy (유학생들의 한국생활 도우미)</p>
        <p>
          - 2018 평창 동계올림픽 슬라이딩센터 인포메이션 데스크 크루 /
          걸어다니는 인포메이션 활동
        </p>
        <p>
          {" "}
          - 2018~2021 경상대학교 근로장학생(교육정보전산원, 공동실험실습관,
          중앙도서관)
        </p>
        <p> - 4년간 봉사실적 약 120시간</p>
      </div>
      <div className="about_container">
        <h6 className="title">🏆 License</h6>
        <p>* 정보처리기사</p>
        <p>* Toeic speaking lv.6</p>
        <p>* 운전 면허</p>
      </div>
    </div>
  );
}
