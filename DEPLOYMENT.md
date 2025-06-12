# 🚀 GitHub Pages 自動部署指南

這個專案使用 GitHub Actions 來自動打包和部署到 GitHub Pages。

## 📋 設置步驟

### 1. 推送代碼到 GitHub

```bash
# 如果還沒有遠端倉庫，先在 GitHub 創建一個新的倉庫
git remote add origin https://github.com/YOUR_USERNAME/mizuki-profile-site.git

# 推送代碼
git branch -M main
git push -u origin main
```

### 2. 啟用 GitHub Pages

1. 前往你的 GitHub 倉庫
2. 點擊 **Settings** 標籤
3. 在左側選單中找到 **Pages**
4. 在 **Source** 部分選擇 **GitHub Actions**

### 3. 自動部署

一旦設置完成，每次推送到 `main` 分支時，GitHub Actions 會自動：

1. ✅ 安裝依賴 (`npm ci`)
2. ✅ 打包專案 (`npm run build`)
3. ✅ 部署到 GitHub Pages

## 🔧 工作流程說明

### 觸發條件
- 推送到 `main` 分支
- 手動觸發（在 Actions 頁面）

### 建置步驟
1. **Checkout** - 下載代碼
2. **Setup Node.js** - 設置 Node.js 18 環境
3. **Install dependencies** - 安裝 npm 依賴
4. **Build project** - 執行 Vite 打包
5. **Deploy** - 部署到 GitHub Pages

## 🌐 訪問網站

部署完成後，你的網站將可以在以下網址訪問：
```
https://YOUR_USERNAME.github.io/mizuki-profile-site/
```

## 🛠️ 本地開發

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 本地打包測試
npm run build
npm run preview
```

## 📁 專案結構

```
mizuki-profile-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 工作流程
├── src/
│   ├── components/             # Vue 組件
│   ├── pages/                  # 頁面
│   ├── styles/                 # 樣式檔案
│   └── assets/                 # 靜態資源
├── dist/                       # 打包輸出目錄
├── vite.config.mjs            # Vite 配置
└── package.json               # 專案配置
```

## 🔄 更新網站

只需要推送代碼到 `main` 分支：

```bash
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Actions 會自動處理其餘的工作！

## 🐛 故障排除

### 部署失敗
1. 檢查 GitHub Actions 日誌
2. 確認 `package.json` 中的腳本正確
3. 檢查 Vite 配置中的 `base` 路徑

### 資源載入問題
- 確認 `vite.config.mjs` 中的 `base` 設置正確
- 檢查圖片和其他資源的路徑

### 權限問題
- 確認倉庫的 Pages 設置正確
- 檢查 Actions 權限設置 