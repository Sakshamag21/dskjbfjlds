const express = require("express");
const router = express.Router();
const users = require("./userSchema");



router.get("/",(req,res)=>{
    console.log("connect");
});

// register user

router.post("/register1",async(req,res)=>{
    // console.log(req.body);
    const {userId,gradesData} = req.body;
    

    if(!userId || !gradesData ){
        res.status(422).json("plz fill the data");
    }

    try {
        
        // const preuser = await users.findOne({email:email});
        // console.log(preuser);

        if(0){
            res.status(422).json("this is user is already present");
        }else{

            const adduser = new users({
                userId,gradesData
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

router.get("/getuser/:userid",async(req,res)=>{
    try {
        console.log(req.params);
        const {userid} = req.params;

        const userindividual = await users.findOne({"userId":{$gte:userid}});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


// // update user data

router.patch("/updateuser/:userid",async(req,res)=>{
    try {
        const {userid} = req.params;

        const updateduser = await users.findOneAndUpdate({"userId":{$gte:userid}},{$set:req.body})

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










