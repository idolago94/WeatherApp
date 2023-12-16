import React, { useMemo, useRef, useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, TextInput } from "react-native";
import { Text, TextInputWithIcons, View } from "@components/common";
import { useCities, useStrings } from "@hooks";
import { CityCard } from "./CityCard";
import { City } from "@types";
import { EmptyListMessage } from "./EmptyListMessage";
import { GlobalStyles } from "@constants";
import ModalSelector from 'react-native-modal-selector'
import { SortKeys, getSortFunctionByKey } from "@utils";
import { UnitsSwitch } from "@components/UnitsSwitch";

type SortItem = {
    key: string
    component: React.ReactElement
}

export const CitiesListScreen = () => {
    const strings = useStrings()
    const searchInputRef = useRef<TextInput>(null)
    const sortPickerRef = useRef<ModalSelector<SortItem>>(null)
    const [searchField, setSearchField] = useState<string>('')
    const [sortSelected, setSortSelected] = useState<string>('')

    const cities = useCities(
        (city) => (!searchField || city.name.includes(searchField) || city.country.includes(searchField)),
        getSortFunctionByKey(sortSelected)
    )

    const isSortSelected = (key: string) => (sortSelected === key ? 'bold' : '400')

    const sortOptions = useMemo<SortItem[]>(() => ([
        { key: SortKeys.NAME, component: <Text style={{ fontWeight: isSortSelected(SortKeys.NAME) }}>{strings.sort_by_city_name}</Text> },
        { key: SortKeys.TLV, component: <Text style={{ fontWeight: isSortSelected(SortKeys.TLV) }}>{strings.sort_by_close_to_tlv}</Text> }
    ]), [sortSelected])

    const searchFieldIcons = useMemo(() => ({
        left: {
            source: require("@assets/search.svg"),
            size: 20,
            onPress: () => { searchInputRef.current?.focus() }
        },
        right: {
            source: require("@assets/sort.svg"),
            size: 20,
            onPress: () => { sortPickerRef.current?.open() }
        }
    }), [searchInputRef, sortPickerRef])

    const onSearchChange = (txt: string) => {
        setSearchField(txt)
    }

    const onSortChange = (item: SortItem) => {
        setSortSelected(item.key)
    }

    const CityItem = ({ item }: ListRenderItemInfo<City>) => (
        <View style={styles.cardWrap}>
            <CityCard {...item} />
        </View>
    )

    return <View>
        <TextInputWithIcons
            ref={searchInputRef}
            onChangeText={onSearchChange}
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
        <ModalSelector
            ref={sortPickerRef}
            data={sortOptions}
            onChange={onSortChange}
            customSelector={<View />}
        />
        <View style={styles.unitsSwitchWrap}>
            <UnitsSwitch />
        </View>
    </View>
}

const styles = StyleSheet.create({
    cardWrap: {
        margin: 7,
        aspectRatio: 1,
    },
    unitsSwitchWrap: {
        flex: 0,
        position: 'absolute',
        bottom: 30,
        left: 30,
        borderRadius: 10,
        overflow: 'hidden'
    }
});