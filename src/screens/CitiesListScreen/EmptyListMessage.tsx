import { Text, View } from "@components/common";
import React from "react";
import SvgUri from 'react-native-svg-uri';
import { GlobalStyles } from "@constants";
import { useStrings } from "@hooks";
import { StyleSheet } from "react-native";

export const EmptyListMessage = () => {
    const strings = useStrings()

    return (
        <View style={GlobalStyles.center}>
            <SvgUri
                width={100}
                height={100}
                source={require("@assets/list_empty.svg")}
            />
            <Text style={styles.text}>{strings.empty_cities_list}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 18
    }
})