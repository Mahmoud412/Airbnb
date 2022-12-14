import { StyleSheet} from 'react-native'



const styles = StyleSheet.create({
    container:{
        margin:20,
    },
    image:{
        width:'100%',
        aspectRatio:3/2,
        resizeMode:'cover',
        borderRadius:10,
    },
    bedrooms:{
        marginVertical:10,
        color:'#5b5b5b'
    },
    description:{
        fontSize:16,
        lineHeight:26,

    },
    prices:{
        fontSize:16,
    },
    oldPrice:{
        color:'#5b5b5b',
        textDecorationLine:'line-through',
    
    },
    newPrice:{
        fontWeight:'bold'
    },
    totalPrice:{
        color:'#5b5b5b',
        textDecorationLine:'underline',
        marginVertical:10,
    
    },
    longDescription:{
        fontSize:16,
        lineHeight:24,
        marginVertical:20
    }
})

export default styles
