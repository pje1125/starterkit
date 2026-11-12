import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // PWA: 홈 화면 설치 + 오프라인 동작 (앱 이름/아이콘은 새 앱마다 수정)
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: '내 생활 웹앱',
        short_name: '웹앱',
        lang: 'ko',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#10b981',
        icons: [
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
        ],
      },
    }),
  ],
});
