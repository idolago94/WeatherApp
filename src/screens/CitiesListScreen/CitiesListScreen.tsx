import React, { useMemo, useRef, useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, TextInput } from "react-native";
import { TextInputWithIcons, View } from "@components/common";
import { useCities } from "@hooks";
import { CityCard } from "./CityCard";
import { City } from "@types";
import { EmptyListMessage } from "./EmptyListMessage";
import { GlobalStyles } from "../../constants/Styles";

export const CitiesListScreen = () => {
    const searchInputRef = useRef<TextInput>(null)
    const [searchField, setSearchField] = useState('')
    const cities = useCities((city) => (!searchField || city.name.includes(searchField) || city.country.includes(searchField)))

    const searchFieldIcons = useMemo(() => ({
        left: {
            source: require("@assets/search.svg"),
            size: 20,
            onPress: () => { searchInputRef.current?.focus() }
        }
    }), [searchInputRef])

    const onSearch = (txt: string) => {
        setSearchField(txt)
    }

    const CityItem = ({ item }: ListRenderItemInfo<City>) => (
        <View style={styles.cardWrap}>
            <CityCard {...item} />
        </View>
    )

    return <View>
        <TextInputWithIcons
            ref={searchInputRef}
            onChangeText={onSearch}
            icons={searchFieldIcons}
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