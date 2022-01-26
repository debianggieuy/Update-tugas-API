// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

// setting agar bisa membaca data request dg format json
app.use(express.json())

// first endpoint: decimal
app.post("/convert/decimal/:desimal", (request, response) => {
    let desimal = request.params.desimal

    let bin = (100).toString(2);      // "1100100"
    let oct = (100).toString(8);      // "144"
    let hex = (100).toString(2);      // "1100100"

    return response.json({
        decimal: desimal,
        result: {
            Binary: bin,
            Octal: oct,
            Hexadecimal: hex
        }
    })
})



// endpoint kedua
app.post("/binary",(request, response) => {
    let binary = request.body.binary

    let decimal = parseInt(binary, 2);
    let octal = parseInt(binary, 2).toString(8);
    let hexadecimal = parseInt(number, 2).toString(16).toUpperCase();

    return response.json({
        decimal: decimal,
        octal: octal,
        hexadecimal: hexadecimal
    })
})

// endpoint ketiga
app.post("/octal",(request, response) => {
    let octal = request.body.octal

    let decimal = parseInt(octal,8);
    let binary = decimal.toString(2);
    let hexadecimal = decimal.toString(16);

    return response.json({
        decimal: decimal,
        binary: binary,
        hexadecimal: hexadecimal
    })
})





// endpoint keempat
app.post("/hexadecimal",(request, response) => {
    let hexadecimal = request.body.hexadecimal

    let decimal = parseInt(hexadecimal,16);
    let binary = decimal.toString(2);
    let octal = decimal.toString(8);

    return response.json({
        decimal: decimal,
        binary: binary,
        octal: octal
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})
