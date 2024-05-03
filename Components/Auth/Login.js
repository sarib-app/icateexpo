import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../GlobalStyles/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CountryCode from './CountryCodes';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (  {

}) => {
  const [Phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [pressed, setPressed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const [countryCod, setcountryCode] = useState("92");
const navigation = useNavigation()

  const handleLogin = (
  
  ) => {
    if (Phone && password) {
      LoginNow();
//       AsyncStorage.setItem("Login","1")
// navigation.navigate("BottomNavigation")
// navigationRester("BottomNavigation")
      // setLoading(true); 
    } else {
      setPressed(true);
    }
  };
  function navigationRester(title) {
    navigation.reset({
      index: 0,
      routes: [{ name: title }],
    });
  }

  function LoginNow() {
    setLoading(true)
    var formdata = new FormData();
    formdata.append('phone_number', countryCod+Phone);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://zhang.alphanitesofts.net/api/login', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.status === '200') {
          AsyncStorage.setItem("Login","1")
          AsyncStorage.setItem("user",JSON.stringify(result.user))
          AsyncStorage.setItem("token",result.token)
          navigation.navigate("BottomNavigation")
          navigationRester("BottomNavigation")

          // ControlLogin()
          setErrorCode()
        } else if (result.status === '401') {
          CatchErrors(result.error, result.message);
        }
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(()=>{
        setLoading(false)
      })
  }

  function CatchErrors(code, message) {
    setErrorCode(code);
    setErrorMessage(message);
  }


function selectedCode(val){
setcountryCode(val)
setShowCode(false)
}

  return (
    <View style={styles.container}>
      <IonIcons name="person-circle" size={80} color="white" />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to continue</Text>
      {errorCode === 'phone' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <View style={styles.inputContainer}>
        <IonIcons 
        onPress={()=> setShowCode(true)}
        name="chevron-down-sharp" size={24} color="white" style={styles.inputIcon} />
        <View style={[styles.input, { borderBottomColor: pressed === true && !Phone ? Colors.danger : 'transparent' ,flexDirection:'row',alignItems:"center"}]}
>
        <Text style={styles.PhoneCode}>{countryCod}</Text>

        <TextInput
          style={{flex:1,color: 'white',
        }}
          placeholder="Phone"
          keyboardType="numeric"
          placeholderTextColor="#999"
          onChangeText={(text) => setPhone(text)}
          value={Phone}
          />
          </View>
      </View>
      {errorCode === 'password' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <View style={styles.inputContainer}>
        <IonIcons name="lock-closed" size={24} color="white" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { borderBottomColor: pressed === true && !password ? Colors.danger : 'transparent', }]}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{loading === true ? 'Loading...' : 'Login'}</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>If you don't have an account, please  
      <Text
      onPress={()=> navigation.navigate("Registration")}
      style={{color:Colors.PrimaryColor,fontSize:15,fontWeight:"bold"}}
      >

      {" "}Sign Up
      </Text>
      
      </Text>
      <CountryCode 
      isVisible={showCode}
      onSelectBank={selectedCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  PhoneCode:{
color:Colors.FontColorI,
fontSize:16,
// marginRight:5,
fontWeight:'bold'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#999',
    marginBottom: 40,
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
  signupText: {
    color: 'white',
    fontSize: 14,
    marginTop: 20,
  },
});

export default Login;
