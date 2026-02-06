# Frontend UI Portfolio

프론트엔드 레이아웃 및 UI 디자인 실습 모음

## Tech Stack
- HTML
- CSS
- Bootstrap
- Flask Template

## UI Samples

| Project | Preview |
|--------|---------|
| Login Page | 이미지 |
| Dashboard | 이미지 |
| Todo UI | 이미지 |

## 특징
- 반응형 레이아웃
- Bootstrap Grid 사용
- 재사용 가능한 UI 컴포넌트 설계

## repositories 구성
```
frontend-ui-portfolio/
├─ index.html                       # UI Samples 허브(지금 만든 표)
├─ assets/
│  ├─ css/
│  │  ├─ theme.css                  # 토큰/기본 스타일(색, 폰트, radius)
│  │  ├─ components.css             # 컴포넌트 클래스 모음(.ui-card, .ui-btn 등)
│  │  └─ pages/                     # 페이지 전용 스타일(필요할 때만)
│  │     ├─ login.css
│  │     └─ dashboard.css
│  ├─ js/
│  │  ├─ components/                # 공용 JS 컴포넌트(토스트, 모달 유틸 등)
│  │  └─ pages/
│  └─ img/
│
├─ samples/                         # “완성된 화면” 모음(디자인별)
│  ├─ auth/
│  │  ├─ login-v1.html
│  │  ├─ login-v2.html
│  │  └─ register-v1.html
│  ├─ dashboard/
│  ├─ todo/
│  ├─ home/
│  ├─ board/
│  └─ shop/
│
└─ ui-kit/                          # “재사용 가능한 컴포넌트 쇼케이스”
   ├─ index.html                    # 컴포넌트 목록/가이드
   ├─ foundations/                  # 토큰/타이포/그리드/스페이싱 규칙
   ├─ components/                   # 버튼/카드/폼/테이블/뱃지/모달 등
   │  ├─ buttons.html
   │  ├─ forms.html
   │  ├─ cards.html
   │  └─ tables.html
   └─ patterns/                     # 조합 패턴(로그인폼 블록, 대시보드 카드 그리드 등)

```
