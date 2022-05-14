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



//ESPECIALISTAS

    //Log in
routes.post('/login/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM `especialistas` WHERE Usuario = '" + req.body.Usuario + "' AND Contraseña = '" + req.body.Contraseña + "';", (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows);
        })
    })
} )

    //register
routes.post('/register/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("INSERT INTO `especialistas` (Nombre, Apellidos, Usuario, Contraseña, Activo, Telefono, Email) VALUES ('"+ req.body.Nombre +"', '"+ req.body.Apellidos +"', '"+ req.body.Usuario +"', '"+ req.body.Contraseña +"', '"+ req.body.Activo +"', '"+ req.body.Telefono +"', '"+ req.body.Email +"');", (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows);
        })
    })
} )

// CLIENTES
    //GUARDAR CLIENTE
routes.post('/nuevocliente/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("INSERT INTO `clientes` (`Id`, `Nombre`, `Apellidos`, `Sexo`, `Telefono`, `Email`, `Poblacion`, `Codigopostal`, `Direccion`, `NumConsultas`, `Enfermedad`, `DescEnfermedad`, `Medicacion`, `Descripcionmed`, `Fechanac`, `Informacionadd`, `Nacionalidad`, `Situacionlaboral`, `Fechacreacion`) VALUES (NULL,'"+ req.body.Nombre +"', '"+ req.body.Apellidos +"', '"+ req.body.Sexo +"', '"+ req.body.Telefono +"', '"+ req.body.Email +"', '"+ req.body.Poblacion +"', '"+ req.body.Email +"','"+ req.body.Codigopostal +"','"+ req.body.Direccion +"','"+ req.body.NumConsultas +"','"+ req.body.Enfermedad +"','"+ req.body.DescEnfermedad +"','"+ req.body.Medicacion +"','"+ req.body.Descripcionmed +"','"+ req.body.Fechanac +"','"+ req.body.Informacionadd +"','"+ req.body.Nacionalidad +"','"+ req.body.SituacionLaboral +"','"+ req.body.Fechacreacion +"');", (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows);
        })
    })
} )

    //MODIFICAR CLIENTE
    
routes.put('modificarcliente/:Id',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE `clientes` set ? WHERE Id = ?', [req.body ,req.params.Id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Cliente actualizado!')

        })
    })

    //GET ALL  
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
