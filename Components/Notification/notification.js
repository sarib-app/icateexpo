import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  View,
ScrollView,
Pressable,
ImageBackground,
Alert
} from 'react-native';
import styles from './Styles';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useIsFocused, useNavigation } from '@react-navigation/native';
import Colors from '../GlobalStyles/colors';
import notificationIcon from '../../assets/images/notification.png'
import { FlatList } from 'react-native-gesture-handler';

// import BackBtn from '../GlobalStyles/BackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getNotification from '../GlobalCalls/GetNotification';
import GetLocalUser from '../Auth/GetLocalUser';

function Notification() {



const navigation = useNavigation()
const focused = useIsFocused()

  const [notification,setNotification]=useState([])
 
  

useEffect(()=>{
async function getNotif(){

  const getUser = await GetLocalUser()
  if(getUser != null){
    const res = await getNotification(getUser.id)
    if(res != null){
       setNotification(res.data)
    }
  }

}
getNotif()



},[focused])













function Notificationlist({item,index}){
  const [showDetail,setShowDetail]=useState(false)


return(
    <View style={[styles.TrickContainer,{}]}>
  
  
    <View style={{flexDirection:'row',alignItems:"center"}}>
    <View style={styles.IconWrapper}>
    
    <Image source={notificationIcon} style={{width:30,height:30,tintColor:Colors.PrimaryColor,margin:5}}/>

    
    </View>
    
    
    
    <View style={styles.InnerTricks}>
    <Text style={[styles.TextStyle,{color:Colors.PrimaryColor,fontWeight:'bold'}]}>{item.title}</Text>
    <Text style={styles.TextStyle}>{item.body}</Text>
    <Text style={styles.TextStyle}>{item.Idate}</Text>

    </View>
    
    
    </View>
    

   
   

    
    </View>
)
}




return (
    <ScrollView style={styles.Container}>
{/* <BackBtn/> */}

{/* <View style={styles.TrickContainer}>
<Text 
onPress={()=> setIsSelected(1)}
style={[styles.TextStyle,{color:selected===1 ? Colors.FontColorI:Colors.bgIII}]}>1st Refer</Text>
<Text
onPress={()=> setIsSelected(2)}


style={[styles.TextStyle,{color:selected===2 ? Colors.FontColorI:Colors.bgIII}]}>2nd Refer</Text>

</View> */}

<FlatList 
data={notification}
renderItem={({item,index})=>
<Notificationlist  item={item} index={index} 
/>

}
/>
{/* <View
style={{height:200,width:50}}
></View> */}


    </ScrollView>
  )
}
export default Notification;

