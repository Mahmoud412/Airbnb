import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  textAdults: {
    fontWeight: 'bold',
  },
  textAge: {
    color: '#8d8d8d',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#676767',
  },
  textValue: {
    marginHorizontal: 15,
    fontSize: 16,
  },
  textSign:{
    fontSize:20,
    color:'#474747'
  }
});

export default styles;
