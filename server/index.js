const express = require("express")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const {MongoClient} = require("mongodb")

const app=express()

const PORT = 5000

let dbUrl = "mongodb://127.0.0.1:27017"
let dbName = "openctf"
let dbclient

MongoClient.connect(dbUrl, (err,result) => {
	dbclient = result.db(dbName)
	app.listen(PORT)
})

app.use(express.json())
app.use(cors())

//test
app.get("/",(req,res) => {
	res.send("Server running")
})

//create account
app.post("/newaccount", async (req,res) => {
	let count = await dbclient.collection('users').countDocuments({username: req.body.username})
	if(count!==0){
		res.status(400).send("User already exists")
		return
	}else{
		hashedPassword = await bcrypt.hash(req.body.password, 8)
		dbclient.collection('users').insertOne({...req.body, isAdmin: "false", password: hashedPassword})
		res.status(200).send("Account created")
	}
})

//login
app.post("/login", async (req,res) => {
	const username = req.body.username
	const password = req.body.password
	const user = await dbclient.collection('users').findOne({ username })
	if(!user){
		res.status(404).send("User not found")
		return
	}
	const isCorrect = await bcrypt.compare(password, user.password)
	if(!isCorrect){
		res.status(401).send("Wrong password")
	}else{
		res.status(200).send(user.username)
	}
})

console.log(`Server running on http://localhost:${PORT}`)
