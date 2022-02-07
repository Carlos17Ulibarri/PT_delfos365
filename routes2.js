const express = require ('express')
const routes2 = express.Router()

routes2.put('/:id',(req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.sen(err)
        conn.query('UPDATE materias set ? WHERE id_materias = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json('Datos actualizados') 
        })
    })
})

routes2.delete('/:id',(req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.sen(err)
        conn.query('DELETE FROM materias WHERE id_materias = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            
            res.json('Materia borrado') 
        }) 
    })
})
module.exports = routes2