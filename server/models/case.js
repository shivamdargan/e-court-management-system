const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    cnr:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    idRep:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    nameRep:{
        type: String,
        required: true
    },
    nameAcc:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    },
    details:{
        type: String,
        required: true
    },
    clause:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    location:{
        type:String,
        required:false,
    },
    latitude:
    {
        type:String,
        required:false,
    },
    longitude:
    {
        type:String,
        required:false,
    },
    images:[
        {
            type: String,
            required: false
        }
    ],
    lastHearingDate:{
        type: Date,
        required: false
    },
    // dangerousCriminal:{
    //     type: String,
    //     required: true
    // },
});

const Case = mongoose.model('Case', caseSchema);
module.exports = Case;