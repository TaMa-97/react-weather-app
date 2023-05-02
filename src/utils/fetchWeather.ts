//OpenWeatherMap APIから天気情報を取得する

// 環境変数,APIキー読み込み
const API_KEY = process.env.REACT_APP_API_KEY;

// async非同期でリクエストを送信（引数cityは文字列定義）
// 引数: city (都市名)
// 戻り値: APIから取得した天気情報のJSONオブジェクト
export const fetchWeather = async (city: string) => {
  // qパラメータに都市名を指定
  // appidパラメータにAPIキーを指定
  // unitsパラメータに'metric'を指定(温度を摂氏で取得)
  // awaitでレスポンス（OpenWeatherMap API）が返ってくるまで待機
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  // 取得した天気情報をJSON形式に変換して返す
  return response.json();
};
