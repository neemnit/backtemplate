const express=require('express')
const app=express()
const mongoose=require('mongoose')
app.set('view engine','ejs')
//conection
mongoose.connect("mongodb://localhost:27017/school")
.then(()=>console.log("mongodb databse connected"))
app.get('/',(req,res)=>{

    let sitename="adidas"
    let searchText="Search Now"
    res.render('index.ejs',{sitename,searchText})
})

app.listen(3000,()=>{
    console.log("server start")
})