# Frontend UI Portfolio

Bootstrap 기반 화면 레이아웃 및 UI 컴포넌트 설계 실습 저장소입니다.
페이지 단위 UI 샘플을 제작하고, 반복 패턴을 분리하여
재사용 가능한 UI Kit 구조로 확장하는 것을 목표로 합니다.

---

## Project Summary

| 항목          | 내용                              |
| ----------- | ------------------------------- |
| Purpose     | 화면 레이아웃 및 UI 패턴 설계 실습           |
| Method      | Sample → Pattern → Component 분리 |
| Framework   | Bootstrap 5                     |
| Output      | 페이지 샘플 + UI Kit                 |
| Integration | Flask Template 연동 예정            |

![HTML](https://img.shields.io/badge/HTML5-e34f26)
![CSS](https://img.shields.io/badge/CSS3-1572b6)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952b3)
![UI](https://img.shields.io/badge/UI-Component--Driven-grey)

---

## Goals

* 다양한 화면 UI 레이아웃 실습
* 페이지 단위 버전 실험 (v1 / v2 / v3)
* 반복 패턴 식별 및 분리
* 공통 스타일 토큰 정의
* 재사용 가능한 UI 컴포넌트 설계
* UI Kit 구조화

---

## Tech Stack

* HTML5
* CSS3
* Bootstrap 5
* Bootstrap Icons
* Vanilla JavaScript (부분 적용)
* Flask Template 연동 예정

---

## UI Samples

썸네일 클릭 시 실제 UI 페이지로 이동합니다.

### Login Page v1
| Login | Signup |
|--------|---------|
|[![](assets/img/previews/login-v1.png)](samples/auth/login-v1.html)| [![](docs/images/signup-v1.png)](samples/auth/signup-v1.html) |

---

### Dashboard

준비중

---

### Todo UI

준비중

---

### Board UI

준비중

---

### Shop UI

준비중

---

## Design Features

* 반응형 레이아웃
* Bootstrap Grid 시스템 활용
* 테마 스타일 실험 (Dark / Glass / Neon)
* UI 버전 관리 (v1, v2, v3)
* 공통 스타일 토큰 기반 설계
* 컴포넌트 재사용 구조 고려

---

## UI Architecture

이 저장소는 결과 화면과 재사용 컴포넌트를 분리하여 구성합니다.

* Samples: 완성된 화면 단위 UI
* Patterns: 반복 블록 구조
* Components: 재사용 UI 요소
* Foundations: 색상 / 간격 / 토큰

---

## Repository Structure

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
│ │ ├─ components/
│ │ └─ pages/
│ └─ img/
│   └─ previews/
│
├─ samples/
│ ├─ auth/
│ │ ├─ login-v1.html
│ │ ├─ login-v2.html
│ │ └─ register-v1.html
│ ├─ dashboard/
│ ├─ todo/
│ ├─ board/
│ ├─ home/
│ └─ shop/
│
└─ ui-kit/
  ├─ index.html
  ├─ foundations/
  ├─ components/
  └─ patterns/
```

---

## Design Strategy

단계별 확장 방식으로 UI를 구조화합니다.

1. 페이지 단위 UI 제작
2. 반복 패턴 추출
3. 공통 블록 분리
4. 재사용 컴포넌트화
5. UI Kit 정리

---

## Naming Convention

* 페이지 샘플: login-v1.html, dashboard-v2.html
* 미리보기 이미지: login-v1.png
* 컴포넌트 클래스: ui-card, ui-btn, ui-input
* 스타일 토큰: --color-primary, --space-md

---

## Roadmap

* Login UI v1 완료
* Login UI v2 / v3 확장
* Dashboard UI 세트
* Todo UI 세트
* Board UI 세트
* Shop UI 세트
* UI Kit 컴포넌트 분리
* Design Token 체계 정리

---

## Usage

정적 HTML 기반 샘플입니다.
index.html 또는 각 samples 페이지를 브라우저에서 직접 열어 확인할 수 있습니다.

---

## Author

DDORINY
Frontend Layout and Component Design Practice
