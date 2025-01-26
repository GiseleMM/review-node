// import axios from "axios";
const axios=require("axios");

 async function fetchDataAxios() {
    try {
     
  const response = await axios.get("https://api.example.com/data");
  return response.data;   
    } catch (error) {
        console.log("Error",error.message);
    }
}

// let r=await fetchDataAxios();
// console.log(r);

module.exports={fetchDataAxios};