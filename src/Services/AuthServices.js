
// import jwt_decode from "jwt-decode";
import { APIS, APIuser } from "./APIS";
import GenericServices from "./GenericServices";

class AuthServices extends GenericServices{
    constructor(baseAPI){
        super(baseAPI);
    }
    forgot = (email) => {
        return new Promise ((resolve,reject)=>{
            this.post(APIS.forgot,{email}).then((data)=>{
                // localStorage.setItem("token",data.token)
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    };
    reset = (otp, password) => {
        return new Promise ((resolve,reject)=>{
            this.post(APIS.reset,{otp, password}).then((data)=>{
                // localStorage.setItem("token",data.token)
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    };
    login = (email ,password) => {
        return new Promise ((resolve,reject)=>{
            this.post(APIS.login,{email, password}).then((data)=>{
                // localStorage.setItem("token",data.token)
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    };

    register = (email,password) => {
        return new Promise ((resolve,reject)=>{
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
            this.post(APIS.signup,formData).then((data)=>{
                // localStorage.setItem("token",data.token)
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    }

    logOut = ()=>{
        localStorage.clear();
        window.location.reload();
        window.location.href="/";
    }
    
    isLogged = ()=>{
        return localStorage.getItem("token")? true : false ;
    }

    updateIntituePhoto = (files) => {
        let formData = new FormData();
        formData.append("file", files);
        return new Promise((resolve, reject) => {
          this.post(`${links.userInstituePhoto}`, formData)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
      }
    // isAdmin = ()=>{
        
    //     let token = localStorage.getItem("token");
    //      if(!token)
    //         return false;
        
    //     let decoded = jwt_decode(token);
    //     if(decoded.role == "admin")
    //         return true;

    //     return false;
    // }
}

let authServices = new AuthServices(APIuser);
export default authServices;