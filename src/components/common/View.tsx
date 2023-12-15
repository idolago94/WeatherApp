import React from "react"
import { View as RNView, ViewProps } from "react-native"
import { useStyle } from "@hooks"

export const View: React.FC<React.PropsWithChildren<ViewProps>> = (props) => {
    const { view } = useStyle()

    return <RNView
        {...props}
        style={[view, props.style]}
    >{props.children}</RNView>
}