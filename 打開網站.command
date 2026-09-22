#!/bin/bash
cd "$(dirname "$0")"
PORT=8765
( sleep 1; open "http://localhost:$PORT/index.html" ) &
echo "曼谷網站 http://localhost:$PORT  (關掉這個視窗就停止)"
python3 -m http.server $PORT
