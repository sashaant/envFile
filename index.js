const { development, production, testing } = require('./config');

// Use the desired configuration
const config = testing; // Change this line to switch between configurations

console.log(`KEY1: ${config.KEY1}, KEY2: ${config.KEY2}`);


// if (process.env.NODE_ENV) {
//     require("dotenv").config({
//         path:`${__dirname}/.env.${process.env.NODE_ENV}`,
//     });
//     }else{
//     require("dotenv").config();
//     }
    
//     console.log(`${__dirname}/.env.${process.env.NODE_ENV}`);
//     console.log(process.env.PROD_ENV);
//     console.log(process.env.TEST_NUMBER);
   
    