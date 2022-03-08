
const express = require('express')
const auth = require('../middleware/auth');
const multer = require('multer')  
const router = new express.Router()
const api_helper = require('../api-helper');
const Case = require('../models/case');

const caseImage = multer({
  limits:{
      fileSize:3000000
  },
  fileFilter(req,file,cb){
      if(!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
          return cb(new Error('This is not a correct format of the file'))

      cb(undefined,true)
  }
})

router.post('/new/case', auth ,caseImage.array('caseImage',3), async(req,res) =>{
    const imagesArray = []
    let cnr = ''
    let lat;
    let long;
    console.log(req.user._id);
    var currentTime = new Date()
    let newCase;
    try{
      response = await api_helper.make_API_call(`https://api.opencagedata.com/geocode/v1/json?q=${req.body.location}&key=${process.env.GEOCODER}`)
    // .then(response => {
        // res.json(response)
         cnr = response.results[0].components.state_code + response.results[0].components.state_district.substring(0,2).toUpperCase() + 0 + Math.floor(1+ Math.random() * 5) + (Math.floor(100000 + Math.random() * 900000)) + currentTime.getFullYear();
         console.log(cnr);
         lat =response.results[0].geometry.lat;
         long = response.results[0].geometry.lng;
         if(req.files == undefined)
         {
            newCase = new Case(
              {
                cnr:cnr,
                title:req.body.title,
                idRep:req.user._id,
                nameRep:req.user.name,
                nameAccused:req.body.nameAccused,
                gender:req.body.gender,
                age:req.body.age,
                details:req.body.details,
                clause:req.body.clause,
                phone:req.body.phone,   
                location:req.body.location,
                latitude:lat,
                longitude:long,
                dangerousCriminal:req.body.dangerousCriminal,
              }
            )
         }
         else
         {
          req.files.forEach(element => imagesArray.push(element.buffer))
          newCase = new Case(
            {
               cnr:cnr,
               title:req.body.title,
               idRep:req.user._id,
               nameRep:req.user.name,
               nameAccused:req.body.nameAccused,
               gender:req.body.gender,
               age:req.body.age,
               details:req.body.details,
               clause:req.body.clause,
               phone:req.body.phone,   
               location:req.body.location,
               latitude:lat,
               longitude:long,
               dangerousCriminal:req.body.dangerousCriminal,
               images:imagesArray
            }
          )
         }
         
         
    
    await newCase.save();
    res.status(201).send({message:"Case Succesfully Filed",newCase})
    }
    catch (e){
        res.send(e);
    }
})

module.exports = router