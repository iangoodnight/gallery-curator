import axios from "axios"; 

export default {   
  submit: function(data) {
    console.log("API data: ", data);
    return axios.post("/api/submit", data);
  }
};