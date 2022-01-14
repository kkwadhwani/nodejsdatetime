const express = require('express')
const { fchownSync } = require('fs')
const app = express()
const path = require('path')



app.use(express.json())
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs')




//routes


app.get('/',(req, res)=>{
    const todayDate = new Date().getDate()


const yearDate = new Date().getFullYear()

const monthDate = new Date().getMonth()+1
const exactMonthDate = monthDate.length<2?'0'+monthDate:monthDate
console.log(exactMonthDate)

const stringDate =  Date().toString()
    res.render('home', {todayDate, yearDate, exactMonthDate, stringDate})
})



const monthDate = new Date().getMonth()+1
const exactMonthDate = monthDate.length<1?'0'+monthDate:monthDate


 

app.listen(process.env.PORT||3000, ()=>{
    console.log("Server running")
})