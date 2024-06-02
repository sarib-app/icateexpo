import React from "react";
async function getStores(){
    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
    try{
const response = await fetch(`https://zhang.alphanitesofts.net/api/fetch_all_stores`,requestOptions)
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
export default getStores