import React from "react"
import { TextProps, Text as RNText } from "react-native"
import { useStyle } from "../../hooks"

export const Text: React.FC<React.PropsWithChildren<TextProps>> = (props) => {
    const { text } = useStyle()

    return <RNText
        {...props}
        style={[text, props.style]}
    >{props.children}</RNText>
}