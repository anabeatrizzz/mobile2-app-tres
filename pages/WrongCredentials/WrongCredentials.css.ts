import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#cf1767",
  },
  content: {
    //flex: 1,
    backgroundColor: "#cf1767",
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 250,
    width: 250
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CC9CDF',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TSTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CC9CDF',
    textDecorationLine: 'underline'
  },
  btn: {
    backgroundColor: '#243870',
    width: '90%',
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#c5d0ec'
  }
})

export default styles;