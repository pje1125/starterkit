# 내 생활 웹앱 Starter Kit

식물 물주기, 핸드드립 스탑워치, 랜덤 여행지 뽑기처럼 **혼자 쓰는 소형 웹앱**을 빠르게 만들기 위한 템플릿입니다.

## 기술 스택
- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Zustand (persist → localStorage 저장)
- vite-plugin-pwa (홈 화면 설치, 오프라인)
- ESLint + Prettier (2칸 들여쓰기)

## 새 앱 시작하기
1. GitHub에서 **Use this template**으로 새 저장소 생성 (또는 폴더 복사)
2. `package.json`의 `name`, `index.html`의 `<title>`, `vite.config.ts`의 PWA `manifest`, `public/icon.svg` 수정
3. 설치 및 실행
   ```bash
   npm install
   npm run dev
   ```

## 스크립트
| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 |
| `npm run build` | 타입체크 + 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 (PWA 확인) |
| `npm run lint` | ESLint 검사 |
| `npm run format` | Prettier 포맷 |

## 폴더 구조
```
src/
  components/  재사용 UI 컴포넌트
  hooks/       커스텀 훅 (예: useLocalStorage)
  store/       Zustand 스토어 (예: useCounterStore)
  data/        정적 데이터 (JSON/TS)
```

## 필요할 때 추가하는 옵션
- 날짜 계산: `npm i date-fns`
- 아이콘: `npm i lucide-react`
- 애니메이션: `npm i motion`
- 기기 간 동기화/공유: Supabase 또는 Firebase
- 서버 로직/SEO가 필요하면 Next.js로 전환

## 배포
Vercel / Cloudflare Pages / GitHub Pages에 저장소를 연결하면 `git push`마다 자동 배포됩니다.
(빌드 명령: `npm run build`, 출력 폴더: `dist`)

## 참고
`typescript-eslint`가 아직 TypeScript 7을 지원하지 않아 TypeScript는 `~6.0.3`으로 고정했습니다.
지원되면 올려도 됩니다.
