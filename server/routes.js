const express = require("express");
const router = express.Router();
const users = require("./userSchema");

router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,password} = req.body;

    if(!name || !password){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await users.findOne({name:name});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new users({
                name,password
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})
module.exports = router;
