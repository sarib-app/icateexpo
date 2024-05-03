import React,{useEffect,useState} from 'react';
import {
  StyleSheet,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';


// import SplashScreen from "react-native-splash-screen"; //import SplashScree

import BottomNavigation from './Components/BottomNavigation/BottomNavigation';
import { LogBox } from 'react-native';
import StoreDetailScreen from './Components/StoreDetailScreen/StoreDetailScreen';
import CartDetailScreen from './Components/ProductCart/CartDetailScreen';
import PaymentCheckoutScreen from './Components/PaymentCheckout/PaymentCheckout';
import OrderDetailScreen from './Components/ProductCart/OrderDetailScreen';
import OrderTakenScreen from './Components/OrderTakenScreen/OrderTakenScreen';
import SearchScreen from './Components/Search/SearchScreen';
import ResturantSearchResult from './Components/SearchResult/ResturantSearchResult';
import ProfileDetails from './Components/ProfileDetails/ProfileDetails';
import ChangePassword from './Components/ProfileDetails/ChangePassword';
import HelpCenter from './Components/Help/HelpCenter';
import AboutUs from './Components/App\'sContent/AboutUs';
import Router from './Components/Router/Router';
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Registration';
LogBox.ignoreAllLogs()
const Stack = createStackNavigator();

const App = () => {

const [loggedIn,setLoggedIn]=useState(false)

useEffect(()=>{
  // SplashScreen.hide()

},[])


return( 
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"Router"} screenOptions={{
      headerShown: false
    }}
    >
    <Stack.Screen name="Router" component={Router} />

          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />

    <Stack.Screen name="AboutUs" component={AboutUs} />
    <Stack.Screen name="Registration" component={Registration} />

    <Stack.Screen name="StoreDetailScreen" component={StoreDetailScreen} />
    <Stack.Screen name="Login" component={Login} />

    <Stack.Screen name="PaymentCheckoutScreen" component={PaymentCheckoutScreen} />
    <Stack.Screen name="OrderTakenScreen" component={OrderTakenScreen} />

    <Stack.Screen name="CartDetailScreen" component={CartDetailScreen} />
    <Stack.Screen name="SearchScreen" component={SearchScreen} />

    <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
    <Stack.Screen name="ResturantSearchResult" component={ResturantSearchResult} />
    <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
    <Stack.Screen name="HelpCenter" component={HelpCenter} />



    </Stack.Navigator>
    </NavigationContainer>
    )

};



export default App;




