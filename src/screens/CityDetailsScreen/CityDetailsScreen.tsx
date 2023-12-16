import React from "react";
import { Text, View } from "@components/common";
import { Colors, ScreenNames } from "@constants";
import { useAppRoute } from "@hooks";
import { useWeather } from "@hooks";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { WeatherContent } from "./WeatherContent";

export const CityDetailsScreen = () => {
    const { params } = useAppRoute<ScreenNames.CITY_DETAILS>()
    const { name, country, coords, image, continent, description } = params ?? {}

    return (
        <View>
            <ImageBackground source={{ uri: image }} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.imageContent}>
                    <Text style={[styles.imageText, styles.imageTitle]}>{name}</Text>
                    <Text style={[styles.imageText, styles.imageSubTitle]}>{country} {`(${continent})`}</Text>
                    <Text style={[styles.imageText, styles.imageDescription]}>{description}</Text>
                </View>
            </ImageBackground>
            <WeatherContent coords={coords} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        aspectRatio: 1,
        justifyContent: 'flex-end'
    },
    imageContent: {
        backgroundColor: Colors.black_65,
        flex: 0,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    imageText: {
        color: Colors.white,
        textAlign: 'center'
    },
    imageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    imageSubTitle: {
        fontSize: 18,
        marginVertical: 4
    },
    imageDescription: {
        marginTop: 4
    }
})