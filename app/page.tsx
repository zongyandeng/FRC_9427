const navLinks = [
  { href: "#about", label: "隊伍介紹" },
  { href: "#journey", label: "賽季旅程" },
  { href: "#awards", label: "獎項成果" },
  { href: "#outreach", label: "外展活動" },
  { href: "#sponsors", label: "贊助夥伴" },
  { href: "#location", label: "足跡" },
  { href: "#media", label: "影音紀錄" },
];

const quickFacts = [
  ["9427", "FRC Team Number"],
  ["iDeer", "Team Nickname"],
  ["2024", "Rookie Year"],
  ["新北樹林", "ShuLin, New Taipei"],
];

const infoItems = [
  ["學校", "新北市立樹林高中、2026 賽季資料另列新北市裕德高中"],
  ["定位", "以工程實作、機器人競賽與國際交流為核心的高中 FRC 團隊"],
  ["社群", "Instagram：frc_9427、Facebook：SLSHFRC、YouTube：ideerfrcteam9427"],
];

const seasons = [
  {
    year: "2026",
    title: "REBUILT 賽季：土耳其區域賽與世界賽 Archimedes",
    body: "於 Bosphorus Regional 排名第 8，進入第 5 聯盟並獲 Engineering Inspiration Award；Yeditepe Regional 排名第 5，進入第 4 聯盟，後續前進 FIRST Championship Archimedes Division。",
    tags: ["Bosphorus Regional", "Yeditepe Regional", "Archimedes Division"],
  },
  {
    year: "2025",
    title: "REEFSCAPE 賽季：新北、Colorado、Johnson Division",
    body: "在 New Taipei City Regional 進入決賽，Colorado Regional 獲 Judges' Award，並於 FIRST Championship Johnson Division 獲 Rising All-Star Award。",
    tags: ["New Taipei City Regional", "Colorado Regional", "Johnson Division"],
  },
  {
    year: "2024",
    title: "CRESCENDO rookie 賽季：澳洲區域賽與世界賽外卡",
    body: "於 Southern Cross Regional 排名第 20，進入聯盟賽並獲 Rookie All Star Award 與世界賽外卡資格，後續前進 Houston Daly Division。",
    tags: ["Southern Cross Regional", "Rookie All Star", "Daly Division"],
  },
];

const awards = [
  ["26", "Rising All-Star Award", "2026 FIRST Championship Archimedes Division"],
  ["26", "Engineering Inspiration Award", "2026 Bosphorus Regional"],
  ["26", "Team Sustainability Award", "2026 Yeditepe Regional"],
  ["25", "Quality Award", "2025 New Taipei City Regional"],
  ["25", "Judges' Award", "2025 Colorado Regional"],
  ["25", "Dean's List Finalist", "2025 New Taipei City Regional"],
  ["24", "Rookie All Star Award", "2024 Southern Cross Regional"],
  ["24", "Wildcard", "2024 FIRST Championship Qualifying Award"],
];

