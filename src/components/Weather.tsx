/**
 * @component
 * Weather：都市名を入力しクリックで天気情報を取得
 */

import React, { useState } from "react";
import { fetchWeather } from "../utils/fetchWeather";

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>("");
  //<any>で一応型定義
  const [weather, setWeather] = useState<any>(null);

  // フォームが送信されたときに実行される非同期関数
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // デフォルトのフォーム送信動作はキャンセルしとく
    e.preventDefault();
    // awaitでレスポンスが返ってくるまで待機（天気データを取得する）
    const data = await fetchWeather(city);
    // dataをweatherに格納して再レンダリング
    setWeather(data);
    console.log(data);
  };

  return (
    <div>
      <h2>天気情報</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="都市名"
          value={city}
          // 入力が変更されたらsetCity関数を使ってcityのstateを更新する
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">検索</button>
      </form>
      {/* weather が存在する場合、天気情報を表示 */}
      {weather && weather.main && weather.weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>温度: {weather.main.temp} ℃</p>
          <p>天気: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
