const express = require('express');
const app = express();
const port = process.env.PORT || 8900;
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));


//Start the server
app.listen(port,()=>{
    console.log(`Open web app at http://localhost:${port}`)
})