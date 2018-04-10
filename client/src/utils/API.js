import axios from "axios"; 

export default {   
  submit: function(data) {
    return axios.post("/api", data);
  },

  add: function(data) {
  	return axios.post("/api/image", data);
  },

  validate: function(data) {
    return axios.post("api/auth", data)
  },

  getArtist: function(id) {
  	return axios.get("/api/" + id);
  },

  getAllArtists: function() {
    return axios.get("/api")
  },

  getMedia: function(username) {
    return axios.get("/api/artists/" + username);
  },

  getArt: function(id) {
  	return axios.get("/api/image/" + id);
  },

  getAllArt: function() {
    return axios.get("/api/gallery/all");
  }
}; 