const activities = [
  {
    number: "01",
    title: "校慶與校園擺攤推廣",
    tag: "校園推廣",
    image: "https://fv-ugc.imgix.net/projects/34433/article/652cb5375af10.png?ixlib=php-3.3.1&s=d274949e118d73af99d087992d9fcadf",
    source: "flyingV 2023",
    body: "創隊初期就把 FRC 帶進校園活動，透過攤位展示、隊伍介紹與互動解說，讓更多同學、家長與社群認識高中生也能完成的工程挑戰。",
    points: ["介紹 FRC 賽制與團隊分工", "展示機器人製作成果", "讓校內外觀眾近距離接觸隊伍"],
  },
  {
    number: "02",
    title: "2023 Taipei Maker Faire",
    tag: "大眾科普",
    image: "https://fv-ugc.imgix.net/projects/34433/article/65465843e34a8.png?ixlib=php-3.3.1&s=24f1c47f8437d1782186eafa99fc16a0",
    source: "flyingV 2024",
    body: "團隊參與 2023 Taipei Maker Faire，走出校園向一般民眾介紹 FRC、機器人設計與學生工程實作，讓 Maker 社群看見樹林高中 FRC9427。",
    points: ["面向親子與 Maker 社群解說", "把競賽經驗轉成容易理解的展示", "累積公開展演與溝通經驗"],
  },
  {
    number: "03",
    title: "國中小 STEAM 手作坊",
    tag: "教育擴散",
    image: "https://fv-ugc.imgix.net/projects/34433/article/652cb552bb919.png?ixlib=php-3.3.1&s=469f06dea583757e5d0619cb4beef907",
    source: "flyingV 2023",
    body: "與贊助商合作規劃國中、小 STEAM 教育手作坊，讓機械、設計與動手做的學習不只停留在 FRC 隊內，也能成為更年輕學生的入門體驗。",
    points: ["設計適合中小學生的手作內容", "由隊員擔任引導與示範角色", "把工程學習轉化成可參與的活動"],
  },
  {
    number: "04",
    title: "科技中心參訪與基地開放",
    tag: "在地連結",
    image: "https://fv-ugc.imgix.net/projects/34433/article/652cb5664e81d.png?ixlib=php-3.3.1&s=8253cd14abbfef39c42fe616ffc5bbe3",
    source: "flyingV 2023",
    body: "團隊期待開放樹林高中科技中心與 FRC 機器人製造基地，邀請鄰近國中小學生參訪，帶動樹林地區的科技教育氛圍。",
    points: ["介紹科技中心與製作基地", "分享 CAD、加工、程式與測試流程", "讓在地學生看見可加入的學習路徑"],
  },
  {
    number: "05",
    title: "澳洲 UNSW 與 4729 國際交流",
    tag: "國際交流",
    image: "https://fv-ugc.imgix.net/projects/35130/article/65fac2d4d9b66.png?ixlib=php-3.3.1&s=cb46465128e68df47856c2c0531efee3",
    source: "flyingV 2024",
    body: "2024 澳洲區賽期間，FRC9427 與成功高中 7497 一起到新南威爾斯大學 UNSW，並和當地資深隊伍 4729 交流，學習不同隊伍的工程與營運經驗。",
    points: ["與海外隊伍交換實作經驗", "拓展英文簡報與跨文化溝通", "把區域賽旅程延伸成學習行動"],
  },
  {
    number: "06",
    title: "區域賽攤位與評審溝通",
    tag: "隊伍影響力",
    image: "https://fv-ugc.imgix.net/projects/35130/article/65fac2efb8b2b.png?ixlib=php-3.3.1&s=d5c5f5edae0ef0a6682c893fc31f1725",
    source: "flyingV 2024",
    body: "在 2024 Southern Cross Regional，團隊透過攤位佈置、工程筆記與商業計畫書介紹隊伍，讓評審更完整看見 FRC9427 的創隊故事與成長。",
    points: ["整理工程筆記與商業計畫", "練習向評審清楚說明團隊價值", "以 Rookie All-Star 成果前進世界賽"],
  },
  {
    number: "07",
    title: "科技女力論壇",
    tag: "DEI",
    image: "https://img.youtube.com/vi/JUu4h5PwJaE/hqdefault.jpg",
    source: "flyingV 2024",
    body: "團隊參與科技女力論壇，把機器人競賽與 STEAM 學習經驗連結到性別平權與多元參與，鼓勵更多學生看見自己在科技領域的位置。",
    points: ["支持更多學生參與科技學習", "分享高中生進入 FRC 的經驗", "把團隊文化延伸到公共議題"],
  },
  {
    number: "08",
    title: "世界糧食日倡議",
    tag: "公益倡議",
    image: "https://fv-ugc.imgix.net/projects/35130/article/65fcf5bcd316c.png?ixlib=php-3.3.1&s=69f7203922cb3caa34ce0db0f5add0ee",
    source: "flyingV 2024",
    body: "除了機器人競賽，團隊也參與世界糧食日相關倡議，讓隊員從科技學習者轉向社會參與者，練習理解公共議題並做出回應。",
    points: ["關注糧食與社會永續議題", "把團隊影響力投入公益倡議", "培養隊員的同理與公民意識"],
  },
  {
    number: "09",
    title: "華山基金會樹林獨居老人關懷",
    tag: "社區服務",
    image: "https://fv-ugc.imgix.net/projects/35130/article/65fcf60011ff1.png?ixlib=php-3.3.1&s=dbebffbb16fa94cc282b8dd6fe5ed6aa",
    source: "flyingV 2024",
    body: "團隊參與華山基金會樹林獨居老人關懷活動，把 FRC 所強調的 Gracious Professionalism 帶回在地，透過陪伴與服務回應社區需求。",
    points: ["走入樹林在地社區", "以實際行動關懷長者", "讓團隊價值不只存在於賽場"],
  },
  {
    number: "10",
    title: "2025 暑期樹科獎科技創作競賽",
    tag: "活動支援",
    image: "https://img.youtube.com/vi/pk_J7Pp_Ehs/hqdefault.jpg",
    source: "樹林高中公告",
    body: "樹林高中公告指出，FRC 9427 iDEER 參與 2025 暑期樹科獎科技創作競賽，擔任工作人員並進行機器人展演，支援校內科技創作活動。",
    points: ["擔任活動工作人員", "進行機器人展演與說明", "把隊伍能量回饋校內科技活動"],
  },
  {
    number: "11",
    title: "新賽季隊員招募與說明",
    tag: "人才培育",
    image: "https://i.meee.com.tw/KGTVCee.jpg",
    source: "樹林高中公告",
    body: "2025-2026 賽季甄選資訊招募對機器人有熱情的高一、高二學生，並透過說明手冊、表單與影片讓新成員理解 FRC 的學習內容。",
    points: ["對高一新生與高一升高二招生", "提供賽隊資訊、影片與甄選表單", "延續隊伍技術與外展傳承"],
  },
];

