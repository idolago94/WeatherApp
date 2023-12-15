import React from "react";
import { FlatList, Image, ListRenderItemInfo, StyleSheet } from "react-native";
import { Text, View } from "@components/common";
import { useCities } from "@hooks";
import { CityCard } from "./CityCard";
import { City } from "@types";

export const CitiesScreen = () => {
    const cities = useCities()

    const CityItem = ({ item }: ListRenderItemInfo<City>) => (
        <View style={styles.cardWrap}>
            <CityCard {...item} />
        </View>
    )

    return <View>
        <FlatList
            data={cities}
            renderItem={CityItem}
            numColumns={2}
            keyExtractor={(_, index) => index.toString()}
        />
    </View>
}

const styles = StyleSheet.create({
    cardWrap: {
        margin: 7,
        height: 100,
        aspectRatio: 1,
        // borderRadius: 9,
        // overflow: 'hidden'
    }
});