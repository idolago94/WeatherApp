import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    flex1: { flex: 1 },
    center: { alignItems: 'center', justifyContent: 'center' },
    flexGrow: { flexGrow: 1 }
})

const {
    flex1,
    center,
    flexGrow
} = styles

export const GlobalStyles = {
    flex1,
    center,
    flexGrow
}