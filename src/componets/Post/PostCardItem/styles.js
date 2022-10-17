import { StyleSheet} from 'react-native'



const styles = StyleSheet.create({
    container:{
       height:120,
       padding:5,
    },
    innercontainer:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        overflow:'hidden'

    },
    image:{
        height:'100%',
        aspectRatio:1,
        resizeMode:'cover',
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
    
    }
})

export default styles
