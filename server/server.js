const express = require("express")
const app = express()
const port = 8000

const {faker} = require("@faker-js/faker")

class User {
    constructor(){
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.password = faker.internet.password();
    }
}
    console.log(new User());

class Company {
    constructor (){
        this.id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}
    console.log(new Company())

    // make sure theese lines are above any app.get or app.post code blocks 
    app.use ( express.json () );
    app.use (express.urlencoded({extended:true}));

//ROUTES + controller
//getAll, getOne, post, put, delete
app.get ("/api", (req, res)=>{
    res.json(users)
})
//getOne
app.get("/api/users/:id", (req, res)=>{
    const id = req.params.id
    res.json(users[id])
})

//createUser - post 
app.post("/api/users", (req, res)=>{
    const newUser = req.body
    users.push(newUser)
    res.json({status:"ok"})
})


//update - getOne + post 
app.put("/api/users/:id", (req, res)=>{
    const id= req.params.id
    users[id] = req.body
    res.json(users[id])
})


// delete 
app.delete("/api/users/:id", (req, res) =>{
    const id = req.params.id
    users.splice(id, 1)
    res.json({status: "ok"})
})


app.get("/api", (req, res)=>{
    res.json("Hello WOld")
})


app.get("/api")

// this needs to below the other code blocks
app.listen( 8000, () => console.log(`Listening on port: 8000`) );

