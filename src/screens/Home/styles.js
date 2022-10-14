import {StyleSheet , Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    justifyContent:'center',
    
  },
  title:{
    fontSize:60,
    fontWeight:'bold',
    color:'white',
    width:'50%',
    marginLeft:20
  },
  button:{
    backgroundColor:'#fff',
    width:200,
    marginLeft:25,
    marginTop:20,
    height:40,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    fontSize:16,
    fontWeight:'bold'
  },
  searchButton:{
    backgroundColor:'#fff',
    width: Dimensions.get('screen').width - 20,
    height:60,
    borderRadius:30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:50,
    zIndex:100,
    marginHorizontal:10,
    top:20
  },
  searchButtonText:{
    fontSize:16,
    fontWeight:'bold'
  },
});

export default styles;