const places = [
  ["樹林 / 新北", "隊伍基地與 New Taipei City Regional 參賽地區。"],
  ["Sydney / Australia", "2024 Southern Cross Regional，rookie 賽季的重要起點。"],
  ["Başakşehir / İstanbul", "2026 Bosphorus Regional 與 Yeditepe Regional。"],
  ["Houston / USA", "2024 Daly、2025 Johnson、2026 Archimedes Division 世界賽舞台。"],
];

const sponsors = [
  {
    logo: "NT",
    name: "新北市政府教育局",
    field: "教育資源與城市支持",
    body: "協助校園團隊取得教育推廣、國際參賽與跨校學習所需的行政與資源支持。",
  },
  {
    logo: "HOPE",
    name: "HOPE Industrial",
    field: "工業製造與設備",
    body: "以工業製造背景支持隊伍實作能量，讓學生能把設計、加工與測試連成完整工程流程。",
  },
  {
    logo: "義美",
    name: "財團法人義美文教基金會",
    field: "文教公益",
    body: "長期投入教育與公益，支持青年透過機器人競賽培養自主學習、合作與社會參與能力。",
  },
  {
    logo: "長安",
    name: "台北市惠台長安慈善基金會",
    field: "慈善公益",
    body: "以公益資源陪伴學生團隊成長，協助外展、學習與競賽經驗能被更多人看見。",
  },
  {
    logo: "SZS",
    image: "/assets/sponsors/szs.png",
    name: "新日興股份有限公司",
    field: "精密機構與製造",
    body: "具精密金屬與機構件製造背景，與 FRC 所需的結構設計、零件加工和可靠度思維高度相關。",
  },
  {
    logo: "HAAS",
    image: "/assets/sponsors/gene-haas-foundation.png",
    name: "Gene Haas Foundation",
    field: "製造教育",
    body: "推動 CNC、加工技術與製造人才培育，幫助學生把工程圖面轉化為可運作的機器人零件。",
  },
  {
    logo: "AMD",
    image: "/assets/sponsors/amd.svg",
    name: "AMD",
    field: "半導體與高效能運算",
    body: "以科技產業視角鼓勵學生接觸運算、控制與工程實作，理解軟硬體如何共同解決問題。",
  },
  {
    logo: "MISUMI",
    image: "/assets/sponsors/misumi.png",
    name: "MISUMI",
    field: "自動化零組件",
    body: "提供機械標準件、自動化零組件與工程採購思維，是隊伍設計原型與迭代的重要產業參照。",
  },
  {
    logo: "LC",
    name: "台北市首都獅子會",
    field: "社群服務",
    body: "透過在地服務網絡支持青年團隊，讓機器人教育能延伸到更多社群與公益行動。",
  },
  {
    logo: "洪",
    name: "新北市議員洪佳君",
    field: "地方公共支持",
    body: "協助地方資源連結與能見度推廣，讓學生團隊在校園之外也能獲得社區支持。",
  },
  {
    logo: "漢儒",
    name: "漢儒文教基金會與華儒青年關懷基金會",
    field: "教育推廣",
    body: "關注教育與文化扎根，支持隊伍把競賽經驗轉化為可分享、可傳承的學習內容。",
  },
  {
    logo: "PTA",
    name: "樹林高中家長會與校園夥伴",
    field: "校園後勤",
    body: "提供最貼近隊伍日常的陪伴、後勤與行政協助，支撐學生從練習、外展到出國參賽。",
  },
];

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const mediaCards = [
  {
    href: "https://youtu.be/JUu4h5PwJaE",
    img: "https://img.youtube.com/vi/JUu4h5PwJaE/hqdefault.jpg",
    alt: "FRC 9427 2025 Impact Video 縮圖",
    title: "Impact Video 2025",
    body: "隊伍影響力與外展成果紀錄。",
  },
  {
    href: "https://youtu.be/pk_J7Pp_Ehs",
    img: "https://img.youtube.com/vi/pk_J7Pp_Ehs/hqdefault.jpg",
    alt: "FRC 9427 2025 賽季全紀錄縮圖",
    title: "2025 賽季全紀錄",
    body: "賽季製作、練習與比賽過程回顧。",
  },
  {
    href: "https://youtu.be/buQirCjCjao",
    img: "https://img.youtube.com/vi/buQirCjCjao/hqdefault.jpg",
    alt: "2025 台灣 FRC 區域賽回顧縮圖",
    title: "台灣 FRC 區域賽回顧",
    body: "新北賽場與台灣 FRC 社群剪影。",
  },
];

