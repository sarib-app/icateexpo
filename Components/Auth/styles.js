import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../GlobalStyles/colors';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 20,
    },
    errorText: {
      fontSize: 12,
      color: Colors.danger,
      alignSelf: 'flex-start',
      marginLeft: 35,
      marginBottom: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    inputIcon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 40,
      backgroundColor: '#333',
      color: 'white',
      borderRadius: 5,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
    },
    button: {
      backgroundColor: '#B7DFA1',
      paddingVertical: 14,
      paddingHorizontal: 60,
      borderRadius: 30,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    loginText: {
      color: 'white',
      fontSize: 14,
      marginTop: 20,
    },
    phoneCode: {
      color: Colors.FontColorI,
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 5,
    },
  });
  
  export default styles