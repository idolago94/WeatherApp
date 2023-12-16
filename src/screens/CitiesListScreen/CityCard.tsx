import React, { useMemo } from "react";
import { City } from "@types";
import { Text, View } from "@components/common";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, GlobalStyles, ScreenNames } from "@constants";
import { useAppNavigation } from "@hooks";

export const CityCard: React.FC<City> = (props) => {
    const { name, country, description, image } = props
    const navigation = useAppNavigation()
    const imageUri = useMemo(() => ({ uri: image }), [image])

    const onCardPress = () => {
        navigation.navigate(ScreenNames.CITY_DETAILS, props)
    }

    return (
        <TouchableOpacity onPress={onCardPress} style={GlobalStyles.flex1} activeOpacity={.6}>
            <ImageBackground source={imageUri} resizeMode="cover" style={GlobalStyles.flex1} borderRadius={9}>
                <View style={styles.content}>
                    <Text style={[styles.txt, styles.nameText]}>{name}</Text>
                    <Text style={[styles.txt, styles.countryText]}>{country}</Text>
                    <Text style={[styles.txt]}>{description}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: 3,
        backgroundColor: Colors.black_65, 
        width: '100%', 
        borderRadius: 9 
    },
    txt: { color: Colors.white },
    nameText: { fontSize: 20, fontWeight: 'bold' },
    countryText: { fontWeight: 'bold', marginBottom: 2 }
})