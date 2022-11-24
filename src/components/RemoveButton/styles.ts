import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonBox:{
        position:"absolute",
        bottom: 0,       
    },
    button: {
        flexDirection: "row",
        backgroundColor: '#d13d3d',
        paddingHorizontal:8,
        paddingVertical: 10,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        justifyContent:"space-between",
        alignItems:"center",
        marginTop: 6
    },
    text: {
        color: 'white',
        fontSize: 10,
        width: 120,
        fontWeight: '600',
        paddingHorizontal: 6
    }
})