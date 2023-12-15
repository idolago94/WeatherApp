import React from "react";
import { TouchableOpacity } from "react-native";
import SvgUri, { SvgUriProps } from 'react-native-svg-uri';

type Props = SvgUriProps & {
    onPress?: () => void
}

export const IconButton: React.FC<Props> = (props) => (
    <TouchableOpacity onPress={props.onPress ?? (() => { console.warn("IconButton: not get onPress function!") })}>
        <SvgUri {...props} />
    </TouchableOpacity>
)