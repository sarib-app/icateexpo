import React from "react";
import { Alert } from "react-native";
async function CheckJGK(uid){
    const formdata = new FormData();
formdata.append("user_id", uid);
    const requestOptions = {
        method: "POST",
  body: formdata,
  redirect: "follow"
      };
      
    try{
const response = await fetch(`https://zhang.alphanitesofts.net/api/checkJGK`,requestOptions)
const result = await response.json()
console.log(result)
if(result.status === "200"){
    Alert.alert("Success","You have successfully collected your daily login reward!")
    // return "200"

}else{
     Alert.alert("Unsuccessfull",result.message)
    //  return null
}
    }
    catch{
        Alert.alert("Unsuccessfull","Something went wrong please try again later")

        // return null

    }
}
export default CheckJGK