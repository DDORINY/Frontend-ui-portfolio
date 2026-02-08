# Frontend UI Portfolio

Bootstrap 기반 화면 레이아웃 + UI 컴포넌트 설계 실습 저장소입니다.  
페이지 단위 샘플을 만들고, 반복 패턴을 분리하여 **재사용 가능한 UI Kit (Design System)** 으로 확장하는 것을 목표로 합니다.

---

## Project Summary

| 항목 | 내용 |
| --- | --- |
| Purpose | 화면 레이아웃 및 UI 패턴 설계 실습 |
| Method | Sample → Pattern → Component 분리 |
| Framework | Bootstrap 5 |
| Output | UI Samples + UI Kit |
| Integration | (예정) Flask Template 연동 |

![HTML](https://img.shields.io/badge/HTML5-e34f26)
![CSS](https://img.shields.io/badge/CSS3-1572b6)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952b3)
![UI](https://img.shields.io/badge/UI-Component--Driven-grey)

---

# Quick Start

- **Portfolio Home** → `index.html`
- **UI Kit Docs** → `ui-kit/index.html`

---

# UI Samples

썸네일 클릭 시 실제 UI 페이지로 이동합니다.

## Auth

| Login v1 | Signup v1 |
| --- | --- |
| [![](assets/img/previews/login-v1.png)](samples/auth/login-v1.html) | [![](assets/img/previews/signup-v1.png)](samples/auth/signup-v1.html) |

---

## Dashboard

| Dashboard v1 |
| --- |
| [![](assets/img/previews/dashboard-v1.png)](samples/dashboard/dashboard-v1.html) |

---

## Upcoming Samples

- Todo UI
- Board UI
- Shop UI

---

# UI Kit Documentation

UI Kit은 **토큰 → 컴포넌트 → 패턴** 계층으로 구성됩니다.

---

## Foundations (Design Tokens)

| 문서 | 설명 |
|------|------|
| `ui-kit/foundations/tokens.html` | 색상 / radius / shadow / theme 변수 |

---

## Components

| 문서 | 설명 |
|------|------|
| `ui-kit/components/buttons.html` | 버튼 스타일 |
| `ui-kit/components/cards.html` | 카드 UI |
| `ui-kit/components/forms.html` | 로그인/회원가입 input 스타일 |
| `ui-kit/components/badges.html` | 상태 배지 / dot |
| `ui-kit/components/tables.html` | 테이블 스타일 |

---

## Patterns (Layout Blocks)

| 문서 | 설명 |
|------|------|
| `ui-kit/patterns/kanban-board.html` | 칸반 보드 레이아웃 |
| `ui-kit/patterns/dashboard-layout.html` | 사이드바 + 탑바 구조 *(추가 예정)* |
| `ui-kit/patterns/auth-layout.html` | 로그인/회원가입 레이아웃 *(추가 예정)* |

---

# Tech Stack

- HTML5 / CSS3
- Bootstrap 5
- Bootstrap Icons
- Vanilla JavaScript
- (예정) Flask Template 연동

---

# Design System Structure

이 프로젝트는 스타일을 3계층으로 분리합니다.
- theme.css → 디자인 토큰
- components.css → 재사용 컴포넌트
- pages/*.css → 페이지 전용 스타일
페이지에서는 다음 순서로 로드합니다:

```html
<link rel="stylesheet" href="assets/css/theme.css">
<link rel="stylesheet" href="assets/css/components.css">
<link rel="stylesheet" href="assets/css/pages/xxx.css">
```
---

# Repository Structure
```
frontend-ui-portfolio/
├─ index.html
│
├─ assets/
│ ├─ css/
│ │ ├─ theme.css
│ │ ├─ components.css
│ │ └─ pages/
│ ├─ js/
│ └─ img/previews/
│
├─ samples/
│ ├─ auth/
│ ├─ dashboard/
│ ├─ todo/
│ ├─ board/
│ └─ shop/
│
└─ ui-kit/
  ├─ index.html
  ├─ foundations/
  ├─ components/
  └─ patterns/
```
---

# Design Workflow
- 페이지 UI 제작 (Samples)
- 반복 패턴 식별
- 공통 블록 추출
- 컴포넌트화
- UI Kit 문서화
- 다른 페이지에 재사용

---

# Naming Convention
- 페이지: login-v1.html, dashboard-v2.html
- 이미지: login-v1.png
- 클래스: ui-card, icon-btn, pill
- 토큰: --accent, --radius, --shadow

---
# Roadmap

- [x] Login v1
- [x] Signup v1
- [x] Dashboard v1
- [x] UI Kit 기본 문서
- [ ] Todo UI
- [ ] Board UI
- [ ] Shop UI
- [ ] Modal / Alert / Tabs 컴포넌트
- [ ] Flask 템플릿 연동

---

# Usage

정적 HTML 기반 프로젝트입니다.  
`index.html` 또는 각 `samples` 페이지를 브라우저에서 직접 열어 확인할 수 있습니다.

---

# Author

**DDORINY**  
Frontend Layout & Component Design Practice
