# Spec Document Manager 官網

Spec Document Manager 桌面應用程式的 Landing Page。使用 Astro 6 + Tailwind CSS v4 + GSAP 建構。

## 指令

```bash
npm run dev       # 啟動開發伺服器
npm run build     # 建置至 dist/
npm run preview   # 預覽正式建置結果
```

## 架構

```
src/
  layouts/base-layout.astro   # HTML 外殼、字型載入、所有 JS（GSAP、輪播、FAQ、OS 偵測）
  pages/index.astro           # 單頁 Landing Page（導覽列、Hero、功能、流程、截圖、下載、FAQ、頁尾）
  style.css                   # Tailwind v4 @theme 設計 token + 所有自訂 CSS
public/assets/                # 應用程式截圖（PNG）
```

## 關鍵模式

- **單頁網站**：所有內容在 `index.astro`，無路由
- **Tailwind v4**：在 `style.css` 使用 `@theme` 指令定義自訂 token（非 `tailwind.config`）
- **GSAP**：在 `base-layout.astro` 的 `<script>` 中匯入（Astro 以模組方式處理）
- **主色調**：`--color-accent: #10b981`（emerald-500）
- **字型**：Satoshi（內文）+ JetBrains Mono（程式碼），透過 Google Fonts / Fontshare 載入
- **GitHub Releases API**：取得最新版本 URL，依作業系統顯示對應下載按鈕

## 注意事項

- `index.astro` 約 588 行 — 單頁 Landing Page 的設計，所有區塊集中在一個檔案
- `<script>` 標籤中使用 TypeScript 語法（如 `ReturnType<typeof setInterval>`、非空斷言 `!`）
- `screenshot-split.png` 存在於 public/assets 但頁面中未使用
- 尚未設定測試套件
