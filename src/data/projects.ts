export type LocalizedString = { ko: string; en: string };
export type LocalizedList = { ko: string[]; en: string[] };
export type GalleryItem = string | { src: string; full?: boolean };
export type BrandSection = {
  name: LocalizedString;
  items: GalleryItem[];
  columns?: 1 | 2 | 3 | 4;
  tight?: boolean;
};

export type LogoSection = {
  src: string;
  label: LocalizedString;
  description?: LocalizedString;
};

export type Project = {
  slug: string;
  index: string;
  title: LocalizedString;
  subtitle?: LocalizedString;
  client: LocalizedString;
  year: string;
  duration?: LocalizedString;
  categories: LocalizedList;
  cover: string;
  hero?: string | string[];
  summary: LocalizedString;
  role: LocalizedList;
  deliverables: LocalizedList;
  tools?: string[];
  link?: string;
  gallery: GalleryItem[];
  brandSections?: BrandSection[];
  logoSection?: LogoSection;
  columns?: 1 | 2 | 3;
  previewMode?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'dinto',
    index: '01',
    title: { ko: '딘토', en: 'Dinto' },
    subtitle: {
      ko: '코스메틱 브랜드 딘토의 SNS·광고 콘텐츠 디자인',
      en: 'SNS and ad content design for the cosmetics brand Dinto',
    },
    client: { ko: '딘토 (Dinto)', en: 'Dinto' },
    year: '2025',
    duration: {
      ko: '2025년 9월 ~ 11월',
      en: 'Sep — Nov 2025',
    },
    categories: {
      ko: ['그래픽', '브랜딩'],
      en: ['Graphic', 'Branding'],
    },
    cover: '/projects/dinto/thumbnail.jpg',
    hero: '/projects/dinto/main.jpg',
    summary: {
      ko: '코스메틱 브랜드 딘토의 SNS 콘텐츠와 광고 소재를 디자인했습니다. 캠페인 시즌과 채널의 성격에 맞춰 광고 소재, 인스타그램 피드·스토리, 프로모션 배너, 연혁 페이지 등 다양한 포맷의 비주얼을 제작하며 브랜드 톤이 일관되게 유지되도록 작업했습니다.',
      en: "Designed SNS content and ad creatives for the cosmetics brand Dinto. I produced visuals across a range of formats — ad creatives, Instagram feed and stories, promotional banners, the brand's history page — keeping the brand tone consistent across each campaign season and channel.",
    },
    role: {
      ko: ['디자이너 인턴'],
      en: ['Design Intern'],
    },
    deliverables: {
      ko: ['Meta 광고 콘텐츠', 'Instagram 피드·스토리', '프로모션 배너', '연혁 페이지'],
      en: ['Meta Ad Content', 'Instagram Feed & Stories', 'Promotion Banners', 'History Page'],
    },
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    gallery: [],
    brandSections: [
      {
        name: { ko: '광고 소재', en: 'Ad Creatives' },
        columns: 3,
        items: [
          '/projects/dinto/ad/1.jpg',
          '/projects/dinto/ad/2.jpg',
          '/projects/dinto/ad/3.jpg',
          '/projects/dinto/ad/4.jpg',
          '/projects/dinto/ad/5.jpg',
          '/projects/dinto/ad/6.jpg',
        ],
      },
      {
        name: { ko: '릴레이 블랙프라이데이', en: 'Black Friday Relay' },
        columns: 4,
        items: [
          '/projects/dinto/blackfriday/1.jpg',
          '/projects/dinto/blackfriday/2.jpg',
          '/projects/dinto/blackfriday/3.jpg',
          '/projects/dinto/blackfriday/4.jpg',
        ],
      },
      {
        name: { ko: '복합 배너', en: 'Composite Banners' },
        columns: 1,
        items: [
          '/projects/dinto/banner/1.jpg',
          '/projects/dinto/banner/2.jpg',
        ],
      },
      {
        name: { ko: '인스타그램 피드', en: 'Instagram Feed' },
        columns: 2,
        items: [
          '/projects/dinto/feed/1.jpg',
          '/projects/dinto/feed/2.jpg',
          '/projects/dinto/feed/3.jpg',
          '/projects/dinto/feed/4.jpg',
        ],
      },
      {
        name: { ko: '인스타그램 스토리', en: 'Instagram Stories' },
        columns: 4,
        items: [
          '/projects/dinto/story/1.jpg',
          '/projects/dinto/story/2.jpg',
          '/projects/dinto/story/3.jpg',
          '/projects/dinto/story/4.jpg',
        ],
      },
      {
        name: { ko: '연혁 페이지', en: 'History Page' },
        columns: 1,
        items: ['/projects/dinto/history/1.png'],
      },
    ],
  },
  {
    slug: 'detail-page',
    index: '02',
    title: { ko: '상세페이지 디자인', en: 'Detail Page Design' },
    subtitle: {
      ko: '제품과 서비스를 효과적으로 전달하기 위한 상세페이지 작업',
      en: 'Detail pages designed to deliver product and service stories effectively',
    },
    client: {
      ko: '다양한 브랜드',
      en: 'Various brands',
    },
    year: '2025',
    categories: {
      ko: ['그래픽'],
      en: ['Graphic'],
    },
    cover: '/projects/detail/main.png',
    hero: '/projects/detail/main.png',
    summary: {
      ko: '다양한 브랜드의 제품과 서비스를 위한 상세페이지를 디자인했습니다. 사용자가 스크롤하면서 자연스럽게 정보를 받아들일 수 있도록 시각적 흐름과 정보 위계를 설계했고, 이미지·타이포그래피·레이아웃의 균형을 통해 메시지가 분명하게 전달되도록 했습니다.',
      en: "Detail pages designed for a range of brand products and services. I built each page so the visual flow and hierarchy of information meet the reader as they scroll, and balanced image, typography, and layout to make sure the message lands clearly.",
    },
    role: {
      ko: ['상세페이지 디자인', '그래픽 디자인'],
      en: ['Detail Page Design', 'Graphic Design'],
    },
    deliverables: {
      ko: ['상세페이지'],
      en: ['Detail Page'],
    },
    tools: ['Photoshop', 'Illustrator'],
    gallery: [],
    brandSections: [
      {
        name: { ko: 'AI 수익화 초월차선', en: 'AI Income Beyond Lane' },
        columns: 1,
        tight: true,
        items: [
          '/projects/detail/ai-1.png',
          '/projects/detail/ai-2.png',
          '/projects/detail/ai-3.png',
        ],
      },
      {
        name: { ko: '네이버 플레이스 마케팅 마스터북', en: 'Naver Place Marketing Masterbook' },
        columns: 1,
        tight: true,
        items: [
          '/projects/detail/naver-1.png',
          '/projects/detail/naver-2.png',
          '/projects/detail/naver-3.png',
        ],
      },
      {
        name: { ko: '라인온 피티', en: 'Lineon PT' },
        columns: 1,
        tight: true,
        items: [
          '/projects/detail/lineon-1.png',
          '/projects/detail/lineon-2.png',
          '/projects/detail/lineon-3.png',
        ],
      },
    ],
  },
  {
    slug: 'sns-content',
    index: '03',
    title: { ko: 'SNS 콘텐츠 디자인', en: 'SNS Content Design' },
    subtitle: {
      ko: '브랜드가 추구하는 방향에 맞게 광고 콘텐츠를 디자인한 작업',
      en: 'Ad content designed to fit each brand’s direction',
    },
    client: {
      ko: '다양한 브랜드',
      en: 'Various brands',
    },
    year: '2025',
    categories: {
      ko: ['그래픽'],
      en: ['Graphic'],
    },
    cover: '/projects/sns/sns-1.png',
    hero: ['/projects/sns/sns-1.png', '/projects/sns/sns-2.png'],
    summary: {
      ko: '브랜드 홍보를 위한 인스타그램 광고 콘텐츠 디자인 프로젝트입니다. 각 브랜드의 컬러와 무드를 반영해 시각적 일관성을 유지하면서도, 광고 메시지가 모바일 환경에서 명확하게 인식될 수 있도록 정보 구조와 화면 구성을 설계했습니다. 특히 작은 화면에서의 텍스트 크기, 대비, 여백을 조정하며 전달력 있는 광고 이미지를 만드는 데 집중했습니다.',
      en: "An Instagram ad-content design project for brand promotion. I designed the information structure and layout to keep visual consistency by reflecting each brand's color and mood, while making sure the ad message reads clearly on mobile. I focused on tuning text size, contrast, and spacing on small screens to make ads that actually carry their message across.",
    },
    role: {
      ko: ['그래픽 디자인', '광고 콘텐츠 디자인'],
      en: ['Graphic Design', 'Ad Content Design'],
    },
    deliverables: {
      ko: ['Meta 광고 콘텐츠'],
      en: ['Meta Ad Content'],
    },
    tools: ['Figma'],
    gallery: [
      '/projects/sns/sns-3.png',
      '/projects/sns/sns-4.png',
      '/projects/sns/sns-5.png',
      '/projects/sns/sns-6.png',
      '/projects/sns/sns-7.png',
      '/projects/sns/sns-8.png',
      '/projects/sns/sns-9.png',
      '/projects/sns/sns-10.png',
      '/projects/sns/sns-11.png',
      '/projects/sns/sns-12.png',
      '/projects/sns/sns-13.png',
      '/projects/sns/sns-14.png',
      '/projects/sns/sns-15.png',
      '/projects/sns/sns-16.png',
    ],
  },
  {
    slug: 'magazine',
    index: '04',
    title: { ko: '동아리 잡지 디자인', en: 'Club Magazine Design' },
    subtitle: {
      ko: '대학교 교내 동아리 IVY 레이아웃 디자이너 활동',
      en: 'University club magazine IVY — layout designer',
    },
    client: {
      ko: 'IVY 매거진',
      en: 'IVY Magazine',
    },
    year: '2023 ~ 2025',
    categories: {
      ko: ['편집'],
      en: ['Editorial'],
    },
    cover: '/projects/magazine/magazine-7.png',
    hero: ['/projects/magazine/magazine-7.png', '/projects/magazine/magazine-1.png'],
    summary: {
      ko: '송도에 있는 FIT FBM에 재학 중, 1년 반 동안 교내 매거진 동아리 IVY에서 레이아웃 디자이너로 활동했습니다. 이미지 배치와 텍스트 구성을 통해 독자의 시선을 끌 수 있는 방법을 직접 경험하며 배울 수 있었습니다.',
      en: "While studying at FIT FBM in Songdo, I worked as a layout designer for the campus magazine club IVY for a year and a half. Working on image placement and text composition, I learned firsthand how to design a page that pulls the reader's eye in.",
    },
    role: {
      ko: ['레이아웃 디자인', '편집 디자인'],
      en: ['Layout Design', 'Editorial Design'],
    },
    deliverables: {
      ko: ['교내 매거진'],
      en: ['Campus Magazine'],
    },
    tools: ['InDesign'],
    gallery: [
      { src: '/projects/magazine/magazine-2.png', full: true },
      { src: '/projects/magazine/magazine-8.png', full: true },
      '/projects/magazine/magazine-3.png',
      '/projects/magazine/magazine-4.png',
      '/projects/magazine/magazine-5.png',
      '/projects/magazine/magazine-6.png',
    ],
  },
  {
    slug: 'logo',
    index: '05',
    title: { ko: '로고 디자인', en: 'Logo Design' },
    subtitle: {
      ko: '브랜드의 정체성을 효과적으로 전달할 수 있는 로고를 디자인한 작업',
      en: 'Logos designed to communicate brand identity effectively',
    },
    client: {
      ko: '다양한 브랜드',
      en: 'Various brands',
    },
    year: '2020 ~',
    categories: {
      ko: ['브랜딩'],
      en: ['Branding'],
    },
    cover: '/projects/logo/logo-1.png',
    hero: ['/projects/logo/logo-1.png', '/projects/logo/logo-4.png', '/projects/logo/logo-11.png'],
    summary: {
      ko: '로고에 담고자 하는 메시지와 이미지가 잘 어우러지도록 여러 시안을 구상하며, 형태와 색상의 균형을 맞추는 연습을 할 수 있었습니다. 또한, 다양한 크기와 배경에서도 로고가 잘 보이도록 가독성과 활용성을 고려하는 경험도 함께 쌓을 수 있었습니다.',
      en: "I explored multiple directions so each logo's message and visual could come together as one, and through that, practiced balancing form and color. I also built up experience designing for readability and versatility — making sure the logo holds up across different sizes and backgrounds.",
    },
    role: {
      ko: ['로고 디자인', '브랜드 디자인'],
      en: ['Logo Design', 'Brand Design'],
    },
    deliverables: {
      ko: ['로고'],
      en: ['Logo'],
    },
    tools: ['Illustrator'],
    columns: 3,
    gallery: [
      // Row 1 — cream/beige
      '/projects/logo/logo-3.png',
      '/projects/logo/logo-7.png',
      '/projects/logo/logo-9.png',
      // Row 2 — yellow accents
      '/projects/logo/logo-14.png',
      '/projects/logo/logo-8.png',
      '/projects/logo/logo-13.png',
      // Row 3 — purple / blue
      '/projects/logo/logo-2.png',
      '/projects/logo/logo-6.png',
      '/projects/logo/logo-16.png',
      // Row 4 — green / soft white
      '/projects/logo/logo-5.png',
      '/projects/logo/logo-10.png',
      '/projects/logo/logo-15.png',
      // Row 5 — minimal line
      '/projects/logo/logo-12.png',
    ],
  },
  {
    slug: 'anymedi',
    index: '06',
    title: { ko: '(주)애니메디 웹페이지 디자인', en: 'AnyMedi Web Page Design' },
    subtitle: {
      ko: '의료기기 회사 랜딩 페이지 디자인',
      en: 'Landing page design for a medical device company',
    },
    client: { ko: '(주)애니메디', en: 'AnyMedi Inc.' },
    year: '2022',
    duration: {
      ko: '4주, 2021년 12월 ~ 2022년 1월',
      en: '4 weeks · Dec 2021 — Jan 2022',
    },
    categories: {
      ko: ['디지털'],
      en: ['Digital'],
    },
    cover: '/projects/anymedi/anymedi-3.png',
    hero: '/projects/anymedi/anymedi-3.png',
    summary: {
      ko: '제가 처음으로 Photoshop을 사용하여 진행한 웹디자인 작업입니다. 클라이언트가 제공한 와이어프레임을 기반으로 디자인을 제작했습니다. 회사에 적합한 무료 이미지를 찾는 일이 쉽지는 않았지만, 적절한 시각 자료를 찾는 역량을 키울 수 있는 좋은 기회가 되었습니다.',
      en: "My first web design project using Photoshop. I built the design on top of wireframes the client provided. Finding free images that fit the company's tone wasn't always easy, but it became a good chance to grow my eye for the right visual reference.",
    },
    role: {
      ko: ['웹 디자인'],
      en: ['Web Design'],
    },
    deliverables: {
      ko: ['랜딩 페이지'],
      en: ['Landing Page'],
    },
    tools: ['Photoshop'],
    link: 'https://anymedi.com/',
    columns: 1,
    gallery: [
      '/projects/anymedi/main.png',
      '/projects/anymedi/anymedi-2.png',
      '/projects/anymedi/anymedi-1.png',
      '/projects/anymedi/anymedi-4.png',
      '/projects/anymedi/anymedi-5.png',
    ],
  },
  {
    slug: 'meatin',
    index: '07',
    title: { ko: 'Meat in UI/UX 디자인', en: 'Meat in — UI/UX Design' },
    subtitle: {
      ko: '고기를 못 굽는 사람들을 위한 어플',
      en: 'An app for people who struggle to grill meat',
    },
    client: {
      ko: '팀 프로젝트',
      en: 'Team Project',
    },
    year: '2021',
    duration: {
      ko: '4주, 2021년 9월 ~ 2021년 10월',
      en: '4 weeks · Sep — Oct 2021',
    },
    categories: {
      ko: ['디지털'],
      en: ['Digital'],
    },
    cover: '/projects/meatin/main.png',
    hero: '/projects/meatin/main.png',
    summary: {
      ko: '고기를 잘 굽지 못하는 사람들을 위한 커뮤니티 & 레시피 어플입니다. 고기 레시피를 토대로 굽는 방법을 타이머를 통해 쉽게 알려줍니다. 팀 내에서 메인 디자이너로써 거의 모든 디자인을 혼자서 진행할 수 있는 좋은 경험이 되었습니다.',
      en: "A community and recipe app for people who struggle to cook meat well. Based on each recipe, the app guides cooking through built-in timers, making it easy to follow. As the lead designer on the team, I handled almost the entire design solo — a great hands-on experience.",
    },
    role: {
      ko: ['메인 UI/UX 디자이너'],
      en: ['Lead UI/UX Designer'],
    },
    deliverables: {
      ko: ['앱 UI', '레시피 타이머 인터페이스'],
      en: ['App UI', 'Recipe Timer Interface'],
    },
    tools: ['Figma'],
    gallery: [],
  },
  {
    slug: 'gyeonhae',
    index: '08',
    title: { ko: '견해 UI/UX 디자인', en: 'Gyeonhae — UI/UX Design' },
    subtitle: {
      ko: '시각장애인의 더 편리한 삶을 위한 점자 인식 어플',
      en: 'An object & barcode-recognition app for the visually impaired',
    },
    client: {
      ko: '개인 프로젝트',
      en: 'Personal Project',
    },
    year: '2021',
    duration: {
      ko: '4주, 2021년 5월 ~ 2021년 6월',
      en: '4 weeks · May — June 2021',
    },
    categories: {
      ko: ['디지털'],
      en: ['Digital'],
    },
    cover: '/projects/gyeonhae/main.png',
    hero: '/projects/gyeonhae/main.png',
    summary: {
      ko: '시각장애인의 더 편리한 삶을 위하여 만든 점자 인식 어플입니다. 어플의 카메라로 물건을 인식하면 어떤 물건인지 음성으로 알려주고, 상품의 바코드를 찍으면 어떤 상품인지 음성으로 알려줍니다. 안드로이드 앱은 제작 마무리 단계에 있으며, 시각장애인의 시점에서 앱을 디자인하기 위해 UX 공부를 깊게 한 것이 도움이 많이 되었습니다.',
      en: "A recognition app designed to make daily life easier for visually impaired users. The app's camera identifies objects and reads them out loud, and product barcodes are scanned and named via voice. The Android app is in its final production phase — going deep into UX research from a visually impaired user's perspective made all the difference in this design.",
    },
    role: {
      ko: ['UI/UX 디자인', '로고 디자인'],
      en: ['UI/UX Design', 'Logo Design'],
    },
    deliverables: {
      ko: ['Android 앱', '앱 아이콘'],
      en: ['Android App', 'App Icon'],
    },
    tools: ['Figma'],
    gallery: [
      { src: '/projects/gyeonhae/mockup.png', full: true },
    ],
    logoSection: {
      src: '/projects/gyeonhae/icon.png',
      label: { ko: '로고 디자인', en: 'Logo Design' },
      description: {
        ko: '점자 패턴과 시각의 확장을 모티브로 직접 디자인한 견해 앱 로고입니다.',
        en: 'A custom logo for the Gyeonhae app, designed around braille patterns and the idea of an expanded view.',
      },
    },
  },
  {
    slug: 'teum',
    index: '09',
    title: { ko: '틈 UI/UX 디자인', en: 'Teum — UI/UX Design' },
    subtitle: {
      ko: '골목 상권 활성화를 위한 어플',
      en: 'An app to revitalize neighborhood alley markets',
    },
    client: {
      ko: '팀 프로젝트',
      en: 'Team Project',
    },
    year: '2021',
    duration: {
      ko: '9주, 2021년 4월 ~ 2021년 6월',
      en: '9 weeks · Apr — June 2021',
    },
    categories: {
      ko: ['디지털'],
      en: ['Digital'],
    },
    cover: '/projects/teum/main.jpg',
    hero: '/projects/teum/main.jpg',
    summary: {
      ko: '유저 참여형의 골목시장 지도 어플입니다. 곳곳에 숨겨진 골목시장을 찾아 유저가 직접 등록하고 인증하는 방식입니다. 다른 디자이너와 진행한 첫 작업으로, 디자인 툴을 다루는 법과 앱 레이아웃을 짜는 법, 개발자와 협업하는 법 등을 배웠습니다.',
      en: "A user-driven map app for hidden alley markets. Users discover, register, and verify the markets themselves. As my first project working alongside another designer, I learned how to handle design tools, structure app layouts, and collaborate with developers.",
    },
    role: {
      ko: ['UI/UX 디자인'],
      en: ['UI/UX Design'],
    },
    deliverables: {
      ko: ['앱 UI', '지도 인터랙션'],
      en: ['App UI', 'Map Interaction'],
    },
    tools: ['Figma'],
    gallery: [{ src: '/projects/teum/main.jpg', full: true }],
  },
  {
    slug: 'dienen',
    index: '10',
    title: { ko: 'Dienen UI/UX 디자인', en: 'Dienen — UI/UX Design' },
    subtitle: {
      ko: '교내 급식질서 관리를 위한 어플',
      en: 'A school cafeteria order-management app',
    },
    client: {
      ko: '한국디지털미디어고등학교 봉사기구 디넌',
      en: 'Korea Digital Media HS — Volunteer org. Dienen',
    },
    year: '2021',
    duration: {
      ko: '10주, 2020년 12월 ~ 2021년 3월',
      en: '10 weeks · Dec 2020 — Mar 2021',
    },
    categories: {
      ko: ['디지털'],
      en: ['Digital'],
    },
    cover: '/projects/dienen.png',
    hero: '/projects/dienen.png',
    summary: {
      ko: '교내 자치 봉사기구 ‘디넌’의 급식 질서 지도 업무를 돕기 위해 만든 Android 앱입니다. 봉사자가 급식 시간 동안 학생들의 동선과 질서를 더 쉽게 관리할 수 있도록 앱의 화면 구조와 UI를 설계했습니다. 처음으로 개발자와 협업한 프로젝트였고, 디자인을 단독으로 맡아 실제 학교에서 사용되는 결과물로 완성했습니다.',
      en: "An Android app built to support ‘Dienen,’ the school's student-led volunteer organization, in guiding cafeteria order during lunch. I designed the screen architecture and UI so volunteers could more easily manage students' flow and order during meal time. It was my first project collaborating with developers; I led the design solo from start to finish, and it shipped as a working Android app actually used at the school.",
    },
    role: {
      ko: ['UI/UX 디자인'],
      en: ['UI/UX Design'],
    },
    deliverables: {
      ko: ['Android 앱', '앱 디자인 시스템'],
      en: ['Android App', 'App Design System'],
    },
    tools: ['Adobe XD', 'Figma'],
    gallery: [
      { src: '/projects/dienen-mockup.jpg', full: true },
      { src: '/projects/dienen-2.png', full: true },
    ],
  },
  {
    slug: 'mollang-arang',
    index: '11',
    title: { ko: '몰랑아랑 UI/UX 디자인', en: 'Mollang Arang — UI/UX Design' },
    subtitle: {
      ko: '튜티·튜터 매칭 가상 프로젝트',
      en: 'A tutee-tutor matching concept project',
    },
    client: {
      ko: '가상 팀 프로젝트',
      en: 'Concept Team Project',
    },
    year: '2021',
    duration: {
      ko: '하루, 2021년 1월 4일 ~ 2021년 1월 5일',
      en: '1 day · Jan 4 — 5, 2021',
    },
    categories: {
      ko: ['디지털'],
      en: ['Digital'],
    },
    cover: '/projects/mollang-arang/main.png',
    hero: '/projects/mollang-arang/main.png',
    summary: {
      ko: '학생들의 학습에서의 힘든 점을 해결할 수 있도록 해주는 어플입니다. 튜티와 튜터를 매치해주어 서로 필요한 것을 충족할 수 있도록 하였습니다. 과제로 진행한 가상 팀 프로젝트로, 하루라는 기한동안 한 앱의 UI를 짜보는 경험을 할 수 있었습니다.',
      en: "An app designed to address the difficulties students face in their studies, matching tutees with tutors so each finds what they need. As a virtual team project for an assignment, it gave me the experience of designing a full app UI within a single day.",
    },
    role: {
      ko: ['UI/UX 디자인'],
      en: ['UI/UX Design'],
    },
    deliverables: {
      ko: ['앱 UI'],
      en: ['App UI'],
    },
    tools: ['Adobe XD'],
    gallery: [{ src: '/projects/mollang-arang/mockup.png', full: true }],
  },
];
