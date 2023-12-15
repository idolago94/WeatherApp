import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CitiesListScreen, CityDetailsScreen } from "@screens";
import { ScreenNames } from "@constants";

const Stack = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {

    return (
        <Stack.Navigator initialRouteName={ScreenNames.CITIES}>
            <Stack.Screen name={ScreenNames.CITIES} component={CitiesListScreen} />
            <Stack.Screen name={ScreenNames.CITY_DETAILS} component={CityDetailsScreen} />
        </Stack.Navigator>
    )
}