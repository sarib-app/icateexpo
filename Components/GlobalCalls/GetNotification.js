import React from "react";
async function getNotification(uid){
    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
    try{
const response = await fetch(`https://zhang.alphanitesofts.net/api/get_notifications_by_uid/${uid}`,requestOptions)
const result = await response.json()
console.log(result)
if(result.status === "200"){
    return result
}else{
    return null
}
    }
    catch{
        return null

    }
}
export default getNotification