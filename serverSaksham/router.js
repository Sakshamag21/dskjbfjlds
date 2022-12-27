const express = require("express");
const router = express.Router();
const users = require("./userSchema");



router.get("/",(req,res)=>{
    console.log("connect");
});

// register user

router.post("/register1",async(req,res)=>{
    // console.log(req.body);
    const {userId,gradesData,email} = req.body;
    

    if(!userId || !gradesData ){
        res.status(422).json("plz fill the data");
    }

    try {
        
        // const preuser = await users.findOne({email:email});
        // console.log(preuser);

        if(0){
            res.status(422).json("this is user is already present");
        }else{
            console.log(userId,gradesData,email)
            const adduser = new users({
                userId,gradesData,email
                // name, email, work, add, mobile, desc, age
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log("adduser",adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})


// get userdata

// router.get("/getdata",async(req,res)=>{
//     try {
//         const userdata = await users.find();
//         res.status(201).json(userdata)
//         console.log(userdata);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// })

// // get individual user

router.get("/getuser/:email",async(req,res)=>{
    try {
        console.log(req.params);
        const {email} = req.params;
        console.log(email,"email textx");
        // const preuser = await users.findOne({email:email})

        const userindividual = await users.findOne({email:email});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


// // update user data

router.patch("/updateuser/:email",async(req,res)=>{
    try {
        const {email} = req.params;
        console.log(email,"update")

        const updateduser = await users.findOneAndUpdate({email:email},{$set:req.body})

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})


// // delete user
// router.delete("/deleteuser/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const deletuser = await users.findByIdAndDelete({_id:id})
//         console.log(deletuser);
//         res.status(201).json(deletuser);

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })




module.exports = router;










