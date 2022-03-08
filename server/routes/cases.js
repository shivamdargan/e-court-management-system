
const express = require('express')
const auth = require('../middleware/auth');
const multer = require('multer')  
const router = new express.Router()
const api_helper = require('../api-helper');
const Case = require('../models/case');
const User = require('../models/user');


function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}


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

         let judges = await User.find({type:"judge"});
         let min = getDistanceFromLatLonInKm(lat,long,judges[0].latitude,judges[0].longitude);
         let finalJudge = judges[0];
         judges.splice(0,1);
         judges.forEach(judge => {
            let d = getDistanceFromLatLonInKm(lat,long,judge.latitude,judge.longitude);
            if(d<min)
            {
              min = d;
              finalJudge = judge;
            }
            else if(d === min)
            {
              if(judge.noOfCases < finalJudge.noOfCases)
              {
                finalJudge = judge;
              }
            }
         });

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
                judgeAssigned: finalJudge._id
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
               judgeAssigned: finalJudge._id,
               images:imagesArray
            }
          )
         }
         
         
    await newCase.save();
    finalJudge.noOfCases +=1;
    await finalJudge.save();  
    res.status(201).send({message:"Case Succesfully Filed",newCase})
    }
    catch (e){
        res.send(e);
    }
})

module.exports = router