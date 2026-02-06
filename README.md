# Frontend UI Portfolio

프론트엔드 레이아웃 및 UI 디자인 실습 + 재사용 가능한 컴포넌트 설계를 목표로 한 UI 포트폴리오 저장소입니다.  
Bootstrap 기반으로 다양한 화면을 버전 단위로 제작하고, 이후 UI Kit 형태로 컴포넌트를 분리합니다.

---

## Goals

- 다양한 화면 UI 디자인 실습
- 페이지 단위 샘플 축적 (v1 / v2 / v3 버전 실험)
- 공통 스타일 토큰 분리
- 재사용 가능한 UI 컴포넌트 설계
- UI Kit 구조화

---

## Tech Stack

- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- (연동 예정) Flask Template

---

## UI Samples
> 썸네일 클릭 시 실제 UI 페이지로 이동합니다.

### Login Page v1 
[![](assets/img/previews/login-v1.png)](samples/auth/login-v1.html) 

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

- 반응형 레이아웃
- Bootstrap Grid 시스템 활용
- Glass / Dark / Neon 스타일 테마 실험
- UI 버전 관리 (v1, v2, v3)
- 공통 토큰 기반 스타일링
- 컴포넌트 재사용 구조 설계

---

## UI Architecture

이 저장소는 **결과물(Samples)** 과 **재사용 컴포넌트(UI Kit)** 를 분리하여 구성합니다.



## Repository Structure
```
frontend-ui-portfolio/
├─ index.html # UI Samples 허브 페이지
│
├─ assets/
│ ├─ css/
│ │ ├─ theme.css # 색상/토큰/기본 스타일
│ │ ├─ components.css # 공통 UI 컴포넌트
│ │ └─ pages/ # 페이지 전용 스타일
│ ├─ js/
│ │ ├─ components/ # 공용 JS 유틸
│ │ └─ pages/
│ └─ img/
│   └─ previews/ # README / 허브용 미리보기 이미지
│
├─ samples/ # 완성된 화면 샘플 모음
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
└─ ui-kit/ # 재사용 UI 컴포넌트 쇼케이스
├─ index.html
├─ foundations/
├─ components/
└─ patterns/

```

---

## Design Strategy

Samples → Patterns → Components 단계로 확장합니다.

1. 페이지 단위 UI 제작
2. 반복되는 블록 패턴 추출
3. 재사용 가능한 컴포넌트로 분리
4. UI Kit 구조화

---

## Naming Convention

- 페이지 샘플: login-v1.html, dashboard-v2.html
- 미리보기 이미지: login-v1.png
- 컴포넌트 클래스: ui-card, ui-btn, ui-input

---

## Roadmap

- Login UI v1 완료
- Login UI v2 / v3 예정
- Dashboard UI
- Todo UI
- Board UI
- Shop UI
- UI Kit 컴포넌트 분리
- Design Token 시스템 정리

---

## Author

DDORINY  
Frontend UI Layout and Component Design Practice

