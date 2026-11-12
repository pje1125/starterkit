# 프로젝트 규칙

## 스택
Vite + React 19 + TypeScript(strict) + Tailwind CSS v4 + Zustand + vite-plugin-pwa

## 규칙
- 응답/주석/커밋 메시지/문서는 한국어, 변수명·함수명은 영어
- 들여쓰기 2칸, 스타일은 Tailwind 유틸리티 클래스 우선
- 모바일 우선 레이아웃 (`min-h-dvh`, 터치 영역 충분히 크게)
- 영속 데이터는 `src/store`의 Zustand persist 사용, 단순 값은 `useLocalStorage`
- 서버/DB는 필요가 생기기 전에는 추가하지 않음 (필요 시 Supabase 우선 검토)
- 변경 후 `npm run build`, `npm run lint` 통과 확인
