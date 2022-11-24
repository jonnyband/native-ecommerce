import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    
    container:{
        paddingTop: Platform.OS === "ios" ? 64 : 50, 
        flex: 1,
        paddingHorizontal: 24,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        fontSize: 39,
        fontWeight: "200",
    },
    inputBox: {
        marginTop: 80,
        marginBottom: 40
    },
    boxCreateAcc: {
        position: "relative",
        top: 90,
        height: 30,
        flexDirection:"row",
        textAlignVertical:"center",
    },
    createAcc: {
        height: 30,
        color: '#097e7e',
        fontWeight: '900',
        marginLeft: 4,
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 50
    }
})