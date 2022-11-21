import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textInput: {
        borderRadius: 6,
        borderColor: 'black',
        borderWidth: 0.85,

        paddingLeft: 10,
        paddingRight: 50,
       
        width: 280,
        height: 42,
        alignContent:"flex-start",
        marginBottom: 24,
    },

    text: {
        fontSize: 16,
        fontWeight: "500",
        textAlignVertical:"center",
    },
    secureView: {
        width: 280,
        height: 42,
        justifyContent: "center",
        flexDirection: 'row',
    },
    eyeIcon:{
        alignSelf:'center',
        position: 'absolute',
        right: 18,
    }
})