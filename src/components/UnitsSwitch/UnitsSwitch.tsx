import { Text, View } from "@components/common"
import React, { useMemo } from "react";
import { StyleSheet, Switch } from "react-native"
import { Colors, TEMPRATURE_UNIT } from "@constants";
import { useStrings } from "@hooks";
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from "@store/types";
import { setUnit } from "@store/reducers";

const SWITCH_TRACK_COLORS = { false: Colors.gray, true: Colors.blue }

export const UnitsSwitch = () => {
    const { unit } = useSelector((state: IStore) => state.weather)
    const dispatch = useDispatch()
    const strings = useStrings()

    const enabled = useMemo(() => (unit === TEMPRATURE_UNIT.IMPERIAL), [unit])

    const toggleSwitch = () => {
        dispatch(setUnit(unit === TEMPRATURE_UNIT.IMPERIAL ? TEMPRATURE_UNIT.STANDARD : TEMPRATURE_UNIT.IMPERIAL))
    };

    return <View style={styles.container}>
        <Text style={styles.text}>{strings.international_unit}</Text>
        <Switch
            style={styles.switch}
            trackColor={SWITCH_TRACK_COLORS}
            thumbColor={Colors.white}
            ios_backgroundColor={Colors.gray}
            onValueChange={toggleSwitch}
            value={enabled}
        />
        <Text style={styles.text}>{strings.imperial_unit}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
    },
    switch: {
    },
    text: {
        fontWeight: 'bold',
        marginHorizontal: 7,
        fontSize: 12
    }
})