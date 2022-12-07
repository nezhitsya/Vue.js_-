# [Vue.js 완벽 가이드](https://www.inflearn.com/course/vue-js)

## News Clone

- [Hacker News](https://news.ycombinator.com) Clone
    - [Hacker News API](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

<img width="680" src="https://user-images.githubusercontent.com/60697742/206103202-689e07a1-ec89-45dc-831f-2a0a9379d0ee.png">
<img width="680" src="https://user-images.githubusercontent.com/60697742/206103184-738723e6-c3a8-494d-9a05-0a02bfc25bcc.png">

```
[데이터 호출 시점]
1. 라우터 네비게이션 가드
- 특정 URL로 접근하기 전의 동작을 정의하는 속성 (함수)

2. 컴포넌트 라이프 사이클 훅
- created : (컴포넌트가 생성)되자마자 호출되는 로직
```

### 외부 라이브러리 모듈화

```
- 이유 : Vue.js 관련 라이브러리 부재 시 일반 라이브러리 결합 필요
- 종류
    1) 차트
    2) 데이트 피커
    3) 테이블
    4) 스피너
    ...
```

### 프로젝트 배포하기

```
1. public/_redirects 파일 생성 후 각각 서버 설정
2. npm run build
```

### 컴포넌트 디자인 패턴

```
1. Common - 기본적인 컴포넌트 등록과 컴포넌트 통신
2. Slot - 마크업 확장이 가능한 컴포넌트
3. Controlled - 결합력이 높은 컴포넌트
4. Renderless - 데이터 처리 컴포넌트
```