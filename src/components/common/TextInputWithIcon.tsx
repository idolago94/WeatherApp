import React from "react";
import { ImageURISource, StyleSheet, TextInput, TextInputProps } from "react-native";
import SvgUri from 'react-native-svg-uri';
import { useStyle } from "@hooks";
import { View } from '.'
import { Colors } from "@constants";

type InputExtraProps = {
    iconSource: ImageURISource
}

export const TextInputWithIcon: React.FC<TextInputProps & InputExtraProps> = (props) => {
    const theme = useStyle()

    return (
        <View style={styles.container}>
            <SvgUri
                width={20}
                height={20}
                source={props.iconSource}
            />
            <TextInput
                {...props}
                style={[styles.input, props.style]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        margin: 7,
        padding: 7,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100
    },
    input: {
        flexGrow: 1,
        marginLeft: 5
    }
})