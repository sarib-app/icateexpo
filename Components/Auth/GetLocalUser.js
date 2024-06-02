import AsyncStorage from "@react-native-async-storage/async-storage";
async function GetLocalUser (){
try{
  const user = await AsyncStorage.getItem("user")
  const ParsedUser= JSON.parse(user)
  if(ParsedUser){
    return ParsedUser
  }
  else{
    return null
  }
}catch{
    return null

}
}
export default GetLocalUser