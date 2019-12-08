const express = require('express');
const port = process.env.PORT || 3001;
const cors = require('cors');
const app = express();



// let corsConfig = {
//     origin: "*"
// }
app.use(cors());



app.use(express.json());


app.use(express.static(__dirname + '/'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

