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
    nameReporter:{
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
        required: false
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
    ]
});

const Case = mongoose.model('Case', caseSchema);
module.exports = Case;