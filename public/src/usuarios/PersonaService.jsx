import axios from "axios";

export class PersonaServices{
    baseUrl = "http://localhost:8080/h/ya";
    getAll(){
        return axios.get(this.baseUrl). then(res => res.data);
    }
}