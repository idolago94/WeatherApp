import { StatusBarProps, StyleProp, TextStyle, ViewStyle, useColorScheme } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';

type UseStyle = {
    isDarkMode: boolean
    statusBar: StatusBarProps,
    view: StyleProp<ViewStyle>
    text: StyleProp<TextStyle>
}
  
export const useStyle = (): UseStyle => {
    const isDarkMode = useColorScheme() === 'dark';

    return {
        isDarkMode,
        statusBar: {
            barStyle: isDarkMode ? 'light-content' : 'dark-content',
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
        },
        view: {
            flex: 1,
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
        },
        text: {
            color: isDarkMode ? Colors.lighter : Colors.darker
        }
    }
}