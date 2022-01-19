
var mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
  host:'db-mysql-blr1-08836-do-user-8036869-0.b.db.ondigitalocean.com',
  ///host : 'localhost',
   user: 'doadmin',
  password:'oLPb0Pm6EphQK501',
    database: 'visa',
    port:'25060' ,
    multipleStatements: true
  })




  var mysql = require('mysql')
require('dotenv').config()


const pool = mysql.createPool({
  
  host : 'db-mysql-blr1-84599-do-user-10517489-0.b.db.ondigitalocean.com',
  user: 'doadmin',
  password : '92jtzWjQTRx8Cn6w',
  database: 'fantasyapp',
  port: '25060' ,
  multipleStatements: true
  })



 
module.exports = pool;





  // var mysql = require('mysql')
  // require('dotenv').config()
  
  // const pool = mysql.createPool({
  //   host:'103.117.180.114',
  //   ///host : 'localhost',
  //    user: 'shopsun_shopsun',
  //   password:'Shopsun@321!',
  //     database: 'shopsun_shopsun',
  //     port:'3306' ,
  //     multipleStatements: true
  //   })
  
  
  
  
  // module.exports = pool;

module.exports = pool;