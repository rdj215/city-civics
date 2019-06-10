// import axios from "axios"

// export default {
//     getUser: function(id) {
//         return axios.get("/api/user" + id)
//     },

//     saveUser: function(userData) {
//         return axios.post("http:localhost:3001/api/user", userData)
//     }
// };

import axios from "axios"

export default {
   getUser: function(id) {
       return axios.get("http://localhost:3001/api/users" + id)
   },

   saveUser: function(userData) {
       return axios.post("http://localhost:3001/api/users", userData)
   }
};