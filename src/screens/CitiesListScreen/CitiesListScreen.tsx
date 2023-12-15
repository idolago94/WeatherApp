import React, { useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import { TextInputWithIcon, View } from "@components/common";
import { useCities } from "@hooks";
import { CityCard } from "./CityCard";
import { City } from "@types";
import { EmptyListMessage } from "./EmptyListMessage";
import { GlobalStyles } from "../../constants/Styles";

export const CitiesListScreen = () => {
    const [searchField, setSearchField] = useState('')
    const cities = useCities((city) => (!searchField || city.name.includes(searchField) || city.country.includes(searchField)))

    const onSearch = (txt: string) => {
        setSearchField(txt)
    }

    const CityItem = ({ item }: ListRenderItemInfo<City>) => (
        <View style={styles.cardWrap}>
            <CityCard {...item} />
        </View>
    )

    return <View>
        <TextInputWithIcon
            onChangeText={onSearch}
            iconSource={require("@assets/search.svg")}
            clearButtonMode='always'
        />
        <FlatList
            data={cities}
            renderItem={CityItem}
            numColumns={2}
            keyExtractor={(_, index) => index.toString()}
            ListEmptyComponent={EmptyListMessage}
            contentContainerStyle={GlobalStyles.flexGrow}
        />
    </View>
}

const styles = StyleSheet.create({
    cardWrap: {
        margin: 7,
        aspectRatio: 1,
    }
});