const express=require("express")

const app=express();

const port=8000;

app.get ("/",(req,res)=>{
    return res.send("Home")
})

const admin=(req,res)=>{
    return res.send("Admin dashboard")
};
const isAdmin=(req,res,next)=>{
    console.log("isAdmin is running");
    next();// costomerized middleware
}

const isLoggedIn=(req,res,next)=>{
    console.log("isLoggedIn");
    next()
}

 app.get("/admin", isAdmin,isLoggedIn,admin)// middleware b/w req,res
 

//   app.get("/admin",(req,res)=>{
//       return res.send("this is admin")
//   })

 app.get("/login",(req,res)=>{
    return res.send("Login Here")
})

app.get("/signup",(req,res)=>{
    return res.send("signin Here")
})
app.get("/signout",(req,res)=>{
    return res.send("You are signed out")
})


  app.listen(port,()=>{
      console.log("Server is up and running");
  })