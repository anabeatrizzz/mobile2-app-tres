import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c5d0ec"
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  img: {
    width: 250,
    height: 250
  },

  TSTxt: {
    color: '#243870',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#243870',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btn: {
    backgroundColor: '#EA428B',
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  btnTxt: {
    fontSize: 15,
    color: '#fce8f1',
    fontWeight: 'bold'
  }
})

export default styles;