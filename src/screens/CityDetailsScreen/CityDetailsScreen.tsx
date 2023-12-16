import React from "react";
import { Text, View } from "@components/common";
import { ScreenNames } from "@constants";
import { useAppRoute } from "@hooks";

export const CityDetailsScreen = () => {
    const { params } = useAppRoute<ScreenNames.CITY_DETAILS>()
    const { name, country, coords } = params ?? {}

    return (
        <View>
            <Text>{name}</Text>
            <Text>{country}</Text>
        </View>
    )
}