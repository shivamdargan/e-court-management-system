
const express = require('express')
const router = new express.Router()
const api_helper = require('../api-helper');



router.post('/new/case', async(req,res) =>{
    let cnr = ''
    try{
       api_helper.make_API_call(`https://api.opencagedata.com/geocode/v1/json?q=${req.body.location}&key=${process.env.GEOCODER}`)
    .then(response => {
        res.json(response)
         cnr = response.results[0].components.state_code + response.results[0].components.state_district.substring(0,2).toUpperCase();
         
        console.log(cnr);
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