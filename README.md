# 曼谷 9/24-9/28 兩個人的行程網站

純靜態多頁網站，手機優先，離線也能開。

## 直接看
- 雙擊「打開網站.command」會在本機開一個小伺服器並打開瀏覽器（推薦，字型與圖片載入最完整）。
- 或直接雙擊 index.html。

## 放到手機上 / 給女友看
1. 免費部署（任一）：
   - Netlify Drop：https://app.netlify.com/drop 把整個資料夾拖進去，30 秒拿到網址。
   - Vercel：`npx vercel` 在這個資料夾執行。
   - GitHub Pages：把資料夾推到 repo，Settings > Pages 選 main 根目錄。
2. 手機 Safari 打開網址 > 分享 > 加入主畫面，就會像 app 一樣。

## 結構
- index.html 總覽
- day1.html ~ day5.html 每天時間軸（多選項、目的 / 怎麼玩 / 注意、導航與官網連結）
- nightlife.html 夜生活、guide.html 圖鑑、info.html 資訊（含照片授權）
- styles.css / app.js / img/

自動依系統切換深色 / 淺色。內容以 2026 年 9 月查證，出發前請再確認官網。
