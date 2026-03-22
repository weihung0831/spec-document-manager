# Spec Document Manager 官網

Spec Document Manager 桌面應用程式的 Landing Page。使用 Astro 6 + Tailwind CSS v4 + GSAP 建構。

## 指令

```bash
npm install       # 安裝依賴
npm run dev       # 啟動開發伺服器
npm run build     # 建置至 dist/
npm run preview   # 預覽正式建置結果
```

## 架構

```
src/
├── components/
│   ├── landing-page.astro        # 主頁面容器，組合所有 section
│   ├── section-nav.astro         # 導覽列（含手機版漢堡選單）
│   ├── section-hero.astro        # Hero 區塊
│   ├── section-marquee.astro     # 跑馬燈
│   ├── section-features.astro    # 功能介紹
│   ├── section-workflow.astro    # 工作流程
│   ├── section-screenshots.astro # 應用截圖輪播
│   ├── section-shortcuts.astro   # 快捷鍵
│   ├── section-opensource.astro  # 開源資訊
│   ├── section-download.astro    # 下載區塊（GitHub Releases API）
│   ├── section-faq.astro         # 常見問題
│   └── section-footer.astro      # 頁尾
├── i18n/
│   ├── en.ts                     # 英文翻譯
│   ├── zh-tw.ts                  # 繁體中文翻譯
│   ├── icons.ts                  # SVG icon 定義
│   └── utils.ts                  # t()、getLocaleFromUrl()、getLocalePath()
├── layouts/
│   └── base-layout.astro         # HTML 外殼、字型載入、GSAP 動畫
├── pages/
│   ├── index.astro               # 英文首頁（預設）
│   └── zh-TW/index.astro         # 繁體中文首頁
└── style.css                     # Tailwind v4 @theme token + 自訂 CSS
public/assets/                    # 應用程式截圖（PNG）
```

## 關鍵模式

- **元件化單頁網站**：頁面由 `landing-page.astro` 組合各 `section-*.astro` 元件
- **i18n 路由**：Astro i18n（`prefixDefaultLocale: false`），英文為 `/`、中文為 `/zh-TW/`
- **翻譯模式**：元件透過 `t(locale)` 取得翻譯物件，locale 由 `getLocaleFromUrl()` 從 URL 推斷
- **Tailwind v4**：在 `style.css` 使用 `@theme` 指令定義自訂 token（非 `tailwind.config`）
- **GSAP**：在 `base-layout.astro` 的 `<script>` 中匯入（Astro 以模組方式處理）
- **主色調**：`--color-accent: #10b981`（emerald-500）
- **字型**：Satoshi（內文）+ JetBrains Mono（程式碼），透過 Google Fonts / Fontshare 載入
- **GitHub Releases API**：取得最新版本 URL，依作業系統顯示對應下載按鈕

## 注意事項

- `<script>` 標籤中使用 TypeScript 語法（如 `ReturnType<typeof setInterval>`、非空斷言 `!`）
- 尚未設定測試套件
