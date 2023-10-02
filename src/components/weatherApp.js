import { useState } from "react";
import WeatherForm from "./weatherForm";

export default function WeatherApp(){
    const [weather, setWeather] = useState(null);
    return(
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />;
        </div>
    )
}