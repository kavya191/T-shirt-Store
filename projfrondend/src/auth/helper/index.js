import {API} from "../../backend"
//API means: hhtp://localhost:8000/api/

export const signup=user=>{
    //fetch request
    return fetch('${API}/Signup',{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err))
}
export const Signin=user=>{
    return fetch('${API}/Signin',{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err))
}

export const authenticate =(data,next)=>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next();

    }
}

export const Signout=next=>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next();

        return fetch('${API}/signout',{
            method:"GET"
        })
        .then(response => console.log("signout success"))
        .catch(err=>console.log(err))

    }
}
export const isAuthenticated=()=>{
    if(typeof window !== "undefined"){
        return false;
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }else{
        return false;
    }
}