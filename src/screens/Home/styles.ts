import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    container:{
        width: 340,
        alignSelf: 'center',
    },
    cardProduct:{
        alignItems:'center',
        textAlign:'center',
        marginVertical:20,
        marginHorizontal: 10, 
        height: 284,
        width: 150,
        padding: 10,
        backgroundColor:'white',
        borderRadius: 6,
    },
    productImage: {
        height: 140,
        width: '100%',
        resizeMode:'contain',
        borderRadius: 6,
        marginBottom: 8
    },
    productName:{
        color:'black',
        fontWeight: '700',
        height: 38,
        minWidth: 80,
        fontSize: 12,
        backgroundColor:'#f2f2f2',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        alignItems:'center',
        textAlignVertical:'center',
        textAlign: 'center'
    },
    productQuantity: {
        fontWeight: '300',
        fontSize: 10,
        marginVertical: 8
    },
    productPrice:{
        fontWeight: '800',
    },
    cartBtn:{
        position:'absolute',
        bottom: 0,
        width: 150
    }







})