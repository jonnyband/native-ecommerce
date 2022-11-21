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
        fontSize: 38,
        fontWeight: "200",
        marginTop: 0
    },
    inputBox: {
        marginTop: 180,
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
        color: '#416196',
        fontWeight: '900',
        marginLeft: 4,
        
    }
})