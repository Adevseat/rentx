import "reflect-metadata"
import express from "express"

import "./database"

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
  res.end('<H1>WELCOME</H1>')
})



app.listen(3000, () => console.log("App is running in PORT: 3000!"))