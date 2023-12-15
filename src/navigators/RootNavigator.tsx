import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CitiesListScreen, CityDetailsScreen } from "@screens";
import { GlobalStyles, ScreenNames } from "@constants";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {

    return (
        <SafeAreaView style={GlobalStyles.flex1}>
            <Stack.Navigator initialRouteName={ScreenNames.CITIES}>
                <Stack.Screen name={ScreenNames.CITIES} component={CitiesListScreen} />
                <Stack.Screen name={ScreenNames.CITY_DETAILS} component={CityDetailsScreen} />
            </Stack.Navigator>
        </SafeAreaView>
    )
}