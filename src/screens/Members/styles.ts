import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "ios" ? 64 : 50, 
        flex: 1,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: '300',
        marginBottom: 80
    },
    cardMember: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:'space-between',
        paddingHorizontal: 10,
        paddingVertical: 18,
        borderRadius: 6,
        marginBottom: 20,
        backgroundColor: '#f2f2f2'
    },
    nameAndIcon:{
        flexDirection: 'row'
    },
    iconMember: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 10
    },
    nameText:{
        fontSize: 18,
        fontWeight: '500'
    },
    descriptionText: {
        fontSize: 12,
        fontWeight:'300'
    },
    boxSocialIcons:{
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 84
    }
})