import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CitiesListScreen, CityDetailsScreen } from "@screens";
import { ScreenNames } from "@constants";
import { useStrings } from "@hooks";

const Stack = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {
    const strings = useStrings()

    return (
        <Stack.Navigator initialRouteName={ScreenNames.CITIES}>
            <Stack.Screen
                name={ScreenNames.CITIES}
                component={CitiesListScreen}
                options={{ title: strings.cities_header_screen }}
            />
            <Stack.Screen
                name={ScreenNames.CITY_DETAILS}
                component={CityDetailsScreen}
                options={{ title: strings.city_details_header_screen }}
            />
        </Stack.Navigator>
    )
}