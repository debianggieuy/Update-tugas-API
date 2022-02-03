const express = require("express")
const app = express()    

// set to read a request from JSON format

app.use(express.json())
 
app.post("/datasiswa", (request, response) => {
 let data=[
        {nis: 101, nama: "Millie", alamat: "Malang"},
        {nis: 102, nama: "Dylan", alamat: "Bandung"},
        {nis: 103, nama: "Zayn", alamat: "Bandunvg"},
        {nis: 104, nama: "Harry", alamat: "Bogor"},
        {nis: 105, nama: "Timmmy", alamat: "Surabaya"},
        {nis: 106, nama: "Finn", alamat: "Solo"},
        {nis: 107, nama: "Louis", alamat: "Jakarta"},
        {nis: 108, nama: "Noah", alamat: "Malang"},
        {nis: 109, nama: "Debi", alamat: "Malang"},
        {nis: 110, nama: "Tom", alamat: "Surabaya"}
    
 ]
        let hasil = []
        let jumlah=0;

        for(let i= 0; i< data.length; i++){
            if (keyword == data[i].nis || keyword == data[i].nama || keyword == data[i].alamat) {
                jumlah_data += 1
                hasil.push(
                    data[i]
                )
            }
        }
        return response.json({
            "Jumlah Data" : jumlah_data,
            "Data " : hasil
       
        })
        
    

    })
  
    


app.listen(8000, () => {
console.log('Server run at port 8000');
})




