import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonBox:{
        position:"absolute",
        bottom: 0,
        width: 140,
        
    },
    button: {
        flexDirection: "row",
        backgroundColor: 'black',
        paddingHorizontal:8,
        paddingVertical: 10,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        justifyContent:"space-between",
        alignItems:"center",
    },
    text: {
        color: 'white',
        fontSize: 10,
        fontWeight: '600',
        
    }
})