const sources = [
  ["https://frc-events.firstinspires.org/2026/team/9427", "FIRST Event Web：Team 9427 2026"],
  ["https://frc-events.firstinspires.org/2025/team/9427", "FIRST Event Web：Team 9427 2025"],
  ["https://frc-events.firstinspires.org/2024/team/9427", "FIRST Event Web：Team 9427 2024"],
  ["https://www.thebluealliance.com/team/9427", "The Blue Alliance：iDeer Team 9427"],
  ["https://www.flyingv.cc/projects/35130", "flyingV：樹林高中 FRC9427 晉級世界賽募資頁"],
  ["https://www.slsh.ntpc.edu.tw/p/406-1000-21050%2Cr53.php", "樹林高中：FRC9427 2025-2026 賽季甄選公告"],
  ["https://www.instagram.com/frc_9427/", "Instagram：frc_9427"],
];

export default function Home() {
  return (
    <>
      <nav className="nav" aria-label="主要導覽">
        <a className="brand" href="#top" aria-label="回到首頁">
          <span className="mark">9427</span>
          <span>FRC 9427 iDeer</span>
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="hero-inner">
          <span className="eyebrow">
            <span className="pulse" />
            FIRST Robotics Competition Team 9427
          </span>
          <h1>iDeer 把新北樹林的工程能量帶上世界賽場</h1>
          <p>FRC 9427 是來自新北樹林的高中機器人團隊，2024 年成為 rookie team 後，連續在區域賽、世界賽與外展推廣中累積成果。</p>
          <div className="hero-actions">
            <a className="button primary" href="#journey">
              查看賽季旅程
            </a>
            <a className="button ghost" href="#outreach">
              查看外展活動
            </a>
          </div>
          <div className="quick-facts" aria-label="隊伍快速資訊">
            {quickFacts.map(([value, label]) => (
              <div className="fact" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id="about">
          <div className="wrap about-grid">
            <div>
              <div className="section-head compact-head">
                <h2>隊伍介紹</h2>
              </div>
              <p>Team 9427 - iDeer 隸屬 FIRST Robotics Competition，官方登錄地點為新北市樹林區。2026 賽季隊名資料列出新北市裕德高中與新北市立樹林高中，並持續由教育、企業、基金會與社群夥伴支持。</p>
              <div className="info-list">
                {infoItems.map(([title, body]) => (
                  <div className="info-item" key={title}>
                    <b>{title}</b>
                    <span>{body}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="robot-panel">
              <RobotSvg />
              <p>從 CAD、CNC、Java 程式與機電整合，到 FRC 的策略、製造與場上調整，隊伍把學習拆成能被實作的工程挑戰。</p>
            </div>
          </div>
        </section>

        <section id="journey">
          <div className="wrap">
            <SectionHead title="賽季旅程" body="依 FIRST 官方賽事資料整理，保留最重要的年度節點與成績。" />
            <div className="timeline">
              {seasons.map((season) => (
                <article className="season" key={season.year}>
                  <div className="year">{season.year}</div>
                  <div>
                    <h3>{season.title}</h3>
                    <p>{season.body}</p>
                    <div className="tag-row">
                      {season.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="awards">
          <div className="wrap">
            <SectionHead title="獎項成果" body="以官方紀錄與公開資訊整理隊伍獎項。" />
            <div className="awards">
              {awards.map(([year, title, body]) => (
                <article className="award" key={`${year}-${title}`}>
                  <span className="medal">{year}</span>
                  <h3>{title}</h3>
                  <p className="muted">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="outreach" className="activity-band">
          <div className="wrap">
            <SectionHead title="外展活動" body="從校園、Maker Faire、國中小 STEAM 到公益倡議，FRC9427 把機器人隊的影響力帶進更多現場。" />
            <div className="activities">
              {activities.map((activity) => (
                <article className="activity" key={activity.number}>
                  <img src={activity.image} alt={`${activity.title} 活動照片`} />
                  <div className="activity-copy">
                    <div className="activity-meta">
                      <span className="activity-icon">{activity.number}</span>
                      <span>{activity.tag}</span>
                    </div>
                    <h3>{activity.title}</h3>
                    <p className="muted">{activity.body}</p>
                    <ul>
                      {activity.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <p className="activity-source">照片/資料：{activity.source}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sponsors">
          <div className="wrap">
            <SectionHead title="贊助夥伴" body="依 FIRST 官方隊伍頁面公開列名整理；每一份支持都讓學生能把想法做成真正會動的機器人。" />
            <div className="sponsor-grid">
              {sponsors.map((sponsor) => (
                <article className="sponsor-card" key={sponsor.name}>
                  <div className="sponsor-logo" aria-label={`${sponsor.name} 標誌`}>
                    {typeof sponsor.image === "string" ? <img src={assetPath(sponsor.image)} alt={`${sponsor.name} logo`} /> : sponsor.logo}
                  </div>
                  <div className="sponsor-copy">
                    <span>{sponsor.field}</span>
                    <h3>{sponsor.name}</h3>
                    <p>{sponsor.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="sponsor-note">若後續取得各贊助單位正式 Logo 圖檔，可直接把這些文字標誌替換為圖片，版面不需要重新調整。</p>
          </div>
        </section>

        <section id="location">
          <div className="wrap">
            <SectionHead title="足跡與基地位置" body="從樹林出發，到澳洲、土耳其、美國休士頓，隊伍足跡逐年擴大。" />
            <div className="place-grid">
              <div className="map-card">
                <img src={assetPath("/assets/shulin-location-map.png")} alt="新北市樹林區中華路 8 號位置示意地圖，標示我們的位置與樹林高中" />
              </div>
              <div className="place-list">
                {places.map(([title, body]) => (
                  <article className="place" key={title}>
                    <h3>{title}</h3>
                    <p className="muted">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="media">
          <div className="wrap">
            <SectionHead title="影音紀錄" body="使用樹林高中公告列出的公開 YouTube 影片縮圖作為視覺入口。" />
            <div className="media-grid">
              {mediaCards.map((card) => (
                <a className="media-card" href={card.href} target="_blank" rel="noreferrer" key={card.href}>
                  <img src={card.img} alt={card.alt} />
                  <div>
                    <h3>{card.title}</h3>
                    <p className="muted">{card.body}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="source-band">
          <div className="wrap">
            <SectionHead title="資料來源" body="賽事、學校公告與公開頁面可作為後續更新內容的依據。" />
            <ul className="sources">
              {sources.map(([href, label]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span>FRC 9427 iDeer 資訊展示頁</span>
          <span>Designed as a Next.js App Router page</span>
        </div>
      </footer>
    </>
  );
}

function SectionHead({ title, body }: { title: string; body: string }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function RobotSvg() {
  return (
    <svg className="robot-svg" viewBox="0 0 720 460" role="img" aria-label="FRC 機器人示意插圖">
      <rect x="34" y="302" width="652" height="72" rx="14" fill="#233456" />
      <rect x="92" y="182" width="412" height="144" rx="18" fill="#1557d4" />
      <rect x="128" y="214" width="122" height="70" rx="10" fill="#f7f9fc" />
      <rect x="276" y="214" width="180" height="70" rx="10" fill="#10192a" />
      <circle cx="160" cy="374" r="54" fill="#10192a" stroke="#91c83e" strokeWidth="18" />
      <circle cx="548" cy="374" r="54" fill="#10192a" stroke="#91c83e" strokeWidth="18" />
      <path d="M444 180 L588 78 L622 120 L500 224 Z" fill="#10a5c8" />
      <path d="M575 76 L654 28 L678 66 L614 122 Z" fill="#f1b72c" />
      <rect x="112" y="112" width="130" height="60" rx="10" fill="#e33b42" />
      <text x="128" y="153" fill="#fff" fontSize="34" fontFamily="Arial" fontWeight="900">
        9427
      </text>
      <text x="292" y="260" fill="#fff" fontSize="35" fontFamily="Arial" fontWeight="900">
        iDeer
      </text>
    </svg>
  );
}
