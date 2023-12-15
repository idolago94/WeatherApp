import React, { forwardRef } from "react";
import { ImageURISource, StyleSheet, TextInput, TextInputProps } from "react-native";
import SvgUri from 'react-native-svg-uri';
import { View } from '.'
import { Colors } from "@constants";
import { IconButton } from "./IconButton";

type InputExtraProps = {
    icons: IconsOptions
}

type IconsOptions = {
    left?: IconConfig
    right?: IconConfig
}

type IconConfig = {
    source: ImageURISource,
    size?: number
    onPress?: () => void
}

export const TextInputWithIcons = forwardRef<TextInput, TextInputProps & InputExtraProps>((props, ref) => {
    const { icons: {
        left: leftIcon,
        right: rightIcon
    } } = props

    return (
        <View style={styles.container}>
            {leftIcon && <Icon {...leftIcon} />}
            <TextInput
                {...props}
                ref={ref}
                style={[styles.input, props.style]}
            />
            {rightIcon && <Icon {...rightIcon} />}
        </View>
    )
})

const Icon: React.FC<IconConfig> = ({ onPress, size, source }) => {
    const RenderComponent = onPress ? IconButton : SvgUri

    return (
        <RenderComponent
            width={size ?? 20}
            height={size ?? 20}
            source={source}
            onPress={onPress}
        />
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