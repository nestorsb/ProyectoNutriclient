const express = require('express')
const { append } = require('express/lib/response')
const routes = express.Router()



//CRUD BASICO

// routes.get('/',(req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         console.log(req)

//         conn.query('SELECT * FROM Clientes', (err, rows)=>{
//             if(err) return res.send(err)

//             res.json(rows);

//         })
//     })
// } )

// routes.post('/',(req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('INSERT INTO Clientes set ?', [req.body], (err, rows)=>{
//             if(err) return res.send(err)

//             res.send('Cliente añadido!')

//         })
//     })
// } )

// routes.delete('/:Id',(req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('DELETE FROM Clientes WHERE Id = ?', [req.params.Id], (err, rows)=>{
//             if(err) return res.send(err)

//             res.send('Cliente borrado!')

//         })
//     })
// } )

// routes.put('/:Id',(req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('UPDATE Clientes set ? WHERE Id = ?', [req.body ,req.params.Id], (err, rows)=>{
//             if(err) return res.send(err)

//             res.send('Cliente actualizado!')

//         })
//     })

// } )



// CLIENTES

    //GEL ALL  
routes.get('/clientes', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        console.log(req)

        conn.query('SELECT * FROM Clientes', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows);

        })
    })
})
    //GET BY ID
routes.get('/clientes/:Id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM Clientes WHERE Id = ?', [req.params.Id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows);
        })
    })
})



module.exports = routes
