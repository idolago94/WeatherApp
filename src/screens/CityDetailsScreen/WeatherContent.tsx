import { Text, View } from "@components/common";
import { CityCoords } from "@types";
import { useStrings, useWeather } from "@hooks";
import { getWeatherIconSource } from "@utils";
import { ActivityIndicator, Image, StyleSheet } from "react-native";
import { GlobalStyles } from "@constants";

type Props = {
    coords: CityCoords
}

export const WeatherContent: React.FC<Props> = ({ coords }) => {
    const { weatherContent } = useStrings()
    const { weather, isLoading, error } = useWeather(coords)
    return (
        <View style={GlobalStyles.center}>
            {isLoading ? <ActivityIndicator /> : (error ? <Text>{weatherContent.fetchWeatherFailed}</Text> : <>
                <Text style={styles.text}>{weatherContent.temprature} {weather?.main.temp}</Text>
                <Text style={styles.text}>{weatherContent.max_temprature} {weather?.main.temp_max}</Text>
                <Text style={styles.text}>{weatherContent.min_temprature} {weather?.main.temp_min}</Text>
                <Text style={styles.text}>{weatherContent.feels_like} {weather?.main.feels_like}</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>{weatherContent.weather}</Text>
                    {weather?.weather[0].icon && <Image style={styles.icon} source={getWeatherIconSource(weather?.weather[0].icon)} />}
                    <Text style={styles.text}>{weather?.weather[0].description}</Text>
                </View>
            </>)}
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20
    },
    text: {
        marginVertical: 5,
        fontSize: 18
    },
    rowContainer: { flexDirection: 'row', flex: 0, alignItems: 'center' }
})