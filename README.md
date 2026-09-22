# 曼谷 9/24-9/28 兩個人的行程網站

純靜態多頁網站，手機優先，離線也能開。

## 線上網址
https://owen4sure.github.io/bangkok-trip/  （手機 Safari 打開，分享 > 加入主畫面）

## 直接看（本機）
- 雙擊「打開網站.command」會在本機開一個小伺服器並打開瀏覽器。macOS 第一次會擋（「無法打開」），到「系統設定 > 隱私權與安全性」按「強制打開」，或在資料夾按右鍵 > 打開。
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

## 匯入 Google My Maps（把所有景點分類放進 Google 地圖）
1. 手機或電腦開 https://www.google.com/maps/d/ → 「建立新地圖」。
2. 左側「匯入」→ 選 `曼谷景點-MyMaps.csv`。
3. 定位欄位選「地址」（Google 會自動把店名定位到正確位置），標題欄位選「名稱」。
4. 圖層右上「統一樣式」→ 改成「依資料欄設定樣式：分類」，七個分類就會各自一個顏色。
5. 存檔後，手機 Google Maps →「已儲存」→「地圖」就看得到；每個點都有排定日、說明與連結。
（`曼谷景點-MyMaps.kml` 是同一份、只含已確認座標的版本，Google Earth 可直接開。）
