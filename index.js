const express = require("express");
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    fs.writeFileSync('./teste.json', JSON.stringify({ data: "KKKKKKKK" }, null, '\t'))
    res.json({ data: "Hello World!!!", errors: null, folders: fs.readdirSync('./') })
})

app.listen(port, () => {
    console.info("Aplicação rodando na porta 3000")
})
