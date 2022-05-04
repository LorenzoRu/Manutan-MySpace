const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res) => {
    res.send({message: 'Server is running'});
})

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})