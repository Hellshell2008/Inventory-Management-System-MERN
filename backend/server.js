require("dotenv").config({

});
const { PUBLIC_DATA } = require("./constant");
const app = require("./src/app");
const { ConnectDB } = require("./src/config/db.config");

ConnectDB();

app.listen(PUBLIC_DATA.port,()=>{
    console.log(`The App is listening at http://localhost:${PUBLIC_DATA.port}`);
})

// --views