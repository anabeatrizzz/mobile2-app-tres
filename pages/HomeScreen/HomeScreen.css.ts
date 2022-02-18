import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7bad5'
  },

  gifStyle: {
    width: 200,
    height: 200
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 15,
    height: 30,
    padding: '1%'
  },

  btn: {
    backgroundColor: '#EA428B',
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10
  },

  btnTxt: {
    fontSize: 15,
    color: "#FFF",
    fontWeight: 'bold'
  },

  signUp: {
    backgroundColor: '#243870',
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  signUpTxt: {
    color: "#FFF",
    fontWeight: 'bold'
  },

  firstTipTxt: {
    fontWeight: 'bold',
    color: '#243870'
  },

  secondTipTxt: {
    color: '#243870'
  }
})

export default styles;