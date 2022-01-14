const schema = new Schema({
    timeStamp: { 
        type: Date,
        default:new Date().now()
     },
     
     threatType: { 
         type: String,
     },
     targetEndpoint: { 
         type: String,
     },
     targetIP: { 
        type: String,
    },
     targetIP: { 
        type: String,
    },
     

  });

  const express = require("express");
  express.app