import axios from "axios";
export default axios.create({
    //baseURL:"http://localhost:8000/api/",
    baseURL:"https://artestsolutions.com/reactbackend/public/api/",
    headers:{
        "Content-Type":"application/json"
    }
})