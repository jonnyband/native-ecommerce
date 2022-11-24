import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: '100%',
        paddingBottom: 76

    },
    flat:{
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
        fontWeight: '900',
        fontSize: 12,
        marginVertical: 8
    },
    productPrice:{
        fontWeight: '900',
        fontSize: 13
    },
    changeAmount: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 6,
        justifyContent: 'space-around',
        alignItems:'center'
    },
    textPrice: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: '900',
        paddingTop: 10
    },
    finishBtn: {
        position:'absolute',
        backgroundColor:'#141414',
        bottom: 0,
        width: '100%',
        height: 76
    },
    finishText: {
        color:'white',
        paddingVertical: 10,
        textAlign:'center',
        fontWeight: '800',
        fontSize: 16
    },
})