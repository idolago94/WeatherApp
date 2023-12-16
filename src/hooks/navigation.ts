import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationParamsList } from "@types";


export const useAppNavigation = useNavigation<NativeStackNavigationProp<NavigationParamsList>>

type RoutePropType<T extends keyof NavigationParamsList> = RouteProp<NavigationParamsList, T>;
export function useAppRoute<T extends keyof NavigationParamsList>(): RoutePropType<T> {
    return useRoute();
}