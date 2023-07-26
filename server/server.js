const express = require("express");
const app = express();

//middle ware
app.use(express.static(`${__dirname}/public`)); // this will give every request an access to public folder

app.listen(4000, () => console.log(`server running on 4000`));

