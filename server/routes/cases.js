
const express = require('express')
const router = new express.Router()
const api_helper = require('../api-helper');
const Case = require('../models/case');


router.post('/new/case', async(req,res) =>{
    let cnr = ''
    let lat;
    let long;
    var currentTime = new Date()
    let newCase;
    try{
       api_helper.make_API_call(`https://api.opencagedata.com/geocode/v1/json?q=${req.body.location}&key=${process.env.GEOCODER}`)
    .then(response => {
        res.json(response)
         cnr = response.results[0].components.state_code + response.results[0].components.state_district.substring(0,2).toUpperCase() + 0 + Math.floor(1+ Math.random() * 5) + (Math.floor(100000 + Math.random() * 900000)) + currentTime.getFullYear();
         console.log(cnr);
         lat =response.results[0].geometry.lat;
         long = response.results[0].geometry.lng;
    //       newCase = new Case(
    //     {
    //        cnr:cnr,
    //        title:req.body.title,
    //        idRep:req.user._id,
    //        namerep:req.user.name,
    //        nameAccused:req.body.accused,
    //        gender:req.body.gender,
    //        age:req.body.age,
    //        details:req.body.details,
    //        clause:req.body.clause,
    //        phone:req.body.phone,   
    //        location:req.body.location,
    //        latitude:lat,
    //        longitude:long,
    //        dangerousCriminal:req.body.dangerousCriminal,
    //     }
    // )
    //  newCase.save().then(data=>{
    //     console.log(data);
    //  });
    
    })
    .catch(error => {
        res.send(error)
    })


    }
    catch (e){
        res.send(e);
    }

    
    // User.findOne({email: email}, async (err, user) => {
    //     if(user){
    //         res.send({message: "User already registered"});
    //         return ;
    //     }
    //         const newUser = new User(req.body)
    //         try{
    //             await newUser.save()
    //             res.status(201).send({message:"Succesfully Registered",newUser})
    //         }catch(e){
    //             res.status(400).send(e)
    //         }
    // })
  
})

module.exports = router