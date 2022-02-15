import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7bad5'
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 250,
    height: 250
  },

  TSTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EA428B',
    textDecorationLine: 'underline'
  },

  txt: {
    color: '#EA428B',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btn: {
    backgroundColor: '#243870',
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  btnTxt: {
    color: '#c5d0ec',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default styles;