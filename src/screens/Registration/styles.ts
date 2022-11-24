import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 64 : 50,
        paddingHorizontal: 24,
        alignItems: 'center',
    },
    title: {
        fontSize: 38,
        fontWeight: "200",
        marginTop: 60,
        marginBottom: 80,
        maxWidth: '80%',
        textAlign:"center"
    },
    boxForm: {
       marginBottom: 40
    },
    boxLogin: {
        position: "relative",
        top: 80,
        height: 30,
        flexDirection:"row",
        textAlignVertical:"center",
    },
    login: {
        height: 30,
        color: '#097e7e',
        fontWeight: '900',
        marginLeft: 4,
    }

})